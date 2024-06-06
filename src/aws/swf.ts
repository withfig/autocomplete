const completionSpec: Fig.Spec = {
  name: "swf",
  description:
    "Amazon Simple Workflow Service The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to coordinate work across distributed components. In Amazon SWF, a task represents a logical unit of work that is performed by a component of your workflow. Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and concurrency in accordance with the logical flow of the application. Amazon SWF gives you full control over implementing tasks and coordinating them without worrying about underlying complexities such as tracking their progress and maintaining their state. This documentation serves as reference only. For a broader overview of the Amazon SWF programming model, see the  Amazon SWF Developer Guide",
  subcommands: [
    {
      name: "count-closed-workflow-executions",
      description:
        "Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    tagFilter.tag: String constraint. The key is swf:tagFilter.tag.    typeFilter.name: String constraint. The key is swf:typeFilter.name.    typeFilter.version: String constraint. The key is swf:typeFilter.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the workflow executions to count",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-filter",
          description:
            "If specified, only workflow executions that meet the start time criteria of the filter are counted.   startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--close-time-filter",
          description:
            "If specified, only workflow executions that meet the close time criteria of the filter are counted.   startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-filter",
          description:
            "If specified, only workflow executions matching the WorkflowId in the filter are counted.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type-filter",
          description:
            "If specified, indicates the type of the workflow executions to be counted.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-filter",
          description:
            "If specified, only executions that have a tag that matches the filter are counted.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--close-status-filter",
          description:
            "If specified, only workflow executions that match this close status are counted. This filter has an affect only if executionStatus is specified as CLOSED.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
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
      name: "count-open-workflow-executions",
      description:
        "Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    tagFilter.tag: String constraint. The key is swf:tagFilter.tag.    typeFilter.name: String constraint. The key is swf:typeFilter.name.    typeFilter.version: String constraint. The key is swf:typeFilter.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the workflow executions to count",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-filter",
          description:
            "Specifies the start time criteria that workflow executions must meet in order to be counted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type-filter",
          description:
            "Specifies the type of the workflow executions to be counted.   executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-filter",
          description:
            "If specified, only executions that have a tag that matches the filter are counted.   executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-filter",
          description:
            "If specified, only workflow executions matching the WorkflowId in the filter are counted.   executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
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
      name: "count-pending-activity-tasks",
      description:
        "Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 is returned.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description: "The name of the domain that contains the task list",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-list",
          description: "The name of the task list",
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
      name: "count-pending-decision-tasks",
      description:
        "Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 is returned.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description: "The name of the domain that contains the task list",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-list",
          description: "The name of the task list",
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
      name: "delete-activity-type",
      description:
        "Deletes the specified activity type. Note: Prior to deletion, activity types must first be deprecated.   After an activity type has been deleted, you cannot schedule new activities of that type. Activities that started before the type was deleted will continue to run.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    activityType.name: String constraint. The key is swf:activityType.name.    activityType.version: String constraint. The key is swf:activityType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the activity type is registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--activity-type",
          description: "The activity type to delete",
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
      name: "delete-workflow-type",
      description:
        "Deletes the specified workflow type. Note: Prior to deletion, workflow types must first be deprecated.  After a workflow type has been deleted, you cannot create new executions of that type. Executions that started before the type was deleted will continue to run.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    workflowType.name: String constraint. The key is swf:workflowType.name.    workflowType.version: String constraint. The key is swf:workflowType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the workflow type is registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description: "The workflow type to delete",
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
      name: "deprecate-activity-type",
      description:
        "Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    activityType.name: String constraint. The key is swf:activityType.name.    activityType.version: String constraint. The key is swf:activityType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the activity type is registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--activity-type",
          description: "The activity type to deprecate",
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
      name: "deprecate-domain",
      description:
        "Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the domain to deprecate",
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
      name: "deprecate-workflow-type",
      description:
        "Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    workflowType.name: String constraint. The key is swf:workflowType.name.    workflowType.version: String constraint. The key is swf:workflowType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the workflow type is registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description: "The workflow type to deprecate",
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
      name: "describe-activity-type",
      description:
        "Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    activityType.name: String constraint. The key is swf:activityType.name.    activityType.version: String constraint. The key is swf:activityType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the activity type is registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--activity-type",
          description:
            "The activity type to get information about. Activity types are identified by the name and version that were supplied when the activity was registered",
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
      name: "describe-domain",
      description:
        "Returns information about the specified domain, including description and status.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the domain to describe",
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
      name: "describe-workflow-execution",
      description:
        "Returns information about the specified workflow execution including its type and some statistics.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution",
          description: "The workflow execution to describe",
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
      name: "describe-workflow-type",
      description:
        "Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    workflowType.name: String constraint. The key is swf:workflowType.name.    workflowType.version: String constraint. The key is swf:workflowType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which this workflow type is registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description: "The workflow type to describe",
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
      name: "get-workflow-execution-history",
      description:
        "Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution",
          description:
            "Specifies the workflow execution for which to return the history",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call',
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimeStamp of the events",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimeStamp of the events",
        },
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
      name: "list-activity-types",
      description:
        "Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the activity types have been registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "If specified, only lists the activity types that have this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--registration-status",
          description:
            "Specifies the registration status of the activity types to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call',
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by name of the activity types",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by name of the activity types",
        },
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
      name: "list-closed-workflow-executions",
      description:
        "Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    tagFilter.tag: String constraint. The key is swf:tagFilter.tag.    typeFilter.name: String constraint. The key is swf:typeFilter.name.    typeFilter.version: String constraint. The key is swf:typeFilter.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain that contains the workflow executions to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-filter",
          description:
            "If specified, the workflow executions are included in the returned results based on whether their start times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their start times.   startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--close-time-filter",
          description:
            "If specified, the workflow executions are included in the returned results based on whether their close times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their close times.   startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-filter",
          description:
            "If specified, only workflow executions matching the workflow ID specified in the filter are returned.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--close-status-filter",
          description:
            "If specified, only workflow executions that match this close status are listed. For example, if TERMINATED is specified, then only TERMINATED workflow executions are listed.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type-filter",
          description:
            "If specified, only executions of the type specified in the filter are returned.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-filter",
          description:
            "If specified, only executions that have the matching tag are listed.   closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call',
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default the results are returned in descending order of the start or the close time of the executions",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default the results are returned in descending order of the start or the close time of the executions",
        },
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
      name: "list-domains",
      description:
        "Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains. The element must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call',
          args: {
            name: "string",
          },
        },
        {
          name: "--registration-status",
          description:
            "Specifies the registration status of the domains to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by name of the domains",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by name of the domains",
        },
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
      name: "list-open-workflow-executions",
      description:
        "Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    tagFilter.tag: String constraint. The key is swf:tagFilter.tag.    typeFilter.name: String constraint. The key is swf:typeFilter.name.    typeFilter.version: String constraint. The key is swf:typeFilter.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain that contains the workflow executions to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-filter",
          description:
            "Workflow executions are included in the returned results based on whether their start times are within the range specified by this filter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--type-filter",
          description:
            "If specified, only executions of the type specified in the filter are returned.   executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-filter",
          description:
            "If specified, only executions that have the matching tag are listed.   executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call',
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default the results are returned in descending order of the start time of the executions",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default the results are returned in descending order of the start time of the executions",
        },
        {
          name: "--execution-filter",
          description:
            "If specified, only workflow executions matching the workflow ID specified in the filter are returned.   executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request",
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
      name: "list-tags-for-resource",
      description: "List tags for a given domain",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the Amazon SWF domain",
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
      name: "list-workflow-types",
      description:
        "Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the workflow types have been registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "If specified, lists the workflow type with this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--registration-status",
          description:
            "Specifies the registration status of the workflow types to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call',
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default the results are returned in ascending alphabetical order of the name of the workflow types",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the results in reverse order. By default the results are returned in ascending alphabetical order of the name of the workflow types",
        },
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
      name: "poll-for-activity-task",
      description:
        "Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.  Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain that contains the task lists being polled",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-list",
          description:
            "Specifies the task list to poll for activity tasks. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identity",
          description:
            "Identity of the worker making the request, recorded in the ActivityTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined",
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
      name: "poll-for-decision-task",
      description:
        "Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.  Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).   Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionHistory with this nextPageToken. Instead, call PollForDecisionTask again.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the task lists to poll",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-list",
          description:
            "Specifies the task list to poll for decision tasks. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identity",
          description:
            "Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            'If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime".  The configured maximumPageSize determines how many results can be returned in a single call.   The nextPageToken returned by this action cannot be used with GetWorkflowExecutionHistory to get the next page. You must call PollForDecisionTask again (with the nextPageToken) to retrieve the next page of history records. Calling PollForDecisionTask with a nextPageToken doesn\'t return a new decision task',
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-page-size",
          description:
            "The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results.  This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description:
            "When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimestamp of the events",
        },
        {
          name: "--no-reverse-order",
          description:
            "When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimestamp of the events",
        },
        {
          name: "--start-at-previous-started-event",
          description:
            "When set to true, returns the events with eventTimestamp greater than or equal to eventTimestamp of the most recent DecisionTaskStarted event. By default, this parameter is set to false",
        },
        {
          name: "--no-start-at-previous-started-event",
          description:
            "When set to true, returns the events with eventTimestamp greater than or equal to eventTimestamp of the most recent DecisionTaskStarted event. By default, this parameter is set to false",
        },
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
      name: "record-activity-task-heartbeat",
      description:
        "Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker.  The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType.   This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.   If the cancelRequested flag returns true, a cancellation is being attempted. If the worker can cancel the activity, it should respond with RespondActivityTaskCanceled. Otherwise, it should ignore the cancellation request.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--task-token",
          description:
            "The taskToken of the ActivityTask.   taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description:
            "If specified, contains details about the progress of the task",
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
      name: "register-activity-type",
      description:
        "Registers a new activity type along with its configuration settings in the specified domain.  A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name.    name: String constraint. The key is swf:name.    version: String constraint. The key is swf:version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which this activity is to be registered",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the activity type within the domain. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A textual description of the activity type",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-start-to-close-timeout",
          description:
            "If set, specifies the default maximum duration that a worker can take to process tasks of this activity type. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-heartbeat-timeout",
          description:
            "If set, specifies the default maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-list",
          description:
            "If set, specifies the default task list to use for scheduling tasks of this activity type. This default task list is used if a task list isn't provided when a task is scheduled through the ScheduleActivityTask Decision",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-task-priority",
          description:
            "The default task priority to assign to the activity type. If not assigned, then 0 is used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the in the Amazon SWF Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-schedule-to-start-timeout",
          description:
            "If set, specifies the default maximum duration that a task of this activity type can wait before being assigned to a worker. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-schedule-to-close-timeout",
          description:
            "If set, specifies the default maximum duration for a task of this activity type. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--activity-version",
          description:
            "The version of the activity type.  The activity type consists of the name and version, the combination of which must be unique within the domain.  The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
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
      name: "register-domain",
      description:
        "Registers a new domain.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--name",
          description:
            "Name of the domain to register. The name must be unique in the region that the domain is registered in. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A text description of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-execution-retention-period-in-days",
          description:
            "The duration (in days) that records and histories of workflow executions on the domain should be kept by the service. After the retention period, the workflow execution isn't available in the results of visibility calls. If you pass the value NONE or 0 (zero), then the workflow execution history isn't retained. As soon as the workflow execution completes, the execution record and its history are deleted. The maximum workflow execution retention period is 90 days. For more information about Amazon SWF service limits, see: Amazon SWF Service Limits in the Amazon SWF Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to be added when registering a domain. Tags may only contain unicode letters, digits, whitespace, or these symbols: _ . : / = + - @",
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
      name: "register-workflow-type",
      description:
        "Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action.  If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name.    name: String constraint. The key is swf:name.    version: String constraint. The key is swf:version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which to register the workflow type",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the workflow type. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Textual description of the workflow type",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-start-to-close-timeout",
          description:
            "If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-execution-start-to-close-timeout",
          description:
            'If set, specifies the default maximum duration for executions of this workflow type. You can override this default when starting an execution through the StartWorkflowExecution Action or StartChildWorkflowExecution Decision. The duration is specified in seconds; an integer greater than or equal to 0. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for defaultExecutionStartToCloseTimeout; there is a one-year max limit on the time that a workflow execution can run. Exceeding this limit always causes the workflow execution to time out',
          args: {
            name: "string",
          },
        },
        {
          name: "--default-task-list",
          description:
            "If set, specifies the default task list to use for scheduling decision tasks for executions of this workflow type. This default is used only if a task list isn't provided when starting the execution through the StartWorkflowExecution Action or StartChildWorkflowExecution Decision",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-task-priority",
          description:
            "The default task priority to assign to the workflow type. If not assigned, then 0 is used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-child-policy",
          description:
            "If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution Decision. The supported child policies are:    TERMINATE \u2013 The child executions are terminated.    REQUEST_CANCEL \u2013 A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.    ABANDON \u2013 No action is taken. The child executions continue to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-lambda-role",
          description:
            "The default IAM role attached to this workflow type.  Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't specify an IAM role when you start this workflow type, the default Lambda role is attached to the execution. For more information, see https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-version",
          description:
            "The version of the workflow type.  The workflow type consists of the name and version, the combination of which must be unique within the domain. To get a list of all currently registered workflow types, use the ListWorkflowTypes action.  The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
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
      name: "request-cancel-workflow-execution",
      description:
        "Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.  If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.   Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the workflow execution to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The workflowId of the workflow execution to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The runId of the workflow execution to cancel",
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
      name: "respond-activity-task-canceled",
      description:
        "Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history.  Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned.  A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--task-token",
          description:
            "The taskToken of the ActivityTask.   taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description: "Information about the cancellation",
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
      name: "respond-activity-task-completed",
      description:
        "Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history.  If the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled.  A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--task-token",
          description:
            "The taskToken of the ActivityTask.   taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results",
          args: {
            name: "string",
          },
        },
        {
          name: "--result",
          description:
            "The result of the activity task. It is a free form string that is implementation specific",
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
      name: "respond-activity-task-failed",
      description:
        "Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--task-token",
          description:
            "The taskToken of the ActivityTask.   taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "Description of the error that may assist in diagnostics",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description: "Detailed information about the failure",
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
      name: "respond-decision-task-completed",
      description:
        "Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history.  Access Control  If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--task-token",
          description:
            "The taskToken from the DecisionTask.   taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results",
          args: {
            name: "string",
          },
        },
        {
          name: "--decisions",
          description:
            "The list of decisions (possibly empty) made by the decider while processing this decision task. See the docs for the Decision structure for details",
          args: {
            name: "list",
          },
        },
        {
          name: "--execution-context",
          description: "User defined context to add to workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-list",
          description:
            "The task list to use for the future decision tasks of this workflow execution. This list overrides the original task list you specified while starting the workflow execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-list-schedule-to-start-timeout",
          description:
            "Specifies a timeout (in seconds) for the task list override. When this parameter is missing, the task list override is permanent. This parameter makes it possible to temporarily override the task list. If a decision task scheduled on the override task list is not started within the timeout, the decision task will time out. Amazon SWF will revert the override and schedule a new decision task to the original task list. If a decision task scheduled on the override task list is started within the timeout, but not completed within the start-to-close timeout, Amazon SWF will also revert the override and schedule a new decision task to the original task list",
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
      name: "signal-workflow-execution",
      description:
        "Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).  If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain.   If the specified workflow execution isn't open, this method fails with UnknownResource.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain containing the workflow execution to signal",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The workflowId of the workflow execution to signal",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The runId of the workflow execution to signal",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-name",
          description:
            "The name of the signal. This name must be meaningful to the target workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--input",
          description:
            "Data to attach to the WorkflowExecutionSignaled event in the target workflow execution's history",
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
      name: "start-workflow-execution",
      description:
        "Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution.  Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    tagList.member.0: The key is swf:tagList.member.0.    tagList.member.1: The key is swf:tagList.member.1.    tagList.member.2: The key is swf:tagList.member.2.    tagList.member.3: The key is swf:tagList.member.3.    tagList.member.4: The key is swf:tagList.member.4.    taskList: String constraint. The key is swf:taskList.name.    workflowType.name: String constraint. The key is swf:workflowType.name.    workflowType.version: String constraint. The key is swf:workflowType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain in which the workflow execution is created. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description:
            "The user defined identifier associated with the workflow execution. You can use this to associate a custom identifier with the workflow execution. You may specify the same identifier if a workflow execution is logically a restart of a previous execution. You cannot have two open workflow executions with the same workflowId at the same time within the same domain. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description: "The type of the workflow to start",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-list",
          description:
            "The task list to use for the decision tasks generated for this workflow execution. This overrides the defaultTaskList specified when registering the workflow type.  A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.  The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\\u0000-\\u001f | \\u007f-\\u009f). Also, it must not be the literal string arn",
          args: {
            name: "structure",
          },
        },
        {
          name: "--task-priority",
          description:
            "The task priority to use for this workflow execution. This overrides any default priority that was assigned when the workflow type was registered. If not set, then the default task priority for the workflow type is used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--input",
          description:
            "The input for the workflow execution. This is a free form string which should be meaningful to the workflow you are starting. This input is made available to the new workflow execution in the WorkflowExecutionStarted history event",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-start-to-close-timeout",
          description:
            'The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in seconds; an integer greater than or equal to 0. Exceeding this limit causes the workflow execution to time out. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this timeout; there is a one-year max limit on the time that a workflow execution can run.  An execution start-to-close timeout must be specified either through this parameter or as a default when the workflow type is registered. If neither this parameter nor a default execution start-to-close timeout is specified, a fault is returned',
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-list",
          description:
            "The list of tags to associate with the workflow execution. You can specify a maximum of 5 tags. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter",
          args: {
            name: "list",
          },
        },
        {
          name: "--task-start-to-close-timeout",
          description:
            "Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using RegisterWorkflowType. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.  A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--child-policy",
          description:
            "If set, specifies the policy to use for the child workflow executions of this workflow execution if it is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child policies are:    TERMINATE \u2013 The child executions are terminated.    REQUEST_CANCEL \u2013 A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.    ABANDON \u2013 No action is taken. The child executions continue to run.    A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--lambda-role",
          description:
            "The IAM role to attach to this workflow execution.  Executions of this workflow type need IAM roles to invoke Lambda functions. If you don't attach an IAM role, any attempt to schedule a Lambda task fails. This results in a ScheduleLambdaFunctionFailed history event. For more information, see https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html in the Amazon SWF Developer Guide",
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
        "Add a tag to a Amazon SWF domain.  Amazon SWF supports a maximum of 50 tags per resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the Amazon SWF domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tags to add to a domain.  Tags may only contain unicode letters, digits, whitespace, or these symbols: _ . : / = + - @",
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
      name: "terminate-workflow-execution",
      description:
        "Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.  If the identified workflow execution was in progress, it is terminated immediately.   If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain.   You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description: "The domain of the workflow execution to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-id",
          description: "The workflowId of the workflow execution to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The runId of the workflow execution to terminate",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "A descriptive reason for terminating the workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description: "Details for terminating the workflow execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--child-policy",
          description:
            "If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution. The supported child policies are:    TERMINATE \u2013 The child executions are terminated.    REQUEST_CANCEL \u2013 A request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.    ABANDON \u2013 No action is taken. The child executions continue to run.    A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned",
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
      name: "undeprecate-activity-type",
      description:
        "Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can create new tasks of that activity type.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    activityType.name: String constraint. The key is swf:activityType.name.    activityType.version: String constraint. The key is swf:activityType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description: "The name of the domain of the deprecated activity type",
          args: {
            name: "string",
          },
        },
        {
          name: "--activity-type",
          description: "The activity type to undeprecate",
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
      name: "undeprecate-domain",
      description:
        "Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   You cannot use an IAM policy to constrain this action's parameters.   If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the domain of the deprecated workflow type",
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
      name: "undeprecate-workflow-type",
      description:
        "Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can create new executions of that type.   This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.   Access Control  You can use IAM policies to control this action's access to Amazon SWF resources as follows:   Use a Resource element with the domain name to limit the action to only specified domains.   Use an Action element to allow or deny permission to call this action.   Constrain the following parameters by using a Condition element with the appropriate keys.    workflowType.name: String constraint. The key is swf:workflowType.name.    workflowType.version: String constraint. The key is swf:workflowType.version.     If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide",
      options: [
        {
          name: "--domain",
          description: "The name of the domain of the deprecated workflow type",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-type",
          description: "The name of the domain of the deprecated workflow type",
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
      name: "untag-resource",
      description: "Remove a tag from a Amazon SWF domain",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the Amazon SWF domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tags to remove from the Amazon SWF domain",
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
