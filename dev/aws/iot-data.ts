export const completionSpec: Fig.Spec = {
  name: "iot-data",
  description:
    "AWS IoT AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the AWS cloud. Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:  aws iot describe-endpoint --endpoint-type iot:Data-ATS  The service name used by AWS Signature Version 4 to sign requests is: iotdevicegateway.",
  subcommands: [
    {
      name: "delete-thing-shadow",
      description:
        "Deletes the shadow for the specified thing. For more information, see DeleteThingShadow in the AWS IoT Developer Guide.",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--shadow-name",
          description: "The name of the shadow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
          isOptional: false,
        },
      ],
    },
    {
      name: "get-thing-shadow",
      description:
        "Gets the shadow for the specified thing. For more information, see GetThingShadow in the AWS IoT Developer Guide.",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--shadow-name",
          description: "The name of the shadow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
          isOptional: false,
        },
      ],
    },
    {
      name: "list-named-shadows-for-thing",
      description: "Lists the shadows for the specified thing.",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description: "The token to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description: "The result page size.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "publish",
      description:
        "Publishes state information. For more information, see HTTP Protocol in the AWS IoT Developer Guide.",
      options: [
        {
          name: "--topic",
          description: "The name of the MQTT topic.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--qos",
          description: "The Quality of Service (QoS) level.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--payload",
          description: "The state information, in JSON format.",
          args: {
            name: "blob",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-thing-shadow",
      description:
        "Updates the shadow for the specified thing. For more information, see UpdateThingShadow in the AWS IoT Developer Guide.",
      options: [
        {
          name: "--thing-name",
          description: "The name of the thing.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--shadow-name",
          description: "The name of the shadow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--payload",
          description: "The state information, in JSON format.",
          args: {
            name: "blob",
          },
          isOptional: false,
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
          isOptional: false,
        },
      ],
    },
  ],
};
