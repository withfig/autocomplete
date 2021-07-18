const completionSpec: Fig.Spec = {
  name: "wellarchitected",
  description:
    "AWS Well-Architected Tool This is the AWS Well-Architected Tool API Reference. The AWS Well-Architected Tool API provides programmatic access to the AWS Well-Architected Tool in the AWS Management Console. For information about the AWS Well-Architected Tool, see the AWS Well-Architected Tool User Guide.",
  subcommands: [
    {
      name: "associate-lenses",
      description: "Associate a lens to a workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-aliases",
          description:
            "List of lens aliases to associate or disassociate with a workload. Identify a lens using its LensSummary$LensAlias.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-milestone",
      description: "Create a milestone for an existing workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-name",
          description:
            "The name of the milestone in a workload. Milestone names must be unique within a workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned.   This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-workload",
      description:
        "Create a new workload. The owner of a workload can share the workload with other AWS accounts and IAM users in the same AWS Region. Only the owner of a workload can delete it. For more information, see Defining a Workload in the AWS Well-Architected Tool User Guide.",
      options: [
        {
          name: "--workload-name",
          description:
            "The name of the workload. The name must be unique within an account within a Region. Spaces and capitalization are ignored when checking for uniqueness.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment",
          description: "The environment for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "The list of AWS account IDs associated with the workload.",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-regions",
          description:
            "The list of AWS Regions associated with the workload, for example, us-east-2, or ca-central-1.",
          args: {
            name: "list",
          },
        },
        {
          name: "--non-aws-regions",
          description:
            "The list of non-AWS Regions associated with the workload.",
          args: {
            name: "list",
          },
        },
        {
          name: "--pillar-priorities",
          description:
            "The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.",
          args: {
            name: "list",
          },
        },
        {
          name: "--architectural-design",
          description: "The URL of the architectural design for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--review-owner",
          description:
            "The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.",
          args: {
            name: "string",
          },
        },
        {
          name: "--industry-type",
          description:
            "The industry type for the workload. If specified, must be one of the following:    Agriculture     Automobile     Defense     Design and Engineering     Digital Advertising     Education     Environmental Protection     Financial Services     Gaming     General Public Services     Healthcare     Hospitality     InfoTech     Justice and Public Safety     Life Sciences     Manufacturing     Media &amp; Entertainment     Mining &amp; Resources     Oil &amp; Gas     Power &amp; Utilities     Professional Services     Real Estate &amp; Construction     Retail &amp; Wholesale     Social Protection     Telecommunications     Travel, Transportation &amp; Logistics     Other",
          args: {
            name: "string",
          },
        },
        {
          name: "--industry",
          description: "The industry for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lenses",
          description:
            "The list of lenses associated with the workload. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "list",
          },
        },
        {
          name: "--notes",
          description: "The notes associated with the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned.   This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be associated with the workload.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-workload-share",
      description:
        "Create a workload share. The owner of a workload can share it with other AWS accounts and IAM users in the same AWS Region. Shared access to a workload is not removed until the workload invitation is deleted. For more information, see Sharing a Workload in the AWS Well-Architected Tool User Guide.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--shared-with",
          description:
            "The AWS account ID or IAM role with which the workload is shared.",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-type",
          description: "Permission granted on a workload share.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned.   This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-workload",
      description: "Delete an existing workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned.   This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-workload-share",
      description: "Delete a workload share.",
      options: [
        {
          name: "--share-id",
          description: "The ID associated with the workload share.",
          args: {
            name: "string",
          },
        },
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned.   This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-lenses",
      description:
        "Disassociate a lens from a workload.  The AWS Well-Architected Framework lens (wellarchitected) cannot be removed from a workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-aliases",
          description:
            "List of lens aliases to associate or disassociate with a workload. Identify a lens using its LensSummary$LensAlias.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-answer",
      description: "Get lens review.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--question-id",
          description: "The ID of the question.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lens-review",
      description: "Get lens review.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lens-review-report",
      description: "Get lens review report.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-lens-version-difference",
      description: "Get lens version differences.",
      options: [
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-lens-version",
          description: "The base version of the lens.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-milestone",
      description: "Get a milestone for an existing workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workload",
      description: "Get an existing workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-answers",
      description: "List of answers.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--pillar-id",
          description:
            "The ID used to identify a pillar, for example, security. A pillar is identified by its PillarReviewSummary$PillarId.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-lens-review-improvements",
      description: "List lens review improvements.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--pillar-id",
          description:
            "The ID used to identify a pillar, for example, security. A pillar is identified by its PillarReviewSummary$PillarId.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-lens-reviews",
      description: "List lens reviews.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-number",
          description:
            "The milestone number. A workload can have a maximum of 100 milestones.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-lenses",
      description: "List the available lenses.",
      options: [
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-milestones",
      description: "List all milestones for an existing workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-notifications",
      description: "List lens notifications.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-share-invitations",
      description: "List the workload invitations.",
      options: [
        {
          name: "--workload-name-prefix",
          description:
            "An optional string added to the beginning of each workload name returned in the results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "List the tags for a resource.",
      options: [
        {
          name: "--workload-arn",
          description: "The ARN for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-workload-shares",
      description: "List the workload shares associated with the workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--shared-with-prefix",
          description:
            "The AWS account ID or IAM role with which the workload is shared.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-workloads",
      description: "List workloads. Paginated.",
      options: [
        {
          name: "--workload-name-prefix",
          description:
            "An optional string added to the beginning of each workload name returned in the results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next set of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return for this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description: "Adds one or more tags to the specified resource.",
      options: [
        {
          name: "--workload-arn",
          description: "The ARN for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags for the resource.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Deletes specified tags from a resource.",
      options: [
        {
          name: "--workload-arn",
          description: "The ARN for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-answer",
      description:
        "Update the answer to a specific question in a workload review.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--question-id",
          description: "The ID of the question.",
          args: {
            name: "string",
          },
        },
        {
          name: "--selected-choices",
          description:
            "List of selected choice IDs in a question answer. The values entered replace the previously selected choices.",
          args: {
            name: "list",
          },
        },
        {
          name: "--notes",
          description: "The notes associated with the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-applicable",
          description:
            "Defines whether this question is applicable to a lens review.",
        },
        {
          name: "--no-is-applicable",
          description:
            "Defines whether this question is applicable to a lens review.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-lens-review",
      description: "Update lens review.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-notes",
          description: "The notes associated with the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--pillar-notes",
          description: "List of pillar notes of a lens review in a workload.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-share-invitation",
      description: "Update a workload invitation.",
      options: [
        {
          name: "--share-invitation-id",
          description: "The ID assigned to the share invitation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--share-invitation-action",
          description: "Share invitation action taken by contributor.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-workload",
      description: "Update an existing workload.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--workload-name",
          description:
            "The name of the workload. The name must be unique within an account within a Region. Spaces and capitalization are ignored when checking for uniqueness.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment",
          description: "The environment for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "The list of AWS account IDs associated with the workload.",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-regions",
          description:
            "The list of AWS Regions associated with the workload, for example, us-east-2, or ca-central-1.",
          args: {
            name: "list",
          },
        },
        {
          name: "--non-aws-regions",
          description:
            "The list of non-AWS Regions associated with the workload.",
          args: {
            name: "list",
          },
        },
        {
          name: "--pillar-priorities",
          description:
            "The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its PillarReviewSummary$PillarId.",
          args: {
            name: "list",
          },
        },
        {
          name: "--architectural-design",
          description: "The URL of the architectural design for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--review-owner",
          description:
            "The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-review-owner-update-acknowledged",
          description:
            "Flag indicating whether the workload owner has acknowledged that the Review owner field is required. If a Review owner is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.",
        },
        {
          name: "--no-is-review-owner-update-acknowledged",
          description:
            "Flag indicating whether the workload owner has acknowledged that the Review owner field is required. If a Review owner is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.",
        },
        {
          name: "--industry-type",
          description:
            "The industry type for the workload. If specified, must be one of the following:    Agriculture     Automobile     Defense     Design and Engineering     Digital Advertising     Education     Environmental Protection     Financial Services     Gaming     General Public Services     Healthcare     Hospitality     InfoTech     Justice and Public Safety     Life Sciences     Manufacturing     Media &amp; Entertainment     Mining &amp; Resources     Oil &amp; Gas     Power &amp; Utilities     Professional Services     Real Estate &amp; Construction     Retail &amp; Wholesale     Social Protection     Telecommunications     Travel, Transportation &amp; Logistics     Other",
          args: {
            name: "string",
          },
        },
        {
          name: "--industry",
          description: "The industry for the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--notes",
          description: "The notes associated with the workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--improvement-status",
          description: "The improvement status for a workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-workload-share",
      description: "Update a workload share.",
      options: [
        {
          name: "--share-id",
          description: "The ID associated with the workload share.",
          args: {
            name: "string",
          },
        },
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-type",
          description: "Permission granted on a workload share.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "upgrade-lens-review",
      description: "Upgrade lens review.",
      options: [
        {
          name: "--workload-id",
          description:
            "The ID assigned to the workload. This ID is unique within an AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lens-alias",
          description:
            "The alias of the lens, for example, serverless. Each lens is identified by its LensSummary$LensAlias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--milestone-name",
          description:
            "The name of the milestone in a workload. Milestone names must be unique within a workload.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after it has completed successfully, the result of the original request is returned.   This token is listed as required, however, if you do not specify it, the AWS SDKs automatically generate one for you. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the request will fail.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
