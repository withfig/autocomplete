const completionSpec: Fig.Spec = {
  name: "neptune-graph",
  description:
    "Neptune Analytics is a new analytics database engine for Amazon Neptune that helps customers get to insights faster by quickly processing large amounts of graph data, invoking popular graph analytic algorithms in low-latency queries, and getting analytics results in seconds",
  subcommands: [
    {
      name: "cancel-export-task",
      description: "Cancel the specified export task",
      options: [
        {
          name: "--task-identifier",
          description: "The unique identifier of the export task",
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
      name: "cancel-import-task",
      description: "Deletes the specified import task",
      options: [
        {
          name: "--task-identifier",
          description: "The unique identifier of the import task",
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
      name: "cancel-query",
      description: "Cancels a specified query",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description: "The unique identifier of the query to cancel",
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
      name: "create-graph",
      description: "Creates a new Neptune Analytics graph",
      options: [
        {
          name: "--graph-name",
          description:
            "A name for the new Neptune Analytics graph to be created. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy",
          args: {
            name: "map",
          },
        },
        {
          name: "--public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable",
        },
        {
          name: "--no-public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable",
        },
        {
          name: "--kms-key-identifier",
          description:
            "Specifies a KMS key to use to encrypt data in the new graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-search-configuration",
          description:
            "Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as dimension=value. Max = 65,535",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-count",
          description:
            "The number of replicas in other AZs. Min =0, Max = 2, Default = 1.   Additional charges equivalent to the m-NCUs selected for the graph apply for each replica",
          args: {
            name: "integer",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Indicates whether or not to enable deletion protection on the graph. The graph can\u2019t be deleted when deletion protection is enabled. (true or false)",
        },
        {
          name: "--no-deletion-protection",
          description:
            "Indicates whether or not to enable deletion protection on the graph. The graph can\u2019t be deleted when deletion protection is enabled. (true or false)",
        },
        {
          name: "--provisioned-memory",
          description:
            "The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128",
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
      name: "create-graph-snapshot",
      description: "Creates a snapshot of the specific graph",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-name",
          description:
            "The snapshot name. For example: my-snapshot-1. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy",
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
      name: "create-graph-using-import-task",
      description:
        "Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database or a Neptune database snapshot. The data can be loaded from files in S3 that in either the Gremlin CSV format or the openCypher load format",
      options: [
        {
          name: "--graph-name",
          description:
            "A name for the new Neptune Analytics graph to be created. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy",
          args: {
            name: "map",
          },
        },
        {
          name: "--public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable)",
        },
        {
          name: "--no-public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable)",
        },
        {
          name: "--kms-key-identifier",
          description:
            "Specifies a KMS key to use to encrypt data imported into the new graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--vector-search-configuration",
          description:
            "Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as dimension=value. Max = 65,535",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-count",
          description:
            "The number of replicas in other AZs to provision on the new graph after import. Default = 0, Min = 0, Max = 2.   Additional charges equivalent to the m-NCUs selected for the graph apply for each replica",
          args: {
            name: "integer",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "Indicates whether or not to enable deletion protection on the graph. The graph can\u2019t be deleted when deletion protection is enabled. (true or false)",
        },
        {
          name: "--no-deletion-protection",
          description:
            "Indicates whether or not to enable deletion protection on the graph. The graph can\u2019t be deleted when deletion protection is enabled. (true or false)",
        },
        {
          name: "--import-options",
          description:
            "Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips problem data and attempts to continue (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-provisioned-memory",
          description:
            "The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 1024, or the approved upper limit for your account.  If both the minimum and maximum values are specified, the max of the min-provisioned-memory and max-provisioned memory is used to create the graph. If neither value is specified 128 m-NCUs are used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--min-provisioned-memory",
          description:
            "The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 128",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fail-on-error",
          description:
            "If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible",
        },
        {
          name: "--no-fail-on-error",
          description:
            "If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible",
        },
        {
          name: "--source",
          description:
            "A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or ntriples, which identifies the RDF n-triples format",
          args: {
            name: "string",
          },
        },
        {
          name: "--parquet-type",
          description: "The parquet type of the import task",
          args: {
            name: "string",
          },
        },
        {
          name: "--blank-node-handling",
          description:
            "The method to handle blank nodes in the dataset. Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is ntriples. For more information, see Handling RDF values",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM role that will allow access to the data that is to be imported",
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
      name: "create-private-graph-endpoint",
      description:
        "Create a private graph endpoint to allow private access from to the graph from within a VPC. You can attach security groups to the private graph endpoint.  VPC endpoint charges apply",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The VPC in which the private graph endpoint needs to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "Subnets in which private graph endpoint ENIs are created",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "Security groups to be attached to the private graph endpoint",
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
      name: "delete-graph",
      description:
        "Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-snapshot",
          description:
            "Determines whether a final graph snapshot is created before the graph is deleted. If true is specified, no graph snapshot is created. If false is specified, a graph snapshot is created before the graph is deleted",
        },
        {
          name: "--no-skip-snapshot",
          description:
            "Determines whether a final graph snapshot is created before the graph is deleted. If true is specified, no graph snapshot is created. If false is specified, a graph snapshot is created before the graph is deleted",
        },
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
      name: "delete-graph-snapshot",
      description: "Deletes the specifed graph snapshot",
      options: [
        {
          name: "--snapshot-identifier",
          description: "ID of the graph snapshot to be deleted",
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
      name: "delete-private-graph-endpoint",
      description: "Deletes a private graph endpoint",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the VPC where the private endpoint is located",
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
      name: "execute-query",
      description:
        "Execute an openCypher query.  When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query:    neptune-graph:ReadDataViaQuery   neptune-graph:WriteDataViaQuery   neptune-graph:DeleteDataViaQuery",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-string",
          description: "The query string to be executed",
          args: {
            name: "string",
          },
        },
        {
          name: "--language",
          description:
            "The query language the query is written in. Currently only openCypher is supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            'The data parameters the query can use in JSON format. For example: {"name": "john", "age": 20}. (optional)',
          args: {
            name: "map",
          },
        },
        {
          name: "--plan-cache",
          description:
            "Query plan cache is a feature that saves the query plan and reuses it on successive executions of the same query. This reduces query latency, and works for both READ and UPDATE queries. The plan cache is an LRU cache with a 5 minute TTL and a capacity of 1000",
          args: {
            name: "string",
          },
        },
        {
          name: "--explain-mode",
          description:
            "The explain mode parameter returns a query explain instead of the actual query results. A query explain can be used to gather insights about the query execution such as planning decisions, time spent on each operator, solutions flowing etc",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-timeout-milliseconds",
          description:
            "Specifies the query timeout duration, in milliseconds. (optional)",
          args: {
            name: "integer",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-export-task",
      description: "Retrieves a specified export task",
      options: [
        {
          name: "--task-identifier",
          description: "The unique identifier of the export task",
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
      name: "get-graph",
      description: "Gets information about a specified graph",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
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
      name: "get-graph-snapshot",
      description: "Retrieves a specified graph snapshot",
      options: [
        {
          name: "--snapshot-identifier",
          description: "The ID of the snapshot to retrieve",
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
      name: "get-graph-summary",
      description: "Gets a graph summary for a property graph",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The summary mode can take one of two values: basic (the default), and detailed",
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
      name: "get-import-task",
      description: "Retrieves a specified import task",
      options: [
        {
          name: "--task-identifier",
          description: "The unique identifier of the import task",
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
      name: "get-private-graph-endpoint",
      description: "Retrieves information about a specified private endpoint",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-id",
          description:
            "The ID of the VPC where the private endpoint is located",
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
      name: "get-query",
      description:
        "Retrieves the status of a specified query.   When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have the neptune-graph:GetQueryStatus IAM action attached",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description: "The ID of the query in question",
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
      name: "list-export-tasks",
      description: "Retrieves a list of export tasks",
      options: [
        {
          name: "--next-token",
          description: "Pagination token used to paginate input",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of export tasks to return",
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
      name: "list-graph-snapshots",
      description:
        "Lists available snapshots of a specified Neptune Analytics graph",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI",
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
      name: "list-graphs",
      description: "Lists available Neptune Analytics graphs",
      options: [
        {
          name: "--next-token",
          description:
            "Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI",
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
      name: "list-import-tasks",
      description: "Lists import tasks",
      options: [
        {
          name: "--next-token",
          description:
            "Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI",
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
      name: "list-private-graph-endpoints",
      description:
        "Lists private endpoints for a specified Neptune Analytics graph",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI",
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
      name: "list-queries",
      description: "Lists active openCypher queries",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to be fetched by the API",
          args: {
            name: "integer",
          },
        },
        {
          name: "--state",
          description: "Filtered list of queries based on state",
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
      name: "list-tags-for-resource",
      description: "Lists tags associated with a specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
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
      name: "reset-graph",
      description: "Empties the data from a specified Neptune Analytics graph",
      options: [
        {
          name: "--graph-identifier",
          description: "ID of the graph to reset",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-snapshot",
          description:
            "Determines whether a final graph snapshot is created before the graph data is deleted. If set to true, no graph snapshot is created. If set to false, a graph snapshot is created before the data is deleted",
        },
        {
          name: "--no-skip-snapshot",
          description:
            "Determines whether a final graph snapshot is created before the graph data is deleted. If set to true, no graph snapshot is created. If set to false, a graph snapshot is created before the data is deleted",
        },
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
      name: "restore-graph-from-snapshot",
      description: "Restores a graph from a snapshot",
      options: [
        {
          name: "--snapshot-identifier",
          description: "The ID of the snapshot in question",
          args: {
            name: "string",
          },
        },
        {
          name: "--graph-name",
          description:
            "A name for the new Neptune Analytics graph to be created from the snapshot. The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-memory",
          description:
            "The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128",
          args: {
            name: "integer",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled",
        },
        {
          name: "--tags",
          description:
            "Adds metadata tags to the snapshot. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy",
          args: {
            name: "map",
          },
        },
        {
          name: "--replica-count",
          description:
            "The number of replicas in other AZs. Min =0, Max = 2, Default =1   Additional charges equivalent to the m-NCUs selected for the graph apply for each replica",
          args: {
            name: "integer",
          },
        },
        {
          name: "--public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable)",
        },
        {
          name: "--no-public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable)",
        },
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
      name: "start-export-task",
      description:
        "Export data from an existing Neptune Analytics graph to Amazon S3. The graph state should be AVAILABLE",
      options: [
        {
          name: "--graph-identifier",
          description: "The source graph identifier of the export task",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM role that will allow data to be exported to the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description: "The format of the export task",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description: "The Amazon S3 URI where data will be exported to",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-identifier",
          description: "The KMS key identifier of the export task",
          args: {
            name: "string",
          },
        },
        {
          name: "--parquet-type",
          description: "The parquet type of the export task",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-filter",
          description: "The export filter of the export task",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags to be applied to the export task",
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
      name: "start-import-task",
      description:
        "Import data into existing Neptune Analytics graph from Amazon Simple Storage Service (S3). The graph needs to be empty and in the AVAILABLE state",
      options: [
        {
          name: "--import-options",
          description: "Options for how to perform an import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fail-on-error",
          description:
            "If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible",
        },
        {
          name: "--no-fail-on-error",
          description:
            "If set to true, the task halts when an import error is encountered. If set to false, the task skips the data that caused the error and continues if possible",
        },
        {
          name: "--source",
          description:
            "A URL identifying the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "Specifies the format of Amazon S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format",
          args: {
            name: "string",
          },
        },
        {
          name: "--parquet-type",
          description: "The parquet type of the import task",
          args: {
            name: "string",
          },
        },
        {
          name: "--blank-node-handling",
          description:
            "The method to handle blank nodes in the dataset. Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is ntriples. For more information, see Handling RDF values",
          args: {
            name: "string",
          },
        },
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM role that will allow access to the data that is to be imported",
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
      description: "Adds tags to the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "ARN of the resource for which tags need to be added",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags to be assigned to the Neptune Analytics resource. The tags are metadata that are specified as a list of key-value pairs:  Key (string) \u00a0 \u2013 \u00a0 A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length. It can\'t be prefixed with aws: and can only contain the set of Unicode characters specified by this Java regular expression: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").  Value (string) \u00a0 \u2013 \u00a0 A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length. It can\'t be prefixed with aws: and can only contain the set of Unicode characters specified by this Java regular expression: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$")',
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
      description: "Removes the specified tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "ARN of the resource whose tag needs to be removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Tag keys for the tags to be removed",
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
      name: "update-graph",
      description:
        "Updates the configuration of a specified Neptune Analytics graph",
      options: [
        {
          name: "--graph-identifier",
          description: "The unique identifier of the Neptune Analytics graph",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable",
        },
        {
          name: "--no-public-connectivity",
          description:
            "Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated. (true to enable, or false to disable",
        },
        {
          name: "--provisioned-memory",
          description:
            "The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Min = 128",
          args: {
            name: "integer",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled",
        },
        {
          name: "--no-deletion-protection",
          description:
            "A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled",
        },
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "export-task-cancelled",
          description:
            "Wait until Export Task is Cancelled It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--task-identifier",
              description: "The unique identifier of the export task",
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
          name: "export-task-successful",
          description:
            "Wait until Export Task is Successful It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 480 failed checks",
          options: [
            {
              name: "--task-identifier",
              description: "The unique identifier of the export task",
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
          name: "graph-available",
          description:
            "Wait until Graph is Available It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 480 failed checks",
          options: [
            {
              name: "--graph-identifier",
              description:
                "The unique identifier of the Neptune Analytics graph",
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
          name: "graph-deleted",
          description:
            "Wait until Graph is Deleted It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--graph-identifier",
              description:
                "The unique identifier of the Neptune Analytics graph",
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
          name: "graph-snapshot-available",
          description:
            "Wait until GraphSnapshot is Available It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--snapshot-identifier",
              description: "The ID of the snapshot to retrieve",
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
          name: "graph-snapshot-deleted",
          description:
            "Wait until GraphSnapshot is Deleted It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--snapshot-identifier",
              description: "The ID of the snapshot to retrieve",
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
          name: "import-task-cancelled",
          description:
            "Wait until Import Task is Cancelled It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--task-identifier",
              description: "The unique identifier of the import task",
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
          name: "import-task-successful",
          description:
            "Wait until Import Task is Successful It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 480 failed checks",
          options: [
            {
              name: "--task-identifier",
              description: "The unique identifier of the import task",
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
          name: "private-graph-endpoint-available",
          description:
            "Wait until PrivateGraphEndpoint is Available It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 180 failed checks",
          options: [
            {
              name: "--graph-identifier",
              description:
                "The unique identifier of the Neptune Analytics graph",
              args: {
                name: "string",
              },
            },
            {
              name: "--vpc-id",
              description:
                "The ID of the VPC where the private endpoint is located",
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
          name: "private-graph-endpoint-deleted",
          description:
            "Wait until PrivateGraphEndpoint is Deleted It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 180 failed checks",
          options: [
            {
              name: "--graph-identifier",
              description:
                "The unique identifier of the Neptune Analytics graph",
              args: {
                name: "string",
              },
            },
            {
              name: "--vpc-id",
              description:
                "The ID of the VPC where the private endpoint is located",
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
    },
  ],
};
export default completionSpec;
