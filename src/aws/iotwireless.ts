const completionSpec: Fig.Spec = {
  name: "iotwireless",
  description:
    "AWS IoT Wireless provides bi-directional communication between internet-connected wireless devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS IoT, use the IoT Wireless API. These wireless devices use the Low Power Wide Area Networking (LPWAN) communication protocol to communicate with AWS IoT. Using the API, you can perform create, read, update, and delete operations for your wireless devices, gateways, destinations, and profiles. After onboarding your devices, you can use the API operations to set log levels and monitor your devices with CloudWatch. You can also use the API operations to create multicast groups and schedule a multicast session for sending a downlink message to devices in the group. By using Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and schedule a session to update the firmware of individual devices or an entire group of devices in a multicast group. To connect to the AWS IoT Wireless Service, use the Service endpoints as described in IoT Wireless Service endpoints in the AWS General Reference",
  subcommands: [
    {
      name: "associate-aws-account-with-partner-account",
      description: "Associates a partner account with your AWS account",
      options: [
        {
          name: "--sidewalk",
          description: "The Sidewalk account credentials",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource",
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
      name: "associate-multicast-group-with-fuota-task",
      description: "Associate a multicast group with a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--multicast-group-id",
          description: "The ID of the multicast group",
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
      name: "associate-wireless-device-with-fuota-task",
      description: "Associate a wireless device with a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-id",
          description: "The ID of the wireless device",
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
      name: "associate-wireless-device-with-multicast-group",
      description: "Associates a wireless device with a multicast group",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-id",
          description: "The ID of the wireless device",
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
      name: "associate-wireless-device-with-thing",
      description: "Associates a wireless device with a thing",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--thing-arn",
          description:
            "The ARN of the thing to associate with the wireless device",
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
      name: "associate-wireless-gateway-with-certificate",
      description: "Associates a wireless gateway with a certificate",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--iot-certificate-id",
          description:
            "The ID of the certificate to associate with the wireless gateway",
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
      name: "associate-wireless-gateway-with-thing",
      description: "Associates a wireless gateway with a thing",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--thing-arn",
          description:
            "The ARN of the thing to associate with the wireless gateway",
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
      name: "cancel-multicast-group-session",
      description: "Cancels an existing multicast group session",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
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
      name: "create-destination",
      description:
        "Creates a new destination that maps a device message to an AWS IoT rule",
      options: [
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-type",
          description: "The type of value in Expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description: "The rule name or topic rule to send messages to",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM Role that authorizes the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the new destination. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
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
      name: "create-device-profile",
      description: "Creates a new device profile",
      options: [
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the new device profile. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--sidewalk",
          description:
            "The Sidewalk-related information for creating the Sidewalk device profile",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lorawan",
          description:
            "The device profile information to use to create the device profile",
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
      name: "create-fuota-task",
      description: "Creates a FUOTA task",
      options: [
        {
          name: "--name",
          description: "The name of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--firmware-update-image",
          description:
            "The S3 URI points to a firmware update image that is to be used with a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--firmware-update-role",
          description:
            "The firmware update role that is to be used with a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--redundancy-percent",
          description:
            "The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with RedundancyPercent set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fragment-size-bytes",
          description:
            "The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fragment-interval-ms",
          description:
            "The interval for sending fragments in milliseconds, rounded to the nearest second.  This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud",
          args: {
            name: "integer",
          },
        },
        {
          name: "--descriptor",
          description:
            "The Descriptor specifies some metadata about the File being transferred using FUOTA e.g. the software version. It is sent transparently to the device. It is a binary field encoded in base64",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description: "The LoRaWAN information used with a FUOTA task",
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
      name: "create-multicast-group",
      description: "Creates a multicast group",
      options: [
        {
          name: "--name",
          description: "The name of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--lorawan",
          description:
            "The LoRaWAN information that is to be used with the multicast group",
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
      name: "create-network-analyzer-configuration",
      description: "Creates a new network analyzer configuration",
      options: [
        {
          name: "--name",
          description: "Name of the network analyzer configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--trace-content",
          description:
            "Trace content for your wireless devices, gateways, and multicast groups",
          args: {
            name: "structure",
          },
        },
        {
          name: "--wireless-devices",
          description:
            "Wireless device resources to add to the network analyzer configuration. Provide the WirelessDeviceId of the resource to add in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--wireless-gateways",
          description:
            "Wireless gateway resources to add to the network analyzer configuration. Provide the WirelessGatewayId of the resource to add in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--multicast-groups",
          description:
            "Multicast Group resources to add to the network analyzer configruation. Provide the MulticastGroupId of the resource to add in the input array",
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
      name: "create-service-profile",
      description: "Creates a new service profile",
      options: [
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the new service profile. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description:
            "The service profile information to use to create the service profile",
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
      name: "create-wireless-device",
      description: "Provisions a wireless device",
      options: [
        {
          name: "--type",
          description: "The wireless device type",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-name",
          description:
            "The name of the destination to assign to the new wireless device",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the new wireless device. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--positioning",
          description:
            "FPort values for the GNSS, stream, and ClockSync functions of the positioning information",
          args: {
            name: "string",
          },
        },
        {
          name: "--sidewalk",
          description:
            "The device configuration information to use to create the Sidewalk device",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lorawan",
          description:
            "The device configuration information to use to create the wireless device",
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
      name: "create-wireless-gateway",
      description:
        "Provisions a wireless gateway.  When provisioning a wireless gateway, you might run into duplication errors for the following reasons.   If you specify a GatewayEui value that already exists.   If you used a ClientRequestToken with the same parameters within the last 10 minutes.   To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period",
      options: [
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the new wireless gateway. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description:
            "The gateway configuration information to use to create the wireless gateway",
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
      name: "create-wireless-gateway-task",
      description: "Creates a task for a wireless gateway",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-gateway-task-definition-id",
          description: "The ID of the WirelessGatewayTaskDefinition",
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
      name: "create-wireless-gateway-task-definition",
      description: "Creates a gateway task definition",
      options: [
        {
          name: "--auto-create-tasks",
          description:
            "Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask",
        },
        {
          name: "--no-auto-create-tasks",
          description:
            "Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask",
        },
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--update",
          description: "Information about the gateways to update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource",
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
      name: "delete-destination",
      description: "Deletes a destination",
      options: [
        {
          name: "--name",
          description: "The name of the resource to delete",
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
      name: "delete-device-profile",
      description: "Deletes a device profile",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to delete",
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
      name: "delete-fuota-task",
      description: "Deletes a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
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
      name: "delete-multicast-group",
      description:
        "Deletes a multicast group if it is not in use by a fuota task",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
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
      name: "delete-network-analyzer-configuration",
      description: "Deletes a network analyzer configuration",
      options: [
        {
          name: "--configuration-name",
          description: "Name of the network analyzer configuration",
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
      name: "delete-queued-messages",
      description: "Remove queued messages from the downlink queue",
      options: [
        {
          name: "--id",
          description:
            "The ID of a given wireless device for which downlink messages will be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description:
            'If message ID is "*", it cleares the entire downlink queue for a given device, specified by the wireless device ID. Otherwise, the downlink message with the specified message ID will be deleted',
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-type",
          description:
            "The wireless device type, which can be either Sidewalk or LoRaWAN",
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
      name: "delete-service-profile",
      description: "Deletes a service profile",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to delete",
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
      name: "delete-wireless-device",
      description: "Deletes a wireless device",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to delete",
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
      name: "delete-wireless-device-import-task",
      description: "Delete an import task",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the import task to be deleted",
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
      name: "delete-wireless-gateway",
      description:
        "Deletes a wireless gateway.  When deleting a wireless gateway, you might run into duplication errors for the following reasons.   If you specify a GatewayEui value that already exists.   If you used a ClientRequestToken with the same parameters within the last 10 minutes.   To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to delete",
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
      name: "delete-wireless-gateway-task",
      description: "Deletes a wireless gateway task",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to delete",
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
      name: "delete-wireless-gateway-task-definition",
      description:
        "Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to delete",
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
      name: "deregister-wireless-device",
      description: "Deregister a wireless device from AWS IoT Wireless",
      options: [
        {
          name: "--identifier",
          description:
            "The identifier of the wireless device to deregister from AWS IoT Wireless",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-type",
          description:
            "The type of wireless device to deregister from AWS IoT Wireless, which can be LoRaWAN or Sidewalk",
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
      name: "disassociate-aws-account-from-partner-account",
      description:
        "Disassociates your AWS account from a partner account. If PartnerAccountId and PartnerType are null, disassociates your AWS account from all partner accounts",
      options: [
        {
          name: "--partner-account-id",
          description:
            "The partner account ID to disassociate from the AWS account",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-type",
          description: "The partner type",
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
      name: "disassociate-multicast-group-from-fuota-task",
      description: "Disassociates a multicast group from a fuota task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--multicast-group-id",
          description: "The ID of the multicast group",
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
      name: "disassociate-wireless-device-from-fuota-task",
      description: "Disassociates a wireless device from a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-id",
          description: "The ID of the wireless device",
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
      name: "disassociate-wireless-device-from-multicast-group",
      description: "Disassociates a wireless device from a multicast group",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-id",
          description: "The ID of the wireless device",
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
      name: "disassociate-wireless-device-from-thing",
      description:
        "Disassociates a wireless device from its currently associated thing",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
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
      name: "disassociate-wireless-gateway-from-certificate",
      description:
        "Disassociates a wireless gateway from its currently associated certificate",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
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
      name: "disassociate-wireless-gateway-from-thing",
      description:
        "Disassociates a wireless gateway from its currently associated thing",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
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
      name: "get-destination",
      description: "Gets information about a destination",
      options: [
        {
          name: "--name",
          description: "The name of the resource to get",
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
      name: "get-device-profile",
      description: "Gets information about a device profile",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to get",
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
      name: "get-event-configuration-by-resource-types",
      description: "Get the event configuration based on resource types",
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
      name: "get-fuota-task",
      description: "Gets information about a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
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
      name: "get-log-levels-by-resource-types",
      description:
        "Returns current default log levels or log levels by resource types. Based on resource types, log levels can be for wireless device log options or wireless gateway log options",
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
      name: "get-metric-configuration",
      description: "Get the metric configuration status for this AWS account",
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
      name: "get-metrics",
      description: "Get the summary metrics for this AWS account",
      options: [
        {
          name: "--summary-metric-queries",
          description: "The list of queries to retrieve the summary metrics",
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
      name: "get-multicast-group",
      description: "Gets information about a multicast group",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
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
      name: "get-multicast-group-session",
      description: "Gets information about a multicast group session",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
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
      name: "get-network-analyzer-configuration",
      description: "Get network analyzer configuration",
      options: [
        {
          name: "--configuration-name",
          description: "Name of the network analyzer configuration",
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
      name: "get-partner-account",
      description:
        "Gets information about a partner account. If PartnerAccountId and PartnerType are null, returns all partner accounts",
      options: [
        {
          name: "--partner-account-id",
          description:
            "The partner account ID to disassociate from the AWS account",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-type",
          description: "The partner type",
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
      name: "get-position",
      description:
        "Get the position information for a given resource.  This action is no longer supported. Calls to retrieve the position information should use the GetResourcePosition API operation instead",
      options: [
        {
          name: "--resource-identifier",
          description:
            "Resource identifier used to retrieve the position information",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Resource type of the resource for which position information is retrieved",
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
      name: "get-position-configuration",
      description:
        "Get position configuration for a given resource.  This action is no longer supported. Calls to retrieve the position configuration should use the GetResourcePosition API operation instead",
      options: [
        {
          name: "--resource-identifier",
          description: "Resource identifier used in a position configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Resource type of the resource for which position configuration is retrieved",
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
      name: "get-position-estimate",
      description:
        "Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors",
      options: [
        {
          name: "--wi-fi-access-points",
          description:
            "Retrieves an estimated device position by resolving WLAN measurement data. The position is resolved using HERE's Wi-Fi based solver",
          args: {
            name: "list",
          },
        },
        {
          name: "--cell-towers",
          description:
            "Retrieves an estimated device position by resolving measurement data from cellular radio towers. The position is resolved using HERE's cellular-based solver",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ip",
          description:
            "Retrieves an estimated device position by resolving the IP address information from the device. The position is resolved using MaxMind's IP-based solver",
          args: {
            name: "structure",
          },
        },
        {
          name: "--gnss",
          description:
            "Retrieves an estimated device position by resolving the global navigation satellite system (GNSS) scan data. The position is resolved using the GNSS solver powered by LoRa Cloud",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timestamp",
          description:
            "Optional information that specifies the time when the position information will be resolved. It uses the Unix timestamp format. If not specified, the time at which the request was received will be used",
          args: {
            name: "timestamp",
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
      name: "get-resource-event-configuration",
      description:
        "Get the event configuration for a particular resource identifier",
      options: [
        {
          name: "--identifier",
          description: "Resource identifier to opt in for event messaging",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier-type",
          description:
            "Identifier type of the particular resource identifier for event configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-type",
          description:
            "Partner type of the resource if the identifier type is PartnerAccountId",
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
      name: "get-resource-log-level",
      description:
        "Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for a wireless device, wireless gateway or fuota task",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of the resource, which can be WirelessDevice, WirelessGateway or FuotaTask",
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
      name: "get-resource-position",
      description:
        "Get the position information for a given wireless device or a wireless gateway resource. The position information uses the  World Geodetic System (WGS84)",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier of the resource for which position information is retrieved. It can be the wireless device ID or the wireless gateway ID, depending on the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of resource for which position information is retrieved, which can be a wireless device or a wireless gateway",
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
      name: "get-service-endpoint",
      description:
        "Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections",
      options: [
        {
          name: "--service-type",
          description:
            "The service type for which to get endpoint information about. Can be CUPS for the Configuration and Update Server endpoint, or LNS for the LoRaWAN Network Server endpoint or CLAIM for the global endpoint",
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
      name: "get-service-profile",
      description: "Gets information about a service profile",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to get",
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
      name: "get-wireless-device",
      description: "Gets information about a wireless device",
      options: [
        {
          name: "--identifier",
          description: "The identifier of the wireless device to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier-type",
          description: "The type of identifier used in identifier",
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
      name: "get-wireless-device-import-task",
      description:
        "Get information about an import task and count of device onboarding summary information for the import task",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the import task for which information is requested",
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
      name: "get-wireless-device-statistics",
      description: "Gets operating information about a wireless device",
      options: [
        {
          name: "--wireless-device-id",
          description:
            "The ID of the wireless device for which to get the data",
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
      name: "get-wireless-gateway",
      description: "Gets information about a wireless gateway",
      options: [
        {
          name: "--identifier",
          description: "The identifier of the wireless gateway to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier-type",
          description: "The type of identifier used in identifier",
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
      name: "get-wireless-gateway-certificate",
      description:
        "Gets the ID of the certificate that is currently associated with a wireless gateway",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to get",
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
      name: "get-wireless-gateway-firmware-information",
      description:
        "Gets the firmware version and other information about a wireless gateway",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to get",
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
      name: "get-wireless-gateway-statistics",
      description: "Gets operating information about a wireless gateway",
      options: [
        {
          name: "--wireless-gateway-id",
          description:
            "The ID of the wireless gateway for which to get the data",
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
      name: "get-wireless-gateway-task",
      description: "Gets information about a wireless gateway task",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to get",
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
      name: "get-wireless-gateway-task-definition",
      description: "Gets information about a wireless gateway task definition",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to get",
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
      name: "list-destinations",
      description: "Lists the destinations registered to your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
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
      name: "list-device-profiles",
      description: "Lists the device profiles registered to your AWS account",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--device-profile-type",
          description:
            "A filter to list only device profiles that use this type, which can be LoRaWAN or Sidewalk",
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
      name: "list-devices-for-wireless-device-import-task",
      description:
        "List the Sidewalk devices in an import task and their onboarding status",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the import task for which wireless devices are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the devices in the import task",
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
      name: "list-event-configurations",
      description:
        "List event configurations where at least one event topic has been enabled",
      options: [
        {
          name: "--resource-type",
          description: "Resource type to filter event configurations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
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
      name: "list-fuota-tasks",
      description: "Lists the FUOTA tasks registered to your AWS account",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
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
      name: "list-multicast-groups",
      description: "Lists the multicast groups registered to your AWS account",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
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
      name: "list-multicast-groups-by-fuota-task",
      description: "List all multicast groups associated with a fuota task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
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
      name: "list-network-analyzer-configurations",
      description: "Lists the network analyzer configurations",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
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
      name: "list-partner-accounts",
      description:
        "Lists the partner accounts associated with your AWS account",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
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
      name: "list-position-configurations",
      description:
        "List position configurations for a given resource, such as positioning solvers.  This action is no longer supported. Calls to retrieve position information should use the GetResourcePosition API operation instead",
      options: [
        {
          name: "--resource-type",
          description:
            "Resource type for which position configurations are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
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
      name: "list-queued-messages",
      description: "List queued messages in the downlink queue",
      options: [
        {
          name: "--id",
          description:
            "The ID of a given wireless device which the downlink message packets are being sent",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--wireless-device-type",
          description:
            "The wireless device type, whic can be either Sidewalk or LoRaWAN",
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
      name: "list-service-profiles",
      description: "Lists the service profiles registered to your AWS account",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
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
      name: "list-tags-for-resource",
      description:
        "Lists the tags (metadata) you have assigned to the resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource for which you want to list tags",
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
      name: "list-wireless-device-import-tasks",
      description:
        "List wireless devices that have been added to an import task",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
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
      name: "list-wireless-devices",
      description: "Lists the wireless devices registered to your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-name",
          description:
            "A filter to list only the wireless devices that use this destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-profile-id",
          description:
            "A filter to list only the wireless devices that use this device profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-profile-id",
          description:
            "A filter to list only the wireless devices that use this service profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-device-type",
          description:
            "A filter to list only the wireless devices that use this wireless device type",
          args: {
            name: "string",
          },
        },
        {
          name: "--fuota-task-id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--multicast-group-id",
          description: "The ID of the multicast group",
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
      name: "list-wireless-gateway-task-definitions",
      description:
        "List the wireless gateway tasks definitions registered to your AWS account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-definition-type",
          description:
            "A filter to list only the wireless gateway task definitions that use this task definition type",
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
      name: "list-wireless-gateways",
      description: "Lists the wireless gateways registered to your AWS account",
      options: [
        {
          name: "--next-token",
          description:
            "To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this operation",
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
      name: "put-position-configuration",
      description:
        "Put position configuration for a given resource.  This action is no longer supported. Calls to update the position configuration should use the UpdateResourcePosition API operation instead",
      options: [
        {
          name: "--resource-identifier",
          description:
            "Resource identifier used to update the position configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Resource type of the resource for which you want to update the position configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--solvers",
          description:
            "The positioning solvers used to update the position configuration of the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination",
          description:
            "The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN",
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
      name: "put-resource-log-level",
      description:
        "Sets the log-level override for a resource-ID and resource-type. This option can be specified for a wireless gateway or a wireless device. A limit of 200 log level override can be set per account",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of the resource, which can be WirelessDevice, WirelessGateway, or FuotaTask",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-level",
          description:
            "The log level for a log message. The log levels can be disabled, or set to ERROR to display less verbose logs containing only error information, or to INFO for more detailed logs",
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
      name: "reset-all-resource-log-levels",
      description:
        "Removes the log-level overrides for all resources; wireless devices, wireless gateways, and fuota tasks",
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
      name: "reset-resource-log-level",
      description:
        "Removes the log-level override, if any, for a specific resource-ID and resource-type. It can be used for a wireless device, a wireless gateway, or a fuota task",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier of the resource. For a Wireless Device, it is the wireless device ID. For a wireless gateway, it is the wireless gateway ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of the resource, which can be WirelessDevice, WirelessGateway, or FuotaTask",
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
      name: "send-data-to-multicast-group",
      description: "Sends the specified data to a multicast group",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload-data",
          description:
            "The binary to be sent to the end device, encoded in base64",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-metadata",
          description:
            "Wireless metadata that is to be sent to multicast group",
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
      name: "send-data-to-wireless-device",
      description: "Sends a decrypted application data frame to a device",
      options: [
        {
          name: "--id",
          description: "The ID of the wireless device to receive the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--transmit-mode",
          description:
            "The transmit mode to use to send data to the wireless device. Can be: 0 for UM (unacknowledge mode) or 1 for AM (acknowledge mode)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--payload-data",
          description:
            "The binary to be sent to the end device, encoded in base64",
          args: {
            name: "string",
          },
        },
        {
          name: "--wireless-metadata",
          description: "Metadata about the message request",
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
      name: "start-bulk-associate-wireless-device-with-multicast-group",
      description:
        "Starts a bulk association of all qualifying wireless devices with a multicast group",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-string",
          description:
            "Query string used to search for wireless devices as part of the bulk associate and disassociate process",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
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
      name: "start-bulk-disassociate-wireless-device-from-multicast-group",
      description:
        "Starts a bulk disassociatin of all qualifying wireless devices from a multicast group",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-string",
          description:
            "Query string used to search for wireless devices as part of the bulk associate and disassociate process",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
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
      name: "start-fuota-task",
      description: "Starts a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description: "The LoRaWAN information used to start a FUOTA task",
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
      name: "start-multicast-group-session",
      description: "Starts a multicast group session",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description:
            "The LoRaWAN information used with the multicast session",
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
      name: "start-single-wireless-device-import-task",
      description: "Start import task for a single wireless device",
      options: [
        {
          name: "--destination-name",
          description:
            "The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-name",
          description:
            "The name of the wireless device for which an import task is being started",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--sidewalk",
          description:
            "The Sidewalk-related parameters for importing a single wireless device",
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
      name: "start-wireless-device-import-task",
      description:
        "Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file",
      options: [
        {
          name: "--destination-name",
          description:
            "The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--sidewalk",
          description:
            "The Sidewalk-related parameters for importing wireless devices that need to be provisioned in bulk",
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
      description: "Adds a tag to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to add tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource",
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
      name: "test-wireless-device",
      description:
        "Simulates a provisioned device by sending an uplink data payload of Hello",
      options: [
        {
          name: "--id",
          description: "The ID of the wireless device to test",
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
      description: "Removes one or more tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of the keys of the tags to remove from the resource",
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
      name: "update-destination",
      description: "Updates properties of a destination",
      options: [
        {
          name: "--name",
          description: "The new name of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-type",
          description: "The type of value in Expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description: "The new rule name or topic rule to send messages to",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM Role that authorizes the destination",
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
      name: "update-event-configuration-by-resource-types",
      description: "Update the event configuration based on resource types",
      options: [
        {
          name: "--device-registration-state",
          description:
            "Device registration state resource type event configuration object for enabling and disabling wireless gateway topic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--proximity",
          description:
            "Proximity resource type event configuration object for enabling and disabling wireless gateway topic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--join",
          description:
            "Join resource type event configuration object for enabling and disabling wireless device topic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--connection-status",
          description:
            "Connection status resource type event configuration object for enabling and disabling wireless gateway topic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--message-delivery-status",
          description:
            "Message delivery status resource type event configuration object for enabling and disabling wireless device topic",
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
      name: "update-fuota-task",
      description: "Updates properties of a FUOTA task",
      options: [
        {
          name: "--id",
          description: "The ID of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--firmware-update-image",
          description:
            "The S3 URI points to a firmware update image that is to be used with a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--firmware-update-role",
          description:
            "The firmware update role that is to be used with a FUOTA task",
          args: {
            name: "string",
          },
        },
        {
          name: "--redundancy-percent",
          description:
            "The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with RedundancyPercent set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fragment-size-bytes",
          description:
            "The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fragment-interval-ms",
          description:
            "The interval for sending fragments in milliseconds, rounded to the nearest second.  This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud",
          args: {
            name: "integer",
          },
        },
        {
          name: "--descriptor",
          description:
            "The Descriptor specifies some metadata about the File being transferred using FUOTA e.g. the software version. It is sent transparently to the device. It is a binary field encoded in base64",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description: "The LoRaWAN information used with a FUOTA task",
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
      name: "update-log-levels-by-resource-types",
      description:
        "Set default log level, or log levels by resource types. This can be for wireless device log options or wireless gateways log options and is used to control the log messages that'll be displayed in CloudWatch",
      options: [
        {
          name: "--default-log-level",
          description:
            "The log level for a log message. The log levels can be disabled, or set to ERROR to display less verbose logs containing only error information, or to INFO for more detailed logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--fuota-task-log-options",
          description: "The list of fuota task log options",
          args: {
            name: "list",
          },
        },
        {
          name: "--wireless-device-log-options",
          description: "The list of wireless device log options",
          args: {
            name: "list",
          },
        },
        {
          name: "--wireless-gateway-log-options",
          description: "The list of wireless gateway log options",
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
      name: "update-metric-configuration",
      description: "Update the summary metric configuration",
      options: [
        {
          name: "--summary-metric",
          description:
            "The value to be used to set summary metric configuration",
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
      name: "update-multicast-group",
      description: "Updates properties of a multicast group session",
      options: [
        {
          name: "--id",
          description: "The ID of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the multicast group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description:
            "The LoRaWAN information that is to be used with the multicast group",
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
      name: "update-network-analyzer-configuration",
      description: "Update network analyzer configuration",
      options: [
        {
          name: "--configuration-name",
          description: "Name of the network analyzer configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--trace-content",
          description:
            "Trace content for your wireless devices, gateways, and multicast groups",
          args: {
            name: "structure",
          },
        },
        {
          name: "--wireless-devices-to-add",
          description:
            "Wireless device resources to add to the network analyzer configuration. Provide the WirelessDeviceId of the resource to add in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--wireless-devices-to-remove",
          description:
            "Wireless device resources to remove from the network analyzer configuration. Provide the WirelessDeviceId of the resources to remove in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--wireless-gateways-to-add",
          description:
            "Wireless gateway resources to add to the network analyzer configuration. Provide the WirelessGatewayId of the resource to add in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--wireless-gateways-to-remove",
          description:
            "Wireless gateway resources to remove from the network analyzer configuration. Provide the WirelessGatewayId of the resources to remove in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "The description of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--multicast-groups-to-add",
          description:
            "Multicast group resources to add to the network analyzer configuration. Provide the MulticastGroupId of the resource to add in the input array",
          args: {
            name: "list",
          },
        },
        {
          name: "--multicast-groups-to-remove",
          description:
            "Multicast group resources to remove from the network analyzer configuration. Provide the MulticastGroupId of the resources to remove in the input array",
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
      name: "update-partner-account",
      description: "Updates properties of a partner account",
      options: [
        {
          name: "--sidewalk",
          description: "The Sidewalk account credentials",
          args: {
            name: "structure",
          },
        },
        {
          name: "--partner-account-id",
          description: "The ID of the partner account to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-type",
          description: "The partner type",
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
      name: "update-position",
      description:
        "Update the position information of a resource.  This action is no longer supported. Calls to update the position information should use the UpdateResourcePosition API operation instead",
      options: [
        {
          name: "--resource-identifier",
          description:
            "Resource identifier of the resource for which position is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Resource type of the resource for which position is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description: "The position information of the resource",
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
      name: "update-resource-event-configuration",
      description:
        "Update the event configuration for a particular resource identifier",
      options: [
        {
          name: "--identifier",
          description: "Resource identifier to opt in for event messaging",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier-type",
          description:
            "Identifier type of the particular resource identifier for event configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--partner-type",
          description:
            "Partner type of the resource if the identifier type is PartnerAccountId",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-registration-state",
          description:
            "Event configuration for the device registration state event",
          args: {
            name: "structure",
          },
        },
        {
          name: "--proximity",
          description: "Event configuration for the proximity event",
          args: {
            name: "structure",
          },
        },
        {
          name: "--join",
          description: "Event configuration for the join event",
          args: {
            name: "structure",
          },
        },
        {
          name: "--connection-status",
          description: "Event configuration for the connection status event",
          args: {
            name: "structure",
          },
        },
        {
          name: "--message-delivery-status",
          description:
            "Event configuration for the message delivery status event",
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
      name: "update-resource-position",
      description:
        "Update the position information of a given wireless device or a wireless gateway resource. The position coordinates are based on the  World Geodetic System (WGS84)",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The identifier of the resource for which position information is updated. It can be the wireless device ID or the wireless gateway ID, depending on the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of resource for which position information is updated, which can be a wireless device or a wireless gateway",
          args: {
            name: "string",
          },
        },
        {
          name: "--geo-json-payload",
          description:
            "The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see GeoJSON",
          args: {
            name: "blob",
          },
        },
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
      name: "update-wireless-device",
      description: "Updates properties of a wireless device",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-name",
          description: "The name of the new destination for the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The new name of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--positioning",
          description:
            "FPort values for the GNSS, stream, and ClockSync functions of the positioning information",
          args: {
            name: "string",
          },
        },
        {
          name: "--lorawan",
          description: "The updated wireless device's configuration",
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
      name: "update-wireless-device-import-task",
      description: "Update an import task to add more devices to the task",
      options: [
        {
          name: "--id",
          description: "The identifier of the import task to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--sidewalk",
          description:
            "The Sidewalk-related parameters of the import task to be updated",
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
      name: "update-wireless-gateway",
      description: "Updates properties of a wireless gateway",
      options: [
        {
          name: "--id",
          description: "The ID of the resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The new name of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--join-eui-filters",
          description:
            "A list of JoinEuiRange used by LoRa gateways to filter LoRa frames",
          args: {
            name: "list",
          },
        },
        {
          name: "--net-id-filters",
          description:
            "A list of NetId values that are used by LoRa gateways to filter the uplink frames",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-eirp",
          description: "The MaxEIRP value",
          args: {
            name: "float",
          },
        },
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
