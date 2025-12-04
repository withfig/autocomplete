const completionSpec: Fig.Spec = {
  name: "stepfunctions",
  description:
    "Step Functions Step Functions coordinates the components of distributed applications and microservices using visual workflows. You can use Step Functions to build applications from individual components, each of which performs a discrete function, or task, allowing you to scale and change applications quickly. Step Functions provides a console that helps visualize the components of your application as a series of steps. Step Functions automatically triggers and tracks each step, and retries steps when there are errors, so your application executes predictably and in the right order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any issues. Step Functions manages operations and underlying infrastructure to ensure your application is available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API. For more information about Step Functions, see the  Step Functions Developer Guide .  If you use the Step Functions API actions using Amazon Web Services SDK integrations, make sure the API actions are in camel case and parameter names are in Pascal case. For example, you could use Step Functions API action startSyncExecution and specify its parameter as StateMachineArn",
  subcommands: [
    {
      name: "create-activity",
      description:
        "Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.    CreateActivity is an idempotent API. Subsequent requests won\u2019t create a duplicate resource if it was already created. CreateActivity's idempotency check is based on the activity name. If a following request has different tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different",
      options: [
        {
          name: "--name",
          description:
            'The name of the activity to create. This name must be unique for your Amazon Web Services account and region for 90 days. For more information, see  Limits Related to State Machine Executions in the Step Functions Developer Guide. A name must not contain:   white space   brackets < > { } [ ]    wildcard characters ? *    special characters " # % \\ ^ | ~ ` $ & , ; : /    control characters (U+0000-001F, U+007F-009F)   To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _',
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tags to add to a resource. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--encryption-configuration",
          description: "Settings to configure server-side encryption",
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
      name: "create-state-machine",
      description:
        "Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine.  For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine.   This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.    CreateStateMachine is an idempotent API. Subsequent requests won\u2019t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, LoggingConfiguration, TracingConfiguration, and EncryptionConfiguration The check is also based on the publish and versionDescription parameters. If a following request has a different roleArn or tags, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, roleArn and tags will not be updated, even if they are different",
      options: [
        {
          name: "--name",
          description:
            'The name of the state machine.  A name must not contain:   white space   brackets < > { } [ ]    wildcard characters ? *    special characters " # % \\ ^ | ~ ` $ & , ; : /    control characters (U+0000-001F, U+007F-009F)   To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _',
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The Amazon States Language definition of the state machine. See Amazon States Language",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role to use for this state machine",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the type of a state machine once it has been created",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "Defines what execution history events are logged and where they are logged.  By default, the level is set to OFF. For more information see Log Levels in the Step Functions User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to be added when creating a state machine. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--tracing-configuration",
          description: "Selects whether X-Ray tracing is enabled",
          args: {
            name: "structure",
          },
        },
        {
          name: "--publish",
          description:
            "Set to true to publish the first version of the state machine during creation. The default is false",
        },
        {
          name: "--no-publish",
          description:
            "Set to true to publish the first version of the state machine during creation. The default is false",
        },
        {
          name: "--version-description",
          description:
            "Sets description about the state machine version. You can only set the description if the publish parameter is set to true. Otherwise, if you set versionDescription, but publish to false, this API action throws ValidationException",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description: "Settings to configure server-side encryption",
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
      name: "create-state-machine-alias",
      description:
        "Creates an alias for a state machine that points to one or two versions of the same state machine. You can set your application to call StartExecution with an alias and update the version the alias uses without changing the client's code. You can also map an alias to split StartExecution requests between two versions of a state machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify. To create an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You can create up to 100 aliases for each state machine. You must delete unused aliases using the DeleteStateMachineAlias API action.  CreateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource.  Related operations:     DescribeStateMachineAlias     ListStateMachineAliases     UpdateStateMachineAlias     DeleteStateMachineAlias",
      options: [
        {
          name: "--description",
          description: "A description for the state machine alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the state machine alias. To avoid conflict with version ARNs, don't use an integer in the name of the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-configuration",
          description:
            "The routing configuration of a state machine alias. The routing configuration shifts execution traffic between two state machine versions. routingConfiguration contains an array of RoutingConfig objects that specify up to two state machine versions. Step Functions then randomly choses which version to run an execution with based on the weight assigned to each RoutingConfig",
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
      name: "delete-activity",
      description: "Deletes an activity",
      options: [
        {
          name: "--activity-arn",
          description:
            "The Amazon Resource Name (ARN) of the activity to delete",
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
      name: "delete-state-machine",
      description:
        "Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs:   The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.  arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel   If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException.    The following unqualified state machine ARN refers to a state machine named myStateMachine.  arn:partition:states:region:account-id:stateMachine:myStateMachine    This API action also deletes all versions and aliases associated with a state machine.  For EXPRESS state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after DeleteStateMachine API is called",
      options: [
        {
          name: "--state-machine-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine to delete",
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
      name: "delete-state-machine-alias",
      description:
        "Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references.  Related operations:     CreateStateMachineAlias     DescribeStateMachineAlias     ListStateMachineAliases     UpdateStateMachineAlias",
      options: [
        {
          name: "--state-machine-alias-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine alias to delete",
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
      name: "delete-state-machine-version",
      description:
        "Deletes a state machine version. After you delete a version, you can't call StartExecution using that version's ARN or use the version with a state machine alias.  Deleting a state machine version won't terminate its in-progress executions.   You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.   Related operations:     PublishStateMachineVersion     ListStateMachineVersions",
      options: [
        {
          name: "--state-machine-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine version to delete",
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
      name: "describe-activity",
      description:
        "Describes an activity.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes",
      options: [
        {
          name: "--activity-arn",
          description:
            "The Amazon Resource Name (ARN) of the activity to describe",
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
      name: "describe-execution",
      description:
        "Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you can use this API action to return information about the redrives of that execution. In addition, you can use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run. If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns that ARN.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.  Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map Run dispatched them",
      options: [
        {
          name: "--execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--included-data",
          description:
            "If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with includedData = METADATA_ONLY to get a successful response without the encrypted definition",
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
      name: "describe-map-run",
      description:
        "Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run, this API action also returns information about the redrives of that Map Run. For more information, see Examining Map Run in the Step Functions Developer Guide",
      options: [
        {
          name: "--map-run-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies a Map Run",
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
      name: "describe-state-machine",
      description:
        "Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs:   The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.  arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel   If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException.    The following qualified state machine ARN refers to an alias named PROD.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>   If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.    The following unqualified state machine ARN refers to a state machine named myStateMachine.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>    This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes",
      options: [
        {
          name: "--state-machine-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine for which you want the information. If you specify a state machine version ARN, this API returns details about that version. The version ARN is a combination of state machine ARN and the version number separated by a colon (:). For example, stateMachineARN:1",
          args: {
            name: "string",
          },
        },
        {
          name: "--included-data",
          description:
            "If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response without the encrypted definition.   When calling a labelled ARN for an encrypted state machine, the includedData = METADATA_ONLY parameter will not apply because Step Functions needs to decrypt the entire state machine definition to get the Distributed Map state\u2019s definition. In this case, the API caller needs to have kms:Decrypt permission",
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
      name: "describe-state-machine-alias",
      description:
        "Returns details about a state machine alias.  Related operations:     CreateStateMachineAlias     ListStateMachineAliases     UpdateStateMachineAlias     DeleteStateMachineAlias",
      options: [
        {
          name: "--state-machine-alias-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine alias",
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
      name: "describe-state-machine-for-execution",
      description:
        "Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.  This API action is not supported by EXPRESS state machines",
      options: [
        {
          name: "--execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution you want state machine information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--included-data",
          description:
            "If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response without the encrypted definition",
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
      name: "get-activity-task",
      description:
        "Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a taskToken with a null string.  This API action isn't logged in CloudTrail.   Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in the Step Functions Developer Guide",
      options: [
        {
          name: "--activity-arn",
          description:
            "The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create the task using CreateActivity.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--worker-name",
          description:
            "You can provide an arbitrary name in order to identify the worker that the task is assigned to. This name is used when it is logged in the execution history",
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
      name: "get-execution-history",
      description:
        "Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This API action is not supported by EXPRESS state machines",
      options: [
        {
          name: "--execution-arn",
          description: "The Amazon Resource Name (ARN) of the execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reverse-order",
          description: "Lists events in descending order of their timeStamp",
        },
        {
          name: "--no-reverse-order",
          description: "Lists events in descending order of their timeStamp",
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-execution-data",
          description:
            "You can select whether execution data (input or output of a history event) is returned. The default is true",
        },
        {
          name: "--no-include-execution-data",
          description:
            "You can select whether execution data (input or output of a history event) is returned. The default is true",
        },
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
      name: "list-activities",
      description:
        "Lists the existing activities. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
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
      name: "list-executions",
      description:
        "Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted by time, with the most recent execution first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.  This API action is not supported by EXPRESS state machines",
      options: [
        {
          name: "--state-machine-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine whose executions is listed. You can specify either a mapRunArn or a stateMachineArn, but not both. You can also return a list of executions associated with a specific alias or version, by specifying an alias ARN or a version ARN in the stateMachineArn parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-filter",
          description:
            "If specified, only list the executions whose current execution status matches the given filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--map-run-arn",
          description:
            "The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the mapRunArn field is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information, see Examining Map Run in the Step Functions Developer Guide. You can specify either a mapRunArn or a stateMachineArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--redrive-filter",
          description:
            "Sets a filter to list executions based on whether or not they have been redriven. For a Distributed Map, redriveFilter sets a filter to list child workflow executions based on whether or not they have been redriven. If you do not provide a redriveFilter, Step Functions returns a list of both redriven and non-redriven executions. If you provide a state machine ARN in redriveFilter, the API returns a validation exception",
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
      name: "list-map-runs",
      description:
        "Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call DescribeMapRun to obtain more information, if needed",
      options: [
        {
          name: "--execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution for which the Map Runs must be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
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
      name: "list-state-machine-aliases",
      description:
        "Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first.  To list aliases that reference a state machine version, you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.  Related operations:     CreateStateMachineAlias     DescribeStateMachineAlias     UpdateStateMachineAlias     DeleteStateMachineAlias",
      options: [
        {
          name: "--state-machine-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine for which you want to list aliases. If you specify a state machine version ARN, this API returns a list of aliases for that version",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
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
      name: "list-state-machine-versions",
      description:
        "Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in descending order of the version creation time. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.  Related operations:     PublishStateMachineVersion     DeleteStateMachineVersion",
      options: [
        {
          name: "--state-machine-arn",
          description: "The Amazon Resource Name (ARN) of the state machine",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
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
      name: "list-state-machines",
      description:
        "Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error",
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
      description:
        "List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the Step Functions state machine or activity",
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
      name: "publish-state-machine-version",
      description:
        "Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action.  PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision.  Related operations:     DeleteStateMachineVersion     ListStateMachineVersions",
      options: [
        {
          name: "--state-machine-arn",
          description: "The Amazon Resource Name (ARN) of the state machine",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "Only publish the state machine version if the current state machine's revision ID matches the specified ID. Use this option to avoid publishing a version if the state machine changed since you last updated it. If the specified revision ID doesn't match the state machine's current revision ID, the API returns ConflictException.  To specify an initial revision ID for a state machine with no revision ID assigned, specify the string INITIAL for the revisionId parameter. For example, you can specify a revisionID of INITIAL when you create a state machine using the CreateStateMachine API action",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description of the state machine version",
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
      name: "redrive-execution",
      description:
        "Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt. For workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run.  This API action is not supported by EXPRESS state machines. However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redriving its Map Run. When you redrive a Map Run, the Express child workflows are rerun using the StartExecution API action. For more information, see Redriving Map Runs.  You can redrive executions if your original execution meets the following conditions:   The execution status isn't SUCCEEDED.   Your workflow execution has not exceeded the redrivable period of 14 days. Redrivable period refers to the time during which you can redrive a given execution. This period starts from the day a state machine completes its execution.   The workflow execution has not exceeded the maximum open time of one year. For more information about state machine quotas, see Quotas related to state machine executions.   The execution event history count is less than 24,999. Redriven executions append their event history to the existing event history. Make sure your workflow execution contains less than 24,999 events to accommodate the ExecutionRedriven history event and at least one other history event",
      options: [
        {
          name: "--execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution to be redriven",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don\u2019t specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency. The API will return idempotent responses for the last 10 client tokens used to successfully redrive the execution. These client tokens are valid for up to 15 minutes after they are first used",
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
      name: "send-task-failure",
      description:
        "Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken failed. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted",
      options: [
        {
          name: "--task-token",
          description:
            "The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the context object when a workflow enters a task state. See GetActivityTaskOutput$taskToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--error",
          description: "The error code of the failure",
          args: {
            name: "string",
          },
        },
        {
          name: "--cause",
          description:
            "A more detailed explanation of the cause of the failure",
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
      name: "send-task-heartbeat",
      description:
        "Used by activity workers and Task states using the callback pattern, and optionally Task states using the job run pattern to report to Step Functions that the task represented by the specified taskToken is still making progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for activities, or a TaskTimedOut entry for tasks using the job run or callback pattern.  The Timeout of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for heartbeats",
      options: [
        {
          name: "--task-token",
          description:
            "The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the context object when a workflow enters a task state. See GetActivityTaskOutput$taskToken",
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
      name: "send-task-success",
      description:
        "Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken completed successfully",
      options: [
        {
          name: "--task-token",
          description:
            "The token that represents this task. Task tokens are generated by Step Functions when tasks are assigned to a worker, or in the context object when a workflow enters a task state. See GetActivityTaskOutput$taskToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-output",
          description:
            "The JSON output of the task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding",
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
      name: "start-execution",
      description:
        "Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs:   The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.  arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel   If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException.    The following qualified state machine ARN refers to an alias named PROD.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>   If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.    The following unqualified state machine ARN refers to a state machine named myStateMachine.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>    If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution. To start executions of a state machine version, call StartExecution and provide the version ARN or the ARN of an alias that points to the version.   StartExecution is idempotent for STANDARD workflows. For a STANDARD workflow, if you call StartExecution with the same name and input as a running execution, the call succeeds and return the same response as the original request. If the execution is closed or if the input is different, it returns a 400 ExecutionAlreadyExists error. You can reuse names after 90 days.   StartExecution isn't idempotent for EXPRESS workflows",
      options: [
        {
          name: "--state-machine-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine to execute. The stateMachineArn parameter accepts one of the following inputs:    An unqualified state machine ARN \u2013 Refers to a state machine ARN that isn't qualified with a version or alias ARN. The following is an example of an unqualified state machine ARN.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>  Step Functions doesn't associate state machine executions that you start with an unqualified ARN with a version. This is true even if that version uses the same revision that the execution used.    A state machine version ARN \u2013 Refers to a version ARN, which is a combination of state machine ARN and the version number separated by a colon (:). The following is an example of the ARN for version 10.   arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>:10  Step Functions doesn't associate executions that you start with a version ARN with any aliases that point to that version.    A state machine alias ARN \u2013 Refers to an alias ARN, which is a combination of state machine ARN and the alias name separated by a colon (:). The following is an example of the ARN for an alias named PROD.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>  Step Functions associates executions that you start with an alias ARN with that alias and the state machine version used for that execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Optional name of the execution. This name must be unique for your Amazon Web Services account, Region, and state machine for 90 days. For more information, see  Limits Related to State Machine Executions in the Step Functions Developer Guide. If you don't provide a name for the execution, Step Functions automatically generates a universally unique identifier (UUID) as the execution name. A name must not contain:   white space   brackets < > { } [ ]    wildcard characters ? *    special characters \" # % \\ ^ | ~ ` $ & , ; : /    control characters (U+0000-001F, U+007F-009F)   To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _",
          args: {
            name: "string",
          },
        },
        {
          name: "--input",
          description:
            'The string that contains the JSON input data for the execution, for example:  "input": "{\\"first_name\\" : \\"test\\"}"   If you don\'t include any JSON input data, you still must include the two braces, for example: "input": "{}"   Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding',
          args: {
            name: "string",
          },
        },
        {
          name: "--trace-header",
          description:
            "Passes the X-Ray trace header. The trace header can also be passed in the request payload",
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
      name: "start-sync-execution",
      description:
        "Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD workflows.   StartSyncExecution will return a 200 OK response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration.    This API action isn't logged in CloudTrail",
      options: [
        {
          name: "--state-machine-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine to execute",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--input",
          description:
            'The string that contains the JSON input data for the execution, for example:  "input": "{\\"first_name\\" : \\"test\\"}"   If you don\'t include any JSON input data, you still must include the two braces, for example: "input": "{}"   Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding',
          args: {
            name: "string",
          },
        },
        {
          name: "--trace-header",
          description:
            "Passes the X-Ray trace header. The trace header can also be passed in the request payload",
          args: {
            name: "string",
          },
        },
        {
          name: "--included-data",
          description:
            "If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response without the encrypted definition",
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
      name: "stop-execution",
      description:
        "Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can stop an execution without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted",
      options: [
        {
          name: "--execution-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--error",
          description: "The error code of the failure",
          args: {
            name: "string",
          },
        },
        {
          name: "--cause",
          description:
            "A more detailed explanation of the cause of the failure",
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
        "Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the Step Functions state machine or activity",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tags to add to a resource. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @",
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
      name: "test-state",
      description:
        "Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following:   A state's input and output processing data flow   An Amazon Web Services service integration request and response   An HTTP Task request and response   You can call this API on only one state at a time. The states that you can test include the following:    All Task types except Activity     Pass     Wait     Choice     Succeed     Fail    The TestState API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error.  TestState doesn't support Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map states",
      options: [
        {
          name: "--definition",
          description:
            "The Amazon States Language (ASL) definition of the state",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution role with the required IAM permissions for the state",
          args: {
            name: "string",
          },
        },
        {
          name: "--input",
          description:
            "A string that contains the JSON input data for the state",
          args: {
            name: "string",
          },
        },
        {
          name: "--inspection-level",
          description:
            "Determines the values to return when a state is tested. You can specify one of the following types:    INFO: Shows the final state output. By default, Step Functions sets inspectionLevel to INFO if you don't specify a level.    DEBUG: Shows the final state output along with the input and output data processing result.    TRACE: Shows the HTTP request and response for an HTTP Task. This level also shows the final state output along with the input and output data processing result.   Each of these levels also provide information about the status of the state execution and the next state to transition to",
          args: {
            name: "string",
          },
        },
        {
          name: "--reveal-secrets",
          description:
            "Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step Functions doesn't omit any information included in the state definition or the HTTP response. If you set revealSecrets to true, you must make sure that the IAM user that calls the TestState API has permission for the states:RevealSecrets action. For an example of IAM policy that sets the states:RevealSecrets permission, see IAM permissions to test a state. Without this permission, Step Functions throws an access denied error. By default, revealSecrets is set to false",
        },
        {
          name: "--no-reveal-secrets",
          description:
            "Specifies whether or not to include secret information in the test result. For HTTP Tasks, a secret includes the data that an EventBridge connection adds to modify the HTTP request headers, query parameters, and body. Step Functions doesn't omit any information included in the state definition or the HTTP response. If you set revealSecrets to true, you must make sure that the IAM user that calls the TestState API has permission for the states:RevealSecrets action. For an example of IAM policy that sets the states:RevealSecrets permission, see IAM permissions to test a state. Without this permission, Step Functions throws an access denied error. By default, revealSecrets is set to false",
        },
        {
          name: "--variables",
          description:
            "JSON object literal that sets variables used in the state under test. Object keys are the variable names and values are the variable values",
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
      name: "untag-resource",
      description: "Remove a tag from a Step Functions resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the Step Functions state machine or activity",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tags to remove from the resource",
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
      name: "update-map-run",
      description:
        "Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure",
      options: [
        {
          name: "--map-run-arn",
          description: "The Amazon Resource Name (ARN) of a Map Run",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-concurrency",
          description:
            "The maximum number of child workflow executions that can be specified to run in parallel for the Map Run at the same time",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tolerated-failure-percentage",
          description:
            "The maximum percentage of failed items before the Map Run fails",
          args: {
            name: "float",
          },
        },
        {
          name: "--tolerated-failure-count",
          description:
            "The maximum number of failed items before the Map Run fails",
          args: {
            name: "long",
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
      name: "update-state-machine",
      description:
        "Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs:   The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.  arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel   If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException.    The following qualified state machine ARN refers to an alias named PROD.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>   If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.    The following unqualified state machine ARN refers to a state machine named myStateMachine.  arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>    After you update your state machine, you can set the publish parameter to true in the same action to publish a new version. This way, you can opt-in to strict versioning of your state machine.  Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1.   All StartExecution calls within a few seconds use the updated definition and roleArn. Executions started immediately after you call UpdateStateMachine may use the previous state machine definition and roleArn",
      options: [
        {
          name: "--state-machine-arn",
          description: "The Amazon Resource Name (ARN) of the state machine",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The Amazon States Language definition of the state machine. See Amazon States Language",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role of the state machine",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "Use the LoggingConfiguration data type to set CloudWatch Logs options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tracing-configuration",
          description: "Selects whether X-Ray tracing is enabled",
          args: {
            name: "structure",
          },
        },
        {
          name: "--publish",
          description:
            "Specifies whether the state machine version is published. The default is false. To publish a version after updating the state machine, set publish to true",
        },
        {
          name: "--no-publish",
          description:
            "Specifies whether the state machine version is published. The default is false. To publish a version after updating the state machine, set publish to true",
        },
        {
          name: "--version-description",
          description:
            "An optional description of the state machine version to publish. You can only specify the versionDescription parameter if you've set publish to true",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description: "Settings to configure server-side encryption",
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
      name: "update-state-machine-alias",
      description:
        "Updates the configuration of an existing state machine alias by modifying its description or routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to update a state machine alias.   UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same parameters return an idempotent response.   This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling UpdateStateMachineAlias may use the previous routing configuration.   Related operations:     CreateStateMachineAlias     DescribeStateMachineAlias     ListStateMachineAliases     DeleteStateMachineAlias",
      options: [
        {
          name: "--state-machine-alias-arn",
          description:
            "The Amazon Resource Name (ARN) of the state machine alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the state machine alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-configuration",
          description:
            "The routing configuration of the state machine alias. An array of RoutingConfig objects that specifies up to two state machine versions that the alias starts executions for",
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
      name: "validate-state-machine-definition",
      description:
        "Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based, structured language. You can validate that a state machine definition is correct without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition:   Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments.   Run validation from a Git pre-commit hook to verify the definition before committing to your source repository.   Validation will look for problems in your state machine definition and return a result and a list of diagnostic elements. The result value will be OK when your workflow definition can be successfully created or updated. Note the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL when the workflow definition contains errors that would prevent you from creating or updating your state machine.  The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or ERROR elements.  The ValidateStateMachineDefinition API might add new diagnostics in the future, adjust diagnostic codes, or change the message wording. Your automated processes should only rely on the value of the result field value (OK, FAIL). Do not rely on the exact order, count, or wording of diagnostic messages",
      options: [
        {
          name: "--definition",
          description:
            "The Amazon States Language definition of the state machine. For more information, see Amazon States Language (ASL)",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The target type of state machine for this definition. The default is STANDARD",
          args: {
            name: "string",
          },
        },
        {
          name: "--severity",
          description:
            "Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING returns both WARNING and ERROR diagnostics. The default is ERROR",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of diagnostics that are returned per call. The default and maximum value is 100. Setting the value to 0 will also use the default of 100. If the number of diagnostics returned in the response exceeds maxResults, the value of the truncated field in the response will be set to true",
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
  ],
};
export default completionSpec;
