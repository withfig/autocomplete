var completionSpec = {
    name: "mwaa",
    description: "Amazon Managed Workflows for Apache Airflow This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see What Is Amazon MWAA?.",
    subcommands: [
        {
            name: "create-cli-token",
            description: "Create a CLI token to use Airflow CLI.",
            options: [
                {
                    name: "--name",
                    description: "Create a CLI token request for a MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-environment",
            description: "JSON blob that describes the environment to create.",
            options: [
                {
                    name: "--airflow-configuration-options",
                    description: "The Apache Airflow configuration setting you want to override in your environment. For more information, see Environment configuration.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--airflow-version",
                    description: "The Apache Airflow version you want to use for your environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--dag-s3-path",
                    description: "The relative path to the DAG folder on your Amazon S3 storage bucket. For example, dags. For more information, see Importing DAGs on Amazon MWAA.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--environment-class",
                    description: "The environment class you want to use for your environment. The environment class determines the size of the containers and database used for your Apache Airflow services.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--execution-role-arn",
                    description: "The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an AWS Identity and Access Management (IAM) role that grants MWAA permission to access AWS services and resources used by your environment. For example, arn:aws:iam::123456789:role/my-execution-role. For more information, see Managing access to Amazon Managed Workflows for Apache Airflow.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--kms-key",
                    description: "The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. You can use an AWS KMS key managed by MWAA, or a custom KMS key (advanced). For more information, see Customer master keys (CMKs) in the AWS KMS developer guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--logging-configuration",
                    description: "The Apache Airflow logs you want to send to Amazon CloudWatch Logs.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--max-workers",
                    description: "The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in this field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the one worker that is included with your environment.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--min-workers",
                    description: "The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the worker count you specify in the MinWorkers field.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--name",
                    description: "The name of your MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--network-configuration",
                    description: "The VPC networking components you want to use for your environment. At least two private subnet identifiers and one VPC security group identifier are required to create an environment. For more information, see Creating the VPC network for a MWAA environment.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--plugins-s3-object-version",
                    description: "The plugins.zip file version you want to use.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--plugins-s3-path",
                    description: "The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then PluginsS3ObjectVersion is required. For more information, see Importing DAGs on Amazon MWAA.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--requirements-s3-object-version",
                    description: "The requirements.txt file version you want to use.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--requirements-s3-path",
                    description: "The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then RequirementsS3ObjectVersion is required. For more information, see Importing DAGs on Amazon MWAA.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--source-bucket-arn",
                    description: "The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "The metadata tags you want to attach to your environment. For more information, see Tagging AWS resources.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--webserver-access-mode",
                    description: "The networking access of your Apache Airflow web server. A public network allows your Airflow UI to be accessed over the Internet by users granted access in your IAM policy. A private network limits access of your Airflow UI to users within your VPC. For more information, see Creating the VPC network for a MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--weekly-maintenance-window-start",
                    description: "The day and time you want MWAA to start weekly maintenance updates on your environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-web-login-token",
            description: "Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.",
            options: [
                {
                    name: "--name",
                    description: "Create an Airflow Web UI login token request for a MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-environment",
            description: "Delete an existing environment.",
            options: [
                {
                    name: "--name",
                    description: "The name of the environment to delete.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-environment",
            description: "Get details of an existing environment.",
            options: [
                {
                    name: "--name",
                    description: "The name of the environment to retrieve.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-environments",
            description: "List Amazon MWAA Environments.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum results when listing MWAA environments.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "The Next Token when listing MWAA environments.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "List the tags for MWAA environments.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "publish-metrics",
            description: "An operation for publishing metrics from the customers to the Ops plane.",
            options: [
                {
                    name: "--environment-name",
                    description: "Publishes environment metric data to Amazon CloudWatch.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--metric-data",
                    description: "Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metrica.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Add tag to the MWAA environments.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The tag resource ARN of the MWAA environments.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "The tag resource tag of the MWAA environments.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Remove a tag from the MWAA environments.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The tag resource ARN of the MWAA environments.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tag-keys",
                    description: "The tag resource key of the MWAA environments.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-environment",
            description: "Update an MWAA environment.",
            options: [
                {
                    name: "--airflow-configuration-options",
                    description: "The Airflow Configuration Options to update of your Amazon MWAA environment.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--airflow-version",
                    description: "The Airflow Version to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--dag-s3-path",
                    description: "The Dags folder S3 Path to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--environment-class",
                    description: "The Environment Class to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--execution-role-arn",
                    description: "The Executio Role ARN to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--logging-configuration",
                    description: "The Logging Configuration to update of your Amazon MWAA environment.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--max-workers",
                    description: "The maximum number of workers to update of your Amazon MWAA environment.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--min-workers",
                    description: "The minimum number of workers to update of your Amazon MWAA environment.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--name",
                    description: "The name of your Amazon MWAA environment that you wish to update.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--network-configuration",
                    description: "The Network Configuration to update of your Amazon MWAA environment.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--plugins-s3-object-version",
                    description: "The Plugins.zip S3 Object Version to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--plugins-s3-path",
                    description: "The Plugins.zip S3 Path to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--requirements-s3-object-version",
                    description: "The Requirements.txt S3 ObjectV ersion to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--requirements-s3-path",
                    description: "The Requirements.txt S3 Path to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--source-bucket-arn",
                    description: "The S3 Source Bucket ARN to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--webserver-access-mode",
                    description: "The Webserver Access Mode to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--weekly-maintenance-window-start",
                    description: "The Weekly Maintenance Window Start to update of your Amazon MWAA environment.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
    ],
};

