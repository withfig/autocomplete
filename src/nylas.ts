/**
 * Nylas CLI
 * Fig Autocomplete by "Blag aka Alvaro Tejada Galindo"
 * alvaro.t@nylas.com
 * May 2022
 */
const completionSpec: Fig.Spec = {
  name: "nylas",
  description: "Nylas CLI",
  subcommands: [
    {
      name: "api",
      description: "Call API Commands",
      subcommands: [
        {
          name: "accounts",
          description: "Gets a list of authed accounts",
        },
        {
          name: "applications",
          description: "Gets your application info",
        },
        {
          name: "drafts",
          description: "Drafts API commands",
          subcommands: [
            {
              name: "delete",
              description: "Delete a Draft",
              args: { name: "id", description: "Draft id" },
            },
            {
              name: "get",
              description: "Return All Drafts",
              args: { name: "id", description: "Draft id" },
              options: [
                {
                  name: "--any_email",
                  description:
                    "Return emails that have been sent or received from this comma-separated list of email addresses",
                },
                {
                  name: "--bcc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account",
                },
                {
                  name: "--cc",
                  description:
                    "Return threads containing messages that were CC'd to this email address",
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                },
                {
                  name: "--in",
                  description:
                    "This parameter supports the name, display_name, or id of a folder or label",
                },
                {
                  name: "--last_message_after",
                  description:
                    "Return threads whose most recent message was received after this Unix-based timestamp",
                },
                {
                  name: "--last_message_before",
                  description:
                    "Return threads whose most recent message was received before this Unix-based timestamp",
                },
                {
                  name: "--not_in",
                  description:
                    "Filter messages not in a given folder or label. The filter supports the name, display, or ID of a folder or label",
                },
                {
                  name: "--started_after",
                  description:
                    "Return threads whose first message was received after this Unix-based timestamp",
                },
                {
                  name: "--started_before",
                  description:
                    "Return threads whose first message was received before this Unix-based timestamp",
                },
                {
                  name: "--subject",
                  description: "Return threads with a matching literal subject",
                },
                {
                  name: "--thread_id",
                  description: "Return messages belonging to a specific thread",
                },
                {
                  name: "--to",
                  description:
                    "Return threads containing messages sent to this email address",
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only view=expanded is supported",
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
                },
              ],
            },
            {
              name: "put",
              description: "Update a Draft",
              args: { name: "id" },
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
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
              args: { name: "id" },
            },
            {
              name: "download",
              description: "Delete a File",
              subcommands: [
                {
                  name: "get",
                  description: "Download a File",
                  args: { name: "id" },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Files",
              args: { name: "id" },
              options: [
                {
                  name: "--content_type",
                  description:
                    "Return objects matching the specified content type",
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                },
                {
                  name: "--message_id",
                  description:
                    "Return objects matching the specified message ID",
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only view=expanded is supported",
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
              args: { name: "id" },
            },
            {
              name: "get",
              description: "Return All Folders",
              args: { name: "id" },
              options: [
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
                },
                {
                  name: "--offset",
                  description: "Zero-based offset from default object sorting",
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
                },
              ],
            },
            {
              name: "put",
              description: "Update a Folder",
              args: { name: "id" },
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
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
              args: { name: "id" },
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
              args: { name: "id" },
            },
            {
              name: "get",
              description: "Return All Labels",
              args: { name: "id" },
              options: [
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
                },
                {
                  name: "--offset",
                  description: "Zero-based offset from default object sorting",
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
                },
              ],
            },
            {
              name: "put",
              description: "Update a Label",
              args: { name: "id" },
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
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
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
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
              args: { name: "id" },
              options: [
                {
                  name: "--any_email",
                  description:
                    "Return emails that have been sent or received from this comma-separated list of email addresses",
                },
                {
                  name: "--bcc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account",
                },
                {
                  name: "--cc",
                  description:
                    "Return threads containing messages that were CC'd to this email address",
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                },
                {
                  name: "--from",
                  description:
                    "Return threads containing messages sent from this email address",
                },
                {
                  name: "--in",
                  description:
                    "This parameter supports the name, display_name, or id of a folder or label",
                },
                {
                  name: "--last_message_after",
                  description:
                    "Return threads whose most recent message was received after this Unix-based timestamp",
                },
                {
                  name: "--last_message_before",
                  description:
                    "Return threads whose most recent message was received before this Unix-based timestamp",
                },
                {
                  name: "--last_updated_after",
                  description:
                    "Return threads whose most recent last updated date is after this Unix-based timestamp",
                },
                {
                  name: "--last_updated_before",
                  description:
                    "Return threads whose most recent last updated date is before this Unix-based timestamp",
                },
                {
                  name: "--last_updated_timestamp",
                  description:
                    "Return threads that been updated or changed recently. UNIX timestamp",
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
                },
                {
                  name: "--not_in",
                  description: "Filter messages not in a given folder or label",
                },
                {
                  name: "--offset",
                  description: "Zero-based offset from default object sorting",
                },
                {
                  name: "--started_after",
                  description:
                    "Return threads whose first message was received after this Unix-based timestamp",
                },
                {
                  name: "--started_before",
                  description:
                    "Return threads whose first message was received before this Unix-based timestamp",
                },
                {
                  name: "--subject",
                  description: "Return threads with a matching literal subject",
                },
                {
                  name: "--to",
                  description:
                    "Return threads containing messages sent to this email address",
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only view=expanded is supported",
                },
              ],
            },
            {
              name: "put",
              description: "Update a Thread",
              args: { name: "id" },
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
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
                  args: { name: "job_status_id" },
                },
                {
                  name: "get",
                  description: "Return All Messages to Be Sent",
                },
                {
                  name: "post",
                  description: "Send a Message",
                  options: [
                    {
                      name: "--body",
                      description:
                        "Request body (or use < to redirect a JSON file)",
                    },
                  ],
                },
                {
                  name: "put",
                  description: "Update Send Time",
                  args: { name: "job_status_id" },
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
                  description: "The data cursor from /delta/latest_cursor",
                },
                {
                  name: "--excluded_types",
                  description:
                    "A comma-separated list of object types to exclude from the returned deltas",
                },
                {
                  name: "--include_types",
                  description:
                    "A comma-separated list of the object types that will only be included in the returned deltas",
                },
                {
                  name: "--view",
                  description:
                    "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
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
                },
              ],
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
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
              options: [
                {
                  name: "--cursor",
                  description: "The data cursor from /delta/latest_cursor",
                },
                {
                  name: "--excluded_types",
                  description:
                    "A comma-separated list of object types to exclude from the returned deltas",
                },
                {
                  name: "--include_types",
                  description:
                    "A comma-separated list of the object types that will only be included in the returned deltas",
                },
                {
                  name: "--timeout",
                  description:
                    "The time difference between the deltas retrieved",
                },
                {
                  name: "--view",
                  description:
                    "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
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
              options: [
                {
                  name: "--cursor",
                  description: "The data cursor from /delta/latest_cursor",
                },
                {
                  name: "--excluded_types",
                  description:
                    "A comma-separated list of object types to exclude from the returned deltas",
                },
                {
                  name: "--include_types",
                  description:
                    "A comma-separated list of the object types that will only be included in the returned deltas",
                },
                {
                  name: "--view",
                  description:
                    "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
                },
              ],
            },
          ],
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
                    },
                  ],
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a Calendar",
              args: { name: "id" },
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
                    },
                  ],
                },
              ],
            },
            {
              name: "get",
              description: "Return All Calendars",
              args: { name: "id" },
              options: [
                {
                  name: "--metadata_key ?metadata_key=goodmorning",
                  description: "Pass in your keys to search for metadata",
                },
                {
                  name: "--metadata_pair ?metadata_pair=goodmorning:goodnight",
                  description:
                    "Pass in your metadata key and value pair to search for metadata",
                },
                {
                  name: "--metadata_value ?metadata_value=goodnight",
                  description: "Pass in your value to search for metadata",
                },
                {
                  name: "--offset",
                  description: "Zero-based offset from default object sorting",
                },
                {
                  name: "--view",
                  description:
                    "This value indicates if the data expands thread and message objects in the response to include additional information, when the value is set to expanded",
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
                },
              ],
            },
            {
              name: "put",
              description: "Update A Calendar",
              args: { name: "id" },
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
                },
              ],
            },
          ],
        },
        {
          name: "webhooks",
          description:
            "A list of your registered webhooks with your application",
          options: [
            {
              name: "--limit",
              description: "This is usage (default 10)",
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
              args: {
                name: "id",
                description: "Message id",
              },
              options: [
                {
                  name: "--any_email",
                  description:
                    "Return emails that have been sent or received from this comma-separated list of email addresses",
                },
                {
                  name: "--bcc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account",
                },
                {
                  name: "--cc",
                  description:
                    "Return threads containing messages that were BCC'd to this email address, likely sent from the parent account",
                },
                {
                  name: "--filename",
                  description: "Return object with the filename",
                },
                {
                  name: "--from",
                  description:
                    "Return threads containing messages sent from this email address",
                },
                {
                  name: "--in",
                  description:
                    "This parameter supports the name, display_name, or id of a folder or label. To return drafts, pass in drafts",
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
                },
                {
                  name: "--not_in",
                  description: "Filter messages not in a given folder or label",
                },
                {
                  name: "--offset",
                  description: "Zero-based offset from default object sorting",
                },
                {
                  name: "--received_after",
                  description:
                    "Return messages received after this unix timestamp",
                },
                {
                  name: "--received_before",
                  description:
                    "Return messages received before this unix timestamp",
                },
                {
                  name: "--subject",
                  description: "Return threads with a matching literal subject",
                },
                {
                  name: "--thread_id",
                  description: "Return messages belonging to a specific thread",
                },
                {
                  name: "--to",
                  description:
                    "Return threads containing messages sent to this email address",
                },
                {
                  name: "--view",
                  description:
                    "If using Search, only view=expanded is supported",
                },
              ],
            },
            {
              name: "put",
              description: "Update a Message",
              args: {
                name: "id",
                description: "Message id",
              },
              options: [
                {
                  name: "--body",
                  description:
                    "Request body (or use < to redirect a JSON file)",
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
              args: {
                name: "id",
                description: "Contact id",
              },
            },
            {
              name: "groups",
              description: "Groups commands",

              args: {
                name: "id",
                description: "Contact id",
              },
            },
            {
              name: "picture",
              description: "Picture commands",
              subcommands: [
                {
                  name: "get",
                  description: "Returns a Contacts Picture",
                  args: {
                    name: "id",
                    description: "Contact id",
                  },
                },
              ],
            },
            {
              name: "get",
              description: "Return All Contacts",
              args: {
                name: "id",
                description: "Event id",
              },
              options: [
                {
                  name: "--country",
                  description:
                    "Returns the contacts matching the contact's exact physical addresses",
                },
                {
                  name: "--email",
                  description:
                    "Returns the contacts matching the exact contact's email",
                },
                {
                  name: "--group",
                  description:
                    "Returns the contacts belonging to the Contact Group matching this ID",
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
                },
                {
                  name: "--phone_number",
                  description:
                    "Returns the contacts matching the contact's exact phone number",
                },
                {
                  name: "--postal_code",
                  description:
                    "Returns the contacts matching the contact's exact postal code of one of the contact's addresses",
                },
                {
                  name: "--source",
                  description:
                    "Returns the contacts matching from the address book or auto-generated contacts from emails",
                },
                {
                  name: "--state",
                  description:
                    "Returns the contacts matching the contact's exact state for one of the contact's physical addresses",
                },
                {
                  name: "--street_address",
                  description:
                    "Returns the contacts matching the one of the contact's exact street address",
                },
                {
                  name: "--show_cancelled",
                  description:
                    "Return events that have a status of cancelled. Not for recurring events. Default false",
                },
                {
                  name: "--starts_after",
                  description:
                    "Return events starting after the specified unix timestamp",
                },
                {
                  name: "--starts_before",
                  description:
                    "Return events starting before the specified unix timestamp",
                },
                {
                  name: "--title",
                  description: "Return events matching the specified title",
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
              args: {
                name: "id",
                description: "Event id",
              },
            },
            {
              name: "get",
              description: "Return All Events",
              args: {
                name: "id",
                description: "Event id",
              },
              options: [
                {
                  name: "--calendar_id",
                  description:
                    "Return events belonging to the specified calendar ID",
                },
                {
                  name: "--count",
                  description:
                    "See [Count](/docs/api/#overview--count-view) for more information",
                },
                {
                  name: "--description",
                  description:
                    "Return events matching the specified description",
                },
                {
                  name: "--ends_after",
                  description:
                    "Return events ending after the specified unix timestamp",
                },
                {
                  name: "--ends_before",
                  description:
                    "Return events ending before the specified unix timestamp",
                },
                {
                  name: "--event_id",
                  description:
                    "Return the event matching the specified event ID",
                },
                {
                  name: "--limit",
                  description:
                    "The number of objects to return. Defaults to 100",
                },
                {
                  name: "--location",
                  description: "Return events matching the specified location",
                },
                {
                  name: "--metadata_key ?metadata_key=goodmorning",
                  description: "Pass in your keys to search for metadata",
                },
                {
                  name: "--metadata_pair ?metadata_pair=goodmorning:goodnight",
                  description:
                    "Pass in your metadata key and value pair to search for metadata",
                },
                {
                  name: "--metadata_value ?metadata_value=goodnight",
                  description: "Pass in your value to search for metadata",
                },
                {
                  name: "--offset",
                  description: "Zero-based offset from default object sorting",
                },
                {
                  name: "--show_cancelled",
                  description:
                    "Return events that have a status of cancelled. Not for recurring events. Default false",
                },
                {
                  name: "--starts_after",
                  description:
                    "Return events starting after the specified unix timestamp",
                },
                {
                  name: "--starts_before",
                  description:
                    "Return events starting before the specified unix timestamp",
                },
                {
                  name: "--title",
                  description: "Return events matching the specified title",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Auth your email account",
      args: {
        name: "email_address",
        description: "Email address to authenticate",
      },
    },
    {
      name: "docs",
      description: "Documentation lookup (preview)",
      args: [{ name: "endpoint" }, { name: "http method" }],
    },
    {
      name: "init",
      description: "Setup your dashboard application credentials",
      args: [
        {
          name: "client_id",
        },
        {
          name: "client_secret",
        },
      ],
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
      options: [
        {
          name: "--callback_domain",
          description: "The domain for the callback URL",
        },
        {
          name: "--forward",
          description: "Address to forward requests to",
        },
        {
          name: "--print",
          description: "Prints the (json) payload to the console",
        },
        {
          name: "--triggers",
          description: "The triggers to register for your webhooks",
        },
        {
          name: "--websocket_domain",
          description: "The domain for the websocket server",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for this command",
      isPersistent: true,
    },
    {
      name: ["--display_columns", ""],
      description:
        "(optional) A comma separated list of column headers to display for the table output",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
