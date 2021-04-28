export const completionSpec: Fig.Spec = {
  name: "network-firewall",
  description:
    "This is the API Reference for AWS Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors.    The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the AWS REST APIs, see AWS APIs.  To access Network Firewall using the REST API endpoint: https://network-firewall.&lt;region&gt;.amazonaws.com     Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see AWS SDKs.   For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the Network Firewall Developer Guide.   Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or AWS Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source intrusion detection system (IDS) engine. For information about Suricata, see the Suricata website. You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples:    Allow domains or IP addresses for known AWS service endpoints, such as Amazon S3, and block all other forms of traffic.   Use custom lists of known bad domains to limit the types of domain names that your applications can access.   Perform deep packet inspection on traffic entering or leaving your VPC.   Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.   To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see Amazon VPC User Guide. To start using Network Firewall, do the following:    (Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC.    In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall.    In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have.    In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior.    In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.   In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.",
  subcommands: [
    {
      name: "associate-firewall-policy",
      description:
        "Associates a FirewallPolicy to a Firewall.  A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls.",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-policy-arn",
          description: "The Amazon Resource Name (ARN) of the firewall policy.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "associate-subnets",
      description:
        "Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans.  This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint.",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--subnet-mappings",
          description:
            "The IDs of the subnets that you want to associate with the firewall.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-firewall",
      description:
        "Creates an AWS Network Firewall Firewall and accompanying FirewallStatus for a VPC.  The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource.  After you create a firewall, you can provide additional settings, like the logging configuration.  To update the settings for a firewall, you use the operations that apply to the settings themselves, for example UpdateLoggingConfiguration, AssociateSubnets, and UpdateFirewallDeleteProtection.  To manage a firewall's tags, use the standard AWS resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about firewalls, use ListFirewalls and DescribeFirewall.",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the FirewallPolicy that you want to use for the firewall.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--vpc-id",
          description:
            "The unique identifier of the VPC where Network Firewall should create the firewall.  You can't change this setting after you create the firewall.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--subnet-mappings",
          description:
            "The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each subnet.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE.",
        },
        {
          name: "--no-delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE.",
        },
        {
          name: "--subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--no-subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--no-firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--description",
          description: "A description of the firewall.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-firewall-policy",
      description:
        "Creates the firewall policy for the firewall according to the specifications.  An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls.",
      options: [
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--firewall-policy",
          description:
            "The rule groups and policy actions to use in the firewall policy.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "A description of the firewall policy.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-rule-group",
      description:
        "Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags.  You provide your rule group specification in your request using either RuleGroup or Rules.",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--rule-group",
          description:
            "An object that defines the rule group rules.   You must provide either this rule group setting or a Rules setting, but not both.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--rules",
          description:
            "A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups.   You must provide either this rules setting or a populated RuleGroup setting, but not both.   You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "A description of the rule group.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--capacity",
          description:
            'The maximum operating resources that this rule group can use. Rule group capacity is fixed at creation. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.  You can retrieve the capacity that would be required for a rule group before you create the rule group by calling CreateRuleGroup with DryRun set to TRUE.   You can\'t change or exceed this capacity when you update the rule group, so leave room for your rule group to grow.    Capacity for a stateless rule group  For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules that you expect to have in the rule group.  To calculate the capacity requirement of a single rule, multiply the capacity requirement values of each of the rule\'s match settings:   A match setting with no criteria specified has a value of 1.    A match setting with Any specified has a value of 1.    All other match settings have a value equal to the number of elements provided in the setting. For example, a protocol setting ["UDP"] and a source setting ["10.0.0.0/24"] each have a value of 1. A protocol setting ["UDP","TCP"] has a value of 2. A source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"] has a value of 3.    A rule with no criteria specified in any of its match settings has a capacity requirement of 1. A rule with protocol setting ["UDP","TCP"], source setting ["10.0.0.0/24","10.0.0.1/24","10.0.0.2/24"], and a single specification or no specification for each of the other match settings has a capacity requirement of 6.   Capacity for a stateful rule group  For a stateful rule group, the minimum capacity required is the number of individual rules that you expect to have in the rule group.',
          args: {
            name: "integer",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "The key:value pairs to associate with the resource.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-firewall",
      description:
        "Deletes the specified Firewall and its FirewallStatus. This operation requires the firewall's DeleteProtection flag to be FALSE. You can't revert this operation.  You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling DescribeFirewall. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely. To delete a firewall, remove the delete protection if you need to using UpdateFirewallDeleteProtection, then delete the firewall by calling DeleteFirewall.",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-firewall-policy",
      description: "Deletes the specified FirewallPolicy.",
      options: [
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall policy. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-resource-policy",
      description:
        "Deletes a resource policy that you created in a PutResourcePolicy request.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to delete.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-rule-group",
      description: "Deletes the specified RuleGroup.",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-firewall",
      description: "Returns the data objects for the specified firewall.",
      options: [
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-firewall-policy",
      description:
        "Returns the data objects for the specified firewall policy.",
      options: [
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall policy. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-logging-configuration",
      description:
        "Returns the logging configuration for the specified firewall.",
      options: [
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-resource-policy",
      description:
        "Retrieves a resource policy that you created in a PutResourcePolicy request.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group or firewall policy whose resource policy you want to retrieve.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-rule-group",
      description: "Returns the data objects for the specified rule group.",
      options: [
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "disassociate-subnets",
      description:
        "Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing.",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--subnet-ids",
          description:
            "The unique identifiers for the subnets that you want to disassociate.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "list-firewall-policies",
      description:
        "Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.",
      options: [
        {
          name: "--next-token",
          description:
            "When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a NextToken value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "list-firewalls",
      description:
        "Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs. Depending on your setting for max results and the number of firewalls, a single call might not return the full list.",
      options: [
        {
          name: "--next-token",
          description:
            "When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--vpc-ids",
          description:
            "The unique identifiers of the VPCs that you want Network Firewall to retrieve the firewalls for. Leave this blank to retrieve all firewalls that you have defined.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a NextToken value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "list-rule-groups",
      description:
        "Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list.",
      options: [
        {
          name: "--next-token",
          description:
            "When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a NextToken value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description:
        'Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource. You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups.',
      options: [
        {
          name: "--next-token",
          description:
            "When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Network Firewall returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you want Network Firewall to return for this request. If more objects are available, in the response, Network Firewall provides a NextToken value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "put-resource-policy",
      description:
        "Creates or updates an AWS Identity and Access Management policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the AWS Resource Access Manager (RAM) service to manage resource sharing for Network Firewall.  Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform.  When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy.     GetResourceShareInvitations - Returns the Amazon Resource Names (ARNs) of the resource share invitations.     AcceptResourceShareInvitation - Accepts the share invitation for a specified resource share.    For additional information about resource sharing using RAM, see AWS Resource Access Manager User Guide.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the account that you want to share rule groups and firewall policies with.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--policy",
          description:
            "The AWS Identity and Access Management policy statement that lists the accounts that you want to share your rule group or firewall policy with and the operations that you want the accounts to be able to perform.  For a rule group resource, you can specify the following operations in the Actions section of the statement:   network-firewall:CreateFirewallPolicy   network-firewall:UpdateFirewallPolicy   network-firewall:ListRuleGroups   For a firewall policy resource, you can specify the following operations in the Actions section of the statement:   network-firewall:CreateFirewall   network-firewall:UpdateFirewall   network-firewall:AssociateFirewallPolicy   network-firewall:ListFirewallPolicies   In the Resource section of the statement, you specify the ARNs for the rule groups and firewall policies that you want to share with the account that you specified in Arn.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description:
        'Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource. You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups.',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
      description:
        'Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource. You can manage tags for the AWS resources that you manage through AWS Network Firewall: firewalls, firewall policies, and rule groups.',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-firewall-delete-protection",
      description:
        "Modifies the flag, DeleteProtection, which indicates whether it is possible to delete the firewall. If the flag is set to TRUE, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE.",
        },
        {
          name: "--no-delete-protection",
          description:
            "A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-firewall-description",
      description:
        "Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it.",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description:
            "The new description for the firewall. If you omit this setting, Network Firewall removes the description for the firewall.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-firewall-policy",
      description: "Updates the properties of the specified firewall policy.",
      options: [
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the firewall policy. The token marks the state of the policy resource at the time of the request.  To make changes to the policy, you provide the token in your request. Network Firewall uses the token to ensure that the policy hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall policy again to get a current copy of it with current token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--firewall-policy-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall policy. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-policy-name",
          description:
            "The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-policy",
          description: "The updated firewall policy to use for the firewall.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "A description of the firewall policy.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-firewall-policy-change-protection",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--no-firewall-policy-change-protection",
          description:
            "A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-logging-configuration",
      description:
        "Sets the logging configuration for the specified firewall.  To change the logging configuration, retrieve the LoggingConfiguration by calling DescribeLoggingConfiguration, then change it and provide the modified object to this update call. You must change the logging configuration one LogDestinationConfig at a time inside the retrieved LoggingConfiguration object.  You can perform only one of the following actions in any call to UpdateLoggingConfiguration:    Create a new log destination object by adding a single LogDestinationConfig array element to LogDestinationConfigs.   Delete a log destination object by removing a single LogDestinationConfig array element from LogDestinationConfigs.   Change the LogDestination setting in a single LogDestinationConfig array element.   You can't change the LogDestinationType or LogType in a LogDestinationConfig. To change these settings, delete the existing LogDestinationConfig object and create a new one, using two separate calls to this update operation.",
      options: [
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--logging-configuration",
          description:
            "Defines how Network Firewall performs logging for a firewall. If you omit this setting, Network Firewall disables logging for the firewall.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-rule-group",
      description:
        "Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group.  To update a rule group, first call DescribeRuleGroup to retrieve the current RuleGroup object, update the object as needed, and then provide the updated object to this call.",
      options: [
        {
          name: "--update-token",
          description:
            "A token used for optimistic locking. Network Firewall returns a token to your requests that access the rule group. The token marks the state of the rule group resource at the time of the request.  To make changes to the rule group, you provide the token in your request. Network Firewall uses the token to ensure that the rule group hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the rule group again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--rule-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--rule-group-name",
          description:
            "The descriptive name of the rule group. You can't change the name of a rule group after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--rule-group",
          description:
            "An object that defines the rule group rules.   You must provide either this rule group setting or a Rules setting, but not both.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--rules",
          description:
            "A string containing stateful rule group rules specifications in Suricata flat format, with one rule per line. Use this to import your existing Suricata compatible rule groups.   You must provide either this rules setting or a populated RuleGroup setting, but not both.   You can provide your rule group specification in Suricata flat format through this setting when you create or update your rule group. The call response returns a RuleGroup object that Network Firewall has populated from your string.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description:
            "Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.   This setting is required for requests that do not include the RuleGroupARN.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "A description of the rule group.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--no-dry-run",
          description:
            "Indicates whether you want Network Firewall to just check the validity of the request, rather than run the request.  If set to TRUE, Network Firewall checks whether the request can run successfully, but doesn't actually make the requested changes. The call returns the value that the request would return if you ran it with dry run set to FALSE, but doesn't make additions or changes to your resources. This option allows you to make sure that you have the required permissions to run the request and that your request parameters are valid.  If set to FALSE, Network Firewall makes the requested changes to your resources.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "update-subnet-change-protection",
      options: [
        {
          name: "--update-token",
          description:
            "An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request.  To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-arn",
          description:
            "The Amazon Resource Name (ARN) of the firewall. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--firewall-name",
          description:
            "The descriptive name of the firewall. You can't change the name of a firewall after you create it. You must specify the ARN or the name, and you can specify both.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--no-subnet-change-protection",
          description:
            "A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
