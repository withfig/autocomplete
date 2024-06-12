const completionSpec: Fig.Spec = {
  name: "migrationhuborchestrator",
  description:
    "This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Migration Hub Orchestrator. The topic for each action shows the API request parameters and responses. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using",
  subcommands: [
    {
      name: "create-template",
      description: "Creates a migration workflow template",
      options: [
        {
          name: "--template-name",
          description: "The name of the migration workflow template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-description",
          description: "A description of the migration workflow template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-source",
          description: "The source of the migration workflow template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Idempotency in the Smithy documentation",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to add to the migration workflow template",
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
      name: "create-workflow",
      description: "Create a workflow to orchestrate your migrations",
      options: [
        {
          name: "--name",
          description: "The name of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-configuration-id",
          description:
            "The configuration ID of the application configured in Application Discovery Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-parameters",
          description:
            "The input parameters required to create a migration workflow",
          args: {
            name: "map",
          },
        },
        {
          name: "--step-targets",
          description: "The servers on which a step will be run",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags to add on a migration workflow",
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
      name: "create-workflow-step",
      description: "Create a step in the migration workflow",
      options: [
        {
          name: "--name",
          description: "The name of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-action-type",
          description:
            "The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-step-automation-configuration",
          description:
            "The custom script to run tests on source or target environments",
          args: {
            name: "structure",
          },
        },
        {
          name: "--step-target",
          description: "The servers on which a step will be run",
          args: {
            name: "list",
          },
        },
        {
          name: "--outputs",
          description: "The key value pairs added for the expected output",
          args: {
            name: "list",
          },
        },
        {
          name: "--previous",
          description: "The previous step",
          args: {
            name: "list",
          },
        },
        {
          name: "--next",
          description: "The next step",
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
      name: "create-workflow-step-group",
      description: "Create a step group in a migration workflow",
      options: [
        {
          name: "--workflow-id",
          description:
            "The ID of the migration workflow that will contain the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next",
          description: "The next step group",
          args: {
            name: "list",
          },
        },
        {
          name: "--previous",
          description: "The previous step group",
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
      name: "delete-template",
      description: "Deletes a migration workflow template",
      options: [
        {
          name: "--id",
          description:
            "The ID of the request to delete a migration workflow template",
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
        "Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it",
      options: [
        {
          name: "--id",
          description: "The ID of the migration workflow you want to delete",
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
      name: "delete-workflow-step",
      description:
        "Delete a step in a migration workflow. Pause the workflow to delete a running step",
      options: [
        {
          name: "--id",
          description: "The ID of the step you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description:
            "The ID of the step group that contains the step you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
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
      name: "delete-workflow-step-group",
      description: "Delete a step group in a migration workflow",
      options: [
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the step group you want to delete",
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
      name: "get-template",
      description:
        "Get the template you want to use for creating a migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the template",
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
      name: "get-template-step",
      description: "Get a specific step in a template",
      options: [
        {
          name: "--id",
          description: "The ID of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
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
      name: "get-template-step-group",
      description: "Get a step group in a template",
      options: [
        {
          name: "--template-id",
          description: "The ID of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the step group",
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
      name: "get-workflow",
      description: "Get migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the migration workflow",
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
      name: "get-workflow-step",
      description: "Get a step in the migration workflow",
      options: [
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the step",
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
      name: "get-workflow-step-group",
      description: "Get the step group of a migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
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
      name: "list-plugins",
      description: "List AWS Migration Hub Orchestrator plugins",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of plugins that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
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
      description: "List the tags added to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
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
      name: "list-template-step-groups",
      description: "List the step groups in a template",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID of the template",
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
      name: "list-template-steps",
      description: "List the steps in a template",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
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
      name: "list-templates",
      description:
        "List the templates available in Migration Hub Orchestrator to create a migration workflow",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the template",
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
      name: "list-workflow-step-groups",
      description: "List the step groups in a migration workflow",
      options: [
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
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
      name: "list-workflow-steps",
      description: "List the steps in a workflow",
      options: [
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
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
      name: "list-workflows",
      description: "List the migration workflows",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results that can be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID of the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--ads-application-configuration-name",
          description:
            "The name of the application configured in Application Discovery Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the migration workflow",
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
      name: "retry-workflow-step",
      description: "Retry a failed step in a migration workflow",
      options: [
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the step",
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
      name: "start-workflow",
      description: "Start a migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the migration workflow",
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
      name: "stop-workflow",
      description: "Stop an ongoing migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the migration workflow",
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
        "Tag a resource by specifying its Amazon Resource Name (ARN)",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which you want to add tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A collection of labels, in the form of key:value pairs, that apply to this resource",
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
      description: "Deletes the tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which you want to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "One or more tag keys. Specify only the tag keys, not the tag values",
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
      name: "update-template",
      description: "Updates a migration workflow template",
      options: [
        {
          name: "--id",
          description:
            "The ID of the request to update a migration workflow template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-name",
          description: "The name of the migration workflow template to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-description",
          description:
            "The description of the migration workflow template to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request",
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
      name: "update-workflow",
      description: "Update a migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-parameters",
          description:
            "The input parameters required to update a migration workflow",
          args: {
            name: "map",
          },
        },
        {
          name: "--step-targets",
          description: "The servers on which a step will be run",
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
      name: "update-workflow-step",
      description: "Update a step in a migration workflow",
      options: [
        {
          name: "--id",
          description: "The ID of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-group-id",
          description: "The ID of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-action-type",
          description:
            "The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-step-automation-configuration",
          description:
            "The custom script to run tests on the source and target environments",
          args: {
            name: "structure",
          },
        },
        {
          name: "--step-target",
          description: "The servers on which a step will be run",
          args: {
            name: "list",
          },
        },
        {
          name: "--outputs",
          description: "The outputs of a step",
          args: {
            name: "list",
          },
        },
        {
          name: "--previous",
          description: "The previous step",
          args: {
            name: "list",
          },
        },
        {
          name: "--next",
          description: "The next step",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description: "The status of the step",
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
      name: "update-workflow-step-group",
      description: "Update the step group in a migration workflow",
      options: [
        {
          name: "--workflow-id",
          description: "The ID of the migration workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the step group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next",
          description: "The next step group",
          args: {
            name: "list",
          },
        },
        {
          name: "--previous",
          description: "The previous step group",
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
