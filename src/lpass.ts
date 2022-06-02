const completionSpec: Fig.Spec = {
  name: "lpass",
  description: "Command line interface for LastPass",
  subcommands: [
    {
      name: "login",
      description: "Log in to LastPass",
      options: [
        {
          name: "--trust",
          description:
            "Subsequent logins will not require multifactor authentication",
        },
        {
          name: "--plaintext-key",
          description: "Save decryption key to the hard disk in plaintext",
          args: {
            name: "--force",
            description: "Skip user confirmation",
            isOptional: true,
          },
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
      args: {
        name: "USERNAME",
        description: "LastPass account username (email address)",
      },
    },
    {
      name: "logout",
      description: "Log out of LastPass",
      options: [
        {
          name: "--force",
          description: "Skip user confirmation",
        },
      ],
    },
    {
      name: "ls",
      description: "List names in groups in a tree structure",
      options: [
        {
          name: "--color",
          description: "Control colored output to the terminal",
          requiresSeparator: true,
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: ["--long", "-l"],
          description: "Show the last modification time",
        },
        {
          name: "-m",
          description: "Show the last modified time",
        },
        {
          name: "-u",
          description: "Show the last used time",
        },
      ],
      args: {
        name: "GROUP",
        description: "Group of entries to list",
        isOptional: true,
      },
    },
    {
      name: "passwd",
      description: "Change LastPass password and reencrypt all entries",
    },
    {
      name: "show",
      description: "Show password or selected field",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: ["--clip", "-c"],
          description: "Copy to the clipboard",
        },
        {
          name: ["--quiet", "-q"],
          description: "Display no output and only sets return code",
        },
        {
          name: ["--expand-multi", "-x"],
          description: "Show information from all matching sites",
        },
        {
          name: ["--json", "-j"],
          description: "Generate json output instead of human-readable text",
        },
        {
          name: "--all",
          description: "Show all fields",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--notes",
            "--field",
            "--id",
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--username",
          description: "Show only the username",
          exclusiveOn: [
            "--all",
            "--password",
            "--url",
            "--notes",
            "--field",
            "--id",
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--password",
          description: "Show only the password",
          exclusiveOn: [
            "--all",
            "--username",
            "--url",
            "--notes",
            "--field",
            "--id",
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--url",
          description: "Show only the URL",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--notes",
            "--field",
            "--id",
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--notes",
          description: "Show only the notes",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--url",
            "--field",
            "--id",
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--field",
          description: "Show only the field",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--url",
            "--notes",
            "--id",
            "--name",
            "--attachid",
          ],
          args: {
            name: "FIELD",
            description: "Show only this field",
          },
        },
        {
          name: "--id",
          description: "Show only the ID",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--url",
            "--notes",
            "--field",
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--name",
          description: "Show only the name",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--url",
            "--notes",
            "--field",
            "--id",
            "--attachid",
          ],
        },
        {
          name: "--attach",
          description: "Show only the attachment",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--url",
            "--notes",
            "--field",
            "--id",
            "--name",
          ],
          args: {
            name: "ATTACHID",
            description: "Attachment ID",
          },
        },
        {
          name: ["--basic-regexp", "-G"],
          description:
            "Show sites matching case-insensitive regular expression",
          exclusiveOn: ["--fixed-strings", "-F"],
        },
        {
          name: ["--fixed-strings", "-F"],
          description: "Show sites matching this exact substring",
          exclusiveOn: ["--basic-regexp", "-G"],
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
      args: {
        name: "UNIQENAME|UNIQUEID",
        description: "Shows entry with this unique name or ID",
      },
    },
    {
      name: "mv",
      description: "Move LastPass entry to a different group",
      options: [
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
      args: [
        {
          name: "UNIQUENAME|UNIQUEID",
          description: "Unique name or ID to move",
        },
        {
          name: "GROUP",
          description: "Destination group",
        },
      ],
    },
    {
      name: "add",
      description: "Add a new entry",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--non-interactive",
          description:
            "Accept data until EOF or, unless the notes field is being edited, the first new line",
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--username",
          description: "Add only the username",
          exclusiveOn: [
            "--password",
            "--url",
            "--notes",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--password",
          description: "Add only the password",
          exclusiveOn: [
            "--username",
            "--url",
            "--notes",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--url",
          description: "Add only the URL",
          exclusiveOn: [
            "--username",
            "--password",
            "--notes",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--notes",
          description: "Add only the notes",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--field",
          description: "Add only the field",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--notes",
            "--note-type",
          ],
          args: {
            name: "FIELD",
            description: "Add only this field",
          },
        },
        {
          name: "--note-type",
          description: "Add only the note",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--notes",
            "--field",
          ],
          args: {
            name: "NOTETYPE",
            description: "Type of note to add",
            suggestions: [
              "amex",
              "bank",
              "credit",
              "database",
              "drivers_license",
              "email",
              "health_insurance",
              "im",
              "mastercard",
              "membership",
              "passport",
              "server",
              "software_license",
              "ssh_key",
              "ssn",
              "visa",
              "wifi",
            ],
          },
        },
      ],
      args: {
        name: "NAME|UNIQUEID",
        description: "Name or unique ID of the entry to add",
      },
    },
    {
      name: "edit",
      description: "Edit existing entry",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--non-interactive",
          description:
            "Accept data until EOF or, unless the notes field is being edited, the first new line",
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: ["--name", "--username"],
          description: "Edit only the name (or username)",
          exclusiveOn: [
            "--password",
            "--url",
            "--notes",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--password",
          description: "Edit only the password",
          exclusiveOn: [
            "--username",
            "--url",
            "--notes",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--url",
          description: "Edit only the URL",
          exclusiveOn: [
            "--username",
            "--password",
            "--notes",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--notes",
          description: "Edit only the notes",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--field",
            "--note-type",
          ],
        },
        {
          name: "--field",
          description: "Edit only the field",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--notes",
            "--note-type",
          ],
          args: {
            name: "FIELD",
            description: "Edit just this field",
          },
        },
      ],
      args: {
        name: "NAME|UNIQUEID",
        description: "Name or unique ID of the entry to edit",
      },
    },
    {
      name: "generate",
      description: "Create randomly generated password",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: ["--clip", "-c"],
          description: "Copy the text to the clipboard",
        },
        {
          name: "--username",
          description: "Generate password for this username",
          args: {
            name: "USERNAME",
            description: "Username to generate the password for",
          },
        },
        {
          name: "--url",
          description: "Generate password for this URL",
          args: {
            name: "URL",
            description: "URL to generate the password for",
          },
        },
        {
          name: "--no-symbols",
          description: "Generate password without symbols",
        },
      ],
      args: [
        {
          name: "NAME|UNIQUEID",
          description:
            "Name or unique ID of the entry to generate the password for",
        },
        {
          name: "LENGTH",
          description: "Length of the password to create",
        },
      ],
    },
    {
      name: "duplicate",
      description: "Duplicate existing entry",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
      args: {
        name: "UNIQUENAME|UNIQUEID",
        description: "Unique name or unique ID of the entry to duplicate",
      },
    },
    {
      name: "rm",
      description: "Removes existing entry",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
      args: {
        name: "UNIQUENAME|UNIQUEID",
        description: "Unique name or unique ID of the entry to remove",
      },
    },
    {
      name: "status",
      description: "Show the LastPass login status",
      options: [
        {
          name: ["--quiet", "-q"],
          description: "Display no output and only sets return code",
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Sync the local cache against the LastPass server",
      options: [
        {
          name: ["--background", "-b"],
          description: "Syncronization occurs in a daemonized process",
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
      ],
    },
    {
      name: "import",
      description: "Import account information from an unencrypted CSV",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--keep-dupes",
          description: "Keeps any duplicate entries",
        },
      ],
      args: {
        name: "FILENAME",
        description: "CSV filename to import from",
      },
    },
    {
      name: "export",
      description: "Export account information to an unencrypted CSV",
      options: [
        {
          name: "--sync",
          description: "When the current operation syncs to server",
          requiresSeparator: true,
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--color",
          description: "Control colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
            isOptional: true,
            default: "auto",
          },
        },
        {
          name: "--fields",
          description:
            "Comma-separated subset of: id, url, username, password, extra, name, fav, id, grouping, group, fullname, last_touch, last_modified_gmt, attachpresent",
          args: {
            name: "FIELDLIST",
            suggestions: [
              "id,url,username,password,extra,name,fav,id,grouping,group,fullname,last_touch,last_modified_gmt,attachpresent",
            ],
          },
        },
      ],
      args: {
        name: "FILENAME",
        description: "CSV filename to export to",
      },
    },
    {
      name: "share",
      description: "LastPass Sharing Center functionality",
      subcommands: [
        {
          name: "userls",
          description:
            "List the LastPass users which have access to the Shared Folders",
        },
        {
          name: "useradd",
          description: "Add user to Shared Folders",
          options: [
            {
              name: "--read-only",
              description: "Control read or write access",
              args: [
                {
                  name: "true",
                  description: "Grant read only access",
                },
                {
                  name: "false",
                  description: "Grant write access",
                },
              ],
            },
            {
              name: "--hidden",
              description: "Share user view permission",
              args: [
                {
                  name: "true",
                  description: "User can only view entry",
                },
                {
                  name: "false",
                  description: "User can view entry and secrets",
                },
              ],
            },
            {
              name: "--admin",
              description: "Share user administer permission",
              args: [
                {
                  name: "true",
                  description: "User can administer entry",
                },
                {
                  name: "false",
                  description: "User cannot administer entry",
                },
              ],
            },
          ],
          args: [
            {
              name: "SHARE",
              description: "Entry to share",
            },
            {
              name: "USERNAME",
              description: "User to share entry with",
            },
          ],
        },
        {
          name: "usermod",
          description: "Modify user on Shared Folders",
          options: [
            {
              name: "--read-only",
              description: "Control read or write access",
              args: [
                {
                  name: "true",
                  description: "Grant read only access",
                },
                {
                  name: "false",
                  description: "Grant write access",
                },
              ],
            },
            {
              name: "--hidden",
              description: "Share user view permission",
              args: [
                {
                  name: "true",
                  description: "User can only view entry",
                },
                {
                  name: "false",
                  description: "User can view entry and secrets",
                },
              ],
            },
            {
              name: "--admin",
              description: "Share user administer permission",
              args: [
                {
                  name: "true",
                  description: "User can administer entry",
                },
                {
                  name: "false",
                  description: "User cannot administer entry",
                },
              ],
            },
          ],
          args: [
            {
              name: "SHARE",
              description: "Entry to modify",
            },
            {
              name: "USERNAME",
              description: "User access to modify",
            },
          ],
        },
        {
          name: "userdel",
          description: "Remove user from Shared Folders",
          args: [
            {
              name: "SHARE",
              description: "LastPass entry to remove user from",
            },
            {
              name: "USERNAME",
              description: "LastPass user to remove",
            },
          ],
        },
        {
          name: "create",
          description: "Create new LastPass Shared Folder",
          args: {
            name: "SHARE",
            description: "LastPass Shared Folder to create",
          },
        },
        {
          name: "rm",
          description: "LastPass Shared Folder to remove",
          args: {
            name: "SHARE",
            description: "LastPass Shared Folder to remove",
          },
        },
        {
          name: "limit",
          description: "Manipulate LastPass Shared Folder access",
          options: [
            {
              name: ["--deny", "--allow"],
              description: "Deny or allow access",
            },
            {
              name: ["--add", "--rm", "--clear"],
              description: "Add, remove, or clear acces",
            },
          ],
          args: [
            {
              name: "SHARE",
              description: "Shared Folder to remove",
            },
            {
              name: "USERNAME",
              description: "User access to manipulate",
            },
            {
              name: "sites",
              description: "LastPass sites to manipulate",
              isOptional: true,
            },
          ],
        },
      ],
      args: {
        name: "SHARE",
        description: "LastPass Shared folder to query",
      },
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Display the help for lpass",
    },
    {
      name: "--version",
      description: "Display the version of lpass",
    },
  ],
};
export default completionSpec;
