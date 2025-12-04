const completionSpec: Fig.Spec = {
  name: "iotfleetwise",
  description:
    "Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of your vehicle data models, independent of the in-vehicle communication architecture, and define data collection rules to transfer only high-value data to the cloud.  For more information, see What is Amazon Web Services IoT FleetWise? in the Amazon Web Services IoT FleetWise Developer Guide.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
  subcommands: [
    {
      name: "associate-vehicle-fleet",
      description: "Adds, or associates, a vehicle with a fleet",
      options: [
        {
          name: "--vehicle-name",
          description:
            "The unique ID of the vehicle to associate with the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The ID of a fleet",
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
      name: "batch-create-vehicle",
      description:
        "Creates a group, or batch, of vehicles.    You must specify a decoder manifest and a vehicle model (model manifest) for each vehicle.   For more information, see Create multiple vehicles (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--vehicles",
          description:
            "A list of information about each vehicle to create. For more information, see the API data type",
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
      name: "batch-update-vehicle",
      description:
        "Updates a group, or batch, of vehicles.   You must specify a decoder manifest and a vehicle model (model manifest) for each vehicle.   For more information, see Update multiple vehicles (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--vehicles",
          description:
            "A list of information about the vehicles to update. For more information, see the API data type",
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
      name: "create-campaign",
      description:
        "Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, Amazon Web Services IoT FleetWise automatically deploys them to vehicles.  For more information, see Collect and transfer data with campaigns in the Amazon Web Services IoT FleetWise Developer Guide.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the campaign to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "An optional description of the campaign to help identify its purpose",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-catalog-arn",
          description:
            "The Amazon Resource Name (ARN) of the signal catalog to associate with the campaign",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-arn",
          description:
            "The ARN of the vehicle or fleet to deploy a campaign to",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The time, in milliseconds, to deliver a campaign after it was approved. If it's not specified, 0 is used. Default: 0",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--expiry-time",
          description:
            "The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time). Vehicle data isn't collected after the campaign expires.  Default: 253402214400 (December 31, 9999, 00:00:00 UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--post-trigger-collection-duration",
          description:
            "How long (in milliseconds) to collect raw data after a triggering event initiates the collection. If it's not specified, 0 is used. Default: 0",
          args: {
            name: "long",
          },
        },
        {
          name: "--diagnostics-mode",
          description:
            "Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. If you want to send diagnostic trouble codes, use SEND_ACTIVE_DTCS. If it's not specified, OFF is used. Default: OFF",
          args: {
            name: "string",
          },
        },
        {
          name: "--spooling-mode",
          description:
            "Determines whether to store collected data after a vehicle lost a connection with the cloud. After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise. If you want to store collected data when a vehicle loses connection with the cloud, use TO_DISK. If it's not specified, OFF is used. Default: OFF",
          args: {
            name: "string",
          },
        },
        {
          name: "--compression",
          description:
            "Determines whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If you don't want to compress the signals, use OFF. If it's not specified, SNAPPY is used.  Default: SNAPPY",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any other campaigns. If it's not specified, 0 is used.  Default: 0",
          args: {
            name: "integer",
          },
        },
        {
          name: "--signals-to-collect",
          description:
            "A list of information about signals to collect.   If you upload a signal as a condition in a data partition for a campaign, then those same signals must be included in signalsToCollect",
          args: {
            name: "list",
          },
        },
        {
          name: "--collection-scheme",
          description:
            "The data collection scheme associated with the campaign. You can specify a scheme that collects data based on time or an event",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-extra-dimensions",
          description:
            "A list of vehicle attributes to associate with a campaign.  Enrich the data with specified vehicle attributes. For example, add make and model to the campaign, and Amazon Web Services IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream. You can then query the data against make and model. Default: An empty array",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the campaign",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-destination-configs",
          description:
            "The destination where the campaign sends data. You can send data to an MQTT topic, or store it in Amazon S3 or Amazon Timestream. MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with your devices. Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. Amazon Web Services IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple Amazon Web Services IoT FleetWise servers for redundancy and high availability. You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-partitions",
          description:
            "The data partitions associated with the signals collected from the vehicle",
          args: {
            name: "list",
          },
        },
        {
          name: "--signals-to-fetch",
          description: "A list of information about signals to fetch",
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
      name: "create-decoder-manifest",
      description:
        "Creates the decoder manifest associated with a model manifest. To create a decoder manifest, the following must be true:   Every signal decoder has a unique name.   Each signal decoder is associated with a network interface.   Each network interface has a unique ID.   The signal decoders are specified in the model manifest",
      options: [
        {
          name: "--name",
          description: "The unique name of the decoder manifest to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the decoder manifest",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-manifest-arn",
          description:
            "The Amazon Resource Name (ARN) of the vehicle model (model manifest)",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-decoders",
          description: "A list of information about signal decoders",
          args: {
            name: "list",
          },
        },
        {
          name: "--network-interfaces",
          description:
            "A list of information about available network interfaces",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-for-unmapped-signals",
          description:
            "Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata that can be used to manage the decoder manifest",
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
      name: "create-fleet",
      description:
        "Creates a fleet that represents a group of vehicles.   You must create both a signal catalog and vehicles before you can create a fleet.   For more information, see Fleets in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--fleet-id",
          description: "The unique ID of the fleet to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the fleet to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-catalog-arn",
          description: "The Amazon Resource Name (ARN) of a signal catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the fleet",
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
      name: "create-model-manifest",
      description:
        "Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators).  For more information, see Vehicle models in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the vehicle model to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the vehicle model",
          args: {
            name: "string",
          },
        },
        {
          name: "--nodes",
          description:
            "A list of nodes, which are a general abstraction of signals",
          args: {
            name: "list",
          },
        },
        {
          name: "--signal-catalog-arn",
          description: "The Amazon Resource Name (ARN) of a signal catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the vehicle model",
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
      name: "create-signal-catalog",
      description:
        "Creates a collection of standardized signals that can be reused to create vehicle models",
      options: [
        {
          name: "--name",
          description: "The name of the signal catalog to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the signal catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--nodes",
          description:
            "A list of information about nodes, which are a general abstraction of signals. For more information, see the API data type",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the signal catalog",
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
      name: "create-state-template",
      description:
        "Creates a state template. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the state template",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the state template",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-catalog-arn",
          description:
            "The ARN of the signal catalog associated with the state template",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-template-properties",
          description:
            "A list of signals from which data is collected. The state template properties contain the fully qualified names of the signals",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-extra-dimensions",
          description:
            "A list of vehicle attributes to associate with the payload published on the state template's MQTT topic. (See  Processing last known state vehicle data using MQTT messaging). For example, if you add Vehicle.Attributes.Make and Vehicle.Attributes.Model attributes, Amazon Web Services IoT FleetWise will enrich the protobuf encoded payload with those attributes in the extraDimensions field",
          args: {
            name: "list",
          },
        },
        {
          name: "--metadata-extra-dimensions",
          description:
            "A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic. (See  Processing last known state vehicle data using MQTT messaging). For example, if you add Vehicle.Attributes.Make and Vehicle.Attributes.Model attributes, Amazon Web Services IoT FleetWise will include these attributes as User Properties with the MQTT message. Default: An empty array",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the state template",
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
      name: "create-vehicle",
      description:
        "Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.   If you have an existing Amazon Web Services IoT thing, you can use Amazon Web Services IoT FleetWise to create a vehicle and collect data from your thing.   For more information, see Create a vehicle (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--vehicle-name",
          description: "The unique ID of the vehicle to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-manifest-arn",
          description: "The Amazon Resource Name ARN of a vehicle model",
          args: {
            name: "string",
          },
        },
        {
          name: "--decoder-manifest-arn",
          description: "The ARN of a decoder manifest",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            'Static information about a vehicle in a key-value pair. For example: "engineType" : "1.3 L R2"  To use attributes with Campaigns or State Templates, you must include them using the request parameters dataExtraDimensions and/or metadataExtraDimensions (for state templates only) when creating your campaign/state template',
          args: {
            name: "map",
          },
        },
        {
          name: "--association-behavior",
          description:
            "An option to create a new Amazon Web Services IoT thing when creating a vehicle, or to validate an existing Amazon Web Services IoT thing as a vehicle.  Default:",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the vehicle",
          args: {
            name: "list",
          },
        },
        {
          name: "--state-templates",
          description:
            "Associate state templates with the vehicle. You can monitor the last known state of the vehicle in near real time",
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
      name: "delete-campaign",
      description:
        "Deletes a data collection campaign. Deleting a campaign suspends all data collection and removes it from any vehicles",
      options: [
        {
          name: "--name",
          description: "The name of the campaign to delete",
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
      name: "delete-decoder-manifest",
      description:
        "Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles associated with it",
      options: [
        {
          name: "--name",
          description: "The name of the decoder manifest to delete",
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
      name: "delete-fleet",
      description:
        "Deletes a fleet. Before you delete a fleet, all vehicles must be dissociated from the fleet. For more information, see Delete a fleet (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--fleet-id",
          description: "The ID of the fleet to delete",
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
      name: "delete-model-manifest",
      description: "Deletes a vehicle model (model manifest)",
      options: [
        {
          name: "--name",
          description: "The name of the model manifest to delete",
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
      name: "delete-signal-catalog",
      description: "Deletes a signal catalog",
      options: [
        {
          name: "--name",
          description: "The name of the signal catalog to delete",
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
      name: "delete-state-template",
      description: "Deletes a state template",
      options: [
        {
          name: "--identifier",
          description: "A unique, service-generated identifier",
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
      name: "delete-vehicle",
      description: "Deletes a vehicle and removes it from any campaigns",
      options: [
        {
          name: "--vehicle-name",
          description: "The ID of the vehicle to delete",
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
      name: "disassociate-vehicle-fleet",
      description:
        "Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a fleet doesn't delete the vehicle",
      options: [
        {
          name: "--vehicle-name",
          description:
            "The unique ID of the vehicle to disassociate from the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description: "The unique ID of a fleet",
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
      name: "get-campaign",
      description:
        "Retrieves information about a campaign.   Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the campaign to retrieve information about",
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
      name: "get-decoder-manifest",
      description: "Retrieves information about a created decoder manifest",
      options: [
        {
          name: "--name",
          description:
            "The name of the decoder manifest to retrieve information about",
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
      name: "get-encryption-configuration",
      description:
        "Retrieves the encryption configuration for resources and data in Amazon Web Services IoT FleetWise",
      options: [
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
      name: "get-fleet",
      description: "Retrieves information about a fleet",
      options: [
        {
          name: "--fleet-id",
          description: "The ID of the fleet to retrieve information about",
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
      name: "get-logging-options",
      description: "Retrieves the logging options",
      options: [
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
      name: "get-model-manifest",
      description:
        "Retrieves information about a vehicle model (model manifest)",
      options: [
        {
          name: "--name",
          description:
            "The name of the vehicle model to retrieve information about",
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
      name: "get-register-account-status",
      description:
        "Retrieves information about the status of registering your Amazon Web Services account, IAM, and Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud.  For more information, including step-by-step procedures, see Setting up Amazon Web Services IoT FleetWise.   This API operation doesn't require input parameters",
      options: [
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
      name: "get-signal-catalog",
      description: "Retrieves information about a signal catalog",
      options: [
        {
          name: "--name",
          description:
            "The name of the signal catalog to retrieve information about",
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
      name: "get-state-template",
      description:
        "Retrieves information about a state template.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--identifier",
          description: "A unique, service-generated identifier",
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
      name: "get-vehicle",
      description: "Retrieves information about a vehicle",
      options: [
        {
          name: "--vehicle-name",
          description: "The ID of the vehicle to retrieve information about",
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
      name: "get-vehicle-status",
      description:
        "Retrieves information about the status of campaigns, decoder manifests, or state templates associated with a vehicle",
      options: [
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value. This parameter is only supported for resources of type CAMPAIGN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive. This parameter is only supported for resources of type CAMPAIGN",
          args: {
            name: "integer",
          },
        },
        {
          name: "--vehicle-name",
          description: "The ID of the vehicle to retrieve information about",
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
      name: "import-decoder-manifest",
      description:
        "Creates a decoder manifest using your existing CAN DBC file from your local device.  The CAN signal name must be unique and not repeated across CAN message definitions in a .dbc file",
      options: [
        {
          name: "--name",
          description: "The name of the decoder manifest to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-file-definitions",
          description: "The file to load into an Amazon Web Services account",
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
      name: "import-signal-catalog",
      description:
        "Creates a signal catalog using your existing VSS formatted content from your local device",
      options: [
        {
          name: "--name",
          description: "The name of the signal catalog to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the signal catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--vss",
          description:
            "The contents of the Vehicle Signal Specification (VSS) configuration. VSS is a precise language used to describe and model signals in vehicle networks",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Metadata that can be used to manage the signal catalog",
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
      name: "list-campaigns",
      description:
        "Lists information about created campaigns.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description:
            "An optional parameter to filter the results by the status of each created campaign in your account. The status can be one of: CREATING, WAITING_FOR_APPROVAL, RUNNING, or SUSPENDED",
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
      name: "list-decoder-manifest-network-interfaces",
      description:
        "Lists the network interfaces specified in a decoder manifest.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--name",
          description:
            "The name of the decoder manifest to list information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-decoder-manifest-signals",
      description:
        "A list of information about signal decoders specified in a decoder manifest.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--name",
          description:
            "The name of the decoder manifest to list information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-decoder-manifests",
      description:
        "Lists decoder manifests.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--model-manifest-arn",
          description:
            "The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with the decoder manifest",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-fleets",
      description:
        "Retrieves information for each created fleet in an Amazon Web Services account.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-fleets-for-vehicle",
      description:
        "Retrieves a list of IDs for all fleets that the vehicle is associated with.  This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--vehicle-name",
          description: "The ID of the vehicle to retrieve information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-model-manifest-nodes",
      description:
        "Lists information about nodes specified in a vehicle model (model manifest).   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--name",
          description:
            "The name of the vehicle model to list information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-model-manifests",
      description:
        "Retrieves a list of vehicle models (model manifests).   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--signal-catalog-arn",
          description:
            "The ARN of a signal catalog. If you specify a signal catalog, only the vehicle models associated with it are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-signal-catalog-nodes",
      description:
        "Lists of information about the signals (nodes) specified in a signal catalog.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--name",
          description:
            "The name of the signal catalog to list information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
          args: {
            name: "integer",
          },
        },
        {
          name: "--signal-node-type",
          description: "The type of node in the signal catalog",
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
      name: "list-signal-catalogs",
      description:
        "Lists all the created signal catalogs in an Amazon Web Services account.  You can use to list information about each signal (node) specified in a signal catalog.  This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-state-templates",
      description:
        "Lists information about created state templates.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
        "Lists the tags (metadata) you have assigned to the resource",
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
      name: "list-vehicles",
      description:
        "Retrieves a list of summaries of created vehicles.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--model-manifest-arn",
          description:
            "The Amazon Resource Name (ARN) of a vehicle model (model manifest). You can use this optional parameter to list only the vehicles created from a certain vehicle model",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-names",
          description:
            'The fully qualified names of the attributes. You can use this optional parameter to list the vehicles containing all the attributes in the request. For example, attributeNames could be "Vehicle.Body.Engine.Type, Vehicle.Color" and the corresponding attributeValues could be "1.3 L R2, Blue" . In this case, the API will filter vehicles with an attribute name Vehicle.Body.Engine.Type that contains a value of 1.3 L R2 AND an attribute name Vehicle.Color that contains a value of "Blue". A request must contain unique values for the attributeNames filter and the matching number of attributeValues filters to return the subset of vehicles that match the attributes filter condition',
          args: {
            name: "list",
          },
        },
        {
          name: "--attribute-values",
          description:
            'Static information about a vehicle attribute value in string format. You can use this optional parameter in conjunction with attributeNames to list the vehicles containing all the attributeValues corresponding to the attributeNames filter. For example, attributeValues could be "1.3 L R2, Blue" and the corresponding attributeNames filter could be "Vehicle.Body.Engine.Type, Vehicle.Color". In this case, the API will filter vehicles with attribute name Vehicle.Body.Engine.Type that contains a value of 1.3 L R2 AND an attribute name Vehicle.Color that contains a value of "Blue". A request must contain unique values for the attributeNames filter and the matching number of attributeValues filter to return the subset of vehicles that match the attributes filter condition',
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "list-vehicles-in-fleet",
      description:
        "Retrieves a list of summaries of all vehicles associated with a fleet.   This API operation uses pagination. Specify the nextToken parameter in the request to return more results",
      options: [
        {
          name: "--fleet-id",
          description: "The ID of a fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for the next set of results. If the results of a search are large, only a portion of the results are returned, and a nextToken pagination token is returned in the response. To retrieve the next set of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return, between 1 and 100, inclusive",
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
      name: "put-encryption-configuration",
      description:
        "Creates or updates the encryption configuration. Amazon Web Services IoT FleetWise can encrypt your data and resources using an Amazon Web Services managed key. Or, you can use a KMS key that you own and manage. For more information, see Data encryption in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--kms-key-id",
          description: "The ID of the KMS key that is used for encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-type",
          description:
            "The type of encryption. Choose KMS_BASED_ENCRYPTION to use a KMS key or FLEETWISE_DEFAULT_ENCRYPTION to use an Amazon Web Services managed key",
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
      name: "put-logging-options",
      description: "Creates or updates the logging option",
      options: [
        {
          name: "--cloud-watch-log-delivery",
          description:
            "Creates or updates the log delivery option to Amazon CloudWatch Logs",
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
      name: "register-account",
      description:
        'This API operation contains deprecated parameters. Register your account again without the Timestream resources parameter so that Amazon Web Services IoT FleetWise can remove the Timestream metadata stored. You should then pass the data destination into the CreateCampaign API operation. You must delete any existing campaigns that include an empty data destination before you register your account again. For more information, see the DeleteCampaign API operation. If you want to delete the Timestream inline policy from the service-linked role, such as to mitigate an overly permissive policy, you must first delete any existing campaigns. Then delete the service-linked role and register your account again to enable CloudWatch metrics. For more information, see DeleteServiceLinkedRole in the Identity and Access Management API Reference.  Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see Setting up Amazon Web Services IoT FleetWise.   An Amazon Web Services account is not the same thing as a "user." An Amazon Web Services user is an identity that you create using Identity and Access Management (IAM) and takes the form of either an IAM user or an IAM role, both with credentials. A single Amazon Web Services account can, and typically does, contain many users and roles',
      options: [
        {
          name: "--timestream-resources",
          description:
            "The registered Amazon Timestream resources that Amazon Web Services IoT FleetWise edge agent software can transfer your vehicle data to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iam-resources",
          description:
            "The IAM resource that allows Amazon Web Services IoT FleetWise to send data to Amazon Timestream",
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
        "Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The new or modified tags for the resource",
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
      name: "untag-resource",
      description: "Removes the given tags (metadata) from the resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of the keys of the tags to be removed from the resource",
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
      name: "update-campaign",
      description: "Updates a campaign",
      options: [
        {
          name: "--name",
          description: "The name of the campaign to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the campaign",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-extra-dimensions",
          description:
            "A list of vehicle attributes to associate with a signal.  Default: An empty array",
          args: {
            name: "list",
          },
        },
        {
          name: "--action",
          description:
            "Specifies how to update a campaign. The action can be one of the following:    APPROVE - To approve delivering a data collection scheme to vehicles.     SUSPEND - To suspend collecting signal data. The campaign is deleted from vehicles and all vehicles in the suspended campaign will stop sending data.    RESUME - To reactivate the SUSPEND campaign. The campaign is redeployed to all vehicles and the vehicles will resume sending data.    UPDATE - To update a campaign",
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
      name: "update-decoder-manifest",
      description:
        "Updates a decoder manifest. A decoder manifest can only be updated when the status is DRAFT. Only ACTIVE decoder manifests can be associated with vehicles",
      options: [
        {
          name: "--name",
          description: "The name of the decoder manifest to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the decoder manifest to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--signal-decoders-to-add",
          description:
            "A list of information about decoding additional signals to add to the decoder manifest",
          args: {
            name: "list",
          },
        },
        {
          name: "--signal-decoders-to-update",
          description:
            "A list of updated information about decoding signals to update in the decoder manifest",
          args: {
            name: "list",
          },
        },
        {
          name: "--signal-decoders-to-remove",
          description:
            "A list of signal decoders to remove from the decoder manifest",
          args: {
            name: "list",
          },
        },
        {
          name: "--network-interfaces-to-add",
          description:
            "A list of information about the network interfaces to add to the decoder manifest",
          args: {
            name: "list",
          },
        },
        {
          name: "--network-interfaces-to-update",
          description:
            "A list of information about the network interfaces to update in the decoder manifest",
          args: {
            name: "list",
          },
        },
        {
          name: "--network-interfaces-to-remove",
          description:
            "A list of network interfaces to remove from the decoder manifest",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description:
            "The state of the decoder manifest. If the status is ACTIVE, the decoder manifest can't be edited. If the status is DRAFT, you can edit the decoder manifest",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-for-unmapped-signals",
          description:
            "Use default decoders for all unmapped signals in the model. You don't need to provide any detailed decoding information.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
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
      name: "update-fleet",
      description: "Updates the description of an existing fleet",
      options: [
        {
          name: "--fleet-id",
          description: "The ID of the fleet to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An updated description of the fleet",
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
      name: "update-model-manifest",
      description:
        "Updates a vehicle model (model manifest). If created vehicles are associated with a vehicle model, it can't be updated",
      options: [
        {
          name: "--name",
          description: "The name of the vehicle model to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the vehicle model",
          args: {
            name: "string",
          },
        },
        {
          name: "--nodes-to-add",
          description:
            "A list of fullyQualifiedName of nodes, which are a general abstraction of signals, to add to the vehicle model",
          args: {
            name: "list",
          },
        },
        {
          name: "--nodes-to-remove",
          description:
            "A list of fullyQualifiedName of nodes, which are a general abstraction of signals, to remove from the vehicle model",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description:
            "The state of the vehicle model. If the status is ACTIVE, the vehicle model can't be edited. If the status is DRAFT, you can edit the vehicle model",
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
      name: "update-signal-catalog",
      description: "Updates a signal catalog",
      options: [
        {
          name: "--name",
          description: "The name of the signal catalog to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the signal catalog to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--nodes-to-add",
          description:
            "A list of information about nodes to add to the signal catalog",
          args: {
            name: "list",
          },
        },
        {
          name: "--nodes-to-update",
          description:
            "A list of information about nodes to update in the signal catalog",
          args: {
            name: "list",
          },
        },
        {
          name: "--nodes-to-remove",
          description:
            "A list of fullyQualifiedName of nodes to remove from the signal catalog",
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
      name: "update-state-template",
      description:
        "Updates a state template.  Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide",
      options: [
        {
          name: "--identifier",
          description: "A unique, service-generated identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description of the state template",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-template-properties-to-add",
          description:
            "Add signals from which data is collected as part of the state template",
          args: {
            name: "list",
          },
        },
        {
          name: "--state-template-properties-to-remove",
          description:
            "Remove signals from which data is collected as part of the state template",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-extra-dimensions",
          description:
            "A list of vehicle attributes to associate with the payload published on the state template's MQTT topic. (See  Processing last known state vehicle data using MQTT messaging). For example, if you add Vehicle.Attributes.Make and Vehicle.Attributes.Model attributes, Amazon Web Services IoT FleetWise will enrich the protobuf encoded payload with those attributes in the extraDimensions field. Default: An empty array",
          args: {
            name: "list",
          },
        },
        {
          name: "--metadata-extra-dimensions",
          description:
            "A list of vehicle attributes to associate with user properties of the messages published on the state template's MQTT topic. (See  Processing last known state vehicle data using MQTT messaging). For example, if you add Vehicle.Attributes.Make and Vehicle.Attributes.Model attributes, Amazon Web Services IoT FleetWise will include these attributes as User Properties with the MQTT message",
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
      name: "update-vehicle",
      description: "Updates a vehicle",
      options: [
        {
          name: "--vehicle-name",
          description: "The unique ID of the vehicle to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-manifest-arn",
          description:
            "The ARN of a vehicle model (model manifest) associated with the vehicle",
          args: {
            name: "string",
          },
        },
        {
          name: "--decoder-manifest-arn",
          description:
            "The ARN of the decoder manifest associated with this vehicle",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            'Static information about a vehicle in a key-value pair. For example:  "engineType" : "1.3 L R2"',
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-update-mode",
          description:
            "The method the specified attributes will update the existing attributes on the vehicle. UseOverwite to replace the vehicle attributes with the specified attributes. Or use Merge to combine all attributes. This is required if attributes are present in the input",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-templates-to-add",
          description: "Associate state templates with the vehicle",
          args: {
            name: "list",
          },
        },
        {
          name: "--state-templates-to-remove",
          description: "Remove state templates from the vehicle",
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
