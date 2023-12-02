const completion: Fig.Spec = {
  name: "netappfiles",
  description: "Manage Azure NetApp Files (ANF) Resources",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure NetApp Files (ANF) Account Resources",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new Azure NetApp Files (ANF) account. Note that active directories are added using the subgroup commands",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--encryption",
              description:
                "Argument 'encryption' has been deprecated and will be removed in a future release. Use '--key-source' instead. This argument will be deprecated, please use --key-source instead",
              args: { name: "encryption" },
            },
            {
              name: "--identity-type",
              description: "The identity type",
              args: {
                name: "identity-type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned",
                  "UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--key-name",
              description: "The name of KeyVault key",
              args: { name: "key-name" },
            },
            {
              name: "--key-source",
              description: "The encryption keySource (provider)",
              args: {
                name: "key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: ["--key-vault-uri", "-v"],
              description: "The Uri of KeyVault",
              args: { name: "key-vault-uri" },
            },
            {
              name: "--keyvault-resource-id",
              description: "The resource ID of KeyVault",
              args: { name: "keyvault-resource-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
            {
              name: ["--user-assigned-identity", "-u"],
              description:
                "The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has UserAssigned. It should match key of identity.userAssignedIdentities",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified ANF account",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List ANF accounts by subscription or by resource group name",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "renew-credentials",
          description:
            "Renew identity credentials that are used to authenticate to key vault, for customer-managed key encryption. If encryption.identity.principalId does not match identity.principalId, running this operation will fix it",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the specified ANF account",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Set/modify the tags for a specified ANF account",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--encryption",
              description:
                "Argument 'encryption' has been deprecated and will be removed in a future release. Use '--key-source' instead. Encryption settings",
              args: { name: "encryption" },
            },
            {
              name: "--identity-type",
              description: "The identity type",
              args: {
                name: "identity-type",
                suggestions: [
                  "None",
                  "SystemAssigned",
                  "SystemAssigned",
                  "UserAssigned",
                  "UserAssigned",
                ],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key-name",
              description: "The name of KeyVault key",
              args: { name: "key-name" },
            },
            {
              name: "--key-source",
              description: "The encryption keySource (provider)",
              args: {
                name: "key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: ["--key-vault-uri", "-v"],
              description: "The Uri of KeyVault",
              args: { name: "key-vault-uri" },
            },
            {
              name: "--keyvault-resource-id",
              description: "The resource ID of KeyVault",
              args: { name: "keyvault-resource-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
            {
              name: ["--user-assigned-identity", "-u"],
              description:
                "The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has UserAssigned. It should match key of identity.userAssignedIdentities",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a account operation",
          options: [
            {
              name: ["--account-name", "--name", "-a", "-n"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
          name: "ad",
          description:
            "Manage Azure NetApp Files (ANF) Account active directories",
          subcommands: [
            {
              name: "add",
              description: "Add an active directory to the account",
              options: [
                {
                  name: "--dns",
                  description:
                    "Comma separated list of DNS server IP addresses for the Active Directory domain",
                  args: { name: "dns" },
                  isRequired: true,
                },
                {
                  name: "--domain",
                  description: "Name of the Active Directory domain",
                  args: { name: "domain" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description:
                    "Plain text password of Active Directory domain administrator",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--smb-server-name",
                  description:
                    "NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes. Must be 10 characters or less",
                  args: { name: "smb-server-name" },
                  isRequired: true,
                },
                {
                  name: "--username",
                  description:
                    "Username of Active Directory domain administrator",
                  args: { name: "username" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ad-name",
                  description:
                    "Name of the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "ad-name" },
                },
                {
                  name: "--administrators",
                  description:
                    "Users to be added to the Built-in Administrators active directory group. A space separated string of unique usernames without domain specifier",
                  args: { name: "administrators" },
                },
                {
                  name: "--aes-encryption",
                  description:
                    "If enabled, AES encryption will be enabled for SMB communication",
                  args: {
                    name: "aes-encryption",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-local-ldap-users",
                  description:
                    "If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes",
                  args: {
                    name: "allow-local-ldap-users",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--backup-operators",
                  description:
                    "Users to be added to the Built-in Backup Operator active directory group. A space separated string of unique usernames without domain specifier",
                  args: { name: "backup-operators" },
                },
                {
                  name: "--encrypt-dc-conn",
                  description:
                    "If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted",
                  args: {
                    name: "encrypt-dc-conn",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--group-dn",
                  description:
                    "This specifies the group DN, which overrides the base DN for group lookups",
                  args: { name: "group-dn" },
                },
                {
                  name: "--group-filter",
                  description:
                    "This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server",
                  args: { name: "group-filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kdc-ip",
                  description:
                    "Kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "kdc-ip" },
                },
                {
                  name: "--ldap-over-tls",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be secured via TLS",
                  args: { name: "ldap-over-tls" },
                },
                {
                  name: "--ldap-signing",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be signed",
                  args: {
                    name: "ldap-signing",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--organizational-unit",
                  description:
                    "The Organizational Unit (OU) within the Windows Active Directory",
                  args: { name: "organizational-unit" },
                },
                {
                  name: ["--preferred-servers-for-ldap-client", "-p"],
                  description:
                    "Comma separated list of IPv4 addresses of preferred servers for LDAP client. At most two comma separated IPv4 addresses can be passed",
                  args: { name: "preferred-servers-for-ldap-client" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--security-operators",
                  description:
                    "Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A space separated list of unique usernames without domain specifier",
                  args: { name: "security-operators" },
                },
                {
                  name: "--server-root-ca-cert",
                  description:
                    "When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes",
                  args: { name: "server-root-ca-cert" },
                },
                {
                  name: "--site",
                  description:
                    "The Active Directory site the service will limit Domain Controller discovery to",
                  args: { name: "site" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--user-dn",
                  description:
                    "This specifies the user DN, which overrides the base DN for user lookups",
                  args: { name: "user-dn" },
                },
              ],
            },
            {
              name: "list",
              description: "List the active directories of an account",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove an active directory from the account",
              options: [
                {
                  name: "--active-directory",
                  description: "The id of the active directory",
                  args: { name: "active-directory" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Updates an active directory to the account",
              options: [
                {
                  name: "--active-directory-id",
                  description: "The id of the Active Directory",
                  args: { name: "active-directory-id" },
                  isRequired: true,
                },
                {
                  name: "--dns",
                  description:
                    "Comma separated list of DNS server IP addresses for the Active Directory domain",
                  args: { name: "dns" },
                  isRequired: true,
                },
                {
                  name: "--domain",
                  description: "Name of the Active Directory domain",
                  args: { name: "domain" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description:
                    "Plain text password of Active Directory domain administrator",
                  args: { name: "password" },
                  isRequired: true,
                },
                {
                  name: "--smb-server-name",
                  description:
                    "NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes. Must be 10 characters or less",
                  args: { name: "smb-server-name" },
                  isRequired: true,
                },
                {
                  name: "--username",
                  description:
                    "Username of Active Directory domain administrator",
                  args: { name: "username" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ad-name",
                  description:
                    "Name of the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "ad-name" },
                },
                {
                  name: "--administrators",
                  description:
                    "Users to be added to the Built-in Administrators active directory group. A space separated list of unique usernames without domain specifier",
                  args: { name: "administrators" },
                },
                {
                  name: "--aes-encryption",
                  description:
                    "If enabled, AES encryption will be enabled for SMB communication",
                  args: {
                    name: "aes-encryption",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-local-ldap-users",
                  description:
                    "If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes",
                  args: {
                    name: "allow-local-ldap-users",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--backup-operators",
                  description:
                    "Users to be added to the Built-in Backup Operator active directory group. A space separated list of unique usernames without domain specifier",
                  args: { name: "backup-operators" },
                },
                {
                  name: "--encrypt-dc-conn",
                  description:
                    "If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted",
                  args: {
                    name: "encrypt-dc-conn",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--group-dn",
                  description:
                    "This specifies the group DN, which overrides the base DN for group lookups",
                  args: { name: "group-dn" },
                },
                {
                  name: "--group-filter",
                  description:
                    "This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server",
                  args: { name: "group-filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kdc-ip",
                  description:
                    "Kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume",
                  args: { name: "kdc-ip" },
                },
                {
                  name: "--ldap-over-tls",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be secured via TLS",
                  args: { name: "ldap-over-tls" },
                },
                {
                  name: "--ldap-signing",
                  description:
                    "Specifies whether or not the LDAP traffic needs to be signed",
                  args: {
                    name: "ldap-signing",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--organizational-unit",
                  description:
                    "The Organizational Unit (OU) within the Windows Active Directory",
                  args: { name: "organizational-unit" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--security-operators",
                  description:
                    "Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A space separated list of unique usernames without domain specifier",
                  args: { name: "security-operators" },
                },
                {
                  name: "--server-root-ca-cert",
                  description:
                    "When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes",
                  args: { name: "server-root-ca-cert" },
                },
                {
                  name: "--site",
                  description:
                    "The Active Directory site the service will limit Domain Controller discovery to",
                  args: { name: "site" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--user-dn",
                  description:
                    "This specifies the user DN, which overrides the base DN for user lookups",
                  args: { name: "user-dn" },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a account ad operation",
              options: [
                {
                  name: ["--account-name", "--name", "-a", "-n"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
          name: "backup",
          description:
            "Manage Azure NetApp Files (ANF) Account Backup Resources",
          subcommands: [
            {
              name: "delete",
              description: "Delete Backup for a Netapp Files (ANF) Account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--backup-name",
                  description: "The name of the backup",
                  args: { name: "backup-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "Get list of all Azure NetApp Files (ANF) Account Backups",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get Backup for a Netapp Files (ANF) Account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--backup-name",
                  description: "The name of the backup",
                  args: { name: "backup-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a account backup operation",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--backup-name",
                  description: "The name of the backup. Required",
                  args: { name: "backup-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
          name: "backup-policy",
          description:
            "Manage Azure NetApp Files (ANF) Backup Policy Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Azure NetApp Files (ANF) backup policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--backup-policy-name", "-b"],
                  description: "The name of the ANF backup policy",
                  args: { name: "backup-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--daily-backups", "-d"],
                  description: "Daily backups count to keep",
                  args: { name: "daily-backups" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the backup",
                  args: { name: "location" },
                },
                {
                  name: ["--monthly-backups", "-m"],
                  description: "Monthly backups count to keep",
                  args: { name: "monthly-backups" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--tags",
                  description: "Space-separated tags in key[=value] format",
                  args: { name: "tags" },
                },
                {
                  name: ["--weekly-backups", "-w"],
                  description: "Weekly backups count to keep",
                  args: { name: "weekly-backups" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the specified ANF backup policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-policy-name", "-b"],
                  description: "The name of the ANF backup policy",
                  args: { name: "backup-policy-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the ANF backup policy for the specified account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the specified ANF backup policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-policy-name", "-b"],
                  description: "The name of the ANF backup policy",
                  args: { name: "backup-policy-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the specified ANF backup policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--backup-policy-name", "-b"],
                  description: "The name of the ANF backup policy",
                  args: { name: "backup-policy-name" },
                },
                {
                  name: ["--daily-backups", "-d"],
                  description: "Daily backups count to keep",
                  args: { name: "daily-backups" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--monthly-backups", "-m"],
                  description: "Monthly backups count to keep",
                  args: { name: "monthly-backups" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
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
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--weekly-backups", "-w"],
                  description: "Weekly backups count to keep",
                  args: { name: "weekly-backups" },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a account backup-policy operation",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-policy-name", "-b"],
                  description: "The name of the backup policy",
                  args: { name: "backup-policy-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
          name: "backup-vault",
          description: "Manage Azure NetApp Files (ANF) BackupVault Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create the specified Backup Vault in the NetApp account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--backup-vault-name", "--name", "-n"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the specified Backup Vault",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-vault-name", "--name", "-n"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List and describe all Backup Vaults in the NetApp account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the Backup Vault",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-vault-name", "--name", "-n"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the specified Backup Vault in the NetApp account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--backup-vault-name", "--name", "-n"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
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
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the NetApp account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-vault-name", "--name", "-n"],
                  description: "The name of the Backup Vault",
                  args: { name: "backup-vault-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
              name: "backup",
              description: "Manage Azure NetApp Files (ANF) Backup Resources",
              subcommands: [
                {
                  name: "create",
                  description: "Create a backup under the Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--backup-name", "--name", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                      isRequired: true,
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--volume-resource-id",
                      description: "ResourceId used to identify the Volume",
                      args: { name: "volume-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--label",
                      description: "Label for backup",
                      args: { name: "label" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                      },
                    },
                    {
                      name: "--snapshot-name",
                      description: "The name of the snapshot",
                      args: { name: "snapshot-name" },
                    },
                    {
                      name: "--use-existing-snapshot",
                      description:
                        "Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups",
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a Backup under the Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: ["--backup-name", "--name", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description: "List all backups Under a Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--filter",
                      description:
                        "An option to specify the VolumeResourceId. If present, then only returns the backups under the specified volume",
                      args: { name: "filter" },
                    },
                    {
                      name: "--max-items",
                      description:
                        "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                      args: { name: "max-items" },
                    },
                    {
                      name: "--next-token",
                      description:
                        "Token to specify where to start paginating. This is the token value from a previously truncated response",
                      args: { name: "next-token" },
                    },
                  ],
                },
                {
                  name: "restore-file",
                  description:
                    "Restore the specified files from the specified backup to the active filesystem",
                  options: [
                    {
                      name: "--destination-volume-id",
                      description:
                        "Resource Id of the destination volume on which the files need to be restored",
                      args: { name: "destination-volume-id" },
                      isRequired: true,
                    },
                    {
                      name: "--file-list",
                      description:
                        'List of files to be restored Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "file-list" },
                      isRequired: true,
                    },
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--backup-name",
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                      },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--restore-file-path",
                      description:
                        "Destination folder where the files will be restored. The path name should start with a forward slash. If it is omitted from request then restore is done at the root folder of the destination volume by default",
                      args: { name: "restore-file-path" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get the specified Backup under Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: ["--backup-name", "--name", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a backup under the Backup Vault",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--backup-name", "--name", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
                    },
                    {
                      name: "--force-string",
                      description:
                        "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                      args: {
                        name: "force-string",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                      },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--label",
                      description: "Label for backup",
                      args: { name: "label" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                      args: {
                        name: "no-wait",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
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
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--use-existing-snapshot",
                      description:
                        "Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups",
                      args: {
                        name: "use-existing-snapshot",
                        suggestions: [
                          "0",
                          "1",
                          "f",
                          "false",
                          "n",
                          "no",
                          "t",
                          "true",
                          "y",
                          "yes",
                        ],
                      },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: ["--backup-name", "--name", "-n"],
                      description: "The name of the backup",
                      args: { name: "backup-name" },
                    },
                    {
                      name: "--backup-vault-name",
                      description: "The name of the Backup Vault",
                      args: { name: "backup-vault-name" },
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
                    {
                      name: "--exists",
                      description: "Wait until the resource exists",
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--interval",
                      description: "Polling interval in seconds",
                      args: { name: "interval" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
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
          ],
        },
      ],
    },
    {
      name: "pool",
      description: "Manage Azure NetApp Files (ANF) Pool Resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new Azure NetApp Files (ANF) pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-level",
              description: "The service level for the ANF pool",
              args: {
                name: "service-level",
                suggestions: ["Premium", "Standard", "Ultra"],
              },
              isRequired: true,
            },
            {
              name: "--size",
              description:
                "The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4",
              args: { name: "size" },
              isRequired: true,
            },
            {
              name: "--cool-access",
              description:
                "If enabled (true) the pool can contain cool Access enabled volumes",
              args: { name: "cool-access", suggestions: ["false", "true"] },
            },
            {
              name: "--encryption-type",
              description:
                "Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool. Possible values are Single or Double. Default value is Single",
              args: { name: "encryption-type" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--qos-type",
              description: "The qos type of the ANF pool",
              args: { name: "qos-type" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified ANF pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "L:ist the ANF pools for the specified account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the specified ANF pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the tags of the specified ANF pool",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--cool-access",
              description:
                "If enabled (true) the pool can contain cool Access enabled volumes",
              args: { name: "cool-access", suggestions: ["false", "true"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--qos-type",
              description: "The qos type of the ANF pool",
              args: { name: "qos-type" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--size",
              description:
                "The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4",
              args: { name: "size" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a pool operation",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--pool-name", "--name", "-n", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
      name: "resource",
      description:
        "Provides operations for Azure NetApp Files (ANF) Account Resources",
      subcommands: [
        {
          name: "query-region-info",
          description:
            "Provides storage to network proximity and logical zone mapping information",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "snapshot",
      description: "Manage Azure NetApp Files (ANF) Snapshot Resources",
      subcommands: [
        {
          name: "create",
          description: "Create a new Azure NetApp Files (ANF) snapshot",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the ANF snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified ANF snapshot",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the ANF snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List the snapshots of an ANF volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "restore-files",
          description:
            "Restore specified files from the specified snapshot to the active filesystem",
          options: [
            {
              name: "--file-paths",
              description:
                "Required. A space separated string of filed to be restored",
              args: { name: "file-paths" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--destination-path",
              description:
                "Destination folder where the files will be restored",
              args: { name: "destination-path" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the ANF snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the specified ANF snapshot",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the ANF snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a snapshot",
          options: [
            {
              name: "--body",
              description:
                "Snapshot object supplied in the body of the operation. Required",
              args: { name: "body" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the ANF snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a snapshot operation",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--snapshot-name", "--name", "-n", "-s"],
              description: "The name of the ANF snapshot",
              args: { name: "snapshot-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
              name: ["--volume-name", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "policy",
          description:
            "Manage Azure NetApp Files (ANF) Snapshot Policy Resources",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Azure NetApp Files (ANF) snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the ANF snapshot policy",
                  args: { name: "snapshot-policy-name" },
                  isRequired: true,
                },
                {
                  name: "--daily-hour",
                  description:
                    "Which hour in UTC timezone the daily snapshot should be taken",
                  args: { name: "daily-hour" },
                },
                {
                  name: "--daily-minute",
                  description:
                    "Which minute the daily snapshot should be taken",
                  args: { name: "daily-minute" },
                },
                {
                  name: ["--daily-snapshots", "-d"],
                  description: "Daily snapshots count to keep",
                  args: { name: "daily-snapshots" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                },
                {
                  name: "--hourly-minute",
                  description:
                    "Which minute the hourly snapshot should be taken",
                  args: { name: "hourly-minute" },
                },
                {
                  name: ["--hourly-snapshots", "-u"],
                  description: "Hourly snapshots count to keep",
                  args: { name: "hourly-snapshots" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--monthly-days",
                  description:
                    "Which days of the month the weekly snapshot should be taken, accepts a comma separated list of days",
                  args: { name: "monthly-days" },
                },
                {
                  name: "--monthly-hour",
                  description:
                    "Which hour in UTC timezone the monthly snapshot should be taken",
                  args: { name: "monthly-hour" },
                },
                {
                  name: "--monthly-minute",
                  description:
                    "Which minute the monthly snapshot should be taken",
                  args: { name: "monthly-minute" },
                },
                {
                  name: ["--monthly-snapshots", "-m"],
                  description: "Monthly snapshots count to keep",
                  args: { name: "monthly-snapshots" },
                },
                {
                  name: "--tags",
                  description: "Space-separated tags in key[=value] format",
                  args: { name: "tags" },
                },
                {
                  name: "--weekly-day",
                  description:
                    "Which weekday the weekly snapshot should be taken, accepts a comma separated list of week day names in english",
                  args: { name: "weekly-day" },
                },
                {
                  name: "--weekly-hour",
                  description:
                    "Which hour in UTC timezone the weekly snapshot should be taken",
                  args: { name: "weekly-hour" },
                },
                {
                  name: "--weekly-minute",
                  description:
                    "Which minute the weekly snapshot should be taken",
                  args: { name: "weekly-minute" },
                },
                {
                  name: ["--weekly-snapshots", "-w"],
                  description: "Weekly snapshots count to keep",
                  args: { name: "weekly-snapshots" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the specified ANF snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the ANF snapshot policy",
                  args: { name: "snapshot-policy-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the ANF snapshot policies for the specified account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the specified ANF snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the ANF snapshot policy",
                  args: { name: "snapshot-policy-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the specified ANF snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--daily-hour",
                  description:
                    "Which hour in UTC timezone the daily snapshot should be taken",
                  args: { name: "daily-hour" },
                },
                {
                  name: "--daily-minute",
                  description:
                    "Which minute the daily snapshot should be taken",
                  args: { name: "daily-minute" },
                },
                {
                  name: ["--daily-snapshots", "-d"],
                  description: "Daily snapshots count to keep",
                  args: { name: "daily-snapshots" },
                },
                {
                  name: ["--enabled", "-e"],
                  description:
                    "The property to decide policy is enabled or not",
                },
                {
                  name: "--hourly-minute",
                  description:
                    "Which minute the hourly snapshot should be taken",
                  args: { name: "hourly-minute" },
                },
                {
                  name: ["--hourly-snapshots", "-u"],
                  description: "Hourly snapshots count to keep",
                  args: { name: "hourly-snapshots" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monthly-days",
                  description:
                    "Which days of the month the weekly snapshot should be taken, accepts a comma separated list of days",
                  args: { name: "monthly-days" },
                },
                {
                  name: "--monthly-hour",
                  description:
                    "Which hour in UTC timezone the monthly snapshot should be taken",
                  args: { name: "monthly-hour" },
                },
                {
                  name: "--monthly-minute",
                  description:
                    "Which minute the monthly snapshot should be taken",
                  args: { name: "monthly-minute" },
                },
                {
                  name: ["--monthly-snapshots", "-m"],
                  description: "Monthly snapshots count to keep",
                  args: { name: "monthly-snapshots" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the ANF snapshot policy",
                  args: { name: "snapshot-policy-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--weekly-day",
                  description:
                    "Which weekday the weekly snapshot should be taken, accepts a comma separated list of week day names in english",
                  args: { name: "weekly-day" },
                },
                {
                  name: "--weekly-hour",
                  description:
                    "Which hour in UTC timezone the weekly snapshot should be taken",
                  args: { name: "weekly-hour" },
                },
                {
                  name: "--weekly-minute",
                  description:
                    "Which minute the weekly snapshot should be taken",
                  args: { name: "weekly-minute" },
                },
                {
                  name: ["--weekly-snapshots", "-w"],
                  description: "Weekly snapshots count to keep",
                  args: { name: "weekly-snapshots" },
                },
              ],
            },
            {
              name: "volumes",
              description:
                "Get the all ANF volumes associated with snapshot policy",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the ANF snapshot policy",
                  args: { name: "snapshot-policy-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a snapshot policy operation",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--snapshot-policy-name",
                  description: "The name of the snapshot policy",
                  args: { name: "snapshot-policy-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
      ],
    },
    {
      name: "subvolume",
      description: "Manage Azure NetApp Files (ANF) Subvolume Resources",
      subcommands: [
        {
          name: "create",
          description:
            "Create a subvolume in the specified path or clones the subvolume specified in the parentPath",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--subvolume-name",
              description: "The name of the ANF subvolume",
              args: { name: "subvolume-name" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--parent-path",
              description: "Path to the parent subvolume",
              args: { name: "parent-path" },
            },
            {
              name: "--path",
              description: "Path to the subvolume",
              args: { name: "path" },
            },
            {
              name: "--size",
              description: "Size of the subvolume",
              args: { name: "size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a specified ANF subvolume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subvolume-name",
              description: "The name of the ANF subvolume",
              args: { name: "subvolume-name" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all ANF subvolumes in the specified NetApp volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the path associated with a subvolumeName",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subvolume-name",
              description: "The name of the ANF subvolume",
              args: { name: "subvolume-name" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a specified ANF subvolume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--path",
              description: "Path to the subvolume",
              args: { name: "path" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
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
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--size",
              description: "Size of the subvolume",
              args: { name: "size" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subvolume-name",
              description: "The name of the ANF subvolume",
              args: { name: "subvolume-name" },
            },
            {
              name: ["--volume-name", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a subvolume operation",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--subvolume-name",
              description: "The name of the subvolume. Required",
              args: { name: "subvolume-name" },
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
              name: ["--volume-name", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "metadata",
          description:
            "Manage Azure NetApp Files (ANF) Subvolume Metadata Resources",
          subcommands: [
            {
              name: "show",
              description: "Get the specified ANF metadata of a subvolume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--subvolume-name",
                  description: "The name of the ANF subvolume",
                  args: { name: "subvolume-name" },
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "volume",
      description: "Manage Azure NetApp Files (ANF) Volume Resources",
      subcommands: [
        {
          name: "break-file-locks",
          description: "Break file locks",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: ["--client-ip", "-i"],
              description:
                "To clear file locks on a volume for a particular client",
              args: { name: "client-ip" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new Azure NetApp Files (ANF) volume. Export policies are applied with the subgroup commands but note that volumes are always created with a default export policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--file-path",
              description:
                "A 1-80 character long alphanumeric string value that identifies a unique file share or mount point in the target delegate subnet",
              args: { name: "file-path" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--usage-threshold",
              description:
                'The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB"',
              args: { name: "usage-threshold" },
              isRequired: true,
            },
            {
              name: "--vnet",
              description:
                "Name or Resource ID of the vnet. If you want to use a vnet in other resource group or subscription, please provide the Resource ID instead of the name of the vnet",
              args: { name: "vnet" },
              isRequired: true,
            },
            {
              name: "--allowed-clients",
              description:
                "Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names",
              args: { name: "allowed-clients" },
            },
            {
              name: "--avs-data-store",
              description:
                "Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose. Possible values are Enabled and Disabled. Default value is Disabled",
              args: { name: "avs-data-store" },
            },
            {
              name: "--backup-enabled",
              description: "Backup Enabled",
              args: { name: "backup-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--backup-id",
              description:
                "Backup ID. UUID v4 or resource identifier used to identify the Backup",
              args: { name: "backup-id" },
            },
            {
              name: "--backup-policy-id",
              description: "Backup Policy Resource ID",
              args: { name: "backup-policy-id" },
            },
            {
              name: "--chown-mode",
              description:
                "This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own. Possible values include- Restricted, Unrestricted. Default value- Restricted",
              args: { name: "chown-mode" },
            },
            {
              name: "--cifs",
              description:
                "Allows CIFS protocol. Enable only for CIFS type volumes",
              args: { name: "cifs", suggestions: ["false", "true"] },
            },
            {
              name: "--cool-access",
              description:
                "Specifies whether Cool Access(tiering) is enabled for the volume",
              args: { name: "cool-access", suggestions: ["false", "true"] },
            },
            {
              name: "--coolness-period",
              description:
                "Specifies the number of days after which data that is not accessed by clients will be tiered",
              args: { name: "coolness-period" },
            },
            {
              name: "--default-group-quota",
              description:
                "Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies",
              args: { name: "default-group-quota" },
            },
            {
              name: "--default-user-quota",
              description:
                "Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies",
              args: { name: "default-user-quota" },
            },
            {
              name: "--delete-base-snapshot",
              description:
                "If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished. Defaults to false",
              args: {
                name: "delete-base-snapshot",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-subvolumes",
              description:
                "Flag indicating whether subvolume operations are enabled on the volume. Possible values are Enabled and Disabled. Default value is Disabled",
              args: { name: "enable-subvolumes" },
            },
            {
              name: "--encryption-key-source",
              description:
                "Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'",
              args: {
                name: "encryption-key-source",
                suggestions: ["Microsoft.KeyVault", "Microsoft.NetApp"],
              },
            },
            {
              name: "--endpoint-type",
              description:
                'Whether the volume is source ("src") or destination ("dst")',
              args: { name: "endpoint-type" },
            },
            {
              name: "--has-root-access",
              description:
                "Has root access to volume. Possible values are True or False",
              args: { name: "has-root-access", suggestions: ["false", "true"] },
            },
            {
              name: "--is-def-quota-enabled",
              description:
                "Specifies if default quota is enabled for the volume",
              args: {
                name: "is-def-quota-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--is-large-volume",
              description:
                "Specifies whether volume is a Large Volume or Regular Volume",
            },
            {
              name: "--kerberos-enabled",
              description: "Describe if a volume is KerberosEnabled",
              args: {
                name: "kerberos-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--kerberos5-r",
              description: "Kerberos5 Read only access",
              args: { name: "kerberos5-r" },
            },
            {
              name: "--kerberos5-rw",
              description: "Kerberos5 Read and write access",
              args: { name: "kerberos5-rw" },
            },
            {
              name: "--kerberos5i-r",
              description: "Kerberos5i Read only access",
              args: { name: "kerberos5i-r" },
            },
            {
              name: "--kerberos5i-rw",
              description: "Kerberos5i Read and write access",
              args: { name: "kerberos5i-rw" },
            },
            {
              name: "--kerberos5p-r",
              description: "Kerberos5p Read only access",
              args: { name: "kerberos5p-r" },
            },
            {
              name: "--kerberos5p-rw",
              description: "Kerberos5p Read and write access",
              args: { name: "kerberos5p-rw" },
            },
            {
              name: "--kv-private-endpoint-id",
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "kv-private-endpoint-id" },
            },
            {
              name: "--ldap-enabled",
              description:
                "Specifies whether LDAP is enabled or not for a given NFS volume",
              args: { name: "ldap-enabled", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--network-features",
              description:
                "Basic network, or Standard features available to the volume. Possible values are Basic and Standard. Default value is Basic",
              args: { name: "network-features" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--policy-enforced",
              description: "Policy Enforced",
              args: { name: "policy-enforced", suggestions: ["false", "true"] },
            },
            {
              name: "--protocol-types",
              description:
                'Space separated list of protocols that the volume can use, available protocols are "NFSv4.1", "NFSv3", "CIFS"',
              args: { name: "protocol-types" },
            },
            {
              name: "--remote-volume-resource-id",
              description:
                'The volume id of the remote volume of the replication (the destination for "src" volume endpoints and the source for "dst" endpoints)',
              args: { name: "remote-volume-resource-id" },
            },
            {
              name: "--replication-schedule",
              description:
                'The replication schedule, e.g. "_10minutely, hourly, daily, weekly, monthly"',
              args: { name: "replication-schedule" },
            },
            {
              name: "--rule-index",
              description: "Order index",
              args: { name: "rule-index" },
            },
            {
              name: "--security-style",
              description:
                "The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol",
              args: { name: "security-style", suggestions: ["ntfs", "unix"] },
            },
            {
              name: "--service-level",
              description: "The service level",
              args: {
                name: "service-level",
                suggestions: ["Premium", "Standard", "Ultra"],
              },
            },
            {
              name: "--smb-access",
              description:
                "Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-browsable",
              description:
                "Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-continuously-avl",
              description:
                "Enables continuously available share property for smb volume. Only applicable for SMB volume. Default value is False",
              args: {
                name: "smb-continuously-avl",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--smb-encryption",
              description:
                "Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later. Default value is False",
              args: { name: "smb-encryption", suggestions: ["false", "true"] },
            },
            {
              name: "--snapshot-dir-visible",
              description:
                "If enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots (default to true)",
              args: {
                name: "snapshot-dir-visible",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--snapshot-id",
              description:
                'Create a volume created from this snapshot. UUID v4 or resource identifier used to identify the Snapshot. example snapshot-id "9760acf5-4638-11e7-9bdb-020073ca3333"',
              args: { name: "snapshot-id" },
            },
            {
              name: "--snapshot-policy-id",
              description: "Snapshot Policy ResourceId",
              args: { name: "snapshot-policy-id" },
            },
            {
              name: "--subnet",
              description: "The name of the subnet for the volume",
              args: { name: "subnet" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
            {
              name: "--throughput-mibps",
              description:
                "Maximum throughput in Mibps that can be achieved by this volume",
              args: { name: "throughput-mibps" },
            },
            {
              name: "--unix-permissions",
              description:
                "UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file- read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users",
              args: { name: "unix-permissions" },
            },
            {
              name: "--unix-read-only",
              description: "Read only access",
              args: { name: "unix-read-only", suggestions: ["false", "true"] },
            },
            {
              name: "--unix-read-write",
              description: "Read and write access",
              args: { name: "unix-read-write", suggestions: ["false", "true"] },
            },
            {
              name: "--volume-type",
              description:
                'Whether the volume should be a data protection volume ("DataProtection"), empty if this is not a data protection volume',
              args: { name: "volume-type" },
            },
            {
              name: "--zones",
              description: "Availability Zone",
              args: { name: "zones" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified ANF volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--force-delete",
              description:
                "An option to force delete the volume. Will cleanup resources connected to the particular volume",
              args: { name: "force-delete", suggestions: ["false", "true"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "finalize-relocation",
          description:
            "Finalizes the relocation of the Azure NetApp Files (ANF) volume and cleans up the old volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "get-groupid-list-for-ldapuser",
          description: "Returns the list of group Ids for a specific LDAP User",
          options: [
            {
              name: ["--username", "-u"],
              description:
                "Username is required to fetch the group to which user is part of",
              args: { name: "username" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List the ANF Pools for the specified account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "migrate-backup",
          description: "Migrate the backups under volume to backup vault",
          options: [
            {
              name: "--backup-vault-id",
              description: "The ResourceId of the Backup Vault",
              args: { name: "backup-vault-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the NetApp account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the capacity pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--volume-name",
              description: "The name of the volume",
              args: { name: "volume-name" },
            },
          ],
        },
        {
          name: "pool-change",
          description: "Change pool for an Azure NetApp Files (ANF) volume",
          options: [
            {
              name: ["--new-pool-resource-id", "-d"],
              description: "The resource id of the new ANF pool",
              args: { name: "new-pool-resource-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "relocate",
          description:
            "Relocates an Azure NetApp Files (ANF) volume to a new stamp",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--body",
              description:
                "Relocate volume request. Is either a RelocateVolumeRequest type or a IO type. Default value is None",
              args: { name: "body" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "reset-cifs-pw",
          description:
            "Reset CIFS password from an Azure NetApp Files (ANF) volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "revert",
          description: "Revert a volume to one of its snapshots",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--snapshot-id", "-s"],
              description:
                'SnapshotId of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333"',
              args: { name: "snapshot-id" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "revert-relocation",
          description:
            "Reverts the Azure NetApp Files (ANF) volume relocation process, cleans up the new volume and starts using the former-existing volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Get the specified ANF volume",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF pool",
              args: { name: "volume-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the specified ANF volume with the values provided. Unspecified values will remain unchanged. Export policies are amended/created with the subgroup commands",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the ANF account",
              args: { name: "account-name" },
            },
            {
              name: "--backup-enabled",
              description: "Backup Enabled",
              args: { name: "backup-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--backup-policy-id",
              description: "Backup Policy Resource ID",
              args: { name: "backup-policy-id" },
            },
            {
              name: "--cool-access",
              description:
                "If enabled (true) the pool can contain cool Access enabled volumes",
              args: { name: "cool-access", suggestions: ["false", "true"] },
            },
            {
              name: "--coolness-period",
              description:
                "Specifies the number of days after which data that is not accessed by clients will be tiered",
              args: { name: "coolness-period" },
            },
            {
              name: "--default-group-quota",
              description:
                "Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies",
              args: { name: "default-group-quota" },
            },
            {
              name: "--default-user-quota",
              description:
                "Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies",
              args: { name: "default-user-quota" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--is-def-quota-enabled",
              description:
                "Specifies if default quota is enabled for the volume",
              args: {
                name: "is-def-quota-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "The name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--policy-enforced",
              description: "Backup Policy Enforced",
              args: { name: "policy-enforced", suggestions: ["false", "true"] },
            },
            {
              name: ["--pool-name", "-p"],
              description: "The name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--service-level",
              description: "The service level",
              args: {
                name: "service-level",
                suggestions: ["Premium", "Standard", "Ultra"],
              },
            },
            {
              name: "--snapshot-dir-visible",
              description:
                "If enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots (default to true)",
              args: {
                name: "snapshot-dir-visible",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--snapshot-policy-id",
              description: "Snapshot Policy ResourceId",
              args: { name: "snapshot-policy-id" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key[=value] format",
              args: { name: "tags" },
            },
            {
              name: "--throughput-mibps",
              description:
                "Maximum throughput in Mibps that can be achieved by this volume and this will be accepted as input only for manual qosType volume",
              args: { name: "throughput-mibps" },
            },
            {
              name: "--unix-permissions",
              description:
                "UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file- read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users",
              args: { name: "unix-permissions" },
            },
            {
              name: "--usage-threshold",
              description:
                "The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB",
              args: { name: "usage-threshold" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a volume operation",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--volume-name", "--name", "-n", "-v"],
              description: "Name of the ANF volume",
              args: { name: "volume-name" },
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
          name: "backup",
          description:
            "Manage Azure NetApp Files (ANF) Volume Backup Resources",
          subcommands: [
            {
              name: "create",
              description: "Create specified ANF volume backup",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the ANF backup",
                  args: { name: "backup-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--use-existing-snapshot",
                  description:
                    "Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups",
                  args: {
                    name: "use-existing-snapshot",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete backup",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the backup",
                  args: { name: "backup-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List the ANF Backups for the specified volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "restore-files",
              description:
                "Restore the specified files from the specified backup to the active filesystem",
              options: [
                {
                  name: "--destination-path",
                  description:
                    "Destination folder where the files will be restored",
                  args: { name: "destination-path" },
                  isRequired: true,
                },
                {
                  name: "--destination-volume-id",
                  description:
                    "Resource Id of the destination volume on which the files need to be restored",
                  args: { name: "destination-volume-id" },
                  isRequired: true,
                },
                {
                  name: "--file-paths",
                  description:
                    "Required. A space separated string of filed to be restored",
                  args: { name: "file-paths" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the ANF backup",
                  args: { name: "backup-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "restore-status",
              description:
                "Get backup restore status of the specified ANF Volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF pool",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the specified ANF Backup",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the ANF backup",
                  args: { name: "backup-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF pool",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "status",
              description: "Get backup status of the specified ANF Volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the specified ANF backup with the values provided",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the ANF backup",
                  args: { name: "backup-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--label",
                  description: "Label for backup",
                  args: { name: "label" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
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
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--use-existing-snapshot",
                  description:
                    "Manual backup an already existing snapshot. This will always be false for scheduled backups and true or false for manual backups",
                  args: {
                    name: "use-existing-snapshot",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a volume backup operation",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the backup",
                  args: { name: "backup-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
          name: "export-policy",
          description: "Manage Azure NetApp Files (ANF) Volume export policies",
          subcommands: [
            {
              name: "add",
              description: "Add a new rule to the export policy for a volume",
              options: [
                {
                  name: "--allowed-clients",
                  description:
                    "Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names)",
                  args: { name: "allowed-clients" },
                  isRequired: true,
                },
                {
                  name: "--cifs",
                  description: "Indication that CIFS protocol is allowed",
                  args: { name: "cifs", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--nfsv3",
                  description: "Indication that NFSv3 protocol is allowed",
                  args: { name: "nfsv3", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--nfsv41",
                  description: "Indication that NFSv4.1 protocol is allowed",
                  args: { name: "nfsv41", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--unix-read-only",
                  description: "Indication of read only access",
                  args: {
                    name: "unix-read-only",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: "--unix-read-write",
                  description: "Indication of read and write access",
                  args: {
                    name: "unix-read-write",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--chown-mode",
                  description:
                    "This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own. Possible values include- Restricted, Unrestricted. Default value- Restricted",
                  args: { name: "chown-mode" },
                },
                {
                  name: "--has-root-access",
                  description: "Vol Has root access to volume",
                  args: {
                    name: "has-root-access",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kerberos5-r",
                  description: "Kerberos5 Read only access",
                  args: { name: "kerberos5-r" },
                },
                {
                  name: "--kerberos5-rw",
                  description: "Kerberos5 Read and write access",
                  args: { name: "kerberos5-rw" },
                },
                {
                  name: "--kerberos5i-r",
                  description: "Kerberos5i Read only access",
                  args: { name: "kerberos5i-r" },
                },
                {
                  name: "--kerberos5i-rw",
                  description: "Kerberos5i Read and write access",
                  args: { name: "kerberos5i-rw" },
                },
                {
                  name: "--kerberos5p-r",
                  description: "Kerberos5p Read only access",
                  args: { name: "kerberos5p-r" },
                },
                {
                  name: "--kerberos5p-rw",
                  description: "Kerberos5p Read and write access",
                  args: { name: "kerberos5p-rw" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rule-index",
                  description:
                    "Order index. No number can be repeated. Max 6 rules",
                  args: { name: "rule-index" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List the export policy rules for a volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove a rule from the export policy for a volume by rule index. The current rules can be obtained by performing the subgroup list command",
              options: [
                {
                  name: "--rule-index",
                  description: "Order index. Range 1 to 6",
                  args: { name: "rule-index" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
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
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a volume export-policy operation",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
          name: "latest-backup-status",
          description: "Get the latest backup status of a volume",
          subcommands: [
            {
              name: "current",
              description: "Get the latest backup status of the current volume",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Get the latest status of the backup for a volume",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "The name of the NetApp account",
                      args: { name: "account-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--pool-name", "-p"],
                      description: "The name of the capacity pool",
                      args: { name: "pool-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--volume-name",
                      description: "The name of the volume",
                      args: { name: "volume-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "quota-rule",
          description:
            "Manage Azure NetApp Files (ANF) Volume Quota Rules Resources",
          subcommands: [
            {
              name: "create",
              description: "Create a ANF Volume Quota Rule",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: "--quota-rule-name",
                  description: "Name of Quota rule",
                  args: { name: "quota-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--quota-size",
                  description: "Size of quota",
                  args: { name: "quota-size" },
                },
                {
                  name: "--quota-target",
                  description:
                    "UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running :code:<wmic useraccount where name='user-name' get sid>",
                  args: { name: "quota-target" },
                },
                {
                  name: "--quota-type",
                  description:
                    'Type of quota. Known values are "DefaultUserQuota", "DefaultGroupQuota", "IndividualUserQuota", and "IndividualGroupQuota"',
                  args: { name: "quota-type" },
                },
                {
                  name: "--tags",
                  description: "Resource tags",
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a specified ANF Volume Quota Rule for Volume",
              options: [
                {
                  name: "--quota-rule-name",
                  description: "The name of the quota rule",
                  args: { name: "quota-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Get all ANF Volume Quota Rule for specified Volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the ANF volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get ANF Volume Quota Rule for Volume",
              options: [
                {
                  name: "--quota-rule-name",
                  description: "The name of the quota rule",
                  args: { name: "quota-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a specified ANF Volume Quota Rule",
              options: [
                {
                  name: "--quota-rule-name",
                  description: "The name of the quota rule",
                  args: { name: "quota-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: "--quota-size",
                  description: "Size of quota",
                  args: { name: "quota-size" },
                },
                {
                  name: "--quota-target",
                  description:
                    "UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running :code:<wmic useraccount where name='user-name' get sid>",
                  args: { name: "quota-target" },
                },
                {
                  name: "--quota-type",
                  description:
                    'Type of quota. Known values are "DefaultUserQuota", "DefaultGroupQuota", "IndividualUserQuota", and "IndividualGroupQuota"',
                  args: { name: "quota-type" },
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
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--volume-name", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a volume quota-rule operation",
              options: [
                {
                  name: "--quota-rule-name",
                  description: "The name of the quota rule",
                  args: { name: "quota-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
                  name: ["--volume-name", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
              ],
            },
          ],
        },
        {
          name: "replication",
          description:
            "Manage Azure NetApp Files (ANF) Volume replication operations",
          subcommands: [
            {
              name: "approve",
              description:
                "Authorize a volume as a replication destination for a specified source",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the replication source volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--remote-volume-resource-id", "-d"],
                  description:
                    "The resource id of the destination replication volume",
                  args: { name: "remote-volume-resource-id" },
                },
              ],
            },
            {
              name: "list",
              description: "List replication for ANF volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "re-initialize",
              description:
                "Re-initialise a volume replication for the specified destination volume. The replication process is resumed from source to destination",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the replication destination volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Delete a volume replication for the specified destination volume. The data replication objects of source and destination volumes will be removed",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the replication destination volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "resume",
              description:
                "Resync a volume replication for the specified destination volume. The replication process is resumed from source to destination. If any quota rules exists on destination volume  they will be overwritten with source volume's quota rules",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the replication destination volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "status",
              description:
                "Get the replication status for the specified replication volume",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the replication destination volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "suspend",
              description:
                "Suspend/break a volume replication for the specified destination volume. The replication process is suspended until resumed or deleted",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the ANF account",
                  args: { name: "account-name" },
                },
                {
                  name: ["--force-break-replication", "--force", "-f"],
                  description: "Force break the replication",
                  args: {
                    name: "force-break-replication",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "The name of the replication destination volume",
                  args: { name: "volume-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "The name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "wait",
              description: "Wait for a volume replication operation",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the ANF account",
                  args: { name: "account-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--volume-name", "--name", "-n", "-v"],
                  description: "Name of the ANF volume",
                  args: { name: "volume-name" },
                },
                {
                  name: ["--pool-name", "-p"],
                  description: "Name of the ANF pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
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
      ],
    },
    {
      name: "volume-group",
      description: "Manage Azure NetApp Files (ANF) Volume Group Resources",
      subcommands: [
        {
          name: "create",
          description: "Create ANF Volume Groups",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--group-name"],
              description: "The name of the ANF volume group",
              args: { name: "volume-group-name" },
              isRequired: true,
            },
            {
              name: ["--pool-name", "-p"],
              description: "Name of the ANF pool",
              args: { name: "pool-name" },
              isRequired: true,
            },
            {
              name: "--ppg",
              description:
                "The resource id of the Proximity Placement Group for volume placement",
              args: { name: "ppg" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vnet",
              description: "The ARM Id or name of the vnet for the volumes",
              args: { name: "vnet" },
              isRequired: true,
            },
            {
              name: "--add-snapshot-capacity",
              description:
                "Additional memory to store snapshots, must be specified as % of RAM (range 0-200). This is used to auto compute storage size",
              args: { name: "add-snapshot-capacity" },
            },
            {
              name: "--backup-nfsv3",
              description:
                "Indicates if NFS Protocol version 3 is preferred for data backup and log backup volumes. Default is false",
            },
            {
              name: "--data-backup-repl-skd",
              description: "Replication Schedule for data backup volume",
              args: { name: "data-backup-repl-skd" },
            },
            {
              name: "--data-backup-size",
              description:
                "Capacity (in GiB) for data backup volumes. If not provided size will automatically be calculated",
              args: { name: "data-backup-size" },
            },
            {
              name: "--data-backup-src-id",
              description: "ResourceId of the data backup source volume",
              args: { name: "data-backup-src-id" },
            },
            {
              name: "--data-backup-throughput",
              description:
                "Throughput in MiB/s for data backup volumes. If not provided size will automatically be calculated",
              args: { name: "data-backup-throughput" },
            },
            {
              name: "--data-repl-skd",
              description: "Replication Schedule for data volume",
              args: { name: "data-repl-skd" },
            },
            {
              name: "--data-size",
              description:
                "Capacity (in GiB) for data volumes. If not provided size will automatically be calculated",
              args: { name: "data-size" },
            },
            {
              name: "--data-src-id",
              description: "ResourceId of the data source volume",
              args: { name: "data-src-id" },
            },
            {
              name: "--data-throughput",
              description:
                "Throughput in MiB/s for data volumes. If not provided size will automatically be calculated",
              args: { name: "data-throughput" },
            },
            {
              name: ["--global-placement-rules", "--gp-rules"],
              description:
                "Application specific identifier of deployment rules for the volume group. Space-separated string in key=value format",
              args: { name: "global-placement-rules" },
            },
            {
              name: "--kv-private-endpoint-id",
              description:
                "The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'",
              args: { name: "kv-private-endpoint-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "ANF Location. If the resource group location is different than ANF location, ANF location needs to be specified",
              args: { name: "location" },
            },
            {
              name: "--log-backup-repl-skd",
              description: "Replication Schedule for log backup volume",
              args: { name: "log-backup-repl-skd" },
            },
            {
              name: "--log-backup-size",
              description:
                "Capacity (in GiB) for log backup volumes. If not provided size will automatically be calculated",
              args: { name: "log-backup-size" },
            },
            {
              name: "--log-backup-src-id",
              description: "ResourceId of the log backup source volume",
              args: { name: "log-backup-src-id" },
            },
            {
              name: "--log-backup-throughput",
              description:
                "Throughput in MiB/s for log backup volumes. If not provided size will automatically be calculated",
              args: { name: "log-backup-throughput" },
            },
            {
              name: "--log-size",
              description:
                "Capacity (in GiB) for log volumes. If not provided size will automatically be calculated",
              args: { name: "log-size" },
            },
            {
              name: "--log-throughput",
              description:
                "Throughput in MiB/s for log volumes. If not provided size will automatically be calculated",
              args: { name: "log-throughput" },
            },
            {
              name: "--memory",
              description:
                "SAP HANA memory in GiB (max 12000 GiB), used to auto compute storage size and throughput",
              args: { name: "memory" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--number-of-hots",
              description:
                "Total Number of SAP HANA host in this deployment (currently max 3 nodes can be configured)",
              args: { name: "number-of-hots" },
            },
            {
              name: "--prefix",
              description:
                'All volume names will be prefixed with the given text. The default values for prefix text depends on system role. For PRIMARY it will be "" and HA it will be "HA-"',
              args: { name: "prefix" },
            },
            {
              name: "--sap-sid",
              description:
                "The SAP system ID. Three characters long alpha-numeric string",
              args: { name: "sap-sid" },
            },
            {
              name: "--shared-repl-skd",
              description: "Replication Schedule for shared volume",
              args: { name: "shared-repl-skd" },
            },
            {
              name: "--shared-size",
              description:
                "Capacity (in GiB) for shared volume. If not provided size will automatically be calculated",
              args: { name: "shared-size" },
            },
            {
              name: "--shared-src-id",
              description: "ResourceId of the shared source volume",
              args: { name: "shared-src-id" },
            },
            {
              name: "--shared-throughput",
              description:
                "Throughput in MiB/s for shared volume. If not provided size will automatically be calculated",
              args: { name: "shared-throughput" },
            },
            {
              name: "--smb-access",
              description:
                "Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--smb-browsable",
              description:
                "Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume",
              args: {
                name: "smb-browsable",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--start-host-id",
              description:
                "Starting SAP HANA Host ID. Host ID 1 indicates Master Host. Shared, Data Backup and Log Backup volumes are only provisioned for Master Host i.e. HostID == 1",
              args: { name: "start-host-id" },
            },
            {
              name: "--subnet",
              description: "The delegated Subnet name",
              args: { name: "subnet" },
            },
            {
              name: "--system-role",
              description:
                "Type of role for the storage account. Primary indicates first of a SAP HANA Replication (HSR) setup or No HSR. High Availability (HA) specifies local scenario. Default is PRIMARY",
              args: {
                name: "system-role",
                suggestions: ["DR", "HA", "PRIMARY"],
              },
            },
            {
              name: "--tags",
              description: "Space-separated tags in key=value format",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a volume group",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--group-name"],
              description: "The name of the ANF volume group",
              args: { name: "volume-group-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get a list of ANF Volume Groups",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the specified ANF Volume Group",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--group-name"],
              description: "The name of the ANF volume group",
              args: { name: "volume-group-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for a volume group to be created",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the ANF account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--volume-group-name", "--group-name"],
              description: "The name of the ANF volume group",
              args: { name: "volume-group-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
  ],
};

export default completion;
