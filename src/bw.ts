const completionSpec: Fig.Spec = {
  name: "bw",
  description: "The best secrets manager",
  args: {
    name: "",
  },

  options: [
    {
      name: ["--help", "-h"],
      description: "Displays the man page",
    },
  ],

  subcommands: [
    {
      name: "login",
      description:
        "Initiates a prompt for Email, Password and (if set), 2FA code",
      subcommands: [
        {
          name: "--help",
          description: "Displays help on the particular command",
        },
        {
          name: "--method",
          description: "Prompts for selection of login method",
        },
        {
          name: "-- apikey",
          description: "Logs in using API Key",
        },
      ],
    },
    {
      name: "unlock",
      description: "Unlocks the Bitwarden Vault",

      /** Args array breaks script - commented out
    args: [ "email", "password" ],
    options: [ "--method", "--apikey", "--sso" ], 
*/

      subcommands: [
        {
          name: "--passwordenv",
          description: "Displays help on the particular command",
        },
        {
          name: "--passwordfile",
          description:
            "Looks for specified file, which must have master password as first line",
        },
      ],
    },
    {
      name: "create",
      description: "Creates an item in the Bitwarden Vault",
      subcommands: [
        {
          name: "item",
          description: "Creates item",
        },
        {
          name: "attachment",
          description: "Creates attachment",
        },
        {
          name: "folder",
          description: "Creates folder (personal Vaults only)",
        },
        {
          name: "org-collection",
          description: "Creates Collection (org Vaults only)",
        },
      ],
    },

    /** args array breaks script - commented out
    { 
    name: "create attachment", 
    description: "Adds an attachment to an existing Vault Item", 
    args: [ 
      --file, --itemid 
      ] 
    }, 
    */

    {
      name: "get",
      description: "Retrieves a single object from your Vault",
      subcommands: [
        {
          name: "item",
          description: "Retrieves a Vault Item",
        },
        {
          name: "username",
          description: "Retrieves a Vault Username Object",
        },
        {
          name: "password",
          description: "Retrieves a Vault Password Object",
        },
        {
          name: "uri",
          description: "Retrieves a Vault URI Object",
        },
        {
          name: "totp",
          description: "Retrives a Vault TOTP Object",
        },
        {
          name: "exposed",
          description: "Retrieves a Vault Exposure Report Object",
        },
        {
          name: "attachment",
          description: "Retrieves a Vault Attachment Object",
        },
        {
          name: "folder",
          description: "Retrieves a Vault Folder Object",
        },
        {
          name: "collection",
          description: "Retrieves a Vault Collection Object",
        },
        {
          name: "organization",
          description: "Retrieves a Vault Organisation Object",
        },
        {
          name: "org-collection",
          description: "Retrieves an Organisational Vault Collection Object",
        },
        {
          name: "template",
          description: "Retrieves a Bitwarden Template Object",
        },
        {
          name: "fingerprint",
          description: "Retrieves a Fingerprint Object",
        },
      ],
    },
  ],
};

export default completionSpec;
