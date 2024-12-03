const completionSpec: Fig.Spec = {
  name: "mwaa",
  description:
    "Amazon Managed Workflows for Apache Airflow This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see What is Amazon MWAA?.  Endpoints     api.airflow.{region}.amazonaws.com - This endpoint is used for environment management.    CreateEnvironment     DeleteEnvironment     GetEnvironment     ListEnvironments     ListTagsForResource     TagResource     UntagResource     UpdateEnvironment       env.airflow.{region}.amazonaws.com - This endpoint is used to operate the Airflow environment.    CreateCliToken     CreateWebLoginToken     InvokeRestApi       Regions  For a list of supported regions, see Amazon MWAA endpoints and quotas in the Amazon Web Services General Reference",
  subcommands: [
    {
      name: "create-cli-token",
      description:
        "Creates a CLI token for the Airflow CLI. To learn more, see Creating an Apache Airflow CLI token",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
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
      name: "create-environment",
      description:
        "Creates an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, arn:aws:iam::123456789:role/my-execution-role. For more information, see Amazon MWAA Execution role",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, arn:aws:s3:::my-airflow-bucket-unique-name. For more information, see Create an Amazon S3 bucket for Amazon MWAA",
          args: {
            name: "string",
          },
        },
        {
          name: "--dag-s3-path",
          description:
            "The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags. For more information, see Adding or updating DAGs",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see About networking on Amazon MWAA",
          args: {
            name: "structure",
          },
        },
        {
          name: "--plugins-s3-path",
          description:
            "The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. If specified, then the plugins.zip version is required. For more information, see Installing custom plugins",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugins-s3-object-version",
          description:
            "The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-path",
          description:
            "The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. If specified, then a version is required. For more information, see Installing Python dependencies",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-object-version",
          description:
            "The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--startup-script-s3-path",
          description:
            "The relative path to the startup shell script in your Amazon S3 bucket. For example, s3://mwaa-environment/startup.sh.  Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see Using a startup script",
          args: {
            name: "string",
          },
        },
        {
          name: "--startup-script-s3-object-version",
          description:
            "The version of the startup shell script in your Amazon S3 bucket. You must specify the version ID that Amazon S3 assigns to the file every time you update the script.   Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:   3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo   For more information, see Using a startup script",
          args: {
            name: "string",
          },
        },
        {
          name: "--airflow-configuration-options",
          description:
            "A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see Apache Airflow configuration options",
          args: {
            name: "map",
          },
        },
        {
          name: "--environment-class",
          description:
            "The environment class type. Valid values: mw1.micro, mw1.small, mw1.medium, mw1.large, mw1.xlarge, and mw1.2xlarge. For more information, see Amazon MWAA environment class",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-workers",
          description:
            "The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in MinWorkers",
          args: {
            name: "integer",
          },
        },
        {
          name: "--kms-key",
          description:
            "The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). For more information, see Create an Amazon MWAA environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--airflow-version",
          description:
            "The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. For more information, see Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (Amazon MWAA). Valid values: 1.10.12, 2.0.2, 2.2.2, 2.4.3, 2.5.1, 2.6.3, 2.7.2, 2.8.1, 2.9.2, and 2.10.1",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "Defines the Apache Airflow logs to send to CloudWatch Logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--weekly-maintenance-window-start",
          description:
            "The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. For example: TUE:03:30. You can specify a start time in 30 minute increments only",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The key-value tag pairs you want to associate to your environment. For example, "Environment": "Staging". For more information, see Tagging Amazon Web Services resources',
          args: {
            name: "map",
          },
        },
        {
          name: "--webserver-access-mode",
          description:
            "Defines the access mode for the Apache Airflow web server. For more information, see Apache Airflow access modes",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-workers",
          description:
            "The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the MinWorkers field. For example, 2",
          args: {
            name: "integer",
          },
        },
        {
          name: "--schedulers",
          description:
            "The number of Apache Airflow schedulers to run in your environment. Valid values:   v2 - For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.   v1 - Accepts 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--endpoint-management",
          description:
            "Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to CUSTOMER, you must create, and manage, the VPC endpoints for your VPC. If you choose to create an environment in a shared VPC, you must set this value to CUSTOMER. In a shared VPC deployment, the environment will remain in PENDING status until you create the VPC endpoints. If you do not take action to create the endpoints within 72 hours, the status will change to CREATE_FAILED. You can delete the failed environment and create a new one",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-webservers",
          description:
            "The minimum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.  Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-webservers",
          description:
            "The maximum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.  Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1",
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
      name: "create-web-login-token",
      description:
        "Creates a web login token for the Airflow Web UI. To learn more, see Creating an Apache Airflow web login token",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
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
      name: "delete-environment",
      description:
        "Deletes an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
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
      name: "get-environment",
      description:
        "Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
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
      name: "invoke-rest-api",
      description:
        "Invokes the Apache Airflow REST API on the webserver with the specified inputs. To learn more, see Using the Apache Airflow REST API",
      options: [
        {
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--path",
          description:
            "The Apache Airflow REST API endpoint path to be called. For example, /dags/123456/clearTaskInstances. For more information, see Apache Airflow API",
          args: {
            name: "string",
          },
        },
        {
          name: "--method",
          description:
            "The HTTP method used for making Airflow REST API calls. For example, POST",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-parameters",
          description:
            "Query parameters to be included in the Apache Airflow REST API call, provided as a JSON object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--body",
          description:
            "The request body for the Apache Airflow REST API call, provided as a JSON object",
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
      name: "list-environments",
      description:
        "Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments",
      options: [
        {
          name: "--next-token",
          description: "Retrieves the next page of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to retrieve per page. For example, 5 environments per page",
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
        'Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, "Environment": "Staging"',
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment",
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
      name: "publish-metrics",
      description:
        "Internal only. Publishes environment health metrics to Amazon CloudWatch",
      options: [
        {
          name: "--environment-name",
          description: "Internal only. The name of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-data",
          description:
            "Internal only. Publishes metrics to Amazon CloudWatch. To learn more about the metrics published to Amazon CloudWatch, see Amazon MWAA performance metrics in Amazon CloudWatch",
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
      description:
        "Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The key-value tag pairs you want to associate to your environment. For example, "Environment": "Staging". For more information, see Tagging Amazon Web Services resources',
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
        'Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, "Environment": "Staging"',
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            'The key-value tag pair you want to remove. For example, "Environment": "Staging"',
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
      name: "update-environment",
      description:
        "Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment",
      options: [
        {
          name: "--name",
          description:
            "The name of your Amazon MWAA environment. For example, MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, arn:aws:iam::123456789:role/my-execution-role. For more information, see Amazon MWAA Execution role",
          args: {
            name: "string",
          },
        },
        {
          name: "--airflow-version",
          description:
            "The Apache Airflow version for your environment. To upgrade your environment, specify a newer version of Apache Airflow supported by Amazon MWAA. Before you upgrade an environment, make sure your requirements, DAGs, plugins, and other resources used in your workflows are compatible with the new Apache Airflow version. For more information about updating your resources, see Upgrading an Amazon MWAA environment. Valid values: 1.10.12, 2.0.2, 2.2.2, 2.4.3, 2.5.1, 2.6.3, 2.7.2, 2.8.1, 2.9.2, and 2.10.1",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, arn:aws:s3:::my-airflow-bucket-unique-name. For more information, see Create an Amazon S3 bucket for Amazon MWAA",
          args: {
            name: "string",
          },
        },
        {
          name: "--dag-s3-path",
          description:
            "The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags. For more information, see Adding or updating DAGs",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugins-s3-path",
          description:
            "The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. If specified, then the plugins.zip version is required. For more information, see Installing custom plugins",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugins-s3-object-version",
          description:
            "The version of the plugins.zip file on your Amazon S3 bucket. You must specify a version each time a plugins.zip file is updated. For more information, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-path",
          description:
            "The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. If specified, then a file version is required. For more information, see Installing Python dependencies",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-object-version",
          description:
            "The version of the requirements.txt file on your Amazon S3 bucket. You must specify a version each time a requirements.txt file is updated. For more information, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--startup-script-s3-path",
          description:
            "The relative path to the startup shell script in your Amazon S3 bucket. For example, s3://mwaa-environment/startup.sh.  Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see Using a startup script",
          args: {
            name: "string",
          },
        },
        {
          name: "--startup-script-s3-object-version",
          description:
            "The version of the startup shell script in your Amazon S3 bucket. You must specify the version ID that Amazon S3 assigns to the file every time you update the script.   Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:   3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo   For more information, see Using a startup script",
          args: {
            name: "string",
          },
        },
        {
          name: "--airflow-configuration-options",
          description:
            "A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. For more information, see Apache Airflow configuration options",
          args: {
            name: "map",
          },
        },
        {
          name: "--environment-class",
          description:
            "The environment class type. Valid values: mw1.micro, mw1.small, mw1.medium, mw1.large, mw1.xlarge, and mw1.2xlarge. For more information, see Amazon MWAA environment class",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-workers",
          description:
            "The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in MinWorkers",
          args: {
            name: "integer",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, see About networking on Amazon MWAA",
          args: {
            name: "structure",
          },
        },
        {
          name: "--logging-configuration",
          description:
            "The Apache Airflow log types to send to CloudWatch Logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--weekly-maintenance-window-start",
          description:
            "The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: DAY:HH:MM. For example: TUE:03:30. You can specify a start time in 30 minute increments only",
          args: {
            name: "string",
          },
        },
        {
          name: "--webserver-access-mode",
          description:
            "The Apache Airflow Web server access mode. For more information, see Apache Airflow access modes",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-workers",
          description:
            "The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the MinWorkers field. For example, 2",
          args: {
            name: "integer",
          },
        },
        {
          name: "--schedulers",
          description:
            "The number of Apache Airflow schedulers to run in your Amazon MWAA environment",
          args: {
            name: "integer",
          },
        },
        {
          name: "--min-webservers",
          description:
            "The minimum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.  Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-webservers",
          description:
            "The maximum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers.  Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1",
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
  ],
};
export default completionSpec;
