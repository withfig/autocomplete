import { deserialize } from "v8";

const completionSpec: Fig.Spec = {
  name: "lpass",
  description: "",
  subcommands: [
    {
      name: "login",
      description: "Logs in to LastPass",
      options: [
        {
          name: "--trust",
          description:
            "Subsequent logins will not require multifactor authentication",
        },
        {
          name: "--plaintext-key",
          description:
            "The decryption key will be saved to the hard disk in plaintext",
        },
        {
          name: ["--force", "-f"],
          description: "Not documented in the man page :(",
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
      ],
      args: {
        name: "USERNAME",
        description: "LastPass account email",
      },
    },
    {
      name: "logout",
      description: "Logs out of LastPass",
      options: [
        {
          name: "--force",
          description: "Will not prompt ask for confirmation",
        },
      ],
    },
    {
      name: "ls",
      description: "Lists names in groups in a tree structure",
      options: [
        {
          name: ["--long", "-l"],
          description: "Also list the last modification time",
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
        {
          name: "-m",
          description: "Show last modified time",
        },
        {
          name: "-u",
          description: "Show last used time",
        },
      ],
      args: {
        name: "GROUP",
        description: "Group to list",
        isOptional: true,
      },
    },
    {
      name: "passwd",
      description: "Change your LastPass password",
    },
    {
      name: "show",
      description: "Will display a password or selected field",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: ["--clip", "-c"],
          description: "Copies the text to the clipboard",
        },
        {
          name: ["--quiet", "-q"],
          description: "Not documented in the man page :(",
        },
        {
          name: ["--expand-multi", "-x"],
          description: "Shows information from all matching sites",
        },
        {
          name: ["--json", "-j"],
          description: "Generated json output instead of human-readable text",
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
            "--name",
            "--attachid",
          ],
        },
        {
          name: "--username",
          description: "Show just the username",
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
          description: "Show just the password",
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
          description: "Show just the URL",
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
          description: "Show just the notes",
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
          description: "Show just the field",
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
            description: "Show just this field",
          },
        },
        {
          name: "--id",
          description: "Show just the ID",
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
          description: "Show just the name",
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
          description: "Show just the attachment",
          exclusiveOn: [
            "--all",
            "--username",
            "--password",
            "--url",
            "--notes",
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
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
        {
          name: ["UNIQENAME", "UNIQUEID"],
          description: "Shows entry with this name or ID",
        },
      ],
    },
    {
      name: "mv",
      description: "Moves LastPass entry to a different group",
      options: [
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
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
      description: "Adds a new entry",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: "--non-interactive",
          description:
            "Will accept data until EOF or, unless the notes field is being edited, the first new line",
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
        {
          name: "--username",
          description: "Show just the username",
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
          description: "Show just the password",
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
          description: "Show just the URL",
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
          description: "Show just the notes",
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
          description: "Show just the field",
          exclusiveOn: [
            "--username",
            "--password",
            "--url",
            "--notes",
            "--note-type",
          ],
          args: {
            name: "FIELD",
            description: "Show just this field",
          },
        },
        {
          name: "--note-type",
          description: "Show just the field",
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
      description: "Edits a existing entry",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: "--non-interactive",
          description:
            "Will accept data until EOF or, unless the notes field is being edited, the first new line",
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
        {
          name: ["--name", "--username"],
          description: "Edit just the name (or username)",
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
          description: "Edit just the password",
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
          description: "Edit just the URL",
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
          description: "Edit just the notes",
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
          description: "Edit just the field",
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
      description: "Create a randomly generated password",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
        {
          name: ["--clip", "-c"],
          description: "Copies the text to the clipboard",
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
      description: "Duplicates existing password",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
      ],
      args: {
        name: "UNIQUENAME|UNIQUEID",
        description: "Unique name or unique ID of the password to duplicate",
      },
    },
    {
      name: "rm",
      description: "Removes existing password",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
      ],
      args: {
        name: "UNIQUENAME|UNIQUEID",
        description: "Unique name or unique ID of the password to remove",
      },
    },
    {
      name: "status",
      description: "Show the LastPass login status",
      options: [
        {
          name: ["--quiet", "-q"],
          description: "Displays no output and only sets return code",
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Syncs the local cache against the LastPass server",
      options: [
        {
          name: ["--background", "-b"],
          description: "Syncronization occurs in a daemonized process",
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
          },
        },
      ],
    },
    {
      name: "import",
      description: "Imports account information from an unencrypted CSV",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
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
      description: "Exports account information to an unencrypted CSV",
      options: [
        {
          name: "--sync",
          description:
            "Controls when the current operation involves a synchronization to the server",
          args: {
            name: "sync",
            suggestions: ["auto", "now", "no"],
          },
        },
        {
          name: "--color",
          description: "Controls colored output to the terminal",
          args: {
            name: "color",
            suggestions: ["auto", "never", "always"],
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
          description: "Adds LastPass users to a Shared Folders",
          options: [
            {
              name: "--read-only",
              description: "Controls read or write access",
              args: [
                {
                  name: "true",
                  description: "Grants read only access",
                },
                {
                  name: "false",
                  description: "Grants write access",
                },
              ],
            },
            {
              name: "--hidden",
              description: "Not documented in the man page :(",
              args: [
                {
                  name: "true",
                  description: "Hidden, whatever that means",
                },
                {
                  name: "false",
                  description: "Not hidden, whatever that means",
                },
              ],
            },
            {
              name: "--admin",
              description: "Not documented in the man page :(",
              args: [
                {
                  name: "true",
                  description: "Admin, whatever that means",
                },
                {
                  name: "false",
                  description: "Not admin, whatever that means",
                },
              ],
            },
          ],
          args: [
            {
              name: "SHARE",
              description: "LastPass entry to share",
            },
            {
              name: "USERNAME",
              description: "LastPass user to share with",
            },
          ],
        },
        {
          name: "usermod",
          description: "Modifies LastPass users on a Shared Folders",
          options: [
            {
              name: "--read-only",
              description: "Controls read or write access",
              args: [
                {
                  name: "true",
                  description: "Grants read only access",
                },
                {
                  name: "false",
                  description: "Grants write access",
                },
              ],
            },
            {
              name: "--hidden",
              description: "Not documented in the man page :(",
              args: [
                {
                  name: "true",
                  description: "Hidden, whatever that means",
                },
                {
                  name: "false",
                  description: "Not hidden, whatever that means",
                },
              ],
            },
            {
              name: "--admin",
              description: "Not documented in the man page :(",
              args: [
                {
                  name: "true",
                  description: "Admin, whatever that means",
                },
                {
                  name: "false",
                  description: "Not admin, whatever that means",
                },
              ],
            },
          ],
          args: [
            {
              name: "SHARE",
              description: "LastPass entry to modify",
            },
            {
              name: "USERNAME",
              description: "LastPass user's access to modify",
            },
          ],
        },
        {
          name: "userdel",
          description: "Remove LastPass user from Shared Folders",
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
          description: "Create a new LastPass Shared Folder",
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
              description: "LastPass Shared Folder to remove",
            },
            {
              name: "USERNAME",
              description: "LastPass user's access to manipulate",
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
      description: "Displays the help for lpass",
    },
    {
      name: "--version",
      description: "Displays the version of lpass",
    },
  ],
};
export default completionSpec;
