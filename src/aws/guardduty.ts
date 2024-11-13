const completionSpec: Fig.Spec = {
  name: "guardduty",
  description:
    "Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances. It uses threat intelligence feeds, such as lists of malicious IPs and domains, and machine learning to identify unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances and container workloads. For example, GuardDuty can detect compromised EC2 instances and container workloads serving malware, or mining bitcoin.  GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never been used, or unusual API calls like a password policy change to reduce password strength.  GuardDuty informs you about the status of your Amazon Web Services environment by producing security findings that you can view in the GuardDuty console or through Amazon EventBridge. For more information, see the  Amazon GuardDuty User Guide",
  subcommands: [
    {
      name: "accept-administrator-invitation",
      description:
        "Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--administrator-id",
          description:
            "The account ID of the GuardDuty administrator account whose invitation you're accepting",
          args: {
            name: "string",
          },
        },
        {
          name: "--invitation-id",
          description:
            "The value that is used to validate the administrator account to the member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "accept-invitation",
      description:
        "Accepts the invitation to be monitored by a GuardDuty administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-id",
          description:
            "The account ID of the GuardDuty administrator account whose invitation you're accepting",
          args: {
            name: "string",
          },
        },
        {
          name: "--invitation-id",
          description:
            "The value that is used to validate the administrator account to the member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "archive-findings",
      description:
        "Archives GuardDuty findings that are specified by the list of finding IDs.  Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose findings you want to archive. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description: "The IDs of the findings that you want to archive",
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
      name: "create-detector",
      description:
        "Creates a single GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.   When you don't specify any features, with an exception to RUNTIME_MONITORING, all the optional features are enabled by default.   When you specify some of the features, any feature that is not specified in the API call gets enabled by default, with an exception to RUNTIME_MONITORING.    Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--enable",
          description:
            "A Boolean value that specifies whether the detector is to be enabled",
        },
        {
          name: "--no-enable",
          description:
            "A Boolean value that specifies whether the detector is to be enabled",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-publishing-frequency",
          description:
            "A value that specifies how frequently updated findings are exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-sources",
          description:
            "Describes which data sources will be enabled for the detector. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new detector resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--features",
          description:
            "A list of features that will be configured for the detector",
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
      name: "create-filter",
      description:
        "Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see Quotas for GuardDuty",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID associated with the GuardDuty account for which you want to create a filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses ({ }, [ ], and ( )), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "Specifies the action that is to be applied to the findings that match the filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--rank",
          description:
            "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings",
          args: {
            name: "integer",
          },
        },
        {
          name: "--finding-criteria",
          description:
            'Represents the criteria to be used in the filter for querying findings. You can only use the following attributes to query findings:   accountId   id   region   severity To filter on the basis of severity, the API and CLI use the following input list for the FindingCriteria condition:    Low: ["1", "2", "3"]     Medium: ["4", "5", "6"]     High: ["7", "8", "9"]    For more information, see Severity levels for GuardDuty findings.   type   updatedAt Type: ISO 8601 string format: YYYY-MM-DDTHH:MM:SS.SSSZ or YYYY-MM-DDTHH:MM:SSZ depending on whether the value contains milliseconds.   resource.accessKeyDetails.accessKeyId   resource.accessKeyDetails.principalId   resource.accessKeyDetails.userName   resource.accessKeyDetails.userType   resource.instanceDetails.iamInstanceProfile.id   resource.instanceDetails.imageId   resource.instanceDetails.instanceId   resource.instanceDetails.tags.key   resource.instanceDetails.tags.value   resource.instanceDetails.networkInterfaces.ipv6Addresses   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress   resource.instanceDetails.networkInterfaces.publicDnsName   resource.instanceDetails.networkInterfaces.publicIp   resource.instanceDetails.networkInterfaces.securityGroups.groupId   resource.instanceDetails.networkInterfaces.securityGroups.groupName   resource.instanceDetails.networkInterfaces.subnetId   resource.instanceDetails.networkInterfaces.vpcId   resource.instanceDetails.outpostArn   resource.resourceType   resource.s3BucketDetails.publicAccess.effectivePermissions   resource.s3BucketDetails.name   resource.s3BucketDetails.tags.key   resource.s3BucketDetails.tags.value   resource.s3BucketDetails.type   service.action.actionType   service.action.awsApiCallAction.api   service.action.awsApiCallAction.callerType   service.action.awsApiCallAction.errorCode   service.action.awsApiCallAction.remoteIpDetails.city.cityName   service.action.awsApiCallAction.remoteIpDetails.country.countryName   service.action.awsApiCallAction.remoteIpDetails.ipAddressV4   service.action.awsApiCallAction.remoteIpDetails.ipAddressV6   service.action.awsApiCallAction.remoteIpDetails.organization.asn   service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg   service.action.awsApiCallAction.serviceName   service.action.dnsRequestAction.domain   service.action.dnsRequestAction.domainWithSuffix   service.action.networkConnectionAction.blocked   service.action.networkConnectionAction.connectionDirection   service.action.networkConnectionAction.localPortDetails.port   service.action.networkConnectionAction.protocol   service.action.networkConnectionAction.remoteIpDetails.city.cityName   service.action.networkConnectionAction.remoteIpDetails.country.countryName   service.action.networkConnectionAction.remoteIpDetails.ipAddressV4   service.action.networkConnectionAction.remoteIpDetails.ipAddressV6   service.action.networkConnectionAction.remoteIpDetails.organization.asn   service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg   service.action.networkConnectionAction.remotePortDetails.port   service.action.awsApiCallAction.remoteAccountDetails.affiliated   service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4   service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6   service.action.kubernetesApiCallAction.namespace   service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn   service.action.kubernetesApiCallAction.requestUri   service.action.kubernetesApiCallAction.statusCode   service.action.networkConnectionAction.localIpDetails.ipAddressV4   service.action.networkConnectionAction.localIpDetails.ipAddressV6   service.action.networkConnectionAction.protocol   service.action.awsApiCallAction.serviceName   service.action.awsApiCallAction.remoteAccountDetails.accountId   service.additionalInfo.threatListName   service.resourceRole   resource.eksClusterDetails.name   resource.kubernetesDetails.kubernetesWorkloadDetails.name   resource.kubernetesDetails.kubernetesWorkloadDetails.namespace   resource.kubernetesDetails.kubernetesUserDetails.username   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix   service.ebsVolumeScanDetails.scanId   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash   resource.ecsClusterDetails.name   resource.ecsClusterDetails.taskDetails.containers.image   resource.ecsClusterDetails.taskDetails.definitionArn   resource.containerDetails.image   resource.rdsDbInstanceDetails.dbInstanceIdentifier   resource.rdsDbInstanceDetails.dbClusterIdentifier   resource.rdsDbInstanceDetails.engine   resource.rdsDbUserDetails.user   resource.rdsDbInstanceDetails.tags.key   resource.rdsDbInstanceDetails.tags.value   service.runtimeDetails.process.executableSha256   service.runtimeDetails.process.name   service.runtimeDetails.process.name   resource.lambdaDetails.functionName   resource.lambdaDetails.functionArn   resource.lambdaDetails.tags.key   resource.lambdaDetails.tags.value',
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new filter resource",
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
      name: "create-ip-set",
      description:
        "Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to create an IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The user-friendly name to identify the IPSet.  Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description: "The format of the file that contains the IPSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description: "The URI of the file that contains the IPSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet",
        },
        {
          name: "--no-activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new IP set resource",
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
      name: "create-malware-protection-plan",
      description:
        "Creates a new Malware Protection plan for the protected resource. When you create a Malware Protection plan, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "Amazon Resource Name (ARN) of the IAM role that has the permissions to scan and add tags to the associated protected resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--protected-resource",
          description:
            "Information about the protected resource that is associated with the created Malware Protection plan. Presently, S3Bucket is the only supported protected resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--actions",
          description:
            "Information about whether the tags will be added to the S3 object after scanning",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags added to the Malware Protection plan resource",
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
      name: "create-members",
      description:
        "Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization. As a delegated administrator, using CreateMembers will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account. A delegated administrator must enable GuardDuty prior to being added as a member. When you use CreateMembers as an Organizations delegated administrator, GuardDuty applies your organization's auto-enable settings to the member accounts in this request, irrespective of the accounts being new or existing members. For more information about the existing auto-enable settings for your organization, see DescribeOrganizationConfiguration. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to associate member accounts. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-details",
          description:
            "A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account",
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
      name: "create-publishing-destination",
      description:
        "Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the findings, the destination resource must exist",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the GuardDuty detector associated with the publishing destination. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-type",
          description:
            "The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-properties",
          description:
            "The properties of the publishing destination, including the ARNs for the destination and the KMS key used for encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-sample-findings",
      description:
        "Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates sample findings of all supported finding types",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector for which you need to create sample findings. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-types",
          description: "The types of sample findings to generate",
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
      name: "create-threat-intel-set",
      description:
        "Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to create a ThreatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format of the file that contains the ThreatIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description: "The URI of the file that contains the ThreatIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet",
        },
        {
          name: "--no-activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new threat list resource",
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
      name: "decline-invitations",
      description:
        "Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs",
      options: [
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from",
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
      name: "delete-detector",
      description:
        "Deletes an Amazon GuardDuty detector that is specified by the detector ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that you want to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-filter",
      description: "Deletes the filter specified by the filter name",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the filter that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-ip-set",
      description:
        "Deletes the IPSet specified by the ipSetId. IPSets are called trusted IP lists in the console user interface",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-set-id",
          description: "The unique ID of the IPSet to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-invitations",
      description:
        "Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs",
      options: [
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from",
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
      name: "delete-malware-protection-plan",
      description:
        "Deletes the Malware Protection plan ID associated with the Malware Protection plan resource. Use this API only when you no longer want to protect the resource associated with this Malware Protection plan ID",
      options: [
        {
          name: "--malware-protection-plan-id",
          description:
            "A unique identifier associated with Malware Protection plan resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-members",
      description:
        "Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account whose members you want to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts that you want to delete",
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
      name: "delete-publishing-destination",
      description:
        "Deletes the publishing definition with the specified destinationId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the publishing destination to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the publishing destination to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-threat-intel-set",
      description:
        "Deletes the ThreatIntelSet specified by the ThreatIntelSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-intel-set-id",
          description:
            "The unique ID of the threatIntelSet that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-malware-scans",
      description:
        "Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all the member accounts. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that the request is associated with. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria to be used in the filter for describing scan entries",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "Represents the criteria used for sorting scan entries. The  attributeName  is required and it must be scanStartTime",
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
      name: "describe-organization-configuration",
      description:
        "Returns information about the account selected as the delegated administrator for GuardDuty. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID of the delegated administrator for which you need to retrieve the information. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-publishing-destination",
      description:
        "Returns information about the publishing destination specified by the provided destinationId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the publishing destination to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the publishing destination to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disable-organization-admin-account",
      description:
        "Removes the existing GuardDuty delegated administrator of the organization. Only the organization's management account can run this API operation",
      options: [
        {
          name: "--admin-account-id",
          description:
            "The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-from-administrator-account",
      description:
        "Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty in a member account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-from-master-account",
      description:
        "Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-members",
      description:
        "Disassociates GuardDuty member accounts (from the current administrator account) specified by the account IDs. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disassociate a member account before removing them from your organization. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the administrator account",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account",
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
      name: "enable-organization-admin-account",
      description:
        "Designates an Amazon Web Services account within the organization as your GuardDuty delegated administrator. Only the organization's management account can run this API operation",
      options: [
        {
          name: "--admin-account-id",
          description:
            "The Amazon Web Services account ID for the organization account to be enabled as a GuardDuty delegated administrator",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-administrator-account",
      description:
        "Provides the details of the GuardDuty administrator account associated with the current GuardDuty member account.  If the organization's management account or a delegated administrator runs this API, it will return success (HTTP 200) but no content",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-coverage-statistics",
      description:
        "Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you can retrieve the statistics for all the resources associated with the active member accounts in your organization who have enabled Runtime Monitoring and have the GuardDuty security agent running on their resources",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria used to filter the coverage statistics",
          args: {
            name: "structure",
          },
        },
        {
          name: "--statistics-type",
          description:
            "Represents the statistics type used to aggregate the coverage details",
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
      name: "get-detector",
      description:
        "Retrieves a GuardDuty detector specified by the detectorId. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that you want to get. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-filter",
      description:
        "Returns the details of the filter specified by the filter name",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with this filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the filter you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-findings",
      description:
        "Describes Amazon GuardDuty findings specified by finding IDs",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description: "The IDs of the findings that you want to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort-criteria",
          description: "Represents the criteria used for sorting findings",
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
      name: "get-findings-statistics",
      description:
        "Lists GuardDuty findings statistics for the specified detector ID. You must provide either findingStatisticTypes or groupBy parameter, and not both. You can use the maxResults and orderBy parameters only when using groupBy. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector whose findings statistics you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-statistic-types",
          description: "The types of finding statistics to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--finding-criteria",
          description:
            "Represents the criteria that is used for querying findings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "Displays the findings statistics grouped by one of the listed valid values",
          args: {
            name: "string",
          },
        },
        {
          name: "--order-by",
          description:
            "Displays the sorted findings in the requested order. The default value of orderBy is DESC. You can use this parameter only with the groupBy parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in the response. The default value is 25. You can use this parameter only with the groupBy parameter",
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
      name: "get-ip-set",
      description: "Retrieves the IPSet specified by the ipSetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-set-id",
          description: "The unique ID of the IPSet to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-invitations-count",
      description:
        "Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation",
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
      name: "get-malware-protection-plan",
      description:
        "Retrieves the Malware Protection plan details associated with a Malware Protection plan ID",
      options: [
        {
          name: "--malware-protection-plan-id",
          description:
            "A unique identifier associated with Malware Protection plan resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-malware-scan-settings",
      description:
        "Returns the details of the malware scan settings. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with this scan. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-master-account",
      description:
        "Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-member-detectors",
      description:
        "Describes which data sources are enabled for the member account's detector. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID for the administrator account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description: "A list of member account IDs",
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
      name: "get-members",
      description:
        "Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account whose members you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts that you want to describe",
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
      name: "get-organization-statistics",
      description:
        "Retrieves how many active member accounts have each feature enabled within GuardDuty. Only a delegated GuardDuty administrator of an organization can run this API. When you create a new organization, it might take up to 24 hours to generate the statistics for the entire organization",
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
      name: "get-remaining-free-trial-days",
      description:
        "Provides the number of days left for each data source used in the free trial period",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account identifiers of the GuardDuty member account",
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
      name: "get-threat-intel-set",
      description:
        "Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-intel-set-id",
          description:
            "The unique ID of the threatIntelSet that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-usage-statistics",
      description:
        "Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see Understanding How Usage Costs are Calculated",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--usage-statistic-type",
          description: "The type of usage statistics to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--usage-criteria",
          description: "Represents the criteria used for querying usage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--unit",
          description:
            "The currency unit you would like to view your usage statistics in. Current valid values are USD",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "invite-members",
      description:
        "Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not needed. For more information, see Managing accounts with organizations. To invite Amazon Web Services accounts, the first step is to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API to add accounts by invitation. The invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can choose to accept the invitation from only one Amazon Web Services account. For more information, see Managing GuardDuty accounts by invitation. After the invite has been accepted and you choose to disassociate a member account (by using DisassociateMembers) from your account, the details of the member account obtained by invoking CreateMembers, including the associated email addresses, will be retained. This is done so that you can invoke InviteMembers without the need to invoke CreateMembers again. To remove the details associated with a member account, you must also invoke DeleteMembers.  If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account with which you want to invite members. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the accounts that you want to invite to GuardDuty as members",
          args: {
            name: "list",
          },
        },
        {
          name: "--disable-email-notification",
          description:
            "A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members",
        },
        {
          name: "--no-disable-email-notification",
          description:
            "A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members",
        },
        {
          name: "--message",
          description:
            "The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-coverage",
      description:
        "Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization. Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on their resources",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector whose coverage details you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria used to filter the coverage details",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "Represents the criteria used to sort the coverage details",
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
      name: "list-detectors",
      description:
        "Lists detectorIds of all the existing Amazon GuardDuty detector resources",
      options: [
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
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
      name: "list-filters",
      description: "Returns a paginated list of the current filters",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
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
      name: "list-findings",
      description:
        "Lists GuardDuty findings for the specified detector ID. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose findings you want to list. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-criteria",
          description:
            "Represents the criteria used for querying findings. Valid values include:   JSON field name   accountId   region   confidence   id   resource.accessKeyDetails.accessKeyId   resource.accessKeyDetails.principalId   resource.accessKeyDetails.userName   resource.accessKeyDetails.userType   resource.instanceDetails.iamInstanceProfile.id   resource.instanceDetails.imageId   resource.instanceDetails.instanceId   resource.instanceDetails.networkInterfaces.ipv6Addresses   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress   resource.instanceDetails.networkInterfaces.publicDnsName   resource.instanceDetails.networkInterfaces.publicIp   resource.instanceDetails.networkInterfaces.securityGroups.groupId   resource.instanceDetails.networkInterfaces.securityGroups.groupName   resource.instanceDetails.networkInterfaces.subnetId   resource.instanceDetails.networkInterfaces.vpcId   resource.instanceDetails.tags.key   resource.instanceDetails.tags.value   resource.resourceType   service.action.actionType   service.action.awsApiCallAction.api   service.action.awsApiCallAction.callerType   service.action.awsApiCallAction.remoteIpDetails.city.cityName   service.action.awsApiCallAction.remoteIpDetails.country.countryName   service.action.awsApiCallAction.remoteIpDetails.ipAddressV4   service.action.awsApiCallAction.remoteIpDetails.organization.asn   service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg   service.action.awsApiCallAction.serviceName   service.action.dnsRequestAction.domain   service.action.dnsRequestAction.domainWithSuffix   service.action.networkConnectionAction.blocked   service.action.networkConnectionAction.connectionDirection   service.action.networkConnectionAction.localPortDetails.port   service.action.networkConnectionAction.protocol   service.action.networkConnectionAction.remoteIpDetails.country.countryName   service.action.networkConnectionAction.remoteIpDetails.ipAddressV4   service.action.networkConnectionAction.remoteIpDetails.organization.asn   service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg   service.action.networkConnectionAction.remotePortDetails.port   service.additionalInfo.threatListName   service.archived When this attribute is set to 'true', only archived findings are listed. When it's set to 'false', only unarchived findings are listed. When this attribute is not set, all existing findings are listed.   service.ebsVolumeScanDetails.scanId   service.resourceRole   severity   type   updatedAt Type: Timestamp in Unix Epoch millisecond format: 1486685375000",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description: "Represents the criteria used for sorting findings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
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
      name: "list-ip-sets",
      description:
        "Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
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
      name: "list-invitations",
      description:
        "Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
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
      name: "list-malware-protection-plans",
      description:
        "Lists the Malware Protection plan IDs associated with the protected resources in your Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-members",
      description:
        "Lists details about all member accounts for the current GuardDuty administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the member. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
        {
          name: "--only-associated",
          description:
            "Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using  Create Members",
          args: {
            name: "string",
          },
        },
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
      name: "list-organization-admin-accounts",
      description:
        "Lists the accounts designated as GuardDuty delegated administrators. Only the organization's management account can run this API operation",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
          args: {
            name: "string",
          },
        },
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
      name: "list-publishing-destinations",
      description:
        "Returns a list of publishing destinations associated with the specified detectorId",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID for which you want to retrieve the publishing destination. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, threat intel sets, and publishing destination, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the given GuardDuty resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-threat-intel-sets",
      description:
        "Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the administrator account are returned",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
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
      name: "start-malware-scan",
      description:
        "Initiates the malware scan. Invoking this API will automatically create the Service-linked role in the corresponding account. When the malware scan starts, you can use the associated scan ID to track the status of the scan. For more information, see DescribeMalwareScans",
      options: [
        {
          name: "--resource-arn",
          description:
            "Amazon Resource Name (ARN) of the resource for which you invoked the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-monitoring-members",
      description:
        "Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the StopMonitoringMembers operation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty administrator account associated with the member accounts to monitor. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts to start monitoring",
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
      name: "stop-monitoring-members",
      description:
        "Stops GuardDuty monitoring for the specified member accounts. Use the StartMonitoringMembers operation to restart monitoring for those accounts. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to stop monitoring the member accounts in your organization",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs for the member accounts to stop monitoring",
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
      description: "Adds tags to a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a resource",
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
      name: "unarchive-findings",
      description: "Unarchives GuardDuty findings specified by the findingIds",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector associated with the findings to unarchive. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description: "The IDs of the findings to unarchive",
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
      description: "Removes tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the resource to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to remove from the resource",
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
      name: "update-detector",
      description:
        "Updates the GuardDuty detector specified by the detector ID. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable",
          description:
            "Specifies whether the detector is enabled or not enabled",
        },
        {
          name: "--no-enable",
          description:
            "Specifies whether the detector is enabled or not enabled",
        },
        {
          name: "--finding-publishing-frequency",
          description:
            "An enum value that specifies how frequently findings are exported, such as to CloudWatch Events",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-sources",
          description:
            "Describes which data sources will be updated. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
          args: {
            name: "structure",
          },
        },
        {
          name: "--features",
          description:
            "Provides the features that will be updated for the detector",
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
      name: "update-filter",
      description: "Updates the filter specified by the filter name",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that specifies the GuardDuty service where you want to update a filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses ({ }, [ ], and ( )), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "Specifies the action that is to be applied to the findings that match the filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--rank",
          description:
            "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings",
          args: {
            name: "integer",
          },
        },
        {
          name: "--finding-criteria",
          description:
            "Represents the criteria to be used in the filter for querying findings",
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
      name: "update-findings-feedback",
      description:
        "Marks the specified GuardDuty findings as useful or not useful",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that is associated with the findings for which you want to update the feedback. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description:
            "The IDs of the findings that you want to mark as useful or not useful",
          args: {
            name: "list",
          },
        },
        {
          name: "--feedback",
          description: "The feedback for the finding",
          args: {
            name: "string",
          },
        },
        {
          name: "--comments",
          description: "Additional feedback about the GuardDuty findings",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-ip-set",
      description: "Updates the IPSet specified by the IPSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The detectorID that specifies the GuardDuty service whose IPSet you want to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-set-id",
          description:
            "The unique ID that specifies the IPSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The unique ID that specifies the IPSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description: "The updated URI of the file that contains the IPSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "The updated Boolean value that specifies whether the IPSet is active or not",
        },
        {
          name: "--no-activate",
          description:
            "The updated Boolean value that specifies whether the IPSet is active or not",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-malware-protection-plan",
      description: "Updates an existing Malware Protection plan resource",
      options: [
        {
          name: "--malware-protection-plan-id",
          description:
            "A unique identifier associated with the Malware Protection plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "Amazon Resource Name (ARN) of the IAM role with permissions to scan and add tags to the associated protected resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description:
            "Information about whether the tags will be added to the S3 object after scanning",
          args: {
            name: "structure",
          },
        },
        {
          name: "--protected-resource",
          description:
            "Information about the protected resource that is associated with the created Malware Protection plan. Presently, S3Bucket is the only supported protected resource",
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
      name: "update-malware-scan-settings",
      description:
        "Updates the malware scan settings. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that specifies the GuardDuty service where you want to update scan settings. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-resource-criteria",
          description:
            "Represents the criteria to be used in the filter for selecting resources to scan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ebs-snapshot-preservation",
          description:
            "An enum value representing possible snapshot preservation settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-member-detectors",
      description:
        "Contains information on member accounts to be updated. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID of the administrator account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description: "A list of member account IDs to be updated",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-sources",
          description: "Describes which data sources will be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--features",
          description:
            "A list of features that will be updated for the specified member accounts",
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
      name: "update-organization-configuration",
      description:
        "Configures the delegated administrator account with the provided values. You must provide a value for either autoEnableOrganizationMembers or autoEnable, but not both.  Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that configures the delegated administrator. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-enable",
          description:
            "Represents whether or not to automatically enable member accounts in the organization. Even though this is still supported, we recommend using AutoEnableOrganizationMembers to achieve the similar results. You must provide a value for either autoEnableOrganizationMembers or autoEnable",
        },
        {
          name: "--no-auto-enable",
          description:
            "Represents whether or not to automatically enable member accounts in the organization. Even though this is still supported, we recommend using AutoEnableOrganizationMembers to achieve the similar results. You must provide a value for either autoEnableOrganizationMembers or autoEnable",
        },
        {
          name: "--data-sources",
          description: "Describes which data sources will be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--features",
          description:
            "A list of features that will be configured for the organization",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-enable-organization-members",
          description:
            "Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. You must provide a value for either autoEnableOrganizationMembers or autoEnable.  Use one of the following configuration values for autoEnableOrganizationMembers:    NEW: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically.     ALL: Indicates that all accounts in the organization have GuardDuty enabled automatically. This includes NEW accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty. It may take up to 24 hours to update the configuration for all the member accounts.    NONE: Indicates that GuardDuty will not be automatically enabled for any account in the organization. The administrator must manage GuardDuty for each account in the organization individually. When you update the auto-enable setting from ALL or NEW to NONE, this action doesn't disable the corresponding option for your existing accounts. This configuration will apply to the new accounts that join the organization. After you update the auto-enable settings, no new account will have the corresponding option as enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-publishing-destination",
      description:
        "Updates information about the publishing destination specified by the destinationId",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector associated with the publishing destinations to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the publishing destination to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-properties",
          description:
            "A DestinationProperties object that includes the DestinationArn and KmsKeyArn of the publishing destination",
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
      name: "update-threat-intel-set",
      description:
        "Updates the ThreatIntelSet specified by the ThreatIntelSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-intel-set-id",
          description:
            "The unique ID that specifies the ThreatIntelSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The unique ID that specifies the ThreatIntelSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The updated URI of the file that contains the ThreateIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "The updated Boolean value that specifies whether the ThreateIntelSet is active or not",
        },
        {
          name: "--no-activate",
          description:
            "The updated Boolean value that specifies whether the ThreateIntelSet is active or not",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
