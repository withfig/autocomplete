const completionSpec: Fig.Spec = {
  name: "mwaa",
  description:
    "Amazon Managed Workflows for Apache Airflow This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see What Is Amazon MWAA?.  Endpoints     api.airflow.{region}.amazonaws.com - This endpoint is used for environment management.    CreateEnvironment     DeleteEnvironment     GetEnvironment     ListEnvironments     ListTagsForResource     TagResource     UntagResource     UpdateEnvironment       env.airflow.{region}.amazonaws.com - This endpoint is used to operate the Airflow environment.    CreateCliToken     CreateWebLoginToken       ops.airflow.{region}.amazonaws.com - This endpoint is used to push environment metrics that track environment health.    PublishMetrics       Regions  For a list of regions that Amazon MWAA supports, see Region availability in the Amazon MWAA User Guide",
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-environment",
      description:
        "Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment",
      options: [
        {
          name: "--airflow-configuration-options",
          description:
            "A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see Apache Airflow configuration options",
          args: {
            name: "map",
          },
        },
        {
          name: "--airflow-version",
          description:
            "The Apache Airflow version for your environment. If no value is specified, it defaults to the latest version. Valid values: 1.10.12, 2.0.2, and 2.2.2. To learn more, see Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA)",
          args: {
            name: "string",
          },
        },
        {
          name: "--dag-s3-path",
          description:
            "The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags. To learn more, see Adding or updating DAGs",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-class",
          description:
            "The environment class type. Valid values: mw1.small, mw1.medium, mw1.large. To learn more, see Amazon MWAA environment class",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an Amazon Web Services Identity and Access Management (IAM) role that grants MWAA permission to access Amazon Web Services services and resources used by your environment. For example, arn:aws:iam::123456789:role/my-execution-role. To learn more, see Amazon MWAA Execution role",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key",
          description:
            "The Amazon Web Services Key Management Service (KMS) key to encrypt the data in your environment. You can use an Amazon Web Services owned CMK, or a Customer managed CMK (advanced). To learn more, see Create an Amazon MWAA environment",
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
          name: "--max-workers",
          description:
            "The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in MinWorkers",
          args: {
            name: "integer",
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
          name: "--name",
          description:
            "The name of the Amazon MWAA environment. For example, MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see About networking on Amazon MWAA",
          args: {
            name: "structure",
          },
        },
        {
          name: "--plugins-s3-object-version",
          description:
            "The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugins-s3-path",
          description:
            "The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. If specified, then the plugins.zip version is required. To learn more, see Installing custom plugins",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-object-version",
          description:
            "The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-path",
          description:
            "The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. If specified, then a file version is required. To learn more, see Installing Python dependencies",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedulers",
          description:
            "The number of Apache Airflow schedulers to run in your environment. Valid values:   v2 - Accepts between 2 to 5. Defaults to 2.   v1 - Accepts 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--source-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, arn:aws:s3:::my-airflow-bucket-unique-name. To learn more, see Create an Amazon S3 bucket for Amazon MWAA",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The key-value tag pairs you want to associate to your environment. For example, "Environment": "Staging". To learn more, see Tagging Amazon Web Services resources',
          args: {
            name: "map",
          },
        },
        {
          name: "--webserver-access-mode",
          description:
            "The Apache Airflow Web server access mode. To learn more, see Apache Airflow access modes",
          args: {
            name: "string",
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
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-environment",
      description:
        "Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment",
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
          name: "--max-results",
          description:
            "The maximum number of results to retrieve per page. For example, 5 environments per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "Retrieves the next page of the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
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
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
            'The key-value tag pairs you want to associate to your environment. For example, "Environment": "Staging". To learn more, see Tagging Amazon Web Services resources',
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
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
          name: "--airflow-configuration-options",
          description:
            "A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see Apache Airflow configuration options",
          args: {
            name: "map",
          },
        },
        {
          name: "--airflow-version",
          description:
            "The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: 1.10.12, 2.0.2, and 2.2.2",
          args: {
            name: "string",
          },
        },
        {
          name: "--dag-s3-path",
          description:
            "The relative path to the DAGs folder on your Amazon S3 bucket. For example, dags. To learn more, see Adding or updating DAGs",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-class",
          description:
            "The environment class type. Valid values: mw1.small, mw1.medium, mw1.large. To learn more, see Amazon MWAA environment class",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, arn:aws:iam::123456789:role/my-execution-role. To learn more, see Amazon MWAA Execution role",
          args: {
            name: "string",
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
          name: "--max-workers",
          description:
            "The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the MaxWorkers field. For example, 20. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in MinWorkers",
          args: {
            name: "integer",
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
          name: "--name",
          description:
            "The name of your Amazon MWAA environment. For example, MyMWAAEnvironment",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-configuration",
          description:
            "The VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see About networking on Amazon MWAA",
          args: {
            name: "structure",
          },
        },
        {
          name: "--plugins-s3-object-version",
          description:
            "The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugins-s3-path",
          description:
            "The relative path to the plugins.zip file on your Amazon S3 bucket. For example, plugins.zip. If specified, then the plugins.zip version is required. To learn more, see Installing custom plugins",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-object-version",
          description:
            "The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see How S3 Versioning works",
          args: {
            name: "string",
          },
        },
        {
          name: "--requirements-s3-path",
          description:
            "The relative path to the requirements.txt file on your Amazon S3 bucket. For example, requirements.txt. If specified, then a file version is required. To learn more, see Installing Python dependencies",
          args: {
            name: "string",
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
          name: "--source-bucket-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, arn:aws:s3:::my-airflow-bucket-unique-name. To learn more, see Create an Amazon S3 bucket for Amazon MWAA",
          args: {
            name: "string",
          },
        },
        {
          name: "--webserver-access-mode",
          description:
            "The Apache Airflow Web server access mode. To learn more, see Apache Airflow access modes",
          args: {
            name: "string",
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
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
