const completionSpec: Fig.Spec = {
  name: "kafkactl",
  description: "Command-line interface for Apache Kafka",
  subcommands: [
    {
      name: ["edit", "alter"],
      description: "Alter topics, partitions",
      subcommands: [
        {
          name: "partition",
          description: "Alter a partition",
          options: [
            {
              name: ["--replicas", "-r"],
              description: "Set replicas for a partition",
              isRepeatable: true,
              args: { name: "replicas" },
            },
            { name: ["--validate-only", "-v"], description: "Validate only" },
          ],
        },
        {
          name: "topic",
          description: "Alter a topic",
          options: [
            {
              name: ["--config", "-c"],
              description: "Configs in format `key=value`",
              isRepeatable: true,
              args: { name: "config" },
            },
            {
              name: ["--partitions", "-p"],
              description: "Number of partitions",
              args: { name: "partitions", default: "0" },
            },
            {
              name: ["--replication-factor", "-r"],
              description: "Replication factor",
              args: { name: "replication-factor", default: "0" },
            },
            { name: ["--validate-only", "-v"], description: "Validate only" },
          ],
        },
      ],
    },
    {
      name: "attach",
      description: "Run kafkactl pod in kubernetes and attach to it",
    },
    {
      name: "clone",
      description: "Clone topics, consumerGroups",
      subcommands: [
        {
          name: ["cg", "consumer-group"],
          description: "Clone existing consumerGroup with all offsets",
        },
        {
          name: "topic",
          description:
            "Clone existing topic (number of partitions, replication factor, config entries) to new one",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell auto-completion file",
    },
    {
      name: "config",
      description: "Show and edit configurations",
      subcommands: [
        {
          name: ["currentContext", "current-context"],
          description: "Show current context",
        },
        {
          name: ["getContexts", "get-contexts"],
          description: "List configured contexts",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format. One of: compact",
              args: { name: "output" },
            },
          ],
        },
        {
          name: ["useContext", "use-context"],
          description: "Switch active context",
        },
        { name: "view", description: "Show contents of config file" },
      ],
    },
    {
      name: "consume",
      description: "Consume messages from a topic",
      options: [
        {
          name: ["--exit", "-e"],
          description: "Stop consuming when latest offset is reached",
        },
        {
          name: ["--from-beginning", "-b"],
          description: "Set offset for consumer to the oldest offset",
        },
        {
          name: ["--group", "-g"],
          description: "Consumer group to join",
          args: { name: "group" },
        },
        {
          name: "--key-encoding",
          description:
            "Key encoding (auto-detected by default). One of: none|hex|base64",
          args: { name: "key-encoding" },
        },
        {
          name: "--key-proto-type",
          description: "Key protobuf message type",
          args: { name: "key-proto-type" },
        },
        {
          name: "--max-messages",
          description: "Stop consuming after n messages have been read",
          args: { name: "max-messages", default: "-1" },
        },
        {
          name: "--offset",
          description:
            "Offsets in format `partition=offset (for partitions not specified, other parameters apply)`",
          isRepeatable: true,
          args: { name: "offset" },
        },
        {
          name: ["--output", "-o"],
          description: "Output format. One of: json|yaml",
          args: { name: "output" },
        },
        {
          name: ["--partitions", "-p"],
          description:
            "Partitions to consume. The default is to consume from all partitions",
          isRepeatable: true,
          args: { name: "partitions" },
        },
        { name: "--print-headers", description: "Print message headers" },
        { name: ["--print-keys", "-k"], description: "Print message keys" },
        {
          name: ["--print-schema", "-a"],
          description: "Print details about avro schema used for decoding",
        },
        {
          name: ["--print-timestamps", "-t"],
          description: "Print message timestamps",
        },
        {
          name: "--proto-file",
          description:
            "Additional protobuf description file for searching message description",
          isRepeatable: true,
          args: {
            name: "proto-file",
            template: "filepaths",
          },
        },
        {
          name: "--proto-import-path",
          description:
            "Additional path to search files listed in proto 'import' directive",
          isRepeatable: true,
          args: {
            name: "proto-import-path",
            template: "folders",
          },
        },
        {
          name: "--protoset-file",
          description:
            "Additional compiled protobuf description file for searching message description",
          isRepeatable: true,
          args: {
            name: "protoset-file",
            template: "filepaths",
          },
        },
        {
          name: ["--separator", "-s"],
          description: "Separator to split key and value",
          args: { name: "separator", default: "#" },
        },
        {
          name: "--tail",
          description: "Show only the last n messages on the topic",
          args: { name: "tail", default: "-1" },
        },
        {
          name: "--value-encoding",
          description:
            "Value encoding (auto-detected by default). One of: none|hex|base64",
          args: { name: "value-encoding" },
        },
        {
          name: "--value-proto-type",
          description: "Value protobuf message type",
          args: { name: "value-proto-type" },
        },
      ],
    },
    {
      name: "create",
      description: "Create topics, consumerGroups, acls",
      subcommands: [
        {
          name: ["acl", "access-control-list"],
          description: "Create an acl",
          options: [
            {
              name: ["--allow", "-a"],
              description:
                "Acl of permissionType 'allow' (choose this or 'deny')",
            },
            {
              name: ["--cluster", "-c"],
              description: "Create acl for the cluster",
            },
            {
              name: ["--deny", "-d"],
              description:
                "Acl of permissionType 'deny' (choose this or 'allow')",
            },
            {
              name: ["--group", "-g"],
              description: "Create acl for a consumer group",
              args: { name: "group" },
            },
            {
              name: "--host",
              description: "Hosts to allow",
              isRepeatable: true,
              args: { name: "host" },
            },
            {
              name: ["--operation", "-o"],
              description: "Operations of acl",
              isRepeatable: true,
              args: { name: "operation" },
              isRequired: true,
            },
            {
              name: "--pattern",
              description: "Pattern type. one of (match, prefixed, literal)",
              args: { name: "pattern", default: "literal" },
            },
            {
              name: ["--principal", "-p"],
              description: "Principal to be authenticated",
              args: { name: "principal" },
              isRequired: true,
            },
            {
              name: ["--topic", "-t"],
              description: "Create acl for a topic",
              args: { name: "topic" },
            },
            { name: ["--validate-only", "-v"], description: "Validate only" },
          ],
        },
        {
          name: ["cg", "consumer-group"],
          description: "Create a consumerGroup",
          options: [
            {
              name: "--newest",
              description:
                "Set the offset to newest offset (for all partitions or the specified partition)",
            },
            {
              name: "--offset",
              description:
                "Set offset to this value. offset with value -1 is ignored",
              args: { name: "offset", default: "-1" },
            },
            {
              name: "--oldest",
              description:
                "Set the offset to oldest offset (for all partitions or the specified partition)",
            },
            {
              name: ["--partition", "-p"],
              description:
                "Partition to create group for. -1 stands for all partitions",
              args: { name: "partition", default: "-1" },
            },
            {
              name: ["--topic", "-t"],
              description: "One or more topics to create group for",
              isRepeatable: true,
              args: { name: "topic" },
            },
          ],
        },
        {
          name: "topic",
          description: "Create a topic",
          options: [
            {
              name: ["--config", "-c"],
              description: "Configs in format `key=value`",
              isRepeatable: true,
              args: { name: "config" },
            },
            {
              name: ["--partitions", "-p"],
              description: "Number of partitions",
              args: { name: "partitions", default: "1" },
            },
            {
              name: ["--replication-factor", "-r"],
              description: "Replication factor",
              args: { name: "replication-factor", default: "1" },
            },
            { name: ["--validate-only", "-v"], description: "Validate only" },
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Delete topics, consumerGroups, consumer-group-offset, acls",
      subcommands: [
        {
          name: ["acl", "access-control-list"],
          description: "Delete an acl",
          options: [
            {
              name: ["--allow", "-a"],
              description: "Acl of permissionType 'allow'",
            },
            {
              name: ["--cluster", "-c"],
              description: "Delete acl for the cluster",
            },
            {
              name: ["--deny", "-d"],
              description: "Acl of permissionType 'deny'",
            },
            {
              name: ["--groups", "-g"],
              description: "Delete acl for a consumer group",
            },
            {
              name: ["--operation", "-o"],
              description: "Operation of acl",
              args: { name: "operation" },
              isRequired: true,
            },
            {
              name: "--pattern",
              description:
                "Pattern type. one of (any, match, prefixed, literal)",
              args: { name: "pattern" },
              isRequired: true,
            },
            { name: ["--topics", "-t"], description: "Delete acl for a topic" },
            { name: ["--validate-only", "-v"], description: "Validate only" },
          ],
        },
        {
          name: ["consumer-groups", "consumer-group"],
          description: "Delete a consumer-group",
        },
        {
          name: ["cgo", "offset", "consumer-group-offset"],
          description: "Delete a consumer-group-offset",
          options: [
            {
              name: ["--partition", "-p"],
              description:
                "Delete offset for this partition. -1 stands for all partitions",
              args: { name: "partition", default: "-1" },
            },
            {
              name: ["--topic", "-t"],
              description: "Delete offset for this topic",
              args: { name: "topic" },
            },
          ],
        },
        { name: "topic", description: "Delete a topic" },
      ],
    },
    {
      name: "describe",
      description: "Describe topics, consumerGroups, brokers",
      subcommands: [
        {
          name: "broker",
          description: "Describe a broker",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide",
              args: { name: "output" },
            },
          ],
        },
        {
          name: ["cg", "consumer-group"],
          description: "Describe a consumerGroup",
          options: [
            {
              name: ["--only-with-lag", "-l"],
              description: "Show only partitions that have a lag",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide",
              args: { name: "output" },
            },
            {
              name: ["--print-members", "-m"],
              description: "Print group members",
            },
            {
              name: ["--print-topics", "-T"],
              description: "Print topic details",
            },
            {
              name: ["--topic", "-t"],
              description: "Show group details for given topic only",
              args: { name: "topic" },
            },
          ],
        },
        {
          name: "topic",
          description: "Describe a topic",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide",
              args: { name: "output" },
            },
            { name: ["--print-configs", "-c"], description: "Print configs" },
            {
              name: ["--skip-empty", "-s"],
              description: "Show only partitions that have a messages",
            },
          ],
        },
      ],
    },
    {
      name: ["list", "get"],
      description: "Get info about topics, consumerGroups, acls, brokers",
      subcommands: [
        {
          name: ["acl", "access-control-list"],
          description: "List available acls",
          options: [
            {
              name: ["--allow", "-a"],
              description: "Acl of permissionType 'allow'",
            },
            {
              name: ["--cluster", "-c"],
              description: "List acl for the cluster",
            },
            {
              name: ["--deny", "-d"],
              description: "Acl of permissionType 'deny'",
            },
            {
              name: ["--groups", "-g"],
              description: "List acl for consumer groups",
            },
            {
              name: "--operation",
              description: "Operation of acl",
              args: { name: "operation", default: "any" },
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml",
              args: { name: "output" },
            },
            {
              name: "--pattern",
              description:
                "Pattern type. one of (any, match, prefixed, literal)",
              args: { name: "pattern", default: "any" },
            },
            { name: ["--topics", "-t"], description: "List acl for topics" },
          ],
        },
        {
          name: "brokers",
          description: "List brokers",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|compact",
              args: { name: "output" },
            },
          ],
        },
        {
          name: ["cg", "consumer-groups"],
          description: "List available consumerGroups",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide|compact",
              args: { name: "output" },
            },
            {
              name: ["--topic", "-t"],
              description: "Show groups for given topic only",
              args: { name: "topic" },
            },
          ],
        },
        {
          name: "topics",
          description: "List available topics",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide|compact",
              args: { name: "output" },
            },
          ],
        },
      ],
    },
    {
      name: "produce",
      description: "Produce messages to a topic",
      options: [
        {
          name: ["--file", "-f"],
          description: "File to read input from",
          args: { name: "file" },
        },
        {
          name: ["--header", "-H"],
          description: "Headers in format `key:value`",
          isRepeatable: true,
          args: { name: "header" },
        },
        {
          name: ["--key", "-k"],
          description: "Key to use for all messages",
          args: { name: "key" },
        },
        {
          name: "--key-encoding",
          description:
            "Key encoding (none by default). One of: none|hex|base64",
          args: { name: "key-encoding" },
        },
        {
          name: "--key-proto-type",
          description: "Key protobuf message type",
          args: { name: "key-proto-type" },
        },
        {
          name: ["--key-schema-version", "-K"],
          description:
            "Avro schema version that should be used for key serialization (default is latest)",
          args: { name: "key-schema-version", default: "-1" },
        },
        {
          name: ["--lineSeparator", "-L"],
          description:
            "Separator to split multiple messages from stdin or file",
          args: { name: "lineSeparator", default: "" },
        },
        {
          name: "--max-message-bytes",
          description:
            "The maximum permitted size of a message (defaults to 1000000)",
          args: { name: "max-message-bytes", default: "0" },
        },
        {
          name: "--null-value",
          description:
            "Produce a null value (can be used instead of providing a value with --value)",
        },
        {
          name: ["--partition", "-p"],
          description: "Partition to produce to",
          args: { name: "partition", default: "-1" },
        },
        {
          name: ["--partitioner", "-P"],
          description:
            "The partitioning scheme to use. Can be `murmur2`, `hash`, `hash-ref` `manual`, or `random`. (default is murmur2)",
          args: { name: "partitioner" },
        },
        {
          name: "--proto-file",
          description:
            "Additional protobuf description file for searching message description",
          isRepeatable: true,
          args: {
            name: "proto-file",
            template: "filepaths",
          },
        },
        {
          name: "--proto-import-path",
          description:
            "Additional path to search files listed in proto 'import' directive",
          isRepeatable: true,
          args: {
            name: "proto-import-path",
            template: "folders",
          },
        },
        {
          name: "--protoset-file",
          description:
            "Additional compiled protobuf description file for searching message description",
          isRepeatable: true,
          args: {
            name: "protoset-file",
            template: "filepaths",
          },
        },
        {
          name: ["--rate", "-r"],
          description: "Amount of messages per second to produce on the topic",
          args: { name: "rate", default: "-1" },
        },
        {
          name: "--required-acks",
          description:
            "Required acks. One of `NoResponse`, `WaitForLocal`, `WaitForAll`. (default is WaitForLocal)",
          args: { name: "required-acks" },
        },
        {
          name: ["--separator", "-S"],
          description: "Separator to split key and value from stdin or file",
          args: { name: "separator" },
        },
        {
          name: ["--silent", "-s"],
          description: "Do not write to standard output",
        },
        {
          name: ["--value", "-v"],
          description: "Value to produce",
          args: { name: "value" },
        },
        {
          name: "--value-encoding",
          description:
            "Value encoding (none by default). One of: none|hex|base64",
          args: { name: "value-encoding" },
        },
        {
          name: "--value-proto-type",
          description: "Value protobuf message type",
          args: { name: "value-proto-type" },
        },
        {
          name: ["--value-schema-version", "-i"],
          description:
            "Avro schema version that should be used for value serialization (default is latest)",
          args: { name: "value-schema-version", default: "-1" },
        },
      ],
    },
    {
      name: "reset",
      description: "Reset consumerGroupsOffset",
      subcommands: [
        {
          name: ["cgo", "offset", "consumer-group-offset"],
          description: "Reset a consumer group offset",
          options: [
            {
              name: "--all-topics",
              description:
                "Do the operation for all topics in the consumer group",
            },
            {
              name: ["--execute", "-e"],
              description:
                "Execute the reset (as default only the results are displayed for validation)",
            },
            {
              name: "--newest",
              description:
                "Set the offset to newest offset (for all partitions or the specified partition)",
            },
            {
              name: "--offset",
              description:
                "Set offset to this value. offset with value -1 is ignored",
              args: { name: "offset", default: "-1" },
            },
            {
              name: "--oldest",
              description:
                "Set the offset to oldest offset (for all partitions or the specified partition)",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml",
              args: { name: "output" },
            },
            {
              name: ["--partition", "-p"],
              description:
                "Partition to apply the offset. -1 stands for all partitions",
              args: { name: "partition", default: "-1" },
            },
            {
              name: ["--topic", "-t"],
              description: "One ore more topics to change offset for",
              isRepeatable: true,
              args: { name: "topic" },
            },
          ],
        },
      ],
    },
    { name: "version", description: "Print the version of kafkactl" },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: ["edit", "alter"],
          description: "Alter topics, partitions",
          subcommands: [
            { name: "partition", description: "Alter a partition" },
            { name: "topic", description: "Alter a topic" },
          ],
        },
        {
          name: "attach",
          description: "Run kafkactl pod in kubernetes and attach to it",
        },
        {
          name: "clone",
          description: "Clone topics, consumerGroups",
          subcommands: [
            {
              name: ["cg", "consumer-group"],
              description: "Clone existing consumerGroup with all offsets",
            },
            {
              name: "topic",
              description:
                "Clone existing topic (number of partitions, replication factor, config entries) to new one",
            },
          ],
        },
        {
          name: "completion",
          description: "Generate shell auto-completion file",
        },
        {
          name: "config",
          description: "Show and edit configurations",
          subcommands: [
            {
              name: ["currentContext", "current-context"],
              description: "Show current context",
            },
            {
              name: ["getContexts", "get-contexts"],
              description: "List configured contexts",
            },
            {
              name: ["useContext", "use-context"],
              description: "Switch active context",
            },
            { name: "view", description: "Show contents of config file" },
          ],
        },
        { name: "consume", description: "Consume messages from a topic" },
        {
          name: "create",
          description: "Create topics, consumerGroups, acls",
          subcommands: [
            {
              name: ["acl", "access-control-list"],
              description: "Create an acl",
            },
            {
              name: ["cg", "consumer-group"],
              description: "Create a consumerGroup",
            },
            { name: "topic", description: "Create a topic" },
          ],
        },
        {
          name: "delete",
          description:
            "Delete topics, consumerGroups, consumer-group-offset, acls",
          subcommands: [
            {
              name: ["acl", "access-control-list"],
              description: "Delete an acl",
            },
            {
              name: ["consumer-groups", "consumer-group"],
              description: "Delete a consumer-group",
            },
            {
              name: ["cgo", "offset", "consumer-group-offset"],
              description: "Delete a consumer-group-offset",
            },
            { name: "topic", description: "Delete a topic" },
          ],
        },
        {
          name: "describe",
          description: "Describe topics, consumerGroups, brokers",
          subcommands: [
            { name: "broker", description: "Describe a broker" },
            {
              name: ["cg", "consumer-group"],
              description: "Describe a consumerGroup",
            },
            { name: "topic", description: "Describe a topic" },
          ],
        },
        {
          name: ["list", "get"],
          description: "Get info about topics, consumerGroups, acls, brokers",
          subcommands: [
            {
              name: ["acl", "access-control-list"],
              description: "List available acls",
            },
            { name: "brokers", description: "List brokers" },
            {
              name: ["cg", "consumer-groups"],
              description: "List available consumerGroups",
            },
            { name: "topics", description: "List available topics" },
          ],
        },
        { name: "produce", description: "Produce messages to a topic" },
        {
          name: "reset",
          description: "Reset consumerGroupsOffset",
          subcommands: [
            {
              name: ["cgo", "offset", "consumer-group-offset"],
              description: "Reset a consumer group offset",
            },
          ],
        },
        { name: "version", description: "Print the version of kafkactl" },
      ],
    },
  ],
  options: [
    {
      name: ["--config-file", "-C"],
      description:
        "Config file. one of: [$HOME/.config/kafkactl $HOME/.kafkactl $SNAP_REAL_HOME/.config/kafkactl $SNAP_DATA/kafkactl /etc/kafkactl]",
      isPersistent: true,
      args: {
        name: "config-file",
        template: "filepaths",
      },
    },
    {
      name: ["--verbose", "-V"],
      description: "Verbose output",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
