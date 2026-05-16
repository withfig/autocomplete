const completionSpec: Fig.Spec = {
  name: "sagemaker-edge",
  description:
    "SageMaker Edge Manager dataplane service for communicating with active agents",
  subcommands: [
    {
      name: "get-deployments",
      description: "Use to get the active deployments from a device",
      options: [
        {
          name: "--device-name",
          description:
            "The unique name of the device you want to get the configuration of active deployments from",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-fleet-name",
          description: "The name of the fleet that the device belongs to",
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
      name: "get-device-registration",
      description:
        "Use to check if a device is registered with SageMaker Edge Manager",
      options: [
        {
          name: "--device-name",
          description:
            "The unique name of the device you want to get the registration status from",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-fleet-name",
          description: "The name of the fleet that the device belongs to",
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
      name: "send-heartbeat",
      description:
        "Use to get the current status of devices registered on SageMaker Edge Manager",
      options: [
        {
          name: "--agent-metrics",
          description:
            "For internal use. Returns a list of SageMaker Edge Manager agent operating metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--models",
          description: "Returns a list of models deployed on the the device",
          args: {
            name: "list",
          },
        },
        {
          name: "--agent-version",
          description: "Returns the version of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-name",
          description: "The unique name of the device",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-fleet-name",
          description: "The name of the fleet that the device belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-result",
          description: "Returns the result of a deployment on the device",
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
