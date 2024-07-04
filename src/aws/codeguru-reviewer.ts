const completionSpec: Fig.Spec = {
  name: "codeguru-reviewer",
  description:
    "This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommends fixes in your Java and Python code. By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the  Amazon CodeGuru Reviewer User Guide.  To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by creating an interface VPC endpoint. For more information, see CodeGuru Reviewer and interface VPC endpoints (Amazon Web Services PrivateLink) in the Amazon CodeGuru Reviewer User Guide",
  subcommands: [
    {
      name: "associate-repository",
      description:
        "Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see Recommendations in Amazon CodeGuru Reviewer in the Amazon CodeGuru Reviewer User Guide.  If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured. Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see Associate a repository in the Amazon CodeGuru Reviewer User Guide.   You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see Getting started with CodeGuru Reviewer in the CodeGuru Reviewer User Guide",
      options: [
        {
          name: "--repository",
          description: "The repository to associate",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:   A tag key (for example, CostCenter, Environment, Project, or Secret). Tag keys are case sensitive.   An optional field known as a tag value (for example, 111122223333, Production, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive",
          args: {
            name: "map",
          },
        },
        {
          name: "--kms-key-details",
          description:
            "A KMSKeyDetails object that contains:   The encryption option for this repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (AWS_OWNED_CMK) or customer managed (CUSTOMER_MANAGED_CMK).   The ID of the Amazon Web Services KMS key that is associated with this repository association",
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
      name: "create-code-review",
      description:
        "Use to create a code review with a CodeReviewType of RepositoryAnalysis. This type of code review analyzes all code under a specified branch in an associated repository. PullRequest code reviews are automatically triggered by a pull request",
      options: [
        {
          name: "--name",
          description:
            "The name of the code review. The name of each code review in your Amazon Web Services account must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-association-arn",
          description:
            "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations. A code review can only be created on an associated repository. This is the ARN of the associated repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of code review to create. This is specified using a CodeReviewType object. You can create a code review only of type RepositoryAnalysis",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries",
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
      name: "describe-code-review",
      description:
        "Returns the metadata associated with the code review along with its status",
      options: [
        {
          name: "--code-review-arn",
          description:
            "The Amazon Resource Name (ARN) of the CodeReview object",
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
      name: "describe-recommendation-feedback",
      description:
        "Describes the customer feedback for a CodeGuru Reviewer recommendation",
      options: [
        {
          name: "--code-review-arn",
          description:
            "The Amazon Resource Name (ARN) of the CodeReview object",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-id",
          description:
            "The recommendation ID that can be used to track the provided recommendations and then to collect the feedback",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.  The UserId is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see  Specifying a Principal in the Amazon Web Services Identity and Access Management User Guide",
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
      name: "describe-repository-association",
      description:
        "Returns a RepositoryAssociation object that contains information about the requested repository association",
      options: [
        {
          name: "--association-arn",
          description:
            "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations",
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
      name: "disassociate-repository",
      description:
        "Removes the association between Amazon CodeGuru Reviewer and a repository",
      options: [
        {
          name: "--association-arn",
          description:
            "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations",
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
      name: "list-code-reviews",
      description:
        "Lists all the code reviews that the customer has created in the past 90 days",
      options: [
        {
          name: "--provider-types",
          description:
            "List of provider types for filtering that needs to be applied before displaying the result. For example, providerTypes=[GitHub] lists code reviews from GitHub",
          args: {
            name: "list",
          },
        },
        {
          name: "--states",
          description:
            "List of states for filtering that needs to be applied before displaying the result. For example, states=[Pending] lists code reviews in the Pending state. The valid code review states are:    Completed: The code review is complete.    Pending: The code review started and has not completed or failed.    Failed: The code review failed.    Deleting: The code review is being deleted",
          args: {
            name: "list",
          },
        },
        {
          name: "--repository-names",
          description:
            "List of repository names for filtering that needs to be applied before displaying the result",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description: "The type of code reviews to list in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "list-recommendation-feedback",
      description:
        "Returns a list of RecommendationFeedbackSummary objects that contain customer recommendation feedback for all CodeGuru Reviewer users",
      options: [
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--code-review-arn",
          description:
            "The Amazon Resource Name (ARN) of the CodeReview object",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-ids",
          description:
            "An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.  The UserId is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see  Specifying a Principal in the Amazon Web Services Identity and Access Management User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--recommendation-ids",
          description:
            "Used to query the recommendation feedback for a given recommendation",
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
      name: "list-recommendations",
      description:
        "Returns the list of all recommendations for a completed code review",
      options: [
        {
          name: "--next-token",
          description: "Pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that are returned per call. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--code-review-arn",
          description:
            "The Amazon Resource Name (ARN) of the CodeReview object",
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
      name: "list-repository-associations",
      description:
        "Returns a list of RepositoryAssociationSummary objects that contain summary information about a repository association. You can filter the returned list by ProviderType, Name, State, and Owner",
      options: [
        {
          name: "--provider-types",
          description: "List of provider types to use as a filter",
          args: {
            name: "list",
          },
        },
        {
          name: "--states",
          description:
            "List of repository association states to use as a filter. The valid repository association states are:    Associated: The repository association is complete.    Associating: CodeGuru Reviewer is:   Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.  If your repository ProviderType is GitHub, GitHub Enterprise Server, or Bitbucket, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.    Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.      Failed: The repository failed to associate or disassociate.    Disassociating: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.    Disassociated: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see Using tags to control access to associated repositories in the Amazon CodeGuru Reviewer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--names",
          description: "List of repository names to use as a filter",
          args: {
            name: "list",
          },
        },
        {
          name: "--owners",
          description:
            "List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that was used to associate the repository",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of repository association results returned by ListRepositoryAssociations in paginated output. When this parameter is used, ListRepositoryAssociations only returns maxResults results in a single page with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRepositoryAssociations request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, ListRepositoryAssociations returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated ListRepositoryAssociations request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
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
      description:
        "Returns the list of tags associated with an associated repository resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations",
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
      name: "put-recommendation-feedback",
      description:
        "Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten",
      options: [
        {
          name: "--code-review-arn",
          description:
            "The Amazon Resource Name (ARN) of the CodeReview object",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-id",
          description:
            "The recommendation ID that can be used to track the provided recommendations and then to collect the feedback",
          args: {
            name: "string",
          },
        },
        {
          name: "--reactions",
          description:
            "List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback",
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
      name: "tag-resource",
      description: "Adds one or more tags to an associated repository",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:   A tag key (for example, CostCenter, Environment, Project, or Secret). Tag keys are case sensitive.   An optional field known as a tag value (for example, 111122223333, Production, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive",
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
      description: "Removes a tag from an associated repository",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of the keys for each tag you want to remove from an associated repository",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "code-review-completed",
          description:
            "Wait until a code review is complete. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 180 failed checks",
          options: [
            {
              name: "--code-review-arn",
              description:
                "The Amazon Resource Name (ARN) of the CodeReview object",
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
          name: "repository-association-succeeded",
          description:
            "Wait until a repository association is complete. It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 30 failed checks",
          options: [
            {
              name: "--association-arn",
              description:
                "The Amazon Resource Name (ARN) of the RepositoryAssociation object. You can retrieve this ARN by calling ListRepositoryAssociations",
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
