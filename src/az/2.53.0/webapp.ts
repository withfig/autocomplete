const completion: Fig.Spec = {
  name: "webapp",
  description: "Manage web apps",
  subcommands: [
    {
      name: "auth",
      description:
        'Manage webapp authentication and authorization. To use v2 auth commands, run "az extension add --name authV2" to add the authV2 CLI extension',
      subcommands: [
        {
          name: "set",
          description:
            "Sets the authentication settings for the webapp in the v2 format, overwriting any existing settings",
          options: [
            {
              name: ["--body", "-b"],
              description:
                "JSON representation of the configuration settings for the Azure App Service Authentication / Authorization V2 feature",
              args: { name: "body" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the web app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Show the authentification settings for the webapp",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Update the authentication settings for the webapp",
          options: [
            {
              name: "--aad-allowed-token-audiences",
              description: "One or more token audiences (comma-delimited)",
              args: { name: "aad-allowed-token-audiences" },
            },
            {
              name: "--aad-client-id",
              description:
                "Application ID to integrate AAD organization account Sign-in into your web app",
              args: { name: "aad-client-id" },
            },
            {
              name: "--aad-client-secret",
              description: "AAD application secret",
              args: { name: "aad-client-secret" },
            },
            {
              name: [
                "--aad-client-secret-certificate-thumbprint",
                "--thumbprint",
              ],
              description:
                "Alternative to AAD Client Secret, thumbprint of a certificate used for signing purposes",
              args: { name: "aad-client-secret-certificate-thumbprint" },
            },
            {
              name: "--aad-token-issuer-url",
              description:
                'This url can be found in the JSON output returned from your active directory endpoint using your tenantID. The endpoint can be queried from az cloud show at "endpoints.activeDirectory". The tenantID can be found using az account show. Get the "issuer" from the JSON at //.well-known/openid-configuration',
              args: { name: "aad-token-issuer-url" },
            },
            {
              name: "--action",
              description: "",
              args: {
                name: "action",
                suggestions: [
                  "AllowAnonymous",
                  "LoginWithAzureActiveDirectory",
                  "LoginWithFacebook",
                  "LoginWithGoogle",
                  "LoginWithMicrosoftAccount",
                  "LoginWithTwitter",
                ],
              },
            },
            {
              name: "--allowed-external-redirect-urls",
              description: "One or more urls (space-delimited)",
              args: { name: "allowed-external-redirect-urls" },
            },
            {
              name: "--enabled",
              description: "",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--facebook-app-id",
              description:
                "Application ID to integrate Facebook Sign-in into your web app",
              args: { name: "facebook-app-id" },
            },
            {
              name: "--facebook-app-secret",
              description: "Facebook Application client secret",
              args: { name: "facebook-app-secret" },
            },
            {
              name: "--facebook-oauth-scopes",
              description:
                "One or more facebook authentication scopes (comma-delimited)",
              args: { name: "facebook-oauth-scopes" },
            },
            {
              name: "--google-client-id",
              description:
                "Application ID to integrate Google Sign-in into your web app",
              args: { name: "google-client-id" },
            },
            {
              name: "--google-client-secret",
              description: "Google Application client secret",
              args: { name: "google-client-secret" },
            },
            {
              name: "--google-oauth-scopes",
              description:
                "One or more Google authentication scopes (space-delimited)",
              args: { name: "google-oauth-scopes" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--microsoft-account-client-id",
              description:
                "AAD V2 Application ID to integrate Microsoft account Sign-in into your web app",
              args: { name: "microsoft-account-client-id" },
            },
            {
              name: "--microsoft-account-client-secret",
              description: "AAD V2 Application client secret",
              args: { name: "microsoft-account-client-secret" },
            },
            {
              name: "--microsoft-account-oauth-scopes",
              description:
                "One or more Microsoft authentification scopes (comma-delimited)",
              args: { name: "microsoft-account-oauth-scopes" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
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
                "Runtime version of the Authentication/Authorization feature in use for the current app",
              args: { name: "runtime-version" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--token-refresh-extension-hours",
              description: "Hours, must be formattable into a float",
              args: { name: "token-refresh-extension-hours" },
            },
            {
              name: "--token-store",
              description: "Use App Service Token Store",
              args: { name: "token-store", suggestions: ["false", "true"] },
            },
            {
              name: "--twitter-consumer-key",
              description:
                "Application ID to integrate Twitter Sign-in into your web app",
              args: { name: "twitter-consumer-key" },
            },
            {
              name: "--twitter-consumer-secret",
              description: "Twitter Application client secret",
              args: { name: "twitter-consumer-secret" },
            },
          ],
        },
        {
          name: "apple",
          description:
            "Manage webapp authentication and authorization of the Apple identity provider",
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  name: ["--client-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the client secret",
                  args: { name: "client-secret-setting-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "config-version",
          description:
            "Manage the state of the configuration version for the authentication settings for the webapp. Configuration version v1 refers to the /authSettings endpoints whereas v2 refers to the /authSettingsV2 endpoints",
          subcommands: [
            {
              name: "revert",
              description:
                "Reverts the configuration version of the authentication settings for the webapp from v2 to v1 (classic)",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description:
                "Show the configuration version of the authentication settings for the webapp. Configuration version v1 refers to the /authSettings endpoints whereas v2 refers to the /authSettingsV2 endpoints",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "upgrade",
              description:
                "Upgrades the configuration version of the authentication settings for the webapp from v1 (classic) to v2",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "facebook",
          description:
            "Manage webapp authentication and authorization of the Facebook identity provider",
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  name: ["--app-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the app secret",
                  args: { name: "app-secret-setting-name" },
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
                  description: "Name of the web app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
            "Manage webapp authentication and authorization of the GitHub identity provider",
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  name: ["--client-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the client secret",
                  args: { name: "client-secret-setting-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
            "Manage webapp authentication and authorization of the Google identity provider",
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  name: ["--client-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the client secret",
                  args: { name: "client-secret-setting-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
            "Manage webapp authentication and authorization of the Microsoft identity provider",
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  description:
                    "The Client ID of this relying party application, known as the client_id",
                  args: { name: "client-id" },
                },
                {
                  name: "--client-secret",
                  description: "AAD application secret",
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
                  name: ["--client-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the client secret of the relying party application",
                  args: { name: "client-secret-setting-name" },
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
            "Manage webapp authentication and authorization of the custom OpenID Connect identity providers",
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
                  description:
                    "The application secret of the app used for login",
                  args: { name: "client-secret" },
                },
                {
                  name: ["--client-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the client secret",
                  args: { name: "client-secret-setting-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  description:
                    "The application secret of the app used for login",
                  args: { name: "client-secret" },
                },
                {
                  name: ["--client-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the client secret",
                  args: { name: "client-secret-setting-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
            "Manage webapp authentication and authorization of the Twitter identity provider",
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
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                  name: ["--consumer-secret-setting-name", "--secret-setting"],
                  description:
                    "The app setting name that contains the OAuth 1.0a consumer secret of the Twitter",
                  args: { name: "consumer-secret-setting-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
      name: "auth-classic",
      description:
        "Manage webapp authentication and authorization in the classic format",
      subcommands: [
        {
          name: "show",
          description:
            "Show the authentication settings for the webapp in the classic format",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the web app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
            "Update the authentication settings for the webapp in the classic format",
          options: [
            {
              name: ["--aad-allowed-token-audiences", "--allowed-audiences"],
              description: "One or more token audiences (space-delimited)",
              args: { name: "aad-allowed-token-audiences" },
            },
            {
              name: "--aad-client-id",
              description:
                "Application ID to integrate AAD organization account Sign-in into your web app",
              args: { name: "aad-client-id" },
            },
            {
              name: "--aad-client-secret",
              description: "AAD application secret",
              args: { name: "aad-client-secret" },
            },
            {
              name: [
                "--aad-client-secret-certificate-thumbprint",
                "--thumbprint",
              ],
              description:
                "Alternative to AAD Client Secret, thumbprint of a certificate used for signing purposes",
              args: { name: "aad-client-secret-certificate-thumbprint" },
            },
            {
              name: [
                "--aad-client-secret-setting-name",
                "--aad-secret-setting",
              ],
              description:
                "The app setting name that contains the client secret of the relying party application",
              args: { name: "aad-client-secret-setting-name" },
            },
            {
              name: "--aad-token-issuer-url",
              description:
                'This url can be found in the JSON output returned from your active directory endpoint using your tenantID. The endpoint can be queried from az cloud show at "endpoints.activeDirectory". The tenantID can be found using az account show. Get the "issuer" from the JSON at //.well-known/openid-configuration',
              args: { name: "aad-token-issuer-url" },
            },
            {
              name: "--action",
              description:
                "The action to take when an unauthenticated client attempts to access the app",
              args: {
                name: "action",
                suggestions: [
                  "AllowAnonymous",
                  "LoginWithAzureActiveDirectory",
                  "LoginWithFacebook",
                  "LoginWithGoogle",
                  "LoginWithMicrosoftAccount",
                  "LoginWithTwitter",
                ],
              },
            },
            {
              name: "--allowed-redirect-urls",
              description: "One or more urls (space-delimited)",
              args: { name: "allowed-redirect-urls" },
            },
            {
              name: "--enabled",
              description:
                "True if the Authentication / Authorization feature is enabled for the current app; otherwise, false",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--facebook-app-id",
              description:
                "Application ID to integrate Facebook Sign-in into your web app",
              args: { name: "facebook-app-id" },
            },
            {
              name: "--facebook-app-secret",
              description: "Facebook Application client secret",
              args: { name: "facebook-app-secret" },
            },
            {
              name: [
                "--facebook-app-secret-setting-name",
                "--fb-secret-setting",
              ],
              description:
                "The app setting name that contains the app secret used for Facebook Login",
              args: { name: "facebook-app-secret-setting-name" },
            },
            {
              name: "--facebook-oauth-scopes",
              description:
                "One or more facebook authentication scopes (space-delimited)",
              args: { name: "facebook-oauth-scopes" },
            },
            {
              name: "--github-client-id",
              description: "The Client Id of the GitHub app used for login",
              args: { name: "github-client-id" },
            },
            {
              name: "--github-client-secret",
              description: "The Client Secret of the GitHub app used for login",
              args: { name: "github-client-secret" },
            },
            {
              name: [
                "--github-client-secret-setting-name",
                "--github-secret-setting",
              ],
              description:
                "The app setting name that contains the client secret of the Github app used for GitHub Login",
              args: { name: "github-client-secret-setting-name" },
            },
            {
              name: ["--github-oauth-scopes", "--github-scopes"],
              description:
                "The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication",
              args: { name: "github-oauth-scopes" },
            },
            {
              name: "--google-client-id",
              description:
                "Application ID to integrate Google Sign-in into your web app",
              args: { name: "google-client-id" },
            },
            {
              name: "--google-client-secret",
              description: "Google Application client secret",
              args: { name: "google-client-secret" },
            },
            {
              name: [
                "--google-client-secret-setting-name",
                "--google-secret-setting",
              ],
              description:
                "The app setting name that contains the client secret associated with the Google web application",
              args: { name: "google-client-secret-setting-name" },
            },
            {
              name: "--google-oauth-scopes",
              description:
                "One or more Google authentication scopes (space-delimited)",
              args: { name: "google-oauth-scopes" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--microsoft-account-client-id", "--msa-client"],
              description:
                "AAD V2 Application ID to integrate Microsoft account Sign-in into your web app",
              args: { name: "microsoft-account-client-id" },
            },
            {
              name: ["--microsoft-account-client-secret", "--msa-secret"],
              description: "AAD V2 Application client secret",
              args: { name: "microsoft-account-client-secret" },
            },
            {
              name: [
                "--microsoft-account-client-secret-setting-name",
                "--msa-secret-setting",
              ],
              description:
                "The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication",
              args: { name: "microsoft-account-client-secret-setting-name" },
            },
            {
              name: ["--microsoft-account-oauth-scopes", "--msa-scopes"],
              description:
                "One or more Microsoft authentification scopes (space-delimited)",
              args: { name: "microsoft-account-oauth-scopes" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the web app",
              args: { name: "name" },
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
                "Runtime version of the Authentication/Authorization feature in use for the current app",
              args: { name: "runtime-version" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: [
                "--token-refresh-extension-hours",
                "--token-refresh-hours",
              ],
              description: "Hours, must be formattable into a float",
              args: { name: "token-refresh-extension-hours" },
            },
            {
              name: "--token-store",
              description: "Use App Service Token Store",
              args: { name: "token-store", suggestions: ["false", "true"] },
            },
            {
              name: "--twitter-consumer-key",
              description:
                "Application ID to integrate Twitter Sign-in into your web app",
              args: { name: "twitter-consumer-key" },
            },
            {
              name: ["--twitter-consumer-secret", "--twitter-secret"],
              description: "Twitter Application client secret",
              args: { name: "twitter-consumer-secret" },
            },
            {
              name: [
                "--twitter-consumer-secret-setting-name",
                "--twitter-secret-setting",
              ],
              description:
                "The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in",
              args: { name: "twitter-consumer-secret-setting-name" },
            },
          ],
        },
      ],
    },
    {
      name: "browse",
      description:
        "Open a web app in a browser. This is not supported in Azure Cloud Shell",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--logs", "-l"],
          description:
            "Enable viewing the log stream immediately after launching the web app",
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      description: "Create a web app",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the new web app. Web app name can contain only allow alphanumeric characters and hyphens, it cannot start or end in a hyphen, and must be less than 64 characters",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--plan", "-p"],
          description:
            "Name or resource id of the app service plan. Use 'appservice plan create' to get one",
          args: { name: "plan" },
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
          name: "--assign-identity",
          description:
            "Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples",
          args: { name: "assign-identity" },
        },
        {
          name: ["--deployment-container-image-name", "-i"],
          description:
            "Container image name from Docker Hub, e.g. publisher/image-name:tag",
          args: { name: "deployment-container-image-name" },
        },
        {
          name: ["--deployment-local-git", "-l"],
          description: "Enable local git",
          args: { name: "deployment-local-git" },
        },
        {
          name: ["--deployment-source-branch", "-b"],
          description: "The branch to deploy",
          args: { name: "deployment-source-branch" },
        },
        {
          name: ["--deployment-source-url", "-u"],
          description: "Git repository URL to link with manual integration",
          args: { name: "deployment-source-url" },
        },
        {
          name: ["--docker-registry-server-password", "-w"],
          description:
            "The container registry server password. Required for private registries",
          args: { name: "docker-registry-server-password" },
        },
        {
          name: ["--docker-registry-server-user", "-s"],
          description: "The container registry server username",
          args: { name: "docker-registry-server-user" },
        },
        {
          name: "--https-only",
          description:
            "Redirect all traffic made to an app using HTTP to HTTPS",
        },
        {
          name: "--multicontainer-config-file",
          description:
            "Linux only. Config file for multicontainer apps. (local or remote)",
          args: { name: "multicontainer-config-file" },
        },
        {
          name: "--multicontainer-config-type",
          description: "Linux only",
          args: {
            name: "multicontainer-config-type",
            suggestions: ["COMPOSE", "KUBE"],
          },
        },
        {
          name: "--public-network-access",
          description: "Enable or disable public access to the web app",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: ["--runtime", "-r"],
          description:
            'Canonicalized web runtime in the format of Framework:Version, e.g. "PHP:7.2".Use az webapp list-runtimes for available list',
          args: { name: "runtime" },
        },
        {
          name: "--scope",
          description: "Scope that the system assigned identity can access",
          args: { name: "scope" },
        },
        {
          name: "--startup-file",
          description: "Linux only. The web's startup file",
          args: { name: "startup-file" },
        },
        {
          name: "--subnet",
          description:
            "Name or resource ID of the pre-existing subnet to have the webapp join. The --vnet is argument also needed if specifying subnet by name",
          args: { name: "subnet" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--vnet",
          description:
            "Name or resource ID of the regional virtual network. If there are multiple vnets of the same name across different resource groups, use vnet resource id to specify which vnet to use. If vnet name is used, by default, the vnet in the same resource group as the webapp will be used. Must be used with --subnet argument",
          args: { name: "vnet" },
        },
      ],
    },
    {
      name: "create-remote-connection",
      description:
        "Creates a remote connection using a tcp tunnel to your web app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--instance", "-i"],
          description: "Webapp instance to connect to. Defaults to none",
          args: { name: "instance" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--port", "-p"],
          description:
            "Port for the remote connection. Default: Random available port",
          args: { name: "port" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout in seconds. Defaults to none",
          args: { name: "timeout" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a web app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--keep-dns-registration",
          description:
            "Argument 'keep_dns_registration' has been deprecated and will be removed in version '3.0.0'. Keep DNS registration",
          args: { name: "keep-dns-registration" },
        },
        {
          name: "--keep-empty-plan",
          description: "Keep empty app service plan",
          args: { name: "keep-empty-plan" },
        },
        {
          name: "--keep-metrics",
          description: "Keep app metrics",
          args: { name: "keep-metrics" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the webapp",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "deploy",
      description: "Deploys a provided artifact to Azure Web Apps",
      options: [
        {
          name: "--async",
          description:
            'If true, the artifact is deployed asynchronously. (The command will exit once the artifact is pushed to the web app.). Synchronous deployments are not yet supported when using "--src-url"',
          args: { name: "async", suggestions: ["false", "true"] },
        },
        {
          name: "--clean",
          description:
            "If true, cleans the target directory prior to deploying the file(s). Default value is determined based on artifact type",
          args: { name: "clean", suggestions: ["false", "true"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--ignore-stack",
          description: "If true, any stack-specific defaults are ignored",
          args: { name: "ignore-stack", suggestions: ["false", "true"] },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the webapp to deploy to",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--restart",
          description:
            "If true, the web app will be restarted following the deployment. Set this to false if you are deploying multiple artifacts and do not want to restart the site on the earlier deployments",
          args: { name: "restart", suggestions: ["false", "true"] },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--src-path",
          description:
            'Path of the artifact to be deployed. Ex: "myapp.zip" or "/myworkspace/apps/myapp.war"',
          args: { name: "src-path" },
        },
        {
          name: "--src-url",
          description:
            'URL of the artifact. The webapp will pull the artifact from this URL. Ex: "http://mysite.com/files/myapp.war?key=123"',
          args: { name: "src-url" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--target-path",
          description:
            'Absolute path that the artifact should be deployed to. Defaults to "home/site/wwwroot/" Ex: "/home/site/deployments/tools/", "/home/site/scripts/startup-script.sh"',
          args: { name: "target-path" },
        },
        {
          name: "--timeout",
          description:
            'Timeout for the deployment operation in milliseconds. Ignored when using "--src-url" since synchronous deployments are not yet supported when using "--src-url"',
          args: { name: "timeout" },
        },
        {
          name: "--type",
          description: "Used to override the type of artifact being deployed",
          args: {
            name: "type",
            suggestions: [
              "ear",
              "jar",
              "lib",
              "startup",
              "static",
              "war",
              "zip",
            ],
          },
        },
      ],
    },
    {
      name: "list",
      description: "List web apps",
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
      name: "list-instances",
      description: "List all scaled out instances of a web app or web app slot",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
          name: ["--slot", "-s"],
          description:
            "Name of the web app slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
      ],
    },
    {
      name: "list-runtimes",
      description:
        "List available built-in stacks which can be used for web apps",
      options: [
        {
          name: "--linux",
          description:
            "Argument 'linux' has been deprecated and will be removed in a future release. Use '--os-type' instead. List runtime stacks for linux based web apps",
        },
        {
          name: ["--os-type", "--os"],
          description: "Limit the output to just windows or linux runtimes",
          args: { name: "os-type", suggestions: ["linux", "windows"] },
        },
      ],
    },
    {
      name: "restart",
      description: "Restart a web app",
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
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "scale",
      description:
        "Modify the number of instances of a webapp on Arc enabled Kubernetes workloads",
      options: [
        {
          name: "--instance-count",
          description: "Number of instances",
          args: { name: "instance-count" },
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
            "Name of the web app. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      description: "Get the details of a web app",
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
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "ssh",
      description:
        "SSH command establishes a ssh session to the web container and developer would get a shell terminal remotely",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--instance", "-i"],
          description: "Webapp instance to connect to. Defaults to none",
          args: { name: "instance" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--port", "-p"],
          description:
            "Port for the remote connection. Default: Random available port",
          args: { name: "port" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout in seconds. Defaults to none",
          args: { name: "timeout" },
        },
      ],
    },
    {
      name: "start",
      description: "Start a web app",
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
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "stop",
      description: "Stop a web app",
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
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "up",
      description:
        "Create a webapp and deploy code from a local workspace to the app. The command is required to run from the folder where the code is present. Current support includes Node, Python, .NET Core and ASP.NET. Node, Python apps are created as Linux apps. .Net Core, ASP.NET, and static HTML apps are created as Windows apps. Append the html flag to deploy as a static HTML app. Each time the command is successfully run, default argument values for resource group, sku, location, plan, and name are saved for the current directory. These defaults are then used for any arguments not provided on subsequent runs of the command in the same directory.  Use 'az configure' to manage defaults",
      options: [
        {
          name: ["--app-service-environment", "-e"],
          description:
            "Name or resource ID of the (pre-existing) App Service Environment to deploy to. Requires an Isolated V2 sku [I1v2, I2v2, I3v2]",
          args: { name: "app-service-environment" },
        },
        {
          name: "--dryrun",
          description:
            "Show summary of the create and deploy operation instead of executing it",
        },
        {
          name: "--html",
          description: "Ignore app detection and deploy as an html app",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--launch-browser", "-b"],
          description:
            "Launch the created app using the default browser. This is not supported in Azure Cloud Shell",
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--logs",
          description:
            "Configure default logging required to enable viewing log stream immediately after launching the webapp",
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: "--os-type",
          description: "Set the OS type for the app to be created",
          args: { name: "os-type", suggestions: ["Linux", "Windows"] },
        },
        {
          name: ["--plan", "-p"],
          description:
            "Name of the app service plan associated with the webapp",
          args: { name: "plan" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--runtime", "-r"],
          description:
            'Canonicalized web runtime in the format of Framework:Version, e.g. "PHP:7.2".Use az webapp list-runtimes for available list',
          args: { name: "runtime" },
        },
        {
          name: "--sku",
          description:
            "The pricing tiers, e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), P2V2(Premium V2 Medium), P3V2(Premium V2 Large), P0V3(Premium V3 Extra Small), P1V3(Premium V3 Small), P2V3(Premium V3 Medium), P3V3(Premium V3 Large), P1MV3(Premium Memory Optimized V3 Small), P2MV3(Premium Memory Optimized V3 Medium), P3MV3(Premium Memory Optimized V3 Large), P4MV3(Premium Memory Optimized V3 Extra Large), P5MV3(Premium Memory Optimized V3 Extra Extra Large), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large), I1v2 (Isolated V2 Small), I2v2 (Isolated V2 Medium), I3v2 (Isolated V2 Large), I4v2 (Isolated V2 I4v2), I5v2 (Isolated V2 I5v2), I6v2 (Isolated V2 I6v2), WS1 (Logic Apps Workflow Standard 1), WS2 (Logic Apps Workflow Standard 2), WS3 (Logic Apps Workflow Standard 3)",
          args: {
            name: "sku",
            suggestions: [
              "B1",
              "B2",
              "B3",
              "D1",
              "F1",
              "FREE",
              "I1",
              "I1v2",
              "I2",
              "I2v2",
              "I3",
              "I3v2",
              "I4v2",
              "I5v2",
              "I6v2",
              "P0V3",
              "P1MV3",
              "P1V2",
              "P1V3",
              "P2MV3",
              "P2V2",
              "P2V3",
              "P3MV3",
              "P3V2",
              "P3V3",
              "P4MV3",
              "P5MV3",
              "S1",
              "S2",
              "S3",
              "SHARED",
              "WS1",
              "WS2",
              "WS3",
            ],
          },
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
      description: "Update an existing web app",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--client-affinity-enabled",
          description: "Enables sending session affinity cookies",
          args: {
            name: "client-affinity-enabled",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--force-dns-registration",
          description:
            "Argument 'force_dns_registration' has been deprecated and will be removed in version '3.0.0'. If true, web app hostname is force registered with DNS",
          args: {
            name: "force-dns-registration",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--https-only",
          description:
            "Redirect all traffic made to an app using HTTP to HTTPS",
          args: { name: "https-only", suggestions: ["false", "true"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--minimum-elastic-instance-count", "-i"],
          description:
            "Minimum number of instances. App must be in an elastic scale App Service Plan",
          args: { name: "minimum-elastic-instance-count" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
          args: { name: "name" },
        },
        {
          name: ["--prewarmed-instance-count", "-w"],
          description:
            "Number of preWarmed instances. App must be in an elastic scale App Service Plan",
          args: { name: "prewarmed-instance-count" },
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
          name: "--skip-custom-domain-verification",
          description:
            "Argument 'skip_custom_domain_verification' has been deprecated and will be removed in version '3.0.0'. If true, custom (non *.azurewebsites.net) domains associated with web app are not verified",
          args: {
            name: "skip-custom-domain-verification",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--skip-dns-registration",
          description:
            "Argument 'skip_dns_registration' has been deprecated and will be removed in version '3.0.0'. If true web app hostname is not registered with DNS on creation",
          args: {
            name: "skip-dns-registration",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--ttl-in-seconds",
          description:
            "Argument 'ttl_in_seconds' has been deprecated and will be removed in version '3.0.0'. Time to live in seconds for web app's default domain name",
          args: { name: "ttl-in-seconds", suggestions: ["false", "true"] },
        },
      ],
    },
    {
      name: "config",
      description: "Configure a web app",
      subcommands: [
        {
          name: "set",
          description: "Set a web app's configuration",
          options: [
            {
              name: "--always-on",
              description:
                "Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running",
              args: { name: "always-on", suggestions: ["false", "true"] },
            },
            {
              name: "--auto-heal-enabled",
              description: "Enable or disable auto heal",
              args: {
                name: "auto-heal-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--ftps-state",
              description:
                "Set the Ftps state value for an app. Default value is 'AllAllowed'",
              args: {
                name: "ftps-state",
                suggestions: ["AllAllowed", "Disabled", "FtpsOnly"],
              },
            },
            {
              name: "--generic-configurations",
              description:
                "Provide site configuration list in a format of either key=value pair or @<json_file>. PowerShell and Windows Command Prompt users should use a JSON file to provide these configurations to avoid compatibility issues with escape characters",
              args: { name: "generic-configurations" },
            },
            {
              name: "--http20-enabled",
              description:
                "Configures a web site to allow clients to connect over http2.0",
              args: { name: "http20-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--java-container",
              description: "The java container, e.g., Tomcat, Jetty",
              args: { name: "java-container" },
            },
            {
              name: "--java-container-version",
              description:
                "The version of the java container, e.g., '8.0.23' for Tomcat",
              args: { name: "java-container-version" },
            },
            {
              name: "--java-version",
              description:
                "The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8",
              args: { name: "java-version" },
            },
            {
              name: "--linux-fx-version",
              description:
                'The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|12LTS", "PHP|7.2", "DOTNETCORE|2.1". See https://aka.ms/linux-stacks for more info',
              args: { name: "linux-fx-version" },
            },
            {
              name: "--min-tls-version",
              description:
                "The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'",
              args: { name: "min-tls-version" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: "--net-framework-version",
              description:
                "The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5",
              args: { name: "net-framework-version" },
            },
            {
              name: "--number-of-workers",
              description: "The number of workers to be allocated",
              args: { name: "number-of-workers" },
            },
            {
              name: "--php-version",
              description:
                "The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0",
              args: { name: "php-version" },
            },
            {
              name: "--powershell-version",
              description:
                "The version used to run your function app if using PowerShell, e.g., 7.2",
              args: { name: "powershell-version" },
            },
            {
              name: "--prewarmed-instance-count",
              description: "Number of pre-warmed instances a function app has",
              args: { name: "prewarmed-instance-count" },
            },
            {
              name: "--python-version",
              description:
                "The version used to run your web app if using Python, e.g., 2.7, 3.4",
              args: { name: "python-version" },
            },
            {
              name: "--remote-debugging-enabled",
              description: "Enable or disable remote debugging",
              args: {
                name: "remote-debugging-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--startup-file",
              description:
                "The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web",
              args: { name: "startup-file" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--use-32bit-worker-process",
              description: "Use 32 bits worker process or not",
              args: {
                name: "use-32bit-worker-process",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--vnet-route-all-enabled",
              description:
                "Configure regional VNet integration to route all traffic to the VNet",
              args: {
                name: "vnet-route-all-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--web-sockets-enabled",
              description: "Enable or disable web sockets",
              args: {
                name: "web-sockets-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--windows-fx-version",
              description:
                "A docker image name used for your windows container web app, e.g., microsoft/nanoserver:ltsc2016",
              args: { name: "windows-fx-version" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a web app's configuration",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "access-restriction",
          description:
            "Methods that show, set, add, and remove access restrictions on a webapp",
          subcommands: [
            {
              name: "add",
              description: "Adds an Access Restriction to the webapp",
              options: [
                {
                  name: ["--priority", "-p"],
                  description: "Priority of the access restriction rule",
                  args: { name: "priority" },
                  isRequired: true,
                },
                {
                  name: "--action",
                  description: "Allow or deny access",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                },
                {
                  name: "--description",
                  description: "Description of the access restriction rule",
                  args: { name: "description" },
                },
                {
                  name: "--http-headers",
                  description:
                    "Space-separated http headers in a format of <name>=<value>",
                  args: { name: "http-headers" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled",
                },
                {
                  name: "--ip-address",
                  description:
                    "IP address or CIDR range (optional comma separated list of up to 8 ranges)",
                  args: { name: "ip-address" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description: "Name of the access restriction rule to add",
                  args: { name: "rule-name" },
                },
                {
                  name: "--scm-site",
                  description:
                    "True if access restrictions is added for scm site",
                },
                {
                  name: "--service-tag",
                  description:
                    "Service Tag (optional comma separated list of up to 8 tags)",
                  args: { name: "service-tag" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subnet",
                  description:
                    "Subnet name (requires vNet name) or subnet resource id",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vnet-name",
                  description: "VNet name",
                  args: { name: "vnet-name" },
                },
                {
                  name: "--vnet-resource-group",
                  description:
                    "Resource group of virtual network (default is web app resource group)",
                  args: { name: "vnet-resource-group" },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes an Access Restriction from the webapp",
              options: [
                {
                  name: "--action",
                  description: "Allow or deny access",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--ip-address",
                  description:
                    "IP address or CIDR range (optional comma separated list of up to 8 ranges)",
                  args: { name: "ip-address" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description: "Name of the access restriction to remove",
                  args: { name: "rule-name" },
                },
                {
                  name: "--scm-site",
                  description:
                    "True if access restriction should be removed from scm site",
                },
                {
                  name: "--service-tag",
                  description:
                    "Service Tag (optional comma separated list of up to 8 tags)",
                  args: { name: "service-tag" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subnet",
                  description:
                    "Subnet name (requires vNet name) or subnet resource id",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vnet-name",
                  description: "VNet name",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "set",
              description:
                "Sets if SCM site is using the same restrictions as the main site",
              options: [
                {
                  name: "--use-same-restrictions-for-scm-site",
                  description: "Use same access restrictions for scm site",
                  args: {
                    name: "use-same-restrictions-for-scm-site",
                    suggestions: ["false", "true"],
                  },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Show Access Restriction settings for webapp",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "appsettings",
          description:
            "Configure web app settings. Updating or removing application settings will cause an app recycle",
          subcommands: [
            {
              name: "delete",
              description: "Delete web app settings",
              options: [
                {
                  name: "--setting-names",
                  description: "Space-separated appsettings names",
                  args: { name: "setting-names" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get the details of a web app's settings",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Set a web app's settings",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
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
                    "Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. See https://go.microsoft.com/fwlink/?linkid=2219923 for more information on file format and editing app settings in bulk",
                  args: { name: "settings" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-settings",
                  description:
                    "Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. Given setting are added to the configuration and marked as Deployment slot setting by default",
                  args: { name: "slot-settings" },
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
          name: "backup",
          description: "Manage backups for web apps",
          subcommands: [
            {
              name: "create",
              description: "Create a backup of a web app",
              options: [
                {
                  name: "--container-url",
                  description:
                    "URL with SAS token to the blob storage container",
                  args: { name: "container-url" },
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
                  name: "--webapp-name",
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: "--backup-name",
                  description:
                    "Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp",
                  args: { name: "backup-name" },
                },
                {
                  name: "--db-connection-string",
                  description:
                    "Connection string for the database in the backup",
                  args: { name: "db-connection-string" },
                },
                {
                  name: "--db-name",
                  description: "Name of the database in the backup",
                  args: { name: "db-name" },
                },
                {
                  name: "--db-type",
                  description: "Type of database in the backup",
                  args: {
                    name: "db-type",
                    suggestions: [
                      "LocalMySql",
                      "MySql",
                      "PostgreSql",
                      "SqlAzure",
                    ],
                  },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a web app backup",
              options: [
                {
                  name: "--backup-id",
                  description: "Id of the backup",
                  args: { name: "backup-id" },
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
                  name: "--webapp-name",
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List backups of a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--webapp-name",
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "restore",
              description: "Restore a web app from a backup",
              options: [
                {
                  name: "--backup-name",
                  description: "Name of the backup to restore",
                  args: { name: "backup-name" },
                  isRequired: true,
                },
                {
                  name: "--container-url",
                  description:
                    "URL with SAS token to the blob storage container",
                  args: { name: "container-url" },
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
                  name: "--webapp-name",
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: "--db-connection-string",
                  description:
                    "Connection string for the database in the backup",
                  args: { name: "db-connection-string" },
                },
                {
                  name: "--db-name",
                  description: "Name of the database in the backup",
                  args: { name: "db-name" },
                },
                {
                  name: "--db-type",
                  description: "Type of database in the backup",
                  args: {
                    name: "db-type",
                    suggestions: [
                      "LocalMySql",
                      "MySql",
                      "PostgreSql",
                      "SqlAzure",
                    ],
                  },
                },
                {
                  name: "--ignore-hostname-conflict",
                  description: "Ignores custom hostnames stored in the backup",
                  args: { name: "ignore-hostname-conflict" },
                },
                {
                  name: "--overwrite",
                  description:
                    "Overwrite the source web app, if --target-name is not specified",
                  args: { name: "overwrite" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--target-name",
                  description:
                    "The name to use for the restored web app. If unspecified, will default to the name that was used when the backup was created",
                  args: { name: "target-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the backup schedule for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--webapp-name",
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "update",
              description: "Configure a new backup schedule for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--webapp-name",
                  description: "The name of the web app",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: "--backup-name",
                  description:
                    "Name of the backup. If unspecified, the backup will be named with the web app name and a timestamp",
                  args: { name: "backup-name" },
                },
                {
                  name: "--container-url",
                  description:
                    "URL with SAS token to the blob storage container",
                  args: { name: "container-url" },
                },
                {
                  name: "--db-connection-string",
                  description:
                    "Connection string for the database in the backup",
                  args: { name: "db-connection-string" },
                },
                {
                  name: "--db-name",
                  description: "Name of the database in the backup",
                  args: { name: "db-name" },
                },
                {
                  name: "--db-type",
                  description: "Type of database in the backup",
                  args: {
                    name: "db-type",
                    suggestions: [
                      "LocalMySql",
                      "MySql",
                      "PostgreSql",
                      "SqlAzure",
                    ],
                  },
                },
                {
                  name: "--frequency",
                  description:
                    "How often to backup. Use a number followed by d or h, e.g. 5d = 5 days, 2h = 2 hours",
                  args: { name: "frequency" },
                },
                {
                  name: "--retain-one",
                  description:
                    "Always keep one backup, regardless of how old it is",
                  args: { name: "retain-one", suggestions: ["false", "true"] },
                },
                {
                  name: "--retention",
                  description:
                    "How many days to keep a backup before automatically deleting it. Set to 0 for indefinite retention",
                  args: { name: "retention" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
        {
          name: "connection-string",
          description: "Manage a web app's connection strings",
          subcommands: [
            {
              name: "delete",
              description: "Delete a web app's connection strings",
              options: [
                {
                  name: "--setting-names",
                  description: "Space-separated connection-string names",
                  args: { name: "setting-names" },
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
                    "Name of the web app. You can configure the default using az configure --defaults web=<name>. If --ids is provided this should NOT be specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get a web app's connection strings",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Update a web app's connection strings",
              options: [
                {
                  name: ["--connection-string-type", "-t"],
                  description: "Connection string type",
                  args: {
                    name: "connection-string-type",
                    suggestions: [
                      "ApiHub",
                      "Custom",
                      "DocDb",
                      "EventHub",
                      "MySql",
                      "NotificationHub",
                      "PostgreSQL",
                      "RedisCache",
                      "SQLAzure",
                      "SQLServer",
                      "ServiceBus",
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
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. You can configure the default using az configure --defaults web=<name>. If --ids is provided this should NOT be specified",
                  args: { name: "name" },
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
                    "Space-separated connection-string in a format of <name>=<value>",
                  args: { name: "settings" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-settings",
                  description:
                    "Space-separated slot connection-string in a format of either <name>=<value> or @<json_file>",
                  args: { name: "slot-settings" },
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
          name: "container",
          description: "Manage an existing web app's container settings",
          subcommands: [
            {
              name: "delete",
              description: "Delete an existing web app's container settings",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Set an existing web app's container settings",
              options: [
                {
                  name: ["--docker-custom-image-name", "-c", "-i"],
                  description:
                    "The container custom image name and optionally the tag name (e.g., /:)",
                  args: { name: "docker-custom-image-name" },
                },
                {
                  name: ["--docker-registry-server-password", "-p"],
                  description: "The container registry server password",
                  args: { name: "docker-registry-server-password" },
                },
                {
                  name: ["--docker-registry-server-url", "-r"],
                  description: "The container registry server url",
                  args: { name: "docker-registry-server-url" },
                },
                {
                  name: ["--docker-registry-server-user", "-u"],
                  description: "The container registry server username",
                  args: { name: "docker-registry-server-user" },
                },
                {
                  name: ["--enable-app-service-storage", "-t"],
                  description:
                    "Enables platform storage (custom container only)",
                  args: {
                    name: "enable-app-service-storage",
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
                  name: "--multicontainer-config-file",
                  description: "Config file for multicontainer apps",
                  args: { name: "multicontainer-config-file" },
                },
                {
                  name: "--multicontainer-config-type",
                  description: "Config type",
                  args: {
                    name: "multicontainer-config-type",
                    suggestions: ["COMPOSE", "KUBE"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get details of a web app's container settings",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--show-multicontainer-config",
                  description:
                    "Shows decoded config if a multicontainer config is set",
                  args: { name: "show-multicontainer-config" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          description: "Configure hostnames for a web app",
          subcommands: [
            {
              name: "add",
              description: "Bind a hostname to a web app",
              options: [
                {
                  name: "--hostname",
                  description:
                    "Hostname assigned to the site, such as custom domains",
                  args: { name: "hostname" },
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--webapp-name",
                  description:
                    "Webapp name. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Unbind a hostname from a web app",
              options: [
                {
                  name: "--hostname",
                  description:
                    "Hostname assigned to the site, such as custom domains",
                  args: { name: "hostname" },
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--webapp-name",
                  description:
                    "Webapp name. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                },
              ],
            },
            {
              name: "get-external-ip",
              description: "Get the external-facing IP address for a web app",
              options: [
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
                {
                  name: "--webapp-name",
                  description:
                    "Webapp name. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all hostname bindings for a web app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--webapp-name",
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
        {
          name: "snapshot",
          description: "Manage web app snapshots",
          subcommands: [
            {
              name: "list",
              description: "List the restorable snapshots for a web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "restore",
              description: "Restore a web app snapshot",
              options: [
                {
                  name: "--time",
                  description: "Timestamp of the snapshot to restore",
                  args: { name: "time" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--restore-content-only",
                  description:
                    "Restore the web app files without restoring the settings",
                },
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                },
                {
                  name: "--source-name",
                  description: "Name of the web app to retrieve snapshot from",
                  args: { name: "source-name" },
                },
                {
                  name: "--source-resource-group",
                  description:
                    "Name of the resource group to retrieve snapshot from",
                  args: { name: "source-resource-group" },
                },
                {
                  name: "--source-slot",
                  description:
                    "Name of the web app slot to retrieve snapshot from",
                  args: { name: "source-slot" },
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
          name: "ssl",
          description: "Configure SSL certificates for web apps",
          subcommands: [
            {
              name: "bind",
              description: "Bind an SSL certificate to a web app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
                  isRequired: true,
                },
                {
                  name: "--ssl-type",
                  description: "The ssl cert type",
                  args: { name: "ssl-type", suggestions: ["IP", "SNI"] },
                  isRequired: true,
                },
                {
                  name: "--hostname",
                  description:
                    "The custom domain name. If empty, hostnames will be selected automatically",
                  args: { name: "hostname" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description:
                "Create a Managed Certificate for a hostname in a webapp app",
              options: [
                {
                  name: "--hostname",
                  description: "The custom domain name",
                  args: { name: "hostname" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an SSL certificate from a web app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
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
              name: "import",
              description:
                "Import an SSL or App Service Certificate to a web app from Key Vault",
              options: [
                {
                  name: "--key-vault",
                  description: "The name or resource ID of the Key Vault",
                  args: { name: "key-vault" },
                  isRequired: true,
                },
                {
                  name: "--key-vault-certificate-name",
                  description: "The name of the certificate in Key Vault",
                  args: { name: "key-vault-certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              description: "List SSL certificates for a web app",
              options: [
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
              description:
                "Show the details of an SSL certificate for a web app",
              options: [
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
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
              name: "unbind",
              description: "Unbind an SSL certificate from a web app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
                  isRequired: true,
                },
                {
                  name: "--hostname",
                  description:
                    "The custom domain name. If empty, hostnames will be selected automatically",
                  args: { name: "hostname" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "upload",
              description: "Upload an SSL certificate to a web app",
              options: [
                {
                  name: "--certificate-file",
                  description: "The filepath for the .pfx file",
                  args: { name: "certificate-file" },
                  isRequired: true,
                },
                {
                  name: "--certificate-password",
                  description: "The ssl cert password",
                  args: { name: "certificate-password" },
                  isRequired: true,
                },
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "storage-account",
          description:
            "Manage a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only)",
          subcommands: [
            {
              name: "add",
              description:
                "Add an Azure storage account configuration to a web app. (Linux Web Apps and Windows Containers Web Apps Only)",
              options: [
                {
                  name: ["--access-key", "-k"],
                  description: "Storage account access key",
                  args: { name: "access-key" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Storage account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--custom-id", "-i"],
                  description:
                    "Name of the share configured within the web app",
                  args: { name: "custom-id" },
                  isRequired: true,
                },
                {
                  name: ["--share-name", "--sn"],
                  description:
                    "Name of the file share as given in the storage account",
                  args: { name: "share-name" },
                  isRequired: true,
                },
                {
                  name: ["--storage-type", "-t"],
                  description: "Storage type",
                  args: {
                    name: "storage-type",
                    suggestions: ["AzureBlob", "AzureFiles"],
                  },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--mount-path", "-m"],
                  description:
                    "The path which the web app uses to read-write data ex: /share1 or /share2",
                  args: { name: "mount-path" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                { name: "--slot-setting", description: "Slot setting" },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a web app's Azure storage account configuration. (Linux Web Apps and Windows Containers Web Apps Only)",
              options: [
                {
                  name: ["--custom-id", "-i"],
                  description:
                    "Name of the share configured within the web app",
                  args: { name: "custom-id" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                "Get a web app's Azure storage account configurations. (Linux Web Apps and Windows Containers Web Apps Only)",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an existing Azure storage account configuration on a web app. (Linux Web Apps and Windows Containers Web Apps Only)",
              options: [
                {
                  name: ["--custom-id", "-i"],
                  description:
                    "Name of the share configured within the web app",
                  args: { name: "custom-id" },
                  isRequired: true,
                },
                {
                  name: ["--access-key", "-k"],
                  description: "Storage account access key",
                  args: { name: "access-key" },
                },
                {
                  name: ["--account-name", "-a"],
                  description: "Storage account name",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--mount-path", "-m"],
                  description:
                    "The path which the web app uses to read-write data ex: /share1 or /share2",
                  args: { name: "mount-path" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--share-name", "--sn"],
                  description:
                    "Name of the file share as given in the storage account",
                  args: { name: "share-name" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                { name: "--slot-setting", description: "Slot setting" },
                {
                  name: ["--storage-type", "-t"],
                  description: "Storage type",
                  args: {
                    name: "storage-type",
                    suggestions: ["AzureBlob", "AzureFiles"],
                  },
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
      name: "connection",
      description: "Commands to manage webapp connections",
      subcommands: [
        {
          name: "delete",
          description: "Delete a webapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the webapp connection",
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
                "Name of the webapp. Required if '--id' is not specified.None",
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
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List connections of a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the webapp. Required if '--source-id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--source-id",
              description:
                "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
              args: { name: "source-id" },
            },
          ],
        },
        {
          name: "list-configuration",
          description: "List source configurations of a webapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the webapp connection",
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
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list-support-types",
          description:
            "List client types and auth types supported by webapp connections",
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
          description: "Get the details of a webapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the webapp connection",
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
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a webapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the webapp connection",
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
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
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
              description: "Name of the webapp connection",
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
                "Name of the webapp. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the webapp. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--slot",
              description:
                "The name of the slot. Default to the production slot if not specified",
              args: { name: "slot" },
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
            "Create a connection between a webapp and a target resource",
          subcommands: [
            {
              name: "appconfig",
              description: "Create a webapp connection to appconfig",
              options: [
                {
                  name: "--app-config",
                  description:
                    "Name of the app configuration. Required if '--target-id' is not specified",
                  args: { name: "app-config" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to confluent-cloud",
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
                  description: "The client type used on the webapp",
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
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to cosmos-cassandra",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to cosmos-gremlin",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to cosmos-mongo",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to cosmos-sql",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to cosmos-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to eventhub",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to keyvault",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new keyvault when creating the webapp connection",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to mysql",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to mysql-flexible",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to postgres",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new postgres when creating the webapp connection",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to postgres-flexible",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to redis",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to redis-enterprise",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to servicebus",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to signalr",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to sql",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to storage-blob",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new storage-blob when creating the webapp connection",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to storage-file",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to storage-queue",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to storage-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Create a webapp connection to webpubsub",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
          description: "Update a webapp connection",
          subcommands: [
            {
              name: "appconfig",
              description: "Update a webapp to appconfig connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to confluent-cloud connection",
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
                  description: "The client type used on the webapp",
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
                    "Name of the webapp. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--source-id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a webapp. Required if ['--resource-group', '--name'] are not specified",
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
              description: "Update a webapp to cosmos-cassandra connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to cosmos-gremlin connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to cosmos-mongo connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to cosmos-sql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to cosmos-table connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to eventhub connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to keyvault connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to mysql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to mysql-flexible connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to postgres connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to postgres-flexible connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to redis connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to redis-enterprise connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to servicebus connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to signalr connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to sql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  name: "--config-connstr",
                  description:
                    "Store configuration into connection strings, only could be used together with dotnet client_type",
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to storage-blob connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to storage-file connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to storage-queue connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
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
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to storage-table connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              description: "Update a webapp to webpubsub connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the webapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the webapp connection",
                  args: { name: "connection" },
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
                    "Name of the webapp. Required if '--id' is not specified.None",
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
                    "The resource group which contains the webapp. Required if '--id' is not specified.None",
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
                  name: "--slot",
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
      name: "cors",
      description: "Manage Cross-Origin Resource Sharing (CORS)",
      subcommands: [
        {
          name: "add",
          description: "Add allowed origins",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*" and remove all other origins from the list',
              args: { name: "allowed-origins" },
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Remove allowed origins",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*" and remove all other origins from the list',
              args: { name: "allowed-origins" },
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Show allowed origins",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
      name: "deleted",
      description: "Manage deleted web apps",
      subcommands: [
        {
          name: "list",
          description: "List web apps that have been deleted",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deleted web app slot",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "restore",
          description: "Restore a deleted web app",
          options: [
            {
              name: "--deleted-id",
              description: "Resource ID of the deleted web app",
              args: { name: "deleted-id" },
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
                "Name of the web app to restore the deleted content to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restore-content-only",
              description:
                "Restore only deleted files without web app settings",
              args: { name: "restore-content-only" },
            },
            {
              name: ["--slot", "-s"],
              description: "Slot to restore the deleted content to",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-app-svc-plan",
              description: "The app service plan for the new azure web app",
              args: { name: "target-app-svc-plan" },
            },
          ],
        },
      ],
    },
    {
      name: "deployment",
      description: "Manage web app deployments",
      subcommands: [
        {
          name: "list-publishing-credentials",
          description:
            "Get the details for available web app publishing credentials",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "list-publishing-profiles",
          description:
            "Get the details for available web app deployment profiles",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--xml",
              description:
                "Retrieves the publishing profile details in XML format",
            },
          ],
        },
        {
          name: "container",
          description: "Manage container-based continuous deployment",
          subcommands: [
            {
              name: "config",
              description: "Configure continuous deployment via containers",
              options: [
                {
                  name: ["--enable-cd", "-e"],
                  description: "Enable/disable continuous deployment",
                  args: { name: "enable-cd", suggestions: ["false", "true"] },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "show-cd-url",
              description:
                "Get the URL which can be used to configure webhooks for continuous deployment",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "github-actions",
          description: "Configure GitHub Actions for a webapp",
          subcommands: [
            {
              name: "add",
              description:
                "Add a GitHub Actions workflow file to the specified repository. The workflow will build and deploy your app to the specified webapp",
              options: [
                {
                  name: "--repo",
                  description:
                    "The GitHub repository to which the workflow file will be added. In the format: /",
                  args: { name: "repo" },
                  isRequired: true,
                },
                {
                  name: ["--branch", "-b"],
                  description:
                    'The branch to which the workflow file will be added. Defaults to "master" if not specified',
                  args: { name: "branch" },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "When true, the command will overwrite any workflow file with a conflicting name",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--login-with-github",
                  description:
                    "Interactively log in with GitHub to retrieve the Personal Access Token",
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--runtime", "-r"],
                  description:
                    'Canonicalized web runtime in the format of Framework|Version, e.g. "PHP|5.6". Use "az webapp list-runtimes" for available list',
                  args: { name: "runtime" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
              name: "remove",
              description:
                "Remove and disconnect the GitHub Actions workflow file from the specified repository",
              options: [
                {
                  name: "--repo",
                  description:
                    "The GitHub repository to which the workflow file will be added. In the format: /",
                  args: { name: "repo" },
                  isRequired: true,
                },
                {
                  name: ["--branch", "-b"],
                  description:
                    'The branch to which the workflow file will be added. Defaults to "master" if not specified',
                  args: { name: "branch" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--login-with-github",
                  description:
                    "Interactively log in with GitHub to retrieve the Personal Access Token",
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
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
          ],
        },
        {
          name: "slot",
          description: "Manage web app deployment slots",
          subcommands: [
            {
              name: "auto-swap",
              description: "Configure deployment slot auto swap",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                {
                  name: "--auto-swap-slot",
                  description: "Target slot to auto swap",
                  args: { name: "auto-swap-slot" },
                },
                {
                  name: "--disable",
                  description: "Disable auto swap",
                  args: { name: "disable" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
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
              description: "Create a deployment slot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
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
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                {
                  name: "--configuration-source",
                  description:
                    "Source slot to clone configurations from. Use web app's name to refer to the production slot",
                  args: { name: "configuration-source" },
                },
                {
                  name: ["--deployment-container-image-name", "-i"],
                  description:
                    "Container image name, e.g. publisher/image-name:tag",
                  args: { name: "deployment-container-image-name" },
                },
                {
                  name: ["--docker-registry-server-password", "-w"],
                  description: "The container registry server password",
                  args: { name: "docker-registry-server-password" },
                },
                {
                  name: ["--docker-registry-server-user", "-u"],
                  description: "The container registry server username",
                  args: { name: "docker-registry-server-user" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a deployment slot",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
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
                  description: "Name of the webapp",
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
              description: "List all deployment slots",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the webapp",
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
              name: "swap",
              description: "Swap deployment slots for a web app",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                {
                  name: "--action",
                  description:
                    "Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap",
                  args: {
                    name: "action",
                    suggestions: ["preview", "reset", "swap"],
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
                  description: "Name of the webapp",
                  args: { name: "name" },
                },
                {
                  name: "--preserve-vnet",
                  description:
                    "Preserve Virtual Network to the slot during swap, default to 'true'",
                  args: {
                    name: "preserve-vnet",
                    suggestions: ["false", "true"],
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
                  name: "--target-slot",
                  description: "Target slot to swap, default to 'production'",
                  args: { name: "target-slot" },
                },
              ],
            },
          ],
        },
        {
          name: "source",
          description: "Manage web app deployment via source control",
          subcommands: [
            {
              name: "config",
              description:
                "Manage deployment from git or Mercurial repositories",
              options: [
                {
                  name: ["--repo-url", "-u"],
                  description:
                    "Repository url to pull the latest source from, e.g. https://github.com/foo/foo-web",
                  args: { name: "repo-url" },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description: "The branch name of the repository",
                  args: { name: "branch" },
                },
                {
                  name: "--git-token",
                  description: "Git access token required for auto sync",
                  args: { name: "git-token" },
                },
                {
                  name: "--github-action",
                  description: "If using GitHub action, default to False",
                  args: { name: "github-action" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--manual-integration",
                  description:
                    "Disable automatic sync between source control and web",
                  args: { name: "manual-integration" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: "--repository-type",
                  description: "Repository type",
                  args: {
                    name: "repository-type",
                    suggestions: [
                      "externalgit",
                      "git",
                      "github",
                      "localgit",
                      "mercurial",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "config-local-git",
              description:
                "Get a URL for a git repository endpoint to clone and push to for web app deployment",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "config-zip",
              description:
                "Perform deployment using the kudu zip push deployment for a web app",
              options: [
                {
                  name: "--src",
                  description: "A zip file path for deployment",
                  args: { name: "src" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "Configurable timeout in seconds for checking the status of deployment",
                  args: { name: "timeout" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a source control deployment configuration",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description:
                "Get the details of a source control deployment configuration",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "sync",
              description:
                "Synchronize from the repository. Only needed under manual integration mode",
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "update-token",
              description:
                "Update source control token cached in Azure app service",
              options: [
                {
                  name: "--git-token",
                  description: "Git access token required for auto sync",
                  args: { name: "git-token" },
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description: "Manage user credentials for deployment",
          subcommands: [
            {
              name: "set",
              description: "Update deployment credentials",
              options: [
                {
                  name: "--user-name",
                  description: "User name",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description: "Password, will prompt if not specified",
                  args: { name: "password" },
                },
              ],
            },
            {
              name: "show",
              description: "Get deployment publishing user",
            },
          ],
        },
      ],
    },
    {
      name: "hybrid-connection",
      description:
        "Methods that list, add and remove hybrid-connections from webapps",
      subcommands: [
        {
          name: "add",
          description: "Add an existing hybrid-connection to a webapp",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List the hybrid-connections on a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a hybrid-connection from a webapp",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage web app's managed identity",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity to the web app",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                "Role name or id the managed identity will be assigned",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "The scope the managed identity has access to",
              args: { name: "scope" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Disable web app's managed identity",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Display web app's managed identity",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
      name: "log",
      description: "Manage web app logs",
      subcommands: [
        {
          name: "config",
          description: "Configure logging for a web app",
          options: [
            {
              name: "--application-logging",
              description: "Configure application logging",
              args: {
                name: "application-logging",
                suggestions: ["azureblobstorage", "filesystem", "off"],
              },
            },
            {
              name: "--detailed-error-messages",
              description: "Configure detailed error messages",
              args: {
                name: "detailed-error-messages",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--docker-container-logging",
              description:
                "Configure gathering STDOUT and STDERR output from container",
              args: {
                name: "docker-container-logging",
                suggestions: ["filesystem", "off"],
              },
            },
            {
              name: "--failed-request-tracing",
              description: "Configure failed request tracing",
              args: {
                name: "failed-request-tracing",
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
              name: "--level",
              description: "Logging level",
              args: {
                name: "level",
                suggestions: ["error", "information", "verbose", "warning"],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--web-server-logging",
              description: "Configure Web server logging",
              args: {
                name: "web-server-logging",
                suggestions: ["filesystem", "off"],
              },
            },
          ],
        },
        {
          name: "download",
          description: "Download a web app's log history as a zip file",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--log-file",
              description: "The downloaded zipped log file path",
              args: { name: "log-file" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Get the details of a web app's logging configuration",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "tail",
          description: "Start live log tracing for a web app",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
              args: { name: "name" },
            },
            {
              name: "--provider",
              description:
                "By default all live traces configured by az webapp log config will be shown, but you can scope to certain providers/folders, e.g. 'application', 'http', etc. For details, check out https://github.com/projectkudu/kudu/wiki/Diagnostic-Log-Stream",
              args: { name: "provider" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "deployment",
          description: "Manage web app deployment logs",
          subcommands: [
            {
              name: "list",
              description: "List deployments associated with web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: "--deployment-id",
                  description:
                    "Deployment ID. If none specified, returns the deployment logs of the latest deployment",
                  args: { name: "deployment-id" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "scan",
      description:
        "Holds group of commands which cater to webapp scans. Currently available only for Linux based webapps",
      subcommands: [
        {
          name: "list-result",
          description:
            "Get details of all scans conducted on webapp, upto max scan limit set on the webapp This will get you the scan log results in addition to the scan status of each scan conducted on the webapp",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the webapp to connect to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deployment slot to use",
              args: { name: "slot" },
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
          name: "show-result",
          description:
            "Get results of specified scan-id. This will fetch you the Scan log results of the specified scan-id",
          options: [
            {
              name: "--scan-id",
              description: "Unique scan id",
              args: { name: "scan-id" },
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
              description: "Name of the webapp to connect to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deployment slot to use",
              args: { name: "slot" },
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
          description:
            "Starts the scan on the specified webapp files in the wwwroot directory. It returns a JSON containing the ScanID, traking and results URL",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the webapp to connect to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deployment slot to use",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timeout",
              description: "Timeout for operation in milliseconds",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "stop",
          description:
            "Stops the current executing scan. Does nothing if no scan is executing",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the webapp to connect to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deployment slot to use",
              args: { name: "slot" },
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
          name: "track",
          description:
            "Track status of scan by providing scan-id. You can track the status of the scan from [Starting, Success, Failed, TimeoutFailure, Executing]",
          options: [
            {
              name: "--scan-id",
              description: "Unique scan id",
              args: { name: "scan-id" },
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
              description: "Name of the webapp to connect to",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description: "Name of the deployment slot to use",
              args: { name: "slot" },
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
      name: "traffic-routing",
      description: "Manage traffic routing for web apps",
      subcommands: [
        {
          name: "clear",
          description:
            "Clear the routing rules and send all traffic to production",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
          description: "Configure routing traffic to deployment slots",
          options: [
            {
              name: ["--distribution", "-d"],
              description:
                "Space-separated slot routings in a format of <slot-name>=<percentage> e.g. staging=50. Unused traffic percentage will go to the Production slot",
              args: { name: "distribution" },
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
          description:
            "Display the current distribution of traffic across slots",
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
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
      name: "vnet-integration",
      description:
        "Methods that list, add, and remove virtual network integrations from a webapp",
      subcommands: [
        {
          name: "add",
          description: "Add a regional virtual network integration to a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: "--subnet",
              description: "The name or resource ID of the subnet",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: "--vnet",
              description: "The name or resource ID of the Vnet",
              args: { name: "vnet" },
              isRequired: true,
            },
            {
              name: "--skip-delegation-check",
              description:
                "Skip check if you do not have permission or the VNet is in another subscription",
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List the virtual network integrations on a webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a regional virtual network integration from webapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "webjob",
      description: "Allows management operations for webjobs on a web app",
      subcommands: [
        {
          name: "continuous",
          description:
            "Allows management operations of continuous webjobs on a web app",
          subcommands: [
            {
              name: "list",
              description: "List all continuous webjobs on a selected web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "remove",
              description: "Delete a specific continuous webjob",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description:
                "Start a specific continuous webjob on a selected web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "stop",
              description: "Stop a specific continuous webjob",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "triggered",
          description:
            "Allows management operations of triggered webjobs on a web app",
          subcommands: [
            {
              name: "list",
              description: "List all triggered webjobs hosted on a web app",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "log",
              description:
                "Get history of a specific triggered webjob hosted on a web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                "Delete a specific triggered webjob hosted on a web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "run",
              description:
                "Run a specific triggered webjob hosted on a web app",
              options: [
                {
                  name: ["--webjob-name", "-w"],
                  description: "The name of the webjob",
                  args: { name: "webjob-name" },
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
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
  ],
};

export default completion;
