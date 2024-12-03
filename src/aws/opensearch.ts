const completionSpec: Fig.Spec = {
  name: "opensearch",
  description:
    "Use the Amazon OpenSearch Service configuration API to create, configure, and manage OpenSearch Service domains. The endpoint for configuration service requests is Region specific: es.region.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported Regions and endpoints, see Amazon Web Services service endpoints",
  subcommands: [
    {
      name: "accept-inbound-connection",
      description:
        "Allows the destination Amazon OpenSearch Service domain owner to accept an inbound cross-cluster search connection request. For more information, see Cross-cluster search for Amazon OpenSearch Service",
      options: [
        {
          name: "--connection-id",
          description: "The ID of the inbound connection to accept",
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
      name: "add-data-source",
      description:
        "Creates a new direct-query data source to the specified domain. For more information, see Creating Amazon OpenSearch Service data source integrations with Amazon S3",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain to add the data source to",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-type",
          description: "The type of data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the data source",
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
      name: "add-direct-query-data-source",
      description:
        "Adds a new data source in Amazon OpenSearch Service so that you can perform direct queries on external data",
      options: [
        {
          name: "--data-source-name",
          description:
            "A unique, user-defined label to identify the data source within your OpenSearch Service environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-type",
          description:
            "The supported Amazon Web Services service that you want to use as the source for direct queries in OpenSearch Service",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "An optional text field for providing additional context and details about the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--open-search-arns",
          description:
            "A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated with the direct query data source",
          args: {
            name: "list",
          },
        },
        {
          name: "--tag-list",
          description: "A list of tags attached to a domain",
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
      name: "add-tags",
      description:
        "Attaches tags to an existing Amazon OpenSearch Service domain, data source, or application.  Tags are a set of case-sensitive key-value pairs. A domain, data source, or application can have up to 10 tags. For more information, see Tagging Amazon OpenSearch Service resources",
      options: [
        {
          name: "--arn",
          description:
            "Amazon Resource Name (ARN) for the OpenSearch Service domain, data source, or application to which you want to attach resource tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-list",
          description: "List of resource tags",
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
      name: "associate-package",
      description:
        "Associates a package with an Amazon OpenSearch Service domain. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-id",
          description:
            "Internal ID of the package to associate with a domain. Use DescribePackages to find this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "Name of the domain to associate the package with",
          args: {
            name: "string",
          },
        },
        {
          name: "--prerequisite-package-id-list",
          description:
            "A list of package IDs that must be associated with the domain before the package specified in the request can be associated",
          args: {
            name: "list",
          },
        },
        {
          name: "--association-configuration",
          description:
            "The configuration for associating a package with an Amazon OpenSearch Service domain",
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
      name: "associate-packages",
      description:
        "Operation in the Amazon OpenSearch Service API for associating multiple packages with a domain simultaneously",
      options: [
        {
          name: "--package-list",
          description:
            "A list of packages and their prerequisites to be associated with a domain",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-name",
          description:
            "The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region",
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
      name: "authorize-vpc-endpoint-access",
      description:
        "Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the OpenSearch Service domain to provide access to",
          args: {
            name: "string",
          },
        },
        {
          name: "--account",
          description: "The Amazon Web Services account ID to grant access to",
          args: {
            name: "string",
          },
        },
        {
          name: "--service",
          description: "The Amazon Web Services service SP to grant access to",
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
      name: "cancel-domain-config-change",
      description:
        "Cancels a pending configuration change on an Amazon OpenSearch Service domain",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run",
          description:
            "When set to True, returns the list of change IDs and properties that will be cancelled without actually cancelling the change",
        },
        {
          name: "--no-dry-run",
          description:
            "When set to True, returns the list of change IDs and properties that will be cancelled without actually cancelling the change",
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
      name: "cancel-service-software-update",
      description:
        "Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can only perform this operation before the AutomatedUpdateDate and when the domain's UpdateStatus is PENDING_UPDATE. For more information, see Service software updates in Amazon OpenSearch Service",
      options: [
        {
          name: "--domain-name",
          description:
            "Name of the OpenSearch Service domain that you want to cancel the service software update on",
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
      name: "create-application",
      description: "Creates an OpenSearch Application",
      options: [
        {
          name: "--client-token",
          description:
            "A unique client idempotency token. It will be auto generated if not provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "Name of the OpenSearch Appication to create. Application names are unique across the applications owned by an account within an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-sources",
          description:
            "Data sources to be associated with the OpenSearch Application",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-identity-center-options",
          description:
            "Settings of IAM Identity Center for the OpenSearch Application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--app-configs",
          description:
            "Configurations of the OpenSearch Application, inlcuding admin configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--tag-list",
          description: "A list of tags attached to a domain",
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
      name: "create-domain",
      description:
        "Creates an Amazon OpenSearch Service domain. For more information, see Creating and managing Amazon OpenSearch Service domains",
      options: [
        {
          name: "--domain-name",
          description:
            "Name of the OpenSearch Service domain to create. Domain names are unique across the domains owned by an account within an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the OpenSearch Service domain. For example, OpenSearch_1.0 or Elasticsearch_7.9. For more information, see Creating and managing Amazon OpenSearch Service domains",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-config",
          description: "Container for the cluster configuration of a domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ebs-options",
          description:
            "Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-policies",
          description:
            "Identity and Access Management (IAM) policy document specifying the access policies for the new domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address-type",
          description:
            "Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set your IP address type to dual stack, you can't change your address type later",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-options",
          description:
            "DEPRECATED. Container for the parameters required to configure automated snapshots of domain indexes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-options",
          description:
            "Container for the values required to configure VPC access domains. If you don't specify these values, OpenSearch Service creates the domain with a public endpoint. For more information, see Launching your Amazon OpenSearch Service domains using a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cognito-options",
          description:
            "Key-value pairs to configure Amazon Cognito authentication. For more information, see Configuring Amazon Cognito authentication for OpenSearch Dashboards",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-at-rest-options",
          description: "Key-value pairs to enable encryption at rest",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-to-node-encryption-options",
          description: "Enables node-to-node encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--advanced-options",
          description:
            'Key-value pairs to specify advanced configuration options. The following key-value pairs are supported:    "rest.action.multi.allow_explicit_index": "true" | "false" - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.    "indices.fielddata.cache.size": "80"  - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.    "indices.query.bool.max_clause_count": "1024" - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a TooManyClauses error.    "override_main_response_version": "true" | "false" - Note the use of a string rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow Elasticsearch OSS clients and plugins to continue working with it. Default is false when creating a domain and true when upgrading a domain.   For more information, see Advanced cluster parameters',
          args: {
            name: "map",
          },
        },
        {
          name: "--log-publishing-options",
          description: "Key-value pairs to configure log publishing",
          args: {
            name: "map",
          },
        },
        {
          name: "--domain-endpoint-options",
          description:
            "Additional options for the domain endpoint, such as whether to require HTTPS for all traffic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--advanced-security-options",
          description: "Options for fine-grained access control",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identity-center-options",
          description:
            "Options for IAM Identity Center Option control for the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-list",
          description: "List of tags to add to the domain upon creation",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-tune-options",
          description: "Options for Auto-Tune",
          args: {
            name: "structure",
          },
        },
        {
          name: "--off-peak-window-options",
          description:
            "Specifies a daily 10-hour time block during which OpenSearch Service can perform configuration changes on the domain, including service software updates and Auto-Tune enhancements that require a blue/green deployment. If no options are specified, the default start time of 10:00 P.M. local time (for the Region that the domain is created in) is used",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-update-options",
          description: "Software update options for the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--aiml-options",
          description:
            "Options for all machine learning features for the specified domain",
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
      name: "create-outbound-connection",
      description:
        "Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain to a destination domain. For more information, see Cross-cluster search for Amazon OpenSearch Service",
      options: [
        {
          name: "--local-domain-info",
          description: "Name and Region of the source (local) domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--remote-domain-info",
          description: "Name and Region of the destination (remote) domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--connection-alias",
          description: "Name of the connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-mode",
          description: "The connection mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-properties",
          description: "The ConnectionProperties for the outbound connection",
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
      name: "create-package",
      description:
        "Creates a package for use with Amazon OpenSearch Service domains. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-name",
          description: "Unique name for the package",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-type",
          description: "The type of package",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-description",
          description: "Description of the package",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-source",
          description:
            "The Amazon S3 location from which to import the package",
          args: {
            name: "structure",
          },
        },
        {
          name: "--package-configuration",
          description:
            "The configuration parameters for the package being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--engine-version",
          description:
            "The version of the Amazon OpenSearch Service engine for which is compatible with the package. This can only be specified for package type ZIP-PLUGIN",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-vending-options",
          description:
            "The vending options for the package being created. They determine if the package can be vended to other users",
          args: {
            name: "structure",
          },
        },
        {
          name: "--package-encryption-options",
          description:
            "The encryption parameters for the package being created",
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
      name: "create-vpc-endpoint",
      description: "Creates an Amazon OpenSearch Service-managed VPC endpoint",
      options: [
        {
          name: "--domain-arn",
          description:
            "The Amazon Resource Name (ARN) of the domain to create the endpoint for",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-options",
          description:
            "Options to specify the subnets and security groups for the endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive identifier to ensure idempotency of the request",
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
      name: "delete-application",
      description: "Deletes an existing OpenSearch Application",
      options: [
        {
          name: "--id",
          description:
            "Unique identifier for the OpenSearch Application that you want to delete",
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
      name: "delete-data-source",
      description:
        "Deletes a direct-query data source. For more information, see Deleting an Amazon OpenSearch Service data source with Amazon S3",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data source to delete",
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
      name: "delete-direct-query-data-source",
      description:
        "Deletes a previously configured direct query data source from Amazon OpenSearch Service",
      options: [
        {
          name: "--data-source-name",
          description:
            "A unique, user-defined label to identify the data source within your OpenSearch Service environment",
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
      name: "delete-domain",
      description:
        "Deletes an Amazon OpenSearch Service domain and all of its data. You can't recover a domain after you delete it",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain you want to permanently delete",
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
      name: "delete-inbound-connection",
      description:
        "Allows the destination Amazon OpenSearch Service domain owner to delete an existing inbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service",
      options: [
        {
          name: "--connection-id",
          description: "The ID of the inbound connection to permanently delete",
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
      name: "delete-outbound-connection",
      description:
        "Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service",
      options: [
        {
          name: "--connection-id",
          description:
            "The ID of the outbound connection you want to permanently delete",
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
      name: "delete-package",
      description:
        "Deletes an Amazon OpenSearch Service package. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-id",
          description:
            "The internal ID of the package you want to delete. Use DescribePackages to find this value",
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
      name: "delete-vpc-endpoint",
      description:
        "Deletes an Amazon OpenSearch Service-managed interface VPC endpoint",
      options: [
        {
          name: "--vpc-endpoint-id",
          description: "The unique identifier of the endpoint",
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
      name: "describe-domain",
      description:
        "Describes the domain configuration for the specified Amazon OpenSearch Service domain, including the domain ID, domain service endpoint, and domain ARN",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain that you want information about",
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
      name: "describe-domain-auto-tunes",
      description:
        "Returns the list of optimizations that Auto-Tune has made to an Amazon OpenSearch Service domain. For more information, see Auto-Tune for Amazon OpenSearch Service",
      options: [
        {
          name: "--domain-name",
          description:
            "Name of the domain that you want Auto-Tune details about",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial DescribeDomainAutoTunes operation returns a nextToken, you can include the returned nextToken in subsequent DescribeDomainAutoTunes operations, which returns results in the next page",
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
      name: "describe-domain-change-progress",
      description:
        "Returns information about the current blue/green deployment happening on an Amazon OpenSearch Service domain. For more information, see Making configuration changes in Amazon OpenSearch Service",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain to get progress information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-id",
          description:
            "The specific change ID for which you want to get progress information. If omitted, the request returns information about the most recent configuration change",
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
      name: "describe-domain-config",
      description:
        "Returns the configuration of an Amazon OpenSearch Service domain",
      options: [
        {
          name: "--domain-name",
          description:
            "Name of the OpenSearch Service domain configuration that you want to describe",
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
      name: "describe-domain-health",
      description:
        "Returns information about domain and node health, the standby Availability Zone, number of nodes per Availability Zone, and shard count per node",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
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
      name: "describe-domain-nodes",
      description:
        "Returns information about domain and nodes, including data nodes, master nodes, ultrawarm nodes, Availability Zone(s), standby nodes, node configurations, and node states",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
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
      name: "describe-domains",
      description:
        "Returns domain configuration information about the specified Amazon OpenSearch Service domains",
      options: [
        {
          name: "--domain-names",
          description:
            "Array of OpenSearch Service domain names that you want information about. You must specify at least one domain name",
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
      name: "describe-dry-run-progress",
      description:
        "Describes the progress of a pre-update dry run analysis on an Amazon OpenSearch Service domain. For more information, see Determining whether a change will cause a blue/green deployment",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--dry-run-id",
          description: "The unique identifier of the dry run",
          args: {
            name: "string",
          },
        },
        {
          name: "--load-dry-run-config",
          description:
            "Whether to include the configuration of the dry run in the response. The configuration specifies the updates that you're planning to make on the domain",
        },
        {
          name: "--no-load-dry-run-config",
          description:
            "Whether to include the configuration of the dry run in the response. The configuration specifies the updates that you're planning to make on the domain",
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
      name: "describe-inbound-connections",
      description:
        "Lists all the inbound cross-cluster search connections for a destination (remote) Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service",
      options: [
        {
          name: "--filters",
          description:
            "A list of filters used to match properties for inbound cross-cluster connections",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial DescribeInboundConnections operation returns a nextToken, you can include the returned nextToken in subsequent DescribeInboundConnections operations, which returns results in the next page",
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
      name: "describe-instance-type-limits",
      description:
        "Describes the instance count, storage, and master node limits for a given OpenSearch or Elasticsearch version and instance type",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain. Only specify if you need the limits for an existing domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "The OpenSearch Service instance type for which you need limit information",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-version",
          description:
            "Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch",
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
      name: "describe-outbound-connections",
      description:
        "Lists all the outbound cross-cluster connections for a local (source) Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service",
      options: [
        {
          name: "--filters",
          description:
            "List of filter names and values that you can use for requests",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial DescribeOutboundConnections operation returns a nextToken, you can include the returned nextToken in subsequent DescribeOutboundConnections operations, which returns results in the next page",
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
      name: "describe-packages",
      description:
        "Describes all packages available to OpenSearch Service. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--filters",
          description:
            "Only returns packages that match the DescribePackagesFilterList values",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial DescribePackageFilters operation returns a nextToken, you can include the returned nextToken in subsequent DescribePackageFilters operations, which returns results in the next page",
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
      name: "describe-reserved-instance-offerings",
      description:
        "Describes the available Amazon OpenSearch Service Reserved Instance offerings for a given Region. For more information, see Reserved Instances in Amazon OpenSearch Service",
      options: [
        {
          name: "--reserved-instance-offering-id",
          description:
            "The Reserved Instance identifier filter value. Use this parameter to show only the available instance types that match the specified reservation identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial DescribeReservedInstanceOfferings operation returns a nextToken, you can include the returned nextToken in subsequent DescribeReservedInstanceOfferings operations, which returns results in the next page",
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
      name: "describe-reserved-instances",
      description:
        "Describes the Amazon OpenSearch Service instances that you have reserved in a given Region. For more information, see Reserved Instances in Amazon OpenSearch Service",
      options: [
        {
          name: "--reserved-instance-id",
          description:
            "The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved OpenSearch instance ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial DescribeReservedInstances operation returns a nextToken, you can include the returned nextToken in subsequent DescribeReservedInstances operations, which returns results in the next page",
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
      name: "describe-vpc-endpoints",
      description:
        "Describes one or more Amazon OpenSearch Service-managed VPC endpoints",
      options: [
        {
          name: "--vpc-endpoint-ids",
          description:
            "The unique identifiers of the endpoints to get information about",
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
      name: "dissociate-package",
      description:
        "Removes a package from the specified Amazon OpenSearch Service domain. The package can't be in use with any OpenSearch index for the dissociation to succeed. The package is still available in OpenSearch Service for association later. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-id",
          description:
            "Internal ID of the package to dissociate from the domain. Use ListPackagesForDomain to find this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "Name of the domain to dissociate the package from",
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
      name: "dissociate-packages",
      description: "Dissociates multiple packages from a domain simulatneously",
      options: [
        {
          name: "--package-list",
          description: "A list of package IDs to be dissociated from a domain",
          args: {
            name: "list",
          },
        },
        {
          name: "--domain-name",
          description:
            "The name of an OpenSearch Service domain. Domain names are unique across the domains owned by an account within an Amazon Web Services Region",
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
      name: "get-application",
      description:
        "Check the configuration and status of an existing OpenSearch Application",
      options: [
        {
          name: "--id",
          description:
            "Unique identifier of the checked OpenSearch Application",
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
      name: "get-compatible-versions",
      description:
        "Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of an existing domain. Provide this parameter to limit the results to a single domain",
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
      name: "get-data-source",
      description: "Retrieves information about a direct query data source",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data source to get information about",
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
      name: "get-direct-query-data-source",
      description:
        "Returns detailed configuration information for a specific direct query data source in Amazon OpenSearch Service",
      options: [
        {
          name: "--data-source-name",
          description:
            "A unique, user-defined label that identifies the data source within your OpenSearch Service environment",
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
      name: "get-domain-maintenance-status",
      description: "The status of the maintenance action",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--maintenance-id",
          description: "The request ID of the maintenance action",
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
      name: "get-package-version-history",
      description:
        "Returns a list of Amazon OpenSearch Service package versions, along with their creation time, commit message, and plugin properties (if the package is a zip plugin package). For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-id",
          description: "The unique identifier of the package",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial GetPackageVersionHistory operation returns a nextToken, you can include the returned nextToken in subsequent GetPackageVersionHistory operations, which returns results in the next page",
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
      name: "get-upgrade-history",
      description:
        "Retrieves the complete history of the last 10 upgrades performed on an Amazon OpenSearch Service domain",
      options: [
        {
          name: "--domain-name",
          description: "The name of an existing domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial GetUpgradeHistory operation returns a nextToken, you can include the returned nextToken in subsequent GetUpgradeHistory operations, which returns results in the next page",
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
      name: "get-upgrade-status",
      description:
        "Returns the most recent status of the last upgrade or upgrade eligibility check performed on an Amazon OpenSearch Service domain",
      options: [
        {
          name: "--domain-name",
          description:
            "The domain of the domain to get upgrade status information for",
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
      name: "list-applications",
      description: "List all OpenSearch Applications under your account",
      options: [
        {
          name: "--next-token",
          description:
            "When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--statuses",
          description:
            "OpenSearch Application Status can be used as filters for the listing request. Possible values are CREATING, UPDATING, DELETING, FAILED, ACTIVE, and DELETED",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return for a given request",
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
      name: "list-data-sources",
      description:
        "Lists direct-query data sources for a specific domain. For more information, see For more information, see Working with Amazon OpenSearch Service direct queries with Amazon S3",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
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
      name: "list-direct-query-data-sources",
      description:
        "Lists an inventory of all the direct query data sources that you have configured within Amazon OpenSearch Service",
      options: [
        {
          name: "--next-token",
          description:
            "When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page",
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
      name: "list-domain-maintenances",
      description: "A list of maintenance actions for the domain",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description: "The name of the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListDomainMaintenances operation returns a nextToken, include the returned nextToken in subsequent ListDomainMaintenances operations, which returns results in the next page",
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
      name: "list-domain-names",
      description:
        "Returns the names of all Amazon OpenSearch Service domains owned by the current user in the active Region",
      options: [
        {
          name: "--engine-type",
          description: "Filters the output by domain engine type",
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
      name: "list-domains-for-package",
      description:
        "Lists all Amazon OpenSearch Service domains associated with a given package. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-id",
          description:
            "The unique identifier of the package for which to list associated domains",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListDomainsForPackage operation returns a nextToken, you can include the returned nextToken in subsequent ListDomainsForPackage operations, which returns results in the next page",
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
      name: "list-instance-type-details",
      description:
        "Lists all instance types and available features for a given OpenSearch or Elasticsearch version",
      options: [
        {
          name: "--engine-version",
          description:
            "The version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListInstanceTypeDetails operation returns a nextToken, you can include the returned nextToken in subsequent ListInstanceTypeDetails operations, which returns results in the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--retrieve-azs",
          description:
            "An optional parameter that specifies the Availability Zones for the domain",
        },
        {
          name: "--no-retrieve-azs",
          description:
            "An optional parameter that specifies the Availability Zones for the domain",
        },
        {
          name: "--instance-type",
          description:
            "An optional parameter that lists information for a given instance type",
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
      name: "list-packages-for-domain",
      description:
        "Lists all packages associated with an Amazon OpenSearch Service domain. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain for which you want to list associated packages",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListPackagesForDomain operation returns a nextToken, you can include the returned nextToken in subsequent ListPackagesForDomain operations, which returns results in the next page",
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
      name: "list-scheduled-actions",
      description:
        "Retrieves a list of configuration changes that are scheduled for a domain. These changes can be service software updates or blue/green Auto-Tune enhancements",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListScheduledActions operation returns a nextToken, you can include the returned nextToken in subsequent ListScheduledActions operations, which returns results in the next page",
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
      name: "list-tags",
      description:
        "Returns all resource tags for an Amazon OpenSearch Service domain, data source, or application. For more information, see Tagging Amazon OpenSearch Service resources",
      options: [
        {
          name: "--arn",
          description:
            "Amazon Resource Name (ARN) for the domain, data source, or application to view tags for",
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
      name: "list-versions",
      description:
        "Lists all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service supports",
      options: [
        {
          name: "--max-results",
          description:
            "An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListVersions operation returns a nextToken, you can include the returned nextToken in subsequent ListVersions operations, which returns results in the next page",
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
      name: "list-vpc-endpoint-access",
      description:
        "Retrieves information about each Amazon Web Services principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the OpenSearch Service domain to retrieve access information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListVpcEndpointAccess operation returns a nextToken, you can include the returned nextToken in subsequent ListVpcEndpointAccess operations, which returns results in the next page",
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
      name: "list-vpc-endpoints",
      description:
        "Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current Amazon Web Services account and Region",
      options: [
        {
          name: "--next-token",
          description:
            "If your initial ListVpcEndpoints operation returns a nextToken, you can include the returned nextToken in subsequent ListVpcEndpoints operations, which returns results in the next page",
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
      name: "list-vpc-endpoints-for-domain",
      description:
        "Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain to list associated VPC endpoints for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If your initial ListEndpointsForDomain operation returns a nextToken, you can include the returned nextToken in subsequent ListEndpointsForDomain operations, which returns results in the next page",
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
      name: "purchase-reserved-instance-offering",
      description:
        "Allows you to purchase Amazon OpenSearch Service Reserved Instances",
      options: [
        {
          name: "--reserved-instance-offering-id",
          description: "The ID of the Reserved Instance offering to purchase",
          args: {
            name: "string",
          },
        },
        {
          name: "--reservation-name",
          description:
            "A customer-specified identifier to track this reservation",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-count",
          description: "The number of OpenSearch instances to reserve",
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
      name: "reject-inbound-connection",
      description:
        "Allows the remote Amazon OpenSearch Service domain owner to reject an inbound cross-cluster connection request",
      options: [
        {
          name: "--connection-id",
          description:
            "The unique identifier of the inbound connection to reject",
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
      name: "remove-tags",
      description:
        "Removes the specified set of tags from an Amazon OpenSearch Service domain, data source, or application. For more information, see  Tagging Amazon OpenSearch Service resources",
      options: [
        {
          name: "--arn",
          description:
            "The Amazon Resource Name (ARN) of the domain, data source, or application from which you want to delete the specified tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The list of tag keys to remove from the domain, data source, or application",
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
      name: "revoke-vpc-endpoint-access",
      description:
        "Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint",
      options: [
        {
          name: "--domain-name",
          description: "The name of the OpenSearch Service domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--account",
          description: "The account ID to revoke access from",
          args: {
            name: "string",
          },
        },
        {
          name: "--service",
          description: "The service SP to revoke access from",
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
      name: "start-domain-maintenance",
      description:
        "Starts the node maintenance process on the data node. These processes can include a node reboot, an Opensearch or Elasticsearch process restart, or a Dashboard or Kibana restart",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description: "The name of the action",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-id",
          description: "The ID of the data node",
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
      name: "start-service-software-update",
      description:
        "Schedules a service software update for an Amazon OpenSearch Service domain. For more information, see Service software updates in Amazon OpenSearch Service",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain that you want to update to the latest service software",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-at",
          description:
            "When to start the service software update.    NOW - Immediately schedules the update to happen in the current hour if there's capacity available.    TIMESTAMP - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for DesiredStartTime.    OFF_PEAK_WINDOW - Marks the update to be picked up during an upcoming off-peak window. There's no guarantee that the update will happen during the next immediate window. Depending on capacity, it might happen in subsequent days.   Default: NOW if you don't specify a value for DesiredStartTime, and TIMESTAMP if you do",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-start-time",
          description:
            "The Epoch timestamp when you want the service software update to start. You only need to specify this parameter if you set ScheduleAt to TIMESTAMP",
          args: {
            name: "long",
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
      name: "update-application",
      description: "Update the OpenSearch Application",
      options: [
        {
          name: "--id",
          description:
            "Unique identifier of the OpenSearch Application to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-sources",
          description:
            "Data sources to be associated with the OpenSearch Application",
          args: {
            name: "list",
          },
        },
        {
          name: "--app-configs",
          description:
            "Configurations to be changed for the OpenSearch Application",
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
      name: "update-data-source",
      description:
        "Updates a direct-query data source. For more information, see Working with Amazon OpenSearch Service data source integrations with Amazon S3",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data source to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-type",
          description: "The type of data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A new description of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the data source update",
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
      name: "update-direct-query-data-source",
      description:
        "Updates the configuration or properties of an existing direct query data source in Amazon OpenSearch Service",
      options: [
        {
          name: "--data-source-name",
          description:
            "A unique, user-defined label to identify the data source within your OpenSearch Service environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-type",
          description:
            "The supported Amazon Web Services service that you want to use as the source for direct queries in OpenSearch Service",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "An optional text field for providing additional context and details about the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--open-search-arns",
          description:
            "A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated with the direct query data source",
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
      name: "update-domain-config",
      description:
        "Modifies the cluster configuration of the specified Amazon OpenSearch Service domain",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster-config",
          description:
            "Changes that you want to make to the cluster configuration, such as the instance type and number of EC2 instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ebs-options",
          description:
            "The type and size of the EBS volume to attach to instances in the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--snapshot-options",
          description:
            "Option to set the time, in UTC format, for the daily automated snapshot. Default value is 0 hours",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-options",
          description:
            "Options to specify the subnets and security groups for a VPC endpoint. For more information, see Launching your Amazon OpenSearch Service domains using a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cognito-options",
          description:
            "Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards",
          args: {
            name: "structure",
          },
        },
        {
          name: "--advanced-options",
          description:
            'Key-value pairs to specify advanced configuration options. The following key-value pairs are supported:    "rest.action.multi.allow_explicit_index": "true" | "false" - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true.    "indices.fielddata.cache.size": "80"  - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded.    "indices.query.bool.max_clause_count": "1024" - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a TooManyClauses error.   For more information, see Advanced cluster parameters',
          args: {
            name: "map",
          },
        },
        {
          name: "--access-policies",
          description:
            "Identity and Access Management (IAM) access policy as a JSON-formatted string",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address-type",
          description:
            "Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If your IP address type is currently set to dual stack, you can't change it",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-publishing-options",
          description:
            "Options to publish OpenSearch logs to Amazon CloudWatch Logs",
          args: {
            name: "map",
          },
        },
        {
          name: "--encryption-at-rest-options",
          description: "Encryption at rest options for the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--domain-endpoint-options",
          description:
            "Additional options for the domain endpoint, such as whether to require HTTPS for all traffic",
          args: {
            name: "structure",
          },
        },
        {
          name: "--node-to-node-encryption-options",
          description: "Node-to-node encryption options for the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--advanced-security-options",
          description: "Options for fine-grained access control",
          args: {
            name: "structure",
          },
        },
        {
          name: "--identity-center-options",
          description: "Container for IAM Identity Center Options settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-tune-options",
          description: "Options for Auto-Tune",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "This flag, when set to True, specifies whether the UpdateDomain request should return the results of a dry run analysis without actually applying the change. A dry run determines what type of deployment the update will cause",
        },
        {
          name: "--no-dry-run",
          description:
            "This flag, when set to True, specifies whether the UpdateDomain request should return the results of a dry run analysis without actually applying the change. A dry run determines what type of deployment the update will cause",
        },
        {
          name: "--dry-run-mode",
          description:
            "The type of dry run to perform.    Basic only returns the type of deployment (blue/green or dynamic) that the update will cause.    Verbose runs an additional check to validate the changes you're making. For more information, see Validating a domain update",
          args: {
            name: "string",
          },
        },
        {
          name: "--off-peak-window-options",
          description: "Off-peak window options for the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-update-options",
          description: "Service software update options for the domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--aiml-options",
          description:
            "Options for all machine learning features for the specified domain",
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
      name: "update-package",
      description:
        "Updates a package for use with Amazon OpenSearch Service domains. For more information, see Custom packages for Amazon OpenSearch Service",
      options: [
        {
          name: "--package-id",
          description: "The unique identifier for the package",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-source",
          description: "Amazon S3 bucket and key for the package",
          args: {
            name: "structure",
          },
        },
        {
          name: "--package-description",
          description: "A new description of the package",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-message",
          description:
            "Commit message for the updated file, which is shown as part of GetPackageVersionHistoryResponse",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-configuration",
          description: "The updated configuration details for a package",
          args: {
            name: "structure",
          },
        },
        {
          name: "--package-encryption-options",
          description: "Encryption options for a package",
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
      name: "update-package-scope",
      description:
        "Updates the scope of a package. Scope of the package defines users who can view and associate a package",
      options: [
        {
          name: "--package-id",
          description: "ID of the package whose scope is being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation",
          description:
            "The operation to perform on the package scope (e.g., add/remove/override users)",
          args: {
            name: "string",
          },
        },
        {
          name: "--package-user-list",
          description:
            "List of users to be added or removed from the package scope",
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
      name: "update-scheduled-action",
      description:
        "Reschedules a planned domain configuration change for a later time. This change can be a scheduled service software update or a blue/green Auto-Tune enhancement",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain to reschedule an action for",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-id",
          description:
            "The unique identifier of the action to reschedule. To retrieve this ID, send a ListScheduledActions request",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-type",
          description:
            "The type of action to reschedule. Can be one of SERVICE_SOFTWARE_UPDATE, JVM_HEAP_SIZE_TUNING, or JVM_YOUNG_GEN_TUNING. To retrieve this value, send a ListScheduledActions request",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-at",
          description:
            "When to schedule the action.    NOW - Immediately schedules the update to happen in the current hour if there's capacity available.    TIMESTAMP - Lets you specify a custom date and time to apply the update. If you specify this value, you must also provide a value for DesiredStartTime.    OFF_PEAK_WINDOW - Marks the action to be picked up during an upcoming off-peak window. There's no guarantee that the change will be implemented during the next immediate window. Depending on capacity, it might happen in subsequent days",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-start-time",
          description:
            "The time to implement the change, in Coordinated Universal Time (UTC). Only specify this parameter if you set ScheduleAt to TIMESTAMP",
          args: {
            name: "long",
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
      name: "update-vpc-endpoint",
      description:
        "Modifies an Amazon OpenSearch Service-managed interface VPC endpoint",
      options: [
        {
          name: "--vpc-endpoint-id",
          description: "The unique identifier of the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-options",
          description:
            "The security groups and/or subnets to add, remove, or modify",
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
      name: "upgrade-domain",
      description:
        "Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade eligibility check to a compatible version of OpenSearch or Elasticsearch",
      options: [
        {
          name: "--domain-name",
          description:
            "Name of the OpenSearch Service domain that you want to upgrade",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-version",
          description:
            "OpenSearch or Elasticsearch version to which you want to upgrade, in the format Opensearch_X.Y or Elasticsearch_X.Y",
          args: {
            name: "string",
          },
        },
        {
          name: "--perform-check-only",
          description:
            "When true, indicates that an upgrade eligibility check needs to be performed. Does not actually perform the upgrade",
        },
        {
          name: "--no-perform-check-only",
          description:
            "When true, indicates that an upgrade eligibility check needs to be performed. Does not actually perform the upgrade",
        },
        {
          name: "--advanced-options",
          description:
            "Only supports the override_main_response_version parameter and not other advanced options. You can only include this option when upgrading to an OpenSearch version. Specifies whether the domain reports its version as 7.10 so that it continues to work with Elasticsearch OSS clients and plugins",
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
  ],
};
export default completionSpec;
