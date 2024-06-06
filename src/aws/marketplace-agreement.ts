const completionSpec: Fig.Spec = {
  name: "marketplace-agreement",
  description:
    "AWS Marketplace is a curated digital catalog that customers can use to find, buy, deploy, and manage third-party software, data, and services to build solutions and run their businesses. The AWS Marketplace Agreement Service provides an API interface that helps AWS Marketplace sellers manage their product-related agreements, including listing, searching, and filtering agreements. To manage agreements in AWS Marketplace, you must ensure that your AWS Identity and Access Management (IAM) policies and roles are set up. The user must have the required policies/permissions that allow them to carry out the actions in AWS:    DescribeAgreement \u2013 Grants permission to users to obtain detailed meta data about any of their agreements.    GetAgreementTerms \u2013 Grants permission to users to obtain details about the terms of an agreement.    SearchAgreements \u2013 Grants permission to users to search through all their agreements",
  subcommands: [
    {
      name: "describe-agreement",
      description:
        "Provides details about an agreement, such as the proposer, acceptor, start date, and end date",
      options: [
        {
          name: "--agreement-id",
          description: "The unique identifier of the agreement",
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
      name: "get-agreement-terms",
      description:
        "Obtains details about the terms in an agreement that you participated in as proposer or acceptor. The details include:    TermType \u2013 The type of term, such as LegalTerm, RenewalTerm, or ConfigurableUpfrontPricingTerm.    TermID \u2013 The ID of the particular term, which is common between offer and agreement.    TermPayload \u2013 The key information contained in the term, such as the EULA for LegalTerm or pricing and dimensions for various pricing terms, such as ConfigurableUpfrontPricingTerm or UsageBasedPricingTerm.      Configuration \u2013 The buyer/acceptor's selection at the time of agreement creation, such as the number of units purchased for a dimension or setting the EnableAutoRenew flag",
      options: [
        {
          name: "--agreement-id",
          description: "The unique identifier of the agreement",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of agreements to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A token to specify where to start pagination",
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
      name: "search-agreements",
      description:
        "Searches across all agreements that a proposer or an acceptor has in AWS Marketplace. The search returns a list of agreements with basic agreement information. The following filter combinations are supported:    PartyType as Proposer + AgreementType + ResourceIdentifier     PartyType as Proposer + AgreementType + OfferId     PartyType as Proposer + AgreementType + AcceptorAccountId     PartyType as Proposer + AgreementType + Status     PartyType as Proposer + AgreementType + ResourceIdentifier + Status     PartyType as Proposer + AgreementType + OfferId + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + Status     PartyType as Proposer + AgreementType + ResourceType + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceType + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + OfferId     PartyType as Proposer + AgreementType + AcceptorAccountId + OfferId + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceIdentifier     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceIdentifier + Status     PartyType as Proposer + AgreementType + AcceptorAccountId + ResourceType",
      options: [
        {
          name: "--catalog",
          description: "The catalog in which the agreement was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filter name and value pair used to return a specific list of results. The following filters are supported:    ResourceIdentifier \u2013 The unique identifier of the resource.    ResourceType \u2013 Type of the resource, which is the product (AmiProduct, ContainerProduct, or SaaSProduct).    PartyType \u2013 The party type (either Acceptor or Proposer) of the caller. For agreements where the caller is the proposer, use the Proposer filter. For agreements where the caller is the acceptor, use the Acceptor filter.    AcceptorAccountId \u2013 The AWS account ID of the party accepting the agreement terms.    OfferId \u2013 The unique identifier of the offer in which the terms are registered in the agreement token.    Status \u2013 The current status of the agreement. Values include ACTIVE, ARCHIVED, CANCELLED, EXPIRED, RENEWED, REPLACED, and TERMINATED.    BeforeEndTime \u2013 A date used to filter agreements with a date before the endTime of an agreement.    AfterEndTime \u2013 A date used to filter agreements with a date after the endTime of an agreement.    AgreementType \u2013 The type of agreement. Values include PurchaseAgreement or VendorInsightsAgreement",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of agreements to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A token to specify where to start pagination",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description:
            "An object that contains the SortBy and SortOrder attributes",
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
  ],
};
export default completionSpec;
