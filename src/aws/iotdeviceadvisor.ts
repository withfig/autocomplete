const completionSpec: Fig.Spec = {
  name: "iotdeviceadvisor",
  description:
    "Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested",
  subcommands: [
    {
      name: "create-suite-definition",
      description:
        "Creates a Device Advisor test suite. Requires permission to access the CreateSuiteDefinition action",
      options: [
        {
          name: "--suite-definition-configuration",
          description:
            "Creates a Device Advisor test suite with suite definition configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags to be attached to the suite definition",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "The client token for the test suite definition creation. This token is used for tracking test suite definition creation using retries and obtaining its status. This parameter is optional",
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
      name: "delete-suite-definition",
      description:
        "Deletes a Device Advisor test suite. Requires permission to access the DeleteSuiteDefinition action",
      options: [
        {
          name: "--suite-definition-id",
          description: "Suite definition ID of the test suite to be deleted",
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
      name: "get-endpoint",
      description: "Gets information about an Device Advisor endpoint",
      options: [
        {
          name: "--thing-arn",
          description:
            "The thing ARN of the device. This is an optional parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-arn",
          description:
            "The certificate ARN of the device. This is an optional parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-role-arn",
          description:
            "The device role ARN of the device. This is an optional parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-method",
          description:
            "The authentication method used during the device connection",
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
      name: "get-suite-definition",
      description:
        "Gets information about a Device Advisor test suite. Requires permission to access the GetSuiteDefinition action",
      options: [
        {
          name: "--suite-definition-id",
          description: "Suite definition ID of the test suite to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-definition-version",
          description: "Suite definition version of the test suite to get",
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
      name: "get-suite-run",
      description:
        "Gets information about a Device Advisor test suite run. Requires permission to access the GetSuiteRun action",
      options: [
        {
          name: "--suite-definition-id",
          description: "Suite definition ID for the test suite run",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-run-id",
          description: "Suite run ID for the test suite run",
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
      name: "get-suite-run-report",
      description:
        "Gets a report download link for a successful Device Advisor qualifying test suite run. Requires permission to access the GetSuiteRunReport action",
      options: [
        {
          name: "--suite-definition-id",
          description: "Suite definition ID of the test suite",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-run-id",
          description: "Suite run ID of the test suite run",
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
      name: "list-suite-definitions",
      description:
        "Lists the Device Advisor test suites you have created. Requires permission to access the ListSuiteDefinitions action",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return at once",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A token used to get the next set of results",
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
      name: "list-suite-runs",
      description:
        "Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite. Requires permission to access the ListSuiteRuns action",
      options: [
        {
          name: "--suite-definition-id",
          description:
            "Lists the test suite runs of the specified test suite based on suite definition ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-definition-version",
          description:
            "Must be passed along with suiteDefinitionId. Lists the test suite runs of the specified test suite based on suite definition version",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return at once",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A token to retrieve the next set of results",
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
      description:
        "Lists the tags attached to an IoT Device Advisor resource. Requires permission to access the ListTagsForResource action",
      options: [
        {
          name: "--resource-arn",
          description:
            "The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN",
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
      name: "start-suite-run",
      description:
        "Starts a Device Advisor test suite run. Requires permission to access the StartSuiteRun action",
      options: [
        {
          name: "--suite-definition-id",
          description: "Suite definition ID of the test suite",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-definition-version",
          description: "Suite definition version of the test suite",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-run-configuration",
          description: "Suite run configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags to be attached to the suite run",
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
      name: "stop-suite-run",
      description:
        "Stops a Device Advisor test suite run that is currently running. Requires permission to access the StopSuiteRun action",
      options: [
        {
          name: "--suite-definition-id",
          description:
            "Suite definition ID of the test suite run to be stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-run-id",
          description: "Suite run ID of the test suite run to be stopped",
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
        "Adds to and modifies existing tags of an IoT Device Advisor resource. Requires permission to access the TagResource action",
      options: [
        {
          name: "--resource-arn",
          description:
            "The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be attached to the IoT Device Advisor resource",
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
        "Removes tags from an IoT Device Advisor resource. Requires permission to access the UntagResource action",
      options: [
        {
          name: "--resource-arn",
          description:
            "The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "List of tag keys to remove from the IoT Device Advisor resource",
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
      name: "update-suite-definition",
      description:
        "Updates a Device Advisor test suite. Requires permission to access the UpdateSuiteDefinition action",
      options: [
        {
          name: "--suite-definition-id",
          description: "Suite definition ID of the test suite to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--suite-definition-configuration",
          description:
            "Updates a Device Advisor test suite with suite definition configuration",
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
