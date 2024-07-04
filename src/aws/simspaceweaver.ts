const completionSpec: Fig.Spec = {
  name: "simspaceweaver",
  description:
    "SimSpace Weaver (SimSpace Weaver) is a service that you can use to build and run large-scale spatial simulations in the Amazon Web Services Cloud. For example, you can create crowd simulations, large real-world environments, and immersive and interactive experiences. For more information about SimSpace Weaver, see the  SimSpace Weaver User Guide . This API reference describes the API operations and data types that you can use to communicate directly with SimSpace Weaver. SimSpace Weaver also provides the SimSpace Weaver app SDK, which you use for app development. The SimSpace Weaver app SDK API reference is included in the SimSpace Weaver app SDK documentation. This documentation is part of the SimSpace Weaver app SDK distributable package",
  subcommands: [
    {
      name: "create-snapshot",
      description:
        "Creates a snapshot of the specified simulation. A snapshot is a file that contains simulation state data at a specific time. The state data saved in a snapshot includes entity data from the State Fabric, the simulation configuration specified in the schema, and the clock tick number. You can use the snapshot to initialize a new simulation. For more information about snapshots, see Snapshots in the SimSpace Weaver User Guide.  You specify a Destination when you create a snapshot. The Destination is the name of an Amazon S3 bucket and an optional ObjectKeyPrefix. The ObjectKeyPrefix is usually the name of a folder in the bucket. SimSpace Weaver creates a snapshot folder inside the Destination and places the snapshot file there. The snapshot file is an Amazon S3 object. It has an object key with the form:  object-key-prefix/snapshot/simulation-name-YYMMdd-HHmm-ss.zip, where:      YY  is the 2-digit year     MM  is the 2-digit month     dd  is the 2-digit day of the month     HH  is the 2-digit hour (24-hour clock)     mm  is the 2-digit minutes     ss  is the 2-digit seconds",
      options: [
        {
          name: "--destination",
          description:
            "The Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates the snapshot file. The Amazon S3 bucket must be in the same Amazon Web Services Region as the simulation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--simulation",
          description: "The name of the simulation",
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
      name: "delete-app",
      description: "Deletes the instance of the given custom app",
      options: [
        {
          name: "--app",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description: "The name of the domain of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--simulation",
          description: "The name of the simulation of the app",
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
      name: "delete-simulation",
      description:
        "Deletes all SimSpace Weaver resources assigned to the given simulation.  Your simulation uses resources in other Amazon Web Services. This API operation doesn't delete resources in other Amazon Web Services",
      options: [
        {
          name: "--simulation",
          description: "The name of the simulation",
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
      name: "describe-app",
      description: "Returns the state of the given custom app",
      options: [
        {
          name: "--app",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description: "The name of the domain of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--simulation",
          description: "The name of the simulation of the app",
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
      name: "describe-simulation",
      description: "Returns the current state of the given simulation",
      options: [
        {
          name: "--simulation",
          description: "The name of the simulation",
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
      name: "list-apps",
      description:
        "Lists all custom apps or service apps for the given simulation and domain",
      options: [
        {
          name: "--domain",
          description: "The name of the domain that you want to list apps for",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of apps to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If SimSpace Weaver returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--simulation",
          description:
            "The name of the simulation that you want to list apps for",
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
      name: "list-simulations",
      description:
        "Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of simulations to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If SimSpace Weaver returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error",
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
      description: "Lists all tags on a SimSpace Weaver resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference",
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
      name: "start-app",
      description:
        "Starts a custom app with the configuration specified in the simulation schema",
      options: [
        {
          name: "--client-token",
          description:
            "A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A ClientToken is also known as an idempotency token. A ClientToken expires after 24 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description: "The name of the domain of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-overrides",
          description:
            "Options that apply when the app starts. These options override default behavior",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--simulation",
          description: "The name of the simulation of the app",
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
      name: "start-clock",
      description: "Starts the simulation clock",
      options: [
        {
          name: "--simulation",
          description: "The name of the simulation",
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
      name: "start-simulation",
      description:
        "Starts a simulation with the given name. You must choose to start your simulation from a schema or from a snapshot. For more information about the schema, see the schema reference in the SimSpace Weaver User Guide. For more information about snapshots, see Snapshots in the SimSpace Weaver User Guide",
      options: [
        {
          name: "--client-token",
          description:
            "A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A ClientToken is also known as an idempotency token. A ClientToken expires after 24 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the simulation",
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-duration",
          description:
            "The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit. The maximum value is 14D, or its equivalent in the other units. The default value is 14D. A value equivalent to 0 makes the simulation immediately transition to Stopping as soon as it reaches Started",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the simulation",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. For more information about IAM roles, see IAM roles in the Identity and Access Management User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-s3-location",
          description:
            "The location of the simulation schema in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the  Amazon Simple Storage Service User Guide . Provide a SchemaS3Location to start your simulation from a schema. If you provide a SchemaS3Location then you can't provide a SnapshotS3Location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--snapshot-s3-location",
          description:
            "The location of the snapshot .zip file in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the  Amazon Simple Storage Service User Guide . Provide a SnapshotS3Location to start your simulation from a snapshot. The Amazon S3 bucket must be in the same Amazon Web Services Region as the simulation. If you provide a SnapshotS3Location then you can't provide a SchemaS3Location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags for the simulation. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference",
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
      name: "stop-app",
      description:
        "Stops the given custom app and shuts down all of its allocated compute resources",
      options: [
        {
          name: "--app",
          description: "The name of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description: "The name of the domain of the app",
          args: {
            name: "string",
          },
        },
        {
          name: "--simulation",
          description: "The name of the simulation of the app",
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
      name: "stop-clock",
      description: "Stops the simulation clock",
      options: [
        {
          name: "--simulation",
          description: "The name of the simulation",
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
      name: "stop-simulation",
      description:
        "Stops the given simulation.  You can't restart a simulation after you stop it. If you want to restart a simulation, then you must stop it, delete it, and start a new instance of it",
      options: [
        {
          name: "--simulation",
          description: "The name of the simulation",
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
        "Adds tags to a SimSpace Weaver resource. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to add tags to. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the resource",
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
      description:
        "Removes tags from a SimSpace Weaver resource. For more information about tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to remove tags from. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to remove from the resource",
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
