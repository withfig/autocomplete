var completionSpec = {
    name: "customer-profiles",
    description: "Amazon Connect Customer Profiles Welcome to the Amazon Connect Customer Profiles API Reference. This guide provides information about the Amazon Connect Customer Profiles API, including supported operations, data types, parameters, and schemas. Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect , you might find it helpful to also review the Amazon Connect Administrator Guide.",
    subcommands: [
        {
            name: "add-profile-key",
            description: "Associates a new key value with a specific profile, such as a Contact Trace Record (CTR) ContactId. A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.",
            options: [
                {
                    name: "--profile-id",
                    description: "The unique identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--key-name",
                    description: "A searchable identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--values",
                    description: "A list of key values.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
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
            name: "create-domain",
            description: "Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations. Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--default-expiration-days",
                    description: "The default number of days until the data within the domain expires.",
                    args: {
                        name: "integer",
                    },
                    isOptional: false,
                },
                {
                    name: "--default-encryption-key",
                    description: "The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--dead-letter-queue-url",
                    description: "The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags used to organize, track, or control access for this resource.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
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
            name: "create-profile",
            description: "Creates a standard profile. A standard profile represents the following attributes for a customer profile in a domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-number",
                    description: "A unique account number that you have given to the customer.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--additional-information",
                    description: "Any additional information relevant to the customer's profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--party-type",
                    description: "The type of profile used to describe the customer.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--business-name",
                    description: "The name of the customer\u2019s business.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--first-name",
                    description: "The customer\u2019s first name.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--middle-name",
                    description: "The customer\u2019s middle name.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--last-name",
                    description: "The customer\u2019s last name.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--birth-date",
                    description: "The customer\u2019s birth date.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--gender",
                    description: "The gender with which the customer identifies.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--phone-number",
                    description: "The customer's phone number, which has not been specified as a mobile, home, or business number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--mobile-phone-number",
                    description: "The customer\u2019s mobile phone number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--home-phone-number",
                    description: "The customer\u2019s home phone number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--business-phone-number",
                    description: "The customer\u2019s business phone number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--email-address",
                    description: "The customer's email address, which has not been specified as a personal or business address.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--personal-email-address",
                    description: "The customer\u2019s personal email address.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--business-email-address",
                    description: "The customer\u2019s business email address.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--address",
                    description: "A generic address associated with the customer that is not mailing, shipping, or billing.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--shipping-address",
                    description: "The customer\u2019s shipping address.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--mailing-address",
                    description: "The customer\u2019s mailing address.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--billing-address",
                    description: "The customer\u2019s billing address.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--attributes",
                    description: "A key value pair of attributes of a customer profile.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
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
            name: "delete-domain",
            description: "Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
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
            name: "delete-integration",
            description: "Removes an integration from a specific domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--uri",
                    description: "The URI of the S3 bucket or any other type of data source.",
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
            name: "delete-profile",
            description: "Deletes the standard customer profile and all data pertaining to the profile.",
            options: [
                {
                    name: "--profile-id",
                    description: "The unique identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
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
            name: "delete-profile-key",
            description: "Removes a searchable key from a customer profile.",
            options: [
                {
                    name: "--profile-id",
                    description: "The unique identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--key-name",
                    description: "A searchable identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--values",
                    description: "A list of key values.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
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
            name: "delete-profile-object",
            description: "Removes an object associated with a profile of a given ProfileObjectType.",
            options: [
                {
                    name: "--profile-id",
                    description: "The unique identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-object-unique-key",
                    description: "The unique identifier of the profile object generated by the service.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
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
            name: "delete-profile-object-type",
            description: "Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
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
            name: "get-domain",
            description: "Returns information about a specific domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "A unique name for the domain.",
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
            name: "get-integration",
            description: "Returns an integration for a domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--uri",
                    description: "The URI of the S3 bucket or any other type of data source.",
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
            name: "get-profile-object-type",
            description: "Returns the object types for a specific domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
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
            name: "get-profile-object-type-template",
            description: "Returns the template information for a specific object type. A template is a predefined ProfileObjectType, such as \u201cSalesforce-Account\u201d or \u201cSalesforce-Contact.\u201d When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.",
            options: [
                {
                    name: "--template-id",
                    description: "A unique identifier for the object template.",
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
            name: "list-account-integrations",
            description: "Lists all of the integrations associated to a specific URI in the AWS account.",
            options: [
                {
                    name: "--uri",
                    description: "The URI of the S3 bucket or any other type of data source.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The pagination token from the previous ListAccountIntegrations API call.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
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
            name: "list-domains",
            description: "Returns a list of all the domains for an AWS account that have been created.",
            options: [
                {
                    name: "--next-token",
                    description: "The pagination token from the previous ListDomain API call.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
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
            name: "list-integrations",
            description: "Lists all of the integrations in your domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The pagination token from the previous ListIntegrations API call.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
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
            name: "list-profile-object-type-templates",
            description: "Lists all of the template information for object types.",
            options: [
                {
                    name: "--next-token",
                    description: "The pagination token from the previous ListObjectTypeTemplates API call.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
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
            name: "list-profile-object-types",
            description: "Lists all of the templates available within the service.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "Identifies the next page of results to return.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
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
            name: "list-profile-objects",
            description: "Returns a list of objects associated with a profile of a given ProfileObjectType.",
            options: [
                {
                    name: "--next-token",
                    description: "The pagination token from the previous call to ListProfileObjects.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-id",
                    description: "The unique identifier of a customer profile.",
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
            name: "list-tags-for-resource",
            description: "Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the resource for which you want to view tags.",
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
            name: "put-integration",
            description: "Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect. An integration can belong to only one domain.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--uri",
                    description: "The URI of the S3 bucket or any other type of data source.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tags used to organize, track, or control access for this resource.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--flow-definition",
                    description: "The configuration that controls how Customer Profiles retrieves data from the source.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
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
            name: "put-profile-object",
            description: "Adds additional objects to customer profiles of a given ObjectType. When adding a specific profile object, like a Contact Trace Record (CTR), an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional CTRs with the same phone number will be mapped to the same inferred profile. When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition. PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.",
            options: [
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--object",
                    description: "A string that is serialized from a JSON object.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
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
            name: "put-profile-object-type",
            description: "Defines a ProfileObjectType.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--object-type-name",
                    description: "The name of the profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "Description of the profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--template-id",
                    description: "A unique identifier for the object template.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--expiration-days",
                    description: "The number of days until the data in the object expires.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--encryption-key",
                    description: "The customer-provided key to encrypt the profile object that will be created in this profile object type.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--allow-profile-creation",
                    description: "Indicates whether a profile should be created when data is received if one doesn\u2019t exist for an object of this type. The default is FALSE. If the AllowProfileCreation flag is set to FALSE, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to TRUE, and if no match is found, then the service creates a new standard profile.",
                },
                {
                    name: "--no-allow-profile-creation",
                    description: "Indicates whether a profile should be created when data is received if one doesn\u2019t exist for an object of this type. The default is FALSE. If the AllowProfileCreation flag is set to FALSE, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to TRUE, and if no match is found, then the service creates a new standard profile.",
                },
                {
                    name: "--fields",
                    description: "A map of the name and ObjectType field.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--keys",
                    description: "A list of unique keys that can be used to map data to the profile.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags used to organize, track, or control access for this resource.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
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
            name: "search-profiles",
            description: "Searches for profiles within a specific domain name using name, phone number, email address, account number, or a custom defined index.",
            options: [
                {
                    name: "--next-token",
                    description: "The pagination token from the previous SearchProfiles API call.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of objects returned per page.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--key-name",
                    description: "A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _zendeskUserId, _zendeskExternalId, _serviceNowSystemId.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--values",
                    description: "A list of key values.",
                    args: {
                        name: "list",
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
            name: "tag-resource",
            description: "Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the resource that you're adding tags to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tags used to organize, track, or control access for this resource.",
                    args: {
                        name: "map",
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
            name: "untag-resource",
            description: "Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the resource from which you are removing tags.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "The list of tag keys to remove from the resource.",
                    args: {
                        name: "list",
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
            name: "update-domain",
            description: "Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key. Once a domain is created, the name can\u2019t be changed.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name for the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--default-expiration-days",
                    description: "The default number of days until the data within the domain expires.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--default-encryption-key",
                    description: "The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--dead-letter-queue-url",
                    description: "The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tags used to organize, track, or control access for this resource.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
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
            name: "update-profile",
            description: "Updates the properties of a profile. The ProfileId is required for updating a customer profile. When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.",
            options: [
                {
                    name: "--domain-name",
                    description: "The unique name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-id",
                    description: "The unique identifier of a customer profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--additional-information",
                    description: "Any additional information relevant to the customer's profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--account-number",
                    description: "A unique account number that you have given to the customer.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--party-type",
                    description: "The type of profile used to describe the customer.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--business-name",
                    description: "The name of the customer\u2019s business.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--first-name",
                    description: "The customer\u2019s first name.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--middle-name",
                    description: "The customer\u2019s middle name.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--last-name",
                    description: "The customer\u2019s last name.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--birth-date",
                    description: "The customer\u2019s birth date.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--gender",
                    description: "The gender with which the customer identifies.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--phone-number",
                    description: "The customer's phone number, which has not been specified as a mobile, home, or business number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--mobile-phone-number",
                    description: "The customer\u2019s mobile phone number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--home-phone-number",
                    description: "The customer\u2019s home phone number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--business-phone-number",
                    description: "The customer\u2019s business phone number.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--email-address",
                    description: "The customer's email address, which has not been specified as a personal or business address.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--personal-email-address",
                    description: "The customer\u2019s personal email address.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--business-email-address",
                    description: "The customer\u2019s business email address.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--address",
                    description: "A generic address associated with the customer that is not mailing, shipping, or billing.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--shipping-address",
                    description: "The customer\u2019s shipping address.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--mailing-address",
                    description: "The customer\u2019s mailing address.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--billing-address",
                    description: "The customer\u2019s billing address.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--attributes",
                    description: "A key value pair of attributes of a customer profile.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
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

