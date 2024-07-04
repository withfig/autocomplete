const completionSpec: Fig.Spec = {
  name: "auditmanager",
  description:
    "Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors.  Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance. Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements.  Use the following links to get started with the Audit Manager API:    Actions: An alphabetical list of all Audit Manager API operations.    Data types: An alphabetical list of all Audit Manager data types.    Common parameters: Parameters that all operations can use.    Common errors: Client and server errors that all operations can return.   If you're new to Audit Manager, we recommend that you review the  Audit Manager User Guide",
  subcommands: [
    {
      name: "associate-assessment-report-evidence-folder",
      description:
        "Associates an evidence folder to an assessment report in an Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder that the evidence is stored in",
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
        "Associates a list of evidence to an assessment report in an Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder that the evidence is stored in",
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
        "Creates a batch of delegations for an assessment in Audit Manager",
      options: [
        {
          name: "--create-delegation-requests",
          description:
            "The API request to batch create delegations in Audit Manager",
          args: {
            name: "list",
          },
        },
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
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
        "Deletes a batch of delegations for an assessment in Audit Manager",
      options: [
        {
          name: "--delegation-ids",
          description: "The identifiers for the delegations",
          args: {
            name: "list",
          },
        },
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
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
        "Disassociates a list of evidence from an assessment report in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The identifier for the folder that the evidence is stored in",
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
        "Adds one or more pieces of evidence to a control in an Audit Manager assessment.  You can import manual evidence from any S3 bucket by specifying the S3 URI of the object. You can also upload a file from your browser, or enter plain text in response to a risk assessment question.  The following restrictions apply to this action:    manualEvidence can be only one of the following: evidenceFileName, s3ResourcePath, or textResponse    Maximum size of an individual evidence file: 100 MB   Number of daily manual evidence uploads per control: 100   Supported file formats: See Supported file types for manual evidence in the Audit Manager User Guide    For more information about Audit Manager service restrictions, see Quotas and restrictions for Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
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
          name: "--control-id",
          description: "The identifier for the control",
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
      description: "Creates an assessment in Audit Manager",
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
            "The assessment report storage destination for the assessment that's being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scope",
          description:
            "The wrapper that contains the Amazon Web Services accounts that are in scope for the assessment.   You no longer need to specify which Amazon Web Services are in scope when you create or update an assessment. Audit Manager infers the services in scope by examining your assessment controls and their data sources, and then mapping this information to the relevant Amazon Web Services.  If an underlying data source changes for your assessment, we automatically update the services scope as needed to reflect the correct Amazon Web Services. This ensures that your assessment collects accurate and comprehensive evidence about all of the relevant services in your AWS environment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--roles",
          description: "The list of roles for the assessment",
          args: {
            name: "list",
          },
        },
        {
          name: "--framework-id",
          description:
            "The identifier for the framework that the assessment will be created from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags that are associated with the assessment",
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
      description: "Creates a custom framework in Audit Manager",
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
          description:
            "The control sets that are associated with the framework",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags that are associated with the framework",
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
          description: "The identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-statement",
          description:
            "A SQL statement that represents an evidence finder query. Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually added to a report using the console, or associated with a report using the API.  To use this parameter, the enablementStatus of evidence finder must be ENABLED.   For examples and help resolving queryStatement validation exceptions, see Troubleshooting evidence finder issues in the Audit Manager User Guide",
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
      description: "Creates a new custom control in Audit Manager",
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
            "The steps to follow to determine if the control is satisfied",
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
            "The recommended actions to carry out if the control isn't fulfilled",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-mapping-sources",
          description: "The data mapping sources for the control",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags that are associated with the control",
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
      description: "Deletes an assessment in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
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
      description: "Deletes a custom framework in Audit Manager",
      options: [
        {
          name: "--framework-id",
          description: "The identifier for the custom framework",
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
      name: "delete-assessment-framework-share",
      description:
        "Deletes a share request for a custom framework in Audit Manager",
      options: [
        {
          name: "--request-id",
          description:
            "The unique identifier for the share request to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-type",
          description:
            "Specifies whether the share request is a sent request or a received request",
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
        "Deletes an assessment report in Audit Manager.  When you run the DeleteAssessmentReport operation, Audit Manager attempts to delete the following data:   The specified assessment report that\u2019s stored in your S3 bucket   The associated metadata that\u2019s stored in Audit Manager   If Audit Manager can\u2019t access the assessment report in your S3 bucket, the report isn\u2019t deleted. In this event, the DeleteAssessmentReport operation doesn\u2019t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself.  This scenario happens when Audit Manager receives a 403 (Forbidden) or 404 (Not Found) error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see Assessment report destination permissions in the Audit Manager User Guide. For information about the issues that could cause a 403 (Forbidden) or 404 (Not Found) error from Amazon S3, see List of Error Codes in the Amazon Simple Storage Service API Reference",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
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
      description:
        "Deletes a custom control in Audit Manager.   When you invoke this operation, the custom control is deleted from any frameworks or assessments that it\u2019s currently part of. As a result, Audit Manager will stop collecting evidence for that custom control in all of your assessments. This includes assessments that you previously created before you deleted the custom control",
      options: [
        {
          name: "--control-id",
          description: "The unique identifier for the control",
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
      description:
        "Deregisters an account in Audit Manager.   Before you deregister, you can use the UpdateSettings API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the DeregistrationPolicy attribute to request the deletion of your data.  For more information about data retention, see Data Protection in the Audit Manager User Guide",
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
        "Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager.  When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.  Keep in mind the following cleanup task if you use evidence finder: Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn\u2019t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually deletes the event data store. This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.  When you deregister a delegated administrator account for Audit Manager, the data for that account isn\u2019t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager.  To delete your Audit Manager resource data, see the following instructions:     DeleteAssessment (see also: Deleting an assessment in the Audit Manager User Guide)    DeleteAssessmentFramework (see also: Deleting a custom framework in the Audit Manager User Guide)    DeleteAssessmentFrameworkShare (see also: Deleting a share request in the Audit Manager User Guide)    DeleteAssessmentReport (see also: Deleting an assessment report in the Audit Manager User Guide)    DeleteControl (see also: Deleting a custom control in the Audit Manager User Guide)   At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration",
      options: [
        {
          name: "--admin-account-id",
          description: "The identifier for the administrator account",
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
        "Disassociates an evidence folder from the specified assessment report in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The unique identifier for the folder that the evidence is stored in",
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
        "Gets the registration status of an account in Audit Manager",
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
      description: "Gets information about a specified assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
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
      description: "Gets information about a specified framework",
      options: [
        {
          name: "--framework-id",
          description: "The identifier for the framework",
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
      description: "Gets the URL of an assessment report in Audit Manager",
      options: [
        {
          name: "--assessment-report-id",
          description: "The unique identifier for the assessment report",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
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
      description: "Gets a list of changelogs from Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The unique identifier for the control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-id",
          description: "The unique identifier for the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      description: "Gets information about a specified control",
      options: [
        {
          name: "--control-id",
          description: "The identifier for the control",
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
        "Gets a list of delegations from an audit owner to a delegate",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      description: "Gets information about a specified evidence item",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The unique identifier for the control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The unique identifier for the folder that the evidence is stored in",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-id",
          description: "The unique identifier for the evidence",
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
        "Gets all evidence from a specified evidence folder in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
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
            "The unique identifier for the folder that the evidence is stored in",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "get-evidence-file-upload-url",
      description:
        "Creates a presigned Amazon S3 URL that can be used to upload a file as manual evidence. For instructions on how to use this operation, see Upload a file from your browser  in the Audit Manager User Guide. The following restrictions apply to this operation:   Maximum size of an individual evidence file: 100 MB   Number of daily manual evidence uploads per control: 100   Supported file formats: See Supported file types for manual evidence in the Audit Manager User Guide    For more information about Audit Manager service restrictions, see Quotas and restrictions for Audit Manager",
      options: [
        {
          name: "--file-name",
          description:
            "The file that you want to upload. For a list of supported file formats, see Supported file types for manual evidence in the Audit Manager User Guide",
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
      name: "get-evidence-folder",
      description:
        "Gets an evidence folder from a specified assessment in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The unique identifier for the control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-folder-id",
          description:
            "The unique identifier for the folder that the evidence is stored in",
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
        "Gets the evidence folders from a specified assessment in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
        "Gets a list of evidence folders that are associated with a specified control in an Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The identifier for the assessment",
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
          name: "--control-id",
          description: "The identifier for the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "get-insights",
      description:
        "Gets the latest analytics data for all your current active assessments",
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
      name: "get-insights-by-assessment",
      description:
        "Gets the latest analytics data for a specific active assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
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
      name: "get-organization-admin-account",
      description:
        "Gets the name of the delegated Amazon Web Services administrator account for a specified organization",
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
        "Gets a list of the Amazon Web Services from which Audit Manager can collect evidence.  Audit Manager defines which Amazon Web Services are in scope for an assessment. Audit Manager infers this scope by examining the assessment\u2019s controls and their data sources, and then mapping this information to one or more of the corresponding Amazon Web Services that are in this list.  For information about why it's no longer possible to specify services in scope manually, see I can't edit the services in scope for my assessment in the Troubleshooting section of the Audit Manager user guide",
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
      description:
        "Gets the settings for a specified Amazon Web Services account",
      options: [
        {
          name: "--attribute",
          description: "The list of setting attribute enum values",
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
      name: "list-assessment-control-insights-by-control-domain",
      description:
        "Lists the latest analytics data for controls within a specific control domain and a specific active assessment.  Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the lastUpdated date of controlInsightsByAssessment. If neither of these conditions are met, no data is listed for that control",
      options: [
        {
          name: "--control-domain-id",
          description:
            "The unique identifier for the control domain.  Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see  ListDomains  in the Amazon Web Services Control Catalog API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-id",
          description: "The unique identifier for the active assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "list-assessment-framework-share-requests",
      description:
        "Returns a list of sent or received share requests for custom frameworks in Audit Manager",
      options: [
        {
          name: "--request-type",
          description:
            "Specifies whether the share request is a sent request or a received request",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "list-assessment-frameworks",
      description:
        "Returns a list of the frameworks that are available in the Audit Manager framework library",
      options: [
        {
          name: "--framework-type",
          description:
            "The type of framework, such as a standard framework or a custom framework",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
        "Returns a list of assessment reports created in Audit Manager",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
        "Returns a list of current and past assessments from Audit Manager",
      options: [
        {
          name: "--status",
          description: "The current status of the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "list-control-domain-insights",
      description:
        "Lists the latest analytics data for control domains across all of your active assessments.  Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see  ListDomains  in the Amazon Web Services Control Catalog API Reference.  A control domain is listed only if at least one of the controls within that domain collected evidence on the lastUpdated date of controlDomainInsights. If this condition isn\u2019t met, no data is listed for that control domain",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "list-control-domain-insights-by-assessment",
      description:
        "Lists analytics data for control domains within a specified active assessment. Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see  ListDomains  in the Amazon Web Services Control Catalog API Reference.  A control domain is listed only if at least one of the controls within that domain collected evidence on the lastUpdated date of controlDomainInsights. If this condition isn\u2019t met, no data is listed for that domain",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the active assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      name: "list-control-insights-by-control-domain",
      description:
        "Lists the latest analytics data for controls within a specific control domain across all active assessments.  Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the lastUpdated date of controlInsightsMetadata. If neither of these conditions are met, no data is listed for that control",
      options: [
        {
          name: "--control-domain-id",
          description:
            "The unique identifier for the control domain.  Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see  ListDomains  in the Amazon Web Services Control Catalog API Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      description: "Returns a list of controls from Audit Manager",
      options: [
        {
          name: "--control-type",
          description:
            "A filter that narrows the list of controls to a specific type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results on a page or for an API request call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--control-catalog-id",
          description:
            "A filter that narrows the list of controls to a specific resource from the Amazon Web Services Control Catalog.  To use this parameter, specify the ARN of the Control Catalog resource. You can specify either a control domain, a control objective, or a common control. For information about how to find the ARNs for these resources, see  ListDomains ,  ListObjectives , and  ListCommonControls .  You can only filter by one Control Catalog resource at a time. Specifying multiple resource ARNs isn\u2019t currently supported. If you want to filter by more than one ARN, we recommend that you run the ListControls operation separately for each ARN.   Alternatively, specify UNCATEGORIZED to list controls that aren't mapped to a Control Catalog resource. For example, this operation might return a list of custom controls that don't belong to any control domain or control objective",
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
      name: "list-keywords-for-data-source",
      description:
        "Returns a list of keywords that are pre-mapped to the specified control data source",
      options: [
        {
          name: "--source",
          description:
            "The control mapping data source that the keywords apply to",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
      description: "Returns a list of all Audit Manager notifications",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Represents the maximum number of results on a page or for an API request call",
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
        "Returns a list of tags for the specified resource in Audit Manager",
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
      name: "register-account",
      description:
        "Enables Audit Manager for the specified Amazon Web Services account",
      options: [
        {
          name: "--kms-key",
          description: "The KMS key details",
          args: {
            name: "string",
          },
        },
        {
          name: "--delegated-admin-account",
          description: "The delegated administrator account for Audit Manager",
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
        "Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager",
      options: [
        {
          name: "--admin-account-id",
          description: "The identifier for the delegated administrator account",
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
      name: "start-assessment-framework-share",
      description:
        "Creates a share request for a custom framework in Audit Manager.  The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires. When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region. Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:   The sender revokes the share request.   The recipient declines the share request.   The recipient encounters an error and doesn't successfully accept the share request.   The share request expires before the recipient responds to the request.   When a sender resends a share request, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework.  When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request.   When you invoke the StartAssessmentFrameworkShare API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see Framework sharing eligibility in the Audit Manager User Guide",
      options: [
        {
          name: "--framework-id",
          description:
            "The unique identifier for the custom framework to be shared",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-account",
          description: "The Amazon Web Services account of the recipient",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-region",
          description: "The Amazon Web Services Region of the recipient",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "An optional comment from the sender about the share request",
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
      description: "Tags the specified resource in Audit Manager",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags that are associated with the resource",
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
      description: "Removes a tag from a resource in Audit Manager",
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
      description: "Edits an Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-name",
          description: "The name of the assessment to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-description",
          description: "The description of the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description: "The scope of the assessment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--assessment-reports-destination",
          description:
            "The assessment report storage destination for the assessment that's being updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--roles",
          description: "The list of roles for the assessment",
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
      description: "Updates a control within an assessment in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The unique identifier for the control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-id",
          description: "The unique identifier for the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-status",
          description: "The status of the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment-body",
          description: "The comment body text for the control",
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
        "Updates the status of a control set in an Audit Manager assessment",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-set-id",
          description: "The unique identifier for the control set",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the control set that's being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description: "The comment that's related to the status update",
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
      description: "Updates a custom framework in Audit Manager",
      options: [
        {
          name: "--framework-id",
          description: "The unique identifier for the framework",
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
          description: "The description of the updated framework",
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
          description:
            "The control sets that are associated with the framework",
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
      name: "update-assessment-framework-share",
      description:
        "Updates a share request for a custom framework in Audit Manager",
      options: [
        {
          name: "--request-id",
          description: "The unique identifier for the share request",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-type",
          description:
            "Specifies whether the share request is a sent request or a received request",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description: "Specifies the update action for the share request",
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
      name: "update-assessment-status",
      description: "Updates the status of an assessment in Audit Manager",
      options: [
        {
          name: "--assessment-id",
          description: "The unique identifier for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The current status of the assessment",
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
      description: "Updates a custom control in Audit Manager",
      options: [
        {
          name: "--control-id",
          description: "The identifier for the control",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the updated control",
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
            "The steps that you should follow to determine if the control is met",
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
            "The recommended actions to carry out if the control isn't fulfilled",
          args: {
            name: "string",
          },
        },
        {
          name: "--control-mapping-sources",
          description: "The data mapping sources for the control",
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
      description: "Updates Audit Manager settings for the current account",
      options: [
        {
          name: "--sns-topic",
          description:
            "The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-assessment-reports-destination",
          description:
            "The default S3 destination bucket for storing assessment reports",
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
          description: "The KMS key details",
          args: {
            name: "string",
          },
        },
        {
          name: "--evidence-finder-enabled",
          description:
            "Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.  When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that\u2019s used to query your evidence data. As a result, you can\u2019t re-enable evidence finder and use the feature again. Your only alternative is to deregister and then re-register Audit Manager",
        },
        {
          name: "--no-evidence-finder-enabled",
          description:
            "Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.  When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that\u2019s used to query your evidence data. As a result, you can\u2019t re-enable evidence finder and use the feature again. Your only alternative is to deregister and then re-register Audit Manager",
        },
        {
          name: "--deregistration-policy",
          description:
            "The deregistration policy for your Audit Manager data. You can use this attribute to determine how your data is handled when you deregister Audit Manager",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-export-destination",
          description:
            "The default S3 destination bucket for storing evidence finder exports",
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
      name: "validate-assessment-report-integrity",
      description:
        "Validates the integrity of an assessment report in Audit Manager",
      options: [
        {
          name: "--s3-relative-path",
          description:
            "The relative path of the Amazon S3 bucket that the assessment report is stored in",
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
