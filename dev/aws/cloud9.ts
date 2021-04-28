export const completionSpec: Fig.Spec = {
  name: "cloud9",
  description:
    "AWS Cloud9 AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud. For more information about AWS Cloud9, see the AWS Cloud9 User Guide. AWS Cloud9 supports these operations:    CreateEnvironmentEC2: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.    CreateEnvironmentMembership: Adds an environment member to an environment.    DeleteEnvironment: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.    DeleteEnvironmentMembership: Deletes an environment member from an environment.    DescribeEnvironmentMemberships: Gets information about environment members for an environment.    DescribeEnvironments: Gets information about environments.    DescribeEnvironmentStatus: Gets status information for an environment.    ListEnvironments: Gets a list of environment identifiers.    ListTagsForResource: Gets the tags for an environment.    TagResource: Adds tags to an environment.    UntagResource: Removes tags from an environment.    UpdateEnvironment: Changes the settings of an existing environment.    UpdateEnvironmentMembership: Changes the settings of an existing environment member for an environment.",
  subcommands: [
    {
      name: "create-environment-ec2",
      description:
        "Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.",
      options: [
        {
          name: "--name",
          description:
            "The name of the environment to create. This name is visible to other AWS IAM users in the same AWS account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "The description of the environment to create.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--client-request-token",
          description:
            "A unique, case-sensitive string that helps AWS Cloud9 to ensure this operation completes no more than one time. For more information, see Client Tokens in the Amazon EC2 API Reference.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-type",
          description:
            "The type of instance to connect to the environment (for example, t2.micro).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--subnet-id",
          description:
            "The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--image-id",
          description:
            "The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. To choose an AMI for the instance, you must specify a valid AMI alias or a valid AWS Systems Manager (SSM) path. The default AMI is used if the parameter isn't explicitly assigned a value in the request.   AMI aliases      Amazon Linux (default): amazonlinux-1-x86_64     Amazon Linux 2: amazonlinux-2-x86_64    Ubuntu 18.04: ubuntu-18.04-x86_64     SSM paths     Amazon Linux (default): resolve:ssm:/aws/service/cloud9/amis/amazonlinux-1-x86_64     Amazon Linux 2: resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64    Ubuntu 18.04: resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--automatic-stop-time-minutes",
          description:
            "The number of minutes until the running instance is shut down after the environment has last been used.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--owner-arn",
          description:
            "The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any AWS IAM principal. If this value is not specified, the ARN defaults to this environment's creator.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--connection-type",
          description:
            "The connection type used for connecting to an Amazon EC2 environment. Valid values are CONNECT_SSH (default) and CONNECT_SSM (connected through AWS Systems Manager). For more information, see Accessing no-ingress EC2 instances with AWS Systems Manager in the AWS Cloud9 User Guide.",
          args: {
            name: "string",
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
      name: "create-environment-membership",
      description:
        "Adds an environment member to an AWS Cloud9 development environment.",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment that contains the environment member you want to add.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--user-arn",
          description:
            "The Amazon Resource Name (ARN) of the environment member you want to add.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--permissions",
          description:
            "The type of environment member permissions you want to associate with this environment member. Available values include:    read-only: Has read-only access to the environment.    read-write: Has read-write access to the environment.",
          args: {
            name: "string",
          },
          isOptional: false,
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
      name: "delete-environment",
      description:
        "Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.",
      options: [
        {
          name: "--environment-id",
          description: "The ID of the environment to delete.",
          args: {
            name: "string",
          },
          isOptional: false,
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
      name: "delete-environment-membership",
      description:
        "Deletes an environment member from an AWS Cloud9 development environment.",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment to delete the environment member from.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--user-arn",
          description:
            "The Amazon Resource Name (ARN) of the environment member to delete from the environment.",
          args: {
            name: "string",
          },
          isOptional: false,
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
      name: "describe-environment-memberships",
      description:
        "Gets information about environment members for an AWS Cloud9 development environment.",
      options: [
        {
          name: "--user-arn",
          description:
            "The Amazon Resource Name (ARN) of an individual environment member to get information about. If no value is specified, information about all environment members are returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--environment-id",
          description:
            "The ID of the environment to get environment member information about.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--permissions",
          description:
            "The type of environment member permissions to get information about. Available values include:    owner: Owns the environment.    read-only: Has read-only access to the environment.    read-write: Has read-write access to the environment.   If no value is specified, information about all environment members are returned.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environment members to get information about.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "describe-environment-status",
      description:
        "Gets status information for an AWS Cloud9 development environment.",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment to get status information about.",
          args: {
            name: "string",
          },
          isOptional: false,
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
      name: "describe-environments",
      description:
        "Gets information about AWS Cloud9 development environments.",
      options: [
        {
          name: "--environment-ids",
          description:
            "The IDs of individual environments to get information about.",
          args: {
            name: "list",
          },
          isOptional: false,
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
      name: "list-environments",
      description:
        "Gets a list of AWS Cloud9 development environment identifiers.",
      options: [
        {
          name: "--next-token",
          description:
            "During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of environments to get identifiers for.",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-tags-for-resource",
      description:
        "Gets a list of the tags associated with an AWS Cloud9 development environment.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS Cloud9 development environment to get the tags for.",
          args: {
            name: "string",
          },
          isOptional: false,
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
      name: "tag-resource",
      description:
        "Adds tags to an AWS Cloud9 development environment.  Tags that you add to an AWS Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS Cloud9 development environment to add tags to.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description:
            "The list of tags to add to the given AWS Cloud9 development environment.",
          args: {
            name: "list",
          },
          isOptional: false,
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
      name: "untag-resource",
      description: "Removes tags from an AWS Cloud9 development environment.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS Cloud9 development environment to remove tags from.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          description:
            "The tag names of the tags to remove from the given AWS Cloud9 development environment.",
          args: {
            name: "list",
          },
          isOptional: false,
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
      name: "update-environment",
      description:
        "Changes the settings of an existing AWS Cloud9 development environment.",
      options: [
        {
          name: "--environment-id",
          description: "The ID of the environment to change settings.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "A replacement name for the environment.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description:
            "Any new or replacement description for the environment.",
          args: {
            name: "string",
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
      name: "update-environment-membership",
      description:
        "Changes the settings of an existing environment member for an AWS Cloud9 development environment.",
      options: [
        {
          name: "--environment-id",
          description:
            "The ID of the environment for the environment member whose settings you want to change.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--user-arn",
          description:
            "The Amazon Resource Name (ARN) of the environment member whose settings you want to change.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--permissions",
          description:
            "The replacement type of environment member permissions you want to associate with this environment member. Available values include:    read-only: Has read-only access to the environment.    read-write: Has read-write access to the environment.",
          args: {
            name: "string",
          },
          isOptional: false,
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
  ],
};
