const completionSpec: Fig.Spec = {
  name: "datapipeline",
  description:
    "AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline handles the details of scheduling and ensuring that data dependencies are met so that your application can focus on processing the data. AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner. AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide custom data management. AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline and define data sources, schedules, dependencies, and the transforms to be performed on the data. Use the second set in your task runner application to receive the next task ready for processing. The logic for performing the task, such as querying the data, running data analysis, or converting the data from one format to another, is contained within the task runner. The task runner performs the task assigned to it by the web service, reporting progress to the web service as it does so. When the task is done, the task runner reports the final success or failure of the task to the web service",
  subcommands: [
    {
      name: "activate-pipeline",
      description:
        "Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails. If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call DeactivatePipeline. To activate a finished pipeline, modify the end date for the pipeline and then activate it",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameter-values",
          description:
            "The JSON parameter values. You can specify these as\nkey-value pairs in the key=value format. Multiple parameters\nare separated by a space. For list type parameter values\nyou can use the same key name and specify each value as\na key value pair. e.g. arrayValue=value1 arrayValue=value2",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--start-timestamp",
          description:
            "The date and time to resume the pipeline. By default, the pipeline resumes from the last completed execution",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--parameter-values-uri",
          description:
            "The JSON parameter values.  If the parameter values are\nin a file you can use the file:// syntax to\nspecify a filename. You can optionally provide these in\npipeline definition as well. Parameter values provided\non command line would replace the one in definition",
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
      name: "add-tags",
      description: "Adds or modifies tags for the specified pipeline",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to add, as key/value pairs",
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
      name: "create-pipeline",
      description:
        "Creates a new, empty pipeline. Use PutPipelineDefinition to populate the pipeline",
      options: [
        {
          name: "--name",
          description:
            "The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--unique-id",
          description:
            "A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline. You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this parameter to ensure idempotency during repeated calls to CreatePipeline. For example, if the first call to CreatePipeline does not succeed, you can pass in the same unique identifier and pipeline name combination on a subsequent call to CreatePipeline. CreatePipeline ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the name and unique identifier combination is scoped to the AWS account or IAM user credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines. For more information, see Controlling User Access to Pipelines in the AWS Data Pipeline Developer Guide",
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
      name: "deactivate-pipeline",
      description:
        "Deactivates the specified running pipeline. The pipeline is set to the DEACTIVATING state until the deactivation process completes. To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--cancel-active",
          description:
            "Indicates whether to cancel any running objects. The default is true, which sets the state of any running objects to CANCELED. If this value is false, the pipeline is deactivated after all running objects finish",
        },
        {
          name: "--no-cancel-active",
          description:
            "Indicates whether to cancel any running objects. The default is true, which sets the state of any running objects to CANCELED. If this value is false, the pipeline is deactivated after all running objects finish",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-pipeline",
      description:
        "Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners. Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call SetStatus with the status set to PAUSE on individual components. Components that are paused by SetStatus can be resumed",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
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
      name: "describe-objects",
      description:
        "Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of a set of fields that define the properties of the object",
      options: [
        {
          name: "--pipeline-id",
          description:
            "The ID of the pipeline that contains the object definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-ids",
          description:
            "The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to DescribeObjects",
          args: {
            name: "list",
          },
        },
        {
          name: "--evaluate-expressions",
          description:
            "Indicates whether any expressions in the object should be evaluated when the object descriptions are returned",
        },
        {
          name: "--no-evaluate-expressions",
          description:
            "Indicates whether any expressions in the object should be evaluated when the object descriptions are returned",
        },
        {
          name: "--marker",
          description:
            "The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call DescribeObjects with the marker value from the previous call to retrieve the next set of results",
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
      name: "describe-pipelines",
      description:
        "Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions. To retrieve the full pipeline definition instead of metadata about the pipeline, call GetPipelineDefinition",
      options: [
        {
          name: "--pipeline-ids",
          description:
            "The IDs of the pipelines to describe. You can pass as many as 25 identifiers in a single call. To obtain pipeline IDs, call ListPipelines",
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
      name: "evaluate-expression",
      description:
        "Task runners call EvaluateExpression to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-id",
          description: "The ID of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description: "The expression to evaluate",
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
      name: "get-pipeline-definition",
      description:
        "Gets the definition of the specified pipeline. You can call GetPipelineDefinition to retrieve the pipeline definition that you provided using PutPipelineDefinition",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-version",
          description:
            "The version of the pipeline definition to retrieve. Set this parameter to latest (default) to use the last definition saved to the pipeline or active to use the last definition that was activated",
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
      name: "list-pipelines",
      description:
        "Lists the pipeline identifiers for all active pipelines that you have permission to access",
      options: [
        {
          name: "--marker",
          description:
            "The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call ListPipelines with the marker value from the previous call to retrieve the next set of results",
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
      name: "poll-for-task",
      description:
        "Task runners call PollForTask to receive a task to perform from AWS Data Pipeline. The task runner specifies which tasks it can perform by setting a value for the workerGroup parameter. The task returned can come from any of the pipelines that match the workerGroup value passed in by the task runner and that was launched using the IAM user credentials specified by the task runner. If tasks are ready in the work queue, PollForTask returns a response immediately. If no tasks are available in the queue, PollForTask uses long-polling and holds on to a poll connection for up to a 90 seconds, during which time the first newly scheduled task is handed to the task runner. To accomodate this, set the socket timeout in your task runner to 90 seconds. The task runner should not call PollForTask again on the same workerGroup until it receives a response, and this can take up to 90 seconds",
      options: [
        {
          name: "--worker-group",
          description:
            "The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for workerGroup in the call to PollForTask. There are no wildcard values permitted in workerGroup; the string must be an exact, case-sensitive, match",
          args: {
            name: "string",
          },
        },
        {
          name: "--hostname",
          description: "The public DNS name of the calling task runner",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-identity",
          description:
            "Identity information for the EC2 instance that is hosting the task runner. You can get this value from the instance using http://169.254.169.254/latest/meta-data/instance-id. For more information, see Instance Metadata in the Amazon Elastic Compute Cloud User Guide. Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline",
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
      name: "put-pipeline-definition",
      description:
        "Adds tasks, schedules, and preconditions to the specified pipeline. You can use PutPipelineDefinition to populate a new pipeline.  PutPipelineDefinition also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following three validation errors exists in the pipeline.   An object is missing a name or identifier field. A string or reference field is empty. The number of objects in the pipeline exceeds the maximum allowed objects. The pipeline is in a FINISHED state.   Pipeline object definitions are passed to the PutPipelineDefinition action and returned by the GetPipelineDefinition action",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameter-objects",
          description:
            "The JSON parameter objects.  If the parameter objects are\nin a file you can use the file:// syntax to\nspecify a filename. You can optionally provide these in\npipeline definition as well. Parameter objects provided\non command line would replace the one in definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameter-values",
          description:
            "The JSON parameter values. You can specify these as\nkey-value pairs in the key=value format. Multiple parameters\nare separated by a space. For list type parameter values\nyou can use the same key name and specify each value as\na key value pair. e.g. arrayValue=value1 arrayValue=value2",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--pipeline-definition",
          description:
            "The JSON pipeline definition.  If the pipeline definition\nis in a file you can use the file:// syntax to\nspecify a filename",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameter-values-uri",
          description:
            "The JSON parameter values.  If the parameter values are\nin a file you can use the file:// syntax to\nspecify a filename. You can optionally provide these in\npipeline definition as well. Parameter values provided\non command line would replace the one in definition",
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
      name: "query-objects",
      description:
        "Queries the specified pipeline for the names of objects that match the specified set of conditions",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--sphere",
          description:
            "Indicates whether the query applies to components or instances. The possible values are: COMPONENT, INSTANCE, and ATTEMPT",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call QueryObjects with the marker value from the previous call to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of object names that QueryObjects will return in a single call. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--objects-query",
          description:
            "The query that defines the objects to be returned. The Query object can contain a maximum of ten selectors. The conditions in the query are limited to top-level String fields in the object. These filters can be applied to components, instances, and attempts",
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
      name: "remove-tags",
      description: "Removes existing tags from the specified pipeline",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
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
      name: "report-task-progress",
      description:
        "Task runners call ReportTaskProgress when assigned a task to acknowledge that it has the task. If the web service does not receive this acknowledgement within 2 minutes, it assigns the task in a subsequent PollForTask call. After this initial acknowledgement, the task runner only needs to report progress every 15 minutes to maintain its ownership of the task. You can change this reporting time from 15 minutes by specifying a reportProgressTimeout field in your pipeline. If a task runner does not report its status after 5 minutes, AWS Data Pipeline assumes that the task runner is unable to process the task and reassigns the task in a subsequent response to PollForTask. Task runners should call ReportTaskProgress every 60 seconds",
      options: [
        {
          name: "--task-id",
          description:
            "The ID of the task assigned to the task runner. This value is provided in the response for PollForTask",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description:
            "Key-value pairs that define the properties of the ReportTaskProgressInput object",
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
      name: "report-task-runner-heartbeat",
      description:
        "Task runners call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational. If the AWS Data Pipeline Task Runner is launched on a resource managed by AWS Data Pipeline, the web service can use this call to detect when the task runner application has failed and restart a new instance",
      options: [
        {
          name: "--taskrunner-id",
          description:
            "The ID of the task runner. This value should be unique across your AWS account. In the case of AWS Data Pipeline Task Runner launched on a resource managed by AWS Data Pipeline, the web service provides a unique identifier when it launches the application. If you have written a custom task runner, you should assign a unique identifier for the task runner",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-group",
          description:
            "The type of task the task runner is configured to accept and process. The worker group is set as a field on objects in the pipeline when they are created. You can only specify a single value for workerGroup. There are no wildcard values permitted in workerGroup; the string must be an exact, case-sensitive, match",
          args: {
            name: "string",
          },
        },
        {
          name: "--hostname",
          description: "The public DNS name of the task runner",
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
      name: "set-status",
      description:
        "Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on FINISHED pipelines and attempting to do so returns InvalidRequestException",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline that contains the objects",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-ids",
          description:
            "The IDs of the objects. The corresponding objects can be either physical or components, but not a mix of both types",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description:
            "The status to be set on all the objects specified in objectIds. For components, use PAUSE or RESUME. For instances, use TRY_CANCEL, RERUN, or MARK_FINISHED",
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
      name: "set-task-status",
      description:
        "Task runners call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status. A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call SetTaskStatus for tasks that are canceled by the web service during a call to ReportTaskProgress",
      options: [
        {
          name: "--task-id",
          description:
            "The ID of the task assigned to the task runner. This value is provided in the response for PollForTask",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-status",
          description:
            "If FINISHED, the task successfully completed. If FAILED, the task ended unsuccessfully. Preconditions use false",
          args: {
            name: "string",
          },
        },
        {
          name: "--error-id",
          description:
            'If an error occurred during the task, this value specifies the error code. This value is set on the physical attempt object. It is used to display error information to the user. It should not start with string "Service_" which is reserved by the system',
          args: {
            name: "string",
          },
        },
        {
          name: "--error-message",
          description:
            "If an error occurred during the task, this value specifies a text description of the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--error-stack-trace",
          description:
            "If an error occurred during the task, this value specifies the stack trace associated with the error. This value is set on the physical attempt object. It is used to display error information to the user. The web service does not parse this value",
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
      name: "validate-pipeline-definition",
      description:
        "Validates the specified pipeline definition to ensure that it is well formed and can be run without error",
      options: [
        {
          name: "--pipeline-id",
          description: "The ID of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--pipeline-objects",
          description:
            "The objects that define the pipeline changes to validate against the pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--parameter-objects",
          description: "The parameter objects used with the pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--parameter-values",
          description: "The parameter values used with the pipeline",
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
      name: "list-runs",
      description:
        "Lists the times the specified pipeline has run. You can optionally filter the complete list of results to include only the runs you are interested in",
      options: [
        {
          name: "--pipeline-id",
          description: "The identifier of the pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filters the list to include only runs in the specified statuses. The valid statuses are as follows: waiting, pending, cancelled, running, finished, failed, waiting_for_runner, and waiting_on_dependencies",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-interval",
          description:
            "Filters the list to include only runs that started within the specified interval",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-interval",
          description:
            "Filters the list to include only runs that are scheduled to start within the specified interval",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "create-default-roles",
      description:
        'NOTE: \nSupport for this command has been deprecated and may fail to create these roles\nif they do not already exist. For more information on managing these policies\nmanually see the following documentation:\n\nhttps://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html\n\n\nCreates the default IAM role "DataPipelineDefaultRole" and "DataPipelineDefaultResourceRole" which are used while creating an EMR\ncluster.\n\nIf these roles do not exist, create-default-roles will automatically create\nthem and set their policies.\n\nIf these roles have already been created create-default-roles will not update\ntheir policies',
    },
  ],
};
export default completionSpec;
