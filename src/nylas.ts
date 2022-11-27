/**
 * Nylas CLI
 * Fig Autocomplete by "Blag aka Alvaro Tejada Galindo"
 * alvaro.t@nylas.com
 * May 2022
 */
const completionSpec: Fig.Spec = {
  name: "nylas",
  description: "A command line interface for Nylas's API",
  subcommands: [
    {
      name: "api",
      description: "Access the Nylas API endpoints",
      subcommands: [
        {
          name: "a",
          description: "A API commands",
          subcommands: [
            {
              name: "accounts",
              description: "Accounts commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete an Account",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
                {
                  name: "get",
                  description: "Return All Accounts",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                    {
                      name: "--limit",
                      description:
                        "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                      args: {
                        name: "limit",
                        default: "0",
                      },
                    },
                    {
                      name: "--metadata_key",
                      description:
                        "Pass in your keys to search for metadata. `?metadata_key=goodmorning`.  You can also combine this with `metadata_value`, `?metadata_key=goodmorning&metadata_value=goodbye`. See [Metadata](/docs/developer-tools/api/metadata/)",
                      args: {
                        name: "metadata_key",
                      },
                    },
                    {
                      name: "--metadata_pair",
                      description:
                        "Pass in your metadata key and value pair to search for metadata. `?metadata_pair=goodmorning:goodnight`. See [Metadata](/docs/developer-tools/api/metadata/)",
                      args: {
                        name: "metadata_pair",
                      },
                    },
                    {
                      name: "--metadata_value",
                      description:
                        "Pass in your value to search for metadata. `?metadata_value=goodnight`. You can also combine this with `metadata_key`, `?metadata_key=goodmorning&metadata_value=goodbye`.  See [Metadata](/docs/developer-tools/api/metadata/)",
                      args: {
                        name: "metadata_value",
                      },
                    },
                    {
                      name: "--offset",
                      description:
                        "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                      args: {
                        name: "offset",
                        default: "0",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "accounts:downgrade",
              description: "Accounts:downgrade commands",
              subcommands: [
                {
                  name: "post",
                  description: "Cancel an Account",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "accounts:revoke-all",
              description: "Accounts:revoke-all commands",
              subcommands: [
                {
                  name: "post",
                  description: "Revoke All Tokens",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "accounts:token-info",
              description: "Accounts:token-info commands",
              subcommands: [
                {
                  name: "post",
                  description: "Return Token Information",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "accounts:upgrade",
              description: "Accounts:upgrade commands",
              subcommands: [
                {
                  name: "post",
                  description: "Reactivate an Account",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "accounts",
          description: "Gets a list of authed accounts",
          options: [
            {
              name: ["--limit", "-l"],
              description: "This is usage",
              args: {
                name: "limit",
                default: "10",
              },
            },
          ],
        },
        {
          name: "applications",
          description: "Gets your application info",
        },
        {
          name: "calendars",
          description: "Calendars API commands",
          subcommands: [
            {
              name: "availability",
              description: "Availability commands",
              subcommands: [
                {
                  name: "post",
                  description: "Availability for a Single Meeting",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "availability:consecutive",
              description: "Availability:consecutive commands",
              subcommands: [
                {
                  name: "post",
                  description: "Availability for Multiple Meetings",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Calendar",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "free-busy",
              description: "Free-busy commands",
              subcommands: [
                {
                  name: "post",
                  description: "Calendar Free or Busy",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "get",
              description: "Return All Calendars",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--metadata_key",
                  description:
                    "Pass in your keys to search for metadata. `?metadata_key=goodmorning`.  You can also combine this with `metadata_value`, `?metadata_key=goodmorning&metadata_value=goodbye`. See [Metadata](/docs/developer-tools/api/metadata/)",
                  args: {
                    name: "metadata_key",
                  },
                },
                {
                  name: "--metadata_pair",
                  description:
                    "Pass in your metadata key and value pair to search for metadata. `?metadata_pair=goodmorning:goodnight`. See [Metadata](/docs/developer-tools/api/metadata/)",
                  args: {
                    name: "metadata_pair",
                  },
                },
                {
                  name: "--metadata_value",
                  description:
                    "Pass in your value to search for metadata. `?metadata_value=goodnight`. You can also combine this with `metadata_key`, `?metadata_key=goodmorning&metadata_value=goodbye`.  See [Metadata](/docs/developer-tools/api/metadata/)",
                  args: {
                    name: "metadata_value",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only `view=expanded` is supported. See [Views](/docs/api/#overview--views) for more information",
                  args: {
                    name: "view",
                  },
                },
              ],
            },
            {
              name: "post",
              description: "Create a Calendar",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update A Calendar",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "connect",
          description: "Connect API commands",
          subcommands: [
            {
              name: "detect-provider",
              description: "Detect-provider commands",
              subcommands: [
                {
                  name: "post",
                  description: "Detect Provider",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "contacts",
          description: "Contacts API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Contact",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Contacts",
              options: [
                {
                  name: "--country",
                  description:
                    "Returns the contacts matching the contact's exact physical addresses",
                  args: {
                    name: "country",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--email",
                  description:
                    "Returns the contacts matching the exact contact's email",
                  args: {
                    name: "email",
                  },
                },
                {
                  name: "--group",
                  description:
                    "Returns the contacts belonging to the Contact Group matching this ID",
                  args: {
                    name: "group",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
                {
                  name: "--phone_number",
                  description:
                    "Returns the contacts matching the contact's exact phone number",
                  args: {
                    name: "phone_number",
                  },
                },
                {
                  name: "--postal_code",
                  description:
                    "Returns the contacts matching the contact's exact postal code of one of the contact's addresses",
                  args: {
                    name: "postal_code",
                  },
                },
                {
                  name: "--source",
                  description:
                    "Returns the contacts matching from the address book or auto-generated contacts from emails. For example of contacts only from the address book: `/`contacts?source=address_book` or for only autogenerated contacts: `/contacts?source=inbox`",
                  args: {
                    name: "source",
                  },
                },
                {
                  name: "--state",
                  description:
                    "Returns the contacts matching the contact's exact state for one of the contact's physical addresses",
                  args: {
                    name: "state",
                  },
                },
                {
                  name: "--street_address",
                  description:
                    "Returns the contacts matching the one of the contact's exact street address",
                  args: {
                    name: "street_address",
                  },
                },
              ],
            },
            {
              name: "groups",
              description: "Groups commands",
              subcommands: [
                {
                  name: "get",
                  description: "Return Contact Groups",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "picture",
              description: "Picture commands",
              subcommands: [
                {
                  name: "get",
                  description: "Returns a Contacts Picture",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "post",
              description: "Create a Contact",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update a Contact",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "delta",
          description: "Delta API commands",
          subcommands: [
            {
              name: "get",
              description: "Request Delta Cursors",
              options: [
                {
                  name: "--cursor",
                  description: "The data cursor from `/delta/latest_cursor`",
                  args: {
                    name: "cursor",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--excluded_types",
                  description:
                    "A comma-separated list of object types to exclude from the returned deltas. You can not use `included_types` and `excluded_types` together",
                  args: {
                    name: "excluded_types",
                  },
                },
                {
                  name: "--include_types",
                  description:
                    "A comma-separated list of the object types that will only be included in the returned deltas. You can not use `included_types` and `excluded_types` together",
                  args: {
                    name: "include_types",
                  },
                },
                {
                  name: "--view",
                  description:
                    "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
                  args: {
                    name: "view",
                  },
                },
              ],
            },
            {
              name: "latest:cursor",
              description: "Latest:cursor commands",
              subcommands: [
                {
                  name: "post",
                  description: "Get a Delta Cursor",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "longpoll",
              description: "Longpoll commands",
              subcommands: [
                {
                  name: "get",
                  description: "Return Long-Polling Deltas",
                  options: [
                    {
                      name: "--cursor",
                      description:
                        "The data cursor from `/delta/latest_cursor`",
                      args: {
                        name: "cursor",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                    {
                      name: "--excluded_types",
                      description:
                        "A comma-separated list of object types to exclude from the returned deltas. You can not use `included_types` and `excluded_types` together",
                      args: {
                        name: "excluded_types",
                      },
                    },
                    {
                      name: "--include_types",
                      description:
                        "A comma-separated list of the object types that will only be included in the returned deltas. You can not use `included_types` and `excluded_types` together",
                      args: {
                        name: "include_types",
                      },
                    },
                    {
                      name: "--timeout",
                      description:
                        "The time difference between the deltas retrieved",
                      args: {
                        name: "timeout",
                        default: "0",
                      },
                    },
                    {
                      name: "--view",
                      description:
                        "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
                      args: {
                        name: "view",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "streaming",
              description: "Streaming commands",
              subcommands: [
                {
                  name: "get",
                  description: "Streaming Deltas",
                  options: [
                    {
                      name: "--cursor",
                      description:
                        "The data cursor from `/delta/latest_cursor`",
                      args: {
                        name: "cursor",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                    {
                      name: "--excluded_types",
                      description:
                        "A comma-separated list of object types to exclude from the returned deltas. You can not use `included_types` and `excluded_types` together",
                      args: {
                        name: "excluded_types",
                      },
                    },
                    {
                      name: "--include_types",
                      description:
                        "A comma-separated list of the object types that will only be included in the returned deltas. You can not use `included_types` and `excluded_types` together",
                      args: {
                        name: "include_types",
                      },
                    },
                    {
                      name: "--view",
                      description:
                        "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
                      args: {
                        name: "view",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "drafts",
          description: "Drafts API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Draft",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Drafts",
              options: [
                {
                  name: "--any_email",
                  description:
                    "Return emails that have been sent or received from this comma-separated list of email addresses. For example: mail1@mail.com,mail2@mail.com. A maximum of 25 emails may be specified",
                  args: {
                    name: "any_email",
                  },
                },
                {
                  name: "--bcc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account. (Most SMTP gateways remove BCC information.)",
                  args: {
                    name: "bcc",
                  },
                },
                {
                  name: "--cc",
                  description:
                    "Return threads containing messages that were CC'd to this email address",
                  args: {
                    name: "cc",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                  args: {
                    name: "filename",
                  },
                },
                {
                  name: "--in",
                  description:
                    "This parameter supports the name, display_name, or id of a folder or label. To return drafts, pass in `drafts`",
                  args: {
                    name: "in",
                  },
                },
                {
                  name: "--last_message_after",
                  description:
                    "Return threads whose most recent message was received after this Unix-based timestamp",
                  args: {
                    name: "last_message_after",
                  },
                },
                {
                  name: "--last_message_before",
                  description:
                    "Return threads whose most recent message was received before this Unix-based timestamp",
                  args: {
                    name: "last_message_before",
                  },
                },
                {
                  name: "--not_in",
                  description:
                    "Filter messages not in a given folder or label. The filter supports the name, display, or ID of a folder or label",
                  args: {
                    name: "not_in",
                  },
                },
                {
                  name: "--started_after",
                  description:
                    "Return threads whose first message was received after this Unix-based timestamp",
                  args: {
                    name: "started_after",
                  },
                },
                {
                  name: "--started_before",
                  description:
                    "Return threads whose first message was received before this Unix-based timestamp",
                  args: {
                    name: "started_before",
                  },
                },
                {
                  name: "--subject",
                  description: "Return threads with a matching literal subject",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: "--thread_id",
                  description: "Return messages belonging to a specific thread",
                  args: {
                    name: "thread_id",
                  },
                },
                {
                  name: "--to",
                  description:
                    "Return threads containing messages sent to this email address",
                  args: {
                    name: "to",
                  },
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only `view=expanded` is supported. See [Views](/docs/api/#overview--views) for more information",
                  args: {
                    name: "view",
                  },
                },
              ],
            },
            {
              name: "post",
              description: "Create a New Draft",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update a Draft",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "events",
          description: "Events API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete An Event",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Events",
              options: [
                {
                  name: "--calendar_id",
                  description:
                    "Return events belonging to the specified calendar ID",
                  args: {
                    name: "calendar_id",
                  },
                },
                {
                  name: "--count",
                  description:
                    "See [Count](/docs/api/#overview--count-view) for more information",
                  args: {
                    name: "count",
                  },
                },
                {
                  name: "--description",
                  description:
                    "Return events matching the specified description",
                  args: {
                    name: "description",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--ends_after",
                  description:
                    "Return events ending after the specified unix timestamp",
                  args: {
                    name: "ends_after",
                  },
                },
                {
                  name: "--ends_before",
                  description:
                    "Return events ending before the specified unix timestamp",
                  args: {
                    name: "ends_before",
                  },
                },
                {
                  name: "--event_id",
                  description:
                    "Return the event matching the specified event ID",
                  args: {
                    name: "event_id",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--location",
                  description: "Return events matching the specified location",
                  args: {
                    name: "location",
                  },
                },
                {
                  name: "--metadata_key",
                  description:
                    "Pass in your keys to search for metadata. `?metadata_key=goodmorning`.  You can also combine this with `metadata_value`, `?metadata_key=goodmorning&metadata_value=goodbye`. See [Metadata](/docs/developer-tools/api/metadata/)",
                  args: {
                    name: "metadata_key",
                  },
                },
                {
                  name: "--metadata_pair",
                  description:
                    "Pass in your metadata key and value pair to search for metadata. `?metadata_pair=goodmorning:goodnight`. See [Metadata](/docs/developer-tools/api/metadata/)",
                  args: {
                    name: "metadata_pair",
                  },
                },
                {
                  name: "--metadata_value",
                  description:
                    "Pass in your value to search for metadata. `?metadata_value=goodnight`. You can also combine this with `metadata_key`, `?metadata_key=goodmorning&metadata_value=goodbye`.  See [Metadata](/docs/developer-tools/api/metadata/)",
                  args: {
                    name: "metadata_value",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
                {
                  name: "--show_cancelled",
                  description:
                    "Return events that have a status of `cancelled`. If an event is recurring, then it returns no matter the value of show_cancelled. Default false",
                  args: {
                    name: "show_cancelled",
                  },
                },
                {
                  name: "--starts_after",
                  description:
                    "Return events starting after the specified unix timestamp",
                  args: {
                    name: "starts_after",
                  },
                },
                {
                  name: "--starts_before",
                  description:
                    "Return events starting before the specified unix timestamp",
                  args: {
                    name: "starts_before",
                  },
                },
                {
                  name: "--title",
                  description: "Return events matching the specified title",
                  args: {
                    name: "title",
                  },
                },
              ],
            },
            {
              name: "post",
              description: "Create an Event",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update An Event",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "to-ics",
              description: "To-ics commands",
              subcommands: [
                {
                  name: "post",
                  description: "Generate ICS File",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "files",
          description: "Files API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete a File",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "download",
              description: "Download commands",
              subcommands: [
                {
                  name: "get",
                  description: "Download a File",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "get",
              description: "Return All Files",
              options: [
                {
                  name: "--content_type",
                  description:
                    "Return objects matching the specified content type",
                  args: {
                    name: "content_type",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                  args: {
                    name: "filename",
                  },
                },
                {
                  name: "--message_id",
                  description:
                    "Return objects matching the specified message ID",
                  args: {
                    name: "message_id",
                  },
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only `view=expanded` is supported. See [Views](/docs/api/#overview--views) for more information",
                  args: {
                    name: "view",
                  },
                },
              ],
            },
            {
              name: "post",
              description: "Upload a New File",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "folders",
          description: "Folders API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Folder",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Folders",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
              ],
            },
            {
              name: "post",
              description: "Create a Folder",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update a Folder",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "ip-addresses",
          description:
            "Gets a list of Nylas IP addresses (paid customers only)",
        },
        {
          name: "job-statuses",
          description: "Job-Statuses API commands",
          subcommands: [
            {
              name: "get",
              description: "Return All Job Statuses",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "labels",
          description: "Labels API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Label",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Labels",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
              ],
            },
            {
              name: "post",
              description: "Create a Label",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update a Label",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "messages",
          description: "Messages API commands",
          subcommands: [
            {
              name: "get",
              description: "Return All Messages",
              options: [
                {
                  name: "--any_email",
                  description:
                    "Return emails that have been sent or received from this comma-separated list of email addresses. For example: mail1@mail.com,mail2@mail.com. A maximum of 25 emails may be specified",
                  args: {
                    name: "any_email",
                  },
                },
                {
                  name: "--bcc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account. (Most SMTP gateways remove BCC information.)",
                  args: {
                    name: "bcc",
                  },
                },
                {
                  name: "--cc",
                  description:
                    "Return threads containing messages that were CC'd to this email address",
                  args: {
                    name: "cc",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                  args: {
                    name: "filename",
                  },
                },
                {
                  name: "--from",
                  description:
                    "Return threads containing messages sent from this email address",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--in",
                  description:
                    "This parameter supports the name, display_name, or id of a folder or label. To return drafts, pass in `drafts`",
                  args: {
                    name: "in",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--not_in",
                  description:
                    "Filter messages not in a given folder or label. The filter supports the name, display, or ID of a folder or label",
                  args: {
                    name: "not_in",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
                {
                  name: "--received_after",
                  description:
                    "Return messages received after this unix timestamp",
                  args: {
                    name: "received_after",
                    default: "0",
                  },
                },
                {
                  name: "--received_before",
                  description:
                    "Return messages received before this unix timestamp",
                  args: {
                    name: "received_before",
                    default: "0",
                  },
                },
                {
                  name: "--subject",
                  description: "Return threads with a matching literal subject",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: "--thread_id",
                  description: "Return messages belonging to a specific thread",
                  args: {
                    name: "thread_id",
                  },
                },
                {
                  name: "--to",
                  description:
                    "Return threads containing messages sent to this email address",
                  args: {
                    name: "to",
                  },
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only `view=expanded` is supported. See [Views](/docs/api/#overview--views) for more information",
                  args: {
                    name: "view",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update a Message",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "neural",
          description: "Neural API commands",
          subcommands: [
            {
              name: "categorize",
              description: "Categorize commands",
              subcommands: [
                {
                  name: "put",
                  description: "Categorize a Message",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "categorize:feedback",
              description: "Categorize:feedback commands",
              subcommands: [
                {
                  name: "post",
                  description: "Categorize Message Feedback",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "conversation",
              description: "Conversation commands",
              subcommands: [
                {
                  name: "put",
                  description: "Clean Conversation",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "conversation:feedback",
              description: "Conversation:feedback commands",
              subcommands: [
                {
                  name: "post",
                  description: "Clean Conversations Feedback",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "ocr",
              description: "Ocr commands",
              subcommands: [
                {
                  name: "put",
                  description: "Optical Character Recognition",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "ocr:feedback",
              description: "Ocr:feedback commands",
              subcommands: [
                {
                  name: "post",
                  description: "Optical Character Recognition Feedback",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "sentiment",
              description: "Sentiment commands",
              subcommands: [
                {
                  name: "put",
                  description: "Sentiment Analysis",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "sentiment:feedback",
              description: "Sentiment:feedback commands",
              subcommands: [
                {
                  name: "post",
                  description: "Sentiment Analysis Feedback",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "signature",
              description: "Signature commands",
              subcommands: [
                {
                  name: "put",
                  description: "Signature Extraction",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: "signature:feedback",
              description: "Signature:feedback commands",
              subcommands: [
                {
                  name: "post",
                  description: "Signature Extraction Feedback",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "resources",
          description: "Resources API commands",
          subcommands: [
            {
              name: "get",
              description: "Return Room Resource Information",
              options: [
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "send",
          description: "Send API commands",
          subcommands: [
            {
              name: "post",
              description: "Send a Message",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "send-rsvp",
          description: "Send-Rsvp API commands",
          subcommands: [
            {
              name: "post",
              description: "Send RSVP",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "threads",
          description: "Threads API commands",
          subcommands: [
            {
              name: "get",
              description: "Returns All Threads",
              options: [
                {
                  name: "--any_email",
                  description:
                    "Return emails that have been sent or received from this comma-separated list of email addresses. For example: mail1@mail.com,mail2@mail.com. A maximum of 25 emails may be specified",
                  args: {
                    name: "any_email",
                  },
                },
                {
                  name: "--bcc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account. (Most SMTP gateways remove BCC information.)",
                  args: {
                    name: "bcc",
                  },
                },
                {
                  name: "--cc",
                  description:
                    "Return threads containing messages that were CC'd to this email address",
                  args: {
                    name: "cc",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                  args: {
                    name: "filename",
                  },
                },
                {
                  name: "--from",
                  description:
                    "Return threads containing messages sent from this email address",
                  args: {
                    name: "from",
                  },
                },
                {
                  name: "--in",
                  description:
                    "This parameter supports the name, display_name, or id of a folder or label. To return drafts, pass in `drafts`",
                  args: {
                    name: "in",
                  },
                },
                {
                  name: "--last_message_after",
                  description:
                    "Return threads whose most recent message was received after this Unix-based timestamp",
                  args: {
                    name: "last_message_after",
                  },
                },
                {
                  name: "--last_message_before",
                  description:
                    "Return threads whose most recent message was received before this Unix-based timestamp",
                  args: {
                    name: "last_message_before",
                  },
                },
                {
                  name: "--last_updated_after",
                  description:
                    "Return threads whose most recent last updated date is after this Unix-based timestamp",
                  args: {
                    name: "last_updated_after",
                  },
                },
                {
                  name: "--last_updated_before",
                  description:
                    "Return threads whose most recent last updated date is before this Unix-based timestamp",
                  args: {
                    name: "last_updated_before",
                  },
                },
                {
                  name: "--last_updated_timestamp",
                  description:
                    "Return threads that been updated or changed recently. UNIX timestamp",
                  args: {
                    name: "last_updated_timestamp",
                  },
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100. If set too high, requests may fail to prevent excessively large response bodies",
                  args: {
                    name: "limit",
                    default: "0",
                  },
                },
                {
                  name: "--not_in",
                  description:
                    "Filter messages not in a given folder or label. The filter supports the name, display, or ID of a folder or label",
                  args: {
                    name: "not_in",
                  },
                },
                {
                  name: "--offset",
                  description:
                    "Zero-based offset from default object sorting. See [pagination](/docs/api/#overview--pagintaion) for more information",
                  args: {
                    name: "offset",
                    default: "0",
                  },
                },
                {
                  name: "--started_after",
                  description:
                    "Return threads whose first message was received after this Unix-based timestamp",
                  args: {
                    name: "started_after",
                  },
                },
                {
                  name: "--started_before",
                  description:
                    "Return threads whose first message was received before this Unix-based timestamp",
                  args: {
                    name: "started_before",
                  },
                },
                {
                  name: "--subject",
                  description: "Return threads with a matching literal subject",
                  args: {
                    name: "subject",
                  },
                },
                {
                  name: "--to",
                  description:
                    "Return threads containing messages sent to this email address",
                  args: {
                    name: "to",
                  },
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only `view=expanded` is supported. See [Views](/docs/api/#overview--views) for more information",
                  args: {
                    name: "view",
                  },
                },
              ],
            },
            {
              name: "put",
              description: "Update a Thread",
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                  args: {
                    name: "body",
                  },
                },
                {
                  name: "--display_columns",
                  description:
                    "(optional) A comma separated list of column headers to display for the table output",
                  args: {
                    name: "headers",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "v2",
          description: "V2 API commands",
          subcommands: [
            {
              name: "outbox",
              description: "Outbox commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete Scheduled Message",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
                {
                  name: "get",
                  description: "Return All Messages to Be Sent",
                  options: [
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
                {
                  name: "post",
                  description: "Send a Message",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
                {
                  name: "put",
                  description: "Update Send Time",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                      args: {
                        name: "body",
                      },
                    },
                    {
                      name: "--display_columns",
                      description:
                        "(optional) A comma separated list of column headers to display for the table output",
                      args: {
                        name: "headers",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "webhooks",
          description: "Gets a list of webhooks",
          options: [
            {
              name: ["--limit", "-l"],
              description: "This is usage",
              args: {
                name: "limit",
                default: "10",
              },
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Auth your email account",
    },
    {
      name: "docs",
      description: "Documentation lookup (preview)",
    },
    {
      name: "init",
      description: "Setup your dashboard application credentials",
    },
    {
      name: "version",
      description: "Gets the current CLI version",
    },
    {
      name: "webhook",
      description: "Create and test Nylas' Webhooks",
      subcommands: [
        {
          name: "tunnel",
          description: "Starts listening for incoming Nylas webhook events",
          options: [
            {
              name: "--callback_domain",
              description: "The domain for the callback URL",
              args: {
                name: "callback_domain",
                default: "cb.nylas.com",
              },
            },
            {
              name: ["--forward", "-f"],
              description:
                "Address to forward requests to (e.g. http://localhost:3000)",
              args: {
                name: "forward",
              },
            },
            {
              name: ["--print", "-p"],
              description: "Prints the (json) payload to the console",
            },
            {
              name: ["--triggers", "-t"],
              description: "The triggers to register for your webhooks",
              args: {
                name: "triggers",
                default:
                  "account.connected,account.running,account.stopped,account.invalid,account.sync_error,message.created,message.opened,message.updated,message.link_clicked,message.bounced,thread.replied,calendar.created,calendar.updated,calendar.deleted,event.created,event.updated,event.deleted,contact.created,contact.updated,contact.deleted,job.successful,job.failed",
                suggestions: [
                  "account.connected",
                  "account.running",
                  "account.stopped",
                  "account.invalid",
                  "account.sync_error",
                  "message.created",
                  "message.opened",
                  "message.updated",
                  "message.link_clicked",
                  "message.bounced",
                  "thread.replied",
                  "calendar.created",
                  "calendar.updated",
                  "calendar.deleted",
                  "event.created",
                  "event.updated",
                  "event.deleted",
                  "contact.created",
                  "contact.updated",
                  "contact.updated",
                  "contact.deleted",
                  "job.successful",
                  "job.failed",
                ],
              },
            },
            {
              name: "--websocket_domain",
              description: "The domain for the websocket server",
              args: {
                name: "websocket_domain",
                default: "tunnel.nylas.com",
              },
            },
          ],
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "api",
          description: "Access the Nylas API endpoints",
          subcommands: [
            {
              name: "a",
              description: "A API commands",
              subcommands: [
                {
                  name: "accounts",
                  description: "Accounts commands",
                  subcommands: [
                    {
                      name: "delete",
                      description: "Delete an Account",
                    },
                    {
                      name: "get",
                      description: "Return All Accounts",
                    },
                  ],
                },
                {
                  name: "accounts:downgrade",
                  description: "Accounts:downgrade commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Cancel an Account",
                    },
                  ],
                },
                {
                  name: "accounts:revoke-all",
                  description: "Accounts:revoke-all commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Revoke All Tokens",
                    },
                  ],
                },
                {
                  name: "accounts:token-info",
                  description: "Accounts:token-info commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Return Token Information",
                    },
                  ],
                },
                {
                  name: "accounts:upgrade",
                  description: "Accounts:upgrade commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Reactivate an Account",
                    },
                  ],
                },
              ],
            },
            {
              name: "accounts",
              description: "Gets a list of authed accounts",
            },
            {
              name: "applications",
              description: "Gets your application info",
            },
            {
              name: "calendars",
              description: "Calendars API commands",
              subcommands: [
                {
                  name: "availability",
                  description: "Availability commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Availability for a Single Meeting",
                    },
                  ],
                },
                {
                  name: "availability:consecutive",
                  description: "Availability:consecutive commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Availability for Multiple Meetings",
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a Calendar",
                },
                {
                  name: "free-busy",
                  description: "Free-busy commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Calendar Free or Busy",
                    },
                  ],
                },
                {
                  name: "get",
                  description: "Return All Calendars",
                },
                {
                  name: "post",
                  description: "Create a Calendar",
                },
                {
                  name: "put",
                  description: "Update A Calendar",
                },
              ],
            },
            {
              name: "connect",
              description: "Connect API commands",
              subcommands: [
                {
                  name: "detect-provider",
                  description: "Detect-provider commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Detect Provider",
                    },
                  ],
                },
              ],
            },
            {
              name: "contacts",
              description: "Contacts API commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a Contact",
                },
                {
                  name: "get",
                  description: "Return All Contacts",
                },
                {
                  name: "groups",
                  description: "Groups commands",
                  subcommands: [
                    {
                      name: "get",
                      description: "Return Contact Groups",
                    },
                  ],
                },
                {
                  name: "picture",
                  description: "Picture commands",
                  subcommands: [
                    {
                      name: "get",
                      description: "Returns a Contacts Picture",
                    },
                  ],
                },
                {
                  name: "post",
                  description: "Create a Contact",
                },
                {
                  name: "put",
                  description: "Update a Contact",
                },
              ],
            },
            {
              name: "delta",
              description: "Delta API commands",
              subcommands: [
                {
                  name: "get",
                  description: "Request Delta Cursors",
                },
                {
                  name: "latest:cursor",
                  description: "Latest:cursor commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Get a Delta Cursor",
                    },
                  ],
                },
                {
                  name: "longpoll",
                  description: "Longpoll commands",
                  subcommands: [
                    {
                      name: "get",
                      description: "Return Long-Polling Deltas",
                    },
                  ],
                },
                {
                  name: "streaming",
                  description: "Streaming commands",
                  subcommands: [
                    {
                      name: "get",
                      description: "Streaming Deltas",
                    },
                  ],
                },
              ],
            },
            {
              name: "drafts",
              description: "Drafts API commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a Draft",
                },
                {
                  name: "get",
                  description: "Return All Drafts",
                },
                {
                  name: "post",
                  description: "Create a New Draft",
                },
                {
                  name: "put",
                  description: "Update a Draft",
                },
              ],
            },
            {
              name: "events",
              description: "Events API commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete An Event",
                },
                {
                  name: "get",
                  description: "Return All Events",
                },
                {
                  name: "post",
                  description: "Create an Event",
                },
                {
                  name: "put",
                  description: "Update An Event",
                },
                {
                  name: "to-ics",
                  description: "To-ics commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Generate ICS File",
                    },
                  ],
                },
              ],
            },
            {
              name: "files",
              description: "Files API commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a File",
                },
                {
                  name: "download",
                  description: "Download commands",
                  subcommands: [
                    {
                      name: "get",
                      description: "Download a File",
                    },
                  ],
                },
                {
                  name: "get",
                  description: "Return All Files",
                },
                {
                  name: "post",
                  description: "Upload a New File",
                },
              ],
            },
            {
              name: "folders",
              description: "Folders API commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a Folder",
                },
                {
                  name: "get",
                  description: "Return All Folders",
                },
                {
                  name: "post",
                  description: "Create a Folder",
                },
                {
                  name: "put",
                  description: "Update a Folder",
                },
              ],
            },
            {
              name: "ip-addresses",
              description:
                "Gets a list of Nylas IP addresses (paid customers only)",
            },
            {
              name: "job-statuses",
              description: "Job-Statuses API commands",
              subcommands: [
                {
                  name: "get",
                  description: "Return All Job Statuses",
                },
              ],
            },
            {
              name: "labels",
              description: "Labels API commands",
              subcommands: [
                {
                  name: "delete",
                  description: "Delete a Label",
                },
                {
                  name: "get",
                  description: "Return All Labels",
                },
                {
                  name: "post",
                  description: "Create a Label",
                },
                {
                  name: "put",
                  description: "Update a Label",
                },
              ],
            },
            {
              name: "messages",
              description: "Messages API commands",
              subcommands: [
                {
                  name: "get",
                  description: "Return All Messages",
                },
                {
                  name: "put",
                  description: "Update a Message",
                },
              ],
            },
            {
              name: "neural",
              description: "Neural API commands",
              subcommands: [
                {
                  name: "categorize",
                  description: "Categorize commands",
                  subcommands: [
                    {
                      name: "put",
                      description: "Categorize a Message",
                    },
                  ],
                },
                {
                  name: "categorize:feedback",
                  description: "Categorize:feedback commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Categorize Message Feedback",
                    },
                  ],
                },
                {
                  name: "conversation",
                  description: "Conversation commands",
                  subcommands: [
                    {
                      name: "put",
                      description: "Clean Conversation",
                    },
                  ],
                },
                {
                  name: "conversation:feedback",
                  description: "Conversation:feedback commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Clean Conversations Feedback",
                    },
                  ],
                },
                {
                  name: "ocr",
                  description: "Ocr commands",
                  subcommands: [
                    {
                      name: "put",
                      description: "Optical Character Recognition",
                    },
                  ],
                },
                {
                  name: "ocr:feedback",
                  description: "Ocr:feedback commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Optical Character Recognition Feedback",
                    },
                  ],
                },
                {
                  name: "sentiment",
                  description: "Sentiment commands",
                  subcommands: [
                    {
                      name: "put",
                      description: "Sentiment Analysis",
                    },
                  ],
                },
                {
                  name: "sentiment:feedback",
                  description: "Sentiment:feedback commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Sentiment Analysis Feedback",
                    },
                  ],
                },
                {
                  name: "signature",
                  description: "Signature commands",
                  subcommands: [
                    {
                      name: "put",
                      description: "Signature Extraction",
                    },
                  ],
                },
                {
                  name: "signature:feedback",
                  description: "Signature:feedback commands",
                  subcommands: [
                    {
                      name: "post",
                      description: "Signature Extraction Feedback",
                    },
                  ],
                },
              ],
            },
            {
              name: "resources",
              description: "Resources API commands",
              subcommands: [
                {
                  name: "get",
                  description: "Return Room Resource Information",
                },
              ],
            },
            {
              name: "send",
              description: "Send API commands",
              subcommands: [
                {
                  name: "post",
                  description: "Send a Message",
                },
              ],
            },
            {
              name: "send-rsvp",
              description: "Send-Rsvp API commands",
              subcommands: [
                {
                  name: "post",
                  description: "Send RSVP",
                },
              ],
            },
            {
              name: "threads",
              description: "Threads API commands",
              subcommands: [
                {
                  name: "get",
                  description: "Returns All Threads",
                },
                {
                  name: "put",
                  description: "Update a Thread",
                },
              ],
            },
            {
              name: "v2",
              description: "V2 API commands",
              subcommands: [
                {
                  name: "outbox",
                  description: "Outbox commands",
                  subcommands: [
                    {
                      name: "delete",
                      description: "Delete Scheduled Message",
                    },
                    {
                      name: "get",
                      description: "Return All Messages to Be Sent",
                    },
                    {
                      name: "post",
                      description: "Send a Message",
                    },
                    {
                      name: "put",
                      description: "Update Send Time",
                    },
                  ],
                },
              ],
            },
            {
              name: "webhooks",
              description: "Gets a list of webhooks",
            },
          ],
        },
        {
          name: "auth",
          description: "Auth your email account",
        },
        {
          name: "docs",
          description: "Documentation lookup (preview)",
        },
        {
          name: "init",
          description: "Setup your dashboard application credentials",
        },
        {
          name: "version",
          description: "Gets the current CLI version",
        },
        {
          name: "webhook",
          description: "Create and test Nylas' Webhooks",
          subcommands: [
            {
              name: "tunnel",
              description: "Starts listening for incoming Nylas webhook events",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: "--access_token",
      description: "Nylas account access token",
      isPersistent: true,
      args: {
        name: "access_token",
      },
    },
    {
      name: "--config_dir",
      description: "Config directory",
      isPersistent: true,
      args: {
        name: "config_dir",
        default: "~/.nylas",
        template: "folders",
      },
    },
    {
      name: "--config_file",
      description: "Config file (default is config.yaml)",
      isPersistent: true,
      args: {
        name: "config_file",
        template: "filepaths",
      },
    },
    {
      name: "--dashboard_api_url",
      description: "Dashboard API URL",
      isPersistent: true,
      args: {
        name: "dashboard_api_url",
      },
    },
    {
      name: "--debug",
      description: "Enable debugging output",
      isPersistent: true,
    },
    {
      name: "--disable_telemetry",
      description: "Disables sending telemetry data",
      isPersistent: true,
    },
    {
      name: "--nylas_api_url",
      description: "Nylas API URL",
      isPersistent: true,
      args: {
        name: "nylas_api_url",
      },
    },
    {
      name: ["--output", "-o"],
      description: "Output format (e.g. json, table)",
      isPersistent: true,
      args: {
        name: "output",
        default: "json",
        suggestions: ["json", "table"],
      },
    },
    {
      name: "--region",
      description: "Nylas Region (values: us, ireland, canada, australia)",
      isPersistent: true,
      args: {
        name: "region",
        suggestions: ["us", "ireland", "canada", "australia"],
      },
    },
    {
      name: "--silent",
      description: "Silences the output",
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Display help",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
