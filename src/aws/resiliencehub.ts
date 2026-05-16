const completionSpec: Fig.Spec = {
  name: "resiliencehub",
  description:
    "Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from disruptions. It offers continual resiliency assessment and validation that integrates into your software development lifecycle. This enables you to uncover resiliency weaknesses, ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your applications are met, and resolve issues before they are released into production",
  subcommands: [
    {
      name: "accept-resource-grouping-recommendations",
      description:
        "Accepts the resource grouping recommendations suggested by Resilience Hub for your application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "List of resource grouping recommendations you want to include in your application",
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
      name: "add-draft-app-version-resource-mappings",
      description:
        "Adds the source of resource-maps to the draft version of an application. During assessment, Resilience Hub will use these resource-maps to resolve the latest physical ID for each resource in the application template. For more information about different types of resources supported by Resilience Hub and how to add them in your application, see Step 2: How is your application managed? in the Resilience Hub User Guide",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-mappings",
          description:
            "Mappings used to map logical resources from the template to physical resources. You can use the mapping type CFN_STACK if the application template uses a logical stack name. Or you can map individual resources by using the mapping type RESOURCE. We recommend using the mapping type CFN_STACK if the application is backed by a CloudFormation stack",
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
      name: "batch-update-recommendation-status",
      description:
        "Enables you to include or exclude one or more operational recommendations",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-entries",
          description:
            "Defines the list of operational recommendations that need to be included or excluded",
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
      name: "create-app",
      description:
        "Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information about the number of resources supported per application, see Service quotas. After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO)",
      options: [
        {
          name: "--assessment-schedule",
          description:
            "Assessment execution schedule with 'Daily' or 'Disabled' values",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-application-arn",
          description:
            "Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The optional description for an app",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-subscriptions",
          description:
            "The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports only Drift detected and Scheduled assessment failure events notification",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "Name of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-model",
          description:
            "Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--policy-arn",
          description:
            "Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair",
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
      name: "create-app-version-app-component",
      description:
        "Creates a new Application Component in the Resilience Hub application.  This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API",
      options: [
        {
          name: "--additional-info",
          description:
            "Currently, there is no supported additional information for Application Components",
          args: {
            name: "map",
          },
        },
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "Identifier of the Application Component",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the Application Component",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Type of Application Component. For more information about the types of Application Component, see Grouping resources in an AppComponent",
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
      name: "create-app-version-resource",
      description:
        "Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.    This action has no effect outside Resilience Hub.   This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API.   To update application version with new physicalResourceID, you must call ResolveAppVersionResources API",
      options: [
        {
          name: "--additional-info",
          description:
            "Currently, there is no supported additional information for resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-components",
          description:
            "List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "Amazon Web Services account that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-region",
          description:
            "Amazon Web Services region that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--logical-resource-id",
          description: "Logical identifier of the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--physical-resource-id",
          description: "Physical identifier of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "Name of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "Type of resource",
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
      name: "create-recommendation-template",
      description:
        "Creates a new recommendation template for the Resilience Hub application",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-name",
          description:
            "The name of the Amazon S3 bucket that will contain the recommendation template",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format for the recommendation template.  CfnJson  The template is CloudFormation JSON.  CfnYaml  The template is CloudFormation YAML",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the recommendation template",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-ids",
          description:
            "Identifiers for the recommendations used to create a recommendation template",
          args: {
            name: "list",
          },
        },
        {
          name: "--recommendation-types",
          description:
            "An array of strings that specify the recommendation template type or types.  Alarm  The template is an AlarmRecommendation template.  Sop  The template is a SopRecommendation template.  Test  The template is a TestRecommendation template",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair",
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
      name: "create-resiliency-policy",
      description:
        "Creates a resiliency policy for an application.  Resilience Hub allows you to provide a value of zero for rtoInSecs and rpoInSecs of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for rtoInSecs and rpoInSecs, the estimated workload RTO and estimated workload RPO result will be near zero and the Compliance status for your application will be set to Policy breached",
      options: [
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-location-constraint",
          description:
            "Specifies a high-level geographical location constraint for where your resilience policy data can be stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds",
          args: {
            name: "map",
          },
        },
        {
          name: "--policy-description",
          description: "Description of the resiliency policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "Name of the resiliency policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair",
          args: {
            name: "map",
          },
        },
        {
          name: "--tier",
          description:
            "The tier for this resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical)",
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
      name: "delete-app",
      description:
        "Deletes an Resilience Hub application. This is a destructive action that can't be undone",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "A boolean option to force the deletion of an Resilience Hub application",
        },
        {
          name: "--no-force-delete",
          description:
            "A boolean option to force the deletion of an Resilience Hub application",
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
      name: "delete-app-assessment",
      description:
        "Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
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
      name: "delete-app-input-source",
      description:
        "Deletes the input source and all of its imported resources from the Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--eks-source-cluster-namespace",
          description:
            "The namespace on your Amazon Elastic Kubernetes Service cluster that you want to delete from the Resilience Hub application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-arn",
          description:
            "The Amazon Resource Name (ARN) of the imported resource you want to remove from the Resilience Hub application. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--terraform-source",
          description:
            "The imported Terraform s3 state \ufb01le you want to remove from the Resilience Hub application",
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
      name: "delete-app-version-app-component",
      description:
        "Deletes an Application Component from the Resilience Hub application.    This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API.   You will not be able to delete an Application Component if it has resources associated with it",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "Identifier of the Application Component",
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
      name: "delete-app-version-resource",
      description:
        "Deletes a resource from the Resilience Hub application.    You can only delete a manually added resource. To exclude non-manually added resources, use the UpdateAppVersionResource API.   This action has no effect outside Resilience Hub.   This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "Amazon Web Services account that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-region",
          description:
            "Amazon Web Services region that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--logical-resource-id",
          description: "Logical identifier of the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--physical-resource-id",
          description: "Physical identifier of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "Name of the resource",
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
      name: "delete-recommendation-template",
      description:
        "Deletes a recommendation template. This is a destructive action that can't be undone",
      options: [
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-template-arn",
          description:
            "The Amazon Resource Name (ARN) for a recommendation template",
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
      name: "delete-resiliency-policy",
      description:
        "Deletes a resiliency policy. This is a destructive action that can't be undone",
      options: [
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "describe-app",
      description: "Describes an Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "describe-app-assessment",
      description: "Describes an assessment for an Resilience Hub application",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "describe-app-version",
      description: "Describes the Resilience Hub application version",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "Resilience Hub application version",
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
      name: "describe-app-version-app-component",
      description:
        "Describes an Application Component in the Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "Resilience Hub application version",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "Identifier of the Application Component",
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
      name: "describe-app-version-resource",
      description:
        "Describes a resource of the Resilience Hub application.  This API accepts only one of the following parameters to describe the resource:    resourceName     logicalResourceId     physicalResourceId (Along with physicalResourceId, you can also provide awsAccountId, and awsRegion)",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "Resilience Hub application version",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "Amazon Web Services account that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-region",
          description:
            "Amazon Web Services region that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--logical-resource-id",
          description: "Logical identifier of the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--physical-resource-id",
          description: "Physical identifier of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "Name of the resource",
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
      name: "describe-app-version-resources-resolution-status",
      description:
        "Returns the resolution status for the specified resolution identifier for an application version. If resolutionId is not specified, the current resolution status is returned",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolution-id",
          description: "The identifier for a specific resolution",
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
      name: "describe-app-version-template",
      description: "Describes details about an Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
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
      name: "describe-draft-app-version-resources-import-status",
      description:
        "Describes the status of importing resources to an application version.  If you get a 404 error with ResourceImportStatusNotFoundAppMetadataException, you must call importResourcesToDraftAppVersion after creating the application and before calling describeDraftAppVersionResourcesImportStatus to obtain the status",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "describe-metrics-export",
      description:
        "Describes the metrics of the application configuration being exported",
      options: [
        {
          name: "--metrics-export-id",
          description: "Identifier of the metrics export task",
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
      name: "describe-resiliency-policy",
      description:
        "Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more",
      options: [
        {
          name: "--policy-arn",
          description:
            "Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "describe-resource-grouping-recommendation-task",
      description:
        "Describes the resource grouping recommendation tasks run by Resilience Hub for your application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--grouping-id",
          description: "Identifier of the grouping recommendation task",
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
      name: "import-resources-to-draft-app-version",
      description:
        "Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see Discover the structure and describe your Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--eks-sources",
          description:
            "The input sources of the Amazon Elastic Kubernetes Service resources you need to import",
          args: {
            name: "list",
          },
        },
        {
          name: "--import-strategy",
          description:
            "The import strategy you would like to set to import resources into Resilience Hub application",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-arns",
          description: "The Amazon Resource Names (ARNs) for the resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--terraform-sources",
          description: "A list of terraform file s3 URLs you need to import",
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
      name: "list-alarm-recommendations",
      description:
        "Lists the alarm recommendations for an Resilience Hub application",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-assessment-compliance-drifts",
      description:
        "List of compliance drifts that were detected while running an assessment",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of compliance drifts requested",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-assessment-resource-drifts",
      description:
        "List of resource drifts that were detected while running an assessment",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of drift results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-assessments",
      description:
        "Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-name",
          description: "The name for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-status",
          description:
            "The current status of the assessment for the resiliency policy",
          args: {
            name: "list",
          },
        },
        {
          name: "--compliance-status",
          description:
            "The current status of compliance for the resiliency policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--invoker",
          description:
            "Specifies the entity that invoked a specific assessment, either a User or the System",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--reverse-order",
          description:
            "The default is to sort by ascending startTime. To sort by descending startTime, set reverseOrder to true",
        },
        {
          name: "--no-reverse-order",
          description:
            "The default is to sort by ascending startTime. To sort by descending startTime, set reverseOrder to true",
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
      name: "list-app-component-compliances",
      description:
        "Lists the compliances for an Resilience Hub Application Component",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-component-recommendations",
      description:
        "Lists the recommendations for an Resilience Hub Application Component",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-input-sources",
      description:
        "Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see Discover the structure and describe your Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "Resilience Hub application version",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of input sources to be displayed per Resilience Hub application",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-version-app-components",
      description:
        "Lists all the Application Components in the Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "Version of the Application Component",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of Application Components to be displayed per Resilience Hub application version",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-version-resource-mappings",
      description:
        "Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-app-version-resources",
      description: "Lists all the resources in an Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolution-id",
          description: "The identifier for a specific resolution",
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
      name: "list-app-versions",
      description:
        "Lists the different versions for the Resilience Hub applications",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--end-time",
          description:
            "Upper limit of the time range to filter the application versions",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "Lower limit of the time range to filter the application versions",
          args: {
            name: "timestamp",
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
      name: "list-apps",
      description:
        "Lists your Resilience Hub applications.  You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:  An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-application-arn",
          description:
            "Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-last-assessment-time",
          description:
            "Lower limit of the range that is used to filter applications based on their last assessment times",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name for the one of the listed applications",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--reverse-order",
          description:
            "The application list is sorted based on the values of lastAppComplianceEvaluationTime field. By default, application list is sorted in ascending order. To sort the application list in descending order, set this field to True",
        },
        {
          name: "--no-reverse-order",
          description:
            "The application list is sorted based on the values of lastAppComplianceEvaluationTime field. By default, application list is sorted in ascending order. To sort the application list in descending order, set this field to True",
        },
        {
          name: "--to-last-assessment-time",
          description:
            "Upper limit of the range that is used to filter the applications based on their last assessment times",
          args: {
            name: "timestamp",
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
      name: "list-metrics",
      description: "Lists the metrics that can be exported",
      options: [
        {
          name: "--conditions",
          description:
            "Indicates the list of all the conditions that were applied on the metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-source",
          description: "Indicates the data source of the metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description: "Indicates the list of fields in the data source",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sorts",
          description:
            "(Optional) Indicates the order in which you want to sort the fields in the metrics. By default, the fields are sorted in the ascending order",
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
      name: "list-recommendation-templates",
      description:
        "Lists the recommendation templates for the Resilience Hub applications",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description:
            "The name for one of the listed recommendation templates",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-template-arn",
          description:
            "The Amazon Resource Name (ARN) for a recommendation template",
          args: {
            name: "string",
          },
        },
        {
          name: "--reverse-order",
          description:
            "The default is to sort by ascending startTime. To sort by descending startTime, set reverseOrder to true",
        },
        {
          name: "--no-reverse-order",
          description:
            "The default is to sort by ascending startTime. To sort by descending startTime, set reverseOrder to true",
        },
        {
          name: "--status",
          description: "Status of the action",
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
      name: "list-resiliency-policies",
      description:
        "Lists the resiliency policies for the Resilience Hub applications",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "Name of the resiliency policy",
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
      name: "list-resource-grouping-recommendations",
      description:
        "Lists the resource grouping recommendations suggested by Resilience Hub for your application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of grouping recommendations to be displayed per Resilience Hub application",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-sop-recommendations",
      description:
        "Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-suggested-resiliency-policies",
      description:
        "Lists the suggested resiliency policies for the Resilience Hub applications",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
        "Lists the tags for your resources in your Resilience Hub applications",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for a specific resource in your Resilience Hub application",
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
      name: "list-test-recommendations",
      description:
        "Lists the test recommendations for the Resilience Hub application",
      options: [
        {
          name: "--assessment-arn",
          description:
            "Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
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
      name: "list-unsupported-app-version-resources",
      description:
        "Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Null, or the token from a previous call to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolution-id",
          description: "The identifier for a specific resolution",
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
      name: "publish-app-version",
      description:
        "Publishes a new version of a specific Resilience Hub application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-name",
          description: "Name of the application version",
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
      name: "put-draft-app-version-template",
      description:
        "Adds or updates the app template for an Resilience Hub application draft version",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-template-body",
          description:
            'A JSON string that provides information about your application structure. To learn more about the appTemplateBody template, see the sample template provided in the Examples section. The appTemplateBody JSON string has the following structure:     resources   The list of logical resources that must be included in the Resilience Hub application. Type: Array  Don\'t add the resources that you want to exclude.  Each resources array item includes the following fields:     logicalResourceId   Logical identifier of the resource. Type: Object Each logicalResourceId object includes the following fields:    identifier  Identifier of the resource. Type: String    logicalStackName  The name of the CloudFormation stack this resource belongs to. Type: String    resourceGroupName  The name of the resource group this resource belongs to. Type: String    terraformSourceName  The name of the Terraform S3 state file this resource belongs to. Type: String    eksSourceName  Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.  This parameter accepts values in "eks-cluster/namespace" format.  Type: String       type   The type of resource. Type: string     name   The name of the resource. Type: String    additionalInfo  Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters.  Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions"  Value: "[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"         appComponents   List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added. Type: Array Each appComponents array item includes the following fields:    name  Name of the Application Component. Type: String    type  Type of Application Component. For more information about the types of Application Component, see Grouping resources in an AppComponent. Type: String    resourceNames  The list of included resources that are assigned to the Application Component. Type: Array of strings    additionalInfo  Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters.  Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions"  Value: "[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"         excludedResources   The list of logical resource identifiers to be excluded from the application. Type: Array  Don\'t add the resources that you want to include.  Each excludedResources array item includes the following fields:     logicalResourceIds   Logical identifier of the resource. Type: Object  You can configure only one of the following fields:    logicalStackName     resourceGroupName     terraformSourceName     eksSourceName     Each logicalResourceIds object includes the following fields:    identifier  Identifier of the resource. Type: String    logicalStackName  The name of the CloudFormation stack this resource belongs to. Type: String    resourceGroupName  The name of the resource group this resource belongs to. Type: String    terraformSourceName  The name of the Terraform S3 state file this resource belongs to. Type: String    eksSourceName  Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.  This parameter accepts values in "eks-cluster/namespace" format.  Type: String         version   Resilience Hub application version.    additionalInfo  Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters.  Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions"  Value: "[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"',
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
      name: "reject-resource-grouping-recommendations",
      description: "Rejects resource grouping recommendations",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "List of resource grouping recommendations you have selected to exclude from your application",
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
      name: "remove-draft-app-version-resource-mappings",
      description: "Removes resource mappings from a draft application version",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-registry-app-names",
          description:
            "The names of the registered applications you want to remove from the resource mappings",
          args: {
            name: "list",
          },
        },
        {
          name: "--eks-source-names",
          description:
            'The names of the Amazon Elastic Kubernetes Service clusters and namespaces you want to remove from the resource mappings.  This parameter accepts values in "eks-cluster/namespace" format',
          args: {
            name: "list",
          },
        },
        {
          name: "--logical-stack-names",
          description:
            "The names of the CloudFormation stacks you want to remove from the resource mappings",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-group-names",
          description:
            "The names of the resource groups you want to remove from the resource mappings",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-names",
          description:
            "The names of the resources you want to remove from the resource mappings",
          args: {
            name: "list",
          },
        },
        {
          name: "--terraform-source-names",
          description:
            "The names of the Terraform sources you want to remove from the resource mappings",
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
      name: "resolve-app-version-resources",
      description: "Resolves the resources for an application version",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
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
      name: "start-app-assessment",
      description: "Creates a new application assessment for an application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-name",
          description: "The name for the assessment",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair",
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
      name: "start-metrics-export",
      description: "Initiates the export task of metrics",
      options: [
        {
          name: "--bucket-name",
          description:
            "(Optional) Specifies the name of the Amazon Simple Storage Service bucket where the exported metrics will be stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests",
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
      name: "start-resource-grouping-recommendation-task",
      description: "Starts grouping recommendation task",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      description: "Applies one or more tags to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to assign to the resource. Each tag consists of a key/value pair",
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
      description: "Removes one or more tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description: "Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags you want to remove",
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
      name: "update-app",
      description: "Updates an application",
      options: [
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-schedule",
          description:
            "Assessment execution schedule with 'Daily' or 'Disabled' values",
          args: {
            name: "string",
          },
        },
        {
          name: "--clear-resiliency-policy-arn",
          description:
            "Specifies if the resiliency policy ARN should be cleared",
        },
        {
          name: "--no-clear-resiliency-policy-arn",
          description:
            "Specifies if the resiliency policy ARN should be cleared",
        },
        {
          name: "--description",
          description: "The optional description for an app",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-subscriptions",
          description:
            "The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for Drift detected and Scheduled assessment failure events",
          args: {
            name: "list",
          },
        },
        {
          name: "--permission-model",
          description:
            "Defines the roles and credentials that Resilience Hub would use while creating an application, importing its resources, and running an assessment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--policy-arn",
          description:
            "Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "update-app-version",
      description:
        "Updates the Resilience Hub application version.  This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API",
      options: [
        {
          name: "--additional-info",
          description:
            'Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters.  Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions"  Value: "[{"region":"<REGION>", "accounts":[{"id":"<ACCOUNT_ID>"}]}]"',
          args: {
            name: "map",
          },
        },
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
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
      name: "update-app-version-app-component",
      description:
        "Updates an existing Application Component in the Resilience Hub application.  This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API",
      options: [
        {
          name: "--additional-info",
          description:
            "Currently, there is no supported additional information for Application Components",
          args: {
            name: "map",
          },
        },
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "Identifier of the Application Component",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the Application Component",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Type of Application Component. For more information about the types of Application Component, see Grouping resources in an AppComponent",
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
      name: "update-app-version-resource",
      description:
        "Updates the resource details in the Resilience Hub application.    This action has no effect outside Resilience Hub.   This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API.   To update application version with new physicalResourceID, you must call ResolveAppVersionResources API",
      options: [
        {
          name: "--additional-info",
          description:
            "Currently, there is no supported additional information for resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--app-arn",
          description:
            "Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-components",
          description:
            "List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "Amazon Web Services account that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-region",
          description:
            "Amazon Web Services region that owns the physical resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--excluded",
          description:
            "Indicates if a resource is excluded from an Resilience Hub application.  You can exclude only imported resources from an Resilience Hub application",
        },
        {
          name: "--no-excluded",
          description:
            "Indicates if a resource is excluded from an Resilience Hub application.  You can exclude only imported resources from an Resilience Hub application",
        },
        {
          name: "--logical-resource-id",
          description: "Logical identifier of the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--physical-resource-id",
          description: "Physical identifier of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "Name of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "Type of resource",
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
      name: "update-resiliency-policy",
      description:
        "Updates a resiliency policy.  Resilience Hub allows you to provide a value of zero for rtoInSecs and rpoInSecs of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for rtoInSecs and rpoInSecs, the estimated workload RTO and estimated workload RPO result will be near zero and the Compliance status for your application will be set to Policy breached",
      options: [
        {
          name: "--data-location-constraint",
          description:
            "Specifies a high-level geographical location constraint for where your resilience policy data can be stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "Resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds",
          args: {
            name: "map",
          },
        },
        {
          name: "--policy-arn",
          description:
            "Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:partition:resiliencehub:region:account:resiliency-policy/policy-id. For more information about ARNs, see  Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-description",
          description: "Description of the resiliency policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "Name of the resiliency policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--tier",
          description:
            "The tier for this resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical)",
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
