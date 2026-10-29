const completionSpec: Fig.Spec = {
  name: "bw",
  description:
    "Bitwarden CLI: access and manage a Bitwarden password vault from the terminal",
  subcommands: [
    {
      name: "login",
      description:
        "Log in to a Bitwarden user account and print the session key",
      options: [
        {
          name: "--apikey",
          description: "Log in using an API key",
        },
        {
          name: "--sso",
          description: "Log in using single sign-on",
        },
        {
          name: "--passwordenv",
          description: "Environment variable storing the master password",
          args: { name: "var" },
        },
        {
          name: "--passwordfile",
          description: "File storing the master password",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the current user account",
    },
    {
      name: "lock",
      description: "Lock the vault and destroy the active session key",
    },
    {
      name: "unlock",
      description: "Unlock the vault and return a new session key",
      options: [
        {
          name: "--passwordenv",
          description: "Environment variable storing the master password",
          args: { name: "var" },
        },
        {
          name: "--passwordfile",
          description: "File storing the master password",
          args: { name: "file", template: "filepaths" },
        },
      ],
    },
    {
      name: "sync",
      description: "Pull the latest vault data from the server",
      options: [
        {
          name: "--last",
          description: "Print the timestamp of the last sync",
        },
      ],
    },
    {
      name: "list",
      description: "List objects of the given type",
      args: {
        name: "object",
        suggestions: [
          "items",
          "folders",
          "collections",
          "org-collections",
          "org-members",
          "organizations",
        ],
      },
      options: [
        {
          name: "--search",
          description: "Search by term",
          args: { name: "term" },
        },
        {
          name: "--folderid",
          description: "Filter items by folder id",
          args: { name: "id" },
        },
        {
          name: "--collectionid",
          description: "Filter items by collection id",
          args: { name: "id" },
        },
        {
          name: "--organizationid",
          description: "Filter by organization id",
          args: { name: "id" },
        },
        {
          name: "--trash",
          description: "List items in the trash",
        },
      ],
    },
    {
      name: "get",
      description: "Get a single object by id or search term",
      args: [
        {
          name: "object",
          suggestions: [
            "item",
            "username",
            "password",
            "totp",
            "uri",
            "note",
            "exposed",
            "attachment",
            "folder",
            "collection",
            "org-collection",
            "organization",
            "template",
            "fingerprint",
            "send",
          ],
        },
        { name: "id or search term" },
      ],
    },
    {
      name: "create",
      description:
        "Create an object from Base64-encoded JSON passed on standard input",
      args: {
        name: "object",
        suggestions: ["item", "folder", "org-collection", "attachment"],
      },
      options: [
        {
          name: "--file",
          description: "Path of the file to attach (for attachment)",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--itemid",
          description: "Item id to attach the file to",
          args: { name: "id" },
        },
        {
          name: "--organizationid",
          description: "Organization id for the object",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "edit",
      description: "Replace an object's contents from Base64-encoded JSON",
      args: [
        {
          name: "object",
          suggestions: ["item", "folder", "org-collection"],
        },
        { name: "id" },
      ],
    },
    {
      name: "delete",
      description: "Move an object to the trash (or remove it permanently)",
      args: [
        {
          name: "object",
          suggestions: ["item", "attachment", "folder", "org-collection"],
        },
        { name: "id" },
      ],
      options: [
        {
          name: "--permanent",
          description: "Delete permanently instead of trashing",
        },
        {
          name: "--itemid",
          description: "Item id of the attachment to delete",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "restore",
      description: "Restore an item from the trash",
      args: [
        { name: "object", suggestions: ["item", "folder"] },
        { name: "id" },
      ],
    },
    {
      name: "move",
      description: "Move a vault item to an organization",
      args: [{ name: "id" }, { name: "organization id" }],
    },
    {
      name: "confirm",
      description: "Confirm an organization member that has been accepted",
      args: [{ name: "object", suggestions: ["org-member"] }, { name: "id" }],
      options: [
        {
          name: "--organizationid",
          description: "Organization id",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "device-approval",
      description:
        "Manage admin device approval requests (non-open-source builds only)",
      subcommands: [
        {
          name: "list",
          description: "List pending device approval requests",
        },
        {
          name: "approve",
          description: "Approve a device request",
          args: { name: "request id" },
        },
        {
          name: "approve-all",
          description: "Approve all pending device requests",
        },
        {
          name: "deny",
          description: "Deny a device request",
          args: { name: "request id" },
        },
      ],
    },
    {
      name: "report",
      description: "Run a vault report",
      args: {
        name: "report",
        suggestions: ["password-health"],
      },
      options: [
        {
          name: "--organizationid",
          description: "Run the report for an organization",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "generate",
      description: "Generate a password or passphrase",
      options: [
        {
          name: "--passphrase",
          description: "Generate a passphrase instead of a password",
        },
        {
          name: "--length",
          description: "Password length (default 14)",
          args: { name: "n" },
        },
        {
          name: "--words",
          description: "Number of words in the passphrase",
          args: { name: "n" },
        },
        {
          name: "--lowercase",
          description: "Include lowercase characters",
        },
        {
          name: "--uppercase",
          description: "Include uppercase characters",
        },
        {
          name: "--number",
          description: "Include numeric characters",
        },
        {
          name: "--special",
          description: "Include special characters",
        },
      ],
    },
    {
      name: "encode",
      description: "Base64-encode standard input for piping into create/edit",
    },
    {
      name: "config",
      description: "Configure the CLI, e.g. point it at a self-hosted server",
      args: {
        name: "setting",
        suggestions: ["server", "db"],
      },
    },
    {
      name: "export",
      description: "Export vault data to a file",
      options: [
        {
          name: "--format",
          description: "Export format",
          args: {
            name: "format",
            suggestions: ["json", "csv", "encrypted_json", "zip"],
            default: "json",
          },
        },
        {
          name: "--output",
          description: "Output file path",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--password",
          description: "Password for encrypted_json exports",
          args: { name: "password" },
        },
        {
          name: "--organizationid",
          description: "Export an organization vault",
          args: { name: "id" },
        },
        {
          name: "--raw",
          description: "Print the export to stdout instead of a file",
        },
      ],
    },
    {
      name: "import",
      description: "Import vault data from another password manager",
      options: [
        {
          name: "--formats",
          description: "List the supported import formats",
        },
        {
          name: "--organizationid",
          description: "Import into an organization",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "send",
      description: "Create or manage ephemeral Sends",
      subcommands: [
        {
          name: "list",
          description: "List Sends",
        },
        {
          name: "get",
          description: "Get a Send by id or term",
          args: { name: "id" },
        },
        {
          name: "create",
          description: "Create a new Send",
        },
        {
          name: "edit",
          description: "Edit an existing Send",
          args: { name: "id" },
        },
        {
          name: "delete",
          description: "Delete a Send",
          args: { name: "id" },
        },
        {
          name: "remove-password",
          description: "Remove the password from a Send",
          args: { name: "id" },
        },
      ],
    },
    {
      name: "receive",
      description: "Access an existing Send from its URL or access token",
      args: { name: "url or access token" },
      options: [
        {
          name: "--password",
          description: "Password of the Send",
          args: { name: "password" },
        },
        {
          name: "--output",
          description: "Save the Send's file to the given path",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: "--raw",
          description: "Print the Send's text to stdout",
        },
      ],
    },
    {
      name: "serve",
      description: "Start a local REST API server for the CLI",
      options: [
        {
          name: "--port",
          description: "Port to listen on (default 8087)",
          args: { name: "port", default: "8087" },
        },
        {
          name: "--origin",
          description: "Allowed origin for CORS",
          args: { name: "origin" },
        },
      ],
    },
    {
      name: "status",
      description:
        "Show server URL, last sync, email, and vault status as JSON",
    },
    {
      name: "update",
      description: "Check whether a newer CLI version is available",
    },
    {
      name: "completion",
      description: "Print shell completion (ZSH)",
      options: [
        {
          name: "--shell",
          description: "Shell to emit completions for",
          args: { name: "shell", suggestions: ["zsh"] },
        },
      ],
    },
  ],
  options: [
    {
      name: "--session",
      description:
        "Session key (defaults to the BW_SESSION environment variable)",
      args: { name: "key" },
    },
    {
      name: "--nointeraction",
      description: "Never prompt for input",
    },
    {
      name: "--pretty",
      description: "Format JSON output with indentation",
    },
    {
      name: "--raw",
      description: "Return raw strings instead of descriptive messages",
    },
    {
      name: "--response",
      description: "Return a JSON-formatted response object",
    },
    {
      name: "--quiet",
      description: "Suppress non-essential output",
    },
    {
      name: ["-v", "--version"],
      description: "Print the CLI version",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
  ],
};

export default completionSpec;
