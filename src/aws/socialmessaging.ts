const completionSpec: Fig.Spec = {
  name: "socialmessaging",
  description:
    "Amazon Web Services End User Messaging Social, also referred to as Social messaging, is a messaging service that enables application developers to incorporate WhatsApp into their existing workflows. The Amazon Web Services End User Messaging Social API provides information about the Amazon Web Services End User Messaging Social API resources, including supported HTTP methods, parameters, and schemas. The Amazon Web Services End User Messaging Social API provides programmatic access to options that are unique to the WhatsApp Business Platform. If you're new to the Amazon Web Services End User Messaging Social API, it's also helpful to review What is Amazon Web Services End User Messaging Social in the Amazon Web Services End User Messaging Social User Guide. The Amazon Web Services End User Messaging Social User Guide provides tutorials, code samples, and procedures that demonstrate how to use Amazon Web Services End User Messaging Social API features programmatically and how to integrate functionality into applications. The guide also provides key information, such as integration with other Amazon Web Services services, and the quotas that apply to use of the service.  Regional availability  The Amazon Web Services End User Messaging Social API is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see Amazon Web Services Service Endpoints and Amazon Web Services End User Messaging endpoints and quotas in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see Managing Amazon Web Services Regions in the Amazon Web Services General Reference. In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see Amazon Web Services Global Infrastructure",
  subcommands: [
    {
      name: "associate-whatsapp-business-account",
      description:
        "This is only used through the Amazon Web Services console during sign-up to associate your WhatsApp Business Account to your Amazon Web Services account",
      options: [
        {
          name: "--signup-callback",
          description: "Contains the callback access token",
          args: {
            name: "structure",
          },
        },
        {
          name: "--setup-finalization",
          description:
            "A JSON object that contains the phone numbers and WhatsApp Business Account to link to your account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-whatsapp-media-message",
      description:
        "Delete a media object from the WhatsApp service. If the object is still in an Amazon S3 bucket you should delete it from there too",
      options: [
        {
          name: "--media-id",
          description:
            "The unique identifier of the media file to delete. Use the mediaId returned from PostWhatsAppMessageMedia",
          args: {
            name: "string",
          },
        },
        {
          name: "--origination-phone-number-id",
          description:
            "The unique identifier of the originating phone number associated with the media. Phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-whatsapp-business-account",
      description:
        "Disassociate a WhatsApp Business Account (WABA) from your Amazon Web Services account",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of your WhatsApp Business Account. WABA identifiers are formatted as waba-01234567890123456789012345678901. Use ListLinkedWhatsAppBusinessAccounts to list all WABAs and their details",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-linked-whatsapp-business-account",
      description: "Get the details of your linked WhatsApp Business Account",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier, from Amazon Web Services, of the linked WhatsApp Business Account. WABA identifiers are formatted as waba-01234567890123456789012345678901. Use ListLinkedWhatsAppBusinessAccounts to list all WABAs and their details",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-linked-whatsapp-business-account-phone-number",
      description:
        "Use your WhatsApp phone number id to get the WABA account id and phone number details",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of the phone number. Phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-whatsapp-message-media",
      description:
        "Get a media file from the WhatsApp service. On successful completion the media file is retrieved from Meta and stored in the specified Amazon S3 bucket. Use either destinationS3File or destinationS3PresignedUrl for the destination. If both are used then an InvalidParameterException is returned",
      options: [
        {
          name: "--media-id",
          description: "The unique identifier for the media file",
          args: {
            name: "string",
          },
        },
        {
          name: "--origination-phone-number-id",
          description:
            "The unique identifier of the originating phone number for the WhatsApp message media. The phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-only",
          description: "Set to True to get only the metadata for the file",
        },
        {
          name: "--no-metadata-only",
          description: "Set to True to get only the metadata for the file",
        },
        {
          name: "--destination-s3-presigned-url",
          description: "The presign url of the media file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-s3-file",
          description: "The bucketName and key of the S3 media file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-linked-whatsapp-business-accounts",
      description:
        "List all WhatsApp Business Accounts linked to your Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description: "The next token for pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "List all tags associated with a resource, such as a phone number or WABA",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to retrieve the tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "post-whatsapp-message-media",
      description:
        "Upload a media file to the WhatsApp service. Only the specified originationPhoneNumberId has the permissions to send the media file when using SendWhatsAppMessage. You must use either sourceS3File or sourceS3PresignedUrl for the source. If both or neither are specified then an InvalidParameterException is returned",
      options: [
        {
          name: "--origination-phone-number-id",
          description:
            "The ID of the phone number to associate with the WhatsApp media file. The phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-s3-presigned-url",
          description: "The source presign url of the media file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-s3-file",
          description: "The source S3 url for the media file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-whatsapp-business-account-event-destinations",
      description:
        "Add an event destination to log event data from WhatsApp for a WhatsApp Business Account (WABA). A WABA can only have one event destination at a time. All resources associated with the WABA use the same event destination",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of your WhatsApp Business Account. WABA identifiers are formatted as waba-01234567890123456789012345678901. Use ListLinkedWhatsAppBusinessAccounts to list all WABAs and their details",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-destinations",
          description:
            "An array of WhatsAppBusinessAccountEventDestination event destinations",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "send-whatsapp-message",
      description:
        "Send a WhatsApp message. For examples of sending a message using the Amazon Web Services CLI, see Sending messages in the  Amazon Web Services End User Messaging Social User Guide",
      options: [
        {
          name: "--origination-phone-number-id",
          description:
            "The ID of the phone number used to send the WhatsApp message. If you are sending a media file only the originationPhoneNumberId used to upload the file can be used. Phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id",
          args: {
            name: "string",
          },
        },
        {
          name: "--message",
          description:
            "The message to send through WhatsApp. The length is in KB. The message field passes through a WhatsApp Message object, see Messages in the WhatsApp Business Platform Cloud API Reference",
          args: {
            name: "blob",
          },
        },
        {
          name: "--meta-api-version",
          description:
            "The API version for the request formatted as v{VersionNumber}. For a list of supported API versions and Amazon Web Services Regions, see  Amazon Web Services End User Messaging Social API Service Endpoints in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Adds or overwrites only the specified tags for the specified resource. When you specify an existing tag key, the value is overwritten with the new value",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to add to the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Removes the specified tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove from the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
