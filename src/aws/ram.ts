const completionSpec: Fig.Spec = {
  name: "ram",
  description:
    "This is the Resource Access Manager API Reference. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users.  To learn more about RAM, see the following resources:    Resource Access Manager product page     Resource Access Manager User Guide",
  subcommands: [
    {
      name: "accept-resource-share-invitation",
      description:
        "Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools",
      options: [
        {
          name: "--resource-share-invitation-arn",
          description:
            "The Amazon Resource Name (ARN) of the invitation that you want to accept",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "associate-resource-share",
      description:
        "Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share that you want to add principals or resources to",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "Specifies a list of Amazon Resource Names (ARNs) of the resources that you want to share. This can be null if you want to add only principals",
          args: {
            name: "list",
          },
        },
        {
          name: "--principals",
          description:
            "Specifies a list of principals to whom you want to the resource share. This can be null if you want to add only resources. What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See AssociateResourceSharePermission. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resource Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description:
            "Specifies from which source accounts the service principal has access to the resources in this resource share",
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
      name: "associate-resource-share-permission",
      description:
        "Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share to which you want to add or replace permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the ListPermissions operation or go to the Permissions library page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page",
          args: {
            name: "string",
          },
        },
        {
          name: "--replace",
          description:
            "Specifies whether the specified permission should replace the existing permission associated with the resource share. Use true to replace the current permissions. Use false to add the permission to a resource share that currently doesn't have a permission. The default value is false.  A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set replace to true then the operation returns an error. This helps prevent accidental overwriting of a permission",
        },
        {
          name: "--no-replace",
          description:
            "Specifies whether the specified permission should replace the existing permission associated with the resource share. Use true to replace the current permissions. Use false to add the permission to a resource share that currently doesn't have a permission. The default value is false.  A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set replace to true then the operation returns an error. This helps prevent accidental overwriting of a permission",
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-version",
          description:
            "Specifies the version of the RAM permission to associate with the resource share. You can specify only the version that is currently set as the default version for the permission. If you also set the replace pararameter to true, then this operation updates an outdated version of the permission to the current default version.  You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility",
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
      name: "create-permission",
      description:
        "Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation",
      options: [
        {
          name: "--name",
          description:
            "Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies the name of the resource type that this customer managed permission applies to. The format is  <service-code>:<resource-type>  and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string ec2:subnet. To see the list of valid values for this parameter, query the ListResourceTypes operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-template",
          description:
            "A string in JSON format string that contains the following elements of a resource-based policy:    Effect: must be set to ALLOW.    Action: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see Actions, resources, and condition keys for Amazon Web Services services in the Identity and Access Management User Guide.    Condition: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see IAM policies: Condition element in the Identity and Access Management User Guide.   This template can't include either the Resource or Principal elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The Resource comes from the ARN of the specific resource that you are sharing. The Principal comes from the list of identities added to the resource share",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies a list of one or more tag key and value pairs to attach to the permission",
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
      name: "create-permission-version",
      description:
        "Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use ReplacePermissionAssociations to update them. If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the customer managed permission you're creating a new version for",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-template",
          description:
            "A string in JSON format string that contains the following elements of a resource-based policy:    Effect: must be set to ALLOW.    Action: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see Actions, resources, and condition keys for Amazon Web Services services in the Identity and Access Management User Guide.    Condition: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see IAM policies: Condition element in the Identity and Access Management User Guide.   This template can't include either the Resource or Principal elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The Resource comes from the ARN of the specific resource that you are sharing. The Principal comes from the list of identities added to the resource share",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "create-resource-share",
      description:
        "Creates a resource share. You can provide a list of the Amazon Resource Names (ARNs) for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.  Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it",
      options: [
        {
          name: "--name",
          description: "Specifies the name of the resource share",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "Specifies a list of one or more ARNs of the resources to associate with the resource share",
          args: {
            name: "list",
          },
        },
        {
          name: "--principals",
          description:
            "Specifies a list of one or more principals to associate with the resource share. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resource Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share",
          args: {
            name: "list",
          },
        },
        {
          name: "--allow-external-principals",
          description:
            "Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of true lets you share with individual Amazon Web Services accounts that are not in your organization. A value of false only has meaning if your account is a member of an Amazon Web Services Organization. The default value is true",
        },
        {
          name: "--no-allow-external-principals",
          description:
            "Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of true lets you share with individual Amazon Web Services accounts that are not in your organization. A value of false only has meaning if your account is a member of an Amazon Web Services Organization. The default value is true",
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-arns",
          description:
            "Specifies the Amazon Resource Names (ARNs) of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share",
          args: {
            name: "list",
          },
        },
        {
          name: "--sources",
          description:
            "Specifies from which source accounts the service principal has access to the resources in this resource share",
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
      name: "delete-permission",
      description:
        "Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the customer managed permission that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "delete-permission-version",
      description:
        "Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission. If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the permission with the version you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-version",
          description:
            "Specifies the version number to delete. You can't delete the default version for a customer managed permission. You can't delete a version if it's the only version of the permission. You must either first create another version, or delete the permission completely. You can't delete a version if it is attached to any resource shares. If the version is the default, you must first use SetDefaultPermissionVersion to set a different version as the default for the customer managed permission, and then use AssociateResourceSharePermission to update your resource shares to use the new default version",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "delete-resource-share",
      description:
        "Deletes the specified resource share.  This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "disassociate-resource-share",
      description:
        "Removes the specified principals or resources from participating in the specified resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies Amazon Resource Name (ARN) of the resource share that you want to remove resources or principals from",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "Specifies a list of Amazon Resource Names (ARNs) for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals associated with the resource share",
          args: {
            name: "list",
          },
        },
        {
          name: "--principals",
          description:
            "Specifies a list of one or more principals that no longer are to have access to the resources in this resource share. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resource Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description:
            "Specifies from which source accounts the service principal no longer has access to the resources in this resource share",
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
      name: "disassociate-resource-share-permission",
      description:
        "Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource share that you want to remove the managed permission from",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-arn",
          description:
            "The Amazon Resource Name (ARN) of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "enable-sharing-with-aws-organization",
      description:
        "Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called AWSServiceRoleForResourceAccessManager that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users. You must call this operation from an IAM role or user in the organization's management account",
      options: [
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
      name: "get-permission",
      description:
        "Retrieves the contents of a managed permission in JSON format",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the ListPermissions operation or go to the Permissions library page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-version",
          description:
            "Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version. To see the list of available versions, use ListPermissionVersions",
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
      name: "get-resource-policies",
      description:
        "Retrieves the resource policies for the specified resources that you own and have shared",
      options: [
        {
          name: "--resource-arns",
          description:
            "Specifies the Amazon Resource Names (ARNs) of the resources whose policies you want to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--principal",
          description: "Specifies the principal",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "get-resource-share-associations",
      description:
        "Retrieves the lists of resources and principals that associated for resource shares that you own",
      options: [
        {
          name: "--association-type",
          description:
            "Specifies whether you want to retrieve the associations that involve a specified resource or principal.    PRINCIPAL \u2013 list the principals whose associations you want to see.    RESOURCE \u2013 list the resources whose associations you want to see",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-share-arns",
          description:
            "Specifies a list of Amazon Resource Names (ARNs) of the resource share whose associations you want to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of a resource whose resource shares you want to retrieve. You cannot specify this parameter if the association type is PRINCIPAL",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the Amazon Resource Name (ARN) of an individual IAM role or user. You cannot specify this parameter if the association type is RESOURCE",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-status",
          description:
            "Specifies that you want to retrieve only associations that have this status",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "get-resource-share-invitations",
      description:
        "Retrieves details about invitations that you have received for resource shares",
      options: [
        {
          name: "--resource-share-invitation-arns",
          description:
            "Specifies the Amazon Resource Names (ARNs) of the resource share invitations you want information about",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-share-arns",
          description:
            "Specifies that you want details about invitations only for the resource shares described by this list of Amazon Resource Names (ARNs)",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "get-resource-shares",
      description:
        "Retrieves details about the resource shares that you own or that are shared with you",
      options: [
        {
          name: "--resource-share-arns",
          description:
            "Specifies the Amazon Resource Names (ARNs) of individual resource shares that you want information about",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-share-status",
          description:
            "Specifies that you want to retrieve details of only those resource shares that have this status",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-owner",
          description:
            "Specifies that you want to retrieve details of only those resource shares that match the following:     SELF  \u2013 resource shares that your account shares with other accounts     OTHER-ACCOUNTS  \u2013 resource shares that other accounts share with your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Specifies the name of an individual resource share that you want to retrieve details about",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-filters",
          description:
            "Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--permission-arn",
          description:
            "Specifies that you want to retrieve details of only those resource shares that use the managed permission with this Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-version",
          description:
            "Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission",
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
      name: "list-pending-invitation-resources",
      description:
        "Lists the resources in a resource share that is shared with you but for which the invitation is still PENDING. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired",
      options: [
        {
          name: "--resource-share-invitation-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the invitation. You can use GetResourceShareInvitations to find the ARN of the invitation",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-region-scope",
          description:
            "Specifies that you want the results to include only resources that have the specified scope.    ALL \u2013 the results include both global and regional resources or resource types.    GLOBAL \u2013 the results include only global resources or resource types.    REGIONAL \u2013 the results include only regional resources or resource types.   The default value is ALL",
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
      name: "list-permission-associations",
      description:
        "Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the managed permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-version",
          description:
            "Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission",
          args: {
            name: "integer",
          },
        },
        {
          name: "--association-status",
          description:
            "Specifies that you want to list only those associations with resource shares that match this status",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--feature-set",
          description:
            "Specifies that you want to list only those associations with resource shares that have a featureSet with this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-version",
          description:
            "When true, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission. When false (the default value), lists associations with resource shares that use any version of the specified managed permission",
        },
        {
          name: "--no-default-version",
          description:
            "When true, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission. When false (the default value), lists associations with resource shares that use any version of the specified managed permission",
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "list-permission-versions",
      description:
        "Lists the available versions of the specified RAM permission",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the RAM permission whose versions you want to list. You can use the permissionVersion parameter on the AssociateResourceSharePermission operation to specify a non-default version to attach",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "list-permissions",
      description:
        "Retrieves a list of available RAM permissions that you can use for the supported resource types",
      options: [
        {
          name: "--resource-type",
          description:
            "Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive. For example, to list only permissions that apply to Amazon EC2 subnets, specify ec2:subnet. You can use the ListResourceTypes operation to get the specific string required",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--permission-type",
          description:
            "Specifies that you want to list only permissions of this type:    AWS \u2013 returns only Amazon Web Services managed permissions.    LOCAL \u2013 returns only customer managed permissions    ALL \u2013 returns both Amazon Web Services managed permissions and customer managed permissions.   If you don't specify this parameter, the default is All",
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
      name: "list-principals",
      description:
        "Lists the principals that you are sharing resources with or that are sharing resources with you",
      options: [
        {
          name: "--resource-owner",
          description:
            "Specifies that you want to list information for only resource shares that match the following:     SELF  \u2013 principals that your account is sharing resources with     OTHER-ACCOUNTS  \u2013 principals that are sharing resources with your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "Specifies that you want to list principal information for the resource share with the specified Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--principals",
          description:
            "Specifies that you want to list information for only the listed principals. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resource Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies that you want to list information for only principals associated with resource shares that include the specified resource type. For a list of valid values, query the ListResourceTypes operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-share-arns",
          description:
            "Specifies that you want to list information for only principals associated with the resource shares specified by a list the Amazon Resource Names (ARNs)",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "list-replace-permission-associations-work",
      description:
        "Retrieves the current status of the asynchronous tasks performed by RAM when you perform the ReplacePermissionAssociationsWork operation",
      options: [
        {
          name: "--work-ids",
          description:
            "A list of IDs. These values come from the idfield of the replacePermissionAssociationsWorkstructure returned by the ReplacePermissionAssociations operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--status",
          description:
            "Specifies that you want to see only the details about requests with a status that matches this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "list-resource-share-permissions",
      description:
        "Lists the RAM permissions that are associated with a resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share for which you want to retrieve the associated permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
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
      name: "list-resource-types",
      description: "Lists the resource types that can be shared by RAM",
      options: [
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-region-scope",
          description:
            "Specifies that you want the results to include only resources that have the specified scope.    ALL \u2013 the results include both global and regional resources or resource types.    GLOBAL \u2013 the results include only global resources or resource types.    REGIONAL \u2013 the results include only regional resources or resource types.   The default value is ALL",
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
      name: "list-resources",
      description:
        "Lists the resources that you added to a resource share or the resources that are shared with you",
      options: [
        {
          name: "--resource-owner",
          description:
            "Specifies that you want to list only the resource shares that match the following:     SELF  \u2013 resources that your account shares with other accounts     OTHER-ACCOUNTS  \u2013 resources that other accounts share with your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "Specifies that you want to list only the resource shares that are associated with the specified principal",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies that you want to list only the resource shares that include resources of the specified resource type. For valid values, query the ListResourceTypes operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "Specifies that you want to list only the resource shares that include resources with the specified Amazon Resource Names (ARNs)",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-share-arns",
          description:
            "Specifies that you want to list only resources in the resource shares identified by the specified Amazon Resource Names (ARNs)",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-region-scope",
          description:
            "Specifies that you want the results to include only resources that have the specified scope.    ALL \u2013 the results include both global and regional resources or resource types.    GLOBAL \u2013 the results include only global resources or resource types.    REGIONAL \u2013 the results include only regional resources or resource types.   The default value is ALL",
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
      name: "promote-permission-created-from-policy",
      description:
        "When you attach a resource-based policy to a resource, RAM automatically creates a resource share of featureSet=CREATED_FROM_POLICY with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM. This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares. Before you use PromoteResourceShareCreatedFromPolicy, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.    The original CREATED_FROM_POLICY policy isn't deleted, and resource shares using that original policy aren't automatically updated.   You can't modify a CREATED_FROM_POLICY resource share so you can't associate the new customer managed permission by using ReplacePermsissionAssociations. However, if you use PromoteResourceShareCreatedFromPolicy, that operation automatically associates the fully manageable customer managed permission to the newly promoted STANDARD resource share.   After you promote a resource share, if the original CREATED_FROM_POLICY managed permission has no other associations to A resource share, then RAM automatically deletes it",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the CREATED_FROM_POLICY permission that you want to promote. You can get this Amazon Resource Name (ARN) by calling the ListResourceSharePermissions operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Specifies a name for the promoted customer managed permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "promote-resource-share-created-from-policy",
      description:
        "When you attach a resource-based policy to a resource, RAM automatically creates a resource share of featureSet=CREATED_FROM_POLICY with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM. This operation promotes the resource share to a STANDARD resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.  Before you perform this operation, you should first run PromotePermissionCreatedFromPolicyto ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing CREATED_FROM_POLICY permission, then this operation fails",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share to promote",
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
      name: "reject-resource-share-invitation",
      description:
        "Rejects an invitation to a resource share from another Amazon Web Services account",
      options: [
        {
          name: "--resource-share-invitation-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the invitation that you want to reject",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "replace-permission-associations",
      description:
        "Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used. You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the fromPermissionArn and toPermissionArn parameters. You can use the optional fromPermissionVersion parameter to update only those resources that use a specified version of the managed permission to the new managed permission.  To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types",
      options: [
        {
          name: "--from-permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the managed permission that you want to replace",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-permission-version",
          description:
            "Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission",
          args: {
            name: "integer",
          },
        },
        {
          name: "--to-permission-arn",
          description:
            "Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by fromPerssionArn and fromPermissionVersion. The operation always associates the version that is currently the default for the specified managed permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "set-default-permission-version",
      description:
        "Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use ReplacePermissionAssociations to update them",
      options: [
        {
          name: "--permission-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the customer managed permission whose default version you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-version",
          description:
            "Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use ListPermissionVersions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
      name: "tag-resource",
      description:
        "Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share. The tags on a managed permission are the same for all versions of the managed permission",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share that you want to add tags to. You must specify either resourceShareArn, or resourceArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the managed permission that you want to add tags to. You must specify either resourceArn, or resourceShareArn, but not both",
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
      name: "untag-resource",
      description:
        "Removes the specified tag key and value pairs from the specified resource share or managed permission",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either resourceShareArn, or resourceArn, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "Specifies a list of one or more tag keys that you want to remove",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the managed permission that you want to remove tags from. You must specify either resourceArn, or resourceShareArn, but not both",
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
      name: "update-resource-share",
      description:
        "Modifies some of the properties of the specified resource share",
      options: [
        {
          name: "--resource-share-arn",
          description:
            "Specifies the Amazon Resource Name (ARN) of the resource share that you want to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "If specified, the new name that you want to attach to the resource share",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-external-principals",
          description:
            "Specifies whether principals outside your organization in Organizations can be associated with a resource share",
        },
        {
          name: "--no-allow-external-principals",
          description:
            "Specifies whether principals outside your organization in Organizations can be associated with a resource share",
        },
        {
          name: "--client-token",
          description:
            "Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error",
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
