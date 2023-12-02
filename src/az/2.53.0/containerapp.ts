const completion: Fig.Spec = {
  name: "containerapp",
  description: "Manage Azure Container Apps",
  subcommands: [
    {
      name: "auth",
      description: "Manage containerapp authentication and authorization",
      subcommands: [
        {
          name: "show",
          description: "Show the authentication settings for the containerapp",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
            "Update the authentication settings for the containerapp",
          options: [
            {
              name: ["--unauthenticated-client-action", "--action"],
              description:
                "The action to take when an unauthenticated client attempts to access the app",
              args: {
                name: "unauthenticated-client-action",
                suggestions: [
                  "AllowAnonymous",
                  "RedirectToLoginPage",
                  "Return401",
                  "Return403",
                ],
              },
            },
            {
              name: "--config-file-path",
              description:
                "The path of the config file containing auth settings if they come from a file",
              args: { name: "config-file-path" },
            },
            {
              name: ["--proxy-custom-host-header", "--custom-host-header"],
              description:
                "The name of the header containing the host of the request",
              args: { name: "proxy-custom-host-header" },
            },
            {
              name: ["--proxy-custom-proto-header", "--custom-proto-header"],
              description:
                "The name of the header containing the scheme of the request",
              args: { name: "proxy-custom-proto-header" },
            },
            {
              name: "--enabled",
              description:
                "True if the Authentication / Authorization feature is enabled for the current app; otherwise, false",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--excluded-paths",
              description:
                "The list of paths that should be excluded from authentication rules",
              args: { name: "excluded-paths" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: "--proxy-convention",
              description:
                "The convention used to determine the url of the request made",
              args: {
                name: "proxy-convention",
                suggestions: ["Custom", "NoProxy", "Standard"],
              },
            },
            {
              name: "--redirect-provider",
              description:
                "The default authentication provider to use when multiple providers are configured",
              args: { name: "redirect-provider" },
            },
            {
              name: "--require-https",
              description:
                "False if the authentication/authorization responses not having the HTTPS scheme are permissible; otherwise, true",
              args: { name: "require-https", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--runtime-version",
              description:
                "The RuntimeVersion of the Authentication / Authorization feature in use for the current app",
              args: { name: "runtime-version" },
            },
            {
              name: "--sas-url-secret",
              description:
                "The blob storage SAS URL to be used for token store",
              args: { name: "sas-url-secret" },
            },
            {
              name: "--sas-url-secret-name",
              description:
                "The secret name that contains blob storage SAS URL to be used for token store",
              args: { name: "sas-url-secret-name" },
            },
            {
              name: "--set",
              description:
                "Value of a specific field within the configuration settings for the Azure App Service Authentication / Authorization feature",
              args: { name: "set" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--token-store",
              description:
                "Boolean indicating if token store is enabled for the app",
              args: { name: "token-store", suggestions: ["false", "true"] },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "apple",
          description:
            "Manage containerapp authentication and authorization of the Apple identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Apple identity provider",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the client id and client secret for the Apple identity provider",
              options: [
                {
                  name: "--client-id",
                  description: "The Client ID of the app used for login",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "The client secret",
                  args: { name: "client-secret" },
                },
                {
                  name: "--client-secret-name",
                  description:
                    "The app secret name that contains the client secret of the relying party application",
                  args: { name: "client-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "A list of the scopes that should be requested while authenticating",
                  args: { name: "scopes" },
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
          ],
        },
        {
          name: "facebook",
          description:
            "Manage containerapp authentication and authorization of the Facebook identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Facebook identity provider",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the app id and app secret for the Facebook identity provider",
              options: [
                {
                  name: "--app-id",
                  description: "The App ID of the app used for login",
                  args: { name: "app-id" },
                },
                {
                  name: "--app-secret",
                  description: "The app secret",
                  args: { name: "app-secret" },
                },
                {
                  name: ["--app-secret-name", "--secret-name"],
                  description:
                    "The app secret name that contains the app secret",
                  args: { name: "app-secret-name" },
                },
                {
                  name: "--graph-api-version",
                  description:
                    "The version of the Facebook api to be used while logging in",
                  args: { name: "graph-api-version" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "A list of the scopes that should be requested while authenticating",
                  args: { name: "scopes" },
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
          ],
        },
        {
          name: "github",
          description:
            "Manage containerapp authentication and authorization of the GitHub identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the GitHub identity provider",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the client id and client secret for the GitHub identity provider",
              options: [
                {
                  name: "--client-id",
                  description: "The Client ID of the app used for login",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "The client secret",
                  args: { name: "client-secret" },
                },
                {
                  name: "--client-secret-name",
                  description:
                    "The app secret name that contains the client secret of the relying party application",
                  args: { name: "client-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "A list of the scopes that should be requested while authenticating",
                  args: { name: "scopes" },
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
          ],
        },
        {
          name: "google",
          description:
            "Manage containerapp authentication and authorization of the Google identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Google identity provider",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the client id and client secret for the Google identity provider",
              options: [
                {
                  name: ["--allowed-token-audiences", "--allowed-audiences"],
                  description:
                    "The configuration settings of the allowed list of audiences from which to validate the JWT token",
                  args: { name: "allowed-token-audiences" },
                },
                {
                  name: "--client-id",
                  description: "The Client ID of the app used for login",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "The client secret",
                  args: { name: "client-secret" },
                },
                {
                  name: "--client-secret-name",
                  description:
                    "The app secret name that contains the client secret of the relying party application",
                  args: { name: "client-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "A list of the scopes that should be requested while authenticating",
                  args: { name: "scopes" },
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
          ],
        },
        {
          name: "microsoft",
          description:
            "Manage containerapp authentication and authorization of the Microsoft identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Azure Active Directory identity provider",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the client id and client secret for the Azure Active Directory identity provider",
              options: [
                {
                  name: ["--allowed-token-audiences", "--allowed-audiences"],
                  description:
                    "The configuration settings of the allowed list of audiences from which to validate the JWT token",
                  args: { name: "allowed-token-audiences" },
                },
                {
                  name: [
                    "--client-secret-certificate-issuer",
                    "--certificate-issuer",
                  ],
                  description:
                    "Alternative to AAD Client Secret and thumbprint, issuer of a certificate used for signing purposes",
                  args: { name: "client-secret-certificate-issuer" },
                },
                {
                  name: "--client-id",
                  description: "The Client ID of the app used for login",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "The client secret",
                  args: { name: "client-secret" },
                },
                {
                  name: ["--client-secret-certificate-san", "--san"],
                  description:
                    "Alternative to AAD Client Secret and thumbprint, subject alternative name of a certificate used for signing purposes",
                  args: { name: "client-secret-certificate-san" },
                },
                {
                  name: [
                    "--client-secret-certificate-thumbprint",
                    "--thumbprint",
                  ],
                  description:
                    "Alternative to AAD Client Secret, thumbprint of a certificate used for signing purposes",
                  args: { name: "client-secret-certificate-thumbprint" },
                },
                {
                  name: "--client-secret-name",
                  description:
                    "The app secret name that contains the client secret of the relying party application",
                  args: { name: "client-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--issuer",
                  description:
                    "The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application",
                  args: { name: "issuer" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                  name: "--tenant-id",
                  description: "The tenant id of the application",
                  args: { name: "tenant-id" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
        {
          name: "openid-connect",
          description:
            "Manage containerapp authentication and authorization of the custom OpenID Connect identity providers",
          subcommands: [
            {
              name: "add",
              description:
                "Configure a new custom OpenID Connect identity provider",
              options: [
                {
                  name: "--provider-name",
                  description: "The name of the custom OpenID Connect provider",
                  args: { name: "provider-name" },
                  isRequired: true,
                },
                {
                  name: "--client-id",
                  description: "The Client ID of the app used for login",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "The client secret",
                  args: { name: "client-secret" },
                },
                {
                  name: "--client-secret-name",
                  description:
                    "The app secret name that contains the client secret of the relying party application",
                  args: { name: "client-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: "--openid-configuration",
                  description:
                    "The endpoint that contains all the configuration endpoints for the provider",
                  args: { name: "openid-configuration" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "A list of the scopes that should be requested while authenticating",
                  args: { name: "scopes" },
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
              name: "remove",
              description:
                "Removes an existing custom OpenID Connect identity provider",
              options: [
                {
                  name: "--provider-name",
                  description: "The name of the custom OpenID Connect provider",
                  args: { name: "provider-name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              description:
                "Show the authentication settings for the custom OpenID Connect identity provider",
              options: [
                {
                  name: "--provider-name",
                  description: "The name of the custom OpenID Connect provider",
                  args: { name: "provider-name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the client id and client secret setting name for an existing custom OpenID Connect identity provider",
              options: [
                {
                  name: "--provider-name",
                  description: "The name of the custom OpenID Connect provider",
                  args: { name: "provider-name" },
                  isRequired: true,
                },
                {
                  name: "--client-id",
                  description: "The Client ID of the app used for login",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "The client secret",
                  args: { name: "client-secret" },
                },
                {
                  name: "--client-secret-name",
                  description:
                    "The app secret name that contains the client secret of the relying party application",
                  args: { name: "client-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: "--openid-configuration",
                  description:
                    "The endpoint that contains all the configuration endpoints for the provider",
                  args: { name: "openid-configuration" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "A list of the scopes that should be requested while authenticating",
                  args: { name: "scopes" },
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
          ],
        },
        {
          name: "twitter",
          description:
            "Manage containerapp authentication and authorization of the Twitter identity provider",
          subcommands: [
            {
              name: "show",
              description:
                "Show the authentication settings for the Twitter identity provider",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                "Update the consumer key and consumer secret for the Twitter identity provider",
              options: [
                {
                  name: "--consumer-key",
                  description:
                    "The OAuth 1.0a consumer key of the Twitter application used for sign-in",
                  args: { name: "consumer-key" },
                },
                {
                  name: "--consumer-secret",
                  description: "The consumer secret",
                  args: { name: "consumer-secret" },
                },
                {
                  name: ["--consumer-secret-name", "--secret-name"],
                  description:
                    "The consumer secret name that contains the app secret",
                  args: { name: "consumer-secret-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
      ],
    },
    {
      name: "browse",
      description: "Open a containerapp in the browser, if possible",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
          args: { name: "name" },
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
      name: "create",
      description: "Create a container app",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
          args: { name: "name" },
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
          name: "--allow-insecure",
          description: "Allow insecure connections for ingress traffic",
        },
        {
          name: "--args",
          description:
            'A list of container startup command argument(s). Space-separated values e.g. "-c" "mycommand". Empty string to clear existing values',
          args: { name: "args" },
        },
        {
          name: "--bind",
          description:
            "Space separated list of services(bindings) to be connected to this app. e.g. SVC_NAME1[:BIND_NAME1] SVC_NAME2[:BIND_NAME2]",
          args: { name: "bind" },
        },
        {
          name: ["--branch", "-b"],
          description:
            "Branch in the provided GitHub repository. Assumed to be the GitHub repository's default branch if not specified",
          args: { name: "branch" },
        },
        {
          name: "--command",
          description:
            'A list of supported commands on the container that will executed during startup. Space-separated values e.g. "/bin/queue" "mycommand". Empty string to clear existing values',
          args: { name: "command" },
        },
        {
          name: "--container-name",
          description: "Name of the container",
          args: { name: "container-name" },
        },
        {
          name: "--context-path",
          description:
            'Path in the repository to run docker build. Defaults to "./". Dockerfile is assumed to be named "Dockerfile" and in this directory',
          args: { name: "context-path" },
        },
        {
          name: "--cpu",
          description: "Required CPU in cores from 0.25 - 2.0, e.g. 0.5",
          args: { name: "cpu" },
        },
        {
          name: ["--dapr-enable-api-logging", "--dal"],
          description: "Enable API logging for the Dapr sidecar",
        },
        {
          name: "--dapr-app-id",
          description: "The Dapr application identifier",
          args: { name: "dapr-app-id" },
        },
        {
          name: "--dapr-app-port",
          description: "The port Dapr uses to talk to the application",
          args: { name: "dapr-app-port" },
        },
        {
          name: "--dapr-app-protocol",
          description: "The protocol Dapr uses to talk to the application",
          args: { name: "dapr-app-protocol", suggestions: ["grpc", "http"] },
        },
        {
          name: ["--dapr-http-max-request-size", "--dhmrs"],
          description:
            "Increase max size of request body http and grpc servers parameter in MB to handle uploading of big files",
          args: { name: "dapr-http-max-request-size" },
        },
        {
          name: ["--dapr-http-read-buffer-size", "--dhrbs"],
          description:
            "Dapr max size of http header read buffer in KB to handle when sending multi-KB headers",
          args: { name: "dapr-http-read-buffer-size" },
        },
        {
          name: "--dapr-log-level",
          description: "Set the log level for the Dapr sidecar",
          args: {
            name: "dapr-log-level",
            suggestions: ["debug", "error", "info", "warn"],
          },
        },
        {
          name: "--enable-dapr",
          description: "Boolean indicating if the Dapr side car is enabled",
        },
        {
          name: "--env-vars",
          description:
            "A list of environment variable(s) for the container. Space-separated values in 'key=value' format. Empty string to clear existing values. Prefix value with 'secretref:' to reference a secret",
          args: { name: "env-vars" },
        },
        {
          name: "--environment",
          description: "Name or resource ID of the container app's environment",
          args: { name: "environment" },
        },
        {
          name: "--environment-type",
          description: "Type of environment",
          args: {
            name: "environment-type",
            suggestions: ["connected", "managed"],
          },
        },
        {
          name: "--exposed-port",
          description:
            "Additional exposed port. Only supported by tcp transport protocol. Must be unique per environment if the app ingress is external",
          args: { name: "exposed-port" },
        },
        {
          name: ["--image", "-i"],
          description: "Container image, e.g. publisher/image-name:tag",
          args: { name: "image" },
        },
        {
          name: "--ingress",
          description: "The ingress type",
          args: { name: "ingress", suggestions: ["external", "internal"] },
        },
        {
          name: "--max-replicas",
          description: "The maximum number of replicas",
          args: { name: "max-replicas" },
        },
        {
          name: "--memory",
          description:
            'Required memory from 0.5 - 4.0 ending with "Gi", e.g. 1.0Gi',
          args: { name: "memory" },
        },
        {
          name: "--min-replicas",
          description: "The minimum number of replicas",
          args: { name: "min-replicas" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--registry-identity",
          description:
            "A Managed Identity to authenticate with the registry server instead of username/password. Use a resource ID or 'system' for user-defined and system-defined identities, respectively. The registry must be an ACR. If possible, an 'acrpull' role assignemnt will be created for the identity automatically",
          args: { name: "registry-identity" },
        },
        {
          name: "--registry-password",
          description:
            "The password to log in to container registry. If stored as a secret, value must start with 'secretref:' followed by the secret name",
          args: { name: "registry-password" },
        },
        {
          name: "--registry-server",
          description:
            "The container registry server hostname, e.g. myregistry.azurecr.io",
          args: { name: "registry-server" },
        },
        {
          name: "--registry-username",
          description: "The username to log in to container registry",
          args: { name: "registry-username" },
        },
        {
          name: "--repo",
          description:
            "Create an app via GitHub Actions in the format: https://github.com// or /",
          args: { name: "repo" },
        },
        {
          name: "--revision-suffix",
          description:
            "User friendly suffix that is appended to the revision name",
          args: { name: "revision-suffix" },
        },
        {
          name: "--revisions-mode",
          description: "The active revisions mode for the container app",
          args: { name: "revisions-mode", suggestions: ["multiple", "single"] },
        },
        {
          name: ["--scale-rule-auth", "--sra"],
          description:
            'Scale rule auth parameters. Auth parameters must be in format "= = ..."',
          args: { name: "scale-rule-auth" },
        },
        {
          name: [
            "--scale-rule-http-concurrency",
            "--scale-rule-tcp-concurrency",
            "--srhc",
            "--srtc",
          ],
          description:
            "The maximum number of concurrent requests before scale out. Only supported for http and tcp scale rules",
          args: { name: "scale-rule-http-concurrency" },
        },
        {
          name: ["--scale-rule-metadata", "--srm"],
          description:
            'Scale rule metadata. Metadata must be in format "= = ..."',
          args: { name: "scale-rule-metadata" },
        },
        {
          name: ["--scale-rule-name", "--srn"],
          description: "The name of the scale rule",
          args: { name: "scale-rule-name" },
        },
        {
          name: ["--scale-rule-type", "--srt"],
          description:
            "The type of the scale rule. Default: http. For more information please visit https://learn.microsoft.com/azure/container-apps/scale-app#scale-triggers",
          args: { name: "scale-rule-type" },
        },
        {
          name: "--secret-volume-mount",
          description: "Path to mount all secrets e.g. mnt/secrets",
          args: { name: "secret-volume-mount" },
        },
        {
          name: ["--secrets", "-s"],
          description:
            "A list of secret(s) for the container app. Space-separated values in 'key=value' format",
          args: { name: "secrets" },
        },
        {
          name: ["--service-principal-client-id", "--sp-cid"],
          description:
            "The service principal client ID. Used by GitHub Actions to authenticate with Azure",
          args: { name: "service-principal-client-id" },
        },
        {
          name: ["--service-principal-client-secret", "--sp-sec"],
          description:
            "The service principal client secret. Used by GitHub Actions to authenticate with Azure",
          args: { name: "service-principal-client-secret" },
        },
        {
          name: ["--service-principal-tenant-id", "--sp-tid"],
          description:
            "The service principal tenant ID. Used by GitHub Actions to authenticate with Azure",
          args: { name: "service-principal-tenant-id" },
        },
        {
          name: "--source",
          description:
            "Local directory path containing the application source and Dockerfile for building the container image. Preview: If no Dockerfile is present, a container image is generated using buildpacks. If Docker is not running or buildpacks cannot be used, Oryx will be used to generate the image. See the supported Oryx runtimes here: https://github.com/microsoft/Oryx/blob/main/doc/supportedRuntimeVersions.md",
          args: { name: "source" },
        },
        {
          name: "--system-assigned",
          description:
            "Boolean indicating whether to assign system-assigned identity",
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--target-port",
          description: "The application port used for ingress traffic",
          args: { name: "target-port" },
        },
        {
          name: ["--termination-grace-period", "--tgp"],
          description:
            "Duration in seconds a replica is given to gracefully shut down before it is forcefully terminated. (Default: 30)",
          args: { name: "termination-grace-period" },
        },
        {
          name: "--token",
          description:
            "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line. If not provided or not found in the cache (and using --repo), a browser page will be opened to authenticate with Github",
          args: { name: "token" },
        },
        {
          name: "--transport",
          description: "The transport protocol used for ingress traffic",
          args: {
            name: "transport",
            suggestions: ["auto", "http", "http2", "tcp"],
          },
        },
        {
          name: "--user-assigned",
          description: "Space-separated user identities to be assigned",
          args: { name: "user-assigned" },
        },
        {
          name: ["--workload-profile-name", "-w"],
          description: "Name of the workload profile to run the app on",
          args: { name: "workload-profile-name" },
        },
        {
          name: "--yaml",
          description:
            "Path to a .yaml file with the configuration of a container app. All other parameters will be ignored. For an example, see https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec#examples",
          args: { name: "yaml" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a container app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "exec",
      description:
        "Open an SSH-like interactive shell within a container app replica",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Containerapp",
          args: { name: "name" },
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
          name: "--command",
          description: "The startup command (bash, zsh, sh, etc.)",
          args: { name: "command" },
        },
        {
          name: "--container",
          description: "The name of the container to ssh into",
          args: { name: "container" },
        },
        {
          name: "--replica",
          description:
            "The name of the replica to ssh into. List replicas with 'az containerapp replica list'. A replica may not exist if there is not traffic to your app",
          args: { name: "replica" },
        },
        {
          name: "--revision",
          description:
            "The name of the container app revision to ssh into. Defaults to the latest revision",
          args: { name: "revision" },
        },
      ],
    },
    {
      name: "list",
      description: "List container apps",
      options: [
        {
          name: "--environment",
          description: "Name or resource ID of the container app's environment",
          args: { name: "environment" },
        },
        {
          name: "--environment-type",
          description: "Type of environment",
          args: {
            name: "environment-type",
            suggestions: ["connected", "managed"],
          },
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
      name: "list-usages",
      description:
        "List usages of subscription level quotas in specific region",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description: "Show details of a container app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        { name: "--show-secrets", description: "Show Containerapp secrets" },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "show-custom-domain-verification-id",
      description:
        "Show the verification id for binding app or environment custom domains",
    },
    {
      name: "up",
      description:
        "Create or update a container app as well as any associated resources (ACR, resource group, container apps environment, GitHub Actions, etc.)",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--branch", "-b"],
          description:
            "The branch of the Github repo. Assumed to be the Github repo's default branch if not specified",
          args: { name: "branch" },
        },
        {
          name: "--browse",
          description:
            "Open the app in a web browser after creation and deployment, if possible",
        },
        {
          name: "--context-path",
          description:
            'Path in the repo from which to run the docker build. Defaults to "./". Dockerfile is assumed to be named "Dockerfile" and in this directory',
          args: { name: "context-path" },
        },
        {
          name: "--env-vars",
          description:
            "A list of environment variable(s) for the container. Space-separated values in 'key=value' format. Empty string to clear existing values. Prefix value with 'secretref:' to reference a secret",
          args: { name: "env-vars" },
        },
        {
          name: "--environment",
          description: "Name or resource ID of the container app's environment",
          args: { name: "environment" },
        },
        {
          name: ["--image", "-i"],
          description: "Container image, e.g. publisher/image-name:tag",
          args: { name: "image" },
        },
        {
          name: "--ingress",
          description: "The ingress type",
          args: { name: "ingress", suggestions: ["external", "internal"] },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--logs-workspace-id",
          description:
            'Workspace ID of the Log Analytics workspace to send diagnostics logs to. You can use "az monitor log-analytics workspace create" to create one. Extra billing may apply',
          args: { name: "logs-workspace-id" },
        },
        {
          name: "--logs-workspace-key",
          description:
            'Log Analytics workspace key to configure your Log Analytics workspace. You can use "az monitor log-analytics workspace get-shared-keys" to retrieve the key',
          args: { name: "logs-workspace-key" },
        },
        {
          name: "--registry-password",
          description:
            "The password to log in to container registry. If stored as a secret, value must start with 'secretref:' followed by the secret name",
          args: { name: "registry-password" },
        },
        {
          name: "--registry-server",
          description:
            "The container registry server hostname, e.g. myregistry.azurecr.io",
          args: { name: "registry-server" },
        },
        {
          name: "--registry-username",
          description: "The username to log in to container registry",
          args: { name: "registry-username" },
        },
        {
          name: "--repo",
          description:
            "Create an app via Github Actions. In the format: https://github.com// or /",
          args: { name: "repo" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--service-principal-client-id", "--sp-cid"],
          description:
            "The service principal client ID. Used by Github Actions to authenticate with Azure",
          args: { name: "service-principal-client-id" },
        },
        {
          name: ["--service-principal-client-secret", "--sp-sec"],
          description:
            "The service principal client secret. Used by Github Actions to authenticate with Azure",
          args: { name: "service-principal-client-secret" },
        },
        {
          name: ["--service-principal-tenant-id", "--sp-tid"],
          description:
            "The service principal tenant ID. Used by Github Actions to authenticate with Azure",
          args: { name: "service-principal-tenant-id" },
        },
        {
          name: "--source",
          description:
            "Local directory path containing the application source and Dockerfile for building the container image. Preview: If no Dockerfile is present, a container image is generated using buildpacks. If Docker is not running or buildpacks cannot be used, Oryx will be used to generate the image. See the supported Oryx runtimes here: https://github.com/microsoft/Oryx/blob/main/doc/supportedRuntimeVersions.md",
          args: { name: "source" },
        },
        {
          name: "--target-port",
          description: "The application port used for ingress traffic",
          args: { name: "target-port" },
        },
        {
          name: "--token",
          description:
            "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line. If not provided or not found in the cache (and using --repo), a browser page will be opened to authenticate with Github",
          args: { name: "token" },
        },
        {
          name: ["--workload-profile-name", "-w"],
          description: "The friendly name for the workload profile",
          args: { name: "workload-profile-name" },
        },
      ],
    },
    {
      name: "update",
      description:
        "Update a container app. In multiple revisions mode, create a new revision based on the latest revision",
      options: [
        {
          name: "--args",
          description:
            'A list of container startup command argument(s). Space-separated values e.g. "-c" "mycommand". Empty string to clear existing values',
          args: { name: "args" },
        },
        {
          name: "--bind",
          description:
            "Space separated list of services(bindings) to be connected to this app. e.g. SVC_NAME1[:BIND_NAME1] SVC_NAME2[:BIND_NAME2]",
          args: { name: "bind" },
        },
        {
          name: "--command",
          description:
            'A list of supported commands on the container that will executed during startup. Space-separated values e.g. "/bin/queue" "mycommand". Empty string to clear existing values',
          args: { name: "command" },
        },
        {
          name: "--container-name",
          description: "Name of the container",
          args: { name: "container-name" },
        },
        {
          name: "--cpu",
          description: "Required CPU in cores from 0.25 - 2.0, e.g. 0.5",
          args: { name: "cpu" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--image", "-i"],
          description: "Container image, e.g. publisher/image-name:tag",
          args: { name: "image" },
        },
        {
          name: "--max-replicas",
          description: "The maximum number of replicas",
          args: { name: "max-replicas" },
        },
        {
          name: "--memory",
          description:
            'Required memory from 0.5 - 4.0 ending with "Gi", e.g. 1.0Gi',
          args: { name: "memory" },
        },
        {
          name: "--min-replicas",
          description: "The minimum number of replicas",
          args: { name: "min-replicas" },
        },
        {
          name: ["--name", "-n"],
          description:
            "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--remove-all-env-vars",
          description: "Remove all environment variable(s) from container",
        },
        {
          name: "--remove-env-vars",
          description:
            "Remove environment variable(s) from container. Space-separated environment variable names",
          args: { name: "remove-env-vars" },
        },
        {
          name: "--replace-env-vars",
          description:
            "Replace environment variable(s) in container. Other existing environment variables are removed. Space-separated values in 'key=value' format. If stored as a secret, value must start with 'secretref:' followed by the secret name",
          args: { name: "replace-env-vars" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--revision-suffix",
          description:
            "User friendly suffix that is appended to the revision name",
          args: { name: "revision-suffix" },
        },
        {
          name: ["--scale-rule-auth", "--sra"],
          description:
            'Scale rule auth parameters. Auth parameters must be in format "= = ..."',
          args: { name: "scale-rule-auth" },
        },
        {
          name: [
            "--scale-rule-http-concurrency",
            "--scale-rule-tcp-concurrency",
            "--srhc",
            "--srtc",
          ],
          description:
            "The maximum number of concurrent requests before scale out. Only supported for http and tcp scale rules",
          args: { name: "scale-rule-http-concurrency" },
        },
        {
          name: ["--scale-rule-metadata", "--srm"],
          description:
            'Scale rule metadata. Metadata must be in format "= = ..."',
          args: { name: "scale-rule-metadata" },
        },
        {
          name: ["--scale-rule-name", "--srn"],
          description: "The name of the scale rule",
          args: { name: "scale-rule-name" },
        },
        {
          name: ["--scale-rule-type", "--srt"],
          description:
            "The type of the scale rule. Default: http. For more information please visit https://learn.microsoft.com/azure/container-apps/scale-app#scale-triggers",
          args: { name: "scale-rule-type" },
        },
        {
          name: "--secret-volume-mount",
          description: "Path to mount all secrets e.g. mnt/secrets",
          args: { name: "secret-volume-mount" },
        },
        {
          name: "--set-env-vars",
          description:
            "Add or update environment variable(s) in container. Existing environment variables are not modified. Space-separated values in 'key=value' format. If stored as a secret, value must start with 'secretref:' followed by the secret name",
          args: { name: "set-env-vars" },
        },
        {
          name: "--source",
          description:
            "Local directory path containing the application source and Dockerfile for building the container image. Preview: If no Dockerfile is present, a container image is generated using buildpacks. If Docker is not running or buildpacks cannot be used, Oryx will be used to generate the image. See the supported Oryx runtimes here: https://github.com/microsoft/Oryx/blob/main/doc/supportedRuntimeVersions.md",
          args: { name: "source" },
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
          name: ["--termination-grace-period", "--tgp"],
          description:
            "Duration in seconds a replica is given to gracefully shut down before it is forcefully terminated. (Default: 30)",
          args: { name: "termination-grace-period" },
        },
        {
          name: "--unbind",
          description:
            "Space separated list of services(bindings) to be removed from this app. e.g. BIND_NAME1",
          args: { name: "unbind" },
        },
        {
          name: ["--workload-profile-name", "-w"],
          description: "The friendly name for the workload profile",
          args: { name: "workload-profile-name" },
        },
        {
          name: "--yaml",
          description:
            "Path to a .yaml file with the configuration of a container app. All other parameters will be ignored. For an example, see https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec#examples",
          args: { name: "yaml" },
        },
      ],
    },
    {
      name: "compose",
      description:
        "Commands to create Azure Container Apps from Compose specifications",
      subcommands: [
        {
          name: "create",
          description:
            "Create one or more Container Apps in a new or existing Container App Environment from a Compose specification",
          options: [
            {
              name: "--environment",
              description:
                "Name or resource ID of the container app's environment",
              args: { name: "environment" },
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
              name: ["--compose-file-path", "-f"],
              description:
                "Path to a Docker Compose file with the configuration to import to Azure Container Apps",
              args: { name: "compose-file-path" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--registry-password",
              description:
                "The password to log in to container registry. If stored as a secret, value must start with 'secretref:' followed by the secret name",
              args: { name: "registry-password" },
            },
            {
              name: "--registry-server",
              description:
                "The container registry server hostname, e.g. myregistry.azurecr.io",
              args: { name: "registry-server" },
            },
            {
              name: "--registry-username",
              description: "The username to log in to container registry",
              args: { name: "registry-username" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--transport",
              description:
                "Option '--transport' has been deprecated and will be removed in a future release. Use '--transport-mapping' instead. Transport options per Container App instance (servicename=transportsetting)",
              args: { name: "transport" },
            },
            {
              name: "--transport-mapping",
              description:
                "Transport options per Container App instance (servicename=transportsetting)",
              args: { name: "transport-mapping" },
            },
          ],
        },
      ],
    },
    {
      name: "connected-env",
      description:
        "Commands to manage Container Apps Connected environments for use with Arc enabled Container Apps",
      subcommands: [
        {
          name: "create",
          description: "Create a Container Apps connected environment",
          options: [
            {
              name: "--custom-location",
              description:
                "Resource ID of custom location. List using 'az customlocation list'",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps connected environment",
              args: { name: "name" },
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
              name: ["--dapr-ai-connection-string", "-d"],
              description:
                "Application Insights connection string used by Dapr to export Service to Service communication telemetry",
              args: { name: "dapr-ai-connection-string" },
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
              name: "--static-ip",
              description: "Static IP of the connectedEnvironment",
              args: { name: "static-ip" },
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
          description: "Delete a Container Apps connected environment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps connected environment",
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
            "List Container Apps connected environments by subscription or resource group",
          options: [
            {
              name: "--custom-location",
              description:
                "Resource ID of custom location. List using 'az customlocation list'",
              args: { name: "custom-location" },
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
          name: "show",
          description: "Show details of a Container Apps connected environment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps connected environment",
              args: { name: "name" },
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
          name: "certificate",
          description:
            "Commands to manage certificates for the Container Apps connected environment",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a certificate from the Container Apps connected environment",
              options: [
                {
                  name: ["--certificate", "-c"],
                  description: "Name or resource id of the certificate",
                  args: { name: "certificate" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
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
                  name: ["--thumbprint", "-t"],
                  description: "Thumbprint of the certificate",
                  args: { name: "thumbprint" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List certificates for a connected environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
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
                  name: ["--certificate", "-c"],
                  description: "Name or resource id of the certificate",
                  args: { name: "certificate" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--thumbprint", "-t"],
                  description: "Thumbprint of the certificate",
                  args: { name: "thumbprint" },
                },
              ],
            },
            {
              name: "upload",
              description: "Add or update a certificate",
              options: [
                {
                  name: ["--certificate-file", "-f"],
                  description: "The filepath of the .pfx or .pem file",
                  args: { name: "certificate-file" },
                  isRequired: true,
                },
                {
                  name: ["--certificate-name", "-c"],
                  description:
                    "Name of the certificate which should be unique within the Container Apps connected environment",
                  args: { name: "certificate-name" },
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
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
                },
                {
                  name: ["--password", "-p"],
                  description: "The certificate file password",
                  args: { name: "password" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--show-prompt",
                  description: "Show prompt to upload an existing certificate",
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
        {
          name: "dapr-component",
          description:
            "Commands to manage Dapr components for Container Apps connected environments",
          subcommands: [
            {
              name: "list",
              description: "List Dapr components for a connected environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
                "Remove a Dapr component from a connected environment",
              options: [
                {
                  name: "--dapr-component-name",
                  description: "The Dapr component name",
                  args: { name: "dapr-component-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
              name: "set",
              description: "Create or update a Dapr component",
              options: [
                {
                  name: "--dapr-component-name",
                  description: "The Dapr component name",
                  args: { name: "dapr-component-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
                  name: "--yaml",
                  description:
                    "Path to a .yaml file with the configuration of a Dapr component. All other parameters will be ignored. For an example, see https://learn.microsoft.com/en-us/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#component-schema",
                  args: { name: "yaml" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of a Dapr component",
              options: [
                {
                  name: "--dapr-component-name",
                  description: "The Dapr component name",
                  args: { name: "dapr-component-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "storage",
          description:
            "Commands to manage storage for the Container Apps connected environment",
          subcommands: [
            {
              name: "list",
              description: "List the storages for a connected environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
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
              description: "Remove a storage from a connected environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
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
                  name: "--storage-name",
                  description: "Name of the storage",
                  args: { name: "storage-name" },
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
              name: "set",
              description: "Create or update a storage",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
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
                  name: "--storage-name",
                  description: "Name of the storage",
                  args: { name: "storage-name" },
                  isRequired: true,
                },
                {
                  name: "--access-mode",
                  description: "Access mode for the AzureFile storage",
                  args: {
                    name: "access-mode",
                    suggestions: ["ReadOnly", "ReadWrite"],
                  },
                },
                {
                  name: ["--azure-file-account-name", "--account-name", "-a"],
                  description: "Name of the AzureFile storage account",
                  args: { name: "azure-file-account-name" },
                },
                {
                  name: [
                    "--azure-file-account-key",
                    "--storage-account-key",
                    "-k",
                  ],
                  description: "Key of the AzureFile storage account",
                  args: { name: "azure-file-account-key" },
                },
                {
                  name: ["--azure-file-share-name", "--file-share", "-f"],
                  description: "Name of the share on the AzureFile storage",
                  args: { name: "azure-file-share-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of a storage",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Container Apps connected environment",
                  args: { name: "name" },
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
                  name: "--storage-name",
                  description: "Name of the storage",
                  args: { name: "storage-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "connection",
      description: "Commands to manage containerapp connections",
      subcommands: [
        {
          name: "delete",
          description: "Delete a containerapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the containerapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the container app. Required if '--id' is not specified.None",
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
                "The resource group which contains the container app. Required if '--id' is not specified.None",
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
          description: "List connections of a containerapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the container app. Required if '--source-id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the container app. Required if '--source-id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--source-id",
              description:
                "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
              args: { name: "source-id" },
            },
          ],
        },
        {
          name: "list-configuration",
          description:
            "List source configurations of a containerapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the containerapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the container app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the container app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-support-types",
          description:
            "List client types and auth types supported by containerapp connections",
          options: [
            {
              name: ["--target-type", "-t"],
              description: "The target resource type",
              args: {
                name: "target-type",
                suggestions: [
                  "appconfig",
                  "confluent-cloud",
                  "cosmos-cassandra",
                  "cosmos-gremlin",
                  "cosmos-mongo",
                  "cosmos-sql",
                  "cosmos-table",
                  "eventhub",
                  "keyvault",
                  "mysql",
                  "mysql-flexible",
                  "postgres",
                  "postgres-flexible",
                  "redis",
                  "redis-enterprise",
                  "servicebus",
                  "signalr",
                  "sql",
                  "storage-blob",
                  "storage-file",
                  "storage-queue",
                  "storage-table",
                  "webpubsub",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a containerapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the containerapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the container app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the container app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a containerapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the containerapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the container app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the container app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connection is met",
          options: [
            {
              name: "--connection",
              description: "Name of the containerapp connection",
              args: { name: "connection" },
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
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
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
                "Name of the container app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the container app. Required if '--id' is not specified.None",
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
          name: "create",
          description:
            "Create a connection between a containerapp and a target resource",
          subcommands: [
            {
              name: "appconfig",
              description: "Create a containerapp connection to appconfig",
              options: [
                {
                  name: "--app-config",
                  description:
                    "Name of the app configuration. Required if '--target-id' is not specified",
                  args: { name: "app-config" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--app-config'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the app configuration. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description:
                "Create a containerapp connection to confluent-cloud",
              options: [
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                  isRequired: true,
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                  isRequired: true,
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                  isRequired: true,
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                  isRequired: true,
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                  isRequired: true,
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                  isRequired: true,
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description:
                "Create a containerapp connection to cosmos-cassandra",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--key-space",
                  description:
                    "Name of the keyspace. Required if '--target-id' is not specified",
                  args: { name: "key-space" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--key-space'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Create a containerapp connection to cosmos-gremlin",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--graph",
                  description:
                    "Name of the graph. Required if '--target-id' is not specified",
                  args: { name: "graph" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database', '--graph'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Create a containerapp connection to cosmos-mongo",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Create a containerapp connection to cosmos-sql",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Create a containerapp connection to cosmos-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--table",
                  description:
                    "Name of the table. Required if '--target-id' is not specified",
                  args: { name: "table" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--table'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Create a containerapp connection to eventhub",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the eventhub namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the eventhub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Create a containerapp connection to keyvault",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new keyvault when creating the containerapp connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--vault'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the keyvault. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault",
                  description:
                    "Name of the keyvault. Required if '--target-id' is not specified",
                  args: { name: "vault" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description: "Create a containerapp connection to mysql",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Create a containerapp connection to mysql-flexible",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description: "Create a containerapp connection to postgres",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new postgres when creating the containerapp connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description:
                "Create a containerapp connection to postgres-flexible",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the flexible postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Create a containerapp connection to redis",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description:
                "Create a containerapp connection to redis-enterprise",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis enterprise database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis enterprise server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Create a containerapp connection to servicebus",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the servicebus namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the servicebus. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Create a containerapp connection to signalr",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--signalr",
                  description:
                    "Name of the signalr service. Required if '--target-id' is not specified",
                  args: { name: "signalr" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--signalr'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the signalr. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Create a containerapp connection to sql",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the sql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the sql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the sql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Create a containerapp connection to storage-blob",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new storage-blob when creating the containerapp connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Create a containerapp connection to storage-file",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Create a containerapp connection to storage-queue",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Create a containerapp connection to storage-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Create a containerapp connection to webpubsub",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--webpubsub'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the webpubsub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
                {
                  name: "--webpubsub",
                  description:
                    "Name of the webpubsub service. Required if '--target-id' is not specified",
                  args: { name: "webpubsub" },
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a containerapp connection",
          subcommands: [
            {
              name: "appconfig",
              description: "Update a containerapp to appconfig connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description:
                "Update a containerapp to confluent-cloud connection",
              options: [
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                  isRequired: true,
                },
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a containerapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description:
                "Update a containerapp to cosmos-cassandra connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Update a containerapp to cosmos-gremlin connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Update a containerapp to cosmos-mongo connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Update a containerapp to cosmos-sql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Update a containerapp to cosmos-table connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Update a containerapp to eventhub connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Update a containerapp to keyvault connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description: "Update a containerapp to mysql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Update a containerapp to mysql-flexible connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description: "Update a containerapp to postgres connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description:
                "Update a containerapp to postgres-flexible connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Update a containerapp to redis connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description:
                "Update a containerapp to redis-enterprise connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
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
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Update a containerapp to servicebus connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Update a containerapp to signalr connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Update a containerapp to sql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Update a containerapp to storage-blob connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Update a containerapp to storage-file connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Update a containerapp to storage-queue connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Update a containerapp to storage-table connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Update a containerapp to webpubsub connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the containerapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the containerapp connection",
                  args: { name: "connection" },
                },
                {
                  name: ["--container", "-c"],
                  description:
                    "The container where the connection information will be saved (as environment variables)",
                  args: { name: "container" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the container app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the container app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "dapr",
      description:
        "Commands to manage Dapr. To manage Dapr components, see az containerapp env dapr-component",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable Dapr for a container app. Removes existing values",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "enable",
          description:
            "Enable Dapr for a container app. Updates existing values",
          options: [
            {
              name: ["--dapr-enable-api-logging", "--dal"],
              description: "Enable API logging for the Dapr sidecar",
            },
            {
              name: "--dapr-app-id",
              description: "The Dapr application identifier",
              args: { name: "dapr-app-id" },
            },
            {
              name: "--dapr-app-port",
              description: "The port Dapr uses to talk to the application",
              args: { name: "dapr-app-port" },
            },
            {
              name: "--dapr-app-protocol",
              description: "The protocol Dapr uses to talk to the application",
              args: {
                name: "dapr-app-protocol",
                suggestions: ["grpc", "http"],
              },
            },
            {
              name: ["--dapr-http-max-request-size", "--dhmrs"],
              description:
                "Increase max size of request body http and grpc servers parameter in MB to handle uploading of big files",
              args: { name: "dapr-http-max-request-size" },
            },
            {
              name: ["--dapr-http-read-buffer-size", "--dhrbs"],
              description:
                "Dapr max size of http header read buffer in KB to handle when sending multi-KB headers",
              args: { name: "dapr-http-read-buffer-size" },
            },
            {
              name: "--dapr-log-level",
              description: "Set the log level for the Dapr sidecar",
              args: {
                name: "dapr-log-level",
                suggestions: ["debug", "error", "info", "warn"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
      ],
    },
    {
      name: "env",
      description: "Commands to manage Container Apps environments",
      subcommands: [
        {
          name: "create",
          description: "Create a Container Apps environment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps environment",
              args: { name: "name" },
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
              name: ["--custom-domain-certificate-file", "--certificate-file"],
              description:
                "The filepath of the certificate file (.pfx or .pem) for the environment's custom domain. To manage certificates for container apps, use az containerapp env certificate",
              args: { name: "custom-domain-certificate-file" },
            },
            {
              name: [
                "--custom-domain-certificate-password",
                "--certificate-password",
              ],
              description:
                "The certificate file password for the environment's custom domain",
              args: { name: "custom-domain-certificate-password" },
            },
            {
              name: ["--custom-domain-dns-suffix", "--dns-suffix"],
              description: "The DNS suffix for the environment's custom domain",
              args: { name: "custom-domain-dns-suffix" },
            },
            {
              name: "--dapr-instrumentation-key",
              description:
                "Application Insights instrumentation key used by Dapr to export Service to Service communication telemetry",
              args: { name: "dapr-instrumentation-key" },
            },
            {
              name: "--docker-bridge-cidr",
              description:
                "CIDR notation IP range assigned to the Docker bridge. It must not overlap with any Subnet IP ranges or the IP range defined in Platform Reserved CIDR, if defined",
              args: { name: "docker-bridge-cidr" },
            },
            {
              name: "--enable-mtls",
              description:
                "Boolean indicating if mTLS peer authentication is enabled for the environment",
              args: { name: "enable-mtls", suggestions: ["false", "true"] },
            },
            {
              name: ["--enable-workload-profiles", "-w"],
              description:
                "Boolean indicating if the environment is enabled to have workload profiles",
            },
            {
              name: ["--infrastructure-resource-group", "-i"],
              description:
                "Name for resource group that will contain infrastructure resources. If not provided, a resource group name will be generated",
              args: { name: "infrastructure-resource-group" },
            },
            {
              name: ["--infrastructure-subnet-resource-id", "-s"],
              description:
                "Resource ID of a subnet for infrastructure components and user app containers",
              args: { name: "infrastructure-subnet-resource-id" },
            },
            {
              name: "--internal-only",
              description:
                "Boolean indicating the environment only has an internal load balancer. These environments do not have a public static IP resource, therefore must provide infrastructureSubnetResourceId if enabling this property",
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of resource. Examples: eastus2, northeurope",
              args: { name: "location" },
            },
            {
              name: "--logs-destination",
              description: "Logs destination",
              args: {
                name: "logs-destination",
                suggestions: ["azure-monitor", "log-analytics", "none"],
              },
            },
            {
              name: "--logs-workspace-id",
              description:
                'Workspace ID of the Log Analytics workspace to send diagnostics logs to. Only works with logs destination "log-analytics". You can use "az monitor log-analytics workspace create" to create one. Extra billing may apply',
              args: { name: "logs-workspace-id" },
            },
            {
              name: "--logs-workspace-key",
              description:
                'Log Analytics workspace key to configure your Log Analytics workspace. Only works with logs destination "log-analytics". You can use "az monitor log-analytics workspace get-shared-keys" to retrieve the key',
              args: { name: "logs-workspace-key" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--platform-reserved-cidr",
              description:
                "IP range in CIDR notation that can be reserved for environment infrastructure IP addresses. It must not overlap with any other Subnet IP ranges",
              args: { name: "platform-reserved-cidr" },
            },
            {
              name: "--platform-reserved-dns-ip",
              description:
                "An IP address from the IP range defined by Platform Reserved CIDR that will be reserved for the internal DNS server",
              args: { name: "platform-reserved-dns-ip" },
            },
            {
              name: "--storage-account",
              description:
                "Name or resource ID of the storage account used for Azure Monitor. If this value is provided, Azure Monitor Diagnostic Settings will be created automatically",
              args: { name: "storage-account" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Enable zone redundancy on the environment. Cannot be used without --infrastructure-subnet-resource-id. If used with --location, the subnet's location must match",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Container Apps environment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps Environment",
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
            "List Container Apps environments by subscription or resource group",
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
          name: "list-usages",
          description: "List usages of quotas for specific managed environment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps environment",
              args: { name: "name" },
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
          description: "Show details of a Container Apps environment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps Environment",
              args: { name: "name" },
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
          description: "Update a Container Apps environment",
          options: [
            {
              name: ["--custom-domain-certificate-file", "--certificate-file"],
              description:
                "The filepath of the certificate file (.pfx or .pem) for the environment's custom domain. To manage certificates for container apps, use az containerapp env certificate",
              args: { name: "custom-domain-certificate-file" },
            },
            {
              name: [
                "--custom-domain-certificate-password",
                "--certificate-password",
              ],
              description:
                "The certificate file password for the environment's custom domain",
              args: { name: "custom-domain-certificate-password" },
            },
            {
              name: ["--custom-domain-dns-suffix", "--dns-suffix"],
              description: "The DNS suffix for the environment's custom domain",
              args: { name: "custom-domain-dns-suffix" },
            },
            {
              name: "--enable-mtls",
              description:
                "Boolean indicating if mTLS peer authentication is enabled for the environment",
              args: { name: "enable-mtls", suggestions: ["false", "true"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--logs-destination",
              description: "Logs destination",
              args: {
                name: "logs-destination",
                suggestions: ["azure-monitor", "log-analytics", "none"],
              },
            },
            {
              name: "--logs-workspace-id",
              description:
                'Workspace ID of the Log Analytics workspace to send diagnostics logs to. Only works with logs destination "log-analytics". You can use "az monitor log-analytics workspace create" to create one. Extra billing may apply',
              args: { name: "logs-workspace-id" },
            },
            {
              name: "--logs-workspace-key",
              description:
                'Log Analytics workspace key to configure your Log Analytics workspace. Only works with logs destination "log-analytics". You can use "az monitor log-analytics workspace get-shared-keys" to retrieve the key',
              args: { name: "logs-workspace-key" },
            },
            {
              name: "--max-nodes",
              description:
                "The maximum nodes for this workload profile, --workload-profile-name required",
              args: { name: "max-nodes" },
            },
            {
              name: "--min-nodes",
              description:
                "The minimum nodes for this workload profile, --workload-profile-name required",
              args: { name: "min-nodes" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Container Apps environment",
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
              name: "--storage-account",
              description:
                "Name or resource ID of the storage account used for Azure Monitor. If this value is provided, Azure Monitor Diagnostic Settings will be created automatically",
              args: { name: "storage-account" },
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
              name: ["--workload-profile-name", "-w"],
              description: "The friendly name for the workload profile",
              args: { name: "workload-profile-name" },
            },
            {
              name: "--workload-profile-type",
              description:
                "The type of workload profile to add or update in this environment, --workload-profile-name required",
              args: { name: "workload-profile-type" },
            },
          ],
        },
        {
          name: "certificate",
          description:
            "Commands to manage certificates for the Container Apps environment",
          subcommands: [
            {
              name: "create",
              description: "Create a managed certificate",
              options: [
                {
                  name: "--hostname",
                  description: "The custom domain name",
                  args: { name: "hostname" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: ["--validation-method", "-v"],
                  description:
                    "Validation method of custom domain ownership. Supported methods are HTTP, CNAME and TXT",
                  args: { name: "validation-method" },
                  isRequired: true,
                },
                {
                  name: ["--certificate-name", "-c"],
                  description:
                    "Name of the managed certificate which should be unique within the Container Apps environment",
                  args: { name: "certificate-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a certificate from the Container Apps environment",
              options: [
                {
                  name: ["--certificate", "-c"],
                  description: "Name or resource id of the certificate",
                  args: { name: "certificate" },
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
                    "Location of resource. Examples: eastus2, northeurope",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: ["--thumbprint", "-t"],
                  description: "Thumbprint of the certificate",
                  args: { name: "thumbprint" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List certificates for an environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: ["--certificate", "-c"],
                  description: "Name or resource id of the certificate",
                  args: { name: "certificate" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location of resource. Examples: eastus2, northeurope",
                  args: { name: "location" },
                },
                {
                  name: ["--managed-certificates-only", "-m"],
                  description: "List managed certificates only",
                },
                {
                  name: ["--private-key-certificates-only", "-p"],
                  description: "List private-key certificates only",
                },
                {
                  name: ["--thumbprint", "-t"],
                  description: "Thumbprint of the certificate",
                  args: { name: "thumbprint" },
                },
              ],
            },
            {
              name: "upload",
              description: "Add or update a certificate",
              options: [
                {
                  name: ["--certificate-file", "-f"],
                  description: "The filepath of the .pfx or .pem file",
                  args: { name: "certificate-file" },
                  isRequired: true,
                },
                {
                  name: ["--certificate-name", "-c"],
                  description:
                    "Name of the certificate which should be unique within the Container Apps environment",
                  args: { name: "certificate-name" },
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
                    "Location of resource. Examples: eastus2, northeurope",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
                },
                {
                  name: ["--password", "-p"],
                  description: "The certificate file password",
                  args: { name: "password" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--show-prompt",
                  description: "Show prompt to upload an existing certificate",
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
        {
          name: "dapr-component",
          description:
            "Commands to manage Dapr components for the Container Apps environment",
          subcommands: [
            {
              name: "list",
              description: "List Dapr components for an environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
              description: "Remove a Dapr component from an environment",
              options: [
                {
                  name: "--dapr-component-name",
                  description: "The Dapr component name",
                  args: { name: "dapr-component-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
              name: "set",
              description: "Create or update a Dapr component",
              options: [
                {
                  name: "--dapr-component-name",
                  description: "The Dapr component name",
                  args: { name: "dapr-component-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
                  name: "--yaml",
                  description:
                    "Path to a .yaml file with the configuration of a Dapr component. All other parameters will be ignored. For an example, see https://learn.microsoft.com/en-us/azure/container-apps/dapr-overview?tabs=bicep1%2Cyaml#component-schema",
                  args: { name: "yaml" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show the details of a Dapr component",
              options: [
                {
                  name: "--dapr-component-name",
                  description: "The Dapr component name",
                  args: { name: "dapr-component-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The environment name",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "logs",
          description: "Show container app environment logs",
          subcommands: [
            {
              name: "show",
              description:
                "Show past environment logs and/or print logs in real time (with the --follow parameter)",
              options: [
                {
                  name: "--follow",
                  description: "Print logs in real time if present",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: "--tail",
                  description: "The number of past logs to print (0-300)",
                  args: { name: "tail" },
                },
              ],
            },
          ],
        },
        {
          name: "storage",
          description:
            "Commands to manage storage for the Container Apps environment",
          subcommands: [
            {
              name: "list",
              description: "List the storages for an environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
              description: "Remove a storage from an environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: "--storage-name",
                  description: "Name of the storage",
                  args: { name: "storage-name" },
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
              name: "set",
              description: "Create or update a storage",
              options: [
                {
                  name: "--access-mode",
                  description: "Access mode for the AzureFile storage",
                  args: {
                    name: "access-mode",
                    suggestions: ["ReadOnly", "ReadWrite"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--azure-file-account-name", "--account-name", "-a"],
                  description: "Name of the AzureFile storage account",
                  args: { name: "azure-file-account-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--azure-file-account-key",
                    "--storage-account-key",
                    "-k",
                  ],
                  description: "Key of the AzureFile storage account",
                  args: { name: "azure-file-account-key" },
                  isRequired: true,
                },
                {
                  name: ["--azure-file-share-name", "--file-share", "-f"],
                  description: "Name of the share on the AzureFile storage",
                  args: { name: "azure-file-share-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: "--storage-name",
                  description: "Name of the storage",
                  args: { name: "storage-name" },
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
              name: "show",
              description: "Show the details of a storage",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Container Apps environment",
                  args: { name: "name" },
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
                  name: "--storage-name",
                  description: "Name of the storage",
                  args: { name: "storage-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "workload-profile",
          description:
            "Manage the workload profiles of a Container Apps environment",
          subcommands: [
            {
              name: "add",
              description:
                "Create a workload profile in a Container Apps environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Container App environment",
                  args: { name: "name" },
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
                  name: ["--workload-profile-name", "-w"],
                  description: "The friendly name for the workload profile",
                  args: { name: "workload-profile-name" },
                  isRequired: true,
                },
                {
                  name: "--max-nodes",
                  description:
                    "The maximum node count for the workload profile",
                  args: { name: "max-nodes" },
                },
                {
                  name: "--min-nodes",
                  description:
                    "The minimum node count for the workload profile",
                  args: { name: "min-nodes" },
                },
                {
                  name: "--workload-profile-type",
                  description:
                    "The type of workload profile to add to this environment. Run 'az containerapp env workload-profile list-supported -l ' to check the options for your region",
                  args: { name: "workload-profile-type" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a workload profile from a Container Apps environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Container App environment",
                  args: { name: "name" },
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
                  name: ["--workload-profile-name", "-w"],
                  description: "The friendly name for the workload profile",
                  args: { name: "workload-profile-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "List the workload profiles from a Container Apps environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Container App environment",
                  args: { name: "name" },
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
              name: "list-supported",
              description: "List the supported workload profiles in a region",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location of resource. Examples: eastus2, northeurope",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "set",
              description:
                "Create or update an existing workload profile in a Container Apps environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Container App environment",
                  args: { name: "name" },
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
                  name: ["--workload-profile-name", "-w"],
                  description: "The friendly name for the workload profile",
                  args: { name: "workload-profile-name" },
                  isRequired: true,
                },
                {
                  name: "--max-nodes",
                  description:
                    "The maximum node count for the workload profile",
                  args: { name: "max-nodes" },
                },
                {
                  name: "--min-nodes",
                  description:
                    "The minimum node count for the workload profile",
                  args: { name: "min-nodes" },
                },
                {
                  name: "--workload-profile-type",
                  description:
                    "The type of workload profile to add or update. Run 'az containerapp env workload-profile list-supported -l ' to check the options for your region",
                  args: { name: "workload-profile-type" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show a workload profile from a Container Apps environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Container App environment",
                  args: { name: "name" },
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
                  name: ["--workload-profile-name", "-w"],
                  description: "The friendly name for the workload profile",
                  args: { name: "workload-profile-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an existing workload profile in a Container Apps environment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Container App environment",
                  args: { name: "name" },
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
                  name: ["--workload-profile-name", "-w"],
                  description: "The friendly name for the workload profile",
                  args: { name: "workload-profile-name" },
                  isRequired: true,
                },
                {
                  name: "--max-nodes",
                  description:
                    "The maximum node count for the workload profile",
                  args: { name: "max-nodes" },
                },
                {
                  name: "--min-nodes",
                  description:
                    "The minimum node count for the workload profile",
                  args: { name: "min-nodes" },
                },
                {
                  name: "--workload-profile-type",
                  description:
                    "The type of workload profile to update. Run 'az containerapp env workload-profile list-supported -l ' to check the options for your region",
                  args: { name: "workload-profile-type" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "github-action",
      description: "Commands to manage GitHub Actions",
      subcommands: [
        {
          name: "add",
          description:
            "Add a GitHub Actions workflow to a repository to deploy a container app",
          options: [
            {
              name: "--repo-url",
              description:
                "The GitHub repository to which the workflow file will be added. In the format: https://github.com//",
              args: { name: "repo-url" },
              isRequired: true,
            },
            {
              name: ["--branch", "-b"],
              description:
                "The branch of the Github repo. Assumed to be the Github repo's default branch if not specified",
              args: { name: "branch" },
            },
            {
              name: "--context-path",
              description:
                'Path in the repo from which to run the docker build. Defaults to "./"',
              args: { name: "context-path" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--image", "-i"],
              description:
                "Container image name that the Github Action should use. Defaults to the Container App name",
              args: { name: "image" },
            },
            {
              name: "--login-with-github",
              description:
                "Interactively log in with Github to retrieve the Personal Access Token",
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: "--registry-password",
              description:
                "The password of the registry. If using Azure Container Registry, we will try to infer the credentials if not supplied",
              args: { name: "registry-password" },
            },
            {
              name: "--registry-url",
              description:
                "The container registry server, e.g. myregistry.azurecr.io",
              args: { name: "registry-url" },
            },
            {
              name: "--registry-username",
              description:
                "The username of the registry. If using Azure Container Registry, we will try to infer the credentials if not supplied",
              args: { name: "registry-username" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--service-principal-client-id",
              description: "The service principal client ID",
              args: { name: "service-principal-client-id" },
            },
            {
              name: "--service-principal-client-secret",
              description: "The service principal client secret",
              args: { name: "service-principal-client-secret" },
            },
            {
              name: "--service-principal-tenant-id",
              description: "The service principal tenant ID",
              args: { name: "service-principal-tenant-id" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--token",
              description:
                "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",
              args: { name: "token" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Remove a previously configured Container Apps GitHub Actions workflow from a repository",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--login-with-github",
              description:
                "Interactively log in with Github to retrieve the Personal Access Token",
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
              name: "--token",
              description:
                "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",
              args: { name: "token" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the GitHub Actions configuration on a container app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
      ],
    },
    {
      name: "hostname",
      description: "Commands to manage hostnames of a container app",
      subcommands: [
        {
          name: "add",
          description: "Add the hostname to a container app without binding",
          options: [
            {
              name: "--hostname",
              description: "The custom domain name",
              args: { name: "hostname" },
              isRequired: true,
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
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "bind",
          description:
            "Add or update the hostname and binding with a certificate",
          options: [
            {
              name: "--hostname",
              description: "The custom domain name",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: ["--certificate", "-c"],
              description: "Name or resource id of the certificate",
              args: { name: "certificate" },
            },
            {
              name: ["--environment", "-e"],
              description:
                "Name or resource id of the Container App environment",
              args: { name: "environment" },
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
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
              name: ["--thumbprint", "-t"],
              description: "Thumbprint of the certificate",
              args: { name: "thumbprint" },
            },
            {
              name: ["--validation-method", "-v"],
              description: "Validation method of custom domain ownership",
              args: { name: "validation-method" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete hostnames from a container app",
          options: [
            {
              name: "--hostname",
              description: "The custom domain name",
              args: { name: "hostname" },
              isRequired: true,
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
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          description: "List the hostnames of a container app",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Commands to manage managed identities",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity to a container app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--system-assigned",
              description:
                "Boolean indicating whether to assign system-assigned identity",
            },
            {
              name: "--user-assigned",
              description: "Space-separated user identities",
              args: { name: "user-assigned" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a managed identity from a container app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--system-assigned",
              description:
                "Boolean indicating whether to assign system-assigned identity",
            },
            {
              name: "--user-assigned",
              description:
                "Space-separated user identities. If no user identities are specified, all user identities will be removed",
              args: { name: "user-assigned" },
            },
          ],
        },
        {
          name: "show",
          description: "Show managed identities of a container app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
      ],
    },
    {
      name: "ingress",
      description: "Commands to manage ingress and traffic-splitting",
      subcommands: [
        {
          name: "disable",
          description: "Disable ingress for a container app",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "enable",
          description: "Enable or update ingress for a container app",
          options: [
            {
              name: "--target-port",
              description: "The application port used for ingress traffic",
              args: { name: "target-port" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "The ingress type",
              args: { name: "type", suggestions: ["external", "internal"] },
              isRequired: true,
            },
            {
              name: "--allow-insecure",
              description: "Allow insecure connections for ingress traffic",
            },
            {
              name: "--exposed-port",
              description:
                "Additional exposed port. Only supported by tcp transport protocol. Must be unique per environment if the app ingress is external",
              args: { name: "exposed-port" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
              name: "--transport",
              description: "The transport protocol used for ingress traffic",
              args: {
                name: "transport",
                suggestions: ["auto", "http", "http2", "tcp"],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a container app's ingress",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          description: "Update ingress for a container app",
          options: [
            {
              name: "--allow-insecure",
              description: "Allow insecure connections for ingress traffic",
            },
            {
              name: "--exposed-port",
              description:
                "Additional exposed port. Only supported by tcp transport protocol. Must be unique per environment if the app ingress is external",
              args: { name: "exposed-port" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
              name: "--target-port",
              description: "The application port used for ingress traffic",
              args: { name: "target-port" },
            },
            {
              name: "--transport",
              description: "The transport protocol used for ingress traffic",
              args: {
                name: "transport",
                suggestions: ["auto", "http", "http2", "tcp"],
              },
            },
            {
              name: "--type",
              description: "The ingress type",
              args: { name: "type", suggestions: ["external", "internal"] },
            },
          ],
        },
        {
          name: "access-restriction",
          description: "Commands to manage IP access restrictions",
          subcommands: [
            {
              name: "list",
              description: "List IP access restrictions for a container app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              description: "Remove IP access restrictions from a container app",
              options: [
                {
                  name: "--rule-name",
                  description: "The IP security restriction name",
                  args: { name: "rule-name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              name: "set",
              description:
                "Configure IP access restrictions for a container app",
              options: [
                {
                  name: "--action",
                  description:
                    "Whether the IP security restriction allows or denies access. All restrictions must be use the same action. If no restrictions are set, all traffic is allowed",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                  isRequired: true,
                },
                {
                  name: "--ip-address",
                  description:
                    "The address range of the IP security restriction in IPv4 CIDR notation. (for example, '198.51.100.14/24')",
                  args: { name: "ip-address" },
                  isRequired: true,
                },
                {
                  name: "--rule-name",
                  description: "The IP security restriction name",
                  args: { name: "rule-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "The description of the IP security restriction",
                  args: { name: "description" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "cors",
          description: "Commands to manage CORS policy for a container app",
          subcommands: [
            {
              name: "disable",
              description: "Disable CORS policy for a container app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              name: "enable",
              description: "Enable CORS policy for a container app",
              options: [
                {
                  name: ["--allowed-origins", "-r"],
                  description:
                    "A list of allowed origin(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "allowed-origins" },
                  isRequired: true,
                },
                {
                  name: "--allow-credentials",
                  description:
                    "Whether the credential is allowed for the container app",
                  args: {
                    name: "allow-credentials",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--allowed-headers", "-a"],
                  description:
                    "A list of allowed header(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "allowed-headers" },
                },
                {
                  name: ["--allowed-methods", "-m"],
                  description:
                    "A list of allowed method(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "allowed-methods" },
                },
                {
                  name: ["--expose-headers", "-e"],
                  description:
                    "A list of expose header(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "expose-headers" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--max-age",
                  description:
                    "The maximum age of the allowed origin in seconds. Only postive integer or empty string are allowed. Empty string resets max_age to null",
                  args: { name: "max-age" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              description: "Show CORS policy for a container app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              description: "Update CORS policy for a container app",
              options: [
                {
                  name: "--allow-credentials",
                  description:
                    "Whether the credential is allowed for the container app",
                  args: {
                    name: "allow-credentials",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--allowed-headers", "-a"],
                  description:
                    "A list of allowed header(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "allowed-headers" },
                },
                {
                  name: ["--allowed-methods", "-m"],
                  description:
                    "A list of allowed method(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "allowed-methods" },
                },
                {
                  name: ["--allowed-origins", "-r"],
                  description:
                    "A list of allowed origin(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "allowed-origins" },
                },
                {
                  name: ["--expose-headers", "-e"],
                  description:
                    "A list of expose header(s) for the container app. Values are space-separated. Empty string to clear existing values",
                  args: { name: "expose-headers" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--max-age",
                  description:
                    "The maximum age of the allowed origin in seconds. Only postive integer or empty string are allowed. Empty string resets max_age to null",
                  args: { name: "max-age" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "sticky-sessions",
          description:
            "Commands to set Sticky session affinity for a container app",
          subcommands: [
            {
              name: "set",
              description: "Configure Sticky session for a container app",
              options: [
                {
                  name: "--affinity",
                  description:
                    "Whether the affinity for the container app is Sticky or None",
                  args: { name: "affinity", suggestions: ["none", "sticky"] },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              description: "Show the Affinity for a container app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "traffic",
          description: "Commands to manage traffic-splitting",
          subcommands: [
            {
              name: "set",
              description: "Configure traffic-splitting for a container app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--label-weight",
                  description:
                    "A list of label weight(s) for the container app. Space-separated values in 'label_name=weight' format",
                  args: { name: "label-weight" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--revision-weight",
                  description:
                    "A list of revision weight(s) for the container app. Space-separated values in 'revision_name=weight' format. For latest revision, use 'latest=weight'",
                  args: { name: "revision-weight" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--traffic-weight",
                  description:
                    "Option '--traffic-weight' has been deprecated and will be removed in a future release. Use '--revision-weight' instead. A list of revision weight(s) for the container app. Space-separated values in 'revision_name=weight' format. For latest revision, use 'latest=weight'",
                  args: { name: "traffic-weight" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show traffic-splitting configuration for a container app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Commands to manage Container Apps jobs",
      subcommands: [
        {
          name: "create",
          description: "Create a container apps job",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
              name: "--args",
              description:
                'A list of container startup command argument(s). Space-separated values e.g. "-c" "mycommand". Empty string to clear existing values',
              args: { name: "args" },
            },
            {
              name: "--command",
              description:
                'A list of supported commands on the container that will executed during startup. Space-separated values e.g. "/bin/queue" "mycommand". Empty string to clear existing values',
              args: { name: "command" },
            },
            {
              name: "--container-name",
              description: "Name of the container",
              args: { name: "container-name" },
            },
            {
              name: "--cpu",
              description: "Required CPU in cores from 0.25 - 2.0, e.g. 0.5",
              args: { name: "cpu" },
            },
            {
              name: "--cron-expression",
              description:
                'Cron expression. Only supported for trigger type "Schedule"',
              args: { name: "cron-expression" },
            },
            {
              name: "--env-vars",
              description:
                "A list of environment variable(s) for the container. Space-separated values in 'key=value' format. Empty string to clear existing values. Prefix value with 'secretref:' to reference a secret",
              args: { name: "env-vars" },
            },
            {
              name: "--environment",
              description:
                "Name or resource ID of the container app's environment",
              args: { name: "environment" },
            },
            {
              name: "--environment-type",
              description: "Type of environment",
              args: {
                name: "environment-type",
                suggestions: ["connected", "managed"],
              },
            },
            {
              name: "--image",
              description: "Container image, e.g. publisher/image-name:tag",
              args: { name: "image" },
            },
            {
              name: "--max-executions",
              description:
                "Maximum number of job executions to run per polling interval",
              args: { name: "max-executions" },
            },
            {
              name: "--memory",
              description:
                'Required memory from 0.5 - 4.0 ending with "Gi", e.g. 1.0Gi',
              args: { name: "memory" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Boolean indicating whether to assign system-assigned identity",
            },
            {
              name: "--mi-user-assigned",
              description: "Space-separated user identities to be assigned",
              args: { name: "mi-user-assigned" },
            },
            {
              name: "--min-executions",
              description:
                "Minimum number of job executions to run per polling interval",
              args: { name: "min-executions" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--parallelism",
              description: "Maximum number of replicas to run per execution",
              args: { name: "parallelism" },
            },
            {
              name: "--polling-interval",
              description:
                "Interval to check each event source in seconds. Defaults to 30s",
              args: { name: "polling-interval" },
            },
            {
              name: ["--replica-completion-count", "--rcc"],
              description:
                "Number of replicas that need to complete successfully for execution to succeed",
              args: { name: "replica-completion-count" },
            },
            {
              name: "--registry-identity",
              description:
                "A Managed Identity to authenticate with the registry server instead of username/password. Use a resource ID or 'system' for user-defined and system-defined identities, respectively. The registry must be an ACR. If possible, an 'acrpull' role assignemnt will be created for the identity automatically",
              args: { name: "registry-identity" },
            },
            {
              name: "--registry-password",
              description:
                "The password to log in to container registry. If stored as a secret, value must start with 'secretref:' followed by the secret name",
              args: { name: "registry-password" },
            },
            {
              name: "--registry-server",
              description:
                "The container registry server hostname, e.g. myregistry.azurecr.io",
              args: { name: "registry-server" },
            },
            {
              name: "--registry-username",
              description: "The username to log in to container registry",
              args: { name: "registry-username" },
            },
            {
              name: "--replica-retry-limit",
              description: "Maximum number of retries before the replica fails",
              args: { name: "replica-retry-limit" },
            },
            {
              name: "--replica-timeout",
              description: "Maximum number of seconds a replica can execute",
              args: { name: "replica-timeout" },
            },
            {
              name: ["--scale-rule-auth", "--sra"],
              description:
                'Scale rule auth parameters. Auth parameters must be in format "= = ..."',
              args: { name: "scale-rule-auth" },
            },
            {
              name: ["--scale-rule-metadata", "--srm"],
              description:
                'Scale rule metadata. Metadata must be in format "= = ..."',
              args: { name: "scale-rule-metadata" },
            },
            {
              name: ["--scale-rule-name", "--srn"],
              description: "The name of the scale rule",
              args: { name: "scale-rule-name" },
            },
            {
              name: ["--scale-rule-type", "--srt"],
              description: "The type of the scale rule",
              args: { name: "scale-rule-type" },
            },
            {
              name: ["--secrets", "-s"],
              description:
                "A list of secret(s) for the container app. Space-separated values in 'key=value' format",
              args: { name: "secrets" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--trigger-type",
              description: "Trigger type. Schedule | Event | Manual",
              args: { name: "trigger-type" },
            },
            {
              name: ["--workload-profile-name", "-w"],
              description: "The friendly name for the workload profile",
              args: { name: "workload-profile-name" },
            },
            {
              name: "--yaml",
              description:
                "Path to a .yaml file with the configuration of a container app. All other parameters will be ignored. For an example, see https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec#examples",
              args: { name: "yaml" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Container Apps Job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
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
            "List Container Apps Job by subscription or resource group",
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
          description: "Show details of a Container Apps Job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "start",
          description: "Start a Container Apps Job execution",
          options: [
            {
              name: "--args",
              description:
                'A list of container startup command argument(s). Space-separated values e.g. "-c" "mycommand". Empty string to clear existing values',
              args: { name: "args" },
            },
            {
              name: "--command",
              description:
                'A list of supported commands on the container that will executed during startup. Space-separated values e.g. "/bin/queue" "mycommand". Empty string to clear existing values',
              args: { name: "command" },
            },
            {
              name: "--container-name",
              description: "Name of the container",
              args: { name: "container-name" },
            },
            {
              name: "--cpu",
              description: "Required CPU in cores from 0.25 - 2.0, e.g. 0.5",
              args: { name: "cpu" },
            },
            {
              name: "--env-vars",
              description:
                "A list of environment variable(s) for the container. Space-separated values in 'key=value' format. Empty string to clear existing values. Prefix value with 'secretref:' to reference a secret",
              args: { name: "env-vars" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--image",
              description: "Container image, e.g. publisher/image-name:tag",
              args: { name: "image" },
            },
            {
              name: "--memory",
              description:
                'Required memory from 0.5 - 4.0 ending with "Gi", e.g. 1.0Gi',
              args: { name: "memory" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--registry-identity",
              description:
                "A Managed Identity to authenticate with the registry server instead of username/password. Use a resource ID or 'system' for user-defined and system-defined identities, respectively. The registry must be an ACR. If possible, an 'acrpull' role assignemnt will be created for the identity automatically",
              args: { name: "registry-identity" },
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
              name: "--yaml",
              description:
                "Path to a .yaml file with the configuration of a container app. All other parameters will be ignored. For an example, see https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec#examples",
              args: { name: "yaml" },
            },
          ],
        },
        {
          name: "stop",
          description: "Stops a Container Apps Job execution",
          options: [
            {
              name: "--execution-name-list",
              description: "Comma separated list of job execution names",
              args: { name: "execution-name-list" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--job-execution-name",
              description:
                "Name of the specific job execution which needs to be stopped",
              args: { name: "job-execution-name" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Container Apps Job",
          options: [
            {
              name: "--args",
              description:
                'A list of container startup command argument(s). Space-separated values e.g. "-c" "mycommand". Empty string to clear existing values',
              args: { name: "args" },
            },
            {
              name: "--command",
              description:
                'A list of supported commands on the container that will executed during startup. Space-separated values e.g. "/bin/queue" "mycommand". Empty string to clear existing values',
              args: { name: "command" },
            },
            {
              name: "--container-name",
              description: "Name of the container",
              args: { name: "container-name" },
            },
            {
              name: "--cpu",
              description: "Required CPU in cores from 0.25 - 2.0, e.g. 0.5",
              args: { name: "cpu" },
            },
            {
              name: "--cron-expression",
              description:
                'Cron expression. Only supported for trigger type "Schedule"',
              args: { name: "cron-expression" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--image",
              description: "Container image, e.g. publisher/image-name:tag",
              args: { name: "image" },
            },
            {
              name: "--max-executions",
              description:
                "Maximum number of job executions to run per polling interval",
              args: { name: "max-executions" },
            },
            {
              name: "--memory",
              description:
                'Required memory from 0.5 - 4.0 ending with "Gi", e.g. 1.0Gi',
              args: { name: "memory" },
            },
            {
              name: "--min-executions",
              description:
                "Minimum number of job executions to run per polling interval",
              args: { name: "min-executions" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--parallelism",
              description: "Maximum number of replicas to run per execution",
              args: { name: "parallelism" },
            },
            {
              name: "--polling-interval",
              description:
                "Interval to check each event source in seconds. Defaults to 30s",
              args: { name: "polling-interval" },
            },
            {
              name: ["--replica-completion-count", "--rcc"],
              description:
                "Number of replicas that need to complete successfully for execution to succeed",
              args: { name: "replica-completion-count" },
            },
            {
              name: "--remove-all-env-vars",
              description: "Remove all environment variable(s) from container",
            },
            {
              name: "--remove-env-vars",
              description:
                "Remove environment variable(s) from container. Space-separated environment variable names",
              args: { name: "remove-env-vars" },
            },
            {
              name: "--replace-env-vars",
              description:
                "Replace environment variable(s) in container. Other existing environment variables are removed. Space-separated values in 'key=value' format. If stored as a secret, value must start with 'secretref:' followed by the secret name",
              args: { name: "replace-env-vars" },
            },
            {
              name: "--replica-retry-limit",
              description: "Maximum number of retries before the replica fails",
              args: { name: "replica-retry-limit" },
            },
            {
              name: "--replica-timeout",
              description: "Maximum number of seconds a replica can execute",
              args: { name: "replica-timeout" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--scale-rule-auth", "--sra"],
              description:
                'Scale rule auth parameters. Auth parameters must be in format "= = ..."',
              args: { name: "scale-rule-auth" },
            },
            {
              name: ["--scale-rule-metadata", "--srm"],
              description:
                'Scale rule metadata. Metadata must be in format "= = ..."',
              args: { name: "scale-rule-metadata" },
            },
            {
              name: ["--scale-rule-name", "--srn"],
              description: "The name of the scale rule",
              args: { name: "scale-rule-name" },
            },
            {
              name: ["--scale-rule-type", "--srt"],
              description: "The type of the scale rule",
              args: { name: "scale-rule-type" },
            },
            {
              name: "--set-env-vars",
              description:
                "Add or update environment variable(s) in container. Existing environment variables are not modified. Space-separated values in 'key=value' format. If stored as a secret, value must start with 'secretref:' followed by the secret name",
              args: { name: "set-env-vars" },
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
              name: ["--workload-profile-name", "-w"],
              description: "The friendly name for the workload profile",
              args: { name: "workload-profile-name" },
            },
            {
              name: "--yaml",
              description:
                "Path to a .yaml file with the configuration of a container app. All other parameters will be ignored. For an example, see https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec#examples",
              args: { name: "yaml" },
            },
          ],
        },
        {
          name: "execution",
          description: "Commands to view executions of a Container App Job",
          subcommands: [
            {
              name: "list",
              description: "Get list of all executions of a Container App Job",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              description: "Get execution of a Container App Job",
              options: [
                {
                  name: "--job-execution-name",
                  description: "Name of the specific job execution",
                  args: { name: "job-execution-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "identity",
          description:
            "Commands to manage managed identities for container app job",
          subcommands: [
            {
              name: "assign",
              description: "Assign managed identity to a container app job",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--system-assigned",
                  description:
                    "Boolean indicating whether to assign system-assigned identity",
                },
                {
                  name: "--user-assigned",
                  description: "Space-separated user identities",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a managed identity from a container app job",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--system-assigned",
                  description:
                    "Boolean indicating whether to assign system-assigned identity",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Space-separated user identities. If no user identities are specified, all user identities will be removed",
                  args: { name: "user-assigned" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description: "Show managed identities of a container app job",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Container Apps Job. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "secret",
          description: "Commands to manage secrets",
          subcommands: [
            {
              name: "list",
              description: "List the secrets of a container app job",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container app job for which the secret needs to be retrieved",
                  args: { name: "name" },
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
                  name: "--show-values",
                  description: "Show the secret values",
                },
              ],
            },
            {
              name: "remove",
              description: "Remove secrets from a container app job",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container app job for which the secret needs to be retrieved",
                  args: { name: "name" },
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
                  name: "--secret-names",
                  description:
                    "A list of secret(s) for the container app job. Space-separated secret values names",
                  args: { name: "secret-names" },
                  isRequired: true,
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "set",
              description: "Create/update secrets",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container app job for which the secret needs to be retrieved",
                  args: { name: "name" },
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
                  name: ["--secrets", "-s"],
                  description:
                    "A list of secret(s) for the container app job. Space-separated values in 'key=value' or 'key=keyvaultref:keyvaulturl,identityref:identity' format (where 'key' cannot be longer than 20 characters)",
                  args: { name: "secrets" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a secret",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the container app job for which the secret needs to be retrieved",
                  args: { name: "name" },
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
                  name: "--secret-name",
                  description: "The name of the secret to show",
                  args: { name: "secret-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "logs",
      description: "Show container app logs",
      subcommands: [
        {
          name: "show",
          description:
            "Show past logs and/or print logs in real time (with the --follow parameter). Note that the logs are only taken from one revision, replica, and container (for non-system logs)",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Containerapp",
              args: { name: "name" },
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
              name: "--container",
              description: "The name of the container",
              args: { name: "container" },
            },
            {
              name: "--follow",
              description: "Print logs in real time if present",
            },
            {
              name: "--format",
              description: "Log output format",
              args: { name: "format", suggestions: ["json", "text"] },
            },
            {
              name: "--replica",
              description:
                "The name of the replica. List replicas with 'az containerapp replica list'. A replica may not exist if there is not traffic to your app",
              args: { name: "replica" },
            },
            {
              name: "--revision",
              description:
                "The name of the container app revision. Defaults to the latest revision",
              args: { name: "revision" },
            },
            {
              name: "--tail",
              description: "The number of past logs to print (0-300)",
              args: { name: "tail" },
            },
            {
              name: ["--type", "-t"],
              description: "Type of logs to stream",
              args: { name: "type", suggestions: ["console", "system"] },
            },
          ],
        },
      ],
    },
    {
      name: "patch",
      description:
        "Patch Azure Container Apps. Patching is only available for the apps built using the source to cloud feature. See https://aka.ms/aca-local-source-to-cloud",
      subcommands: [
        {
          name: "apply",
          description:
            "List and apply container apps to be patched. Patching is only available for the apps built using the source to cloud feature. See https://aka.ms/aca-local-source-to-cloud",
          options: [
            {
              name: ["--environment", "-e"],
              description:
                "Name or resource id of the Container App environment",
              args: { name: "environment" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--show-all",
              description: "Show all patchable and unpatchable container apps",
            },
          ],
        },
        {
          name: "interactive",
          description:
            "List and select container apps to be patched in an interactive way. Patching is only available for the apps built using the source to cloud feature. See https://aka.ms/aca-local-source-to-cloud",
          options: [
            {
              name: ["--environment", "-e"],
              description:
                "Name or resource id of the Container App environment",
              args: { name: "environment" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--show-all",
              description: "Show all patchable and unpatchable container apps",
            },
          ],
        },
        {
          name: "list",
          description:
            "List container apps that can be patched. Patching is only available for the apps built using the source to cloud feature. See https://aka.ms/aca-local-source-to-cloud",
          options: [
            {
              name: ["--environment", "-e"],
              description:
                "Name or resource id of the Container App environment",
              args: { name: "environment" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--show-all",
              description: "Show all patchable and unpatchable container apps",
            },
          ],
        },
      ],
    },
    {
      name: "registry",
      description: "Commands to manage container registry information",
      subcommands: [
        {
          name: "list",
          description:
            "List container registries configured in a container app",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          description: "Remove a container registry's details",
          options: [
            {
              name: "--server",
              description:
                "The container registry server, e.g. myregistry.azurecr.io",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "set",
          description: "Add or update a container registry's details",
          options: [
            {
              name: "--server",
              description:
                "The container registry server, e.g. myregistry.azurecr.io",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: "--identity",
              description:
                "The managed identity with which to authenticate to the Azure Container Registry (instead of username/password). Use 'system' for a system-defined identity or a resource id for a user-defined identity. The managed identity should have been assigned acrpull permissions on the ACR before deployment (use 'az role assignment create --role acrpull ...')",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: "--password",
              description:
                "The password of the registry. If using Azure Container Registry, we will try to infer the credentials if not supplied",
              args: { name: "password" },
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
              name: "--username",
              description:
                "The username of the registry. If using Azure Container Registry, we will try to infer the credentials if not supplied",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a container registry",
          options: [
            {
              name: "--server",
              description:
                "The container registry server, e.g. myregistry.azurecr.io",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
      ],
    },
    {
      name: "replica",
      description: "Manage container app replicas",
      subcommands: [
        {
          name: "list",
          description: "List a container app revision's replica",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Containerapp",
              args: { name: "name" },
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
              name: "--revision",
              description:
                "The name of the container app revision. Defaults to the latest revision",
              args: { name: "revision" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a container app replica",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Containerapp",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--replica",
              description: "The name of the replica",
              args: { name: "replica" },
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
              name: "--revision",
              description:
                "The name of the container app revision. Defaults to the latest revision",
              args: { name: "revision" },
            },
          ],
        },
      ],
    },
    {
      name: "revision",
      description: "Commands to manage revisions",
      subcommands: [
        {
          name: "activate",
          description: "Activate a revision",
          options: [
            {
              name: "--revision",
              description: "Name of the revision",
              args: { name: "revision" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "copy",
          description: "Create a revision based on a previous revision",
          options: [
            {
              name: "--args",
              description:
                'A list of container startup command argument(s). Space-separated values e.g. "-c" "mycommand". Empty string to clear existing values',
              args: { name: "args" },
            },
            {
              name: "--command",
              description:
                'A list of supported commands on the container that will executed during startup. Space-separated values e.g. "/bin/queue" "mycommand". Empty string to clear existing values',
              args: { name: "command" },
            },
            {
              name: "--container-name",
              description: "Name of the container",
              args: { name: "container-name" },
            },
            {
              name: "--cpu",
              description: "Required CPU in cores from 0.25 - 2.0, e.g. 0.5",
              args: { name: "cpu" },
            },
            {
              name: "--from-revision",
              description: "Revision to copy from. Default: latest revision",
              args: { name: "from-revision" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--image", "-i"],
              description: "Container image, e.g. publisher/image-name:tag",
              args: { name: "image" },
            },
            {
              name: "--max-replicas",
              description: "The maximum number of replicas",
              args: { name: "max-replicas" },
            },
            {
              name: "--memory",
              description:
                'Required memory from 0.5 - 4.0 ending with "Gi", e.g. 1.0Gi',
              args: { name: "memory" },
            },
            {
              name: "--min-replicas",
              description: "The minimum number of replicas",
              args: { name: "min-replicas" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: "--remove-all-env-vars",
              description: "Remove all environment variable(s) from container",
            },
            {
              name: "--remove-env-vars",
              description:
                "Remove environment variable(s) from container. Space-separated environment variable names",
              args: { name: "remove-env-vars" },
            },
            {
              name: "--replace-env-vars",
              description:
                "Replace environment variable(s) in container. Other existing environment variables are removed. Space-separated values in 'key=value' format. If stored as a secret, value must start with 'secretref:' followed by the secret name",
              args: { name: "replace-env-vars" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--revision-suffix",
              description:
                "User friendly suffix that is appended to the revision name",
              args: { name: "revision-suffix" },
            },
            {
              name: ["--scale-rule-auth", "--sra"],
              description:
                'Scale rule auth parameters. Auth parameters must be in format "= = ..."',
              args: { name: "scale-rule-auth" },
            },
            {
              name: [
                "--scale-rule-http-concurrency",
                "--scale-rule-tcp-concurrency",
                "--srhc",
                "--srtc",
              ],
              description:
                "The maximum number of concurrent requests before scale out. Only supported for http and tcp scale rules",
              args: { name: "scale-rule-http-concurrency" },
            },
            {
              name: ["--scale-rule-metadata", "--srm"],
              description:
                'Scale rule metadata. Metadata must be in format "= = ..."',
              args: { name: "scale-rule-metadata" },
            },
            {
              name: ["--scale-rule-name", "--srn"],
              description: "The name of the scale rule",
              args: { name: "scale-rule-name" },
            },
            {
              name: ["--scale-rule-type", "--srt"],
              description:
                "The type of the scale rule. Default: http. For more information please visit https://learn.microsoft.com/azure/container-apps/scale-app#scale-triggers",
              args: { name: "scale-rule-type" },
            },
            {
              name: "--set-env-vars",
              description:
                "Add or update environment variable(s) in container. Existing environment variables are not modified. Space-separated values in 'key=value' format. If stored as a secret, value must start with 'secretref:' followed by the secret name",
              args: { name: "set-env-vars" },
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
              name: ["--workload-profile-name", "-w"],
              description: "The friendly name for the workload profile",
              args: { name: "workload-profile-name" },
            },
            {
              name: "--yaml",
              description:
                "Path to a .yaml file with the configuration of a container app. All other parameters will be ignored. For an example, see https://docs.microsoft.com/azure/container-apps/azure-resource-manager-api-spec#examples",
              args: { name: "yaml" },
            },
          ],
        },
        {
          name: "deactivate",
          description: "Deactivate a revision",
          options: [
            {
              name: "--revision",
              description: "Name of the revision",
              args: { name: "revision" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          description: "List a container app's revisions",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            { name: "--all", description: "Show inactive revisions" },
          ],
        },
        {
          name: "restart",
          description: "Restart a revision",
          options: [
            {
              name: "--revision",
              description: "Name of the revision",
              args: { name: "revision" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "set-mode",
          description: "Set the revision mode of a container app",
          options: [
            {
              name: "--mode",
              description: "The active revisions mode for the container app",
              args: { name: "mode", suggestions: ["multiple", "single"] },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          description: "Show details of a revision",
          options: [
            {
              name: "--revision",
              description: "Name of the revision",
              args: { name: "revision" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "label",
          description: "Manage revision labels assigned to traffic weights",
          subcommands: [
            {
              name: "add",
              description:
                "Set a revision label to a revision with an associated traffic weight",
              options: [
                {
                  name: "--label",
                  description: "Name of the label",
                  args: { name: "label" },
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
                  name: "--revision",
                  description: "Name of the revision",
                  args: { name: "revision" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
                },
                {
                  name: ["--no-prompt", "--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove a revision label from a revision with an associated traffic weight",
              options: [
                {
                  name: "--label",
                  description: "Name of the label",
                  args: { name: "label" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
              name: "swap",
              description:
                "Swap a revision label between two revisions with associated traffic weights",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
                  args: { name: "name" },
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
                  name: "--source",
                  description: "Source label to be swapped",
                  args: { name: "source" },
                  isRequired: true,
                },
                {
                  name: "--target",
                  description: "Target label to be swapped to",
                  args: { name: "target" },
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
      description: "Commands to manage secrets",
      subcommands: [
        {
          name: "list",
          description: "List the secrets of a container app",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            { name: "--show-values", description: "Show the secret values" },
          ],
        },
        {
          name: "remove",
          description: "Remove secrets from a container app",
          options: [
            {
              name: "--secret-names",
              description:
                "A list of secret(s) for the container app. Space-separated secret values names",
              args: { name: "secret-names" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          name: "set",
          description: "Create/update secrets",
          options: [
            {
              name: ["--secrets", "-s"],
              description:
                "A list of secret(s) for the container app. Space-separated values in 'key=value' or 'key=keyvaultref:keyvaulturl,identityref:identity' format (where 'key' cannot be longer than 20 characters)",
              args: { name: "secrets" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
          description: "Show details of a secret",
          options: [
            {
              name: "--secret-name",
              description: "The name of the secret to show",
              args: { name: "secret-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
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
      ],
    },
    {
      name: "service",
      description:
        "Commands to manage services available within the environment",
      subcommands: [
        {
          name: "list",
          description: "List all services within the environment",
          options: [
            {
              name: "--environment",
              description: "The environment name",
              args: { name: "environment" },
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
          name: "kafka",
          description:
            "Commands to manage the kafka service for the Container Apps environment",
          subcommands: [
            {
              name: "create",
              description: "Command to create the kafka service",
              options: [
                {
                  name: "--environment",
                  description: "The environment name",
                  args: { name: "environment" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
              ],
            },
            {
              name: "delete",
              description: "Command to delete the kafka service",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "mariadb",
          description:
            "Commands to manage the mariadb service for the Container Apps environment",
          subcommands: [
            {
              name: "create",
              description: "Command to create the mariadb service",
              options: [
                {
                  name: "--environment",
                  description: "The environment name",
                  args: { name: "environment" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
              ],
            },
            {
              name: "delete",
              description: "Command to delete the mariadb service",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "postgres",
          description:
            "Commands to manage the postgres service for the Container Apps environment",
          subcommands: [
            {
              name: "create",
              description: "Command to create the postgres service",
              options: [
                {
                  name: "--environment",
                  description: "The environment name",
                  args: { name: "environment" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
              ],
            },
            {
              name: "delete",
              description: "Command to delete the postgres service",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "qdrant",
          description:
            "Commands to manage the qdrant service for the Container Apps environment",
          subcommands: [
            {
              name: "create",
              description: "Command to create the qdrant service",
              options: [
                {
                  name: "--environment",
                  description: "The environment name",
                  args: { name: "environment" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
              ],
            },
            {
              name: "delete",
              description: "Command to delete the qdrant service",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
          ],
        },
        {
          name: "redis",
          description:
            "Commands to manage the redis service for the Container Apps environment",
          subcommands: [
            {
              name: "create",
              description: "Command to create the redis service",
              options: [
                {
                  name: "--environment",
                  description: "The environment name",
                  args: { name: "environment" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
              ],
            },
            {
              name: "delete",
              description: "Command to delete the redis service",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The service name",
                  args: { name: "name" },
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
          ],
        },
      ],
    },
    {
      name: "ssl",
      description:
        "Upload certificate to a managed environment, add hostname to an app in that environment, and bind the certificate to the hostname",
      subcommands: [
        {
          name: "upload",
          description:
            "Upload certificate to a managed environment, add hostname to an app in that environment, and bind the certificate to the hostname",
          options: [
            {
              name: ["--certificate-file", "-f"],
              description: "The filepath of the .pfx or .pem file",
              args: { name: "certificate-file" },
              isRequired: true,
            },
            {
              name: ["--environment", "-e"],
              description:
                "Name or resource id of the Container App environment",
              args: { name: "environment" },
              isRequired: true,
            },
            {
              name: "--hostname",
              description: "The custom domain name",
              args: { name: "hostname" },
              isRequired: true,
            },
            {
              name: ["--certificate-name", "-c"],
              description:
                "Name of the certificate which should be unique within the Container Apps environment",
              args: { name: "certificate-name" },
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
              name: ["--name", "-n"],
              description:
                "The name of the Containerapp. A name must consist of lower case alphanumeric characters or '-', start with a letter, end with an alphanumeric character, cannot have '--', and must be less than 32 characters",
              args: { name: "name" },
            },
            {
              name: ["--password", "-p"],
              description: "The certificate file password",
              args: { name: "password" },
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
      ],
    },
  ],
};

export default completion;
