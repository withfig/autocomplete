const completionSpec: Fig.Spec = {
  name: "bedrock-data-automation",
  description: "Amazon Bedrock Keystone Build",
  subcommands: [
    {
      name: "create-blueprint",
      description: "Creates an Amazon Bedrock Keystone Blueprint",
      options: [
        {
          name: "--blueprint-name",
          description: "Name of the Blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-stage",
          description: "Stage of the Blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description: "Schema of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "Client specified token used for idempotency checks",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description: "KMS Encryption Configuration",
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
      name: "create-blueprint-version",
      description:
        "Creates a new version of an existing Amazon Bedrock Keystone Blueprint",
      options: [
        {
          name: "--blueprint-arn",
          description:
            "ARN generated at the server side when a Blueprint is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "Client specified token used for idempotency checks",
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
      name: "create-data-automation-project",
      description: "Creates an Amazon Bedrock Keystone DataAutomationProject",
      options: [
        {
          name: "--project-name",
          description: "Name of the DataAutomationProject",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-description",
          description: "Description of the DataAutomationProject",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-stage",
          description: "Stage of the Project",
          args: {
            name: "string",
          },
        },
        {
          name: "--standard-output-configuration",
          description: "Standard output configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-output-configuration",
          description: "Custom output configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--override-configuration",
          description: "Override configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "Client specified token used for idempotency checks",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description: "KMS Encryption Configuration",
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
      name: "delete-blueprint",
      description: "Deletes an existing Amazon Bedrock Keystone Blueprint",
      options: [
        {
          name: "--blueprint-arn",
          description:
            "ARN generated at the server side when a Blueprint is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-version",
          description: "Optional field to delete a specific Blueprint version",
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
      name: "delete-data-automation-project",
      description:
        "Deletes an existing Amazon Bedrock Keystone DataAutomationProject",
      options: [
        {
          name: "--project-arn",
          description:
            "ARN generated at the server side when a DataAutomationProject is created",
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
      name: "get-blueprint",
      description: "Gets an existing Amazon Bedrock Keystone Blueprint",
      options: [
        {
          name: "--blueprint-arn",
          description:
            "ARN generated at the server side when a Blueprint is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-version",
          description: "Optional field to get a specific Blueprint version",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-stage",
          description: "Optional field to get a specific Blueprint stage",
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
      name: "get-data-automation-project",
      description:
        "Gets an existing Amazon Bedrock Keystone DataAutomationProject",
      options: [
        {
          name: "--project-arn",
          description:
            "ARN generated at the server side when a DataAutomationProject is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-stage",
          description:
            "Optional field to delete a specific DataAutomationProject stage",
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
      name: "list-blueprints",
      description: "Lists all existing Amazon Bedrock Keystone Blueprints",
      options: [
        {
          name: "--blueprint-arn",
          description: "ARN of a Blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-owner",
          description: "Resource Owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-stage-filter",
          description: "Blueprint Stage filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Max Results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-filter",
          description: "Data Automation Project Filter",
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
      name: "list-data-automation-projects",
      description:
        "Lists all existing Amazon Bedrock Keystone DataAutomationProjects",
      options: [
        {
          name: "--max-results",
          description: "Max Results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-stage-filter",
          description: "Project Stage filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-filter",
          description: "Blueprint Filter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-owner",
          description: "Resource Owner",
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
      name: "update-blueprint",
      description: "Updates an existing Amazon Bedrock Blueprint",
      options: [
        {
          name: "--blueprint-arn",
          description:
            "ARN generated at the server side when a Blueprint is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description: "Schema of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-stage",
          description: "Stage of the Blueprint",
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
      name: "update-data-automation-project",
      description: "Updates an existing Amazon Bedrock DataAutomationProject",
      options: [
        {
          name: "--project-arn",
          description:
            "ARN generated at the server side when a DataAutomationProject is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-stage",
          description: "Stage of the Project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-description",
          description: "Description of the DataAutomationProject",
          args: {
            name: "string",
          },
        },
        {
          name: "--standard-output-configuration",
          description: "Standard output configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-output-configuration",
          description: "Custom output configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--override-configuration",
          description: "Override configuration",
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
