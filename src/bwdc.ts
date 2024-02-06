const bwLogo32x32 = "https://bitwarden.com/images/icon_32x32.png";
const completionSpec: Fig.Spec = {
  name: "bwdc",
  description: "Bitwarden Directory Connector",
  subcommands: [
    {
      name: "login",
      icon: bwLogo32x32,
      description: "Log in to Directory Connector",
      args: [
        {
          name: "client_id",
          description: "Organisation API client_id",
          isOptional: true,
        },
        {
          name: "client_secret",
          description: "Organisation API client_secret",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--help",
        },
      ],
    },
    {
      name: "logout",
      icon: bwLogo32x32,
      description: "Log out of Directory Connector",

      options: [
        {
          name: "--help",
        },
      ],
    },
    {
      name: "test",
      icon: bwLogo32x32,
      description:
        "Prints a JSON formatted array of groups and users that would be synced to your Bitwarden organization",

      options: [
        {
          name: "--last",
          description: "Test only the changes since the last successful sync",
        },
        {
          name: "--help",
        },
      ],
    },
    {
      name: "sync",
      icon: bwLogo32x32,
      description:
        "Run a live sync operation and push data to your Bitwarden organization",

      options: [
        {
          name: "--help",
        },
      ],
    },
    {
      name: "last-sync",
      icon: bwLogo32x32,
      description:
        "The last-sync command returns an ISO 8601 timestamp for the last sync operation that was performed for users or groups. You must specify either users or groups as an <object> to run the command against- Returns an empty response if no sync has been performed for the given object",
      args: {
        name: "Object",
        description:
          "You must specify either users or groups as an <object> to run the command against",
      },

      options: [
        {
          name: "--help",
        },
      ],
    },

    {
      name: "config",
      icon: bwLogo32x32,
      description:
        "The config command allows you to specify your directory settings",
      args: [
        {
          name: "setting",
          description: "Specify the setting to configure",
        },
        {
          name: "value",
          description: "Specify the value assigned to the setting",
        },
      ],

      subcommands: [
        {
          name: "server",
          description:
            "URL of your self-hosted installation (e.g. https://my.url.com) or https://vault.bitwarden.eu",
          args: {
            name: "server-url",
            description: "Specify the server URL",
          },
        },
        {
          name: "directory",
          description: "Type of directory to use",
          args: {
            name: "directory-type",
            description: `Active Directory/LDAP : 0
Azure Active Directory : 1
Google Workspace/GSuite : 2
Okta : 3
OneLogin : 4`,
            suggestions: [
              { name: "0", description: "Active Directory/LDAP" },
              { name: "1", description: "Azure Active Directory" },
              { name: "2", description: "Google Workspace/GSuite" },
              { name: "3", description: "Okta" },
              { name: "4", description: "OneLogin" },
            ],
          },
        },
        {
          name: "ldap.password",
          description: "Password for connection to the LDAP server",
          args: {
            name: "password",
            description: "Specify the password",
          },
        },
        {
          name: "azure.key",
          description: "Azure AD secret key",
          args: {
            name: "key",
            description: "Specify the AD secret key",
          },
        },
        {
          name: "gsuite.key",
          description: "Google Workspace/GSuite private key",
          args: {
            name: "key",
            description: "Specify the Google Workspace/GSuite private key",
          },
        },
        {
          name: "okta.token",
          description: "Okta token",
          args: {
            name: "token",
            description: "Specify the Okta token",
          },
        },
        {
          name: "onelogin.secret",
          description: "OneLogin client secret",
          args: {
            name: "secret",
            description: "Specify the OneLogin client secret",
          },
        },
      ],
      options: [
        {
          name: "--help",
        },
      ],
    },
    {
      name: "data-file",
      icon: bwLogo32x32,
      description: "Path to data.json database file",

      options: [
        {
          name: "--help",
        },
      ],
    },
    {
      name: "clear-cache",
      icon: bwLogo32x32,
      description:
        "The clear-cache command allows you to clear cached data that the application stores while performing sync operations",
      options: [
        {
          name: "--help",
        },
      ],
    },
    {
      name: "update",
      icon: bwLogo32x32,
      description:
        "The update command allows you to check if your Directory Connector CLI is up-to-date",
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for bwdc",
    },
  ],
  // Only uncomment if bwdc takes an argument
  // args: {}
};
export default completionSpec;
