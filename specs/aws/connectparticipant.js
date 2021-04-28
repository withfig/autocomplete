var completionSpec = {
    name: "connectparticipant",
    description: "Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale. Amazon Connect enables customer contacts through voice or chat. The APIs described here are used by chat participants, such as agents and customers.",
    subcommands: [
        {
            name: "complete-attachment-upload",
            description: "Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API.",
            options: [
                {
                    name: "--attachment-ids",
                    description: "A list of unique identifiers for the attachments.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the participant's connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "create-participant-connection",
            description: 'Creates the participant\'s connection. Note that ParticipantToken is used for invoking this API instead of ConnectionToken. The participant token is valid for the lifetime of the participant \u2013 until they are part of a contact. The response URL for WEBSOCKET Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic.  For chat, you need to publish the following on the established websocket connection:  {"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}  Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.  The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.',
            options: [
                {
                    name: "--type",
                    description: "Type of connection information required.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--participant-token",
                    description: "This is a header parameter. The Participant Token as obtained from StartChatContact API response.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "disconnect-participant",
            description: "Disconnects a participant. Note that ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.",
            options: [
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the participant's connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-attachment",
            description: "Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.",
            options: [
                {
                    name: "--attachment-id",
                    description: "A unique identifier for the attachment.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the participant's connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-transcript",
            description: "Retrieves a transcript of the session, including details about any attachments. Note that ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.",
            options: [
                {
                    name: "--contact-id",
                    description: "The contactId from the current contact chain for which transcript is needed.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return in the page. Default: 10.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--scan-direction",
                    description: "The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--sort-order",
                    description: "The sort order for the records. Default: DESCENDING.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--start-position",
                    description: "A filtering option for where to start.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the participant's connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "send-event",
            description: "Sends an event. Note that ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.",
            options: [
                {
                    name: "--content-type",
                    description: "The content type of the request. Supported types are:   application/vnd.amazonaws.connect.event.typing   application/vnd.amazonaws.connect.event.connection.acknowledged",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--content",
                    description: "The content of the event to be sent (for example, message text). This is not yet supported.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the participant's connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "send-message",
            description: "Sends a message. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.  The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.",
            options: [
                {
                    name: "--content-type",
                    description: "The type of the content. Supported types are text/plain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--content",
                    description: "The content of the message.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "start-attachment-upload",
            description: "Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.",
            options: [
                {
                    name: "--content-type",
                    description: "Describes the MIME file type of the attachment. For a list of supported file types, see Feature specifications in the Amazon Connect Administrator Guide.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--attachment-size-in-bytes",
                    description: "The size of the attachment in bytes.",
                    args: {
                        name: "long",
                    },
                    isOptional: false,
                },
                {
                    name: "--attachment-name",
                    description: "A case-sensitive name of the attachment being uploaded.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-token",
                    description: "A unique case sensitive identifier to support idempotency of request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--connection-token",
                    description: "The authentication token associated with the participant's connection.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
    ],
};

