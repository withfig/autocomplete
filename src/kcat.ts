const completionSpec: Fig.Spec = {
  name: "kcat",
  description: "Apache Kafka producer and consumer tool (formerly kafkacat)",
  args: {
    name: "file or topic",
    isVariadic: true,
    description: "Files to produce from, or topics to consume from or list",
    isOptional: true,
  },
  options: [
    // Modes
    {
      name: "-P",
      description: "Producer mode",
    },
    {
      name: "-C",
      description: "Consumer mode",
    },
    {
      name: "-G",
      description:
        "High-level balanced KafkaConsumer mode using the given group id",
      args: { name: "group-id" },
    },
    {
      name: "-L",
      description:
        "Metadata list mode: show cluster state, topics and partitions",
    },
    {
      name: "-Q",
      description: "Query mode: get offsets for topic partitions by timestamp",
    },
    {
      name: "-M",
      description:
        "Start an in-memory mock cluster with the given broker count",
      args: { name: "broker-count" },
    },
    // General options
    {
      name: "-t",
      description: "Topic to consume from, produce to, or list",
      args: { name: "topic" },
    },
    {
      name: "-p",
      description: "Partition",
      args: { name: "partition" },
    },
    {
      name: "-b",
      description: "Bootstrap broker(s) (host[:port])",
      args: { name: "brokers" },
    },
    {
      name: "-D",
      description:
        "Message delimiter string (a-z, \\r, \\n, \\t, \\xNN); default \\n",
      args: { name: "delim" },
    },
    {
      name: "-K",
      description: "Key delimiter (same format as -D)",
      args: { name: "delim" },
    },
    {
      name: "-c",
      description: "Limit message count to consume or produce",
      args: { name: "count" },
    },
    {
      name: "-m",
      description:
        "Metadata request timeout in seconds (default 5); also bounds transaction commits",
      args: { name: "seconds" },
    },
    {
      name: "-F",
      description:
        "Read configuration properties from file (property=value); default $HOME/.config/kcat.conf",
      args: { name: "config-file", template: "filepaths" },
    },
    {
      name: "-X",
      description:
        "Set a librdkafka configuration property (topic.* for topic props)",
      args: { name: "prop=val" },
    },
    {
      name: "-d",
      description: "Enable librdkafka debugging contexts",
      args: { name: "debug-contexts" },
    },
    {
      name: "-q",
      description: "Be quiet (verbosity 0)",
    },
    {
      name: "-v",
      description: "Increase verbosity",
    },
    {
      name: "-E",
      description: "Do not exit on non-fatal error",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
    {
      name: ["-h", "--help"],
      description: "Print usage help",
    },
    // Producer options
    {
      name: "-z",
      description: "Message compression",
      args: { name: "codec", suggestions: ["snappy", "gzip", "lz4"] },
    },
    {
      name: "-k",
      description:
        "Use a fixed key for all messages (per-message keys from -K take precedence)",
      args: { name: "key" },
    },
    {
      name: "-H",
      description: "Add a message header (header=value); may be repeated",
      args: { name: "header=value" },
    },
    {
      name: "-l",
      description:
        "Send messages from a file separated by delimiter (one file)",
    },
    {
      name: "-T",
      description: "Output sent messages to stdout, acting like tee",
    },
    {
      name: "-Z",
      description:
        "Treat empty messages/keys as NULL (tombstones); print as %s",
    },
    // Consumer options
    {
      name: "-o",
      description:
        "Offset to start consuming from: beginning, end, stored, <value>, -<value>, s@<ts>, e@<ts>",
      args: { name: "offset" },
    },
    {
      name: "-e",
      description: "Exit successfully when the last message is received",
    },
    {
      name: "-f",
      description:
        "Output formatting string (topic %t, partition %p, offset %o, key %k, payload %s, ...)",
      args: { name: "format" },
    },
    {
      name: "-J",
      description: "Output with JSON envelope",
    },
    {
      name: "-s",
      description:
        "Deserialize keys/values: key=<serdes>, value=<serdes>, or avro",
      args: { name: "serdes" },
    },
    {
      name: "-r",
      description: "Schema Registry URL (for the avro deserializer)",
      args: { name: "url" },
    },
    {
      name: "-O",
      description: "Print message offset using the -K delimiter",
    },
    {
      name: "-u",
      description: "Unbuffered output",
    },
  ],
};

export default completionSpec;
