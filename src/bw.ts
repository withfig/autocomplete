const completionSpec: Fig.Spec = {
  name: "bw",
  description: "Bitwarden Secrets Manager CLI Tool",
  subcommands: [
    {
      name: "login",
      description:
        "Initiates a prompt for Email, Password and (if set), 2FA code",
      subcommands: [
        {
          name: "--help",
          description: "Displays help on the particular command'",
        },
        {
          name: "--method",
          description: "Prompts for selection of login method",
        },
        { name: "--apikey", description: "Logs in using API Key" },
      ],
    },
    {
      name: "unlock",
      description: "Unlocks the Bitwarden Vault",
      options: [
        {
          name: "--passwordenv",
          description:
            "Looks for the password in the specified environmental variable file",
        },
        {
          name: "--passwordfile",
          description:
            "Looks for the password in the specified file.  Master Password must be the first line",
        },
      ],
    },
    {
      name: "create",
      description: "Creates a new object in your Vault",
      subcommands: [
        {
          name: "item",
          description: "Creates item",
        },
        {
          name: "attachment",
          description: "Attaches a file to an existing item",
        },
        {
          name: "folder",
          description: "Creates a new folder (personal Vaults only)",
        },
        {
          name: "org-collection",
          description: "Creates a new Collection (org Vaults only)",
        },
      ],
    },
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
    {
      name: "edit",
      description: "Edits an object in your Vault",
    },
    {
      name: "list",
      description: "Retrieves an array of objects from your Vault",
    },
    {
      name: "delete",
      description: "Deletes an object from your Vault",
    },
    {
      name: "restore",
      description: "Restores a deleted object from your bin",
    },
    {
      name: "send",
      description: "Creates a Bitwarden Send for ephemeral sharing",
    },
    {
      name: "receive",
      description: "Accesses a Bitwarden Send object",
    },
    {
      name: "move",
      description: "Transfers a Vault item to an Organisation",
    },
    {
      name: "confirm",
      description: "Confirms invited members to your Organisation",
    },
    {
      name: "config",
      description: "Specifies settings for the Bitwarden CLI",
    },
    {
      name: "sync",
      description: "Downloads your encrypted Vault from the BW Server",
      options: [
        {
          name: "--last",
          description:
            "Returns only the timestamp of the last time a sync was performed",
        },
      ],
    },
    {
      name: "encode",
      description: "Encodes stdin in Base 64",
    },
    {
      name: "import",
      description: "Imports data from a file in a supported format",
      options: [
        {
          name: "format",
          description: "The format used to encode the target file",
          args: {
            name: "format",
            suggestions: ["json", "csv", "encoded json"],
          },
        },
        {
          name: "path",
          description: "Path to the target file",
          args: {
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "export",
      description: "Exports Vault data as .json, .csv or encrypted .json",
    },
    {
      name: "generate",
      description: "Generates a strong password or passphrase",
    },
    {
      name: "update",
      description: "Checks for updated CLI version",
    },
    {
      name: "status",
      description: "Returns status information about the Bitwarden CLI",
    },
    {
      name: "serve",
      description: "Stars a local express web server",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Displays the Bitwarden CLI man page",
    },
  ],
  // Only uncomment if bw takes an argument
  // args: {}
};
export default completionSpec;
