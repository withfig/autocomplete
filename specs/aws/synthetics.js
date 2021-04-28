var completionSpec = {
    name: "synthetics",
    description: "Amazon CloudWatch Synthetics You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage canaries, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see Using ServiceLens to Monitor the Health of Your Applications in the Amazon CloudWatch User Guide. Before you create and manage canaries, be aware of the security considerations. For more information, see Security Considerations for Synthetics Canaries.",
    subcommands: [
        {
            name: "create-canary",
            description: "Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once.  Do not use CreateCanary to modify an existing canary. Use UpdateCanary instead. To create canaries, you must have the CloudWatchSyntheticsFullAccess policy. If you are creating a new IAM role for the canary, you also need the the iam:CreateRole, iam:CreatePolicy and iam:AttachRolePolicy permissions. For more information, see Necessary Roles and Permissions. Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see Security Considerations for Synthetics Canaries.",
            options: [
                {
                    name: "--name",
                    description: "The name for this canary. Be sure to give it a descriptive name that distinguishes it from other canaries in your account. Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see Security Considerations for Synthetics Canaries.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--code",
                    description: "A structure that includes the entry point from which the canary should start running your script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--artifact-s3-location",
                    description: "The location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. Artifacts include the log file, screenshots, and HAR files.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--execution-role-arn",
                    description: "The ARN of the IAM role to be used to run the canary. This role must already exist, and must include lambda.amazonaws.com as a principal in the trust policy. The role must also have the following permissions:    s3:PutObject     s3:GetBucketLocation     s3:ListAllMyBuckets     cloudwatch:PutMetricData     logs:CreateLogGroup     logs:CreateLogStream     logs:PutLogEvents",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--schedule",
                    description: "A structure that contains information about how often the canary is to run and when these test runs are to stop.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--run-config",
                    description: "A structure that contains the configuration for individual canary runs, such as timeout value.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--success-retention-period-in-days",
                    description: "The number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--failure-retention-period-in-days",
                    description: "The number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--runtime-version",
                    description: "Specifies the runtime version to use for the canary. For a list of valid runtime versions and more information about runtime versions, see  Canary Runtime Versions.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--vpc-config",
                    description: "If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see  Running a Canary in a VPC.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A list of key-value pairs to associate with the canary. You can associate as many as 50 tags with a canary. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-canary",
            description: "Permanently deletes the specified canary. When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:   The Lambda functions and layers used by this canary. These have the prefix cwsyn-MyCanaryName .   The CloudWatch alarms created for this canary. These alarms have a name of Synthetics-SharpDrop-Alarm-MyCanaryName .   Amazon S3 objects and buckets, such as the canary's artifact location.   IAM roles created for the canary. If they were created in the console, these roles have the name  role/service-role/CloudWatchSyntheticsRole-MyCanaryName .   CloudWatch Logs log groups created for the canary. These logs groups have the name /aws/lambda/cwsyn-MyCanaryName .    Before you delete a canary, you might want to use GetCanary to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.",
            options: [
                {
                    name: "--name",
                    description: "The name of the canary that you want to delete. To find the names of your canaries, use DescribeCanaries.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-canaries",
            description: "This operation returns a list of the canaries in your account, along with full details about each canary. This operation does not have resource-level authorization, so if a user is able to use DescribeCanaries, the user can see all of the canaries in the account. A deny policy can only be used to restrict access to all canaries. It cannot be used on specific resources.",
            options: [
                {
                    name: "--next-token",
                    description: "A token that indicates that there is more data available. You can use this token in a subsequent operation to retrieve the next set of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Specify this parameter to limit how many canaries are returned each time you use the DescribeCanaries operation. If you omit this parameter, the default of 100 is used.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-canaries-last-run",
            description: "Use this operation to see information from the most recent run of each canary that you have created.",
            options: [
                {
                    name: "--next-token",
                    description: "A token that indicates that there is more data available. You can use this token in a subsequent DescribeCanaries operation to retrieve the next set of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Specify this parameter to limit how many runs are returned each time you use the DescribeLastRun operation. If you omit this parameter, the default of 100 is used.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-runtime-versions",
            description: "Returns a list of Synthetics canary runtime versions. For more information, see  Canary Runtime Versions.",
            options: [
                {
                    name: "--next-token",
                    description: "A token that indicates that there is more data available. You can use this token in a subsequent DescribeRuntimeVersions operation to retrieve the next set of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Specify this parameter to limit how many runs are returned each time you use the DescribeRuntimeVersions operation. If you omit this parameter, the default of 100 is used.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-canary",
            description: "Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use DescribeCanaries.",
            options: [
                {
                    name: "--name",
                    description: "The name of the canary that you want details for.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-canary-runs",
            description: "Retrieves a list of runs for a specified canary.",
            options: [
                {
                    name: "--name",
                    description: "The name of the canary that you want to see runs for.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A token that indicates that there is more data available. You can use this token in a subsequent GetCanaryRuns operation to retrieve the next set of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Specify this parameter to limit how many runs are returned each time you use the GetCanaryRuns operation. If you omit this parameter, the default of 100 is used.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
            description: "Displays the tags associated with a canary.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the canary that you want to view tags for. The ARN format of a canary is arn:aws:synthetics:Region:account-id:canary:canary-name .",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "start-canary",
            description: "Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's Schedule. To see a canary's schedule, use GetCanary.",
            options: [
                {
                    name: "--name",
                    description: "The name of the canary that you want to run. To find canary names, use DescribeCanaries.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "stop-canary",
            description: "Stops the canary to prevent all future runs. If the canary is currently running, Synthetics stops waiting for the current run of the specified canary to complete. The run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run. You can use StartCanary to start it running again with the canary\u2019s current schedule at any point in the future.",
            options: [
                {
                    name: "--name",
                    description: "The name of the canary that you want to stop. To find the names of your canaries, use DescribeCanaries.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
            description: "Assigns one or more tags (key-value pairs) to the specified canary.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a canary that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a canary.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the canary that you're adding tags to. The ARN format of a canary is arn:aws:synthetics:Region:account-id:canary:canary-name .",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The list of key-value pairs to associate with the canary.",
                    args: {
                        name: "map",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
            description: "Removes one or more tags from the specified canary.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The ARN of the canary that you're removing tags from. The ARN format of a canary is arn:aws:synthetics:Region:account-id:canary:canary-name .",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "The list of tag keys to remove from the resource.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "update-canary",
            description: "Use this operation to change the settings of a canary that has already been created. You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use TagResource.",
            options: [
                {
                    name: "--name",
                    description: "The name of the canary that you want to update. To find the names of your canaries, use DescribeCanaries. You cannot change the name of a canary that has already been created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--code",
                    description: "A structure that includes the entry point from which the canary should start running your script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--execution-role-arn",
                    description: "The ARN of the IAM role to be used to run the canary. This role must already exist, and must include lambda.amazonaws.com as a principal in the trust policy. The role must also have the following permissions:    s3:PutObject     s3:GetBucketLocation     s3:ListAllMyBuckets     cloudwatch:PutMetricData     logs:CreateLogGroup     logs:CreateLogStream     logs:CreateLogStream",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--runtime-version",
                    description: "Specifies the runtime version to use for the canary. For a list of valid runtime versions and for more information about runtime versions, see  Canary Runtime Versions.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--schedule",
                    description: "A structure that contains information about how often the canary is to run, and when these runs are to stop.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--run-config",
                    description: "A structure that contains the timeout value that is used for each individual run of the canary.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--success-retention-period-in-days",
                    description: "The number of days to retain data about successful runs of this canary.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--failure-retention-period-in-days",
                    description: "The number of days to retain data about failed runs of this canary.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--vpc-config",
                    description: "If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint. For more information, see  Running a Canary in a VPC.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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

