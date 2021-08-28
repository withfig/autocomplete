import * as Fig from "../../schemas";

const completionSpec: Fig.Spec = {
  name: "auditmanager",
  description:
    "Welcome to the AWS Audit Manager API reference. This guide is for developers who need detailed information about the AWS Audit Manager API operations, data types, and errors.  AWS Audit Manager is a service that provides automated evidence collection so that you can continuously audit your AWS usage, and assess the effectiveness of your controls to better manage risk and simplify compliance. AWS Audit Manager provides pre-built frameworks that structure and automate assessments for a given compliance standard. Frameworks include a pre-built collection of controls with descriptions and testing procedures, which are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with unique requirements.  Use the following links to get started with the AWS Audit Manager API:    Actions: An alphabetical list of all AWS Audit Manager API operations.    Data types: An alphabetical list of all AWS Audit Manager data types.    Common parameters: Parameters that all Query operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to AWS Audit Manager, we recommend that you review the  AWS Audit Manager User Guide",
  subcommands: [
    {
      name: "associate-assessment-report-evidence-folder",
      description:
        "Associates an evidence folder to the specified assessment report in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder in which evidence is stored",
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
      name: "batch-associate-assessment-report-evidence",
      description:
        "Associates a list of evidence to an assessment report in an AWS Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder in which the evidence is stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-ids",
          description: "The list of evidence identifiers",
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
      name: "batch-create-delegation-by-assessment",
      description:
        "Create a batch of delegations for a specified assessment in AWS Audit Manager",
      options: [
        {
          name: "--create-delegation-requests",
          description:
            "The API request to batch create delegations in AWS Audit Manager",
          args: {
            name: "list",
          },
        },
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
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
      name: "batch-delete-delegation-by-assessment",
      description:
        "Deletes the delegations in the specified AWS Audit Manager assessment",
      options: [
        {
          name: "--delegation-ids",
          description: "The identifiers for the specified delegations",
          args: {
            name: "list",
          },
        },
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
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
      name: "batch-disassociate-assessment-report-evidence",
      description:
        "Disassociates a list of evidence from the specified assessment report in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder in which evidence is stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-ids",
          description: "The list of evidence identifiers",
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
      name: "batch-import-evidence-to-assessment-control",
      description:
        "Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-id",
          description: "The identifier for the specified control",
          args: {
            name: "string",
          },
        },
        {
          name: "--manual-evidence",
          description: "The list of manual evidence objects",
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
      name: "create-assessment",
      description: "Creates an assessment in AWS Audit Manager",
      options: [
        {
          name: "--name",
          description: "The name of the assessment to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The optional description of the assessment to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-reports-destination",
          description:
            "The assessment report storage destination for the specified assessment that is being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scope",
          description:
            "The wrapper that contains the AWS accounts and AWS services in scope for the assessment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--roles",
          description: "The list of roles for the specified assessment",
          args: {
            name: "list",
          },
        },
        {
          name: "--framework-id",
          description: "The identifier for the specified framework",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags associated with the assessment",
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
      name: "create-assessment-framework",
      description: "Creates a custom framework in AWS Audit Manager",
      options: [
        {
          name: "--name",
          description: "The name of the new custom framework",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the new custom framework",
          args: {
            name: "string",
          },
        },
        {
          name: "--compliance-type",
          description:
            "The compliance type that the new custom framework supports, such as CIS or HIPAA",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-sets",
          description: "The control sets to be associated with the framework",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags associated with the framework",
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
      name: "create-assessment-report",
      description: "Creates an assessment report for the specified assessment",
      options: [
        {
          name: "--name",
          description: "The name of the new assessment report",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the assessment report",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
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
      name: "create-control",
      description: "Creates a new custom control in AWS Audit Manager",
      options: [
        {
          name: "--name",
          description: "The name of the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--testing-information",
          description:
            "The steps to follow to determine if the control has been satisfied",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-plan-title",
          description:
            "The title of the action plan for remediating the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-plan-instructions",
          description:
            "The recommended actions to carry out if the control is not fulfilled",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-mapping-sources",
          description: "The data mapping sources for the specified control",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags associated with the control",
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
      name: "delete-assessment",
      description: "Deletes an assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
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
      name: "delete-assessment-framework",
      description: "Deletes a custom framework in AWS Audit Manager",
      options: [
        {
          name: "--framework-id",
          description: "The identifier for the specified framework",
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
      name: "delete-assessment-report",
      description:
        "Deletes an assessment report from an assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-report-id",
          description: "The unique identifier for the assessment report",
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
      name: "delete-control",
      description: "Deletes a custom control in AWS Audit Manager",
      options: [
        {
          name: "--control-id",
          description: "The identifier for the specified control",
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
      name: "deregister-account",
      description: "Deregisters an account in AWS Audit Manager",
      options: [
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
      name: "deregister-organization-admin-account",
      description:
        "Deregisters the delegated AWS administrator account from the AWS organization",
      options: [
        {
          name: "--admin-account-id",
          description: "The identifier for the specified administrator account",
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
      name: "disassociate-assessment-report-evidence-folder",
      description:
        "Disassociates an evidence folder from the specified assessment report in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder in which evidence is stored",
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
      name: "get-account-status",
      description:
        "Returns the registration status of an account in AWS Audit Manager",
      options: [
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
      name: "get-assessment",
      description: "Returns an assessment from AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
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
      name: "get-assessment-framework",
      description: "Returns a framework from AWS Audit Manager",
      options: [
        {
          name: "--framework-id",
          description: "The identifier for the specified framework",
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
      name: "get-assessment-report-url",
      description:
        "Returns the URL of a specified assessment report in AWS Audit Manager",
      options: [
        {
          name: "--assessment-report-id",
          description: "The identifier for the assessment report",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
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
      name: "get-change-logs",
      description: "Returns a list of changelogs from AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-id",
          description: "The identifier for the specified control",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "get-control",
      description: "Returns a control from AWS Audit Manager",
      options: [
        {
          name: "--control-id",
          description: "The identifier for the specified control",
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
      name: "get-delegations",
      description:
        "Returns a list of delegations from an audit owner to a delegate",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "get-evidence",
      description: "Returns evidence from AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder in which the evidence is stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-id",
          description: "The identifier for the evidence",
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
      name: "get-evidence-by-evidence-folder",
      description:
        "Returns all evidence from a specified evidence folder in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The unique identifier for the folder in which the evidence is stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "get-evidence-folder",
      description:
        "Returns an evidence folder from the specified assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder in which the evidence is stored",
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
      name: "get-evidence-folders-by-assessment",
      description:
        "Returns the evidence folders from a specified assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "get-evidence-folders-by-assessment-control",
      description:
        "Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-id",
          description: "The identifier for the specified control",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "get-organization-admin-account",
      description:
        "Returns the name of the delegated AWS administrator account for the AWS organization",
      options: [
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
      name: "get-services-in-scope",
      description:
        "Returns a list of the in-scope AWS services for the specified assessment",
      options: [
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
      name: "get-settings",
      description: "Returns the settings for the specified AWS account",
      options: [
        {
          name: "--attribute",
          description: "The list of SettingAttribute enum values",
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
      name: "list-assessment-frameworks",
      description:
        "Returns a list of the frameworks available in the AWS Audit Manager framework library",
      options: [
        {
          name: "--framework-type",
          description: "The type of framework, such as standard or custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "list-assessment-reports",
      description:
        "Returns a list of assessment reports created in AWS Audit Manager",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "list-assessments",
      description:
        "Returns a list of current and past assessments from AWS Audit Manager",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "list-controls",
      description: "Returns a list of controls from AWS Audit Manager",
      options: [
        {
          name: "--control-type",
          description: "The type of control, such as standard or custom",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "list-keywords-for-data-source",
      description:
        "Returns a list of keywords that pre-mapped to the specified control data source",
      options: [
        {
          name: "--source",
          description:
            "The control mapping data source to which the keywords apply",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "list-notifications",
      description: "Returns a list of all AWS Audit Manager notifications",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results per page, or per API request call",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of tags for the specified resource in AWS Audit Manager",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the specified resource",
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
      name: "register-account",
      description: "Enables AWS Audit Manager for the specified AWS account",
      options: [
        {
          name: "--kms-key",
          description: "The AWS KMS key details",
          args: {
            name: "string",
          },
        },
        {
          name: "--delegated-admin-account",
          description:
            "The delegated administrator account for AWS Audit Manager",
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
      name: "register-organization-admin-account",
      description:
        "Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager",
      options: [
        {
          name: "--admin-account-id",
          description:
            "The identifier for the specified delegated administrator account",
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
      description: "Tags the specified resource in AWS Audit Manager",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the specified resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be associated with the resource",
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
      description: "Removes a tag from a resource in AWS Audit Manager",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the specified resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The name or key of the tag",
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
      name: "update-assessment",
      description: "Edits an AWS Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-name",
          description: "The name of the specified assessment to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-description",
          description: "The description of the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description: "The scope of the specified assessment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--assessment-reports-destination",
          description:
            "The assessment report storage destination for the specified assessment that is being updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--roles",
          description: "The list of roles for the specified assessment",
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
      name: "update-assessment-control",
      description:
        "Updates a control within an assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-id",
          description: "The identifier for the specified control",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-status",
          description: "The status of the specified control",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment-body",
          description: "The comment body text for the specified control",
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
      name: "update-assessment-control-set-status",
      description:
        "Updates the status of a control set in an AWS Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The identifier for the specified control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the control set that is being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description: "The comment related to the status update",
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
      name: "update-assessment-framework",
      description: "Updates a custom framework in AWS Audit Manager",
      options: [
        {
          name: "--framework-id",
          description: "The identifier for the specified framework",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the framework to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the framework that is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--compliance-type",
          description:
            "The compliance type that the new custom framework supports, such as CIS or HIPAA",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-sets",
          description: "The control sets associated with the framework",
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
      name: "update-assessment-status",
      description: "Updates the status of an assessment in AWS Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the specified assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The current status of the specified assessment",
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
      name: "update-control",
      description: "Updates a custom control in AWS Audit Manager",
      options: [
        {
          name: "--control-id",
          description: "The identifier for the specified control",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the control to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The optional description of the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--testing-information",
          description:
            "The steps that to follow to determine if the control has been satisfied",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-plan-title",
          description:
            "The title of the action plan for remediating the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-plan-instructions",
          description:
            "The recommended actions to carry out if the control is not fulfilled",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-mapping-sources",
          description: "The data mapping sources for the specified control",
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
      name: "update-settings",
      description:
        "Updates AWS Audit Manager settings for the current user account",
      options: [
        {
          name: "--sns-topic",
          description:
            "The Amazon Simple Notification Service (Amazon SNS) topic to which AWS Audit Manager sends notifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-assessment-reports-destination",
          description: "The default storage destination for assessment reports",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-process-owners",
          description: "A list of the default audit owners",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key",
          description: "The AWS KMS key details",
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
      name: "validate-assessment-report-integrity",
      description:
        "Validates the integrity of an assessment report in AWS Audit Manager",
      options: [
        {
          name: "--s3-relative-path",
          description:
            "The relative path of the specified Amazon S3 bucket in which the assessment report is stored",
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
