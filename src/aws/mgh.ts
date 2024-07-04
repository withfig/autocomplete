const completionSpec: Fig.Spec = {
  name: "mgh",
  description:
    "The AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hub. Remember that you must set your AWS Migration Hub home region before you call any of these APIs, or a HomeRegionNotSetException error will be returned. Also, you must make the API calls while in your home region",
  subcommands: [
    {
      name: "associate-created-artifact",
      description:
        "Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:   Migration tools can call the AssociateCreatedArtifact operation to indicate which AWS artifact is associated with a migration task.   The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b.   Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "Unique identifier that references the migration task. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-artifact",
          description:
            "An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "associate-discovered-resource",
      description:
        "Associates a discovered resource ID from Application Discovery Service with a migration task",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "The identifier given to the MigrationTask. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--discovered-resource",
          description: "Object representing a Resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "create-progress-update-stream",
      description:
        "Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account",
      options: [
        {
          name: "--progress-update-stream-name",
          description:
            "The name of the ProgressUpdateStream. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "delete-progress-update-stream",
      description:
        'Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:   The only parameter needed for DeleteProgressUpdateStream is the stream name (same as a CreateProgressUpdateStream call).   The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).   If the stream takes time to be deleted, it might still show up on a ListProgressUpdateStreams call.    CreateProgressUpdateStream, ImportMigrationTask, NotifyMigrationTaskState, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.   Once the stream and all of its resources are deleted, CreateProgressUpdateStream for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream)',
      options: [
        {
          name: "--progress-update-stream-name",
          description:
            "The name of the ProgressUpdateStream. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "describe-application-state",
      description: "Gets the migration status of an application",
      options: [
        {
          name: "--application-id",
          description:
            "The configurationId in Application Discovery Service that uniquely identifies the grouped application",
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
      name: "describe-migration-task",
      description:
        "Retrieves a list of all attributes associated with a specific migration task",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "The identifier given to the MigrationTask. Do not store personal data in this field",
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
      name: "disassociate-created-artifact",
      description:
        "Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:   A migration user can call the DisassociateCreatedArtifacts operation to disassociate a created AWS Artifact from a migration task.   The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b.   Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "Unique identifier that references the migration task to be disassociated with the artifact. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-artifact-name",
          description:
            "An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "disassociate-discovered-resource",
      description:
        "Disassociate an Application Discovery Service discovered resource from a migration task",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "The identifier given to the MigrationTask. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-id",
          description:
            "ConfigurationId of the Application Discovery Service resource to be disassociated",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "import-migration-task",
      description:
        "Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool. This API is a prerequisite to calling the NotifyMigrationTaskState API as the migration tool must first register the migration task with Migration Hub",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream. >",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "Unique identifier that references the migration task. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "list-application-states",
      description:
        "Lists all the migration statuses for your applications. If you use the optional ApplicationIds parameter, only the migration statuses for those applications will be returned",
      options: [
        {
          name: "--application-ids",
          description:
            "The configurationIds from the Application Discovery Service that uniquely identifies your applications",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to be returned per page",
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
      name: "list-created-artifacts",
      description:
        "Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:   Gets the list of the created artifacts while migration is taking place.   Shows the artifacts created by the migration tool that was associated by the AssociateCreatedArtifact API.    Lists created artifacts in a paginated interface",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "Unique identifier that references the migration task. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to be returned per page",
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
      name: "list-discovered-resources",
      description:
        "Lists discovered resources associated with the given MigrationTask",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "The name of the MigrationTask. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results returned per page",
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
      name: "list-migration-tasks",
      description:
        "Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:   Can show a summary list of the most recent migration tasks.   Can show a summary list of migration tasks associated with a given discovered resource.   Lists migration tasks in a paginated interface",
      options: [
        {
          name: "--next-token",
          description:
            "If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Value to specify how many results are returned per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-name",
          description: "Filter migration tasks by discovered resource name",
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
      name: "list-progress-update-streams",
      description:
        "Lists progress update streams associated with the user account making this call",
      options: [
        {
          name: "--next-token",
          description:
            "If a NextToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in NextToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Filter to limit the maximum number of results to list per page",
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
      name: "notify-application-state",
      description:
        "Sets the migration state of an application. For a given application identified by the value passed to ApplicationId, its status is set or updated by passing one of three values to Status: NOT_STARTED | IN_PROGRESS | COMPLETED",
      options: [
        {
          name: "--application-id",
          description:
            "The configurationId in Application Discovery Service that uniquely identifies the grouped application",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Status of the application - Not Started, In-Progress, Complete",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-date-time",
          description: "The timestamp when the application state changed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "notify-migration-task-state",
      description:
        "Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:   Migration tools will call the NotifyMigrationTaskState API to share the latest progress and status.    MigrationTaskName is used for addressing updates to the correct target.    ProgressUpdateStream is used for access control and to provide a namespace for each migration tool",
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "Unique identifier that references the migration task. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--task",
          description: "Information about the task's progress and status",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-date-time",
          description: "The timestamp when the task was gathered",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-update-seconds",
          description:
            "Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
      name: "put-resource-attributes",
      description:
        'Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after PutResourceAttributes returns.    Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to add an IP address, it will then be required to call it with both the IP and MAC addresses to prevent overriding the MAC address.   Note the instructions regarding the special use case of the  ResourceAttributeList  parameter when specifying any "VM" related value.     Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call ListDiscoveredResources',
      options: [
        {
          name: "--progress-update-stream",
          description: "The name of the ProgressUpdateStream",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-task-name",
          description:
            "Unique identifier that references the migration task. Do not store personal data in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-attribute-list",
          description:
            'Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.  Takes the object array of ResourceAttribute where the Type field is reserved for the following values: IPV4_ADDRESS | IPV6_ADDRESS | MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER where the identifying value can be a string up to 256 characters.     If any "VM" related value is set for a ResourceAttribute object, it is required that VM_MANAGER_ID, as a minimum, is always set. If VM_MANAGER_ID is not set, then all "VM" fields will be discarded and "VM" fields will not be used for matching the migration task to a server in Application Discovery Service repository. See the Example section below for a use case of specifying "VM" related values.    If a server you are trying to match has multiple IP or MAC addresses, you should provide as many as you know in separate type/value pairs passed to the ResourceAttributeList parameter to maximize the chances of matching',
          args: {
            name: "list",
          },
        },
        {
          name: "--dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
        {
          name: "--no-dry-run",
          description:
            "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call",
        },
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
