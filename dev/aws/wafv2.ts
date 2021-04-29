export const completionSpec: Fig.Spec = {
  name: "wafv2",
  description:
    'This is the latest version of the AWS WAF API, released in November, 2019. The names of the entities that you use to access this API, like endpoints and namespaces, all have the versioning information added, like "V2" or "v2", to distinguish from the prior version. We recommend migrating your resources to this version, because it has a number of significant improvements. If you used AWS WAF prior to this release, you can\'t use this AWS WAFV2 API to access any AWS WAF resources that you created before. You can access your old rules, web ACLs, and other AWS WAF resources only through the AWS WAF Classic APIs. The AWS WAF Classic APIs have retained the prior names, endpoints, and namespaces.  For information, including how to migrate your AWS WAF resources to this version, see the AWS WAF Developer Guide.   AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API. AWS WAF also lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, the API Gateway REST API, CloudFront distribution, the Application Load Balancer, or the AWS AppSync GraphQL API responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You also can configure CloudFront to return a custom error page when a request is blocked. This API guide is for developers who need detailed information about AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use AWS WAF, see the AWS WAF Developer Guide. You can make calls using the endpoints listed in AWS Service Endpoints for AWS WAF.    For regional applications, you can use any of the endpoints in the list. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.    For AWS CloudFront applications, you must use the API endpoint listed for US East (N. Virginia): us-east-1.   Alternatively, you can use one of the AWS SDKs to access an API that\'s tailored to the programming language or platform that you\'re using. For more information, see AWS SDKs. We currently provide two versions of the AWS WAF API: this API and the prior versions, the classic AWS WAF APIs. This new API provides the same functionality as the older versions, with the following major improvements:   You use one API for both global and regional applications. Where you need to distinguish the scope, you specify a Scope parameter and set it to CLOUDFRONT or REGIONAL.    You can define a Web ACL or rule group with a single call, and update it with a single call. You define all rule specifications in JSON format, and pass them to your rule group or Web ACL calls.   The limits AWS WAF places on the use of rules more closely reflects the cost of running each type of rule. Rule groups include capacity settings, so you know the maximum cost of a rule group when you use it.',
  subcommands: [
    {
      name: "associate-web-acl",
      description:
        "Associates a Web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a Web ACL, in the CloudFront call UpdateDistribution, set the web ACL ID to the Amazon Resource Name (ARN) of the Web ACL. For information, see UpdateDistribution.",
      options: [
        {
          name: "--web-acl-arn",
          description:
            "The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to associate with the web ACL.  The ARN must be in one of the following formats:   For an Application Load Balancer: arn:aws:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id     For an API Gateway REST API: arn:aws:apigateway:region::/restapis/api-id/stages/stage-name     For an AppSync GraphQL API: arn:aws:appsync:region:account-id:apis/GraphQLApiId",
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
      name: "check-capacity",
      description:
        "Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules. You can use this to check the capacity requirements for the rules you want to use in a RuleGroup or WebACL.  AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "An array of Rule that you're configuring to use in a rule group or web ACL.",
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
      name: "create-ip-set",
      description:
        "Creates an IPSet, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure AWS WAF to block them using an IPSet that lists those IP addresses.",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the IP set that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address-version",
          description: "Specify IPV4 or IPV6.",
          args: {
            name: "string",
          },
        },
        {
          name: "--addresses",
          description:
            "Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports all IPv4 and IPv6 CIDR ranges except for /0.  Examples:    To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify 192.0.2.44/32.   To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24.   To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify 1111:0000:0000:0000:0000:0000:0000:0111/128.   To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify 1111:0000:0000:0000:0000:0000:0000:0000/64.   For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource.",
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
      name: "create-regex-pattern-set",
      description:
        "Creates a RegexPatternSet, which you reference in a RegexPatternSetReferenceStatement, to have AWS WAF inspect a web request component for the specified patterns.",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the set that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--regular-expression-list",
          description: "Array of regular expression strings.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource.",
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
      name: "create-rule-group",
      description:
        "Creates a RuleGroup per the specifications provided.   A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity",
          description:
            "The web ACL capacity units (WCUs) required for this rule group. When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, AWS WAF enforces this limit. You can check the capacity for a set of rules using CheckCapacity. AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.",
          args: {
            name: "long",
          },
        },
        {
          name: "--description",
          description:
            "A description of the rule group that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.  For information about customizing web requests and responses, see Customizing web requests and responses in AWS WAF in the AWS WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see AWS WAF quotas in the AWS WAF Developer Guide.",
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
      name: "create-web-acl",
      description:
        "Creates a WebACL per the specifications provided.  A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API.",
      options: [
        {
          name: "--name",
          description:
            "The name of the Web ACL. You cannot change the name of a Web ACL after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-action",
          description:
            "The action to perform if none of the Rules contained in the WebACL match.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "A description of the Web ACL that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.  For information about customizing web requests and responses, see Customizing web requests and responses in AWS WAF in the AWS WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see AWS WAF quotas in the AWS WAF Developer Guide.",
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
      name: "delete-firewall-manager-rule-groups",
      description:
        "Deletes all rule groups that are managed by AWS Firewall Manager for the specified web ACL.  You can only use this if ManagedByFirewallManager is false in the specified WebACL.",
      options: [
        {
          name: "--web-acl-arn",
          description: "The Amazon Resource Name (ARN) of the web ACL.",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-acl-lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "delete-ip-set",
      description: "Deletes the specified IPSet.",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "delete-logging-configuration",
      description:
        "Deletes the LoggingConfiguration from the specified web ACL.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the web ACL from which you want to delete the LoggingConfiguration.",
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
      name: "delete-permission-policy",
      description:
        "Permanently deletes an IAM policy from the specified rule group. You must be the owner of the rule group to perform this operation.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group from which you want to delete the policy. You must be the owner of the rule group to perform this operation.",
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
      name: "delete-regex-pattern-set",
      description: "Deletes the specified RegexPatternSet.",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "delete-rule-group",
      description: "Deletes the specified RuleGroup.",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "delete-web-acl",
      description:
        "Deletes the specified WebACL. You can only use this if ManagedByFirewallManager is false in the specified WebACL.",
      options: [
        {
          name: "--name",
          description:
            "The name of the Web ACL. You cannot change the name of a Web ACL after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "describe-managed-rule-group",
      description:
        "Provides high-level information for a managed rule group, including descriptions of the rules.",
      options: [
        {
          name: "--vendor-name",
          description:
            "The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
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
      name: "disassociate-web-acl",
      description:
        "Disassociates a Web ACL from a regional application resource. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To disassociate a Web ACL, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL.  The ARN must be in one of the following formats:   For an Application Load Balancer: arn:aws:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id     For an API Gateway REST API: arn:aws:apigateway:region::/restapis/api-id/stages/stage-name     For an AppSync GraphQL API: arn:aws:appsync:region:account-id:apis/GraphQLApiId",
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
      name: "get-ip-set",
      description: "Retrieves the specified IPSet.",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
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
      name: "get-logging-configuration",
      description:
        "Returns the LoggingConfiguration for the specified web ACL.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the web ACL for which you want to get the LoggingConfiguration.",
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
      name: "get-permission-policy",
      description:
        "Returns the IAM policy that is attached to the specified rule group. You must be the owner of the rule group to perform this operation.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group for which you want to get the policy.",
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
      name: "get-rate-based-statement-managed-keys",
      description:
        "Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-acl-name",
          description:
            "The name of the Web ACL. You cannot change the name of a Web ACL after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-acl-id",
          description:
            "The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-name",
          description: "The name of the rate-based rule to get the keys for.",
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
      name: "get-regex-pattern-set",
      description: "Retrieves the specified RegexPatternSet.",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
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
      name: "get-rule-group",
      description: "Retrieves the specified RuleGroup.",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
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
      name: "get-sampled-requests",
      description:
        "Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.  GetSampledRequests returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, GetSampledRequests returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.",
      options: [
        {
          name: "--web-acl-arn",
          description:
            "The Amazon resource name (ARN) of the WebACL for which you want a sample of requests.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-metric-name",
          description:
            "The metric name assigned to the Rule or RuleGroup for which you want a sample of requests.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-window",
          description:
            'The start date and time and the end date and time of the range for which you want GetSampledRequests to return a sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". You can specify any time range in the previous three hours. If you specify a start time that\'s earlier than three hours ago, AWS WAF sets it to three hours ago.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-items",
          description:
            "The number of requests that you want AWS WAF to return from among the first 5,000 requests that your AWS resource received during the time range. If your resource received fewer requests than the value of MaxItems, GetSampledRequests returns information about all of them.",
          args: {
            name: "long",
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
      name: "get-web-acl",
      description: "Retrieves the specified WebACL.",
      options: [
        {
          name: "--name",
          description:
            "The name of the Web ACL. You cannot change the name of a Web ACL after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
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
      name: "get-web-acl-for-resource",
      description: "Retrieves the WebACL for the specified resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN (Amazon Resource Name) of the resource.",
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
      name: "list-available-managed-rule-groups",
      description:
        "Retrieves an array of managed rule groups that are available for you to use. This list includes all AWS Managed Rules rule groups and the AWS Marketplace managed rule groups that you're subscribed to.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
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
      name: "list-ip-sets",
      description:
        "Retrieves an array of IPSetSummary objects for the IP sets that you manage.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
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
      name: "list-logging-configurations",
      description: "Retrieves an array of your LoggingConfiguration objects.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
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
      name: "list-regex-pattern-sets",
      description:
        "Retrieves an array of RegexPatternSetSummary objects for the regex pattern sets that you manage.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
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
      name: "list-resources-for-web-acl",
      description:
        "Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of AWS CloudFront resources, use the AWS CloudFront call ListDistributionsByWebACLId.",
      options: [
        {
          name: "--web-acl-arn",
          description: "The Amazon Resource Name (ARN) of the Web ACL.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Used for web ACLs that are scoped for regional applications. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.",
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
      name: "list-rule-groups",
      description:
        "Retrieves an array of RuleGroupSummary objects for the rule groups that you manage.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
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
      name: "list-tags-for-resource",
      description:
        'Retrieves the TagInfoForResource for the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource. You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the AWS WAF console.',
      options: [
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
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
      name: "list-web-acls",
      description:
        "Retrieves an array of WebACLSummary objects for the web ACLs that you manage.",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, AWS WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want AWS WAF to return for this request. If more objects are available, in the response, AWS WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects.",
          args: {
            name: "integer",
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
      name: "put-logging-configuration",
      description:
        "Enables the specified LoggingConfiguration, to start logging from a web ACL, according to the configuration provided. You can access information about all traffic that AWS WAF inspects using the following steps:   Create an Amazon Kinesis Data Firehose.  Create the data firehose with a PUT source and in the Region that you are operating. If you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia).  Give the data firehose a name that starts with the prefix aws-waf-logs-. For example, aws-waf-logs-us-east-2-analytics.  Do not create the data firehose using a Kinesis stream as your source.    Associate that firehose to your web ACL using a PutLoggingConfiguration request.   When you successfully enable logging using a PutLoggingConfiguration request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see Logging Web ACL Traffic Information in the AWS WAF Developer Guide.",
      options: [
        {
          name: "--logging-configuration",
          args: {
            name: "structure",
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
      name: "put-permission-policy",
      description:
        "Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts. You must be the owner of the rule group to perform this operation. This action is subject to the following restrictions:   You can attach only one policy with each PutPermissionPolicy request.   The ARN in the request must be a valid WAF RuleGroup ARN and the rule group must exist in the same region.   The user making the request must be the owner of the rule group.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the RuleGroup to which you want to attach the policy.",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The policy to attach to the specified rule group.  The policy specifications must conform to the following:   The policy must be composed using IAM Policy version 2012-10-17 or version 2015-01-01.   The policy must include specifications for Effect, Action, and Principal.    Effect must specify Allow.    Action must specify wafv2:CreateWebACL, wafv2:UpdateWebACL, and wafv2:PutFirewallManagerRuleGroups. AWS WAF rejects any extra actions or wildcard actions in the policy.   The policy must not include a Resource parameter.   For more information, see IAM Policies.",
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
      name: "tag-resource",
      description:
        'Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource. You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the AWS WAF console.',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource.",
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
      name: "untag-resource",
      description:
        'Disassociates tags from an AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "An array of keys identifying the tags to disassociate from the resource.",
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
      name: "update-ip-set",
      description:
        "Updates the specified IPSet.   This operation completely replaces any IP address specifications that you already have in the IP set with the ones that you provide to this call. If you want to add to or modify the addresses that are already in the IP set, retrieve those by calling GetIPSet, update them, and provide the complete updated array of IP addresses to this call.",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the IP set that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--addresses",
          description:
            "Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports all IPv4 and IPv6 CIDR ranges except for /0.  Examples:    To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify 192.0.2.44/32.   To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24.   To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify 1111:0000:0000:0000:0000:0000:0000:0111/128.   To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify 1111:0000:0000:0000:0000:0000:0000:0000/64.   For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing.",
          args: {
            name: "list",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "update-regex-pattern-set",
      description: "Updates the specified RegexPatternSet.",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the set that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--regular-expression-list",
          args: {
            name: "list",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
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
      name: "update-rule-group",
      description:
        "Updates the specified RuleGroup.  A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the rule group that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.  For information about customizing web requests and responses, see Customizing web requests and responses in AWS WAF in the AWS WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see AWS WAF quotas in the AWS WAF Developer Guide.",
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
      name: "update-web-acl",
      description:
        "Updates the specified WebACL.  A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, or an AWS AppSync GraphQL API.",
      options: [
        {
          name: "--name",
          description:
            "The name of the Web ACL. You cannot change the name of a Web ACL after you create it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an AWS CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an API Gateway REST API, or an AppSync GraphQL API.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1.",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier for the Web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-action",
          description:
            "The action to perform if none of the Rules contained in the WebACL match.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "A description of the Web ACL that helps with identification.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. AWS WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. AWS WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.  For information about customizing web requests and responses, see Customizing web requests and responses in AWS WAF in the AWS WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see AWS WAF quotas in the AWS WAF Developer Guide.",
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
  ],
};
