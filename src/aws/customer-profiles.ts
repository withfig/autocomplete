const completionSpec: Fig.Spec = {
  name: "customer-profiles",
  description:
    "Amazon Connect Customer Profiles    Customer Profiles actions     Customer Profiles data types    Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center.  For more information about the Amazon Connect Customer Profiles feature, see Use Customer Profiles in the Amazon Connect Administrator's Guide",
  subcommands: [
    {
      name: "add-profile-key",
      description:
        "Associates a new key value with a specific profile, such as a Contact Record ContactId. A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to",
      options: [
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-name",
          description:
            "A searchable identifier of a customer profile. The predefined keys you can use include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description: "A list of key values",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "batch-get-calculated-attribute-for-profile",
      description:
        "Fetch the possible attribute values given the attribute name",
      options: [
        {
          name: "--calculated-attribute-name",
          description: "The unique name of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-ids",
          description:
            "List of unique identifiers for customer profiles to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--condition-overrides",
          description:
            "Overrides the condition block within the original calculated attribute definition",
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
      name: "batch-get-profile",
      description: "Get a batch of profiles",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-ids",
          description:
            "List of unique identifiers for customer profiles to retrieve",
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
      name: "create-calculated-attribute-definition",
      description:
        "Creates a new calculated attribute definition. After creation, new object data ingested into Customer Profiles will be included in the calculated attribute, which can be retrieved for a profile using the GetCalculatedAttributeForProfile API. Defining a calculated attribute makes it available for all profiles within a domain. Each calculated attribute can only reference one ObjectType and at most, two fields from that ObjectType",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--calculated-attribute-name",
          description: "The unique name of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The display name of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-details",
          description:
            "Mathematical expression and a list of attribute items specified in that expression",
          args: {
            name: "structure",
          },
        },
        {
          name: "--conditions",
          description:
            "The conditions including range, object count, and threshold for the calculated attribute",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter",
          description:
            "Defines how to filter incoming objects to include part of the Calculated Attribute",
          args: {
            name: "structure",
          },
        },
        {
          name: "--statistic",
          description:
            "The aggregation operation to perform for the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "create-domain",
      description:
        "Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain. Use this API or UpdateDomain to enable identity resolution: set Matching to true. To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should apply.   It is not possible to associate a Customer Profiles domain with an Amazon Connect Instance directly from the API. If you would like to create a domain and associate a Customer Profiles domain, use the Amazon Connect admin website. For more information, see Enable Customer Profiles. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-expiration-days",
          description:
            "The default number of days until the data within the domain expires",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-encryption-key",
          description:
            "The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage",
          args: {
            name: "string",
          },
        },
        {
          name: "--dead-letter-queue-url",
          description:
            "The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue",
          args: {
            name: "string",
          },
        },
        {
          name: "--matching",
          description:
            "The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.  After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rule-based-matching",
          description:
            "The process of matching duplicate profiles using the Rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "create-event-stream",
      description:
        "Creates an event stream, which is a subscription to real-time events, such as when profiles are created and updated through Amazon Connect Customer Profiles. Each event stream can be associated with only one Kinesis Data Stream destination in the same region and Amazon Web Services account as the customer profiles domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-stream-name",
          description: "The name of the event stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "create-event-trigger",
      description:
        "Creates an event trigger, which specifies the rules when to perform action based on customer's ingested data. Each event stream can be associated with only one integration in the same region and AWS account as the event stream",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-name",
          description: "The unique name of the event trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The unique name of the object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the event trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-conditions",
          description:
            "A list of conditions that determine when an event should trigger the destination",
          args: {
            name: "list",
          },
        },
        {
          name: "--segment-filter",
          description:
            "The destination is triggered only for profiles that meet the criteria of a segment definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-limits",
          description:
            "Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "An array of key-value pairs to apply to this resource",
          args: {
            name: "map",
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
      name: "create-integration-workflow",
      description:
        "Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description:
            "The type of workflow. The only supported value is APPFLOW_INTEGRATION",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-config",
          description: "Configuration data for integration workflow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "create-profile",
      description:
        "Creates a standard profile. A standard profile represents the following attributes for a customer profile in a domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-number",
          description: "An account number that you have given to the customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-information",
          description:
            "Any additional information relevant to the customer\u2019s profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--party-type",
          description: "The type of profile used to describe the customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--business-name",
          description: "The name of the customer\u2019s business",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "The customer\u2019s first name",
          args: {
            name: "string",
          },
        },
        {
          name: "--middle-name",
          description: "The customer\u2019s middle name",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "The customer\u2019s last name",
          args: {
            name: "string",
          },
        },
        {
          name: "--birth-date",
          description: "The customer\u2019s birth date",
          args: {
            name: "string",
          },
        },
        {
          name: "--gender",
          description: "The gender with which the customer identifies",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number",
          description:
            "The customer\u2019s phone number, which has not been specified as a mobile, home, or business number",
          args: {
            name: "string",
          },
        },
        {
          name: "--mobile-phone-number",
          description: "The customer\u2019s mobile phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-phone-number",
          description: "The customer\u2019s home phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--business-phone-number",
          description: "The customer\u2019s business phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address",
          description:
            "The customer\u2019s email address, which has not been specified as a personal or business address",
          args: {
            name: "string",
          },
        },
        {
          name: "--personal-email-address",
          description: "The customer\u2019s personal email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--business-email-address",
          description: "The customer\u2019s business email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--address",
          description:
            "A generic address associated with the customer that is not mailing, shipping, or billing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--shipping-address",
          description: "The customer\u2019s shipping address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mailing-address",
          description: "The customer\u2019s mailing address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--billing-address",
          description: "The customer\u2019s billing address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--attributes",
          description: "A key value pair of attributes of a customer profile",
          args: {
            name: "map",
          },
        },
        {
          name: "--party-type-string",
          description:
            "An alternative to PartyType which accepts any string as input",
          args: {
            name: "string",
          },
        },
        {
          name: "--gender-string",
          description:
            "An alternative to Gender which accepts any string as input",
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
      name: "create-segment-definition",
      description:
        "Creates a segment definition associated to the given domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-definition-name",
          description: "The unique name of the segment definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The display name of the segment definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the segment definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-groups",
          description:
            "Specifies the base segments and dimensions for a segment definition along with their respective relationship",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "create-segment-estimate",
      description: "Creates a segment estimate query",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-query",
          description: "The segment query for calculating a segment estimate",
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
      name: "create-segment-snapshot",
      description:
        "Triggers a job to export a segment to a specified destination",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-definition-name",
          description:
            "The name of the segment definition used in this snapshot request",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-format",
          description: "The format in which the segment will be exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-key",
          description:
            "The Amazon Resource Name (ARN) of the KMS key used to encrypt the exported segment",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that allows Customer Profiles service principal to assume the role for conducting KMS and S3 operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-uri",
          description:
            "The destination to which the segment will be exported. This field must be provided if the request is not submitted from the Amazon Connect Admin Website",
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
      name: "delete-calculated-attribute-definition",
      description:
        "Deletes an existing calculated attribute definition. Note that deleting a default calculated attribute is possible, however once deleted, you will be unable to undo that action and will need to recreate it on your own using the CreateCalculatedAttributeDefinition API if you want it back",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--calculated-attribute-name",
          description: "The unique name of the calculated attribute",
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
      name: "delete-domain",
      description:
        "Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "delete-event-stream",
      description: "Disables and deletes the specified event stream",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-stream-name",
          description: "The name of the event stream",
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
      name: "delete-event-trigger",
      description:
        "Disable and deletes the Event Trigger.  You cannot delete an Event Trigger with an active Integration associated",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-name",
          description: "The unique name of the event trigger",
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
      name: "delete-integration",
      description: "Removes an integration from a specific domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The URI of the S3 bucket or any other type of data source",
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
      name: "delete-profile",
      description:
        "Deletes the standard customer profile and all data pertaining to the profile",
      options: [
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "delete-profile-key",
      description: "Removes a searchable key from a customer profile",
      options: [
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-name",
          description: "A searchable identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description: "A list of key values",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "delete-profile-object",
      description:
        "Removes an object associated with a profile of a given ProfileObjectType",
      options: [
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-object-unique-key",
          description:
            "The unique identifier of the profile object generated by the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "delete-profile-object-type",
      description:
        "Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
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
      name: "delete-segment-definition",
      description: "Deletes a segment definition from the domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-definition-name",
          description: "The unique name of the segment definition",
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
      name: "delete-workflow",
      description:
        "Deletes the specified workflow and all its corresponding resources. This is an async process",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "Unique identifier for the workflow",
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
      name: "detect-profile-object-type",
      description:
        "The process of detecting profile object type mapping by using given objects",
      options: [
        {
          name: "--objects",
          description: "A string that is serialized from a JSON object",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "get-auto-merging-preview",
      description:
        "Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list.  You can't view which profiles are matched and would be merged.  We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include at least two matching attributes. If your matching list includes too few attributes (such as only FirstName or only LastName), there may be a large number of matches. This increases the chances of erroneous merges",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--consolidation",
          description:
            "A list of matching attributes that represent matching criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--conflict-resolution",
          description:
            "How the auto-merging process should resolve conflicts between different profiles",
          args: {
            name: "structure",
          },
        },
        {
          name: "--min-allowed-confidence-score-for-merging",
          description:
            "Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process",
          args: {
            name: "double",
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
      name: "get-calculated-attribute-definition",
      description:
        "Provides more information on a calculated attribute definition for Customer Profiles",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--calculated-attribute-name",
          description: "The unique name of the calculated attribute",
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
      name: "get-calculated-attribute-for-profile",
      description: "Retrieve a calculated attribute for a customer profile",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--calculated-attribute-name",
          description: "The unique name of the calculated attribute",
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
      name: "get-domain",
      description: "Returns information about a specific domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "get-event-stream",
      description:
        "Returns information about the specified event stream in a specific domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-stream-name",
          description:
            "The name of the event stream provided during create operations",
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
      name: "get-event-trigger",
      description: "Get a specific Event Trigger from the domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-name",
          description: "The unique name of the event trigger",
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
      name: "get-identity-resolution-job",
      description:
        "Returns information about an Identity Resolution Job in a specific domain.  Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see Use Identity Resolution to consolidate similar profiles",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The unique identifier of the Identity Resolution Job",
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
      name: "get-integration",
      description: "Returns an integration for a domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The URI of the S3 bucket or any other type of data source",
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
      name: "get-matches",
      description:
        "Before calling this API, use CreateDomain or UpdateDomain to enable identity resolution: set Matching to true. GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process.   The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.  After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3.  Amazon Connect uses the following profile attributes to identify matches:   PhoneNumber   HomePhoneNumber   BusinessPhoneNumber   MobilePhoneNumber   EmailAddress   PersonalEmailAddress   BusinessEmailAddress   FullName   For example, two or more profiles\u2014with spelling mistakes such as John Doe and Jhn Doe, or different casing email addresses such as JOHN_DOE@ANYCOMPANY.COM and johndoe@anycompany.com, or different phone number formats such as 555-010-0000 and +1-555-010-0000\u2014can be detected as belonging to the same customer John Doe and merged into a unified profile",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "get-profile-object-type",
      description: "Returns the object types for a specific domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
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
      name: "get-profile-object-type-template",
      description:
        "Returns the template information for a specific object type. A template is a predefined ProfileObjectType, such as \u201cSalesforce-Account\u201d or \u201cSalesforce-Contact.\u201d When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template",
      options: [
        {
          name: "--template-id",
          description: "A unique identifier for the object template",
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
      name: "get-segment-definition",
      description: "Gets a segment definition from the domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-definition-name",
          description: "The unique name of the segment definition",
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
      name: "get-segment-estimate",
      description: "Gets the result of a segment estimate query",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--estimate-id",
          description:
            "The query Id passed by a previous CreateSegmentEstimate operation",
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
      name: "get-segment-membership",
      description: "Determines if the given profiles are within a segment",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-definition-name",
          description:
            "The Id of the wanted segment. Needs to be a valid, and existing segment Id",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-ids",
          description: "The list of profile IDs to query for",
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
      name: "get-segment-snapshot",
      description: "Retrieve the latest status of a segment snapshot",
      options: [
        {
          name: "--domain-name",
          description: "The unique identifier of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-definition-name",
          description: "The unique name of the segment definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-id",
          description: "The unique identifier of the segment snapshot",
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
      name: "get-similar-profiles",
      description:
        "Returns a set of profiles that belong to the same matching group using the matchId or profileId. You can also specify the type of matching that you want for finding similar profiles using either RULE_BASED_MATCHING or ML_BASED_MATCHING",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous GetSimilarProfiles API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--match-type",
          description:
            "Specify the type of matching to get similar profiles for",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-key",
          description: "The string indicating the search key to be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-value",
          description:
            "The string based on SearchKey to be searched for similar profiles",
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
      name: "get-workflow",
      description: "Get details of specified workflow",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "Unique identifier for the workflow",
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
      name: "get-workflow-steps",
      description: "Get granular list of steps in workflow",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "Unique identifier for the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-account-integrations",
      description:
        "Lists all of the integrations associated to a specific URI in the AWS account",
      options: [
        {
          name: "--uri",
          description:
            "The URI of the S3 bucket or any other type of data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from the previous ListAccountIntegrations API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-hidden",
          description:
            "Boolean to indicate if hidden integration should be returned. Defaults to False",
        },
        {
          name: "--no-include-hidden",
          description:
            "Boolean to indicate if hidden integration should be returned. Defaults to False",
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
      name: "list-calculated-attribute-definitions",
      description:
        "Lists calculated attribute definitions for Customer Profiles",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from the previous call to ListCalculatedAttributeDefinitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of calculated attribute definitions returned per page",
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
      name: "list-calculated-attributes-for-profile",
      description:
        "Retrieve a list of calculated attributes for a customer profile",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous call to ListCalculatedAttributesForProfile",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of calculated attributes returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
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
      name: "list-domains",
      description:
        "Returns a list of all the domains for an AWS account that have been created",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous ListDomain API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
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
      name: "list-event-streams",
      description:
        "Returns a list of all the event streams in a specific domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
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
      name: "list-event-triggers",
      description: "List all Event Triggers under a domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token to use with ListEventTriggers",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-identity-resolution-jobs",
      description:
        "Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by JobStartTime",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-integrations",
      description: "Lists all of the integrations in your domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token from the previous ListIntegrations API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-hidden",
          description:
            "Boolean to indicate if hidden integration should be returned. Defaults to False",
        },
        {
          name: "--no-include-hidden",
          description:
            "Boolean to indicate if hidden integration should be returned. Defaults to False",
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
      name: "list-object-type-attributes",
      description:
        "Fetch the possible attribute values given the attribute name",
      options: [
        {
          name: "--next-token",
          description: "The pagination token from the previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique identifier of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
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
      name: "list-profile-attribute-values",
      description:
        "Fetch the possible attribute values given the attribute name",
      options: [
        {
          name: "--domain-name",
          description: "The unique identifier of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description: "The attribute name",
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
      name: "list-profile-object-type-templates",
      description: "Lists all of the template information for object types",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous ListObjectTypeTemplates API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
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
      name: "list-profile-object-types",
      description: "Lists all of the templates available within the service",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "Identifies the next page of results to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
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
      name: "list-profile-objects",
      description:
        "Returns a list of objects associated with a profile of a given ProfileObjectType",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous call to ListProfileObjects",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-filter",
          description:
            "Applies a filter to the response to include profile objects with the specified index values",
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
      name: "list-rule-based-matches",
      description: "Returns a set of MatchIds that belong to the given domain",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous ListRuleBasedMatches API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of MatchIds returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "list-segment-definitions",
      description: "Lists all segment definitions under a domain",
      options: [
        {
          name: "--domain-name",
          description: "The unique identifier of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token from the previous call",
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
        "Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource for which you want to view tags",
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
      name: "list-workflows",
      description: "Query to list all workflows",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description:
            "The type of workflow. The only supported value is APPFLOW_INTEGRATION",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Status of workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-start-date",
          description: "Retrieve workflows started after timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--query-end-date",
          description: "Retrieve workflows ended after timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "merge-profiles",
      description:
        'Runs an AWS Lambda job that does the following:   All the profileKeys in the ProfileToBeMerged will be moved to the main profile.   All the objects in the ProfileToBeMerged will be moved to the main profile.   All the ProfileToBeMerged will be deleted at the end.   All the profileKeys in the ProfileIdsToBeMerged will be moved to the main profile.   Standard fields are merged as follows:   Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.   When there are conflicting fields:   If no SourceProfileIds entry is specified, the main Profile value is always taken.    If a SourceProfileIds entry is specified, the specified profileId is always taken, even if it is a NULL value.       You can use MergeProfiles together with GetMatches, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged)',
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--main-profile-id",
          description: "The identifier of the profile to be taken",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-ids-to-be-merged",
          description:
            "The identifier of the profile to be merged into MainProfileId",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-source-profile-ids",
          description:
            "The identifiers of the fields in the profile that has the information you want to apply to the merge. For example, say you want to merge EmailAddress from Profile1 into MainProfile. This would be the identifier of the EmailAddress field in Profile1",
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
      name: "put-integration",
      description:
        "Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect. An integration can belong to only one domain. To add or remove tags on an existing Integration, see  TagResource / UntagResource",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--uri",
          description:
            "The URI of the S3 bucket or any other type of data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--flow-definition",
          description:
            "The configuration that controls how Customer Profiles retrieves data from the source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--object-type-names",
          description:
            "A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an ObjectTypeName (template) used to ingest the event. It supports the following event types: SegmentIdentify, ShopifyCreateCustomers, ShopifyUpdateCustomers, ShopifyCreateDraftOrders, ShopifyUpdateDraftOrders, ShopifyCreateOrders, and ShopifyUpdatedOrders",
          args: {
            name: "map",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make Customer Profiles requests on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-names",
          description:
            "A list of unique names for active event triggers associated with the integration",
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
      name: "put-profile-object",
      description:
        "Adds additional objects to customer profiles of a given ObjectType. When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile. When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition. PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType",
      options: [
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--object",
          description: "A string that is serialized from a JSON object",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
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
      name: "put-profile-object-type",
      description:
        "Defines a ProfileObjectType. To add or remove tags on an existing ObjectType, see  TagResource/UntagResource",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The name of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Description of the profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description:
            "A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a BadRequestException. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a BadRequestException",
          args: {
            name: "string",
          },
        },
        {
          name: "--expiration-days",
          description:
            "The number of days until the data in the object expires",
          args: {
            name: "integer",
          },
        },
        {
          name: "--encryption-key",
          description:
            "The customer-provided key to encrypt the profile object that will be created in this profile object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-profile-creation",
          description:
            "Indicates whether a profile should be created when data is received if one doesn\u2019t exist for an object of this type. The default is FALSE. If the AllowProfileCreation flag is set to FALSE, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to TRUE, and if no match is found, then the service creates a new standard profile",
        },
        {
          name: "--no-allow-profile-creation",
          description:
            "Indicates whether a profile should be created when data is received if one doesn\u2019t exist for an object of this type. The default is FALSE. If the AllowProfileCreation flag is set to FALSE, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to TRUE, and if no match is found, then the service creates a new standard profile",
        },
        {
          name: "--source-last-updated-timestamp-format",
          description:
            "The format of your sourceLastUpdatedTimestamp that was previously set up",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-profile-object-count",
          description:
            "The amount of profile object max count assigned to the object type",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fields",
          description: "A map of the name and ObjectType field",
          args: {
            name: "map",
          },
        },
        {
          name: "--keys",
          description:
            "A list of unique keys that can be used to map data to the profile",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "search-profiles",
      description:
        "Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a KeyName and Values list. This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either AND or OR logic",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token from the previous SearchProfiles API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects returned per page. The default is 20 if this parameter is not included in the request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-name",
          description:
            "A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description: "A list of key values",
          args: {
            name: "list",
          },
        },
        {
          name: "--additional-search-keys",
          description:
            "A list of AdditionalSearchKey objects that are each searchable identifiers of a profile. Each AdditionalSearchKey object contains a KeyName and a list of Values associated with that specific key (i.e., a key-value(s) pair). These additional search keys will be used in conjunction with the LogicalOperator and the required KeyName and Values parameters to search for profiles that satisfy the search criteria",
          args: {
            name: "list",
          },
        },
        {
          name: "--logical-operator",
          description:
            "Relationship between all specified search keys that will be used to search for profiles. This includes the required KeyName and Values parameters as well as any key-value(s) pairs specified in the AdditionalSearchKeys list. This parameter influences which profiles will be returned in the response in the following manner:    AND - The response only includes profiles that match all of the search keys.    OR - The response includes profiles that match at least one of the search keys.   The OR relationship is the default behavior if this parameter is not included in the request",
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
        "Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource that you're adding tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      description:
        "Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource from which you are removing tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
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
      name: "update-calculated-attribute-definition",
      description:
        "Updates an existing calculated attribute definition. When updating the Conditions, note that increasing the date range of a calculated attribute will not trigger inclusion of historical data greater than the current date range",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--calculated-attribute-name",
          description: "The unique name of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The display name of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the calculated attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--conditions",
          description:
            "The conditions including range, object count, and threshold for the calculated attribute",
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
      name: "update-domain",
      description:
        "Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key. After a domain is created, the name can\u2019t be changed. Use this API or CreateDomain to enable identity resolution: set Matching to true. To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should apply.  To add or remove tags on an existing Domain, see TagResource/UntagResource",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-expiration-days",
          description:
            "The default number of days until the data within the domain expires",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-encryption-key",
          description:
            "The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value",
          args: {
            name: "string",
          },
        },
        {
          name: "--dead-letter-queue-url",
          description:
            "The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue",
          args: {
            name: "string",
          },
        },
        {
          name: "--matching",
          description:
            "The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.  After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rule-based-matching",
          description:
            "The process of matching duplicate profiles using the rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags used to organize, track, or control access for this resource",
          args: {
            name: "map",
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
      name: "update-event-trigger",
      description: "Update the properties of an Event Trigger",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-name",
          description: "The unique name of the event trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-type-name",
          description: "The unique name of the object type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the event trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-conditions",
          description:
            "A list of conditions that determine when an event should trigger the destination",
          args: {
            name: "list",
          },
        },
        {
          name: "--segment-filter",
          description:
            "The destination is triggered only for profiles that meet the criteria of a segment definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-trigger-limits",
          description:
            "Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods",
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
      name: "update-profile",
      description:
        "Updates the properties of a profile. The ProfileId is required for updating a customer profile. When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept",
      options: [
        {
          name: "--domain-name",
          description: "The unique name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The unique identifier of a customer profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-information",
          description:
            "Any additional information relevant to the customer\u2019s profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-number",
          description: "An account number that you have given to the customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--party-type",
          description: "The type of profile used to describe the customer",
          args: {
            name: "string",
          },
        },
        {
          name: "--business-name",
          description: "The name of the customer\u2019s business",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "The customer\u2019s first name",
          args: {
            name: "string",
          },
        },
        {
          name: "--middle-name",
          description: "The customer\u2019s middle name",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "The customer\u2019s last name",
          args: {
            name: "string",
          },
        },
        {
          name: "--birth-date",
          description: "The customer\u2019s birth date",
          args: {
            name: "string",
          },
        },
        {
          name: "--gender",
          description: "The gender with which the customer identifies",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number",
          description:
            "The customer\u2019s phone number, which has not been specified as a mobile, home, or business number",
          args: {
            name: "string",
          },
        },
        {
          name: "--mobile-phone-number",
          description: "The customer\u2019s mobile phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-phone-number",
          description: "The customer\u2019s home phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--business-phone-number",
          description: "The customer\u2019s business phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address",
          description:
            "The customer\u2019s email address, which has not been specified as a personal or business address",
          args: {
            name: "string",
          },
        },
        {
          name: "--personal-email-address",
          description: "The customer\u2019s personal email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--business-email-address",
          description: "The customer\u2019s business email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--address",
          description:
            "A generic address associated with the customer that is not mailing, shipping, or billing",
          args: {
            name: "structure",
          },
        },
        {
          name: "--shipping-address",
          description: "The customer\u2019s shipping address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mailing-address",
          description: "The customer\u2019s mailing address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--billing-address",
          description: "The customer\u2019s billing address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--attributes",
          description: "A key value pair of attributes of a customer profile",
          args: {
            name: "map",
          },
        },
        {
          name: "--party-type-string",
          description:
            "An alternative to PartyType which accepts any string as input",
          args: {
            name: "string",
          },
        },
        {
          name: "--gender-string",
          description:
            "An alternative to Gender which accepts any string as input",
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
  ],
};
export default completionSpec;
