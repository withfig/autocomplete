const completionSpec: Fig.Spec = {
  name: "events",
  description:
    "Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your resources change state, they automatically send events to an event stream. You can create rules that match selected events in the stream and route them to targets to take action. You can also use rules to take action on a predetermined schedule. For example, you can configure rules to:   Automatically invoke an Lambda function to update DNS entries when an event notifies you that Amazon EC2 instance enters the running state.   Direct specific API records from CloudTrail to an Amazon Kinesis data stream for detailed analysis of potential security or availability risks.   Periodically invoke a built-in target to create a snapshot of an Amazon EBS volume.   For more information about the features of Amazon EventBridge, see the Amazon EventBridge User Guide",
  subcommands: [
    {
      name: "activate-event-source",
      description:
        "Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source",
      options: [
        {
          name: "--name",
          description: "The name of the partner event source to activate",
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
      name: "cancel-replay",
      description: "Cancels the specified replay",
      options: [
        {
          name: "--replay-name",
          description: "The name of the replay to cancel",
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
      name: "create-api-destination",
      description:
        "Creates an API destination, which is an HTTP invocation endpoint configured as a target for events. API destinations do not support private destinations, such as interface VPC endpoints. For more information, see API destinations in the EventBridge User Guide",
      options: [
        {
          name: "--name",
          description: "The name for the API destination to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the API destination to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-arn",
          description:
            "The ARN of the connection to use for the API destination. The destination endpoint must support the authorization type specified for the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--invocation-endpoint",
          description:
            "The URL to the HTTP invocation endpoint for the API destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description:
            "The method to use for the request to the HTTP invocation endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--invocation-rate-limit-per-second",
          description:
            "The maximum number of requests per second to send to the HTTP invocation endpoint",
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
      name: "create-archive",
      description:
        "Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.  Archives and schema discovery are not supported for event buses encrypted using a customer managed key. EventBridge returns an error if:   You call  CreateArchive  on an event bus set to use a customer managed key for encryption.   You call  CreateDiscoverer  on an event bus set to use a customer managed key for encryption.   You call  UpdatedEventBus  to set a customer managed key on an event bus with an archives or schema discovery enabled.   To enable archives or schema discovery on an event bus, choose to use an Amazon Web Services owned key. For more information, see Data encryption in EventBridge in the Amazon EventBridge User Guide",
      options: [
        {
          name: "--archive-name",
          description: "The name for the archive to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-source-arn",
          description:
            "The ARN of the event bus that sends events to the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-pattern",
          description:
            "An event pattern to use to filter events sent to the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention-days",
          description:
            "The number of days to retain events for. Default value is 0. If set to 0, events are retained indefinitely",
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
      name: "create-connection",
      description:
        "Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint. For more information, see Connections for endpoint targets in the Amazon EventBridge User Guide",
      options: [
        {
          name: "--name",
          description: "The name for the connection to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the connection to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorization-type",
          description:
            "The type of authorization to use for the connection.  OAUTH tokens are refreshed when a 401 or 407 response is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authorization parameters to use to authorize with the endpoint.  You must include only authorization parameters for the AuthorizationType you specify",
          args: {
            name: "structure",
          },
        },
        {
          name: "--invocation-connectivity-parameters",
          description:
            "For connections to private resource endpoints, the parameters to use for invoking the resource endpoint. For more information, see Connecting to private resources in the  Amazon EventBridge User Guide",
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
      name: "create-endpoint",
      description:
        'Creates a global endpoint. Global endpoints improve your application\'s availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route\u00a053 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state',
      options: [
        {
          name: "--name",
          description:
            'The name of the global endpoint. For example, "Name":"us-east-2-custom_bus_A-endpoint"',
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the global endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-config",
          description:
            "Configure the routing policy, including the health check and secondary Region",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replication-config",
          description:
            "Enable or disable event replication. The default state is ENABLED which means you must supply a RoleArn. If you don't have a RoleArn or you don't want event replication enabled, set the state to DISABLED",
          args: {
            name: "structure",
          },
        },
        {
          name: "--event-buses",
          description:
            "Define the event buses used.   The names of the event buses must be identical in each Region",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description: "The ARN of the role used for replication",
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
      name: "create-event-bus",
      description:
        "Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source",
      options: [
        {
          name: "--name",
          description:
            "The name of the new event bus.  Custom event bus names can't contain the / character, but you can use the / character in partner event bus names. In addition, for partner event buses, the name must exactly match the name of the partner event source that this event bus is matched to. You can't use the name default for a custom event bus, as this name is already used for your account's default event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-source-name",
          description:
            "If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The event bus description",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an Amazon Web Services owned key to encrypt events on the event bus. For more information, see Managing keys in the Key Management Service Developer Guide.   Archives and schema discovery are not supported for event buses encrypted using a customer managed key. EventBridge returns an error if:   You call  CreateArchive  on an event bus set to use a customer managed key for encryption.   You call  CreateDiscoverer  on an event bus set to use a customer managed key for encryption.   You call  UpdatedEventBus  to set a customer managed key on an event bus with an archives or schema discovery enabled.   To enable archives or schema discovery on an event bus, choose to use an Amazon Web Services owned key. For more information, see Data encryption in EventBridge in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--dead-letter-config",
          description:
            "Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ). For more information, see Using dead-letter queues to process undelivered events in the EventBridge User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags to associate with the event bus",
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
      name: "create-partner-event-source",
      description:
        "Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers. Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types.  A partner event source creates events based on resources within the SaaS partner's service or application. An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets. Partner event source names follow this format:   partner_name/event_namespace/event_name      partner_name is determined during partner registration, and identifies the partner to Amazon Web Services customers.     event_namespace is determined by the partner, and is a way for the partner to categorize their events.    event_name is determined by the partner, and should uniquely identify an event-generating resource within the partner system.  The event_name must be unique across all Amazon Web Services customers. This is because the event source is a shared resource between the partner and customer accounts, and each partner event source unique in the partner account.   The combination of event_namespace and event_name should help Amazon Web Services customers decide whether to create an event bus to receive these events",
      options: [
        {
          name: "--name",
          description:
            "The name of the partner event source. This name must be unique and must be in the format  partner_name/event_namespace/event_name . The Amazon Web Services account that wants to use this partner event source must create a partner event bus with a name that matches the name of the partner event source",
          args: {
            name: "string",
          },
        },
        {
          name: "--account",
          description:
            "The Amazon Web Services account ID that is permitted to create a matching partner event bus for this partner event source",
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
      name: "deactivate-event-source",
      description:
        "You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted.  When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted. To activate a deactivated partner event source, use ActivateEventSource",
      options: [
        {
          name: "--name",
          description: "The name of the partner event source to deactivate",
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
      name: "deauthorize-connection",
      description:
        "Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection",
      options: [
        {
          name: "--name",
          description:
            "The name of the connection to remove authorization from",
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
      name: "delete-api-destination",
      description: "Deletes the specified API destination",
      options: [
        {
          name: "--name",
          description: "The name of the destination to delete",
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
      name: "delete-archive",
      description: "Deletes the specified archive",
      options: [
        {
          name: "--archive-name",
          description: "The name of the archive to delete",
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
      name: "delete-connection",
      description: "Deletes a connection",
      options: [
        {
          name: "--name",
          description: "The name of the connection to delete",
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
      name: "delete-endpoint",
      description:
        "Delete an existing global endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the  Amazon EventBridge User Guide",
      options: [
        {
          name: "--name",
          description:
            'The name of the endpoint you want to delete. For example, "Name":"us-east-2-custom_bus_A-endpoint"',
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
      name: "delete-event-bus",
      description:
        "Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus",
      options: [
        {
          name: "--name",
          description: "The name of the event bus to delete",
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
      name: "delete-partner-event-source",
      description:
        "This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers. When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED",
      options: [
        {
          name: "--name",
          description: "The name of the event source to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--account",
          description:
            "The Amazon Web Services account ID of the Amazon Web Services customer that the event source was created for",
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
      name: "delete-rule",
      description:
        "Deletes the specified rule. Before you can delete the rule, you must remove all targets, using RemoveTargets. When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect. If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, ResourceNotFoundException is returned. Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the Force option, but you should do so only if you are sure the other service is not still using that rule",
      options: [
        {
          name: "--name",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description:
            "If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify Force as True to delete the rule. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using DescribeRule or ListRules and checking the ManagedBy field of the response",
        },
        {
          name: "--no-force",
          description:
            "If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify Force as True to delete the rule. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using DescribeRule or ListRules and checking the ManagedBy field of the response",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-api-destination",
      description: "Retrieves details about an API destination",
      options: [
        {
          name: "--name",
          description: "The name of the API destination to retrieve",
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
      name: "describe-archive",
      description: "Retrieves details about an archive",
      options: [
        {
          name: "--archive-name",
          description: "The name of the archive to retrieve",
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
      name: "describe-connection",
      description: "Retrieves details about a connection",
      options: [
        {
          name: "--name",
          description: "The name of the connection to retrieve",
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
      name: "describe-endpoint",
      description:
        "Get the information about an existing global endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the  Amazon EventBridge User Guide",
      options: [
        {
          name: "--name",
          description:
            'The name of the endpoint you want to get information about. For example, "Name":"us-east-2-custom_bus_A-endpoint"',
          args: {
            name: "string",
          },
        },
        {
          name: "--home-region",
          description:
            'The primary Region of the endpoint you want to get information about. For example "HomeRegion": "us-east-1"',
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
      name: "describe-event-bus",
      description:
        "Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.  To enable your account to receive events from other accounts on its default event bus, use PutPermission. For more information about partner event buses, see CreateEventBus",
      options: [
        {
          name: "--name",
          description:
            "The name or ARN of the event bus to show details for. If you omit this, the default event bus is displayed",
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
      name: "describe-event-source",
      description:
        "This operation lists details about a partner event source that is shared with your account",
      options: [
        {
          name: "--name",
          description:
            "The name of the partner event source to display the details of",
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
      name: "describe-partner-event-source",
      description:
        "An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use DescribeEventSource to see details about a partner event source that is shared with them",
      options: [
        {
          name: "--name",
          description: "The name of the event source to display",
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
      name: "describe-replay",
      description:
        "Retrieves details about a replay. Use DescribeReplay to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use StartReplay and specify an EventStartTime and an EventEndTime that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use DescribeReplay to determine the progress of a replay. The value returned for EventLastReplayedTime indicates the time within the specified time range associated with the last event replayed",
      options: [
        {
          name: "--replay-name",
          description: "The name of the replay to retrieve",
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
      name: "describe-rule",
      description:
        "Describes the specified rule. DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule",
      options: [
        {
          name: "--name",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
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
      name: "disable-rule",
      description:
        "Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect",
      options: [
        {
          name: "--name",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
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
      name: "enable-rule",
      description:
        "Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect",
      options: [
        {
          name: "--name",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
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
      name: "list-api-destinations",
      description:
        "Retrieves a list of API destination in the account in the current Region",
      options: [
        {
          name: "--name-prefix",
          description:
            "A name prefix to filter results returned. Only API destinations with a name that starts with the prefix are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-arn",
          description:
            "The ARN of the connection specified for the API destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of API destinations to include in the response",
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
      name: "list-archives",
      description:
        "Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive",
      options: [
        {
          name: "--name-prefix",
          description:
            "A name prefix to filter the archives returned. Only archives with name that match the prefix are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-source-arn",
          description:
            "The ARN of the event source associated with the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of results to return",
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
      name: "list-connections",
      description: "Retrieves a list of connections from the account",
      options: [
        {
          name: "--name-prefix",
          description:
            "A name prefix to filter results returned. Only connections with a name that starts with the prefix are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-state",
          description: "The state of the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of connections to return",
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
      name: "list-endpoints",
      description:
        "List the global endpoints associated with this account. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the  Amazon EventBridge User Guide",
      options: [
        {
          name: "--name-prefix",
          description:
            'A value that will return a subset of the endpoints associated with this account. For example, "NamePrefix": "ABC" will return all endpoints with "ABC" in the name',
          args: {
            name: "string",
          },
        },
        {
          name: "--home-region",
          description:
            'The primary Region of the endpoints associated with this account. For example "HomeRegion": "us-east-1"',
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results returned by the call",
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
      name: "list-event-buses",
      description:
        "Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses",
      options: [
        {
          name: "--name-prefix",
          description:
            "Specifying this limits the results to only those event buses with names that start with the specified prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results",
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
      name: "list-event-sources",
      description:
        "You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see CreateEventBus",
      options: [
        {
          name: "--name-prefix",
          description:
            "Specifying this limits the results to only those partner event sources with names that start with the specified prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results",
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
      name: "list-partner-event-source-accounts",
      description:
        "An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers",
      options: [
        {
          name: "--event-source-name",
          description:
            "The name of the partner event source to display account information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results",
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
      name: "list-partner-event-sources",
      description:
        "An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers",
      options: [
        {
          name: "--name-prefix",
          description:
            "If you specify this, the results are limited to only those partner event sources that start with the string you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "Pecifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results",
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
      name: "list-replays",
      description:
        "Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive",
      options: [
        {
          name: "--name-prefix",
          description:
            "A name prefix to filter the replays returned. Only replays with name that match the prefix are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of the replay",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-source-arn",
          description:
            "The ARN of the archive from which the events are replayed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of replays to retrieve",
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
      name: "list-rule-names-by-target",
      description:
        "Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account. The maximum number of results per page for requests is 100",
      options: [
        {
          name: "--target-arn",
          description: "The Amazon Resource Name (ARN) of the target resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus to list rules for. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of results to return",
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
      name: "list-rules",
      description:
        "Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names. The maximum number of results per page for requests is 100. ListRules does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule",
      options: [
        {
          name: "--name-prefix",
          description: "The prefix matching the rule name",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus to list the rules for. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of results to return",
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
      name: "list-tags-for-resource",
      description:
        "Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the EventBridge resource for which you want to view tags",
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
      name: "list-targets-by-rule",
      description:
        "Lists the targets assigned to the specified rule. The maximum number of results per page for requests is 100",
      options: [
        {
          name: "--rule",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call, which you can use to retrieve the next set of results. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged.  Using an expired pagination token results in an HTTP 400 InvalidToken error",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of results to return",
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
      name: "put-events",
      description:
        "Sends custom events to Amazon EventBridge so that they can be matched to rules. The maximum size for a PutEvents event entry is 256 KB. Entry size is calculated including the event and any necessary characters and keys of the JSON representation of the event. To learn more, see Calculating PutEvents event entry size in the  Amazon EventBridge User Guide   PutEvents accepts the data in JSON format. For the JSON number (integer) data type, the constraints are: a minimum value of -9,223,372,036,854,775,808 and a maximum value of 9,223,372,036,854,775,807.  PutEvents will only process nested JSON up to 1000 levels deep",
      options: [
        {
          name: "--entries",
          description:
            "The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on",
          args: {
            name: "list",
          },
        },
        {
          name: "--endpoint-id",
          description:
            "The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is abcde.veo.  When using Java, you must include auth-crt on the class path",
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
      name: "put-partner-events",
      description:
        "This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation. For information on calculating event batch size, see Calculating EventBridge PutEvents event entry size in the EventBridge User Guide",
      options: [
        {
          name: "--entries",
          description: "The list of events to write to the event bus",
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
      name: "put-permission",
      description:
        "Running PutPermission permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified event bus. Amazon EventBridge rules in your account are triggered by these events arriving to an event bus in your account.  For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target. To enable multiple Amazon Web Services accounts to put events to your event bus, run PutPermission once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run PutPermission once specifying Principal as \"*\" and specifying the Amazon Web Services organization ID in Condition, to grant permissions to all accounts in that organization. If you grant permissions using an organization, then accounts in that organization must specify a RoleArn with proper permissions when they use PutTarget to add your account's event bus as a target. For more information, see Sending and Receiving Events Between Amazon Web Services Accounts in the Amazon EventBridge User Guide. The permission policy on the event bus cannot exceed 10 KB in size",
      options: [
        {
          name: "--event-bus-name",
          description:
            "The name of the event bus associated with the rule. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "The action that you are enabling the other account to perform",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            'The 12-digit Amazon Web Services account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus. If you specify "*" without specifying Condition, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an account field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts',
          args: {
            name: "string",
          },
        },
        {
          name: "--statement-id",
          description:
            "An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this StatementId when you run RemovePermission.  Each StatementId must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--condition",
          description:
            'This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain Amazon Web Services organization. For more information about Amazon Web Services Organizations, see What Is Amazon Web Services Organizations in the Amazon Web Services Organizations User Guide. If you specify Condition with an Amazon Web Services organization ID, and specify "*" as the value for Principal, you grant permission to all the accounts in the named organization. The Condition is a JSON string which must contain Type, Key, and Value fields',
          args: {
            name: "structure",
          },
        },
        {
          name: "--policy",
          description:
            "A JSON string that describes the permission policy statement. You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters",
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
      name: "put-rule",
      description:
        "Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see CreateEventBus. If you are updating an existing rule, the rule is replaced with what you specify in this PutRule command. If you omit arguments in PutRule, the old values for those arguments are not kept. Instead, they are replaced with null values. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the PutRule operation and assign tags, you must have both the events:PutRule and events:TagResource permissions. If you are updating an existing rule, any tags you specify in the PutRule operation are ignored. To update the tags of an existing rule, use TagResource and UntagResource. Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop. To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change.  An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see Managing Your Costs with Budgets. To create a rule that filters for management events from Amazon Web Services services, see Receiving read-only management events from Amazon Web Services services in the EventBridge User Guide",
      options: [
        {
          name: "--name",
          description: "The name of the rule that you are creating or updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-expression",
          description:
            'The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)"',
          args: {
            name: "string",
          },
        },
        {
          name: "--event-pattern",
          description:
            "The event pattern. For more information, see Amazon EventBridge event patterns in the  Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state of the rule. Valid values include:    DISABLED: The rule is disabled. EventBridge does not match any events against the rule.    ENABLED: The rule is enabled. EventBridge matches events against the rule, except for Amazon Web Services management events delivered through CloudTrail.    ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS: The rule is enabled for all events, including Amazon Web Services management events delivered through CloudTrail. Management events provide visibility into management operations that are performed on resources in your Amazon Web Services account. These are also known as control plane operations. For more information, see Logging management events in the CloudTrail User Guide, and Filtering management events from Amazon Web Services services in the  Amazon EventBridge User Guide . This value is only valid for rules on the default event bus or custom event buses. It does not apply to partner event buses",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role associated with the rule. If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a RoleArn with proper permissions in the Target structure, instead of here in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The list of key-value pairs to associate with the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus to associate with this rule. If you omit this, the default event bus is used",
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
      name: "put-targets",
      description:
        "Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. The maximum number of entries per request is 10.  Each rule can have up to five (5) targets associated with it at one time.  For a list of services you can configure as targets for events, see EventBridge targets in the  Amazon EventBridge User Guide . Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are:    Amazon EBS CreateSnapshot API call     Amazon EC2 RebootInstances API call     Amazon EC2 StopInstances API call     Amazon EC2 TerminateInstances API call    For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions:    For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies.   For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the RoleARN argument in PutTargets.   For more information, see Authentication and Access Control in the  Amazon EventBridge User Guide . If another Amazon Web Services account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon EventBridge Pricing.   Input, InputPath, and InputTransformer are not available with PutTarget if the target is an event bus of a different Amazon Web Services account.  If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a RoleArn with proper permissions in the Target structure. For more information, see Sending and Receiving Events Between Amazon Web Services Accounts in the Amazon EventBridge User Guide.  If you have an IAM role on a cross-account event bus target, a PutTargets call without a role on the same target (same Id and Arn) will not remove the role.  For more information about enabling cross-account events, see PutPermission.  Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code",
      options: [
        {
          name: "--rule",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--targets",
          description: "The targets to update or add to the rule",
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
      name: "remove-permission",
      description:
        "Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus",
      options: [
        {
          name: "--statement-id",
          description:
            "The statement ID corresponding to the account that is no longer allowed to put events to the default event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--remove-all-permissions",
          description: "Specifies whether to remove all permissions",
        },
        {
          name: "--no-remove-all-permissions",
          description: "Specifies whether to remove all permissions",
        },
        {
          name: "--event-bus-name",
          description:
            "The name of the event bus to revoke permissions for. If you omit this, the default event bus is used",
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
      name: "remove-targets",
      description:
        "Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.  A successful execution of RemoveTargets doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.  When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code. The maximum number of entries per request is 10",
      options: [
        {
          name: "--rule",
          description: "The name of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-bus-name",
          description:
            "The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--ids",
          description: "The IDs of the targets to remove from the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--force",
          description:
            "If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify Force as True to remove targets. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using DescribeRule or ListRules and checking the ManagedBy field of the response",
        },
        {
          name: "--no-force",
          description:
            "If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify Force as True to remove targets. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using DescribeRule or ListRules and checking the ManagedBy field of the response",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-replay",
      description:
        "Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an EventStartTime and an EventEndTime that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use DescribeReplay to determine the progress of a replay. The value returned for EventLastReplayedTime indicates the time within the specified time range associated with the last event replayed",
      options: [
        {
          name: "--replay-name",
          description: "The name of the replay to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the replay to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-source-arn",
          description: "The ARN of the archive to replay events from",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-start-time",
          description:
            "A time stamp for the time to start replaying events. Only events that occurred between the EventStartTime and EventEndTime are replayed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--event-end-time",
          description:
            "A time stamp for the time to stop replaying events. Only events that occurred between the EventStartTime and EventEndTime are replayed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--destination",
          description:
            "A ReplayDestination object that includes details about the destination for the replay",
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
      name: "tag-resource",
      description:
        "Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the EventBridge resource that you're adding tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the resource",
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
      name: "test-event-pattern",
      description:
        "Tests whether the specified event pattern matches the provided event. Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match",
      options: [
        {
          name: "--event-pattern",
          description:
            "The event pattern. For more information, see Events and Event Patterns in the  Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--event",
          description:
            "The event, in JSON format, to test against the event pattern. The JSON must follow the format specified in Amazon Web Services Events, and the following fields are mandatory:    id     account     source     time     region     resources     detail-type",
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
      description:
        "Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge, rules and event buses can be tagged",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the EventBridge resource from which you are removing tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
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
      name: "update-api-destination",
      description: "Updates an API destination",
      options: [
        {
          name: "--name",
          description: "The name of the API destination to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The name of the API destination to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-arn",
          description:
            "The ARN of the connection to use for the API destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--invocation-endpoint",
          description: "The URL to the endpoint to use for the API destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--http-method",
          description: "The method to use for the API destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--invocation-rate-limit-per-second",
          description:
            "The maximum number of invocations per second to send to the API destination",
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
      name: "update-archive",
      description: "Updates the specified archive",
      options: [
        {
          name: "--archive-name",
          description: "The name of the archive to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-pattern",
          description:
            "The event pattern to use to filter events sent to the archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention-days",
          description: "The number of days to retain events in the archive",
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
      name: "update-connection",
      description: "Updates settings for a connection",
      options: [
        {
          name: "--name",
          description: "The name of the connection to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorization-type",
          description: "The type of authorization to use for the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-parameters",
          description: "The authorization parameters to use for the connection",
          args: {
            name: "structure",
          },
        },
        {
          name: "--invocation-connectivity-parameters",
          description:
            "For connections to private resource endpoints, the parameters to use for invoking the resource endpoint. For more information, see Connecting to private resources in the  Amazon EventBridge User Guide",
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
      name: "update-endpoint",
      description:
        "Update an existing endpoint. For more information about global endpoints, see Making applications Regional-fault tolerant with global endpoints and event replication in the  Amazon EventBridge User Guide",
      options: [
        {
          name: "--name",
          description: "The name of the endpoint you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-config",
          description:
            "Configure the routing policy, including the health check and secondary Region",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replication-config",
          description:
            "Whether event replication was enabled or disabled by this request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--event-buses",
          description: "Define event buses used for replication",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the role used by event replication for this request",
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
      name: "update-event-bus",
      description: "Updates the specified event bus",
      options: [
        {
          name: "--name",
          description: "The name of the event bus",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an Amazon Web Services owned key to encrypt events on the event bus. For more information, see Managing keys in the Key Management Service Developer Guide.   Archives and schema discovery are not supported for event buses encrypted using a customer managed key. EventBridge returns an error if:   You call  CreateArchive  on an event bus set to use a customer managed key for encryption.   You call  CreateDiscoverer  on an event bus set to use a customer managed key for encryption.   You call  UpdatedEventBus  to set a customer managed key on an event bus with an archives or schema discovery enabled.   To enable archives or schema discovery on an event bus, choose to use an Amazon Web Services owned key. For more information, see Data encryption in EventBridge in the Amazon EventBridge User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The event bus description",
          args: {
            name: "string",
          },
        },
        {
          name: "--dead-letter-config",
          description:
            "Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ). For more information, see Using dead-letter queues to process undelivered events in the EventBridge User Guide",
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
