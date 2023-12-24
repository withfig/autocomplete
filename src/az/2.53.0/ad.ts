const completion: Fig.Spec = {
  name: "ad",
  description:
    "Manage Azure Active Directory Graph entities needed for Role Based Access Control",
  subcommands: [
    {
      name: "app",
      description: "Manage applications with AAD Graph",
      subcommands: [
        {
          name: "create",
          description:
            "Create a web application, web API or native application",
          options: [
            {
              name: "--display-name",
              description: "The display name of the application",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--app-roles",
              description:
                "The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Should be JSON file path or in-line JSON string. See examples for details",
              args: { name: "app-roles" },
            },
            {
              name: "--enable-access-token-issuance",
              description:
                "Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow",
              args: {
                name: "enable-access-token-issuance",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-id-token-issuance",
              description:
                "Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow",
              args: {
                name: "enable-id-token-issuance",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--end-date",
              description:
                "Date or datetime after which credentials expire (e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time",
              args: { name: "end-date" },
            },
            {
              name: "--identifier-uris",
              description:
                "Space-separated values. Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://, or specify a more readable URI like https://contoso.com/api",
              args: { name: "identifier-uris" },
            },
            {
              name: "--is-fallback-public-client",
              description:
                "Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app",
              args: {
                name: "is-fallback-public-client",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--key-display-name",
              description: "Friendly name for the key",
              args: { name: "key-display-name" },
            },
            {
              name: "--key-type",
              description:
                "The type of the key credentials associated with the application",
              args: {
                name: "key-type",
                suggestions: ["AsymmetricX509Cert", "Password", "Symmetric"],
              },
            },
            {
              name: "--key-usage",
              description:
                "The usage of the key credentials associated with the application",
              args: { name: "key-usage", suggestions: ["Sign", "Verify"] },
            },
            {
              name: "--key-value",
              description:
                "The value for the key credentials associated with the application",
              args: { name: "key-value" },
            },
            {
              name: "--optional-claims",
              description:
                "Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see https://docs.microsoft.com/azure/active-directory/develop/active-directory-optional-claims. Should be JSON file path or in-line JSON string. See examples for details",
              args: { name: "optional-claims" },
            },
            {
              name: "--public-client-redirect-uris",
              description:
                "Space-separated values. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent",
              args: { name: "public-client-redirect-uris" },
            },
            {
              name: "--required-resource-accesses",
              description:
                "Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. Should be JSON file path or in-line JSON string. See examples for details",
              args: { name: "required-resource-accesses" },
            },
            {
              name: "--sign-in-audience",
              description:
                "Specifies the Microsoft accounts that are supported for the current application",
              args: {
                name: "sign-in-audience",
                suggestions: [
                  "AzureADMultipleOrgs",
                  "AzureADMyOrg",
                  "AzureADandPersonalMicrosoftAccount",
                  "PersonalMicrosoftAccount",
                ],
              },
            },
            {
              name: "--start-date",
              description:
                "Date or datetime at which credentials become valid (e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time",
              args: { name: "start-date" },
            },
            {
              name: "--web-home-page-url",
              description: "Home page or landing page of the application",
              args: { name: "web-home-page-url" },
            },
            {
              name: "--web-redirect-uris",
              description:
                "Space-separated values. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent",
              args: { name: "web-redirect-uris" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an application",
          options: [
            {
              name: "--id",
              description: "Identifier uri, application id, or object id",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List applications",
          options: [
            {
              name: "--all",
              description:
                "List all entities, expect long delay if under a big organization",
              args: { name: "all" },
            },
            {
              name: "--app-id",
              description: "Application id",
              args: { name: "app-id" },
            },
            {
              name: "--display-name",
              description: "The display name of the application",
              args: { name: "display-name" },
            },
            {
              name: "--filter",
              description:
                "OData filter, e.g. --filter \"displayname eq 'test' and servicePrincipalType eq 'Application'\"",
              args: { name: "filter" },
            },
            {
              name: "--identifier-uri",
              description:
                "Graph application identifier, must be in uri format",
              args: { name: "identifier-uri" },
            },
            {
              name: "--show-mine",
              description: "List entities owned by the current user",
              args: { name: "show-mine" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an application",
          options: [
            {
              name: "--id",
              description: "Identifier uri, application id, or object id",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an application",
          options: [
            {
              name: "--id",
              description: "Identifier uri, application id, or object id",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--app-roles",
              description:
                "The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users, groups, or service principals associated with other applications. Should be JSON file path or in-line JSON string. See examples for details",
              args: { name: "app-roles" },
            },
            {
              name: "--display-name",
              description: "The display name of the application",
              args: { name: "display-name" },
            },
            {
              name: "--enable-access-token-issuance",
              description:
                "Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow",
              args: {
                name: "enable-access-token-issuance",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-id-token-issuance",
              description:
                "Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow",
              args: {
                name: "enable-id-token-issuance",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--end-date",
              description:
                "Date or datetime after which credentials expire (e.g. '2017-12-31T11:59:59+00:00' or '2017-12-31'). Default value is one year after current time",
              args: { name: "end-date" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--identifier-uris",
              description:
                "Space-separated values. Also known as App ID URI, this value is set when an application is used as a resource app. The identifierUris acts as the prefix for the scopes you'll reference in your API's code, and it must be globally unique. You can use the default value provided, which is in the form api://, or specify a more readable URI like https://contoso.com/api",
              args: { name: "identifier-uris" },
            },
            {
              name: "--is-fallback-public-client",
              description:
                "Specifies the fallback application type as public client, such as an installed application running on a mobile device. The default value is false which means the fallback application type is confidential client such as a web app",
              args: {
                name: "is-fallback-public-client",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--key-display-name",
              description: "Friendly name for the key",
              args: { name: "key-display-name" },
            },
            {
              name: "--key-type",
              description:
                "The type of the key credentials associated with the application",
              args: {
                name: "key-type",
                suggestions: ["AsymmetricX509Cert", "Password", "Symmetric"],
              },
            },
            {
              name: "--key-usage",
              description:
                "The usage of the key credentials associated with the application",
              args: { name: "key-usage", suggestions: ["Sign", "Verify"] },
            },
            {
              name: "--key-value",
              description:
                "The value for the key credentials associated with the application",
              args: { name: "key-value" },
            },
            {
              name: "--optional-claims",
              description:
                "Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent to their application by the Microsoft security token service. For more information, see https://docs.microsoft.com/azure/active-directory/develop/active-directory-optional-claims. Should be JSON file path or in-line JSON string. See examples for details",
              args: { name: "optional-claims" },
            },
            {
              name: "--public-client-redirect-uris",
              description:
                "Space-separated values. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent",
              args: { name: "public-client-redirect-uris" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--required-resource-accesses",
              description:
                "Specifies the resources that the application needs to access. This property also specifies the set of delegated permissions and application roles that it needs for each of those resources. This configuration of access to the required resources drives the consent experience. Should be JSON file path or in-line JSON string. See examples for details",
              args: { name: "required-resource-accesses" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--sign-in-audience",
              description:
                "Specifies the Microsoft accounts that are supported for the current application",
              args: {
                name: "sign-in-audience",
                suggestions: [
                  "AzureADMultipleOrgs",
                  "AzureADMyOrg",
                  "AzureADandPersonalMicrosoftAccount",
                  "PersonalMicrosoftAccount",
                ],
              },
            },
            {
              name: "--start-date",
              description:
                "Date or datetime at which credentials become valid (e.g. '2017-01-01T01:00:00+00:00' or '2017-01-01'). Default value is current time",
              args: { name: "start-date" },
            },
            {
              name: "--web-home-page-url",
              description: "Home page or landing page of the application",
              args: { name: "web-home-page-url" },
            },
            {
              name: "--web-redirect-uris",
              description:
                "Space-separated values. Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent",
              args: { name: "web-redirect-uris" },
            },
          ],
        },
        {
          name: "credential",
          description:
            "Manage an application's password or certificate credentials",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete an application's password or certificate credentials",
              options: [
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--key-id",
                  description: "Credential key id",
                  args: { name: "key-id" },
                  isRequired: true,
                },
                {
                  name: "--cert",
                  description: "Operate on certificate credentials",
                },
              ],
            },
            {
              name: "list",
              description:
                "List an application's password or certificate credential metadata. (The content of the password or certificate credential is not retrievable.)",
              options: [
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--cert",
                  description: "Operate on certificate credentials",
                },
              ],
            },
            {
              name: "reset",
              description:
                "Reset an application's password or certificate credentials",
              options: [
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--append",
                  description:
                    "Append the new credential instead of overwriting",
                },
                {
                  name: "--cert",
                  description:
                    "Certificate to use for credentials. When used with --keyvault,, indicates the name of the cert to use or create. Otherwise, supply a PEM or DER formatted public certificate string. Use @{path} to load from a file. Do not include private key info",
                  args: { name: "cert" },
                },
                {
                  name: "--create-cert",
                  description:
                    "Create a self-signed certificate to use for the credential. Only the current OS user has read/write permission to this certificate. Use with --keyvault to create the certificate in Key Vault. Otherwise, a certificate will be created locally",
                },
                {
                  name: "--display-name",
                  description: "Friendly name for the credential",
                  args: { name: "display-name" },
                },
                {
                  name: "--end-date",
                  description:
                    "Finer grain of expiry time if '--years' is insufficient, e.g. '2020-12-31T11:59:59+00:00' or '2299-12-31'",
                  args: { name: "end-date" },
                },
                {
                  name: "--keyvault",
                  description:
                    "Name or ID of a KeyVault to use for creating or retrieving certificates",
                  args: { name: "keyvault" },
                },
                {
                  name: "--years",
                  description:
                    "Number of years for which the credentials will be valid. Default: 1 year",
                  args: { name: "years" },
                },
              ],
            },
          ],
        },
        {
          name: "federated-credential",
          description: "Manage application federated identity credentials",
          subcommands: [
            {
              name: "create",
              description: "Create application federated identity credential",
              options: [
                {
                  name: "--id",
                  description:
                    "Application's appId, identifierUri, or id (formerly known as objectId)",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--parameters",
                  description:
                    "Parameters for creating federated identity credential. Should be JSON file path or in-line JSON string. See examples for details",
                  args: { name: "parameters" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete application federated identity credential",
              options: [
                {
                  name: "--federated-credential-id",
                  description:
                    "ID or name of the federated identity credential",
                  args: { name: "federated-credential-id" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description:
                    "Application's appId, identifierUri, or id (formerly known as objectId)",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List application federated identity credentials",
              options: [
                {
                  name: "--id",
                  description:
                    "Application's appId, identifierUri, or id (formerly known as objectId)",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show application federated identity credential",
              options: [
                {
                  name: "--federated-credential-id",
                  description:
                    "ID or name of the federated identity credential",
                  args: { name: "federated-credential-id" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description:
                    "Application's appId, identifierUri, or id (formerly known as objectId)",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update application federated identity credential",
              options: [
                {
                  name: "--federated-credential-id",
                  description:
                    "ID or name of the federated identity credential",
                  args: { name: "federated-credential-id" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description:
                    "Application's appId, identifierUri, or id (formerly known as objectId)",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--parameters",
                  description:
                    "Parameters for creating federated identity credential. Should be JSON file path or in-line JSON string. See examples for details",
                  args: { name: "parameters" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "owner",
          description: "Manage application owners",
          subcommands: [
            {
              name: "add",
              description: "Add an application owner",
              options: [
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--owner-object-id",
                  description: "Owner's object id",
                  args: { name: "owner-object-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List application owners",
              options: [
                {
                  name: "--id",
                  description:
                    "Identifier uri, application id, or object id of the application",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove an application owner",
              options: [
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--owner-object-id",
                  description: "Owner's object id",
                  args: { name: "owner-object-id" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "permission",
          description: "Manage an application's OAuth2 permissions",
          subcommands: [
            {
              name: "add",
              description: "Add an API permission",
              options: [
                {
                  name: "--api",
                  description:
                    "RequiredResourceAccess.resourceAppId - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application",
                  args: { name: "api" },
                  isRequired: true,
                },
                {
                  name: "--api-permissions",
                  description:
                    "Space-separated list of {id}={type}. {id} is resourceAccess.id - The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes. {type} is resourceAccess.type - Specifies whether the id property references an oauth2PermissionScopes or an appRole. The possible values are: Scope (for OAuth 2.0 permission scopes) or Role (for app roles)",
                  args: { name: "api-permissions" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "admin-consent",
              description:
                "Grant Application & Delegated permissions through admin-consent",
              options: [
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Remove an API permission",
              options: [
                {
                  name: "--api",
                  description:
                    "RequiredResourceAccess.resourceAppId - The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application",
                  args: { name: "api" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--api-permissions",
                  description:
                    "Specify ResourceAccess.id - The unique identifier for one of the OAuth2Permission or AppRole instances that the resource application exposes. Space-separated list of <resource-access-id>",
                  args: { name: "api-permissions" },
                },
              ],
            },
            {
              name: "grant",
              description: "Grant the app an API Delegated permissions",
              options: [
                {
                  name: ["--resource-id", "--api,"],
                  description:
                    "The id of the resource service principal to which access is authorized. This identifies the API which the client is authorized to attempt to call on behalf of a signed-in user",
                  args: { name: "resource-id" },
                  isRequired: true,
                },
                {
                  name: ["--client-id", "--id,"],
                  description:
                    "The id of the client service principal for the application which is authorized to act on behalf of a signed-in user when accessing an API",
                  args: { name: "client-id" },
                  isRequired: true,
                },
                {
                  name: "--scope",
                  description:
                    "A space-separated list of the claim values for delegated permissions which should be included in access tokens for the resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the value field of one of the delegated permissions defined by the API, listed in the oauth2PermissionScopes property of the resource service principal",
                  args: { name: "scope" },
                  isRequired: true,
                },
                {
                  name: "--consent-type",
                  description:
                    "Indicates whether authorization is granted for the client application to impersonate all users or only a specific user. 'AllPrincipals' indicates authorization to impersonate all users. 'Principal' indicates authorization to impersonate a specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to consent on behalf of themselves in some cases, for some delegated permissions",
                  args: {
                    name: "consent-type",
                    suggestions: ["AllPrincipals", "Principal"],
                  },
                },
                {
                  name: "--principal-id",
                  description:
                    "The id of the user on behalf of whom the client is authorized to access the resource, when consentType is 'Principal'. If consentType is 'AllPrincipals' this value is null. Required when consentType is 'Principal'",
                  args: { name: "principal-id" },
                },
              ],
            },
            {
              name: "list",
              description: "List API permissions the application has requested",
              options: [
                {
                  name: "--id",
                  description:
                    "Identifier uri, application id, or object id of the associated application",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list-grants",
              description: "List Oauth2 permission grants",
              options: [
                {
                  name: "--filter",
                  description:
                    "OData filter, e.g. --filter \"displayname eq 'test' and servicePrincipalType eq 'Application'\"",
                  args: { name: "filter" },
                },
                {
                  name: "--id",
                  description: "Identifier uri, application id, or object id",
                  args: { name: "id" },
                },
                {
                  name: ["--show-resource-name", "-r"],
                  description: "Show resource's display name",
                  args: {
                    name: "show-resource-name",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ds",
      description: "Manage domain service with azure active directory",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new domain service with the specified parameters",
          options: [
            {
              name: "--domain",
              description:
                "The name of the Azure domain that the user would like to deploy Domain Services to",
              args: { name: "domain" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the domain service",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--replica-sets",
              description: "List of ReplicaSets",
              args: { name: "replica-sets" },
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
              name: "--domain-config-type",
              description: "Domain Configuration Type",
              args: {
                name: "domain-config-type",
                suggestions: ["FullySynced", "ResourceTrusting"],
              },
            },
            {
              name: "--external-access",
              description:
                "A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled",
              args: {
                name: "external-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--filtered-sync",
              description:
                "Enabled or Disabled flag to turn on Group-based filtered sync",
              args: {
                name: "filtered-sync",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--ldaps",
              description:
                "A flag to determine whether or not Secure LDAP is enabled or disabled",
              args: { name: "ldaps", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--notify-dc-admins",
              description: "Should domain controller admins be notified",
              args: {
                name: "notify-dc-admins",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--notify-global-admins",
              description: "Should global admins be notified",
              args: {
                name: "notify-global-admins",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--notify-others",
              description: "The list of additional recipients",
              args: { name: "notify-others" },
            },
            {
              name: "--ntlm-v1",
              description:
                "A flag to determine whether or not NtlmV1 is enabled or disabled",
              args: { name: "ntlm-v1", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--pfx-cert",
              description:
                "The certificate required to configure Secure LDAP. The parameter passed here should be the file path to the certificate pfx file or a base64encoded representation of the certificate pfx file",
              args: { name: "pfx-cert" },
            },
            {
              name: "--pfx-cert-pwd",
              description:
                "The password to decrypt the provided Secure LDAP certificate pfx file",
              args: { name: "pfx-cert-pwd" },
            },
            {
              name: "--resource-forest",
              description: "Resource Forest",
              args: {
                name: "resource-forest",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--settings",
              description:
                "List of settings for Resource Forest. This can be either a JSON-formatted string or the location to a file containing the JSON object",
              args: { name: "settings" },
            },
            {
              name: "--sku",
              description: "Sku Type",
              args: {
                name: "sku",
                suggestions: ["Enterprise", "Premium", "Standard"],
              },
            },
            {
              name: "--sync-kerberos-pwd",
              description:
                "A flag to determine whether or not SyncKerberosPasswords is enabled or disabled",
              args: {
                name: "sync-kerberos-pwd",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sync-ntlm-pwd",
              description:
                "A flag to determine whether or not SyncNtlmPasswords is enabled or disabled",
              args: {
                name: "sync-ntlm-pwd",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sync-on-prem-pwd",
              description:
                "A flag to determine whether or not SyncOnPremPasswords is enabled or disabled",
              args: {
                name: "sync-on-prem-pwd",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--tls-v1",
              description:
                "A flag to determine whether or not TlsV1 is enabled or disabled",
              args: { name: "tls-v1", suggestions: ["Disabled", "Enabled"] },
            },
          ],
        },
        {
          name: "delete",
          description:
            "The Delete Domain Service operation deletes an existing Domain Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the domain service",
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
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
            "List domain services in resource group or in subscription",
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
          name: "show",
          description: "Get the specified domain service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the domain service",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the existing deployment properties for domain service",
          options: [
            {
              name: "--domain-config-type",
              description: "Domain Configuration Type",
              args: {
                name: "domain-config-type",
                suggestions: ["FullySynced", "ResourceTrusting"],
              },
            },
            {
              name: "--external-access",
              description:
                "A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled",
              args: {
                name: "external-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--filtered-sync",
              description:
                "Enabled or Disabled flag to turn on Group-based filtered sync",
              args: {
                name: "filtered-sync",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ldaps",
              description:
                "A flag to determine whether or not Secure LDAP is enabled or disabled",
              args: { name: "ldaps", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the domain service",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--notify-dc-admins",
              description: "Should domain controller admins be notified",
              args: {
                name: "notify-dc-admins",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--notify-global-admins",
              description: "Should global admins be notified",
              args: {
                name: "notify-global-admins",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--notify-others",
              description: "The list of additional recipients",
              args: { name: "notify-others" },
            },
            {
              name: "--ntlm-v1",
              description:
                "A flag to determine whether or not NtlmV1 is enabled or disabled",
              args: { name: "ntlm-v1", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--pfx-cert",
              description:
                "The certificate required to configure Secure LDAP. The parameter passed here should be the file path to the certificate pfx file or a base64encoded representation of the certificate pfx file",
              args: { name: "pfx-cert" },
            },
            {
              name: "--pfx-cert-pwd",
              description:
                "The password to decrypt the provided Secure LDAP certificate pfx file",
              args: { name: "pfx-cert-pwd" },
            },
            {
              name: "--replica-sets",
              description: "List of ReplicaSets",
              args: { name: "replica-sets" },
            },
            {
              name: "--resource-forest",
              description: "Resource Forest",
              args: {
                name: "resource-forest",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--settings",
              description:
                "List of settings for Resource Forest. This can be either a JSON-formatted string or the location to a file containing the JSON object",
              args: { name: "settings" },
            },
            {
              name: "--sku",
              description: "Sku Type",
              args: {
                name: "sku",
                suggestions: ["Enterprise", "Premium", "Standard"],
              },
            },
            {
              name: "--sync-kerberos-pwd",
              description:
                "A flag to determine whether or not SyncKerberosPasswords is enabled or disabled",
              args: {
                name: "sync-kerberos-pwd",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sync-ntlm-pwd",
              description:
                "A flag to determine whether or not SyncNtlmPasswords is enabled or disabled",
              args: {
                name: "sync-ntlm-pwd",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sync-on-prem-pwd",
              description:
                "A flag to determine whether or not SyncOnPremPasswords is enabled or disabled",
              args: {
                name: "sync-on-prem-pwd",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--tls-v1",
              description:
                "A flag to determine whether or not TlsV1 is enabled or disabled",
              args: { name: "tls-v1", suggestions: ["Disabled", "Enabled"] },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the ad ds is met",
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
              name: ["--name", "-n"],
              description: "The name of the domain service",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
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
      name: "group",
      description: "Manage Azure Active Directory groups",
      subcommands: [
        {
          name: "create",
          description: "Create a group in the directory",
          options: [
            {
              name: "--display-name",
              description: "Object's display name or its prefix",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--mail-nickname",
              description: "Mail nickname",
              args: { name: "mail-nickname" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Group description",
              args: { name: "description" },
            },
            {
              name: "--force",
              description:
                "Always create a new group instead of updating the one with same display and mail nickname",
              args: { name: "force", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a group from the directory",
          options: [
            {
              name: ["--group", "-g"],
              description:
                "Group's object id or display name(prefix also works if there is a unique match)",
              args: { name: "group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-member-groups",
          description:
            "Get a collection of object IDs of groups of which the specified group is a member",
          options: [
            {
              name: ["--group", "-g"],
              description:
                "Group's object id or display name(prefix also works if there is a unique match)",
              args: { name: "group" },
              isRequired: true,
            },
            {
              name: "--security-enabled-only",
              description:
                "True to specify that only security groups that the entity is a member of should be returned; false to specify that all groups and directory roles that the entity is a member of should be returned",
            },
          ],
        },
        {
          name: "list",
          description: "List groups in the directory",
          options: [
            {
              name: "--display-name",
              description: "Object's display name or its prefix",
              args: { name: "display-name" },
            },
            {
              name: "--filter",
              description:
                "OData filter, e.g. --filter \"displayname eq 'test' and servicePrincipalType eq 'Application'\"",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "show",
          description: "Get group information from the directory",
          options: [
            {
              name: ["--group", "-g"],
              description:
                "Group's object id or display name(prefix also works if there is a unique match)",
              args: { name: "group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "member",
          description: "Manage Azure Active Directory group members",
          subcommands: [
            {
              name: "add",
              description: "Add a member to a group",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
                {
                  name: "--member-id",
                  description:
                    "The object ID of the contact, group, user, or service principal",
                  args: { name: "member-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "check",
              description: "Check if a member is in a group",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
                {
                  name: "--member-id",
                  description:
                    "The object ID of the contact, group, user, or service principal",
                  args: { name: "member-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "Get the members of a group",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a member from a group",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
                {
                  name: "--member-id",
                  description:
                    "The object ID of the contact, group, user, or service principal",
                  args: { name: "member-id" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "owner",
          description: "Manage Azure Active Directory group owners",
          subcommands: [
            {
              name: "add",
              description: "Add a group owner",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
                {
                  name: "--owner-object-id",
                  description: "Owner's object id",
                  args: { name: "owner-object-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List group owners",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a group owner",
              options: [
                {
                  name: ["--group", "-g"],
                  description:
                    "Group's object id or display name(prefix also works if there is a unique match)",
                  args: { name: "group" },
                  isRequired: true,
                },
                {
                  name: "--owner-object-id",
                  description: "Owner's object id",
                  args: { name: "owner-object-id" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "signed-in-user",
      description: "Show graph information about current signed-in user in CLI",
      subcommands: [
        {
          name: "list-owned-objects",
          description:
            "Get the list of directory objects that are owned by the user",
          options: [
            {
              name: ["--type", "-t"],
              description:
                'Object type filter, e.g. "application", "servicePrincipal" "group", etc',
              args: { name: "type" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details for the currently logged-in user",
        },
      ],
    },
    {
      name: "sp",
      description:
        "Manage Azure Active Directory service principals for automation authentication",
      subcommands: [
        {
          name: "create",
          description: "Create a service principal",
          options: [
            {
              name: "--id",
              description:
                "Identifier uri, application id, or object id of the associated application",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create-for-rbac",
          description:
            "Create a service principal and configure its access to Azure resources",
          options: [
            {
              name: "--cert",
              description:
                "Certificate to use for credentials. When used with --keyvault,, indicates the name of the cert to use or create. Otherwise, supply a PEM or DER formatted public certificate string. Use @{path} to load from a file. Do not include private key info",
              args: { name: "cert" },
            },
            {
              name: "--create-cert",
              description:
                "Create a self-signed certificate to use for the credential. Only the current OS user has read/write permission to this certificate. Use with --keyvault to create the certificate in Key Vault. Otherwise, a certificate will be created locally",
            },
            {
              name: ["--display-name", "--name", "-n"],
              description:
                "Display name of the service principal. If not present, default to azure-cli-%Y-%m-%d-%H-%M-%S where the suffix is the time of creation",
              args: { name: "display-name" },
            },
            {
              name: ["--json-auth", "--sdk-auth"],
              description:
                "Option '--sdk-auth' has been deprecated and will be removed in a future release. Output service principal credential along with cloud endpoints in JSON format",
              args: { name: "json-auth", suggestions: ["false", "true"] },
            },
            {
              name: "--keyvault",
              description:
                "Name or ID of a KeyVault to use for creating or retrieving certificates",
              args: { name: "keyvault" },
            },
            {
              name: "--role",
              description: "Role of the service principal",
              args: { name: "role" },
            },
            {
              name: "--scopes",
              description:
                "Space-separated list of scopes the service principal's role assignment applies to. e.g., subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup, /subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM",
              args: { name: "scopes" },
            },
            {
              name: "--years",
              description:
                "Number of years for which the credentials will be valid. Default: 1 year",
              args: { name: "years" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a service principal",
          options: [
            {
              name: "--id",
              description: "Service principal name, or object id",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List service principals",
          options: [
            {
              name: "--all",
              description:
                "List all entities, expect long delay if under a big organization",
              args: { name: "all" },
            },
            {
              name: "--display-name",
              description: "Object's display name or its prefix",
              args: { name: "display-name" },
            },
            {
              name: "--filter",
              description:
                "OData filter, e.g. --filter \"displayname eq 'test' and servicePrincipalType eq 'Application'\"",
              args: { name: "filter" },
            },
            {
              name: "--show-mine",
              description: "List entities owned by the current user",
              args: { name: "show-mine" },
            },
            {
              name: "--spn",
              description: "Service principal name",
              args: { name: "spn" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a service principal",
          options: [
            {
              name: "--id",
              description: "Service principal name, or object id",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a service principal",
          options: [
            {
              name: "--id",
              description: "Service principal name, or object id",
              args: { name: "id" },
              isRequired: true,
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
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
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
          name: "credential",
          description:
            "Manage a service principal's password or certificate credentials",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a service principal's password or certificate credentials",
              options: [
                {
                  name: "--id",
                  description: "Service principal name, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--key-id",
                  description: "Credential key id",
                  args: { name: "key-id" },
                  isRequired: true,
                },
                {
                  name: "--cert",
                  description: "Operate on certificate credentials",
                },
              ],
            },
            {
              name: "list",
              description:
                "List a service principal's password or certificate credential metadata. (The content of the password or certificate credential is not retrievable.)",
              options: [
                {
                  name: "--id",
                  description: "Service principal name, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--cert",
                  description: "Operate on certificate credentials",
                },
              ],
            },
            {
              name: "reset",
              description:
                "Reset a service principal's password or certificate credentials",
              options: [
                {
                  name: "--id",
                  description: "Service principal name, or object id",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--append",
                  description:
                    "Append the new credential instead of overwriting",
                },
                {
                  name: "--cert",
                  description:
                    "Certificate to use for credentials. When used with --keyvault,, indicates the name of the cert to use or create. Otherwise, supply a PEM or DER formatted public certificate string. Use @{path} to load from a file. Do not include private key info",
                  args: { name: "cert" },
                },
                {
                  name: "--create-cert",
                  description:
                    "Create a self-signed certificate to use for the credential. Only the current OS user has read/write permission to this certificate. Use with --keyvault to create the certificate in Key Vault. Otherwise, a certificate will be created locally",
                },
                {
                  name: "--display-name",
                  description: "Friendly name for the credential",
                  args: { name: "display-name" },
                },
                {
                  name: "--end-date",
                  description:
                    "Finer grain of expiry time if '--years' is insufficient, e.g. '2020-12-31T11:59:59+00:00' or '2299-12-31'",
                  args: { name: "end-date" },
                },
                {
                  name: "--keyvault",
                  description:
                    "Name or ID of a KeyVault to use for creating or retrieving certificates",
                  args: { name: "keyvault" },
                },
                {
                  name: "--years",
                  description:
                    "Number of years for which the credentials will be valid. Default: 1 year",
                  args: { name: "years" },
                },
              ],
            },
          ],
        },
        {
          name: "owner",
          description: "Manage service principal owners",
          subcommands: [
            {
              name: "list",
              description: "List service principal owners",
              options: [
                {
                  name: "--id",
                  description:
                    "Service principal name, or object id or the service principal",
                  args: { name: "id" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "user",
      description:
        "Manage Azure Active Directory users and user authentication",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure Active Directory user",
          options: [
            {
              name: "--display-name",
              description: "Object's display name or its prefix",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--password",
              description:
                "The password that should be assigned to the user for authentication",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--user-principal-name",
              description:
                "The user principal name (someuser@contoso.com). It must contain one of the verified domains for the tenant",
              args: { name: "user-principal-name" },
              isRequired: true,
            },
            {
              name: "--force-change-password-next-sign-in",
              description:
                "Marks this user as needing to update their password the next time they authenticate. If omitted, false will be used",
            },
            {
              name: "--immutable-id",
              description:
                "This must be specified if you are using a federated domain for the user's userPrincipalName (UPN) property when creating a new user account. It is used to associate an on-premises Active Directory user account with their Azure AD user object",
              args: { name: "immutable-id" },
            },
            {
              name: "--mail-nickname",
              description: "Mail alias. Defaults to user principal name",
              args: { name: "mail-nickname" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete Azure Active Directory user",
          options: [
            {
              name: "--id",
              description:
                "The object ID or principal name of the user for which to get information",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-member-groups",
          description: "Get groups of which the user is a member",
          options: [
            {
              name: "--id",
              description:
                "The object ID or principal name of the user for which to get information",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--security-enabled-only",
              description:
                "True to specify that only security groups that the entity is a member of should be returned; false to specify that all groups and directory roles that the entity is a member of should be returned",
            },
          ],
        },
        {
          name: "list",
          description: "List Azure Active Directory users",
          options: [
            {
              name: "--display-name",
              description: "Object's display name or its prefix",
              args: { name: "display-name" },
            },
            {
              name: "--filter",
              description:
                "OData filter, e.g. --filter \"displayname eq 'test' and servicePrincipalType eq 'Application'\"",
              args: { name: "filter" },
            },
            {
              name: "--upn",
              description: "User principal name, e.g. john.doe@contoso.com",
              args: { name: "upn" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details for a Azure Active Directory user",
          options: [
            {
              name: "--id",
              description:
                "The object ID or principal name of the user for which to get information",
              args: { name: "id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update Azure Active Directory users",
          options: [
            {
              name: "--id",
              description:
                "The object ID or principal name of the user for which to get information",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--account-enabled",
              description: "Enable the user account",
              args: { name: "account-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--display-name",
              description: "Object's display name or its prefix",
              args: { name: "display-name" },
            },
            {
              name: "--force-change-password-next-sign-in",
              description:
                "If the user must change her password on the next login",
              args: {
                name: "force-change-password-next-sign-in",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--mail-nickname",
              description: "Mail alias. Defaults to user principal name",
              args: { name: "mail-nickname" },
            },
            {
              name: "--password",
              description: "User password",
              args: { name: "password" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
