const completionSpec: Fig.Spec = {
  name: "location",
  description:
    "Suite of geospatial services including Maps, Places, Tracking, and Geofencing",
  subcommands: [
    {
      name: "associate-tracker-consumer",
      description:
        "Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection.  Currently not supported \u2014 Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account",
      options: [
        {
          name: "--consumer-arn",
          description:
            "The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.    Format example: arn:partition:service:region:account-id:resource-type:resource-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--tracker-name",
          description:
            "The name of the tracker resource to be associated with a geofence collection",
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
      name: "batch-delete-geofence",
      description:
        "Deletes a batch of geofences from a geofence collection.  This action deletes the resource permanently. You can't undo this action",
      options: [
        {
          name: "--collection-name",
          description:
            "The geofence collection storing the geofences to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--geofence-ids",
          description: "The batch of geofences to be deleted",
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
      name: "batch-evaluate-geofences",
      description:
        "Evaluates device positions against the geofence geometries from a given geofence collection. The evaluation determines if the device has entered or exited a geofenced area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.  The last geofence that a device was observed within, if any, is tracked for 30 days after the most recent device position update",
      options: [
        {
          name: "--collection-name",
          description:
            "The geofence collection used in evaluating the position of devices against its geofences",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-position-updates",
          description:
            "Contains device details for each device to be evaluated against the given geofence collection",
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
      name: "batch-get-device-position",
      description: "A batch request to retrieve all device positions",
      options: [
        {
          name: "--device-ids",
          description:
            "Devices whose position you want to retrieve.   For example, for two devices: device-ids=DeviceId1&amp;device-ids=DeviceId2",
          args: {
            name: "list",
          },
        },
        {
          name: "--tracker-name",
          description: "The tracker resource retrieving the device position",
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
      name: "batch-put-geofence",
      description:
        "A batch request for storing geofence geometries into a given geofence collection",
      options: [
        {
          name: "--collection-name",
          description: "The geofence collection storing the geofences",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "The batch of geofences to be stored in a geofence collection",
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
      name: "batch-update-device-position",
      description:
        "Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when reporting the last known device position and position history.  Only one position update is stored per sample time. Location data is sampled at a fixed rate of one position per 30-second interval, and retained for one year before it is deleted",
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--updates",
          description: "Contains the position update details for each device",
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
      name: "create-geofence-collection",
      description:
        "Creates a geofence collection, which manages and stores geofences",
      options: [
        {
          name: "--collection-name",
          description:
            "A custom name for the geofence collection. Requirements:   Contain only alphanumeric characters (A\u2013Z, a\u2013z, 0-9), hyphens (-), periods (.), and underscores (_).    Must be a unique geofence collection name.   No spaces allowed. For example, ExampleGeofenceCollection",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the geofence collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "Specifies the pricing plan for your geofence collection. For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan-data-source",
          description:
            "Specifies the plan data source. Required if the Mobile Asset Tracking (MAT) or the Mobile Asset Management (MAM) pricing plan is selected. Billing is determined by the resource usage, the associated pricing plan, and the data source that was specified. For more information about each pricing plan option and restrictions, see the Amazon Location Service pricing page. Valid Values: Esri | Here",
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
      name: "create-map",
      description:
        "Creates a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.  By using Maps, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using. For more information, see the AWS Service Terms for Amazon Location Service",
      options: [
        {
          name: "--configuration",
          description:
            "Specifies the map style selected from an available data provider",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "An optional description for the map resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--map-name",
          description:
            "The name for the map resource. Requirements:   Must contain only alphanumeric characters (A\u2013Z, a\u2013z, 0\u20139), hyphens (-), periods (.), and underscores (_).    Must be a unique map resource name.    No spaces allowed. For example, ExampleMap",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "Specifies the pricing plan for your map resource. For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page",
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
      name: "create-place-index",
      description:
        "Creates a Place index resource in your AWS account, which supports Places functions with geospatial data sourced from your chosen data provider.  By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Because of licensing limitations, you may not use HERE to store results for locations in Japan. For more information, see the AWS Service Terms for Amazon Location Service",
      options: [
        {
          name: "--data-source",
          description:
            "Specifies the data provider of geospatial data.  This field is case-sensitive. Enter the valid values as shown. For example, entering HERE will return an error.  Valid values include:    Esri     Here    For additional details on data providers, see the Amazon Location Service data providers page",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-configuration",
          description:
            "Specifies the data storage option for requesting Places",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The optional description for the Place index resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of the Place index resource.  Requirements:   Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).   Must be a unique Place index resource name.   No spaces allowed. For example, ExamplePlaceIndex",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "Specifies the pricing plan for your Place index resource. For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page",
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
      name: "create-tracker",
      description:
        "Creates a tracker resource in your AWS account, which lets you retrieve current and historical location of devices",
      options: [
        {
          name: "--description",
          description: "An optional description for the tracker resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "Specifies the pricing plan for your tracker resource. For additional details and restrictions on each pricing plan option, see the Amazon Location Service pricing page",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan-data-source",
          description:
            "Specifies the plan data source. Required if the Mobile Asset Tracking (MAT) or the Mobile Asset Management (MAM) pricing plan is selected. Billing is determined by the resource usage, the associated pricing plan, and data source that was specified. For more information about each pricing plan option and restrictions, see the Amazon Location Service pricing page. Valid Values: Esri | Here",
          args: {
            name: "string",
          },
        },
        {
          name: "--tracker-name",
          description:
            "The name for the tracker resource. Requirements:   Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).   Must be a unique tracker resource name.   No spaces allowed. For example, ExampleTracker",
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
      name: "delete-geofence-collection",
      description:
        "Deletes a geofence collection from your AWS account.  This action deletes the resource permanently. You can't undo this action. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored",
      options: [
        {
          name: "--collection-name",
          description: "The name of the geofence collection to be deleted",
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
      name: "delete-map",
      description:
        "Deletes a map resource from your AWS account.  This action deletes the resource permanently. You cannot undo this action. If the map is being used in an application, the map may not render",
      options: [
        {
          name: "--map-name",
          description: "The name of the map resource to be deleted",
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
      name: "delete-place-index",
      description:
        "Deletes a Place index resource from your AWS account.  This action deletes the resource permanently. You cannot undo this action",
      options: [
        {
          name: "--index-name",
          description: "The name of the Place index resource to be deleted",
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
      name: "delete-tracker",
      description:
        "Deletes a tracker resource from your AWS account.  This action deletes the resource permanently. You can't undo this action. If the tracker resource is in use, you may encounter an error. Make sure that the target resource is not a dependency for your applications",
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource to be deleted",
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
      name: "describe-geofence-collection",
      description: "Retrieves the geofence collection details",
      options: [
        {
          name: "--collection-name",
          description: "The name of the geofence collection",
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
      name: "describe-map",
      description: "Retrieves the map resource details",
      options: [
        {
          name: "--map-name",
          description: "The name of the map resource",
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
      name: "describe-place-index",
      description: "Retrieves the Place index resource details",
      options: [
        {
          name: "--index-name",
          description: "The name of the Place index resource",
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
      name: "describe-tracker",
      description: "Retrieves the tracker resource details",
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource",
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
      name: "disassociate-tracker-consumer",
      description:
        "Removes the association between a tracker resource and a geofence collection.  Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences",
      options: [
        {
          name: "--consumer-arn",
          description:
            "The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all AWS.    Format example: arn:partition:service:region:account-id:resource-type:resource-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--tracker-name",
          description:
            "The name of the tracker resource to be dissociated from the consumer",
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
      name: "get-device-position",
      description:
        "Retrieves a device's most recent position according to its sample time.  Device positions are deleted after one year",
      options: [
        {
          name: "--device-id",
          description: "The device whose position you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--tracker-name",
          description: "The tracker resource receiving the position update",
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
      name: "get-device-position-history",
      description:
        "Retrieves the device position history from a tracker resource within a specified range of time.  Device positions are deleted after 1 year",
      options: [
        {
          name: "--device-id",
          description: "The device whose position history you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--end-time-exclusive",
          description:
            "Specify the end time for the position history in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. By default, the value will be the time that the request is made. Requirement:   The time specified for EndTimeExclusive must be after the time for StartTimeInclusive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-inclusive",
          description:
            "Specify the start time for the position history in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. By default, the value will be 24 hours prior to the time that the request is made. Requirement:   The time specified for StartTimeInclusive must be before EndTimeExclusive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--tracker-name",
          description:
            "The tracker resource receiving the request for the device position history",
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
      name: "get-geofence",
      description: "Retrieves the geofence details from a geofence collection",
      options: [
        {
          name: "--collection-name",
          description: "The geofence collection storing the target geofence",
          args: {
            name: "string",
          },
        },
        {
          name: "--geofence-id",
          description: "The geofence you're retrieving details for",
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
      name: "get-map-glyphs",
      description: "Retrieves glyphs used to display labels on a map",
      options: [
        {
          name: "--font-stack",
          description:
            "A comma-separated list of fonts to load glyphs from in order of preference.. For example, Noto Sans, Arial Unicode",
          args: {
            name: "string",
          },
        },
        {
          name: "--font-unicode-range",
          description:
            "A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0-255 includes all characters from range U+0000 to 00FF. Must be aligned to multiples of 256",
          args: {
            name: "string",
          },
        },
        {
          name: "--map-name",
          description: "The map resource associated with the glyph \ufb01le",
          args: {
            name: "string",
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
      name: "get-map-sprites",
      description:
        "Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map",
      options: [
        {
          name: "--file-name",
          description:
            "The name of the sprite \ufb01le. Use the following \ufb01le names for the sprite sheet:    sprites.png     sprites@2x.png for high pixel density displays   For the JSON document contain image offsets. Use the following \ufb01le names:    sprites.json     sprites@2x.json for high pixel density displays",
          args: {
            name: "string",
          },
        },
        {
          name: "--map-name",
          description: "The map resource associated with the sprite \ufb01le",
          args: {
            name: "string",
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
      name: "get-map-style-descriptor",
      description:
        "Retrieves the map style descriptor from a map resource.  The style descriptor contains speci\ufb01cations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification",
      options: [
        {
          name: "--map-name",
          description: "The map resource to retrieve the style descriptor from",
          args: {
            name: "string",
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
      name: "get-map-tile",
      description:
        "Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. They are addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level.  The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1)",
      options: [
        {
          name: "--map-name",
          description: "The map resource to retrieve the map tiles from",
          args: {
            name: "string",
          },
        },
        {
          name: "--x",
          description: "The X axis value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--y",
          description: "The Y axis value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--z",
          description: "The zoom value for the map tile",
          args: {
            name: "string",
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
      name: "list-geofence-collections",
      description: "Lists geofence collections in your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
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
      name: "list-geofences",
      description: "Lists geofences stored in a given geofence collection",
      options: [
        {
          name: "--collection-name",
          description:
            "The name of the geofence collection storing the list of geofences",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
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
      name: "list-maps",
      description: "Lists map resources in your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null",
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
      name: "list-place-indexes",
      description: "Lists Place index resources in your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the maximum number of results returned in a single call. Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null",
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
      name: "list-tracker-consumers",
      description:
        "Lists geofence collections currently associated to the given tracker resource",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--tracker-name",
          description:
            "The tracker resource whose associated geofence collections you want to list",
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
      name: "list-trackers",
      description: "Lists tracker resources in your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
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
      name: "put-geofence",
      description:
        "Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request",
      options: [
        {
          name: "--collection-name",
          description: "The geofence collection to store the geofence in",
          args: {
            name: "string",
          },
        },
        {
          name: "--geofence-id",
          description:
            "An identifier for the geofence. For example, ExampleGeofence-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--geometry",
          description:
            "Contains the polygon details to specify the position of the geofence.  Each geofence polygon can have a maximum of 1,000 vertices",
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
      name: "search-place-index-for-position",
      description:
        "Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.  By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Because of licensing limitations, you may not use HERE to store results for locations in Japan. For more information, see the AWS Service Terms for Amazon Location Service",
      options: [
        {
          name: "--index-name",
          description:
            "The name of the Place index resource you want to use for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional paramer. The maximum number of results returned per request.  Default value: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--position",
          description:
            "Specifies a coordinate for the query defined by a longitude, and latitude.   The first position is the X coordinate, or longitude.   The second position is the Y coordinate, or latitude.    For example, position=xLongitude&amp;position=yLatitude ",
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
      name: "search-place-index-for-text",
      description:
        "Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest.  Includes the option to apply additional parameters to narrow your list of results.  You can search for places near a given position using BiasPosition, or filter results within a bounding box using FilterBBox. Providing both parameters simultaneously returns an error.   By using Places, you agree that AWS may transmit your API queries to your selected third party provider for processing, which may be outside the AWS region you are currently using.  Also, when using HERE as your data provider, you may not (a) use HERE Places for Asset Management, or (b) select the Storage option for the IntendedUse parameter when requesting Places in Japan. For more information, see the AWS Service Terms for Amazon Location Service",
      options: [
        {
          name: "--bias-position",
          description:
            "Searches for results closest to the given position. An optional parameter defined by longitude, and latitude.   The first bias position is the X coordinate, or longitude.   The second bias position is the Y coordinate, or latitude.    For example, bias=xLongitude&amp;bias=yLatitude",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-b-box",
          description:
            "Filters the results by returning only Places within the provided bounding box. An optional parameter. The first 2 bbox parameters describe the lower southwest corner:   The first bbox position is the X coordinate or longitude of the lower southwest corner.   The second bbox position is the Y coordinate or latitude of the lower southwest corner.   For example, bbox=xLongitudeSW&amp;bbox=yLatitudeSW. The next bbox parameters describe the upper northeast corner:   The third bbox position is the X coordinate, or longitude of the upper northeast corner.   The fourth bbox position is the Y coordinate, or longitude of the upper northeast corner.   For example, bbox=xLongitudeNE&amp;bbox=yLatitudeNE",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-countries",
          description:
            "Limits the search to the given a list of countries/regions. An optional parameter.   Use the ISO 3166 3-digit country code. For example, Australia uses three upper-case characters: AUS",
          args: {
            name: "list",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of the Place index resource you want to use for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter. The maximum number of results returned per request.  The default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--text",
          description:
            "The address, name, city, or region to be used in the search. In free-form text format. For example, 123 Any Street",
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
};

export default completionSpec;
