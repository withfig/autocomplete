const completionSpec: Fig.Spec = {
  name: "dls",
  description: "Manage Data Lake Store accounts and filesystems",
  subcommands: [
    {
      name: "account",
      description: "Manage Data Lake Store accounts",
      subcommands: [
        { name: "create", description: "Creates a Data Lake Store account" },
        { name: "delete", description: "Delete a Data Lake Store account" },
        {
          name: "enable-key-vault",
          description:
            "Enable the use of Azure Key Vault for encryption of a Data Lake Store account",
        },
        {
          name: "firewall",
          description: "Manage Data Lake Store account firewall rules",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a firewall rule in a Data Lake Store account",
            },
            {
              name: "delete",
              description:
                "Deletes a firewall rule in a Data Lake Store account",
            },
            {
              name: "list",
              description: "Lists firewall rules in a Data Lake Store account",
            },
            {
              name: "show",
              description:
                "Get the details of a firewall rule in a Data Lake Store account",
            },
            {
              name: "update",
              description:
                "Updates a firewall rule in a Data Lake Store account",
            },
          ],
        },
        {
          name: "list",
          description: "Lists available Data Lake Store accounts",
        },
        {
          name: "network-rule",
          description: "Manage Data Lake Store account virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a virtual network rule in a Data Lake Store account",
            },
            {
              name: "delete",
              description:
                "Deletes a virtual network rule in a Data Lake Store account",
            },
            {
              name: "list",
              description:
                "Lists virtual network rules in a Data Lake Store account",
            },
            {
              name: "show",
              description:
                "Get the details of a virtual network rule in a Data Lake Store account",
            },
            {
              name: "update",
              description:
                "Updates a virtual network rule in a Data Lake Store account",
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a Data Lake Store account",
        },
        {
          name: "trusted-provider",
          description:
            "Manage Data Lake Store account trusted identity providers",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates the specified trusted identity provider",
            },
            {
              name: "delete",
              description:
                "Deletes the specified trusted identity provider from the specified Data Lake Store account",
            },
            {
              name: "list",
              description:
                "Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account",
            },
            {
              name: "show",
              description:
                "Gets the specified Data Lake Store trusted identity provider",
            },
            {
              name: "update",
              description: "Updates the specified trusted identity provider",
            },
          ],
        },
        { name: "update", description: "Updates a Data Lake Store account" },
      ],
    },
    {
      name: "fs",
      description: "Manage a Data Lake Store filesystem",
      subcommands: [
        {
          name: "access",
          description:
            "Manage Data Lake Store filesystem access and permissions",
          subcommands: [
            {
              name: "remove-all",
              description:
                "Remove the access control list for a file or folder",
            },
            {
              name: "remove-entry",
              description:
                "Remove entries for the access control list of a file or folder",
            },
            {
              name: "set",
              description:
                "Replace the existing access control list for a file or folder",
            },
            {
              name: "set-entry",
              description:
                "Update the access control list for a file or folder",
            },
            {
              name: "set-owner",
              description:
                "Set the owner information for a file or folder in a Data Lake Store account",
            },
            {
              name: "set-permission",
              description:
                "Set the permissions for a file or folder in a Data Lake Store account",
            },
            {
              name: "show",
              description: "Display the access control list (ACL)",
            },
          ],
        },
        {
          name: "append",
          description: "Append content to a file in a Data Lake Store account",
        },
        {
          name: "create",
          description: "Creates a file or folder in a Data Lake Store account",
        },
        {
          name: "delete",
          description: "Delete a file or folder in a Data Lake Store account",
        },
        {
          name: "download",
          description:
            "Download a file or folder from a Data Lake Store account to the local machine",
        },
        {
          name: "join",
          description: "Join files in a Data Lake Store account into one file",
        },
        {
          name: "list",
          description:
            "List the files and folders in a Data Lake Store account",
        },
        {
          name: "move",
          description: "Move a file or folder in a Data Lake Store account",
        },
        {
          name: "preview",
          description:
            "Preview the content of a file in a Data Lake Store account",
        },
        {
          name: "remove-expiry",
          description: "Remove the expiration time for a file",
        },
        {
          name: "set-expiry",
          description: "Set the expiration time for a file",
        },
        {
          name: "show",
          description:
            "Get file or folder information in a Data Lake Store account",
        },
        {
          name: "test",
          description:
            "Test for the existence of a file or folder in a Data Lake Store account",
        },
        {
          name: "upload",
          description: "Upload a file or folder to a Data Lake Store account",
        },
      ],
    },
  ],
};

export default completionSpec;
