const completionSpec: Fig.Spec = {
    name: "kafkactl",
    description: "command-line interface for Apache Kafka",
    subcommands: [
      {
        name: ["edit", "alter"],
        description: "alter topics, partitions",
        subcommands: [
          {
            name: ["partition"],
            description: "alter a partition",
            options: [
              {
                name: ["--replicas", "-r"],
                description: "set replicas for a partition",
                isRepeatable: true,
                args: [{ name: "replicas" }],
              },
              { name: ["--validate-only", "-v"], description: "validate only" },
            ],
          },
          {
            name: ["topic"],
            description: "alter a topic",
            options: [
              {
                name: ["--config", "-c"],
                description: "configs in format `key=value`",
                isRepeatable: true,
                args: [{ name: "config" }],
              },
              {
                name: ["--partitions", "-p"],
                description: "number of partitions",
                args: [{ name: "partitions", default: "0" }],
              },
              {
                name: ["--replication-factor", "-r"],
                description: "replication factor",
                args: [{ name: "replication-factor", default: "0" }],
              },
              { name: ["--validate-only", "-v"], description: "validate only" },
            ],
          },
        ],
      },
      {
        name: ["attach"],
        description: "run kafkactl pod in kubernetes and attach to it",
      },
      {
        name: ["clone"],
        description: "clone topics, consumerGroups",
        subcommands: [
          {
            name: ["cg", "consumer-group"],
            description: "clone existing consumerGroup with all offsets",
          },
          {
            name: ["topic"],
            description:
              "clone existing topic (number of partitions, replication factor, config entries) to new one",
          },
        ],
      },
      {
        name: ["completion"],
        description: "generate shell auto-completion file",
      },
      {
        name: ["config"],
        description: "show and edit configurations",
        subcommands: [
          {
            name: ["currentContext", "current-context"],
            description: "show current context",
          },
          {
            name: ["getContexts", "get-contexts"],
            description: "list configured contexts",
            options: [
              {
                name: ["--output", "-o"],
                description: "output format. One of: compact",
                args: [{ name: "output" }],
              },
            ],
          },
          {
            name: ["useContext", "use-context"],
            description: "switch active context",
          },
          { name: ["view"], description: "show contents of config file" },
        ],
      },
      {
        name: ["consume"],
        description: "consume messages from a topic",
        options: [
          {
            name: ["--exit", "-e"],
            description: "stop consuming when latest offset is reached",
          },
          {
            name: ["--from-beginning", "-b"],
            description: "set offset for consumer to the oldest offset",
          },
          {
            name: ["--group", "-g"],
            description: "consumer group to join",
            args: [{ name: "group" }],
          },
          {
            name: ["--key-encoding"],
            description:
              "key encoding (auto-detected by default). One of: none|hex|base64",
            args: [{ name: "key-encoding" }],
          },
          {
            name: ["--key-proto-type"],
            description: "key protobuf message type",
            args: [{ name: "key-proto-type" }],
          },
          {
            name: ["--max-messages"],
            description: "stop consuming after n messages have been read",
            args: [{ name: "max-messages", default: "-1" }],
          },
          {
            name: ["--offset"],
            description:
              "offsets in format `partition=offset (for partitions not specified, other parameters apply)`",
            isRepeatable: true,
            args: [{ name: "offset" }],
          },
          {
            name: ["--output", "-o"],
            description: "output format. One of: json|yaml",
            args: [{ name: "output" }],
          },
          {
            name: ["--partitions", "-p"],
            description:
              "partitions to consume. The default is to consume from all partitions.",
            isRepeatable: true,
            args: [{ name: "partitions" }],
          },
          { name: ["--print-headers"], description: "print message headers" },
          { name: ["--print-keys", "-k"], description: "print message keys" },
          {
            name: ["--print-schema", "-a"],
            description: "print details about avro schema used for decoding",
          },
          {
            name: ["--print-timestamps", "-t"],
            description: "print message timestamps",
          },
          {
            name: ["--proto-file"],
            description:
              "additional protobuf description file for searching message description",
            isRepeatable: true,
            args: [{ name: "proto-file" }],
          },
          {
            name: ["--proto-import-path"],
            description:
              "additional path to search files listed in proto 'import' directive",
            isRepeatable: true,
            args: [{ name: "proto-import-path" }],
          },
          {
            name: ["--protoset-file"],
            description:
              "additional compiled protobuf description file for searching message description",
            isRepeatable: true,
            args: [{ name: "protoset-file" }],
          },
          {
            name: ["--separator", "-s"],
            description: "separator to split key and value",
            args: [{ name: "separator", default: "#" }],
          },
          {
            name: ["--tail"],
            description: "show only the last n messages on the topic",
            args: [{ name: "tail", default: "-1" }],
          },
          {
            name: ["--value-encoding"],
            description:
              "value encoding (auto-detected by default). One of: none|hex|base64",
            args: [{ name: "value-encoding" }],
          },
          {
            name: ["--value-proto-type"],
            description: "value protobuf message type",
            args: [{ name: "value-proto-type" }],
          },
        ],
      },
      {
        name: ["create"],
        description: "create topics, consumerGroups, acls",
        subcommands: [
          {
            name: ["acl", "access-control-list"],
            description: "create an acl",
            options: [
              {
                name: ["--allow", "-a"],
                description:
                  "acl of permissionType 'allow' (choose this or 'deny')",
              },
              {
                name: ["--cluster", "-c"],
                description: "create acl for the cluster",
              },
              {
                name: ["--deny", "-d"],
                description:
                  "acl of permissionType 'deny' (choose this or 'allow')",
              },
              {
                name: ["--group", "-g"],
                description: "create acl for a consumer group",
                args: [{ name: "group" }],
              },
              {
                name: ["--host"],
                description: "hosts to allow",
                isRepeatable: true,
                args: [{ name: "host" }],
              },
              {
                name: ["--operation", "-o"],
                description: "operations of acl",
                isRepeatable: true,
                args: [{ name: "operation" }],
                isRequired: true,
              },
              {
                name: ["--pattern"],
                description: "pattern type. one of (match, prefixed, literal)",
                args: [{ name: "pattern", default: "literal" }],
              },
              {
                name: ["--principal", "-p"],
                description: "principal to be authenticated",
                args: [{ name: "principal" }],
                isRequired: true,
              },
              {
                name: ["--topic", "-t"],
                description: "create acl for a topic",
                args: [{ name: "topic" }],
              },
              { name: ["--validate-only", "-v"], description: "validate only" },
            ],
          },
          {
            name: ["cg", "consumer-group"],
            description: "create a consumerGroup",
            options: [
              {
                name: ["--newest"],
                description:
                  "set the offset to newest offset (for all partitions or the specified partition)",
              },
              {
                name: ["--offset"],
                description:
                  "set offset to this value. offset with value -1 is ignored",
                args: [{ name: "offset", default: "-1" }],
              },
              {
                name: ["--oldest"],
                description:
                  "set the offset to oldest offset (for all partitions or the specified partition)",
              },
              {
                name: ["--partition", "-p"],
                description:
                  "partition to create group for. -1 stands for all partitions",
                args: [{ name: "partition", default: "-1" }],
              },
              {
                name: ["--topic", "-t"],
                description: "one or more topics to create group for",
                isRepeatable: true,
                args: [{ name: "topic" }],
              },
            ],
          },
          {
            name: ["topic"],
            description: "create a topic",
            options: [
              {
                name: ["--config", "-c"],
                description: "configs in format `key=value`",
                isRepeatable: true,
                args: [{ name: "config" }],
              },
              {
                name: ["--partitions", "-p"],
                description: "number of partitions",
                args: [{ name: "partitions", default: "1" }],
              },
              {
                name: ["--replication-factor", "-r"],
                description: "replication factor",
                args: [{ name: "replication-factor", default: "1" }],
              },
              { name: ["--validate-only", "-v"], description: "validate only" },
            ],
          },
        ],
      },
      {
        name: ["delete"],
        description: "delete topics, consumerGroups, consumer-group-offset, acls",
        subcommands: [
          {
            name: ["acl", "access-control-list"],
            description: "delete an acl",
            options: [
              {
                name: ["--allow", "-a"],
                description: "acl of permissionType 'allow'",
              },
              {
                name: ["--cluster", "-c"],
                description: "delete acl for the cluster",
              },
              {
                name: ["--deny", "-d"],
                description: "acl of permissionType 'deny'",
              },
              {
                name: ["--groups", "-g"],
                description: "delete acl for a consumer group",
              },
              {
                name: ["--operation", "-o"],
                description: "operation of acl",
                args: [{ name: "operation" }],
                isRequired: true,
              },
              {
                name: ["--pattern"],
                description:
                  "pattern type. one of (any, match, prefixed, literal)",
                args: [{ name: "pattern" }],
                isRequired: true,
              },
              { name: ["--topics", "-t"], description: "delete acl for a topic" },
              { name: ["--validate-only", "-v"], description: "validate only" },
            ],
          },
          {
            name: ["consumer-groups", "consumer-group"],
            description: "delete a consumer-group",
          },
          {
            name: ["cgo", "offset", "consumer-group-offset"],
            description: "delete a consumer-group-offset",
            options: [
              {
                name: ["--partition", "-p"],
                description:
                  "delete offset for this partition. -1 stands for all partitions",
                args: [{ name: "partition", default: "-1" }],
              },
              {
                name: ["--topic", "-t"],
                description: "delete offset for this topic",
                args: [{ name: "topic" }],
              },
            ],
          },
          { name: ["topic"], description: "delete a topic" },
        ],
      },
      {
        name: ["describe"],
        description: "describe topics, consumerGroups, brokers",
        subcommands: [
          {
            name: ["broker"],
            description: "describe a broker",
            options: [
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml|wide",
                args: [{ name: "output" }],
              },
            ],
          },
          {
            name: ["cg", "consumer-group"],
            description: "describe a consumerGroup",
            options: [
              {
                name: ["--only-with-lag", "-l"],
                description: "show only partitions that have a lag",
              },
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml|wide",
                args: [{ name: "output" }],
              },
              {
                name: ["--print-members", "-m"],
                description: "print group members",
              },
              {
                name: ["--print-topics", "-T"],
                description: "print topic details",
              },
              {
                name: ["--topic", "-t"],
                description: "show group details for given topic only",
                args: [{ name: "topic" }],
              },
            ],
          },
          {
            name: ["topic"],
            description: "describe a topic",
            options: [
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml|wide",
                args: [{ name: "output" }],
              },
              { name: ["--print-configs", "-c"], description: "print configs" },
              {
                name: ["--skip-empty", "-s"],
                description: "show only partitions that have a messages",
              },
            ],
          },
        ],
      },
      {
        name: ["list", "get"],
        description: "get info about topics, consumerGroups, acls, brokers",
        subcommands: [
          {
            name: ["acl", "access-control-list"],
            description: "list available acls",
            options: [
              {
                name: ["--allow", "-a"],
                description: "acl of permissionType 'allow'",
              },
              {
                name: ["--cluster", "-c"],
                description: "list acl for the cluster",
              },
              {
                name: ["--deny", "-d"],
                description: "acl of permissionType 'deny'",
              },
              {
                name: ["--groups", "-g"],
                description: "list acl for consumer groups",
              },
              {
                name: ["--operation"],
                description: "operation of acl",
                args: [{ name: "operation", default: "any" }],
              },
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml",
                args: [{ name: "output" }],
              },
              {
                name: ["--pattern"],
                description:
                  "pattern type. one of (any, match, prefixed, literal)",
                args: [{ name: "pattern", default: "any" }],
              },
              { name: ["--topics", "-t"], description: "list acl for topics" },
            ],
          },
          {
            name: ["brokers"],
            description: "list brokers",
            options: [
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml|compact",
                args: [{ name: "output" }],
              },
            ],
          },
          {
            name: ["cg", "consumer-groups"],
            description: "list available consumerGroups",
            options: [
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml|wide|compact",
                args: [{ name: "output" }],
              },
              {
                name: ["--topic", "-t"],
                description: "show groups for given topic only",
                args: [{ name: "topic" }],
              },
            ],
          },
          {
            name: ["topics"],
            description: "list available topics",
            options: [
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml|wide|compact",
                args: [{ name: "output" }],
              },
            ],
          },
        ],
      },
      {
        name: ["produce"],
        description: "produce messages to a topic",
        options: [
          {
            name: ["--file", "-f"],
            description: "file to read input from",
            args: [{ name: "file" }],
          },
          {
            name: ["--header", "-H"],
            description: "headers in format `key:value`",
            isRepeatable: true,
            args: [{ name: "header" }],
          },
          {
            name: ["--key", "-k"],
            description: "key to use for all messages",
            args: [{ name: "key" }],
          },
          {
            name: ["--key-encoding"],
            description:
              "key encoding (none by default). One of: none|hex|base64",
            args: [{ name: "key-encoding" }],
          },
          {
            name: ["--key-proto-type"],
            description: "key protobuf message type",
            args: [{ name: "key-proto-type" }],
          },
          {
            name: ["--key-schema-version", "-K"],
            description:
              "avro schema version that should be used for key serialization (default is latest)",
            args: [{ name: "key-schema-version", default: "-1" }],
          },
          {
            name: ["--lineSeparator", "-L"],
            description:
              "separator to split multiple messages from stdin or file",
            args: [{ name: "lineSeparator", default: "" }],
          },
          {
            name: ["--max-message-bytes"],
            description:
              "the maximum permitted size of a message (defaults to 1000000)",
            args: [{ name: "max-message-bytes", default: "0" }],
          },
          {
            name: ["--null-value"],
            description:
              "produce a null value (can be used instead of providing a value with --value)",
          },
          {
            name: ["--partition", "-p"],
            description: "partition to produce to",
            args: [{ name: "partition", default: "-1" }],
          },
          {
            name: ["--partitioner", "-P"],
            description:
              "the partitioning scheme to use. Can be `murmur2`, `hash`, `hash-ref` `manual`, or `random`. (default is murmur2)",
            args: [{ name: "partitioner" }],
          },
          {
            name: ["--proto-file"],
            description:
              "additional protobuf description file for searching message description",
            isRepeatable: true,
            args: [{ name: "proto-file" }],
          },
          {
            name: ["--proto-import-path"],
            description:
              "additional path to search files listed in proto 'import' directive",
            isRepeatable: true,
            args: [{ name: "proto-import-path" }],
          },
          {
            name: ["--protoset-file"],
            description:
              "additional compiled protobuf description file for searching message description",
            isRepeatable: true,
            args: [{ name: "protoset-file" }],
          },
          {
            name: ["--rate", "-r"],
            description: "amount of messages per second to produce on the topic",
            args: [{ name: "rate", default: "-1" }],
          },
          {
            name: ["--required-acks"],
            description:
              "required acks. One of `NoResponse`, `WaitForLocal`, `WaitForAll`. (default is WaitForLocal)",
            args: [{ name: "required-acks" }],
          },
          {
            name: ["--separator", "-S"],
            description: "separator to split key and value from stdin or file",
            args: [{ name: "separator" }],
          },
          {
            name: ["--silent", "-s"],
            description: "do not write to standard output",
          },
          {
            name: ["--value", "-v"],
            description: "value to produce",
            args: [{ name: "value" }],
          },
          {
            name: ["--value-encoding"],
            description:
              "value encoding (none by default). One of: none|hex|base64",
            args: [{ name: "value-encoding" }],
          },
          {
            name: ["--value-proto-type"],
            description: "value protobuf message type",
            args: [{ name: "value-proto-type" }],
          },
          {
            name: ["--value-schema-version", "-i"],
            description:
              "avro schema version that should be used for value serialization (default is latest)",
            args: [{ name: "value-schema-version", default: "-1" }],
          },
        ],
      },
      {
        name: ["reset"],
        description: "reset consumerGroupsOffset",
        subcommands: [
          {
            name: ["cgo", "offset", "consumer-group-offset"],
            description: "reset a consumer group offset",
            options: [
              {
                name: ["--all-topics"],
                description:
                  "do the operation for all topics in the consumer group",
              },
              {
                name: ["--execute", "-e"],
                description:
                  "execute the reset (as default only the results are displayed for validation)",
              },
              {
                name: ["--newest"],
                description:
                  "set the offset to newest offset (for all partitions or the specified partition)",
              },
              {
                name: ["--offset"],
                description:
                  "set offset to this value. offset with value -1 is ignored",
                args: [{ name: "offset", default: "-1" }],
              },
              {
                name: ["--oldest"],
                description:
                  "set the offset to oldest offset (for all partitions or the specified partition)",
              },
              {
                name: ["--output", "-o"],
                description: "output format. One of: json|yaml",
                args: [{ name: "output" }],
              },
              {
                name: ["--partition", "-p"],
                description:
                  "partition to apply the offset. -1 stands for all partitions",
                args: [{ name: "partition", default: "-1" }],
              },
              {
                name: ["--topic", "-t"],
                description: "one ore more topics to change offset for",
                isRepeatable: true,
                args: [{ name: "topic" }],
              },
            ],
          },
        ],
      },
      { name: ["version"], description: "print the version of kafkactl" },
      {
        name: ["help"],
        description: "Help about any command",
        subcommands: [
          {
            name: ["edit", "alter"],
            description: "alter topics, partitions",
            subcommands: [
              { name: ["partition"], description: "alter a partition" },
              { name: ["topic"], description: "alter a topic" },
            ],
          },
          {
            name: ["attach"],
            description: "run kafkactl pod in kubernetes and attach to it",
          },
          {
            name: ["clone"],
            description: "clone topics, consumerGroups",
            subcommands: [
              {
                name: ["cg", "consumer-group"],
                description: "clone existing consumerGroup with all offsets",
              },
              {
                name: ["topic"],
                description:
                  "clone existing topic (number of partitions, replication factor, config entries) to new one",
              },
            ],
          },
          {
            name: ["completion"],
            description: "generate shell auto-completion file",
          },
          {
            name: ["config"],
            description: "show and edit configurations",
            subcommands: [
              {
                name: ["currentContext", "current-context"],
                description: "show current context",
              },
              {
                name: ["getContexts", "get-contexts"],
                description: "list configured contexts",
              },
              {
                name: ["useContext", "use-context"],
                description: "switch active context",
              },
              { name: ["view"], description: "show contents of config file" },
            ],
          },
          { name: ["consume"], description: "consume messages from a topic" },
          {
            name: ["create"],
            description: "create topics, consumerGroups, acls",
            subcommands: [
              {
                name: ["acl", "access-control-list"],
                description: "create an acl",
              },
              {
                name: ["cg", "consumer-group"],
                description: "create a consumerGroup",
              },
              { name: ["topic"], description: "create a topic" },
            ],
          },
          {
            name: ["delete"],
            description:
              "delete topics, consumerGroups, consumer-group-offset, acls",
            subcommands: [
              {
                name: ["acl", "access-control-list"],
                description: "delete an acl",
              },
              {
                name: ["consumer-groups", "consumer-group"],
                description: "delete a consumer-group",
              },
              {
                name: ["cgo", "offset", "consumer-group-offset"],
                description: "delete a consumer-group-offset",
              },
              { name: ["topic"], description: "delete a topic" },
            ],
          },
          {
            name: ["describe"],
            description: "describe topics, consumerGroups, brokers",
            subcommands: [
              { name: ["broker"], description: "describe a broker" },
              {
                name: ["cg", "consumer-group"],
                description: "describe a consumerGroup",
              },
              { name: ["topic"], description: "describe a topic" },
            ],
          },
          {
            name: ["list", "get"],
            description: "get info about topics, consumerGroups, acls, brokers",
            subcommands: [
              {
                name: ["acl", "access-control-list"],
                description: "list available acls",
              },
              { name: ["brokers"], description: "list brokers" },
              {
                name: ["cg", "consumer-groups"],
                description: "list available consumerGroups",
              },
              { name: ["topics"], description: "list available topics" },
            ],
          },
          { name: ["produce"], description: "produce messages to a topic" },
          {
            name: ["reset"],
            description: "reset consumerGroupsOffset",
            subcommands: [
              {
                name: ["cgo", "offset", "consumer-group-offset"],
                description: "reset a consumer group offset",
              },
            ],
          },
          { name: ["version"], description: "print the version of kafkactl" },
        ],
      },
    ],
    options: [
      {
        name: ["--config-file", "-C"],
        description:
          "config file. one of: [$HOME/.config/kafkactl $HOME/.kafkactl $SNAP_REAL_HOME/.config/kafkactl $SNAP_DATA/kafkactl /etc/kafkactl]",
        isPersistent: true,
        args: [{ name: "config-file" }],
      },
      {
        name: ["--verbose", "-V"],
        description: "verbose output",
        isPersistent: true,
      },
      { name: ["--help", "-h"], description: "Display help", isPersistent: true },
    ],
  };
  export default completionSpec;
