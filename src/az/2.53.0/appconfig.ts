const completion: Fig.Spec = {
  name: "appconfig",
  description: "Manage App Configurations",
  subcommands: [
    {
      name: "create",
      description: "Create an App Configuration",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
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
          name: "--assign-identity",
          description:
            'Space-separated list of managed identities to be assigned. Use "[system]" to refer to system-assigned managed identity or a resource ID to refer to user-assigned managed identity. If this argument is provided without any value, system-assigned managed identity will be assigned by default. If this argument is not provided, no managed identities will be assigned to this App Configuration store',
          args: { name: "assign-identity" },
        },
        {
          name: "--disable-local-auth",
          description:
            "Disable all authentication methods other than AAD authentication",
          args: { name: "disable-local-auth", suggestions: ["false", "true"] },
        },
        {
          name: ["--enable-public-network", "-e"],
          description:
            "When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store",
          args: {
            name: "enable-public-network",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--enable-purge-protection", "-p"],
          description:
            "Property specifying whether protection against purge is enabled for this App Configuration. Setting this property to true activates protection against purge for this App Configuration and its contents. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--retention-days",
          description:
            "Number of days to retain the soft delete enabled App Configuration after deleting. Must be a positive integer between 0 and 7",
          args: { name: "retention-days" },
        },
        {
          name: "--sku",
          description: "The sku of App Configuration",
          args: { name: "sku", suggestions: ["Free", "Standard"] },
        },
        {
          name: "--tags",
          description: "Space-separated tags: key[=value] [key[=value] ...]",
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an App Configuration",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
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
        "Lists all App Configurations under the current subscription",
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
      name: "list-deleted",
      description: "List all deleted, but not yet purged App Configurations",
    },
    {
      name: "purge",
      description:
        "Permanently delete an App Configuration. Aka 'purge' the deleted App Configuration",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description:
            "Location of the deleted App Configuration. Can be viewed using command az appconfig show-deleted",
          args: { name: "location" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "recover",
      description:
        "Recover a previously deleted, but not yet purged App Configuration",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description:
            "Location of the deleted App Configuration. Can be viewed using command az appconfig show-deleted",
          args: { name: "location" },
        },
        {
          name: ["--resource-group", "-g"],
          description: "Resource group of the deleted App Configuration",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "show",
      description: "Show properties of an App Configuration",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
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
      name: "show-deleted",
      description:
        "Show properties of a deleted, but not yet purged App Configuration",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description: "Location of the deleted App Configuration",
          args: { name: "location" },
        },
      ],
    },
    {
      name: "update",
      description: "Update an App Configuration",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--disable-local-auth",
          description:
            "Disable all authentication methods other than AAD authentication",
          args: { name: "disable-local-auth", suggestions: ["false", "true"] },
        },
        {
          name: ["--enable-public-network", "-e"],
          description:
            "When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store",
          args: {
            name: "enable-public-network",
            suggestions: ["false", "true"],
          },
        },
        {
          name: ["--enable-purge-protection", "-p"],
          description:
            "Property specifying whether protection against purge is enabled for this App Configuration. Setting this property to true activates protection against purge for this App Configuration and its contents. Enabling this functionality is irreversible",
          args: {
            name: "enable-purge-protection",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--encryption-key-name",
          description: "The name of the KeyVault key",
          args: { name: "encryption-key-name" },
        },
        {
          name: "--encryption-key-vault",
          description: "The URI of the KeyVault",
          args: { name: "encryption-key-vault" },
        },
        {
          name: "--encryption-key-version",
          description:
            "The version of the KeyVault key. Use the latest version by default",
          args: { name: "encryption-key-version" },
        },
        {
          name: "--identity-client-id",
          description:
            "Client ID of the managed identity with wrap and unwrap access to encryption key. Use system-assigned managed identity by default",
          args: { name: "identity-client-id" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--sku",
          description: "The sku of App Configuration",
          args: { name: "sku", suggestions: ["Free", "Standard"] },
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
      name: "credential",
      description: "Manage credentials for App Configurations",
      subcommands: [
        {
          name: "list",
          description: "List access keys of an App Configuration",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
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
          name: "regenerate",
          description: "Regenerate an access key for an App Configuration",
          options: [
            {
              name: "--id",
              description:
                "Id of the key to be regenerated. Can be found using az appconfig credential list command",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "feature",
      description: "Manage feature flags stored in an App Configuration",
      subcommands: [
        {
          name: "delete",
          description: "Delete feature flag",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be deleted. If the feature flag key is different from the default key, provide the --key argument instead. Support star sign as filters, for instance * means all features and abc* means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Support star sign as filters, for instance ".appconfig.featureflag/" means all features and ".appconfig.featureflag/abc" means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, delete the feature flag with null label by default. Support star sign as filters, for instance * means all labels and abc* means labels with abc as prefix",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable a feature flag to turn it OFF for use",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be disabled. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, disable the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable a feature flag to turn it ON for use",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be enabled. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, enable the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List feature flags",
          options: [
            { name: "--all", description: "List all feature flags" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be listed. If the feature flag key is different from the default key, provide the --key argument instead. Support star sign as filters, for instance * means all features and abc* means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma",
              args: { name: "feature" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Feature Flags",
              args: {
                name: "fields",
                suggestions: [
                  "conditions",
                  "description",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "name",
                  "state",
                ],
              },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Support star sign as filters, for instance ".appconfig.featureflag/" means all features and ".appconfig.featureflag/abc" means features with abc as prefix. Comma separated features are not supported. Please provide escaped string if your feature name contains comma',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance * means all labels and abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "lock",
          description: "Lock a feature flag to prohibit write operations",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be locked. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, lock the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set",
          description: "Set a feature flag",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--description",
              description: "Description of the feature flag to be set",
              args: { name: "description" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature flag to be set. Feature name cannot contain the '%' character",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Show all attributes of a feature flag",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature flag to be retrieved. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Feature Flags",
              args: {
                name: "fields",
                suggestions: [
                  "conditions",
                  "description",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "name",
                  "state",
                ],
              },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, show entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock a feature to gain write operations",
          options: [
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--feature",
              description:
                "Name of the feature to be unlocked. If the feature flag key is different from the default key, provide the --key argument instead",
              args: { name: "feature" },
            },
            {
              name: "--key",
              description:
                'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, unlock the feature flag with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "filter",
          description:
            "Manage filters associated with feature flags stored in an App Configuration",
          subcommands: [
            {
              name: "add",
              description: "Add a filter to a feature flag",
              options: [
                {
                  name: "--filter-name",
                  description: "Name of the filter to be added",
                  args: { name: "filter-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: { name: "auth-mode", suggestions: ["key", "login"] },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature to which you want to add the filter. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--filter-parameters",
                  description:
                    "Space-separated filter parameters in 'name[=value]' format. The value must be an escaped JSON string",
                  args: { name: "filter-parameters" },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index in the list of filters where you want to insert the new filter. If no index is specified or index is invalid, filter will be added to the end of the list",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, add to the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a filter from a feature flag",
              options: [
                {
                  name: "--all",
                  description:
                    "Delete all filters associated with a feature flag",
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: { name: "auth-mode", suggestions: ["key", "login"] },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature from which you want to delete the filter. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--filter-name",
                  description: "Name of the filter to be deleted",
                  args: { name: "filter-name" },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index of the filter to be deleted in case there are multiple instances with same filter name",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, delete from the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all filters for a feature flag",
              options: [
                {
                  name: "--all",
                  description:
                    "List all filters associated with a feature flag",
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: { name: "auth-mode", suggestions: ["key", "login"] },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature whose filters you want to be displayed. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, display filters from the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
                {
                  name: ["--top", "-t"],
                  description:
                    "Maximum number of items to return. Must be a positive integer. Default to 100",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Show filters of a feature flag",
              options: [
                {
                  name: "--filter-name",
                  description: "Name of the filter to be displayed",
                  args: { name: "filter-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: { name: "auth-mode", suggestions: ["key", "login"] },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature which contains the filter. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index of the filter to be displayed in case there are multiple instances with same filter name",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, show the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a filter in a feature flag",
              options: [
                {
                  name: "--filter-name",
                  description: "Name of the filter to be updated",
                  args: { name: "filter-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-mode",
                  description:
                    'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
                  args: { name: "auth-mode", suggestions: ["key", "login"] },
                },
                {
                  name: "--connection-string",
                  description:
                    "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--endpoint",
                  description:
                    'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
                  args: { name: "endpoint" },
                },
                {
                  name: "--feature",
                  description:
                    "Name of the feature whose filter you want to update. If the feature flag key is different from the default key, provide the --key argument instead",
                  args: { name: "feature" },
                },
                {
                  name: "--filter-parameters",
                  description:
                    "Space-separated filter parameters in 'name[=value]' format. The value must be an escaped JSON string",
                  args: { name: "filter-parameters" },
                },
                {
                  name: "--index",
                  description:
                    "Zero-based index of the filter to be updated in case there are multiple instances with same filter name",
                  args: { name: "index" },
                },
                {
                  name: "--key",
                  description:
                    'Key of the feature flag. Key must start with the ".appconfig.featureflag/" prefix. Key cannot contain the "%" character. If both key and feature arguments are provided, only key will be used. Default key is the reserved prefix ".appconfig.featureflag/" + feature name',
                  args: { name: "key" },
                },
                {
                  name: "--label",
                  description:
                    "If no label specified, update the feature flag with null label by default",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
                  args: { name: "name" },
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
      name: "identity",
      description: "Managed identities for App Configurations",
      subcommands: [
        {
          name: "assign",
          description: "Update managed identities for an App Configuration",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--identities",
              description:
                "Accept system-assigned or user-assigned managed identities separated by spaces. Use '[system]' to refer to system-assigned managed identity or a resource ID to refer to user-assigned managed identity. If this argument is not provided or this argument is provided without any value, system-assigned managed identity will be used by default",
              args: { name: "identities" },
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
          name: "remove",
          description: "Remove managed identities for an App Configuration",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--identities",
              description:
                "Accept system-assigned or user-assigned managed identities separated by spaces. Use '[system]' to refer to system-assigned managed identity, '[all]' for all managed identities or a resource ID to refer user-assigned managed identity. If this argument is not provided or this argument is provided without any value, system-assigned managed identity will be removed by default",
              args: { name: "identities" },
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
          description: "Display managed identities for an App Configuration",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "kv",
      description: "Manage key-values stored in an App Configuration",
      subcommands: [
        {
          name: "delete",
          description: "Delete key-values",
          options: [
            {
              name: "--key",
              description:
                "Support star sign as filters, for instance * means all key and abc* means keys with abc as prefix",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, delete entry with null label. Support star sign as filters, for instance * means all label and abc* means labels with abc as prefix",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "export",
          description:
            "Export configurations to another place from your App Configuration",
          options: [
            {
              name: ["--destination", "-d"],
              description:
                "The destination of exporting. Note that exporting feature flags to appservice is not supported",
              args: {
                name: "destination",
                suggestions: ["appconfig", "appservice", "file"],
              },
              isRequired: true,
            },
            {
              name: "--appservice-account",
              description:
                "ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration. Required for AppService arguments",
              args: { name: "appservice-account" },
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--dest-auth-mode",
              description:
                'Auth mode for connecting to destination App Configuration. For details, refer to "--auth-mode" argument',
              args: { name: "dest-auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--dest-connection-string",
              description:
                "Combination of access key and endpoint of the destination store",
              args: { name: "dest-connection-string" },
            },
            {
              name: "--dest-endpoint",
              description:
                'If --dest-auth-mode is "login", provide endpoint URL of the destination App Configuration',
              args: { name: "dest-endpoint" },
            },
            {
              name: "--dest-label",
              description:
                "Exported KVs will be labeled with this destination label. If neither --dest-label nor --preserve-labels is specified, will assign null label",
              args: { name: "dest-label" },
            },
            {
              name: "--dest-name",
              description: "The name of the destination App Configuration",
              args: { name: "dest-name" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--export-as-reference", "-r"],
              description:
                "Export key-values as App Configuration references. For more information, see https://docs.microsoft.com/en-us/azure/app-service/app-service-configuration-references",
            },
            {
              name: "--format",
              description:
                "File format exporting to. Required for file arguments. Currently, feature flags are not supported in properties format",
              args: {
                name: "format",
                suggestions: ["json", "properties", "yaml"],
              },
            },
            {
              name: "--key",
              description:
                "If no key specified, return all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be exported",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "Only keys and feature flags with this label will be exported. If no label specified, export keys and feature flags with null label by default. When export destination is appconfig, or when export destination is file with appconfig/kvset profile, this argument supports asterisk and comma signs for label filtering, for instance, * means all labels, abc* means labels with abc as prefix, and abc,xyz means labels with abc or xyz",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--naming-convention",
              description:
                'Naming convention to be used for "Feature Management" section of file. Example: pascal = FeatureManagement, camel = featureManagement, underscore = feature_management, hyphen = feature-management',
              args: {
                name: "naming-convention",
                suggestions: ["camel", "hyphen", "pascal", "underscore"],
              },
            },
            {
              name: "--path",
              description:
                "Local configuration file path. Required for file arguments",
              args: { name: "path" },
            },
            {
              name: "--prefix",
              description:
                "Prefix to be trimmed from keys. Prefix will be ignored for feature flags",
              args: { name: "prefix" },
            },
            {
              name: "--preserve-labels",
              description:
                "Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --dest-label",
            },
            {
              name: "--profile",
              description:
                "Export profile to be used for exporting the key-values. Options 'depth', 'separator', 'naming-convention', 'prefix', 'dest-label' and, 'resolve-keyvault' are not supported when using 'appconfig/kvset' profile",
              args: {
                name: "profile",
                suggestions: ["appconfig/default", "appconfig/kvset"],
              },
            },
            {
              name: "--resolve-keyvault",
              description: "Resolve the content of key vault reference",
            },
            {
              name: "--separator",
              description:
                "Delimiter for flattening the key-value pairs to json or yaml file. Required for exporting hierarchical structure. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'",
              args: { name: "separator" },
            },
            {
              name: "--skip-features",
              description:
                "Export items excluding all feature flags. By default, all features with the specified label will be exported to file or appconfig. Not applicable for appservice",
            },
            {
              name: "--skip-keyvault",
              description:
                "Export items excluding all key vault references. By default, all key vault references with the specified label will be exported",
            },
            {
              name: "--snapshot",
              description:
                "Export all keys in a given snapshot of the App Configuration store. If no snapshot is specified, the keys currently in the store are exported based on the specified key and label filters",
              args: { name: "snapshot" },
            },
            { name: ["--yes", "-y"], description: "Do not prompt for preview" },
          ],
        },
        {
          name: "import",
          description:
            "Import configurations into your App Configuration from another place",
          options: [
            {
              name: ["--source", "-s"],
              description:
                "The source of importing. Note that importing feature flags from appservice is not supported",
              args: {
                name: "source",
                suggestions: ["appconfig", "appservice", "file"],
              },
              isRequired: true,
            },
            {
              name: "--appservice-account",
              description:
                "ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration. Required for AppService arguments",
              args: { name: "appservice-account" },
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--content-type",
              description: "Content type of all imported items",
              args: { name: "content-type" },
            },
            {
              name: "--depth",
              description:
                "Depth for flattening the json or yaml file to key-value pairs. Flatten to the deepest level by default if --separator is provided. Not applicable for property files or feature flags",
              args: { name: "depth" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--format",
              description:
                "Imported file format. Required for file arguments. Currently, feature flags are not supported in properties format",
              args: {
                name: "format",
                suggestions: ["json", "properties", "yaml"],
              },
            },
            {
              name: "--import-mode",
              description:
                'If import mode is "ignore-match", source key-values that already exist at the destination will not be overwritten. Import mode "all" writes all key-values to the destination regardless of whether they exist or not',
              args: {
                name: "import-mode",
                suggestions: ["all", "ignore-match"],
              },
            },
            {
              name: "--label",
              description:
                "Imported KVs and feature flags will be assigned with this label. If no label specified, will assign null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--path",
              description:
                "Local configuration file path. Required for file arguments",
              args: { name: "path" },
            },
            {
              name: "--prefix",
              description:
                "This prefix will be appended to the front of imported keys. Prefix will be ignored for feature flags",
              args: { name: "prefix" },
            },
            {
              name: "--preserve-labels",
              description:
                "Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --label",
            },
            {
              name: "--profile",
              description:
                "Import profile to be used for importing the key-values. Options 'depth', 'separator', 'content-type', 'label', 'skip-features' and, 'prefix' are not supported when using 'appconfig/kvset' profile",
              args: {
                name: "profile",
                suggestions: ["appconfig/default", "appconfig/kvset"],
              },
            },
            {
              name: "--separator",
              description:
                "Delimiter for flattening the json or yaml file to key-value pairs. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'",
              args: { name: "separator" },
            },
            {
              name: "--skip-features",
              description:
                "Import only key values and exclude all feature flags. By default, all feature flags will be imported from file or appconfig. Not applicable for appservice",
            },
            {
              name: "--src-auth-mode",
              description:
                'Auth mode for connecting to source App Configuration. For details, refer to "--auth-mode" argument',
              args: { name: "src-auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--src-connection-string",
              description:
                "Combination of access key and endpoint of the source store",
              args: { name: "src-connection-string" },
            },
            {
              name: "--src-endpoint",
              description:
                'If --src-auth-mode is "login", provide endpoint URL of the source App Configuration',
              args: { name: "src-endpoint" },
            },
            {
              name: "--src-key",
              description:
                "If no key specified, import all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be imported",
              args: { name: "src-key" },
            },
            {
              name: "--src-label",
              description:
                "Only keys with this label in source AppConfig will be imported. If no value specified, import keys with null label by default. Support star sign as filters, for instance * means all labels, abc* means labels with abc as prefix",
              args: { name: "src-label" },
            },
            {
              name: "--src-name",
              description: "The name of the source App Configuration",
              args: { name: "src-name" },
            },
            {
              name: "--src-snapshot",
              description:
                "Import all keys in a given snapshot of the source App Configuration store. If no snapshot is specified, the keys currently in the store are imported based on the specified key and label filters",
              args: { name: "src-snapshot" },
            },
            {
              name: "--strict",
              description:
                "Delete all other key-values in the store with specified prefix and label",
            },
            { name: ["--yes", "-y"], description: "Do not prompt for preview" },
          ],
        },
        {
          name: "list",
          description: "List key-values",
          options: [
            { name: "--all", description: "List all items" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default',
              args: { name: "datetime" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Space-separated customized output fields",
              args: {
                name: "fields",
                suggestions: [
                  "content_type",
                  "etag",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "tags",
                  "value",
                ],
              },
            },
            {
              name: "--key",
              description:
                "If no key specified, return all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--resolve-keyvault",
              description:
                "Resolve the content of key vault reference. This argument should NOT be specified along with --fields. Instead use --query for customized query",
            },
            {
              name: "--snapshot",
              description:
                "List all keys in a given snapshot of the App Configuration store. If no snapshot is specified, the keys currently in the store are listed",
              args: { name: "snapshot" },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "lock",
          description: "Lock a key-value to prohibit write operations",
          options: [
            {
              name: "--key",
              description: "Key to be locked",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, lock entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "restore",
          description: "Restore key-values",
          options: [
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default',
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--key",
              description:
                "If no key specified, restore all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, restore all key-value pairs with all labels. Support star sign as filters, for instance abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set",
          description: "Set a key-value",
          options: [
            {
              name: "--key",
              description:
                "Key to be set. Key cannot be a '.' or '..', or contain the '%' character",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--content-type",
              description: "Content type of the keyvalue to be set",
              args: { name: "content-type" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the key with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--value",
              description: "Value of the keyvalue to be set",
              args: { name: "value" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "set-keyvault",
          description: "Set a keyvault reference",
          options: [
            {
              name: "--key",
              description:
                "Key to be set. Key cannot be a '.' or '..', or contain the '%' character",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--secret-identifier",
              description:
                "ID of the Key Vault object. Can be found using 'az keyvault {collection} show' command, where collection is key, secret or certificate. To set reference to the latest version of your secret, remove version information from secret identifier",
              args: { name: "secret-identifier" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, set the key with null label by default",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Show all attributes of a key-value",
          options: [
            {
              name: "--key",
              description: "Key to be showed",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default',
              args: { name: "datetime" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, show entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock a key-value to gain write operations",
          options: [
            {
              name: "--key",
              description: "Key to be unlocked",
              args: { name: "key" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--label",
              description:
                "If no label specified, unlock entry with null label. Filtering is not supported",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
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
      name: "replica",
      description: "Manage replicas of an App Configuration",
      subcommands: [
        {
          name: "create",
          description: "Create a new replica of an App Configuration",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location at which to create the replica",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the replica of the App Configuration",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
          name: "delete",
          description: "Delete a replica of an App Configuration",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the replica of the App Configuration",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
          description: "List replicas of an App Configuration",
          options: [
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
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
          description: "Show details of a replica of an App Configuration",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the replica of the App Configuration",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--store-name", "-s"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "store-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "revision",
      description:
        "Manage revisions for key-values stored in an App Configuration",
      subcommands: [
        {
          name: "list",
          description: "Lists revision history of key-values",
          options: [
            { name: "--all", description: "List all items" },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--datetime",
              description:
                'Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default',
              args: { name: "datetime" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Space-separated customized output fields",
              args: {
                name: "fields",
                suggestions: [
                  "content_type",
                  "etag",
                  "key",
                  "label",
                  "last_modified",
                  "locked",
                  "tags",
                  "value",
                ],
              },
            },
            {
              name: "--key",
              description:
                "If no key specified, return all keys by default. Support star sign as filters, for instance abc* means keys with abc as prefix",
              args: { name: "key" },
            },
            {
              name: "--label",
              description:
                "If no label specified, list all labels. Support star sign as filters, for instance abc* means labels with abc as prefix. Use '\\0' for null label",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "snapshot",
      description:
        "Manage snapshots associated with an app configuration store",
      subcommands: [
        {
          name: "archive",
          description: "Archive a snapshot",
          options: [
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create an app configuration snapshot",
          options: [
            {
              name: "--filters",
              description:
                "Space-separated list of escaped JSON objects that represent the key and label filters used to build an App Configuration snapshot",
              args: { name: "filters" },
              isRequired: true,
            },
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--composition-type",
              description:
                "Composition type used in building App Configuration snapshots. If not specified, defaults to key",
              args: {
                name: "composition-type",
                suggestions: ["key", "key_label"],
              },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: "--retention-period",
              description:
                "Duration in seconds for which a snapshot can remain archived before expiry. A snapshot can be archived for a maximum of 7 days (604,800s) for free tier stores and 90 days (7,776,000s) for standard tier stores. If specified, retention period must be at least 1 hour (3600s)",
              args: { name: "retention-period" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "list",
          description: "List snapshots",
          options: [
            {
              name: "--all",
              description: "List all items",
              args: { name: "all" },
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Snapshots",
              args: {
                name: "fields",
                suggestions: [
                  "composition_type",
                  "created",
                  "etag",
                  "expires",
                  "filters",
                  "items_count",
                  "name",
                  "retention_period",
                  "size",
                  "status",
                  "tags",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
            {
              name: ["--snapshot-name", "-s"],
              description:
                "If no name specified, return all snapshots by default. Support star sign as filters, for instance abc* means snapshots with abc as prefix to the name",
              args: { name: "snapshot-name" },
            },
            {
              name: "--status",
              description:
                "Filter snapshots by their status. If no status specified, return all snapshots by default",
              args: {
                name: "status",
                suggestions: ["archived", "failed", "provisioning", "ready"],
              },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Must be a positive integer. Default to 100",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "recover",
          description: "Recover an archived snapshot",
          options: [
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show all attributes of an app configuration snapshot",
          options: [
            {
              name: ["--snapshot-name", "-s"],
              description: "Name of the App Configuration snapshot",
              args: { name: "snapshot-name" },
              isRequired: true,
            },
            {
              name: "--auth-mode",
              description:
                'This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using az configure --defaults appconfig_auth_mode=<auth_mode>. For more information, see https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac',
              args: { name: "auth-mode", suggestions: ["key", "login"] },
            },
            {
              name: "--connection-string",
              description:
                "Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using az configure --defaults appconfig_connection_string=<connection_string> or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--endpoint",
              description:
                'If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using az configure --defaults appconfig_endpoint=<endpoint>',
              args: { name: "endpoint" },
            },
            {
              name: "--fields",
              description: "Customize output fields for Snapshots",
              args: {
                name: "fields",
                suggestions: [
                  "composition_type",
                  "created",
                  "etag",
                  "expires",
                  "filters",
                  "items_count",
                  "name",
                  "retention_period",
                  "size",
                  "status",
                  "tags",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the App Configuration. You can configure the default name using az configure --defaults app_configuration_store=<name>",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
