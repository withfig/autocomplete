const completionSpec: Fig.Spec = {
  name: "route53",
  description:
    "Amazon Route\u00a053 is a highly available and scalable Domain Name System (DNS) web service. You can use Route\u00a053 to:   Register domain names. For more information, see How domain registration works.   Route internet traffic to the resources for your domain For more information, see How internet traffic is routed to your website or web application.   Check the health of your resources. For more information, see How Route\u00a053 checks the health of your resources",
  subcommands: [
    {
      name: "activate-key-signing-key",
      description:
        "Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the KSK status to ACTIVE",
      options: [
        {
          name: "--hosted-zone-id",
          description: "A unique string used to identify a hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A string used to identify a key-signing key (KSK). Name can include numbers, letters, and underscores (_). Name must be unique for each key-signing key in the same hosted zone",
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
      name: "associate-vpc-with-hosted-zone",
      description:
        "Associates an Amazon VPC with a private hosted zone.   To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone.   If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a CreateVPCAssociationAuthorization request. Then the account that created the VPC must submit an AssociateVPCWithHostedZone request.   When granting access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions:    aws - Amazon Web Services Regions    aws-cn - China Regions    aws-us-gov - Amazon Web Services GovCloud (US) Region   For more information, see Access Management in the Amazon Web Services General Reference",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the private hosted zone that you want to associate an Amazon VPC with. Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "A complex type that contains information about the VPC that you want to associate with a private hosted zone",
          args: {
            name: "structure",
          },
        },
        {
          name: "--comment",
          description: "Optional: A comment about the association request",
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
      name: "change-cidr-collection",
      description:
        "Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative IP information mapping blocks to one or multiple locations. A change request can update multiple locations in a collection at a time, which is helpful if you want to move one or more CIDR blocks from one location to another in one transaction, without downtime.   Limits  The max number of CIDR blocks included in the request is 1000. As a result, big updates require multiple API calls.   PUT and DELETE_IF_EXISTS  Use ChangeCidrCollection to perform the following actions:    PUT: Create a CIDR block within the specified collection.     DELETE_IF_EXISTS: Delete an existing CIDR block from the collection",
      options: [
        {
          name: "--id",
          description: "The UUID of the CIDR collection to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--collection-version",
          description:
            "A sequential counter that Amazon Route\u00a053 sets to 1 when you create a collection and increments it by 1 each time you update the collection. We recommend that you use ListCidrCollection to get the current value of CollectionVersion for the collection that you want to update, and then include that value with the change request. This prevents Route\u00a053 from overwriting an intervening update:    If the value in the request matches the value of CollectionVersion in the collection, Route\u00a053 updates the collection.   If the value of CollectionVersion in the collection is greater than the value in the request, the collection was changed after you got the version number. Route\u00a053 does not update the collection, and it returns a CidrCollectionVersionMismatch error",
          args: {
            name: "long",
          },
        },
        {
          name: "--changes",
          description: "Information about changes to a CIDR collection",
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
      name: "change-resource-record-sets",
      description:
        "Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use ChangeResourceRecordSets to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.  Deleting Resource Record Sets  To delete a resource record set, you must specify all the same values that you specified when you created it.  Change Batches and Transactional Changes  The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. Route 53 validates the changes in the request and then either makes all or none of the changes in the change batch request. This ensures that DNS routing isn't adversely affected by partial changes to the resource record sets in a hosted zone.  For example, suppose a change batch request contains two changes: it deletes the CNAME resource record set for www.example.com and creates an alias resource record set for www.example.com. If validation for both records succeeds, Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If validation for either the DELETE or the CREATE action fails, then the request is canceled, and the original CNAME record continues to exist.  If you try to delete the same resource record set more than once in a single change batch, Route 53 returns an InvalidChangeBatch error.   Traffic Flow  To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide.  Create, Delete, and Upsert  Use ChangeResourceRecordsSetsRequest to perform the following actions:    CREATE: Creates a resource record set that has the specified values.    DELETE: Deletes an existing resource record set that has the specified values.    UPSERT: If a resource set doesn't exist, Route 53 creates it. If a resource set exists Route 53 updates it with the values in the request.     Syntaxes for Creating, Updating, and Deleting Resource Record Sets  The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax.  For an example for each type of resource record set, see \"Examples.\" Don't refer to the syntax in the \"Parameter Syntax\" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using ChangeResourceRecordSets.   Change Propagation to Route 53 DNS Servers  When you submit a ChangeResourceRecordSets request, Route 53 propagates your changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While your changes are propagating, GetChange returns a status of PENDING. When propagation is complete, GetChange returns a status of INSYNC. Changes generally propagate to all Route 53 name servers managing the hosted zone within 60 seconds. For more information, see GetChange.  Limits on ChangeResourceRecordSets Requests  For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that contains the resource record sets that you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-batch",
          description:
            "A complex type that contains an optional comment and the Changes element",
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
      name: "change-tags-for-resource",
      description:
        "Adds, edits, or deletes tags for a health check or a hosted zone. For information about using tags for cost allocation, see Using Cost Allocation Tags in the Billing and Cost Management User Guide",
      options: [
        {
          name: "--resource-type",
          description:
            "The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the resource for which you want to add, change, or delete tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-tags",
          description:
            "A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit Value for. You can add a maximum of 10 tags to a health check or a hosted zone",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-tag-keys",
          description:
            "A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys",
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
      name: "create-cidr-collection",
      description:
        "Creates a CIDR collection in the current Amazon Web Services account",
      options: [
        {
          name: "--name",
          description:
            "A unique identifier for the account that can be used to reference the collection from other API calls",
          args: {
            name: "string",
          },
        },
        {
          name: "--caller-reference",
          description:
            "A client-specific token that allows requests to be securely retried so that the intended outcome will only occur once, retries receive a similar response, and there are no additional edge cases to handle",
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
      name: "create-health-check",
      description:
        "Creates a new health check. For information about adding health checks to resource record sets, see HealthCheckId in ChangeResourceRecordSets.   ELB Load Balancers  If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check.  Private Hosted Zones  You can associate health checks with failover resource record sets in a private hosted zone. Note the following:   Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.   You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.   You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 StatusCheckFailed metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the Amazon CloudWatch User Guide",
      options: [
        {
          name: "--caller-reference",
          description:
            "A unique string that identifies the request and that allows you to retry a failed CreateHealthCheck request without the risk of creating two identical health checks:   If you send a CreateHealthCheck request with the same CallerReference and settings as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist, Route 53 returns the settings for the existing health check.   If you send a CreateHealthCheck request with the same CallerReference as a deleted health check, regardless of the settings, Route 53 returns a HealthCheckAlreadyExists error.   If you send a CreateHealthCheck request with the same CallerReference as an existing health check but with different settings, Route 53 returns a HealthCheckAlreadyExists error.   If you send a CreateHealthCheck request with a unique CallerReference but settings identical to an existing health check, Route 53 creates the health check.    Route 53 does not store the CallerReference for a deleted health check indefinitely. The CallerReference for a deleted health check will be deleted after a number of days",
          args: {
            name: "string",
          },
        },
        {
          name: "--health-check-config",
          description:
            "A complex type that contains settings for a new health check",
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
      name: "create-hosted-zone",
      description:
        "Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs).   You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.  For more information about charges for hosted zones, see Amazon Route\u00a053 Pricing. Note the following:   You can't create a hosted zone for a top-level domain (TLD) such as .com.   For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Route\u00a053 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide. If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the DelegationSetId element.   If your domain is registered with a registrar other than Route\u00a053, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see Migrating DNS Service for an Existing Domain to Amazon Route\u00a053 in the Amazon Route 53 Developer Guide.    When you submit a CreateHostedZone request, the initial status of the hosted zone is PENDING. For public hosted zones, this means that the NS and SOA records are not yet available on all Route\u00a053 DNS servers. When the NS and SOA records are available, the status of the zone changes to INSYNC. The CreateHostedZone request requires the caller to have an ec2:DescribeVpcs permission.  When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions:    aws - Amazon Web Services Regions    aws-cn - China Regions    aws-us-gov - Amazon Web Services GovCloud (US) Region   For more information, see Access Management in the Amazon Web Services General Reference",
      options: [
        {
          name: "--name",
          description:
            "The name of the domain. Specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route\u00a053 assumes that the domain name is fully qualified. This means that Route\u00a053 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route\u00a053, change the name servers for your domain to the set of NameServers that CreateHostedZone returns in DelegationSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "(Private hosted zones only) A complex type that contains information about the Amazon VPC that you're associating with this hosted zone. You can specify only one Amazon VPC when you create a private hosted zone. If you are associating a VPC with a hosted zone with this request, the paramaters VPCId and VPCRegion are also required. To associate additional Amazon VPCs with the hosted zone, use AssociateVPCWithHostedZone after you create a hosted zone",
          args: {
            name: "structure",
          },
        },
        {
          name: "--caller-reference",
          description:
            "A unique string that identifies the request and that allows failed CreateHostedZone requests to be retried without the risk of executing the operation twice. You must use a unique CallerReference string every time you submit a CreateHostedZone request. CallerReference can be any unique string, for example, a date/time stamp",
          args: {
            name: "string",
          },
        },
        {
          name: "--hosted-zone-config",
          description:
            "(Optional) A complex type that contains the following optional values:   For public and private hosted zones, an optional comment   For private hosted zones, an optional PrivateZone element   If you don't specify a comment or the PrivateZone element, omit HostedZoneConfig and the other elements",
          args: {
            name: "structure",
          },
        },
        {
          name: "--delegation-set-id",
          description:
            "If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route\u00a053 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see CreateReusableDelegationSet. If you are using a reusable delegation set to create a public hosted zone for a subdomain, make sure that the parent hosted zone doesn't use one or more of the same name servers. If you have overlapping nameservers, the operation will cause a ConflictingDomainsExist error",
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
      name: "create-key-signing-key",
      description:
        "Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone",
      options: [
        {
          name: "--caller-reference",
          description: "A unique string that identifies the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--hosted-zone-id",
          description: "The unique string (ID) used to identify a hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-management-service-arn",
          description:
            'The Amazon resource name (ARN) for a customer managed key in Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key-signing key (KSK) in a single hosted zone. To see an example of KeyManagementServiceArn that grants the correct permissions for DNSSEC, scroll down to Example.  You must configure the customer managed customer managed key as follows:  Status  Enabled  Key spec  ECC_NIST_P256  Key usage  Sign and verify  Key policy  The key policy must give permission for the following actions:   DescribeKey   GetPublicKey   Sign   The key policy must also include the Amazon Route 53 service in the principal for your account. Specify the following:    "Service": "dnssec-route53.amazonaws.com"      For more information about working with a customer managed key in KMS, see Key Management Service concepts',
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A string used to identify a key-signing key (KSK). Name can include numbers, letters, and underscores (_). Name must be unique for each key-signing key in the same hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "A string specifying the initial status of the key-signing key (KSK). You can set the value to ACTIVE or INACTIVE",
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
      name: "create-query-logging-config",
      description:
        "Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group. DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:   Route 53 edge location that responded to the DNS query   Domain or subdomain that was requested   DNS record type, such as A or AAAA   DNS response code, such as NoError or ServFail     Log Group and Resource Policy  Before you create a query logging configuration, perform the following operations.  If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.    Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:   You must create the log group in the us-east-1 region.   You must use the same Amazon Web Services account to create the log group and the hosted zone that you want to configure query logging for.   When you create log groups for query logging, we recommend that you use a consistent prefix, for example:  /aws/route53/hosted zone name   In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated Amazon Web Services resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.     Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example:  arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*  To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values:   For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID.   For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111.   For more information, see The confused deputy problem in the Amazon Web Services IAM User Guide.  You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the Amazon Web Services SDKs, or the CLI.     Log Streams and Edge Locations  When Route 53 finishes creating the configuration for DNS query logging, it does the following:   Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.   Begins to send query logs to the applicable log stream.   The name of each log stream is in the following format:   hosted zone ID/edge location code   The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see \"The Route 53 Global Network\" on the Route 53 Product Details page.  Queries That Are Logged  Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide.  Log File Format  For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide.  Pricing  For information about charges for query logs, see Amazon CloudWatch Pricing.  How to Stop Logging  If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-log-group-arn",
          description:
            "The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN: arn:aws:logs:region:account-id:log-group:log_group_name  To get the ARN for a log group, you can use the CloudWatch console, the DescribeLogGroups API action, the describe-log-groups command, or the applicable command in one of the Amazon Web Services SDKs",
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
      name: "create-reusable-delegation-set",
      description:
        "Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by the same Amazon Web Services account.  You can also create a reusable delegation set that uses the four name servers that are associated with an existing hosted zone. Specify the hosted zone ID in the CreateReusableDelegationSet request.  You can't associate a reusable delegation set with a private hosted zone.  For information about using a reusable delegation set to configure white label name servers, see Configuring White Label Name Servers. The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps:   Create a reusable delegation set.   Recreate hosted zones, and reduce the TTL to 60 seconds or less.   Recreate resource record sets in the new hosted zones.   Change the registrar's name servers to use the name servers for the new hosted zones.   Monitor traffic for the website or application.   Change TTLs back to their original values.   If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following:   For small numbers of hosted zones\u2014up to a few hundred\u2014it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones.   For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.   For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set",
      options: [
        {
          name: "--caller-reference",
          description:
            "A unique string that identifies the request, and that allows you to retry failed CreateReusableDelegationSet requests without the risk of executing the operation twice. You must use a unique CallerReference string every time you submit a CreateReusableDelegationSet request. CallerReference can be any unique string, for example a date/time stamp",
          args: {
            name: "string",
          },
        },
        {
          name: "--hosted-zone-id",
          description:
            "If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone",
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
      name: "create-traffic-policy",
      description:
        "Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com)",
      options: [
        {
          name: "--name",
          description: "The name of the traffic policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--document",
          description:
            "The definition of this traffic policy in JSON format. For more information, see Traffic Policy Document Format",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "(Optional) Any comments that you want to include about the traffic policy",
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
      name: "create-traffic-policy-instance",
      description:
        "Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created.  After you submit an CreateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. Use GetTrafficPolicyInstance with the id of new traffic policy instance to confirm that the CreateTrafficPolicyInstance request completed successfully. For more information, see the State response element",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--ttl",
          description:
            "(Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone",
          args: {
            name: "long",
          },
        },
        {
          name: "--traffic-policy-id",
          description:
            "The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version",
          description:
            "The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone",
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
      name: "create-traffic-policy-version",
      description:
        "Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy",
      options: [
        {
          name: "--id",
          description:
            "The ID of the traffic policy for which you want to create a new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--document",
          description:
            "The definition of this version of the traffic policy, in JSON format. You specified the JSON in the CreateTrafficPolicyVersion request. For more information about the JSON format, see CreateTrafficPolicy",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "The comment that you specified in the CreateTrafficPolicyVersion request, if any",
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
      name: "create-vpc-association-authorization",
      description:
        "Authorizes the Amazon Web Services account that created a specified VPC to submit an AssociateVPCWithHostedZone request to associate the VPC with a specified hosted zone that was created by a different account. To submit a CreateVPCAssociationAuthorization request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an AssociateVPCWithHostedZone request.  If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the private hosted zone that you want to authorize associating a VPC with",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "A complex type that contains the VPC ID and region for the VPC that you want to authorize associating with your hosted zone",
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
      name: "deactivate-key-signing-key",
      description:
        "Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the KSK status to INACTIVE",
      options: [
        {
          name: "--hosted-zone-id",
          description: "A unique string used to identify a hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A string used to identify a key-signing key (KSK)",
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
      name: "delete-cidr-collection",
      description:
        "Deletes a CIDR collection in the current Amazon Web Services account. The collection must be empty before it can be deleted",
      options: [
        {
          name: "--id",
          description: "The UUID of the collection to delete",
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
      name: "delete-health-check",
      description:
        "Deletes a health check.  Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see Replacing and Deleting Health Checks in the Amazon Route 53 Developer Guide.  If you're using Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance, you can't use the Route 53 DeleteHealthCheck command to delete the health check. The health check is deleted automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted from Route 53",
      options: [
        {
          name: "--health-check-id",
          description: "The ID of the health check that you want to delete",
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
      name: "delete-hosted-zone",
      description:
        'Deletes a hosted zone. If the hosted zone was created by another service, such as Cloud Map, see Deleting Public Hosted Zones That Were Created by Another Service in the Amazon Route\u00a053 Developer Guide for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.) If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.  If you delete a hosted zone, you can\'t undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name.  If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route\u00a053, see UpdateDomainNameservers for information about how to replace Route\u00a053 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service." You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route\u00a053 returns a HostedZoneNotEmpty error. For information about deleting records from your hosted zone, see ChangeResourceRecordSets. To verify that the hosted zone has been deleted, do one of the following:   Use the GetHostedZone action to request information about the hosted zone.   Use the ListHostedZones action to get a list of the hosted zones associated with the current Amazon Web Services account',
      options: [
        {
          name: "--id",
          description: "The ID of the hosted zone you want to delete",
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
      name: "delete-key-signing-key",
      description:
        "Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing. You can use DeactivateKeySigningKey to deactivate the key before you delete it. Use GetDNSSEC to verify that the KSK is in an INACTIVE status",
      options: [
        {
          name: "--hosted-zone-id",
          description: "A unique string used to identify a hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A string used to identify a key-signing key (KSK)",
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
      name: "delete-query-logging-config",
      description:
        "Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn't delete any logs that are already in CloudWatch Logs. For more information about DNS query logs, see CreateQueryLoggingConfig",
      options: [
        {
          name: "--id",
          description: "The ID of the configuration that you want to delete",
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
      name: "delete-reusable-delegation-set",
      description:
        "Deletes a reusable delegation set.  You can delete a reusable delegation set only if it isn't associated with any hosted zones.  To verify that the reusable delegation set is not associated with any hosted zones, submit a GetReusableDelegationSet request and specify the ID of the reusable delegation set that you want to delete",
      options: [
        {
          name: "--id",
          description:
            "The ID of the reusable delegation set that you want to delete",
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
      name: "delete-traffic-policy",
      description:
        "Deletes a traffic policy. When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the following:   Deleted traffic policies aren't listed if you run ListTrafficPolicies.    There's no way to get a list of deleted policies.   If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running GetTrafficPolicy",
      options: [
        {
          name: "--id",
          description: "The ID of the traffic policy that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version",
          description:
            "The version number of the traffic policy that you want to delete",
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
      name: "delete-traffic-policy-instance",
      description:
        "Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.  In the Route 53 console, traffic policy instances are known as policy records",
      options: [
        {
          name: "--id",
          description:
            "The ID of the traffic policy instance that you want to delete.   When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance",
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
      name: "delete-vpc-association-authorization",
      description:
        "Removes authorization to submit an AssociateVPCWithHostedZone request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a DeleteVPCAssociationAuthorization request.  Sending this request only prevents the Amazon Web Services account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, DeleteVPCAssociationAuthorization won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use DisassociateVPCFromHostedZone",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account, the ID of the hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account, a complex type that includes the ID and region of the VPC",
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
      name: "disable-hosted-zone-dnssec",
      description:
        "Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs) that are active in the hosted zone",
      options: [
        {
          name: "--hosted-zone-id",
          description: "A unique string used to identify a hosted zone",
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
      name: "disassociate-vpc-from-hosted-zone",
      description:
        "Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:   You can't disassociate the last Amazon VPC from a private hosted zone.   You can't convert a private hosted zone into a public hosted zone.   You can submit a DisassociateVPCFromHostedZone request using either the account that created the hosted zone or the account that created the Amazon VPC.   Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account. You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account. When you run DisassociateVPCFromHostedZone, if the hosted zone has a value for OwningAccount, you can use DisassociateVPCFromHostedZone. If the hosted zone has a value for OwningService, you can't use DisassociateVPCFromHostedZone.    When revoking access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions:    aws - Amazon Web Services Regions    aws-cn - China Regions    aws-us-gov - Amazon Web Services GovCloud (US) Region   For more information, see Access Management in the Amazon Web Services General Reference",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the private hosted zone that you want to disassociate a VPC from",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc",
          description:
            "A complex type that contains information about the VPC that you're disassociating from the specified hosted zone",
          args: {
            name: "structure",
          },
        },
        {
          name: "--comment",
          description: "Optional: A comment about the disassociation request",
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
      name: "enable-hosted-zone-dnssec",
      description: "Enables DNSSEC signing in a specific hosted zone",
      options: [
        {
          name: "--hosted-zone-id",
          description: "A unique string used to identify a hosted zone",
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
      name: "get-account-limit",
      description:
        "Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account. For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case.  You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to the Amazon Web Services Management Console and open the Trusted Advisor console at https://console.aws.amazon.com/trustedadvisor/. Then choose Service limits in the navigation pane",
      options: [
        {
          name: "--type",
          description:
            "The limit that you want to get. Valid values include the following:    MAX_HEALTH_CHECKS_BY_OWNER: The maximum number of health checks that you can create using the current account.    MAX_HOSTED_ZONES_BY_OWNER: The maximum number of hosted zones that you can create using the current account.    MAX_REUSABLE_DELEGATION_SETS_BY_OWNER: The maximum number of reusable delegation sets that you can create using the current account.    MAX_TRAFFIC_POLICIES_BY_OWNER: The maximum number of traffic policies that you can create using the current account.    MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)",
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
      name: "get-change",
      description:
        "Returns the current status of a change batch request. The status is one of the following values:    PENDING indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all change batch requests.    INSYNC indicates that the changes have propagated to all Route 53 DNS servers managing the hosted zone",
      options: [
        {
          name: "--id",
          description:
            "The ID of the change batch request. The value that you specify here is the value that ChangeResourceRecordSets returned in the Id element when you submitted the request",
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
      name: "get-checker-ip-ranges",
      description:
        "Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.   GetCheckerIpRanges still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all Amazon Web Services services. For more information, see IP Address Ranges of Amazon Route 53 Servers in the Amazon Route 53 Developer Guide",
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
      name: "get-dnssec",
      description:
        "Returns information about DNSSEC for a specific hosted zone, including the key-signing keys (KSKs) in the hosted zone",
      options: [
        {
          name: "--hosted-zone-id",
          description: "A unique string used to identify a hosted zone",
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
      name: "get-geo-location",
      description:
        "Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. Use the following syntax to determine whether a continent is supported for geolocation:  GET /2013-04-01/geolocation?continentcode=two-letter abbreviation for a continent   Use the following syntax to determine whether a country is supported for geolocation:  GET /2013-04-01/geolocation?countrycode=two-character country code   Use the following syntax to determine whether a subdivision of a country is supported for geolocation:  GET /2013-04-01/geolocation?countrycode=two-character country code&subdivisioncode=subdivision code",
      options: [
        {
          name: "--continent-code",
          description:
            "For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Amazon Route 53 supports the following continent codes:    AF: Africa    AN: Antarctica    AS: Asia    EU: Europe    OC: Oceania    NA: North America    SA: South America",
          args: {
            name: "string",
          },
        },
        {
          name: "--country-code",
          description:
            "Amazon Route 53 uses the two-letter country codes that are specified in ISO standard 3166-1 alpha-2. Route 53 also supports the country code UA for Ukraine",
          args: {
            name: "string",
          },
        },
        {
          name: "--subdivision-code",
          description:
            "The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see Appendix B: Two\u2013Letter State and Possession Abbreviations on the United States Postal Service website. For a list of all supported subdivision codes, use the ListGeoLocations API",
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
      name: "get-health-check",
      description: "Gets information about a specified health check",
      options: [
        {
          name: "--health-check-id",
          description:
            "The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long",
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
      name: "get-health-check-count",
      description:
        "Retrieves the number of health checks that are associated with the current Amazon Web Services account",
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
      name: "get-health-check-last-failure-reason",
      description:
        "Gets the reason that a specified health check failed most recently",
      options: [
        {
          name: "--health-check-id",
          description:
            "The ID for the health check for which you want the last failure reason. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.  If you want to get the last failure reason for a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use GetHealthCheckLastFailureReason for a calculated health check",
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
      name: "get-health-check-status",
      description:
        "Gets status of a specified health check.   This API is intended for use during development to diagnose behavior. It doesn\u2019t support production use-cases with high query rates that require immediate and actionable responses",
      options: [
        {
          name: "--health-check-id",
          description:
            "The ID for the health check that you want the current status for. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element.  If you want to check the status of a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use GetHealthCheckStatus to get the status of a calculated health check",
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
      name: "get-hosted-zone",
      description:
        "Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.   returns the VPCs associated with the specified hosted zone and does not reflect the VPC associations by Route 53 Profiles. To get the associations to a Profile, call the ListProfileAssociations API",
      options: [
        {
          name: "--id",
          description:
            "The ID of the hosted zone that you want to get information about",
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
      name: "get-hosted-zone-count",
      description:
        "Retrieves the number of hosted zones that are associated with the current Amazon Web Services account",
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
      name: "get-hosted-zone-limit",
      description:
        "Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone.  For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case",
      options: [
        {
          name: "--type",
          description:
            "The limit that you want to get. Valid values include the following:    MAX_RRSETS_BY_ZONE: The maximum number of records that you can create in the specified hosted zone.    MAX_VPCS_ASSOCIATED_BY_ZONE: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that you want to get a limit for",
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
      name: "get-query-logging-config",
      description:
        "Gets information about a specified configuration for DNS query logging. For more information about DNS query logs, see CreateQueryLoggingConfig and Logging DNS Queries",
      options: [
        {
          name: "--id",
          description:
            "The ID of the configuration for DNS query logging that you want to get information about",
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
      name: "get-reusable-delegation-set",
      description:
        "Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set",
      options: [
        {
          name: "--id",
          description:
            "The ID of the reusable delegation set that you want to get a list of name servers for",
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
      name: "get-reusable-delegation-set-limit",
      description:
        "Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set. For the default limit, see Limits in the Amazon Route 53 Developer Guide. To request a higher limit, open a case",
      options: [
        {
          name: "--type",
          description:
            "Specify MAX_ZONES_BY_REUSABLE_DELEGATION_SET to get the maximum number of hosted zones that you can associate with the specified reusable delegation set",
          args: {
            name: "string",
          },
        },
        {
          name: "--delegation-set-id",
          description:
            "The ID of the delegation set that you want to get the limit for",
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
      name: "get-traffic-policy",
      description:
        "Gets information about a specific traffic policy version. For information about how of deleting a traffic policy affects the response from GetTrafficPolicy, see DeleteTrafficPolicy",
      options: [
        {
          name: "--id",
          description:
            "The ID of the traffic policy that you want to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version",
          description:
            "The version number of the traffic policy that you want to get information about",
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
      name: "get-traffic-policy-instance",
      description:
        "Gets information about a specified traffic policy instance.   Use GetTrafficPolicyInstance with the id of new traffic policy instance to confirm that the CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request completed successfully. For more information, see the State response element.   In the Route 53 console, traffic policy instances are known as policy records",
      options: [
        {
          name: "--id",
          description:
            "The ID of the traffic policy instance that you want to get information about",
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
      name: "get-traffic-policy-instance-count",
      description:
        "Gets the number of traffic policy instances that are associated with the current Amazon Web Services account",
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
      name: "list-cidr-blocks",
      description:
        "Returns a paginated list of location objects and their CIDR blocks",
      options: [
        {
          name: "--collection-id",
          description: "The UUID of the CIDR collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--location-name",
          description: "The name of the CIDR collection location",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token to indicate where the service is to begin enumerating results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results you want returned",
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
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-cidr-collections",
      description:
        "Returns a paginated list of CIDR collections in the Amazon Web Services account (metadata only)",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token to indicate where the service is to begin enumerating results. If no value is provided, the listing of results starts from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of CIDR collections to return in the response",
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
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-cidr-locations",
      description:
        "Returns a paginated list of CIDR locations for the given collection (metadata only, does not include CIDR blocks)",
      options: [
        {
          name: "--collection-id",
          description: "The CIDR collection ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token to indicate where the service is to begin enumerating results. If no value is provided, the listing of results starts from the beginning",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of CIDR collection locations to return in the response",
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
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-geo-locations",
      description:
        "Retrieves a list of supported geographic locations. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country. Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. For a list of supported geolocation codes, see the GeoLocation data type",
      options: [
        {
          name: "--start-continent-code",
          description:
            "The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextContinentCode from the previous response has a value, enter that value in startcontinentcode to return the next page of results. Include startcontinentcode only if you want to list continents. Don't include startcontinentcode when you're listing countries or countries with their subdivisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-country-code",
          description:
            "The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextCountryCode from the previous response has a value, enter that value in startcountrycode to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-subdivision-code",
          description:
            "The code for the state of the United States with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextSubdivisionCode from the previous response has a value, enter that value in startsubdivisioncode to return the next page of results. To list subdivisions (U.S. states), you must include both startcountrycode and startsubdivisioncode",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "(Optional) The maximum number of geolocations to be included in the response body for this request. If more than maxitems geolocations remain to be listed, then the value of the IsTruncated element in the response is true",
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
      name: "list-health-checks",
      description:
        "Retrieve a list of the health checks that are associated with the current Amazon Web Services account",
      options: [
        {
          name: "--marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more health checks. To get another group, submit another ListHealthChecks request.  For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first health check that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more health checks to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
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
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-hosted-zones",
      description:
        "Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account. The response includes a HostedZones child element for each hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100",
      options: [
        {
          name: "--marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more hosted zones. To get more hosted zones, submit another ListHostedZones request.  For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more hosted zones to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--delegation-set-id",
          description:
            "If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set",
          args: {
            name: "string",
          },
        },
        {
          name: "--hosted-zone-type",
          description: "(Optional) Specifies if the hosted zone is private",
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
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-hosted-zones-by-name",
      description:
        "Retrieves a list of your hosted zones in lexicographic order. The response includes a HostedZones child element for each hosted zone created by the current Amazon Web Services account.   ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example:  com.example.www.  Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for ex\u00e4mple.com, you specify ex\\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as:  com.ex\\344mple.  The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next:   The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response.   The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response.   If the value of IsTruncated in the response is true, there are more hosted zones associated with the current Amazon Web Services account.  If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response.   The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively",
      options: [
        {
          name: "--dns-name",
          description:
            "(Optional) For your first request to ListHostedZonesByName, include the dnsname parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the dnsname parameter, Amazon Route 53 returns all of the hosted zones that were created by the current Amazon Web Services account, in ASCII order. For subsequent requests, include both dnsname and hostedzoneid parameters. For dnsname, specify the value of NextDNSName from the previous response",
          args: {
            name: "string",
          },
        },
        {
          name: "--hosted-zone-id",
          description:
            "(Optional) For your first request to ListHostedZonesByName, do not include the hostedzoneid parameter. If you have more hosted zones than the value of maxitems, ListHostedZonesByName returns only the first maxitems hosted zones. To get the next group of maxitems hosted zones, submit another request to ListHostedZonesByName and include both dnsname and hostedzoneid parameters. For the value of hostedzoneid, specify the value of the NextHostedZoneId element from the previous response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The maximum number of hosted zones to be included in the response body for this request. If you have more than maxitems hosted zones, then the value of the IsTruncated element in the response is true, and the values of NextDNSName and NextHostedZoneId specify the first hosted zone in the next group of maxitems hosted zones",
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
      name: "list-hosted-zones-by-vpc",
      description:
        "Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account or Amazon Web Services service owns the hosted zones. The HostedZoneOwner structure in the response contains one of the following values:   An OwningAccount element, which contains the account number of either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create hosted zones using the current account.    An OwningService element, which identifies the Amazon Web Services service that created and owns the hosted zone. For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of Owner is efs.amazonaws.com.     ListHostedZonesByVPC returns the hosted zones associated with the specified VPC and does not reflect the hosted zone associations to VPCs via Route 53 Profiles. To get the associations to a Profile, call the ListProfileResourceAssociations API.  When listing private hosted zones, the hosted zone and the Amazon VPC must belong to the same partition where the hosted zones were created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions:    aws - Amazon Web Services Regions    aws-cn - China Regions    aws-us-gov - Amazon Web Services GovCloud (US) Region   For more information, see Access Management in the Amazon Web Services General Reference",
      options: [
        {
          name: "--vpc-id",
          description:
            "The ID of the Amazon VPC that you want to list hosted zones for",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-region",
          description:
            "For the Amazon VPC that you specified for VPCId, the Amazon Web Services Region that you created the VPC in",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If the specified VPC is associated with more than MaxItems hosted zones, the response includes a NextToken element. NextToken contains an encrypted token that identifies the first hosted zone that Route 53 will return if you submit another request",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response included a NextToken element, the specified VPC is associated with more hosted zones. To get more hosted zones, submit another ListHostedZonesByVPC request.  For the value of NextToken, specify the value of NextToken from the previous response. If the previous response didn't include a NextToken element, there are no more hosted zones to get",
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
      name: "list-query-logging-configs",
      description:
        "Lists the configurations for DNS query logging that are associated with the current Amazon Web Services account or the configuration that is associated with a specified hosted zone. For more information about DNS query logs, see CreateQueryLoggingConfig. Additional information, including the format of DNS query logs, appears in Logging DNS Queries in the Amazon Route 53 Developer Guide",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "(Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in HostedZoneId.  If you don't specify a hosted zone ID, ListQueryLoggingConfigs returns all of the configurations that are associated with the current Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) If the current Amazon Web Services account has more than MaxResults query logging configurations, use NextToken to get the second and subsequent pages of results. For the first ListQueryLoggingConfigs request, omit this value. For the second and subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "(Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request. If the current Amazon Web Services account has more than MaxResults configurations, use the value of NextToken in the response to get the next page of results. If you don't specify a value for MaxResults, Route 53 returns up to 100 configurations",
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
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-resource-record-sets",
      description:
        "Lists the resource record sets in a specified hosted zone.  ListResourceRecordSets returns up to 300 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements.  Sort order   ListResourceRecordSets sorts results first by DNS name with the labels reversed, for example:  com.example.www.  Note the trailing dot, which can change the sort order when the record name contains characters that appear before . (decimal 46) in the ASCII table. These characters include the following: ! \" # $ % & ' ( ) * + , -  When multiple records have the same DNS name, ListResourceRecordSets sorts results by the record type.  Specifying where to start listing records  You can use the name and type elements to specify the resource record set that the list begins with:  If you do not specify Name or Type  The results begin with the first resource record set that the hosted zone contains.  If you specify Name but not Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name.  If you specify Type but not Name  Amazon Route 53 returns the InvalidInput error.  If you specify both Name and Type  The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type.    Resource record sets that are PENDING  This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Route 53 DNS servers.  Changing resource record sets  To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.  Displaying the next page of results  If a ListResourceRecordSets command returns more than one page of results, the value of IsTruncated is true. To display the next page of results, get the values of NextRecordName, NextRecordType, and NextRecordIdentifier (if any) from the response. Then submit another ListResourceRecordSets request, and specify those values for StartRecordName, StartRecordType, and StartRecordIdentifier",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that contains the resource record sets that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-record-name",
          description:
            "The first name in the lexicographic ordering of resource record sets that you want to list. If the specified record name doesn't exist, the results begin with the first resource record set that has a name greater than the value of name",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-record-type",
          description:
            "The type of resource record set to begin the record listing from. Valid values for basic resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT  Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT  Values for alias resource record sets:     API Gateway custom regional API or edge-optimized API: A    CloudFront distribution: A or AAAA    Elastic Beanstalk environment that has a regionalized subdomain: A    Elastic Load Balancing load balancer: A | AAAA    S3 bucket: A    VPC interface VPC endpoint: A    Another resource record set in this hosted zone: The type of the resource record set that the alias references.   Constraint: Specifying type without specifying name returns an InvalidInput error",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-record-identifier",
          description:
            "Resource record sets that have a routing policy other than simple: If results were truncated for a given DNS name and type, specify the value of NextRecordIdentifier from the previous response to get the next resource record set that has the current DNS name and type",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
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
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-reusable-delegation-sets",
      description:
        "Retrieves a list of the reusable delegation sets that are associated with the current Amazon Web Services account",
      options: [
        {
          name: "--marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more reusable delegation sets. To get another group, submit another ListReusableDelegationSets request.  For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more reusable delegation sets to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value greater than 100, Route 53 returns only the first 100 reusable delegation sets",
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
        "Lists tags for one health check or hosted zone.  For information about using tags for cost allocation, see Using Cost Allocation Tags in the Billing and Cost Management User Guide",
      options: [
        {
          name: "--resource-type",
          description:
            "The type of the resource.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the resource for which you want to retrieve tags",
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
      name: "list-tags-for-resources",
      description:
        "Lists tags for up to 10 health checks or hosted zones. For information about using tags for cost allocation, see Using Cost Allocation Tags in the Billing and Cost Management User Guide",
      options: [
        {
          name: "--resource-type",
          description:
            "The type of the resources.   The resource type for health checks is healthcheck.   The resource type for hosted zones is hostedzone",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-ids",
          description:
            "A complex type that contains the ResourceId element for each resource for which you want to get a list of tags",
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
      name: "list-traffic-policies",
      description:
        "Gets information about the latest version for every traffic policy that is associated with the current Amazon Web Services account. Policies are listed in the order that they were created in.  For information about how of deleting a traffic policy affects the response from ListTrafficPolicies, see DeleteTrafficPolicy",
      options: [
        {
          name: "--traffic-policy-id-marker",
          description:
            "(Conditional) For your first request to ListTrafficPolicies, don't include the TrafficPolicyIdMarker parameter. If you have more traffic policies than the value of MaxItems, ListTrafficPolicies returns only the first MaxItems traffic policies. To get the next group of policies, submit another request to ListTrafficPolicies. For the value of TrafficPolicyIdMarker, specify the value of TrafficPolicyIdMarker that was returned in the previous response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "(Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than MaxItems traffic policies, the value of IsTruncated in the response is true, and the value of TrafficPolicyIdMarker is the ID of the first traffic policy that Route 53 will return if you submit another request",
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
      name: "list-traffic-policy-instances",
      description:
        "Gets information about the traffic policy instances that you created by using the current Amazon Web Services account.  After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100",
      options: [
        {
          name: "--hosted-zone-id-marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of HostedZoneId, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-instance-name-marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-instance-type-marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a ListTrafficPolicyInstances request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in the next group of MaxItems traffic policy instances",
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
      name: "list-traffic-policy-instances-by-hosted-zone",
      description:
        "Gets information about the traffic policy instances that you created in a specified hosted zone.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that you want to list traffic policy instances for",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-instance-name-marker",
          description:
            "If the value of IsTruncated in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-instance-type-marker",
          description:
            "If the value of IsTruncated in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance that Amazon Route 53 will return if you submit another request",
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
      name: "list-traffic-policy-instances-by-policy",
      description:
        "Gets information about the traffic policy instances that you created by using a specify traffic policy version.  After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element.  Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100",
      options: [
        {
          name: "--traffic-policy-id",
          description:
            "The ID of the traffic policy for which you want to list traffic policy instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version",
          description:
            "The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by TrafficPolicyId",
          args: {
            name: "integer",
          },
        },
        {
          name: "--hosted-zone-id-marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request.  For the value of hostedzoneid, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-instance-name-marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-instance-type-marker",
          description:
            "If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance that Amazon Route 53 will return if you submit another request",
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
      name: "list-traffic-policy-versions",
      description:
        "Gets information about all of the versions for a specified traffic policy. Traffic policy versions are listed in numerical order by VersionNumber",
      options: [
        {
          name: "--id",
          description:
            "Specify the value of Id of the traffic policy for which you want to list all versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version-marker",
          description:
            "For your first request to ListTrafficPolicyVersions, don't include the TrafficPolicyVersionMarker parameter. If you have more traffic policy versions than the value of MaxItems, ListTrafficPolicyVersions returns only the first group of MaxItems versions. To get more traffic policy versions, submit another ListTrafficPolicyVersions request. For the value of TrafficPolicyVersionMarker, specify the value of TrafficPolicyVersionMarker in the previous response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than MaxItems versions, the value of IsTruncated in the response is true, and the value of the TrafficPolicyVersionMarker element is the ID of the first version that Route 53 will return if you submit another request",
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
      name: "list-vpc-association-authorizations",
      description:
        "Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more CreateVPCAssociationAuthorization requests.  The response includes a VPCs element with a VPC child element for each VPC that can be associated with the hosted zone",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Optional: If a response includes a NextToken element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of NextToken from the response in the nexttoken parameter in another ListVPCAssociationAuthorizations request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Optional: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for MaxResults, Route 53 returns up to 50 VPCs per page",
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
      name: "test-dns-answer",
      description:
        "Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask.  This call only supports querying public hosted zones.  The TestDnsAnswer  returns information similar to what you would expect from the answer section of the dig command. Therefore, if you query for the name servers of a subdomain that point to the parent name servers, those will not be returned",
      options: [
        {
          name: "--hosted-zone-id",
          description:
            "The ID of the hosted zone that you want Amazon Route 53 to simulate a query for",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-name",
          description:
            "The name of the resource record set that you want Amazon Route 53 to simulate a query for",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-type",
          description: "The type of the resource record set",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolver-ip",
          description:
            "If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, TestDnsAnswer uses the IP address of a DNS resolver in the Amazon Web Services US East (N. Virginia) Region (us-east-1)",
          args: {
            name: "string",
          },
        },
        {
          name: "--edns0-client-subnet-ip",
          description:
            "If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client in the applicable location, for example, 192.0.2.44 or 2001:db8:85a3::8a2e:370:7334",
          args: {
            name: "string",
          },
        },
        {
          name: "--edns0-client-subnet-mask",
          description:
            "If you specify an IP address for edns0clientsubnetip, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify 192.0.2.44 for edns0clientsubnetip and 24 for edns0clientsubnetmask, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses. The range of valid values depends on whether edns0clientsubnetip is an IPv4 or an IPv6 address:    IPv4: Specify a value between 0 and 32    IPv6: Specify a value between 0 and 128",
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
      name: "update-health-check",
      description:
        "Updates an existing health check. Note that some values can't be updated.  For more information about updating health checks, see Creating, Updating, and Deleting Health Checks in the Amazon Route 53 Developer Guide",
      options: [
        {
          name: "--health-check-id",
          description:
            "The ID for the health check for which you want detailed information. When you created the health check, CreateHealthCheck returned the ID in the response, in the HealthCheckId element",
          args: {
            name: "string",
          },
        },
        {
          name: "--health-check-version",
          description:
            "A sequential counter that Amazon Route 53 sets to 1 when you create a health check and increments by 1 each time you update settings for the health check. We recommend that you use GetHealthCheck or ListHealthChecks to get the current value of HealthCheckVersion for the health check that you want to update, and that you include that value in your UpdateHealthCheck request. This prevents Route 53 from overwriting an intervening update:   If the value in the UpdateHealthCheck request matches the value of HealthCheckVersion in the health check, Route 53 updates the health check with the new settings.   If the value of HealthCheckVersion in the health check is greater, the health check was changed after you got the version number. Route 53 does not update the health check, and it returns a HealthCheckVersionMismatch error",
          args: {
            name: "long",
          },
        },
        {
          name: "--ip-address",
          description:
            "The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for IPAddress, Route 53 sends a DNS request to resolve the domain name that you specify in FullyQualifiedDomainName at the interval that you specify in RequestInterval. Using an IP address that is returned by DNS, Route 53 then checks the health of the endpoint. Use one of the following formats for the value of IPAddress:     IPv4 address: four values between 0 and 255, separated by periods (.), for example, 192.0.2.44.    IPv6 address: eight groups of four hexadecimal values, separated by colons (:), for example, 2001:0db8:85a3:0000:0000:abcd:0001:2345. You can also shorten IPv6 addresses as described in RFC 5952, for example, 2001:db8:85a3::abcd:1:2345.   If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for IPAddress. This ensures that the IP address of your instance never changes. For more information, see the applicable documentation:   Linux: Elastic IP Addresses (EIP) in the Amazon EC2 User Guide for Linux Instances    Windows: Elastic IP Addresses (EIP) in the Amazon EC2 User Guide for Windows Instances     If a health check already has a value for IPAddress, you can change the value. However, you can't update an existing health check to add or remove the value of IPAddress.   For more information, see FullyQualifiedDomainName.  Constraints: Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can't create health checks, see the following documents:    RFC 5735, Special Use IPv4 Addresses     RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space     RFC 5156, Special-Use IPv6 Addresses",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description:
            "The port on the endpoint that you want Amazon Route 53 to perform health checks on.  Don't specify a value for Port when you specify a value for Type of CLOUDWATCH_METRIC or CALCULATED",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-path",
          description:
            "The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html. You can also include query string parameters, for example, /welcome.html?language=jp&login=y.  Specify this value only if you want to change it",
          args: {
            name: "string",
          },
        },
        {
          name: "--fully-qualified-domain-name",
          description:
            "Amazon Route 53 behavior depends on whether you specify a value for IPAddress.  If a health check already has a value for IPAddress, you can change the value. However, you can't update an existing health check to add or remove the value of IPAddress.    If you specify a value for IPAddress: Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of FullyQualifiedDomainName in the Host header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks. When Route 53 checks the health of an endpoint, here is how it constructs the Host header:   If you specify a value of 80 for Port and HTTP or HTTP_STR_MATCH for Type, Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify a value of 443 for Port and HTTPS or HTTPS_STR_MATCH for Type, Route 53 passes the value of FullyQualifiedDomainName to the endpoint in the Host header.   If you specify another value for Port and any value except TCP for Type, Route 53 passes  FullyQualifiedDomainName:Port  to the endpoint in the Host header.   If you don't specify a value for FullyQualifiedDomainName, Route 53 substitutes the value of IPAddress in the Host header in each of the above cases.  If you don't specify a value for IPAddress: If you don't specify a value for IPAddress, Route 53 sends a DNS request to the domain that you specify in FullyQualifiedDomainName at the interval you specify in RequestInterval. Using an IPv4 address that is returned by DNS, Route 53 then checks the health of the endpoint. If you don't specify a value for IPAddress, you can\u2019t update the health check to remove the FullyQualifiedDomainName; if you don\u2019t specify a value for IPAddress on creation, a FullyQualifiedDomainName is required.  If you don't specify a value for IPAddress, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for FullyQualifiedDomainName, the health check fails with a \"DNS resolution failed\" error.  If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by FullyQualifiedDomainName, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com).  In this configuration, if the value of FullyQualifiedDomainName matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.  In addition, if the value of Type is HTTP, HTTPS, HTTP_STR_MATCH, or HTTPS_STR_MATCH, Route 53 passes the value of FullyQualifiedDomainName in the Host header, as it does when you specify a value for IPAddress. If the value of Type is TCP, Route 53 doesn't pass a Host header",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-string",
          description:
            "If the value of Type is HTTP_STR_MATCH or HTTPS_STR_MATCH, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy. (You can't change the value of Type when you update a health check.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--failure-threshold",
          description:
            "The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the Amazon Route 53 Developer Guide. If you don't specify a value for FailureThreshold, the default value is three health checks",
          args: {
            name: "integer",
          },
        },
        {
          name: "--inverted",
          description:
            "Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy",
        },
        {
          name: "--no-inverted",
          description:
            "Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy",
        },
        {
          name: "--disabled",
          description:
            "Stops Route 53 from performing health checks. When you disable a health check, here's what happens:    Health checks that check the health of endpoints: Route 53 stops submitting requests to your application, server, or other resource.    Calculated health checks: Route 53 stops aggregating the status of the referenced health checks.    Health checks that monitor CloudWatch alarms: Route 53 stops monitoring the corresponding CloudWatch metrics.   After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of Inverted.  Charges for a health check still apply when the health check is disabled. For more information, see Amazon Route 53 Pricing",
        },
        {
          name: "--no-disabled",
          description:
            "Stops Route 53 from performing health checks. When you disable a health check, here's what happens:    Health checks that check the health of endpoints: Route 53 stops submitting requests to your application, server, or other resource.    Calculated health checks: Route 53 stops aggregating the status of the referenced health checks.    Health checks that monitor CloudWatch alarms: Route 53 stops monitoring the corresponding CloudWatch metrics.   After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of Inverted.  Charges for a health check still apply when the health check is disabled. For more information, see Amazon Route 53 Pricing",
        },
        {
          name: "--health-threshold",
          description:
            "The number of child health checks that are associated with a CALCULATED health that Amazon Route 53 must consider healthy for the CALCULATED health check to be considered healthy. To specify the child health checks that you want to associate with a CALCULATED health check, use the ChildHealthChecks and ChildHealthCheck elements. Note the following:   If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.   If you specify 0, Route 53 always considers this health check to be healthy",
          args: {
            name: "integer",
          },
        },
        {
          name: "--child-health-checks",
          description:
            "A complex type that contains one ChildHealthCheck element for each health check that you want to associate with a CALCULATED health check",
          args: {
            name: "list",
          },
        },
        {
          name: "--enable-sni",
          description:
            "Specify whether you want Amazon Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate. Some endpoints require that HTTPS requests include the host name in the client_hello message. If you don't enable SNI, the status of the health check will be SSL alert handshake_failure. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid. The SSL/TLS certificate on your endpoint includes a domain name in the Common Name field and possibly several more in the Subject Alternative Names field. One of the domain names in the certificate should match the value that you specify for FullyQualifiedDomainName. If the endpoint responds to the client_hello message with a certificate that does not include the domain name that you specified in FullyQualifiedDomainName, a health checker will retry the handshake. In the second attempt, the health checker will omit FullyQualifiedDomainName from the client_hello message",
        },
        {
          name: "--no-enable-sni",
          description:
            "Specify whether you want Amazon Route 53 to send the value of FullyQualifiedDomainName to the endpoint in the client_hello message during TLS negotiation. This allows the endpoint to respond to HTTPS health check requests with the applicable SSL/TLS certificate. Some endpoints require that HTTPS requests include the host name in the client_hello message. If you don't enable SNI, the status of the health check will be SSL alert handshake_failure. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid. The SSL/TLS certificate on your endpoint includes a domain name in the Common Name field and possibly several more in the Subject Alternative Names field. One of the domain names in the certificate should match the value that you specify for FullyQualifiedDomainName. If the endpoint responds to the client_hello message with a certificate that does not include the domain name that you specified in FullyQualifiedDomainName, a health checker will retry the handshake. In the second attempt, the health checker will omit FullyQualifiedDomainName from the client_hello message",
        },
        {
          name: "--regions",
          description:
            "A complex type that contains one Region element for each region that you want Amazon Route 53 health checkers to check the specified endpoint from",
          args: {
            name: "list",
          },
        },
        {
          name: "--alarm-identifier",
          description:
            "A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--insufficient-data-health-status",
          description:
            "When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:    Healthy: Route 53 considers the health check to be healthy.    Unhealthy: Route 53 considers the health check to be unhealthy.    LastKnownStatus: By default, Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the status for the health check is healthy",
          args: {
            name: "string",
          },
        },
        {
          name: "--reset-elements",
          description:
            "A complex type that contains one ResettableElementName element for each element that you want to reset to the default value. Valid values for ResettableElementName include the following:    ChildHealthChecks: Amazon Route 53 resets ChildHealthChecks to null.    FullyQualifiedDomainName: Route 53 resets FullyQualifiedDomainName. to null.    Regions: Route 53 resets the Regions list to the default set of regions.     ResourcePath: Route 53 resets ResourcePath to null",
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
      name: "update-hosted-zone-comment",
      description: "Updates the comment for a specified hosted zone",
      options: [
        {
          name: "--id",
          description:
            "The ID for the hosted zone that you want to update the comment for",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "The new comment for the hosted zone. If you don't specify a value for Comment, Amazon Route 53 deletes the existing value of the Comment element, if any",
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
      name: "update-traffic-policy-comment",
      description: "Updates the comment for a specified traffic policy version",
      options: [
        {
          name: "--id",
          description:
            "The value of Id for the traffic policy that you want to update the comment for",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment",
          description:
            "The new comment for the specified traffic policy and version",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version",
          description:
            "The value of Version for the traffic policy that you want to update the comment for",
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
      name: "update-traffic-policy-instance",
      description:
        "After you submit a UpdateTrafficPolicyInstance request, there's a brief delay while Route\u00a053 creates the resource record sets that are specified in the traffic policy definition. Use GetTrafficPolicyInstance with the id of updated traffic policy instance confirm that the UpdateTrafficPolicyInstance request completed successfully. For more information, see the State response element.  Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:   Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets.    When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.   Route 53 deletes the old group of resource record sets that are associated with the root resource record set name",
      options: [
        {
          name: "--id",
          description:
            "The ID of the traffic policy instance that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--ttl",
          description:
            "The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets",
          args: {
            name: "long",
          },
        },
        {
          name: "--traffic-policy-id",
          description:
            "The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-policy-version",
          description:
            "The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "resource-record-sets-changed",
          description:
            "Wait until JMESPath query ChangeInfo.Status returns INSYNC when polling with ``get-change``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--id",
              description:
                "The ID of the change batch request. The value that you specify here is the value that ChangeResourceRecordSets returned in the Id element when you submitted the request",
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
