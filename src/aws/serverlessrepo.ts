const completionSpec: Fig.Spec = {
  name: "serverlessrepo",
  description:
    "The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find\n and deploy serverless applications in the AWS Cloud. For more information about serverless applications,\n see Serverless Computing and Applications on the AWS website.The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of \n all levels can get started with serverless computing without needing to learn anything new. You can use category \n keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots. \n You can also search for applications by name, publisher, or event source. To use an application, you simply choose it, \n configure any required fields, and deploy it with a few clicks. You can also easily publish applications, sharing them publicly with the community at large, or privately\n within your team or across your organization. To publish a serverless application (or app), you can use the\n AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the\n code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.\n For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs\n GitHub repository.The AWS Serverless Application Repository Developer Guide contains more information about the two developer\n experiences available:\n \n Consuming Applications \u2013 Browse for applications and view information about them, including\n source code and readme files. Also install, configure, and deploy applications of your choosing. \n Publishing Applications \u2013 Configure and upload applications to make them available to other\n developers, and publish new versions of applications",
  subcommands: [
    {
      name: "create-application",
      description:
        "Creates an application, optionally including an AWS SAM file to create the first application version in the same call",
      options: [
        {
          name: "--author",
          description:
            'The name of the author publishing the app.Minimum length=1. Maximum length=127.Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";',
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the application.Minimum length=1. Maximum length=256",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-page-url",
          description:
            "A URL with more information about the application, for example the location of your GitHub repository for the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--labels",
          description:
            'Labels to improve discovery of apps in search results.Minimum length=1. Maximum length=127. Maximum number of labels: 10Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";',
          args: {
            name: "list",
          },
        },
        {
          name: "--license-body",
          description:
            "A local text file that contains the license of the app that matches the spdxLicenseID value of your application.\n The file has the format file://<path>/<filename>.Maximum size 5 MBYou can specify only one of licenseBody and licenseUrl; otherwise, an error results",
          args: {
            name: "string",
          },
        },
        {
          name: "--license-url",
          description:
            "A link to the S3 object that contains the license of the app that matches the spdxLicenseID value of your application.Maximum size 5 MBYou can specify only one of licenseBody and licenseUrl; otherwise, an error results",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            'The name of the application that you want to publish.Minimum length=1. Maximum length=140Pattern: "[a-zA-Z0-9\\\\-]+";',
          args: {
            name: "string",
          },
        },
        {
          name: "--readme-body",
          description:
            "A local text readme file in Markdown language that contains a more detailed description of the application and how it works.\n The file has the format file://<path>/<filename>.Maximum size 5 MBYou can specify only one of readmeBody and readmeUrl; otherwise, an error results",
          args: {
            name: "string",
          },
        },
        {
          name: "--readme-url",
          description:
            "A link to the S3 object in Markdown language that contains a more detailed description of the application and how it works.Maximum size 5 MBYou can specify only one of readmeBody and readmeUrl; otherwise, an error results",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the application:\n https://semver.org/",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-code-archive-url",
          description:
            "A link to the S3 object that contains the ZIP archive of the source code for this version of your application.Maximum size 50 MB",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-code-url",
          description:
            "A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--spdx-license-id",
          description: "A valid identifier from https://spdx.org/licenses/",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "The local raw packaged AWS SAM template file of your application.\n The file has the format file://<path>/<filename>.You can specify only one of templateBody and templateUrl; otherwise an error results",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-url",
          description:
            "A link to the S3 object containing the packaged AWS SAM template of your application.You can specify only one of templateBody and templateUrl; otherwise an error results",
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
      name: "create-application-version",
      description: "Creates an application version",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description: "The semantic version of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-code-archive-url",
          description:
            "A link to the S3 object that contains the ZIP archive of the source code for this version of your application.Maximum size 50 MB",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-code-url",
          description:
            "A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description: "The raw packaged AWS SAM template of your application",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-url",
          description:
            "A link to the packaged AWS SAM template of your application",
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
      name: "create-cloud-formation-change-set",
      description:
        "Creates an AWS CloudFormation change set for the given application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description:
            "A list of values that you must specify before you can deploy certain applications.\n Some applications might include resources that can affect permissions in your AWS\n account, for example, by creating new AWS Identity and Access Management (IAM) users.\n For those applications, you must explicitly acknowledge their capabilities by\n specifying this parameter.The only valid values are CAPABILITY_IAM, CAPABILITY_NAMED_IAM,\n CAPABILITY_RESOURCE_POLICY, and CAPABILITY_AUTO_EXPAND.The following resources require you to specify CAPABILITY_IAM or\n CAPABILITY_NAMED_IAM:\n AWS::IAM::Group,\n AWS::IAM::InstanceProfile,\n AWS::IAM::Policy, and\n AWS::IAM::Role.\n If the application contains IAM resources, you can specify either CAPABILITY_IAM\n or CAPABILITY_NAMED_IAM. If the application contains IAM resources\n with custom names, you must specify CAPABILITY_NAMED_IAM.The following resources require you to specify CAPABILITY_RESOURCE_POLICY:\n AWS::Lambda::Permission,\n AWS::IAM:Policy,\n AWS::ApplicationAutoScaling::ScalingPolicy,\n AWS::S3::BucketPolicy,\n AWS::SQS::QueuePolicy, and\n AWS::SNS:TopicPolicy.Applications that contain one or more nested applications require you to specify\n CAPABILITY_AUTO_EXPAND.If your application template contains any of the above resources, we recommend that you review\n all permissions associated with the application before deploying. If you don't specify\n this parameter for an application that requires capabilities, the call will fail",
          args: {
            name: "list",
          },
        },
        {
          name: "--change-set-name",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-arns",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "list",
          },
        },
        {
          name: "--parameter-overrides",
          description:
            "A list of parameter values for the parameters of the application",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-types",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "list",
          },
        },
        {
          name: "--rollback-configuration",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "structure",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the application:\n https://semver.org/",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-name",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "This property corresponds to the parameter of the same name for the AWS CloudFormation CreateChangeSet\n  API",
          args: {
            name: "list",
          },
        },
        {
          name: "--template-id",
          description:
            "The UUID returned by CreateCloudFormationTemplate.Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}",
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
      name: "create-cloud-formation-template",
      description: "Creates an AWS CloudFormation template",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description:
            "The semantic version of the application:\n https://semver.org/",
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
      name: "delete-application",
      description: "Deletes the specified application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
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
      name: "get-application",
      description: "Gets the specified application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description: "The semantic version of the application to get",
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
      name: "get-application-policy",
      description: "Retrieves the policy for the application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
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
      name: "get-cloud-formation-template",
      description: "Gets the specified AWS CloudFormation template",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description:
            "The UUID returned by CreateCloudFormationTemplate.Pattern: [0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}",
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
      name: "list-application-dependencies",
      description:
        "Retrieves the list of applications nested in the containing application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
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
          name: "--next-token",
          description: "A token to specify where to start paginating",
          args: {
            name: "string",
          },
        },
        {
          name: "--semantic-version",
          description: "The semantic version of the application to get",
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
      name: "list-application-versions",
      description: "Lists versions for the specified application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
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
          name: "--next-token",
          description: "A token to specify where to start paginating",
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
      name: "list-applications",
      description: "Lists applications owned by the requester",
      options: [
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A token to specify where to start paginating",
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
      name: "put-application-policy",
      description:
        "Sets the permission policy for an application. For the list of actions supported for this operation, see\n Application \n Permissions",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--statements",
          description:
            "An array of policy statements applied to the application",
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
      name: "unshare-application",
      description:
        "Unshares an application from an AWS Organization.This operation can be called only from the organization's master account",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description:
            "The AWS Organization ID to unshare the application from",
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
      name: "update-application",
      description: "Updates the specified application",
      options: [
        {
          name: "--application-id",
          description: "The Amazon Resource Name (ARN) of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--author",
          description:
            'The name of the author publishing the app.Minimum length=1. Maximum length=127.Pattern "^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$";',
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the application.Minimum length=1. Maximum length=256",
          args: {
            name: "string",
          },
        },
        {
          name: "--home-page-url",
          description:
            "A URL with more information about the application, for example the location of your GitHub repository for the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--labels",
          description:
            'Labels to improve discovery of apps in search results.Minimum length=1. Maximum length=127. Maximum number of labels: 10Pattern: "^[a-zA-Z0-9+\\\\-_:\\\\/@]+$";',
          args: {
            name: "list",
          },
        },
        {
          name: "--readme-body",
          description:
            "A text readme file in Markdown language that contains a more detailed description of the application and how it works.Maximum size 5 MB",
          args: {
            name: "string",
          },
        },
        {
          name: "--readme-url",
          description:
            "A link to the readme file in Markdown language that contains a more detailed description of the application and how it works.Maximum size 5 MB",
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
