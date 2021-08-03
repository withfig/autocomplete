const completionSpec: Fig.Spec = {
  name: "emr-containers",
  description:
    'Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see What is Amazon EMR on EKS.  Amazon EMR containers is the API name for Amazon EMR on EKS. The emr-containers prefix is used in the following scenarios:    It is the prefix in the CLI commands for Amazon EMR on EKS. For example, aws emr-containers start-job-run.   It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, "Action": [ "emr-containers:StartJobRun"]. For more information, see Policy actions for Amazon EMR on EKS.   It is the prefix used in Amazon EMR on EKS service endpoints. For example, emr-containers.us-east-2.amazonaws.com. For more information, see Amazon EMR on EKS Service Endpoints.',
  subcommands: [
    {
      name: "cancel-job-run",
      description:
        "Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.",
      options: [
        {
          name: "--id",
          description: "The ID of the job run to cancel.",
          args: {
            name: "string",
          },
        },
        {
          name: "--virtual-cluster-id",
          description:
            "The ID of the virtual cluster for which the job run will be canceled.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-managed-endpoint",
      description:
        "Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.",
      options: [
        {
          name: "--name",
          description: "The name of the managed endpoint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--virtual-cluster-id",
          description:
            "The ID of the virtual cluster for which a managed endpoint is created.",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the managed endpoint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--release-label",
          description: "The Amazon EMR release version.",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description: "The ARN of the execution role.",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-arn",
          description: "The certificate ARN of the managed endpoint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-overrides",
          description:
            "The configuration settings that will be used to override existing configurations.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The client idempotency token for this create call.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags of the managed endpoint.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-virtual-cluster",
      description:
        "Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.",
      options: [
        {
          name: "--name",
          description: "The specified name of the virtual cluster.",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-provider",
          description: "The container provider of the virtual cluster.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The client token of the virtual cluster.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to the virtual cluster.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-managed-endpoint",
      description:
        "Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.",
      options: [
        {
          name: "--id",
          description: "The ID of the managed endpoint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--virtual-cluster-id",
          description: "The ID of the endpoint's virtual cluster.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-virtual-cluster",
      description:
        "Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.",
      options: [
        {
          name: "--id",
          description: "The ID of the virtual cluster that will be deleted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-job-run",
      description:
        "Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.",
      options: [
        {
          name: "--id",
          description: "The ID of the job run request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--virtual-cluster-id",
          description:
            "The ID of the virtual cluster for which the job run is submitted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-managed-endpoint",
      description:
        "Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.",
      options: [
        {
          name: "--id",
          description: "This output displays ID of the managed endpoint.",
          args: {
            name: "string",
          },
        },
        {
          name: "--virtual-cluster-id",
          description: "The ID of the endpoint's virtual cluster.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-virtual-cluster",
      description:
        "Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.",
      options: [
        {
          name: "--id",
          description: "The ID of the virtual cluster that will be described.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-job-runs",
      description:
        "Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.",
      options: [
        {
          name: "--virtual-cluster-id",
          description:
            "The ID of the virtual cluster for which to list the job run.",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-before",
          description:
            "The date and time before which the job runs were submitted.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-after",
          description:
            "The date and time after which the job runs were submitted.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--name",
          description: "The name of the job run.",
          args: {
            name: "string",
          },
        },
        {
          name: "--states",
          description: "The states of the job run.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of job runs that can be listed.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token for the next set of job runs to return.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-managed-endpoints",
      description:
        "Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.",
      options: [
        {
          name: "--virtual-cluster-id",
          description: "The ID of the virtual cluster.",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-before",
          description:
            "The date and time before which the endpoints are created.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-after",
          description:
            "The date and time after which the endpoints are created.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--types",
          description: "The types of the managed endpoints.",
          args: {
            name: "list",
          },
        },
        {
          name: "--states",
          description: "The states of the managed endpoints.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of managed endpoints that can be listed.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of managed endpoints to return.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "Lists the tags assigned to the resources.",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of tagged resources.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-virtual-clusters",
      description:
        "Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.",
      options: [
        {
          name: "--container-provider-id",
          description: "The container provider ID of the virtual cluster.",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-provider-type",
          description:
            "The container provider type of the virtual cluster. EKS is the only supported type as of now.",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-after",
          description:
            "The date and time after which the virtual clusters are created.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-before",
          description:
            "The date and time before which the virtual clusters are created.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--states",
          description: "The states of the requested virtual clusters.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of virtual clusters that can be listed.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of virtual clusters to return.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-job-run",
      description:
        "Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.",
      options: [
        {
          name: "--name",
          description: "The name of the job run.",
          args: {
            name: "string",
          },
        },
        {
          name: "--virtual-cluster-id",
          description:
            "The virtual cluster ID for which the job run request is submitted.",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "The client idempotency token of the job run request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-role-arn",
          description: "The execution role ARN for the job run.",
          args: {
            name: "string",
          },
        },
        {
          name: "--release-label",
          description: "The Amazon EMR release version to use for the job run.",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-driver",
          description: "The job driver for the job run.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration-overrides",
          description: "The configuration overrides for the job run.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to job runs.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of resources.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to resources.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Removes tags from resources.",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of resources.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys of the resources.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-role-trust-policy",
      description:
        'Updates the trust policy of given IAM role such that it can be used with Amazon EMR on EKS with the given namespace from the given EKS cluster.\n\nNote:\n To use the IAM Role with Amazon EMR on EKS, OIDC identity provider also needs to be created for the EKS cluster.\n This can be done using ``eksctl utils associate-iam-oidc-provider --cluster <cluster_name> --approve`` command.\n For information about installing or upgrading eksctl, see `Installing or upgrading eksctl <https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html#installing-eksctl>`__ in the *Amazon EKS User Guide*.\n\nThe command would merge the existing trust policy of the role with the below trust policy::\n\n    {\n        "Version": "2012-10-17",\n        "Statement": [\n            {\n                "Effect": "Allow",\n                "Principal": {\n                    "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"\n                },\n                "Action": "sts:AssumeRoleWithWebIdentity",\n                "Condition": {\n                    "StringLike": {\n                        "<OIDC_PROVIDER>:sub": "system:serviceaccount:<NAMESPACE>:emr-containers-sa-*-*-<AWS_ACCOUNT_ID>-<BASE36_ENCODED_ROLE_NAME>"\n                    }\n                }\n            }\n        ]\n    }\n\nHere::\n\n    <AWS_ACCOUNT_ID> = AWS Account ID of the EKS cluster\n    <OIDC_PROVIDER> = OIDC Identity Provider for the EKS cluster\n    <NAMESPACE> = Namespace of the EKS cluster\n    <BASE36_ENCODED_ROLE_NAME> = Base36 encoded form of the IAM Role name\n\nYou can use the **--dry-run** option to print the merged trust policy document to stdout instead of updating the role trust policy directly.\n',
      options: [
        {
          name: "--cluster-name",
          description:
            "Specify the name of the Amazon EKS cluster with which the IAM Role would be used.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "Specify the namespace from the Amazon EKS cluster with which the IAM Role would be used.",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-name",
          description:
            "Specify the IAM Role name that you want to usewith Amazon EMR on EKS.",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-endpoint",
          description:
            "The  IAM  endpoint  to call for updating the role trust policy. This is optional and should only bespecified when a custom endpoint should be calledfor IAM operations.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "Print the merged trust policy document tostdout instead of updating the role trustpolicy directly.",
        },
      ],
    },
  ],
};

export default completionSpec;
