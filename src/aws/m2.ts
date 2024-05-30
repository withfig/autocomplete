const completionSpec: Fig.Spec = {
  name: "m2",
  description:
    "Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for analyzing existing mainframe applications, developing or updating mainframe applications using COBOL or PL/I, and implementing an automated pipeline for continuous integration and continuous delivery (CI/CD) of the applications",
  subcommands: [
    {
      name: "cancel-batch-job-execution",
      description: "Cancels the running of a specific batch job execution",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-id",
          description: "The unique identifier of the batch job execution",
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
      name: "create-application",
      description:
        "Creates a new application with given parameters. Requires an existing runtime environment and application definition file",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier the service generates to ensure the idempotency of the request to create an application. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The application definition for this application. You can specify either inline JSON or an S3 bucket location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-type",
          description: "The type of the target platform for this application",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description: "The identifier of a customer managed key",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies a role that the application uses to access Amazon Web Services resources that are not part of the application or are in a different Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the application",
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
      name: "create-data-set-import-task",
      description: "Starts a data set import task for a specific application",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application for which you want to import data sets",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a data set import. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires",
          args: {
            name: "string",
          },
        },
        {
          name: "--import-config",
          description: "The data set import task configuration",
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
      name: "create-deployment",
      description:
        "Creates and starts a deployment to deploy an application into a runtime environment",
      options: [
        {
          name: "--application-id",
          description: "The application identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-version",
          description: "The version of the application to deploy",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a deployment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "The identifier of the runtime environment where you want to deploy this application",
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
      name: "create-environment",
      description: "Creates a runtime environment for a given runtime engine",
      options: [
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create an environment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-type",
          description: "The engine type for the runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "The version of the engine type for the runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--high-availability-config",
          description:
            "The details of a high availability configuration for this runtime environment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-type",
          description: "The type of instance for the runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description: "The identifier of a customer managed key",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the runtime environment. Must be unique within the account",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format ddd:hh24:mi-ddd:hh24:mi and must be less than 24 hours. The following two examples are valid maintenance windows: sun:23:45-mon:00:15 or sat:01:00-sat:03:00.  If you do not provide a value, a random system-generated value will be assigned",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "Specifies whether the runtime environment is publicly accessible",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Specifies whether the runtime environment is publicly accessible",
        },
        {
          name: "--security-group-ids",
          description:
            "The list of security groups for the VPC associated with this runtime environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--storage-configurations",
          description:
            "Optional. The storage configurations for this runtime environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "The list of subnets associated with the VPC for this runtime environment",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags for the runtime environment",
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
      name: "delete-application",
      description:
        "Deletes a specific application. You cannot delete a running application",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application you want to delete",
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
      name: "delete-application-from-environment",
      description:
        "Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "The unique identifier of the runtime environment where the application was previously deployed",
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
      name: "delete-environment",
      description:
        "Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment",
      options: [
        {
          name: "--environment-id",
          description:
            "The unique identifier of the runtime environment you want to delete",
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
      name: "get-application",
      description: "Describes the details of a specific application",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the application",
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
      name: "get-application-version",
      description:
        "Returns details about a specific version of a specific application",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-version",
          description: "The specific version of the application",
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
      name: "get-batch-job-execution",
      description:
        "Gets the details of a specific batch job execution for a specific application",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-id",
          description: "The unique identifier of the batch job execution",
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
      name: "get-data-set-details",
      description: "Gets the details of a specific data set",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application that this data set is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-name",
          description: "The name of the data set",
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
      name: "get-data-set-import-task",
      description:
        "Gets the status of a data set import task initiated with the CreateDataSetImportTask operation",
      options: [
        {
          name: "--application-id",
          description: "The application identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-id",
          description:
            "The task identifier returned by the CreateDataSetImportTask operation",
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
      name: "get-deployment",
      description:
        "Gets details of a specific deployment with a given deployment identifier",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description: "The unique identifier for the deployment",
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
      name: "get-environment",
      description: "Describes a specific runtime environment",
      options: [
        {
          name: "--environment-id",
          description: "The unique identifier of the runtime environment",
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
      name: "get-signed-bluinsights-url",
      description:
        "Gets a single sign-on URL that can be used to connect to AWS Blu Insights",
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
      name: "list-application-versions",
      description:
        "Returns a list of the application versions for a specific application",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of application versions to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter",
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
      name: "list-applications",
      description:
        "Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment",
      options: [
        {
          name: "--environment-id",
          description:
            "The unique identifier of the runtime environment where the applications are deployed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of applications to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--names",
          description: "The names of the applications",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to control the number of applications displayed in the list",
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
      name: "list-batch-job-definitions",
      description:
        "Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of batch job definitions to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "If the batch job definition is a FileBatchJobDefinition, the prefix allows you to search on the file names of FileBatchJobDefinitions",
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
      name: "list-batch-job-executions",
      description:
        "Lists historical, current, and scheduled batch job executions for a specific application",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-ids",
          description: "The unique identifier of each batch job execution",
          args: {
            name: "list",
          },
        },
        {
          name: "--job-name",
          description: "The name of each batch job execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of batch job executions to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to control the number of batch job executions displayed in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--started-after",
          description: "The time after which the batch job executions started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--started-before",
          description: "The time before the batch job executions started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status",
          description: "The status of the batch job executions",
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
      name: "list-batch-job-restart-points",
      description:
        "Lists all the job steps for JCL files to restart a batch job. This is only applicable for Micro Focus engine with versions 8.0.6 and above",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-id",
          description: "The unique identifier of each batch job execution",
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
      name: "list-data-set-import-history",
      description: "Lists the data set imports for the specified application",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter",
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
      name: "list-data-sets",
      description:
        "Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using CreateDataSetImportTask",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application for which you want to list the associated data sets",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name-filter",
          description:
            "Filter dataset name matching the specified pattern. Can use * and % as wild cards",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "The prefix of the data set name, which you can use to filter the list of data sets",
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
      name: "list-deployments",
      description:
        "Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version",
      options: [
        {
          name: "--application-id",
          description: "The application identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter",
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
      name: "list-engine-versions",
      description: "Lists the available engine versions",
      options: [
        {
          name: "--engine-type",
          description: "The type of target platform",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of objects to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter",
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
      name: "list-environments",
      description: "Lists the runtime environments",
      options: [
        {
          name: "--engine-type",
          description: "The engine type for the runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of runtime environments to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--names",
          description:
            "The names of the runtime environments. Must be unique within the account",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to control the number of runtime environments displayed in the list",
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
      description: "Lists the tags for the specified resource",
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
      name: "start-application",
      description: "Starts an application that is currently stopped",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application you want to start",
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
      name: "start-batch-job",
      description:
        "Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application associated with this batch job",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-job-identifier",
          description: "The unique identifier of the batch job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-params",
          description:
            "The collection of batch job parameters. For details about limits for keys and values, see Coding variables in JCL",
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
      name: "stop-application",
      description: "Stops a running application",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-stop",
          description:
            "Stopping an application process can take a long time. Setting this parameter to true lets you force stop the application so you don't need to wait until the process finishes to apply another action on the application. The default value is false",
        },
        {
          name: "--no-force-stop",
          description:
            "Stopping an application process can take a long time. Setting this parameter to true lets you force stop the application so you don't need to wait until the process finishes to apply another action on the application. The default value is false",
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
      description: "Adds one or more tags to the specified resource",
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
          description: "The tags to add to the resource",
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
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove",
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
      name: "update-application",
      description: "Updates an application and creates a new version",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the application you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-application-version",
          description: "The current version of the application to update",
          args: {
            name: "integer",
          },
        },
        {
          name: "--definition",
          description:
            "The application definition for this application. You can specify either inline JSON or an S3 bucket location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the application to update",
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
      name: "update-environment",
      description:
        "Updates the configuration details for a specific runtime environment",
      options: [
        {
          name: "--apply-during-maintenance-window",
          description:
            "Indicates whether to update the runtime environment during the maintenance window. The default is false. Currently, Amazon Web Services Mainframe Modernization accepts the engineVersion parameter only if applyDuringMaintenanceWindow is true. If any parameter other than engineVersion is provided in UpdateEnvironmentRequest, it will fail if applyDuringMaintenanceWindow is set to true",
        },
        {
          name: "--no-apply-during-maintenance-window",
          description:
            "Indicates whether to update the runtime environment during the maintenance window. The default is false. Currently, Amazon Web Services Mainframe Modernization accepts the engineVersion parameter only if applyDuringMaintenanceWindow is true. If any parameter other than engineVersion is provided in UpdateEnvironmentRequest, it will fail if applyDuringMaintenanceWindow is set to true",
        },
        {
          name: "--desired-capacity",
          description:
            "The desired capacity for the runtime environment to update. The minimum possible value is 0 and the maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--engine-version",
          description:
            "The version of the runtime engine for the runtime environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "The unique identifier of the runtime environment that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-update",
          description:
            "Forces the updates on the environment. This option is needed if the applications in the environment are not stopped or if there are ongoing application-related activities in the environment. If you use this option, be aware that it could lead to data corruption in the applications, and that you might need to perform repair and recovery procedures for the applications. This option is not needed if the attribute being updated is preferredMaintenanceWindow",
        },
        {
          name: "--no-force-update",
          description:
            "Forces the updates on the environment. This option is needed if the applications in the environment are not stopped or if there are ongoing application-related activities in the environment. If you use this option, be aware that it could lead to data corruption in the applications, and that you might need to perform repair and recovery procedures for the applications. This option is not needed if the attribute being updated is preferredMaintenanceWindow",
        },
        {
          name: "--instance-type",
          description:
            "The instance type for the runtime environment to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format ddd:hh24:mi-ddd:hh24:mi and must be less than 24 hours. The following two examples are valid maintenance windows: sun:23:45-mon:00:15 or sat:01:00-sat:03:00.  If you do not provide a value, a random system-generated value will be assigned",
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
