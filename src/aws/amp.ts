const completionSpec: Fig.Spec = {
  name: "amp",
  description:
    "Amazon Managed Service for Prometheus is a serverless, Prometheus-compatible monitoring service for container metrics that makes it easier to securely monitor container environments at scale. With Amazon Managed Service for Prometheus, you can use the same open-source Prometheus data model and query language that you use today to monitor the performance of your containerized workloads, and also enjoy improved scalability, availability, and security without having to manage the underlying infrastructure. For more information about Amazon Managed Service for Prometheus, see the Amazon Managed Service for Prometheus User Guide. Amazon Managed Service for Prometheus includes two APIs.   Use the Amazon Web Services API described in this guide to manage Amazon Managed Service for Prometheus resources, such as workspaces, rule groups, and alert managers.   Use the Prometheus-compatible API to work within your Prometheus workspace",
  subcommands: [
    {
      name: "create-alert-manager-definition",
      description:
        "The CreateAlertManagerDefinition operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use PutAlertManagerDefinition",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The alert manager definition to add. A base64-encoded version of the YAML alert manager definition file. For details about the alert manager definition, see AlertManagedDefinitionData",
          args: {
            name: "blob",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to add the alert manager definition to",
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
      name: "create-logging-configuration",
      description:
        "The CreateLoggingConfiguration operation creates a logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-arn",
          description:
            "The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to create the logging configuration for",
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
      name: "create-rule-groups-namespace",
      description:
        "The CreateRuleGroupsNamespace operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use PutRuleGroupsNamespace",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The rules file to use in the new namespace. Contains the base64-encoded version of the YAML rules file. For details about the rule groups namespace structure, see RuleGroupsNamespaceData",
          args: {
            name: "blob",
          },
        },
        {
          name: "--name",
          description: "The name for the new rule groups namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tag keys and values to associate with the rule groups namespace",
          args: {
            name: "map",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to add the rule groups namespace",
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
      name: "create-scraper",
      description:
        "The CreateScraper operation creates a scraper to collect metrics. A scraper pulls metrics from Prometheus-compatible sources within an Amazon EKS cluster, and sends them to your Amazon Managed Service for Prometheus workspace. Scrapers are flexible, and can be configured to control what metrics are collected, the frequency of collection, what transformations are applied to the metrics, and more. An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your cluster. You must configure this role with a policy that allows it to scrape metrics from your cluster. For more information, see Configuring your Amazon EKS cluster in the Amazon Managed Service for Prometheus User Guide. The scrapeConfiguration parameter contains the base-64 encoded YAML configuration for the scraper.  For more information about collectors, including what metrics are collected, and how to configure the scraper, see Using an Amazon Web Services managed collector in the Amazon Managed Service for Prometheus User Guide",
      options: [
        {
          name: "--alias",
          description:
            "(optional) An alias to associate with the scraper. This is for your use, and does not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The Amazon Managed Service for Prometheus workspace to send metrics to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scrape-configuration",
          description:
            "The configuration file to use in the new scraper. For more information, see Scraper configuration in the Amazon Managed Service for Prometheus User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source",
          description:
            "The Amazon EKS cluster from which the scraper will collect metrics",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "(Optional) The list of tag keys and values to associate with the scraper",
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
      name: "create-workspace",
      description:
        "Creates a Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics. You can have one or more workspaces in each Region in your account",
      options: [
        {
          name: "--alias",
          description:
            "An alias that you assign to this workspace to help you identify it. It does not need to be unique. Blank spaces at the beginning or end of the alias that you specify will be trimmed from the value used",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "(optional) The ARN for a customer managed KMS key to use for encrypting data within your workspace. For more information about using your own key in your workspace, see Encryption at rest in the Amazon Managed Service for Prometheus User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tag keys and values to associate with the workspace",
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
      name: "delete-alert-manager-definition",
      description: "Deletes the alert manager definition from a workspace",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to delete the alert manager definition from",
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
      name: "delete-logging-configuration",
      description: "Deletes the logging configuration for a workspace",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace containing the logging configuration to delete",
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
      name: "delete-rule-groups-namespace",
      description:
        "Deletes one rule groups namespace and its associated rule groups definition",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the rule groups namespace to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace containing the rule groups namespace and definition to delete",
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
      name: "delete-scraper",
      description:
        "The DeleteScraper operation deletes one scraper, and stops any metrics collection that the scraper performs",
      options: [
        {
          name: "--client-token",
          description:
            "(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--scraper-id",
          description: "The ID of the scraper to delete",
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
      name: "delete-workspace",
      description:
        "Deletes an existing workspace.   When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to delete",
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
      name: "describe-alert-manager-definition",
      description:
        "Retrieves the full information about the alert manager definition for a workspace",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to retrieve the alert manager definition from",
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
      name: "describe-logging-configuration",
      description:
        "Returns complete information about the current logging configuration of the workspace",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to describe the logging configuration for",
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
      name: "describe-rule-groups-namespace",
      description:
        "Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use ListRuleGroupsNamespaces",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule groups namespace that you want information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace containing the rule groups namespace",
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
      name: "describe-scraper",
      description:
        "The DescribeScraper operation displays information about an existing scraper",
      options: [
        {
          name: "--scraper-id",
          description: "The ID of the scraper to describe",
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
      name: "describe-workspace",
      description: "Returns information about an existing workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace to describe",
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
      name: "get-default-scraper-configuration",
      description:
        "The GetDefaultScraperConfiguration operation returns the default scraper configuration used when Amazon EKS creates a scraper for you",
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
      name: "list-rule-groups-namespaces",
      description: "Returns a list of rule groups namespaces in a workspace",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description:
            "Use this parameter to filter the rule groups namespaces that are returned. Only the namespaces with names that begin with the value that you specify are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call. For example, if your initial request has maxResults of 10, and there are 12 rule groups namespaces to return, then your initial request will return 10 and a nextToken. Using the next token in a subsequent call will return the remaining 2 namespaces",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace containing the rule groups namespaces",
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
      name: "list-scrapers",
      description:
        "The ListScrapers operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list",
      options: [
        {
          name: "--filters",
          description:
            "(Optional) A list of key-value pairs to filter the list of scrapers returned. Keys include status, sourceArn, destinationArn, and alias. Filters on the same key are OR'd together, and filters on different keys are AND'd together. For example, status=ACTIVE&status=CREATING&alias=Test, will return all scrapers that have the alias Test, and are either in status ACTIVE or CREATING. To find all active scrapers that are sending metrics to a specific Amazon Managed Service for Prometheus workspace, you would use the ARN of the workspace in a query:  status=ACTIVE&destinationArn=arn:aws:aps:us-east-1:123456789012:workspace/ws-example1-1234-abcd-56ef-123456789012  If this is included, it filters the results to only the scrapers that match the filter",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "Optional) The maximum number of scrapers to return in one ListScrapers operation. The range is 1-1000. If you omit this parameter, the default of 100 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) The token for the next set of items to return. (You received this token from a previous call.)",
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
      name: "list-tags-for-resource",
      description:
        "The ListTagsForResource operation returns the tags that are associated with an Amazon Managed Service for Prometheus resource. Currently, the only resources that can be tagged are scrapers, workspaces, and rule groups namespaces",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to list tages for. Must be a workspace, scraper, or rule groups namespace resource",
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
      name: "list-workspaces",
      description:
        "Lists all of the Amazon Managed Service for Prometheus workspaces in your account. This includes workspaces being created or deleted",
      options: [
        {
          name: "--alias",
          description:
            "If this is included, it filters the results to only the workspaces with names that start with the value that you specify here. Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of workspaces to return per request. The default is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call. For example, if your initial request has maxResults of 10, and there are 12 workspaces to return, then your initial request will return 10 and a nextToken. Using the next token in a subsequent call will return the remaining 2 workspaces",
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
      name: "put-alert-manager-definition",
      description:
        "Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use CreateAlertManagerDefinition",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The alert manager definition to use. A base64-encoded version of the YAML alert manager definition file. For details about the alert manager definition, see AlertManagedDefinitionData",
          args: {
            name: "blob",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to update the alert manager definition in",
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
      name: "put-rule-groups-namespace",
      description:
        "Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use CreateRuleGroupsNamespace. You can't use this operation to add tags to an existing rule groups namespace. Instead, use TagResource",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The new rules file to use in the namespace. A base64-encoded version of the YAML rule groups file. For details about the rule groups namespace structure, see RuleGroupsNamespaceData",
          args: {
            name: "blob",
          },
        },
        {
          name: "--name",
          description:
            "The name of the rule groups namespace that you are updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace where you are updating the rule groups namespace",
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
        "The TagResource operation associates tags with an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are rule groups namespaces, scrapers, and workspaces. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. To remove a tag, use UntagResource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to apply tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tag keys and values to associate with the resource. Keys must not begin with aws:",
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
        "Removes the specified tags from an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are rule groups namespaces, scrapers, and workspaces",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource from which to remove a tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to remove",
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
      name: "update-logging-configuration",
      description:
        "Updates the log group ARN or the workspace ID of the current logging configuration",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-arn",
          description:
            "The ARN of the CloudWatch log group to which the vended log data will be published",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to update the logging configuration for",
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
      name: "update-scraper",
      description:
        "Updates an existing scraper. You can't use this function to update the source from which the scraper is collecting metrics. To change the source, delete the scraper and create a new one",
      options: [
        {
          name: "--alias",
          description: "The new alias of the scraper",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The new Amazon Managed Service for Prometheus workspace to send metrics to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scrape-configuration",
          description:
            "Contains the base-64 encoded YAML configuration for the scraper.  For more information about configuring a scraper, see Using an Amazon Web Services managed collector in the Amazon Managed Service for Prometheus User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scraper-id",
          description: "The ID of the scraper to update",
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
      name: "update-workspace-alias",
      description: "Updates the alias of an existing workspace",
      options: [
        {
          name: "--alias",
          description:
            "The new alias for the workspace. It does not need to be unique. Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to update",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "scraper-active",
          description:
            "Wait until a scraper reaches ACTIVE status It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--scraper-id",
              description: "The ID of the scraper to describe",
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
          name: "scraper-deleted",
          description:
            "Wait until a scraper reaches DELETED status It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--scraper-id",
              description: "The ID of the scraper to describe",
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
          name: "workspace-active",
          description:
            "Wait until a workspace reaches ACTIVE status It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--workspace-id",
              description: "The ID of the workspace to describe",
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
          name: "workspace-deleted",
          description:
            "Wait until a workspace reaches DELETED status It will poll every 2 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--workspace-id",
              description: "The ID of the workspace to describe",
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
    },
  ],
};
export default completionSpec;
