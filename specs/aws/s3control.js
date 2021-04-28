var completionSpec = {
    name: "s3control",
    description: "AWS S3 Control provides access to Amazon S3 control plane actions.",
    subcommands: [
        {
            name: "create-access-point",
            description: "Creates an access point and associates it with the specified bucket. For more information, see Managing Data Access with Amazon S3 Access Points in the Amazon Simple Storage Service User Guide.   S3 on Outposts only supports VPC-style Access Points.  For more information, see  Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only Access Points in the Amazon Simple Storage Service User Guide.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section.  The following actions are related to CreateAccessPoint:    GetAccessPoint     DeleteAccessPoint     ListAccessPoints",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID for the owner of the bucket for which you want to create an access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name you want to assign to this access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "The name of the bucket that you want to associate this access point with. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--vpc-configuration",
                    description: "If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).  This is required for creating an access point for Amazon S3 on Outposts buckets.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--public-access-block-configuration",
                    description: "The PublicAccessBlock configuration that you want to apply to the access point.",
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
        {
            name: "create-access-point-for-object-lambda",
            description: "Creates an Object Lambda Access Point. For more information, see Transforming objects with Object Lambda Access Points in the Amazon Simple Storage Service User Guide. The following actions are related to CreateAccessPointForObjectLambda:    DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID for owner of the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name you want to assign to this Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--configuration",
                    description: "Object Lambda Access Point configuration as a JSON document.",
                    args: {
                        name: "structure",
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
            name: "create-bucket",
            description: "This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create Bucket in the Amazon Simple Storage Service API.   Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see Using Amazon S3 on Outposts in Amazon Simple Storage Service User Guide. Not every string is an acceptable bucket name. For information on bucket naming restrictions, see Working with Amazon S3 Buckets. S3 on Outposts buckets support:   Tags   LifecycleConfigurations for deleting expired objects   For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see  Amazon S3 on Outposts Restrictions and Limitations. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your API request, see the Examples section. The following actions are related to CreateBucket for Amazon S3 on Outposts:    PutObject     GetBucket     DeleteBucket     CreateAccessPoint     PutAccessPointPolicy",
            options: [
                {
                    name: "--acl",
                    description: "The canned ACL to apply to the bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--bucket",
                    description: "The name of the bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--create-bucket-configuration",
                    description: "The configuration information for the bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--grant-full-control",
                    description: "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--grant-read",
                    description: "Allows grantee to list the objects in the bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--grant-read-acp",
                    description: "Allows grantee to read the bucket ACL.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--grant-write",
                    description: "Allows grantee to create, overwrite, and delete any object in the bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--grant-write-acp",
                    description: "Allows grantee to write the ACL for the applicable bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--object-lock-enabled-for-bucket",
                    description: "Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                },
                {
                    name: "--no-object-lock-enabled-for-bucket",
                    description: "Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This is not supported by Amazon S3 on Outposts buckets.",
                },
                {
                    name: "--outpost-id",
                    description: "The ID of the Outposts where the bucket is being created.  This is required by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
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
            name: "create-job",
            description: "You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon Simple Storage Service User Guide. This action creates a S3 Batch Operations job.  Related actions include:    DescribeJob     ListJobs     UpdateJobPriority     UpdateJobStatus     JobOperation",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID that creates the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--confirmation-required",
                    description: "Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.",
                },
                {
                    name: "--no-confirmation-required",
                    description: "Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.",
                },
                {
                    name: "--operation",
                    description: "The action that you want this job to perform on every object listed in the manifest. For more information about the available actions, see Operations in the Amazon Simple Storage Service User Guide.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--report",
                    description: "Configuration parameters for the optional job-completion report.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-request-token",
                    description: "An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--manifest",
                    description: "Configuration parameters for the manifest.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--priority",
                    description: "The numerical priority for this job. Higher numbers indicate higher priority.",
                    args: {
                        name: "integer",
                    },
                    isOptional: false,
                },
                {
                    name: "--role-arn",
                    description: "The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "A set of tags to associate with the S3 Batch Operations job. This is an optional parameter.",
                    args: {
                        name: "list",
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
            name: "delete-access-point",
            description: "Deletes the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPoint:    CreateAccessPoint     GetAccessPoint     ListAccessPoints",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded.",
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
            name: "delete-access-point-for-object-lambda",
            description: "Deletes the specified Object Lambda Access Point. The following actions are related to DeleteAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point you want to delete.",
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
            name: "delete-access-point-policy",
            description: "Deletes the access point policy for the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPointPolicy:    PutAccessPointPolicy     GetAccessPointPolicy",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point whose policy you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded.",
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
            name: "delete-access-point-policy-for-object-lambda",
            description: "Removes the resource policy for an Object Lambda Access Point. The following actions are related to DeleteAccessPointPolicyForObjectLambda:    GetAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point you want to delete the policy for.",
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
            name: "delete-bucket",
            description: "This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the Amazon Simple Storage Service API.   Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see Using Amazon S3 on Outposts in Amazon Simple Storage Service User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section.  Related Resources     CreateBucket     GetBucket     DeleteObject",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID that owns the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket being deleted. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "delete-bucket-lifecycle-configuration",
            description: "This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the Amazon Simple Storage Service API.   Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see Using Amazon S3 on Outposts in Amazon Simple Storage Service User Guide. To use this action, you must have permission to perform the s3-outposts:DeleteLifecycleConfiguration action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. For more information about object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID of the lifecycle configuration to delete.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "delete-bucket-policy",
            description: "This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see DeleteBucketPolicy in the Amazon Simple Storage Service API.   This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the s3-outposts:DeleteBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see Using Amazon S3 on Outposts in Amazon Simple Storage Service User Guide. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the AWS account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to DeleteBucketPolicy:    GetBucketPolicy     PutBucketPolicy",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "delete-bucket-tagging",
            description: "This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see DeleteBucketTagging in the Amazon Simple Storage Service API.   Deletes the tags from the Outposts bucket. For more information, see Using Amazon S3 on Outposts in Amazon Simple Storage Service User Guide. To use this action, you must have permission to perform the PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket tag set to be removed.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "The bucket ARN that has the tag set to be removed. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "delete-job-tagging",
            description: "Removes the entire tag set from the specified S3 Batch Operations job. To use this operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon Simple Storage Service User Guide.  Related actions include:    CreateJob     GetJobTagging     PutJobTagging",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The ID for the S3 Batch Operations job whose tags you want to delete.",
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
            name: "delete-public-access-block",
            description: "Removes the PublicAccessBlock configuration for an AWS account. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     PutPublicAccessBlock",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the AWS account whose PublicAccessBlock configuration you want to remove.",
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
            name: "delete-storage-lens-configuration",
            description: "Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--config-id",
                    description: "The ID of the S3 Storage Lens configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
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
            name: "delete-storage-lens-configuration-tagging",
            description: "Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--config-id",
                    description: "The ID of the S3 Storage Lens configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
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
            name: "describe-job",
            description: "Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon Simple Storage Service User Guide.  Related actions include:    CreateJob     ListJobs     UpdateJobPriority     UpdateJobStatus",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The ID for the job whose information you want to retrieve.",
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
            name: "get-access-point",
            description: "Returns configuration information about the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to GetAccessPoint:    CreateAccessPoint     DeleteAccessPoint     ListAccessPoints",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point whose configuration information you want to retrieve. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded.",
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
            name: "get-access-point-configuration-for-object-lambda",
            description: "Returns configuration for an Object Lambda Access Point. The following actions are related to GetAccessPointConfigurationForObjectLambda:    PutAccessPointConfigurationForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point you want to return the configuration for.",
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
            name: "get-access-point-for-object-lambda",
            description: "Returns configuration information about the specified Object Lambda Access Point The following actions are related to GetAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     ListAccessPointsForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point.",
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
            name: "get-access-point-policy",
            description: "Returns the access point policy associated with the specified access point. The following actions are related to GetAccessPointPolicy:    PutAccessPointPolicy     DeleteAccessPointPolicy",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point whose policy you want to retrieve. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded.",
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
            name: "get-access-point-policy-for-object-lambda",
            description: "Returns the resource policy for an Object Lambda Access Point. The following actions are related to GetAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point.",
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
            name: "get-access-point-policy-status",
            description: "Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see Managing Data Access with Amazon S3 Access Points in the Amazon Simple Storage Service Developer Guide.",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point whose policy status you want to retrieve.",
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
            name: "get-access-point-policy-status-for-object-lambda",
            description: "Returns the status of the resource policy associated with an Object Lambda Access Point.",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point.",
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
            name: "get-bucket",
            description: "Gets an Amazon S3 on Outposts bucket. For more information, see  Using Amazon S3 on Outposts in the Amazon Simple Storage Service User Guide. If you are using an identity other than the root user of the AWS account that owns the Outposts bucket, the calling identity must have the s3-outposts:GetBucket permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket.   If you don't have s3-outposts:GetBucket permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. The following actions are related to GetBucket for Amazon S3 on Outposts: All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section.    PutObject     CreateBucket     DeleteBucket",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "get-bucket-lifecycle-configuration",
            description: "This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the Amazon Simple Storage Service API.   Returns the lifecycle configuration information set on the Outposts bucket. For more information, see Using Amazon S3 on Outposts and for information about lifecycle configuration, see  Object Lifecycle Management in Amazon Simple Storage Service User Guide. To use this action, you must have permission to perform the s3-outposts:GetLifecycleConfiguration action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following actions are related to GetBucketLifecycleConfiguration:    PutBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "get-bucket-policy",
            description: "This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see GetBucketPolicy in the Amazon Simple Storage Service API.   Returns the policy of a specified Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon Simple Storage Service User Guide. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucketPolicy permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error.  As a security precaution, the root user of the AWS account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to GetBucketPolicy:    GetObject     PutBucketPolicy     DeleteBucketPolicy",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "get-bucket-tagging",
            description: "This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see GetBucketTagging in the Amazon Simple Storage Service API.   Returns the tag set associated with the Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon Simple Storage Service User Guide. To use this action, you must have permission to perform the GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSetError    Description: There is no tag set associated with the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
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
            name: "get-job-tagging",
            description: "Returns the tags on an S3 Batch Operations job. To use this operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon Simple Storage Service User Guide.  Related actions include:    CreateJob     PutJobTagging     DeleteJobTagging",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The ID for the S3 Batch Operations job whose tags you want to retrieve.",
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
            name: "get-public-access-block",
            description: "Retrieves the PublicAccessBlock configuration for an AWS account. For more information, see  Using Amazon S3 block public access. Related actions include:    DeletePublicAccessBlock     PutPublicAccessBlock",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the AWS account whose PublicAccessBlock configuration you want to retrieve.",
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
            name: "get-storage-lens-configuration",
            description: "Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--config-id",
                    description: "The ID of the Amazon S3 Storage Lens configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
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
            name: "get-storage-lens-configuration-tagging",
            description: "Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--config-id",
                    description: "The ID of the Amazon S3 Storage Lens configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
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
            name: "list-access-points",
            description: "Returns a list of the access points currently associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to ListAccessPoints:    CreateAccessPoint     DeleteAccessPoint     GetAccessPoint",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID for owner of the bucket whose access points you want to list.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "The name of the bucket whose associated access points you want to list. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A continuation token. If a previous call to ListAccessPoints returned a continuation token in the NextToken field, then providing that value here causes Amazon S3 to retrieve the next page of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points.",
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
            name: "list-access-points-for-object-lambda",
            description: "Returns a list of the access points associated with the Object Lambda Access Point. You can retrieve up to 1000 access points per call. If there are more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points. The following actions are related to ListAccessPointsForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of access points that you want to include in the list. If there are more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points.",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "list-jobs",
            description: "Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for the AWS account making the request. For more information, see S3 Batch Operations in the Amazon Simple Storage Service User Guide. Related actions include:     CreateJob     DescribeJob     UpdateJobPriority     UpdateJobStatus",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-statuses",
                    description: "The List Jobs request returns jobs that match the statuses listed in this element.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A pagination token to request the next page of results. Use the token that Amazon S3 returned in the NextToken element of the ListJobsResult from the previous List Jobs request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of jobs that Amazon S3 will include in the List Jobs response. If there are more jobs than this number, the response will include a pagination token in the NextToken field to enable you to retrieve the next page of results.",
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
            name: "list-regional-buckets",
            description: "Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see Using Amazon S3 on Outposts in the Amazon Simple Storage Service User Guide. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your request, see the Examples section.",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--outpost-id",
                    description: "The ID of the AWS Outposts.  This is required by Amazon S3 on Outposts buckets.",
                    args: {
                        name: "string",
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
            name: "list-storage-lens-configurations",
            description: "Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:ListStorageLensConfigurations action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A pagination token to request the next page of results.",
                    args: {
                        name: "string",
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
            name: "put-access-point-configuration-for-object-lambda",
            description: "Replaces configuration for an Object Lambda Access Point. The following actions are related to PutAccessPointConfigurationForObjectLambda:    GetAccessPointConfigurationForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--configuration",
                    description: "Object Lambda Access Point configuration document.",
                    args: {
                        name: "structure",
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
            name: "put-access-point-policy",
            description: "Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to PutAccessPointPolicy:    GetAccessPointPolicy     DeleteAccessPointPolicy",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID for owner of the bucket associated with the specified access point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the access point that you want to associate with the specified policy. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;. For example, to access the access point reports-ap through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--policy",
                    description: "The policy that you want to apply to the specified access point. For more information about access point policies, see Managing data access with Amazon S3 Access Points in the Amazon Simple Storage Service User Guide.",
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
            name: "put-access-point-policy-for-object-lambda",
            description: "Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the Amazon Simple Storage Service User Guide. The following actions are related to PutAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     GetAccessPointPolicyForObjectLambda",
            options: [
                {
                    name: "--account-id",
                    description: "The account ID for the account that owns the specified Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name of the Object Lambda Access Point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--policy",
                    description: "Object Lambda Access Point resource policy document.",
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
            name: "put-bucket-lifecycle-configuration",
            description: "This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the Amazon Simple Storage Service API.   Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to PutBucketLifecycleConfiguration:    GetBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "The name of the bucket for which to set the configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--lifecycle-configuration",
                    description: "Container for lifecycle rules. You can add as many as 1,000 rules.",
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
        {
            name: "put-bucket-policy",
            description: "This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see PutBucketPolicy in the Amazon Simple Storage Service API.   Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon Simple Storage Service User Guide. If you are using an identity other than the root user of the AWS account that owns the Outposts bucket, the calling identity must have the PutBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the AWS account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.   For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to PutBucketPolicy:    GetBucketPolicy     DeleteBucketPolicy",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--confirm-remove-self-bucket-access",
                    description: "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This is not supported by Amazon S3 on Outposts buckets.",
                },
                {
                    name: "--no-confirm-remove-self-bucket-access",
                    description: "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This is not supported by Amazon S3 on Outposts buckets.",
                },
                {
                    name: "--policy",
                    description: "The bucket policy as a JSON document.",
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
            name: "put-bucket-tagging",
            description: "This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see PutBucketTagging in the Amazon Simple Storage Service API.   Sets the tags for an S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon Simple Storage Service User Guide. Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost allocation and tagging.  Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see  Using cost allocation in Amazon S3 bucket tags.  To use this action, you must have permissions to perform the s3-outposts:PutBucketTagging action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see  Permissions Related to Bucket Subresource Operations and Managing access permissions to your Amazon S3 resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see  User-Defined Tag Restrictions and  AWS-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived using the access point ARN, see the Examples section. The following actions are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID of the Outposts bucket.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--bucket",
                    description: "The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the AWS SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;. For example, to access the bucket reports through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tagging",
                    args: {
                        name: "structure",
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
            name: "put-job-tagging",
            description: "Sets the supplied tag-set on an S3 Batch Operations job. A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this action to replace the tag set with the one you modified. For more information, see Controlling access and labeling jobs using tags in the Amazon Simple Storage Service User Guide.      If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing.   For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same result without incurring charges.   A few things to consider about using tags:   Amazon S3 limits the maximum number of tags to 50 tags per job.   You can associate up to 50 tags with a job as long as they have unique tag keys.   A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.   The key and values are case sensitive.   For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions in the AWS Billing and Cost Management User Guide.       To use this action, you must have permission to perform the s3:PutJobTagging action. Related actions include:    CreatJob     GetJobTagging     DeleteJobTagging",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The ID for the S3 Batch Operations job whose tags you want to replace.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The set of tags to associate with the S3 Batch Operations job.",
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
            name: "put-public-access-block",
            description: "Creates or modifies the PublicAccessBlock configuration for an AWS account. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     DeletePublicAccessBlock",
            options: [
                {
                    name: "--public-access-block-configuration",
                    description: "The PublicAccessBlock configuration that you want to apply to the specified AWS account.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID for the AWS account whose PublicAccessBlock configuration you want to set.",
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
            name: "put-storage-lens-configuration",
            description: "Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--config-id",
                    description: "The ID of the S3 Storage Lens configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--storage-lens-configuration",
                    description: "The S3 Storage Lens configuration.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tag set of the S3 Storage Lens configuration.  You can set up to a maximum of 50 tags.",
                    args: {
                        name: "list",
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
            name: "put-storage-lens-configuration-tagging",
            description: "Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon Simple Storage Service User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon Simple Storage Service User Guide.",
            options: [
                {
                    name: "--config-id",
                    description: "The ID of the S3 Storage Lens configuration.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--account-id",
                    description: "The account ID of the requester.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tag set of the S3 Storage Lens configuration.  You can set up to a maximum of 50 tags.",
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
            name: "update-job-priority",
            description: "Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon Simple Storage Service User Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The ID for the job whose priority you want to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--priority",
                    description: "The priority you want to assign to this job.",
                    args: {
                        name: "integer",
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
            name: "update-job-status",
            description: "Updates the status for the specified job. Use this action to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon Simple Storage Service User Guide.  Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus",
            options: [
                {
                    name: "--account-id",
                    description: "The AWS account ID associated with the S3 Batch Operations job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The ID of the job whose status you want to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--requested-job-status",
                    description: "The status that you want to move the specified job to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--status-update-reason",
                    description: "A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.",
                    args: {
                        name: "string",
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

