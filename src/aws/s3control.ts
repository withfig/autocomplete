const completionSpec: Fig.Spec = {
  name: "s3control",
  description:
    "Amazon Web Services S3 Control provides access to Amazon S3 control plane actions",
  subcommands: [
    {
      name: "associate-access-grants-identity-center",
      description:
        "Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.  Permissions  You must have the s3:AssociateAccessGrantsIdentityCenter permission to use this operation.   Additional Permissions  You must also have the following permissions: sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-center-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the ListInstances API operation to retrieve a list of your Identity Center instances and their ARNs",
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
      name: "create-access-grant",
      description:
        "Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation.   Permissions  You must have the s3:CreateAccessGrant permission to use this operation.   Additional Permissions  For any directory identity - sso:DescribeInstance and sso:DescribeApplication  For directory users - identitystore:DescribeUser  For directory groups - identitystore:DescribeGroup",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grants-location-id",
          description:
            "The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register.  If you are passing the default location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the Subprefix field",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grants-location-configuration",
          description:
            "The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. It contains the S3SubPrefix field. The grant scope is the result of appending the subprefix to the location scope of the registered location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--grantee",
          description:
            "The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permission",
          description:
            "The type of access that you are granting to your S3 data, which can be set to one of the following values:    READ \u2013 Grant read-only access to the S3 data.    WRITE \u2013 Grant write-only access to the S3 data.    READWRITE \u2013 Grant both read and write access to the S3 data",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-arn",
          description:
            "The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If an application ARN is included in the request to create an access grant, the grantee can only access the S3 data through this application",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix-type",
          description:
            "The type of S3SubPrefix. The only possible value is Object. Pass this value if the access grant scope is an object. Do not pass this value if the access grant scope is a bucket or a bucket and a prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The Amazon Web Services resource tags that you are adding to the access grant. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources",
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
      name: "create-access-grants-instance",
      description:
        "Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account.   Permissions  You must have the s3:CreateAccessGrantsInstance permission to use this operation.   Additional Permissions  To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the sso:DescribeInstance, sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod permissions",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-center-arn",
          description:
            "If you would like to associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, use this field to pass the Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the ListInstances API operation to retrieve a list of your Identity Center instances and their ARNs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The Amazon Web Services resource tags that you are adding to the S3 Access Grants instance. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources",
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
      name: "create-access-grants-location",
      description:
        "The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:    The default S3 location s3://    A bucket - S3://<bucket-name>    A bucket and prefix - S3://<bucket-name>/<prefix>    When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.   Permissions  You must have the s3:CreateAccessGrantsLocation permission to use this operation.   Additional Permissions  You must also have the following permission for the specified IAM role: iam:PassRole",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--location-scope",
          description:
            "The S3 path to the location that you are registering. The location scope can be the default S3 location s3://, the S3 path to a bucket s3://<bucket>, or the S3 path to a bucket and prefix s3://<bucket>/<prefix>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The Amazon Web Services resource tags that you are adding to the S3 Access Grants location. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources",
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
      name: "create-access-point",
      description:
        "This operation is not supported by directory buckets.  Creates an access point and associates it with the specified bucket. For more information, see Managing Data Access with Amazon S3 Access Points in the Amazon S3 User Guide.   S3 on Outposts only supports VPC-style access points.  For more information, see  Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points in the Amazon S3 User Guide.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  The following actions are related to CreateAccessPoint:    GetAccessPoint     DeleteAccessPoint     ListAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the account that owns the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name you want to assign to this access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket that you want to associate this access point with. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).  This is required for creating an access point for Amazon S3 on Outposts buckets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--public-access-block-configuration",
          description:
            "The PublicAccessBlock configuration that you want to apply to the access point",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bucket-account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 bucket associated with this access point. For same account access point when your bucket and access point belong to the same account owner, the BucketAccountId is not required. For cross-account access point when your bucket and access point are not in the same account, the BucketAccountId is required",
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
      name: "create-access-point-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Creates an Object Lambda Access Point. For more information, see Transforming objects with Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to CreateAccessPointForObjectLambda:    DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for owner of the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name you want to assign to this Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Object Lambda Access Point configuration as a JSON document",
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
      name: "create-bucket",
      description:
        "This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create Bucket in the Amazon S3 API Reference.   Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. Not every string is an acceptable bucket name. For information on bucket naming restrictions, see Working with Amazon S3 Buckets. S3 on Outposts buckets support:   Tags   LifecycleConfigurations for deleting expired objects   For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see  Amazon S3 on Outposts Restrictions and Limitations. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your API request, see the Examples section. The following actions are related to CreateBucket for Amazon S3 on Outposts:    PutObject     GetBucket     DeleteBucket     CreateAccessPoint     PutAccessPointPolicy",
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the bucket.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description: "The name of the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--create-bucket-configuration",
          description:
            "The configuration information for the bucket.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to list the objects in the bucket.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the bucket ACL.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write",
          description:
            "Allows grantee to create, overwrite, and delete any object in the bucket.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable bucket.  This is not supported by Amazon S3 on Outposts buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-enabled-for-bucket",
          description:
            "Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This is not supported by Amazon S3 on Outposts buckets",
        },
        {
          name: "--no-object-lock-enabled-for-bucket",
          description:
            "Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This is not supported by Amazon S3 on Outposts buckets",
        },
        {
          name: "--outpost-id",
          description:
            "The ID of the Outposts where the bucket is being created.  This ID is required by Amazon S3 on Outposts buckets",
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
      name: "create-job",
      description:
        "This operation creates an S3 Batch Operations job. You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Permissions  For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3 User Guide.    Related actions include:    DescribeJob     ListJobs     UpdateJobPriority     UpdateJobStatus     JobOperation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID that creates the job",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-required",
          description:
            "Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console",
        },
        {
          name: "--no-confirmation-required",
          description:
            "Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console",
        },
        {
          name: "--operation",
          description:
            "The action that you want this job to perform on every object listed in the manifest. For more information about the available actions, see Operations in the Amazon S3 User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--report",
          description:
            "Configuration parameters for the optional job-completion report",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length",
          args: {
            name: "string",
          },
        },
        {
          name: "--manifest",
          description: "Configuration parameters for the manifest",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description:
            "The numerical priority for this job. Higher numbers indicate higher priority",
          args: {
            name: "integer",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A set of tags to associate with the S3 Batch Operations job. This is an optional parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--manifest-generator",
          description:
            "The attribute container for the ManifestGenerator details. Jobs must be created with either a manifest file or a ManifestGenerator, but not both",
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
      name: "create-multi-region-access-point",
      description:
        "This operation is not supported by directory buckets.  Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the Amazon S3 User Guide. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to CreateMultiRegionAccessPoint:    DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own the underlying buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An idempotency token used to identify the request and guarantee that requests are unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description:
            "A container element containing details about the Multi-Region Access Point",
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
      name: "create-storage-lens-group",
      description:
        "Creates a new S3 Storage Lens group and associates it with the specified Amazon Web Services account ID. An S3 Storage Lens group is a custom grouping of objects based on prefix, suffix, object tags, object size, object age, or a combination of these filters. For each Storage Lens group that you\u2019ve created, you can also optionally add Amazon Web Services resource tags. For more information about S3 Storage Lens groups, see Working with S3 Storage Lens groups. To use this operation, you must have the permission to perform the s3:CreateStorageLensGroup action. If you\u2019re trying to create a Storage Lens group with Amazon Web Services resource tags, you must also have permission to perform the s3:TagResource action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID that the Storage Lens group is created from and associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-lens-group",
          description: "The Storage Lens group configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The Amazon Web Services resource tags that you're adding to your Storage Lens group. This parameter is optional",
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
      name: "delete-access-grant",
      description:
        "Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data.  Permissions  You must have the s3:DeleteAccessGrant permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grant-id",
          description:
            "The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant",
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
      name: "delete-access-grants-instance",
      description:
        "Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter.  Permissions  You must have the s3:DeleteAccessGrantsInstance permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
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
      name: "delete-access-grants-instance-resource-policy",
      description:
        "Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance.   Permissions  You must have the s3:DeleteAccessGrantsInstanceResourcePolicy permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
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
      name: "delete-access-grants-location",
      description:
        "Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants.   Permissions  You must have the s3:DeleteAccessGrantsLocation permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grants-location-id",
          description:
            "The ID of the registered location that you are deregistering from your S3 Access Grants instance. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register",
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
      name: "delete-access-point",
      description:
        "This operation is not supported by directory buckets.  Deletes the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPoint:    CreateAccessPoint     GetAccessPoint     ListAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the account that owns the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the access point you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded",
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
      name: "delete-access-point-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Deletes the specified Object Lambda Access Point. The following actions are related to DeleteAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     GetAccessPointForObjectLambda     ListAccessPointsForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the access point you want to delete",
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
      name: "delete-access-point-policy",
      description:
        "This operation is not supported by directory buckets.  Deletes the access point policy for the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPointPolicy:    PutAccessPointPolicy     GetAccessPointPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the access point whose policy you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded",
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
      name: "delete-access-point-policy-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Removes the resource policy for an Object Lambda Access Point. The following actions are related to DeleteAccessPointPolicyForObjectLambda:    GetAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the Object Lambda Access Point you want to delete the policy for",
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
      name: "delete-bucket",
      description:
        "This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the Amazon S3 API Reference.   Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  Related Resources     CreateBucket     GetBucket     DeleteObject",
      options: [
        {
          name: "--account-id",
          description: "The account ID that owns the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket being deleted. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "delete-bucket-lifecycle-configuration",
      description:
        "This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the Amazon S3 API Reference.   Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this operation, you must have permission to perform the s3-outposts:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For more information about object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID of the lifecycle configuration to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "delete-bucket-policy",
      description:
        "This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see DeleteBucketPolicy in the Amazon S3 API Reference.   This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the s3-outposts:DeleteBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketPolicy:    GetBucketPolicy     PutBucketPolicy",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "delete-bucket-replication",
      description:
        "This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To delete an S3 bucket's replication configuration, see DeleteBucketReplication in the Amazon S3 API Reference.   Deletes the replication configuration from the specified S3 on Outposts bucket. To use this operation, you must have permissions to perform the s3-outposts:PutReplicationConfiguration action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts buckets in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration for",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the S3 on Outposts bucket to delete the replication configuration for. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "delete-bucket-tagging",
      description:
        "This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see DeleteBucketTagging in the Amazon S3 API Reference.   Deletes the tags from the Outposts bucket. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this action, you must have permission to perform the PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket tag set to be removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The bucket ARN that has the tag set to be removed. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "delete-job-tagging",
      description:
        "Removes the entire tag set from the specified S3 Batch Operations job.  Permissions  To use the DeleteJobTagging operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.   Related actions include:    CreateJob     GetJobTagging     PutJobTagging",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description:
            "The ID for the S3 Batch Operations job whose tags you want to delete",
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
      name: "delete-multi-region-access-point",
      description:
        "This operation is not supported by directory buckets.  Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to DeleteMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An idempotency token used to identify the request and guarantee that requests are unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description:
            "A container element containing details about the Multi-Region Access Point",
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
      name: "delete-public-access-block",
      description:
        "This operation is not supported by directory buckets.  Removes the PublicAccessBlock configuration for an Amazon Web Services account. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     PutPublicAccessBlock",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to remove",
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
      name: "delete-storage-lens-configuration",
      description:
        "This operation is not supported by directory buckets.  Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--config-id",
          description: "The ID of the S3 Storage Lens configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The account ID of the requester",
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
      name: "delete-storage-lens-configuration-tagging",
      description:
        "This operation is not supported by directory buckets.  Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:DeleteStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--config-id",
          description: "The ID of the S3 Storage Lens configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The account ID of the requester",
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
      name: "delete-storage-lens-group",
      description:
        "Deletes an existing S3 Storage Lens group. To use this operation, you must have the permission to perform the s3:DeleteStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes",
      options: [
        {
          name: "--name",
          description:
            "The name of the Storage Lens group that you're trying to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID used to create the Storage Lens group that you're trying to delete",
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
      name: "describe-job",
      description:
        "Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Permissions  To use the DescribeJob operation, you must have permission to perform the s3:DescribeJob action.   Related actions include:    CreateJob     ListJobs     UpdateJobPriority     UpdateJobStatus",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description:
            "The ID for the job whose information you want to retrieve",
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
      name: "describe-multi-region-access-point-operation",
      description:
        "This operation is not supported by directory buckets.  Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see Using Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     GetMultiRegionAccessPoint     ListMultiRegionAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-token-arn",
          description:
            "The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action",
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
      name: "dissociate-access-grants-identity-center",
      description:
        "Dissociates the Amazon Web Services IAM Identity Center instance from the S3 Access Grants instance.   Permissions  You must have the s3:DissociateAccessGrantsIdentityCenter permission to use this operation.   Additional Permissions  You must have the sso:DeleteApplication permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
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
      name: "get-access-grant",
      description:
        "Get the details of an access grant from your S3 Access Grants instance.  Permissions  You must have the s3:GetAccessGrant permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grant-id",
          description:
            "The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant",
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
      name: "get-access-grants-instance",
      description:
        "Retrieves the S3 Access Grants instance for a Region in your account.   Permissions  You must have the s3:GetAccessGrantsInstance permission to use this operation.      GetAccessGrantsInstance is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
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
      name: "get-access-grants-instance-for-prefix",
      description:
        "Retrieve the S3 Access Grants instance that contains a particular prefix.   Permissions  You must have the s3:GetAccessGrantsInstanceForPrefix permission for the caller account to use this operation.   Additional Permissions  The prefix owner account must grant you the following permissions to their S3 Access Grants instance: s3:GetAccessGrantsInstanceForPrefix",
      options: [
        {
          name: "--account-id",
          description:
            "The ID of the Amazon Web Services account that is making this request",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description:
            "The S3 prefix of the access grants that you would like to retrieve",
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
      name: "get-access-grants-instance-resource-policy",
      description:
        "Returns the resource policy of the S3 Access Grants instance.   Permissions  You must have the s3:GetAccessGrantsInstanceResourcePolicy permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
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
      name: "get-access-grants-location",
      description:
        "Retrieves the details of a particular location registered in your S3 Access Grants instance.   Permissions  You must have the s3:GetAccessGrantsLocation permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grants-location-id",
          description:
            "The ID of the registered location that you are retrieving. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register",
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
      name: "get-access-point",
      description:
        "This operation is not supported by directory buckets.  Returns configuration information about the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetAccessPoint:    CreateAccessPoint     DeleteAccessPoint     ListAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the account that owns the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the access point whose configuration information you want to retrieve. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded",
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
      name: "get-access-point-configuration-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Returns configuration for an Object Lambda Access Point. The following actions are related to GetAccessPointConfigurationForObjectLambda:    PutAccessPointConfigurationForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the Object Lambda Access Point you want to return the configuration for",
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
      name: "get-access-point-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Returns configuration information about the specified Object Lambda Access Point The following actions are related to GetAccessPointForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     ListAccessPointsForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Object Lambda Access Point",
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
      name: "get-access-point-policy",
      description:
        "This operation is not supported by directory buckets.  Returns the access point policy associated with the specified access point. The following actions are related to GetAccessPointPolicy:    PutAccessPointPolicy     DeleteAccessPointPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the access point whose policy you want to retrieve. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded",
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
      name: "get-access-point-policy-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Returns the resource policy for an Object Lambda Access Point. The following actions are related to GetAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     PutAccessPointPolicyForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Object Lambda Access Point",
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
      name: "get-access-point-policy-status",
      description:
        "This operation is not supported by directory buckets.  Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see Managing Data Access with Amazon S3 access points in the Amazon S3 User Guide",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the access point whose policy status you want to retrieve",
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
      name: "get-access-point-policy-status-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Returns the status of the resource policy associated with an Object Lambda Access Point",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Object Lambda Access Point",
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
      name: "get-bucket",
      description:
        "Gets an Amazon S3 on Outposts bucket. For more information, see  Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the s3-outposts:GetBucket permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket.  If you don't have s3-outposts:GetBucket permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. The following actions are related to GetBucket for Amazon S3 on Outposts: All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.    PutObject     CreateBucket     DeleteBucket",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "get-bucket-lifecycle-configuration",
      description:
        "This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the Amazon S3 API Reference.   Returns the lifecycle configuration information set on the Outposts bucket. For more information, see Using Amazon S3 on Outposts and for information about lifecycle configuration, see  Object Lifecycle Management in Amazon S3 User Guide. To use this action, you must have permission to perform the s3-outposts:GetLifecycleConfiguration action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following actions are related to GetBucketLifecycleConfiguration:    PutBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "get-bucket-policy",
      description:
        "This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see GetBucketPolicy in the Amazon S3 API Reference.   Returns the policy of a specified Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucketPolicy permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error.  As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketPolicy:    GetObject     PutBucketPolicy     DeleteBucketPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "get-bucket-replication",
      description:
        "This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an S3 bucket's replication configuration, see GetBucketReplication in the Amazon S3 API Reference.   Returns the replication configuration of an S3 on Outposts bucket. For more information about S3 on Outposts, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  This action requires permissions for the s3-outposts:GetReplicationConfiguration action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts bucket in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication, Status, and Priority elements. The response also returns those elements. For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the Amazon S3 User Guide. The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket to get the replication information for. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "get-bucket-tagging",
      description:
        "This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see GetBucketTagging in the Amazon S3 API Reference.   Returns the tag set associated with the Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. To use this action, you must have permission to perform the GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSetError    Description: There is no tag set associated with the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
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
      name: "get-bucket-versioning",
      description:
        "This operation returns the versioning state for S3 on Outposts buckets only. To return the versioning state for an S3 bucket, see GetBucketVersioning in the Amazon S3 API Reference.   Returns the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures. If you've never set versioning on your bucket, it has no versioning state. In that case, the GetBucketVersioning request does not return a versioning state value. For more information about versioning, see Versioning in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to GetBucketVersioning for S3 on Outposts.    PutBucketVersioning     PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 on Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The S3 on Outposts bucket to return the versioning state for",
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
      name: "get-data-access",
      description:
        "Returns a temporary access credential from S3 Access Grants to the grantee or client application. The temporary credential is an Amazon Web Services STS token that grants them access to the S3 data.   Permissions  You must have the s3:GetDataAccess permission to use this operation.   Additional Permissions  The IAM role that S3 Access Grants assumes must have the following permissions specified in the trust policy when registering the location: sts:AssumeRole, for directory users or groups sts:SetContext, and for IAM users or roles sts:SetSourceIdentity",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description:
            "The S3 URI path of the data to which you are requesting temporary access credentials. If the requesting account has an access grant for this data, S3 Access Grants vends temporary access credentials in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission",
          description:
            "The type of permission granted to your S3 data, which can be set to one of the following values:    READ \u2013 Grant read-only access to the S3 data.    WRITE \u2013 Grant write-only access to the S3 data.    READWRITE \u2013 Grant both read and write access to the S3 data",
          args: {
            name: "string",
          },
        },
        {
          name: "--duration-seconds",
          description:
            "The session duration, in seconds, of the temporary access credential that S3 Access Grants vends to the grantee or client application. The default value is 1 hour, but the grantee can specify a range from 900 seconds (15 minutes) up to 43200 seconds (12 hours). If the grantee requests a value higher than this maximum, the operation fails",
          args: {
            name: "integer",
          },
        },
        {
          name: "--privilege",
          description:
            "The scope of the temporary access credential that S3 Access Grants vends to the grantee or client application.     Default \u2013 The scope of the returned temporary access token is the scope of the grant that is closest to the target scope.    Minimal \u2013 The scope of the returned temporary access token is the same as the requested target scope as long as the requested scope is the same as or a subset of the grant scope",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-type",
          description:
            "The type of Target. The only possible value is Object. Pass this value if the target data that you would like to access is a path to an object. Do not pass this value if the target data is a bucket or a bucket and a prefix",
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
      name: "get-job-tagging",
      description:
        "Returns the tags on an S3 Batch Operations job.   Permissions  To use the GetJobTagging operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.   Related actions include:    CreateJob     PutJobTagging     DeleteJobTagging",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description:
            "The ID for the S3 Batch Operations job whose tags you want to retrieve",
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
      name: "get-multi-region-access-point",
      description:
        "This operation is not supported by directory buckets.  Returns configuration information about the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     ListMultiRegionAccessPoints",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points in the Amazon S3 User Guide",
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
      name: "get-multi-region-access-point-policy",
      description:
        "This operation is not supported by directory buckets.  Returns the access control policy of the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicy:    GetMultiRegionAccessPointPolicyStatus     PutMultiRegionAccessPointPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points in the Amazon S3 User Guide",
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
      name: "get-multi-region-access-point-policy-status",
      description:
        "This operation is not supported by directory buckets.  Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPointPolicyStatus:    GetMultiRegionAccessPointPolicy     PutMultiRegionAccessPointPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points in the Amazon S3 User Guide",
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
      name: "get-multi-region-access-point-routes",
      description:
        "This operation is not supported by directory buckets.  Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive. To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:    us-east-1     us-west-2     ap-southeast-2     ap-northeast-1     eu-west-1",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--mrap",
          description: "The Multi-Region Access Point ARN",
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
      name: "get-public-access-block",
      description:
        "This operation is not supported by directory buckets.  Retrieves the PublicAccessBlock configuration for an Amazon Web Services account. For more information, see  Using Amazon S3 block public access. Related actions include:    DeletePublicAccessBlock     PutPublicAccessBlock",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to retrieve",
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
      name: "get-storage-lens-configuration",
      description:
        "This operation is not supported by directory buckets.  Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--config-id",
          description: "The ID of the Amazon S3 Storage Lens configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The account ID of the requester",
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
      name: "get-storage-lens-configuration-tagging",
      description:
        "This operation is not supported by directory buckets.  Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:GetStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--config-id",
          description: "The ID of the Amazon S3 Storage Lens configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The account ID of the requester",
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
      name: "get-storage-lens-group",
      description:
        "Retrieves the Storage Lens group configuration details. To use this operation, you must have the permission to perform the s3:GetStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes",
      options: [
        {
          name: "--name",
          description:
            "The name of the Storage Lens group that you're trying to retrieve the configuration details for",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the Storage Lens group that you're trying to retrieve the details for",
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
      name: "list-access-grants",
      description:
        "Returns the list of access grants in your S3 Access Grants instance.  Permissions  You must have the s3:ListAccessGrants permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants request in order to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--grantee-type",
          description:
            "The type of the grantee to which access has been granted. It can be one of the following values:    IAM - An IAM user or role.    DIRECTORY_USER - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.    DIRECTORY_GROUP - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--grantee-identifier",
          description:
            "The unique identifer of the Grantee. If the grantee type is IAM, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission",
          description:
            "The type of permission granted to your S3 data, which can be set to one of the following values:    READ \u2013 Grant read-only access to the S3 data.    WRITE \u2013 Grant write-only access to the S3 data.    READWRITE \u2013 Grant both read and write access to the S3 data",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-scope",
          description:
            "The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-arn",
          description:
            "The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application",
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
      name: "list-access-grants-instances",
      description:
        "Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account.  Permissions  You must have the s3:ListAccessGrantsInstances permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Instances request in order to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results",
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
      name: "list-access-grants-locations",
      description:
        "Returns a list of the locations registered in your S3 Access Grants instance.  Permissions  You must have the s3:ListAccessGrantsLocations permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Locations request in order to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--location-scope",
          description:
            "The S3 path to the location that you are registering. The location scope can be the default S3 location s3://, the S3 path to a bucket s3://<bucket>, or the S3 path to a bucket and prefix s3://<bucket>/<prefix>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix",
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
      name: "list-access-points",
      description:
        "This operation is not supported by directory buckets.  Returns a list of the access points that are owned by the current account that's associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to ListAccessPoints:    CreateAccessPoint     DeleteAccessPoint     GetAccessPoint",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the account that owns the specified access points",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket whose associated access points you want to list. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token. If a previous call to ListAccessPoints returned a continuation token in the NextToken field, then providing that value here causes Amazon S3 to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points",
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
      name: "list-access-points-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there are more access points than what can be returned in one call, the response will include a continuation token that you can use to list the additional access points. The following actions are related to ListAccessPointsForObjectLambda:    CreateAccessPointForObjectLambda     DeleteAccessPointForObjectLambda     GetAccessPointForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access points that you want to include in the list. The response may contain fewer access points but will never contain more. If there are more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points",
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
      name: "list-caller-access-grants",
      description:
        "Use this API to list the access grants that grant the caller access to Amazon S3 data through S3 Access Grants. The caller (grantee) can be an Identity and Access Management (IAM) identity or Amazon Web Services Identity Center corporate directory identity. You must pass the Amazon Web Services account of the S3 data owner (grantor) in the request. You can, optionally, narrow the results by GrantScope, using a fragment of the data's S3 path, and S3 Access Grants will return only the grants with a path that contains the path fragment. You can also pass the AllowedByApplication filter in the request, which returns only the grants authorized for applications, whether the application is the caller's Identity Center application or any other application (ALL). For more information, see List the caller's access grants in the Amazon S3 User Guide.  Permissions  You must have the s3:ListCallerAccessGrants permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-scope",
          description:
            "The S3 path of the data that you would like to access. Must start with s3://. You can optionally pass only the beginning characters of a path, and S3 Access Grants will search for all applicable grants for the path fragment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to request the next page of results. Pass this value into a subsequent List Caller Access Grants request in order to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access grants that you would like returned in the List Caller Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--allowed-by-application",
          description:
            "If this optional parameter is passed in the request, a filter is applied to the results. The results will include only the access grants for the caller's Identity Center application or for any other applications (ALL)",
        },
        {
          name: "--no-allowed-by-application",
          description:
            "If this optional parameter is passed in the request, a filter is applied to the results. The results will include only the access grants for the caller's Identity Center application or for any other applications (ALL)",
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
      name: "list-jobs",
      description:
        "Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Permissions  To use the ListJobs operation, you must have permission to perform the s3:ListJobs action.   Related actions include:     CreateJob     DescribeJob     UpdateJobPriority     UpdateJobStatus",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-statuses",
          description:
            "The List Jobs request returns jobs that match the statuses listed in this element",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token to request the next page of results. Use the token that Amazon S3 returned in the NextToken element of the ListJobsResult from the previous List Jobs request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of jobs that Amazon S3 will include in the List Jobs response. If there are more jobs than this number, the response will include a pagination token in the NextToken field to enable you to retrieve the next page of results",
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
      name: "list-multi-region-access-points",
      description:
        "This operation is not supported by directory buckets.  Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to ListMultiRegionAccessPoint:    CreateMultiRegionAccessPoint     DeleteMultiRegionAccessPoint     DescribeMultiRegionAccessPointOperation     GetMultiRegionAccessPoint",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "Not currently used. Do not use this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Not currently used. Do not use this parameter",
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
      name: "list-regional-buckets",
      description:
        "This operation is not supported by directory buckets.  Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your request, see the Examples section",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--outpost-id",
          description:
            "The ID of the Outposts resource.  This ID is required by Amazon S3 on Outposts buckets",
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
      name: "list-storage-lens-configurations",
      description:
        "This operation is not supported by directory buckets.  Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:ListStorageLensConfigurations action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--account-id",
          description: "The account ID of the requester",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token to request the next page of results",
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
      name: "list-storage-lens-groups",
      description:
        "Lists all the Storage Lens groups in the specified home Region.  To use this operation, you must have the permission to perform the s3:ListStorageLensGroups action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID that owns the Storage Lens groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
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
      name: "list-tags-for-resource",
      description:
        "This operation allows you to list all the Amazon Web Services resource tags for a specified resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.   Permissions  You must have the s3:ListTagsForResource permission to use this operation.     This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.   For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the resource owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the S3 resource that you want to list the tags for. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant",
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
      name: "put-access-grants-instance-resource-policy",
      description:
        "Updates the resource policy of the S3 Access Grants instance.   Permissions  You must have the s3:PutAccessGrantsInstanceResourcePolicy permission to use this operation",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The resource policy of the S3 Access Grants instance that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization",
          description:
            "The Organization of the resource policy of the S3 Access Grants instance",
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
      name: "put-access-point-configuration-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Replaces configuration for an Object Lambda Access Point. The following actions are related to PutAccessPointConfigurationForObjectLambda:    GetAccessPointConfigurationForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description: "Object Lambda Access Point configuration document",
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
      name: "put-access-point-policy",
      description:
        "This operation is not supported by directory buckets.  Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutAccessPointPolicy:    GetAccessPointPolicy     DeleteAccessPointPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for owner of the bucket associated with the specified access point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the access point that you want to associate with the specified policy. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The policy that you want to apply to the specified access point. For more information about access point policies, see Managing data access with Amazon S3 access points in the Amazon S3 User Guide",
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
      name: "put-access-point-policy-for-object-lambda",
      description:
        "This operation is not supported by directory buckets.  Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see Creating Object Lambda Access Points in the Amazon S3 User Guide. The following actions are related to PutAccessPointPolicyForObjectLambda:    DeleteAccessPointPolicyForObjectLambda     GetAccessPointPolicyForObjectLambda",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID for the account that owns the specified Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Object Lambda Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "Object Lambda Access Point resource policy document",
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
      name: "put-bucket-lifecycle-configuration",
      description:
        "This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the Amazon S3 API Reference.   Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketLifecycleConfiguration:    GetBucketLifecycleConfiguration     DeleteBucketLifecycleConfiguration",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to set the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-configuration",
          description:
            "Container for lifecycle rules. You can add as many as 1,000 rules",
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
      name: "put-bucket-policy",
      description:
        "This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see PutBucketPolicy in the Amazon S3 API Reference.   Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the PutBucketPolicy permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.   For more information about bucket policies, see Using Bucket Policies and User Policies. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketPolicy:    GetBucketPolicy     DeleteBucketPolicy",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirm-remove-self-bucket-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This is not supported by Amazon S3 on Outposts buckets",
        },
        {
          name: "--no-confirm-remove-self-bucket-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This is not supported by Amazon S3 on Outposts buckets",
        },
        {
          name: "--policy",
          description: "The bucket policy as a JSON document",
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
      name: "put-bucket-replication",
      description:
        "This action creates an Amazon S3 on Outposts bucket's replication configuration. To create an S3 bucket's replication configuration, see PutBucketReplication in the Amazon S3 API Reference.   Creates a replication configuration or replaces an existing one. For information about S3 replication on Outposts configuration, see Replicating objects for S3 on Outposts in the Amazon S3 User Guide.  It can take a while to propagate PUT or DELETE requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a GET request soon after a PUT or DELETE request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.  Specify the replication configuration in the request body. In the replication configuration, you provide the following information:   The name of the destination bucket or buckets where you want S3 on Outposts to replicate objects   The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on your behalf   Other relevant information, such as replication rules   A replication configuration must include at least one rule and can contain a maximum of 100. Each rule identifies a subset of objects to replicate by filtering the objects in the source Outposts bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source Outposts bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority. Using PutBucketReplication on Outposts requires that both the source and destination buckets must have versioning enabled. For information about enabling versioning on a bucket, see Managing S3 Versioning for your S3 on Outposts bucket. For information about S3 on Outposts replication failure reasons, see Replication failure reasons in the Amazon S3 User Guide.  Handling Replication of Encrypted Objects  Outposts buckets are encrypted at all times. All the objects in the source Outposts bucket are encrypted and can be replicated. Also, all the replicas in the destination Outposts bucket are encrypted with the same encryption key as the objects in the source Outposts bucket.  Permissions  To create a PutBucketReplication request, you must have s3-outposts:PutReplicationConfiguration permissions for the bucket. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see Setting up IAM with S3 on Outposts and Managing access to S3 on Outposts buckets.   To perform this operation, the user or role must also have the iam:CreateRole and iam:PassRole permissions. For more information, see Granting a user permissions to pass a role to an Amazon Web Services service.  All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "Specifies the S3 on Outposts bucket to set the configuration for. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration",
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
      name: "put-bucket-tagging",
      description:
        "This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see PutBucketTagging in the Amazon S3 API Reference.   Sets the tags for an S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost allocation and tagging.  Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see  Using cost allocation in Amazon S3 bucket tags.  To use this action, you must have permissions to perform the s3-outposts:PutBucketTagging action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see  Permissions Related to Bucket Subresource Operations and Managing access permissions to your Amazon S3 resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see  User-Defined Tag Restrictions and  Amazon Web Services-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The Amazon Resource Name (ARN) of the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
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
      name: "put-bucket-versioning",
      description:
        "This operation sets the versioning state for S3 on Outposts buckets only. To set the versioning state for an S3 bucket, see PutBucketVersioning in the Amazon S3 API Reference.   Sets the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures. You can set the versioning state to one of the following:    Enabled - Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.    Suspended - Suspends versioning for the objects in the bucket. All objects added to the bucket receive the version ID null.   If you've never set versioning on your bucket, it has no versioning state. In that case, a  GetBucketVersioning request does not return a versioning state value. When you enable S3 Versioning, for each object in your bucket, you have a current version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle rules to expire noncurrent versions after a specified time period. For more information, see  Creating and managing a lifecycle configuration for your S3 on Outposts bucket in the Amazon S3 User Guide. If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. For more information, see Versioning in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following operations are related to PutBucketVersioning for S3 on Outposts.    GetBucketVersioning     PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 on Outposts bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The S3 on Outposts bucket to set the versioning state for",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa",
          description:
            "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device",
          args: {
            name: "string",
          },
        },
        {
          name: "--versioning-configuration",
          description:
            "The root-level tag for the VersioningConfiguration parameters",
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
      name: "put-job-tagging",
      description:
        "Sets the supplied tag-set on an S3 Batch Operations job. A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this operation to replace the tag set with the one you modified. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide.     If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing.   For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same result without incurring charges.   A few things to consider about using tags:   Amazon S3 limits the maximum number of tags to 50 tags per job.   You can associate up to 50 tags with a job as long as they have unique tag keys.   A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.   The key and values are case sensitive.   For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions in the Billing and Cost Management User Guide.       Permissions  To use the PutJobTagging operation, you must have permission to perform the s3:PutJobTagging action.   Related actions include:    CreateJob     GetJobTagging     DeleteJobTagging",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description:
            "The ID for the S3 Batch Operations job whose tags you want to replace",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The set of tags to associate with the S3 Batch Operations job",
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
      name: "put-multi-region-access-point-policy",
      description:
        "This operation is not supported by directory buckets.  Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to PutMultiRegionAccessPointPolicy:    GetMultiRegionAccessPointPolicy     GetMultiRegionAccessPointPolicyStatus",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An idempotency token used to identify the request and guarantee that requests are unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description:
            "A container element containing the details of the policy for the Multi-Region Access Point",
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
      name: "put-public-access-block",
      description:
        "This operation is not supported by directory buckets.  Creates or modifies the PublicAccessBlock configuration for an Amazon Web Services account. For this operation, users must have the s3:PutAccountPublicAccessBlock permission. For more information, see  Using Amazon S3 block public access. Related actions include:    GetPublicAccessBlock     DeletePublicAccessBlock",
      options: [
        {
          name: "--public-access-block-configuration",
          description:
            "The PublicAccessBlock configuration that you want to apply to the specified Amazon Web Services account",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-id",
          description:
            "The account ID for the Amazon Web Services account whose PublicAccessBlock configuration you want to set",
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
      name: "put-storage-lens-configuration",
      description:
        "This operation is not supported by directory buckets.  Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--config-id",
          description: "The ID of the S3 Storage Lens configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The account ID of the requester",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-lens-configuration",
          description: "The S3 Storage Lens configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tag set of the S3 Storage Lens configuration.  You can set up to a maximum of 50 tags",
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
      name: "put-storage-lens-configuration-tagging",
      description:
        "This operation is not supported by directory buckets.  Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens  in the Amazon S3 User Guide.  To use this action, you must have permission to perform the s3:PutStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide",
      options: [
        {
          name: "--config-id",
          description: "The ID of the S3 Storage Lens configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The account ID of the requester",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag set of the S3 Storage Lens configuration.  You can set up to a maximum of 50 tags",
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
      name: "submit-multi-region-access-point-routes",
      description:
        "This operation is not supported by directory buckets.  Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of 0 indicates a passive status, which means that traffic won't be routed to the specified Region. A value of 100 indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times. When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren\u2019t specified remain unchanged.  Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect.  To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:    us-east-1     us-west-2     ap-southeast-2     ap-northeast-1     eu-west-1",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID for the owner of the Multi-Region Access Point",
          args: {
            name: "string",
          },
        },
        {
          name: "--mrap",
          description: "The Multi-Region Access Point ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--route-updates",
          description:
            "The different routes that make up the new route configuration. Active routes return a value of 100, and passive routes return a value of 0",
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
        "Creates a new Amazon Web Services resource tag or updates an existing resource tag. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource.   This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.    Permissions  You must have the s3:TagResource permission to use this operation.    For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID that created the S3 resource that you're trying to add tags to or the requester's account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the S3 resource that you're trying to add tags to. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The Amazon Web Services resource tags that you want to add to the specified S3 resource",
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
      name: "untag-resource",
      description:
        "This operation removes the specified Amazon Web Services resource tags from an S3 resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.   This operation is only supported for S3 Storage Lens groups and for S3 Access Grants. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.    Permissions  You must have the s3:UntagResource permission to use this operation.    For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID that owns the resource that you're trying to remove the tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the S3 resource that you're trying to remove the tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The array of tag key-value pairs that you're trying to remove from of the S3 resource",
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
      name: "update-access-grants-location",
      description:
        "Updates the IAM role of a registered location in your S3 Access Grants instance.  Permissions  You must have the s3:UpdateAccessGrantsLocation permission to use this operation.   Additional Permissions  You must also have the following permission: iam:PassRole",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the S3 Access Grants instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-grants-location-id",
          description:
            "The ID of the registered location that you are updating. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register.  The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID default to the default location s3:// and assigns an auto-generated ID to other locations that you register.  If you are passing the default location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the Subprefix field",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location",
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
      name: "update-job-priority",
      description:
        "Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Permissions  To use the UpdateJobPriority operation, you must have permission to perform the s3:UpdateJobPriority action.   Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The ID for the job whose priority you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description: "The priority you want to assign to this job",
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
      name: "update-job-status",
      description:
        "Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide.  Permissions  To use the UpdateJobStatus operation, you must have permission to perform the s3:UpdateJobStatus action.   Related actions include:    CreateJob     ListJobs     DescribeJob     UpdateJobStatus",
      options: [
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID associated with the S3 Batch Operations job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The ID of the job whose status you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--requested-job-status",
          description: "The status that you want to move the specified job to",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-update-reason",
          description:
            "A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length",
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
      name: "update-storage-lens-group",
      description:
        "Updates the existing Storage Lens group. To use this operation, you must have the permission to perform the s3:UpdateStorageLensGroup action. For more information about the required Storage Lens Groups permissions, see Setting account permissions to use S3 Storage Lens groups. For information about Storage Lens groups errors, see List of Amazon S3 Storage Lens error codes",
      options: [
        {
          name: "--name",
          description:
            "The name of the Storage Lens group that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description:
            "The Amazon Web Services account ID of the Storage Lens group owner",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-lens-group",
          description:
            "The JSON file that contains the Storage Lens group configuration",
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
  ],
};
export default completionSpec;
