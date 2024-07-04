const completionSpec: Fig.Spec = {
  name: "sagemaker-geospatial",
  description:
    "Provides APIs for creating and managing SageMaker geospatial resources",
  subcommands: [
    {
      name: "delete-earth-observation-job",
      description: "Use this operation to delete an Earth Observation job",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Earth Observation job being deleted",
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
      name: "delete-vector-enrichment-job",
      description: "Use this operation to delete a Vector Enrichment job",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted",
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
      name: "export-earth-observation-job",
      description:
        "Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location",
      options: [
        {
          name: "--arn",
          description:
            "The input Amazon Resource Name (ARN) of the Earth Observation job being exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token that guarantees that the call to this API is idempotent",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that you specified for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-source-images",
          description:
            "The source images provided to the Earth Observation job being exported",
        },
        {
          name: "--no-export-source-images",
          description:
            "The source images provided to the Earth Observation job being exported",
        },
        {
          name: "--output-config",
          description: "An object containing information about the output file",
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
      name: "export-vector-enrichment-job",
      description:
        "Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Vector Enrichment job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique token that guarantees that the call to this API is idempotent",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-config",
          description:
            "Output location information for exporting Vector Enrichment Job results",
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
      name: "get-earth-observation-job",
      description:
        "Get the details for a previously initiated Earth Observation job",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Earth Observation job",
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
      name: "get-raster-data-collection",
      description:
        "Use this operation to get details of a specific raster data collection",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the raster data collection",
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
      name: "get-tile",
      description:
        "Gets a web mercator tile for the given Earth Observation job",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN) of the tile operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-assets",
          description: "The particular assets or bands to tile",
          args: {
            name: "list",
          },
        },
        {
          name: "--image-mask",
          description: "Determines whether or not to return a valid data mask",
        },
        {
          name: "--no-image-mask",
          description: "Determines whether or not to return a valid data mask",
        },
        {
          name: "--output-data-type",
          description: "The output data type of the tile operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-format",
          description:
            "The data format of the output tile. The formats include .npy, .png and .jpg",
          args: {
            name: "string",
          },
        },
        {
          name: "--property-filters",
          description: "Property filters for the imagery to tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description:
            "Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-range-filter",
          description:
            "Time range filter applied to imagery to find the images to tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--x",
          description: "The x coordinate of the tile input",
          args: {
            name: "integer",
          },
        },
        {
          name: "--y",
          description: "The y coordinate of the tile input",
          args: {
            name: "integer",
          },
        },
        {
          name: "--z",
          description: "The z coordinate of the tile input",
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
      name: "get-vector-enrichment-job",
      description:
        "Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN)",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Vector Enrichment job",
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
      name: "list-earth-observation-jobs",
      description:
        "Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description: "The total number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The parameter by which to sort the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "An optional value that specifies whether you want the results sorted in Ascending or Descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only jobs with a specific status",
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
      name: "list-raster-data-collections",
      description: "Use this operation to get raster data collections",
      options: [
        {
          name: "--max-results",
          description: "The total number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results",
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
      name: "list-tags-for-resource",
      description: "Lists the tags attached to the resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource you want to tag",
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
      name: "list-vector-enrichment-jobs",
      description: "Retrieves a list of vector enrichment jobs",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "The parameter by which to sort the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "An optional value that specifies whether you want the results sorted in Ascending or Descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-equals",
          description:
            "A filter that retrieves only jobs with a specific status",
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
      name: "search-raster-data-collection",
      description:
        "Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the raster data collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--raster-data-collection-query",
          description:
            "RasterDataCollectionQuery consisting of AreaOfInterest(AOI), PropertyFilters and TimeRangeFilterInput used in SearchRasterDataCollection",
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
      name: "start-earth-observation-job",
      description: "Use this operation to create an Earth observation job",
      options: [
        {
          name: "--client-token",
          description:
            "A unique token that guarantees that the call to this API is idempotent",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that you specified for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-config",
          description:
            "Input configuration information for the Earth Observation job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-config",
          description:
            "An object containing information about the job configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Key Management Service key ID for server-side encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Earth Observation job",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Each tag consists of a key and a value",
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
      name: "start-vector-enrichment-job",
      description:
        "Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching",
      options: [
        {
          name: "--client-token",
          description:
            "A unique token that guarantees that the call to this API is idempotent",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that you specified for the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-config",
          description:
            "Input configuration information for the Vector Enrichment job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-config",
          description:
            "An object containing information about the job configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Key Management Service key ID for server-side encryption",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Vector Enrichment job",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Each tag consists of a key and a value",
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
      name: "stop-earth-observation-job",
      description:
        "Use this operation to stop an existing earth observation job",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Earth Observation job being stopped",
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
      name: "stop-vector-enrichment-job",
      description: "Stops the Vector Enrichment job for a given job ARN",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the Vector Enrichment job",
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
      description: "The resource you want to tag",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Each tag consists of a key and a value",
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
      description: "The resource you want to untag",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource you want to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Keys of the tags you want to remove",
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
