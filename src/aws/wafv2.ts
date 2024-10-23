const completionSpec: Fig.Spec = {
  name: "wafv2",
  description:
    'WAF  This is the latest version of the WAF API, released in November, 2019. The names of the entities that you use to access this API, like endpoints and namespaces, all have the versioning information added, like "V2" or "v2", to distinguish from the prior version. We recommend migrating your resources to this version, because it has a number of significant improvements. If you used WAF prior to this release, you can\'t use this WAFV2 API to access any WAF resources that you created before. WAF Classic support will end on September 30, 2025.  For information about WAF, including how to migrate your WAF Classic resources to this version, see the WAF Developer Guide.   WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to an Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, or Amazon Web Services Verified Access instance. WAF also lets you control access to your content, to protect the Amazon Web Services resource that WAF is monitoring. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, the protected resource responds to requests with either the requested content, an HTTP 403 status code (Forbidden), or with a custom response.  This API guide is for developers who need detailed information about WAF API actions, data types, and errors. For detailed information about WAF features and guidance for configuring and using WAF, see the WAF Developer Guide. You can make calls using the endpoints listed in WAF endpoints and quotas.    For regional applications, you can use any of the endpoints in the list. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.    For Amazon CloudFront applications, you must use the API endpoint listed for US East (N. Virginia): us-east-1.   Alternatively, you can use one of the Amazon Web Services SDKs to access an API that\'s tailored to the programming language or platform that you\'re using. For more information, see Amazon Web Services SDKs',
  subcommands: [
    {
      name: "associate-web-acl",
      description:
        "Associates a web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a web ACL, in the CloudFront call UpdateDistribution, set the web ACL ID to the Amazon Resource Name (ARN) of the web ACL. For information, see UpdateDistribution in the Amazon CloudFront Developer Guide.   Required permissions for customer-managed IAM policies  This call requires permissions that are specific to the protected resource type. For details, see Permissions for AssociateWebACL in the WAF Developer Guide.   Temporary inconsistencies during updates  When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.  The following are examples of the temporary inconsistencies that you might notice during change propagation:    After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.    After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.   After you change a rule action setting, you might see the old action in some places and the new action in others.    After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another",
      options: [
        {
          name: "--web-acl-arn",
          description:
            "The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to associate with the web ACL.  The ARN must be in one of the following formats:   For an Application Load Balancer: arn:partition:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id     For an Amazon API Gateway REST API: arn:partition:apigateway:region::/restapis/api-id/stages/stage-name     For an AppSync GraphQL API: arn:partition:appsync:region:account-id:apis/GraphQLApiId     For an Amazon Cognito user pool: arn:partition:cognito-idp:region:account-id:userpool/user-pool-id     For an App Runner service: arn:partition:apprunner:region:account-id:service/apprunner-service-name/apprunner-service-id     For an Amazon Web Services Verified Access instance: arn:partition:ec2:region:account-id:verified-access-instance/instance-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules. You can use this to check the capacity requirements for the rules you want to use in a RuleGroup or WebACL.  WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU) in the WAF Developer Guide",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "An array of Rule that you're configuring to use in a rule group or web ACL",
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
      name: "create-api-key",
      description:
        "Creates an API key that contains a set of token domains. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide. You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--token-domains",
          description:
            'The client application domains that you want to use this API key for.  Example JSON: "TokenDomains": ["abc.com", "store.abc.com"]  Public suffixes aren\'t allowed. For example, you can\'t use gov.au or co.uk as token domains',
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
      name: "create-ip-set",
      description:
        "Creates an IPSet, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure WAF to block them using an IPSet that lists those IP addresses",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the IP set that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address-version",
          description: "The version of the IP addresses, either IPV4 or IPV6",
          args: {
            name: "string",
          },
        },
        {
          name: "--addresses",
          description:
            'Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0.  Example address strings:    For requests that originated from the IP address 192.0.2.44, specify 192.0.2.44/32.   For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24.   For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify 1111:0000:0000:0000:0000:0000:0000:0111/128.   For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify 1111:0000:0000:0000:0000:0000:0000:0000/64.   For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing. Example JSON Addresses specifications:    Empty array: "Addresses": []    Array with one address: "Addresses": ["192.0.2.44/32"]    Array with three addresses: "Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]    INVALID specification: "Addresses": [""] INVALID',
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource",
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
      name: "create-regex-pattern-set",
      description:
        "Creates a RegexPatternSet, which you reference in a RegexPatternSetReferenceStatement, to have WAF inspect a web request component for the specified patterns",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the set that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--regular-expression-list",
          description: "Array of regular expression strings",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource",
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
      name: "create-rule-group",
      description:
        "Creates a RuleGroup per the specifications provided.   A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity",
          description:
            "The web ACL capacity units (WCUs) required for this rule group. When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using CheckCapacity. WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU) in the WAF Developer Guide",
          args: {
            name: "long",
          },
        },
        {
          name: "--description",
          description:
            "A description of the rule group that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.  For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide",
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
      name: "create-web-acl",
      description:
        "Creates a WebACL per the specifications provided.  A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance",
      options: [
        {
          name: "--name",
          description:
            "The name of the web ACL. You cannot change the name of a web ACL after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-action",
          description:
            "The action to perform if none of the Rules contained in the WebACL match",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "A description of the web ACL that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.  For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--captcha-config",
          description:
            "Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own CaptchaConfig settings. If you don't specify this, WAF uses its default settings for CaptchaConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--challenge-config",
          description:
            "Specifies how WAF should handle challenge evaluations for rules that don't have their own ChallengeConfig settings. If you don't specify this, WAF uses its default settings for ChallengeConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--token-domains",
          description:
            'Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don\'t specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource\'s host domain plus all domains in the token domain list, including their prefixed subdomains. Example JSON: "TokenDomains": { "mywebsite.com", "myotherwebsite.com" }  Public suffixes aren\'t allowed. For example, you can\'t use gov.au or co.uk as token domains',
          args: {
            name: "list",
          },
        },
        {
          name: "--association-config",
          description:
            "Specifies custom configurations for the associations between the web ACL and protected resources.  Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).   You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see WAF Pricing.  For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes)",
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
      name: "delete-api-key",
      description:
        "Deletes the specified API key.  After you delete a key, it can take up to 24 hours for WAF to disallow use of the key in all regions",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-key",
          description: "The encrypted API key that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Deletes all rule groups that are managed by Firewall Manager from the specified WebACL.  You can only use this if ManagedByFirewallManager and RetrofittedByFirewallManager are both false in the web ACL",
      options: [
        {
          name: "--web-acl-arn",
          description: "The Amazon Resource Name (ARN) of the web ACL",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-acl-lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes the specified IPSet",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        "Deletes the LoggingConfiguration from the specified web ACL",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the web ACL from which you want to delete the LoggingConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-type",
          description:
            "Used to distinguish between various logging options. Currently, there is one option. Default: WAF_LOGS",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-scope",
          description:
            "The owner of the logging configuration, which must be set to CUSTOMER for the configurations that you manage.  The log scope SECURITY_LAKE indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see Collecting data from Amazon Web Services services in the Amazon Security Lake user guide.  Default: CUSTOMER",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Permanently deletes an IAM policy from the specified rule group. You must be the owner of the rule group to perform this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group from which you want to delete the policy. You must be the owner of the rule group to perform this operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-regex-pattern-set",
      description: "Deletes the specified RegexPatternSet",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-rule-group",
      description: "Deletes the specified RuleGroup",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Deletes the specified WebACL.  You can only use this if ManagedByFirewallManager is false in the web ACL.   Before deleting any web ACL, first disassociate it from all resources.   To retrieve a list of the resources that are associated with a web ACL, use the following calls:   For regional resources, call ListResourcesForWebACL.   For Amazon CloudFront distributions, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference.      To disassociate a resource from a web ACL, use the following calls:   For regional resources, call DisassociateWebACL.   For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution in the Amazon CloudFront API Reference",
      options: [
        {
          name: "--name",
          description:
            "The name of the web ACL. You cannot change the name of a web ACL after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-all-managed-products",
      description:
        "Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-managed-products-by-vendor",
      description:
        "Provides high-level information for the managed rule groups owned by a specific vendor",
      options: [
        {
          name: "--vendor-name",
          description:
            "The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Provides high-level information for a managed rule group, including descriptions of the rules",
      options: [
        {
          name: "--vendor-name",
          description:
            "The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the managed rule group. You use this, along with the vendor name, to identify the rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-name",
          description:
            "The version of the rule group. You can only use a version that is not scheduled for expiration. If you don't provide this, WAF uses the vendor's default version",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Disassociates the specified regional application resource from any existing web ACL association. A resource can have at most one web ACL association. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To disassociate a web ACL, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution in the Amazon CloudFront API Reference.   Required permissions for customer-managed IAM policies  This call requires permissions that are specific to the protected resource type. For details, see Permissions for DisassociateWebACL in the WAF Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL.  The ARN must be in one of the following formats:   For an Application Load Balancer: arn:partition:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id     For an Amazon API Gateway REST API: arn:partition:apigateway:region::/restapis/api-id/stages/stage-name     For an AppSync GraphQL API: arn:partition:appsync:region:account-id:apis/GraphQLApiId     For an Amazon Cognito user pool: arn:partition:cognito-idp:region:account-id:userpool/user-pool-id     For an App Runner service: arn:partition:apprunner:region:account-id:service/apprunner-service-name/apprunner-service-id     For an Amazon Web Services Verified Access instance: arn:partition:ec2:region:account-id:verified-access-instance/instance-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "generate-mobile-sdk-release-url",
      description:
        "Generates a presigned download URL for the specified release of the mobile SDK. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide",
      options: [
        {
          name: "--platform",
          description: "The device platform",
          args: {
            name: "string",
          },
        },
        {
          name: "--release-version",
          description:
            "The release version. For the latest available version, specify LATEST",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-decrypted-api-key",
      description:
        "Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key.  API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-key",
          description: "The encrypted API key",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Retrieves the specified IPSet",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-logging-configuration",
      description: "Returns the LoggingConfiguration for the specified web ACL",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the web ACL for which you want to get the LoggingConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-type",
          description:
            "Used to distinguish between various logging options. Currently, there is one option. Default: WAF_LOGS",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-scope",
          description:
            "The owner of the logging configuration, which must be set to CUSTOMER for the configurations that you manage.  The log scope SECURITY_LAKE indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see Collecting data from Amazon Web Services services in the Amazon Security Lake user guide.  Default: CUSTOMER",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-managed-rule-set",
      description:
        "Retrieves the specified managed rule set.   This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.  Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate",
      options: [
        {
          name: "--name",
          description:
            "The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set. This name is assigned to the corresponding managed rule group, which your customers can access and use",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the managed rule set. The ID is returned in the responses to commands like list. You provide it to operations like get and update",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-mobile-sdk-release",
      description:
        "Retrieves information for the specified mobile SDK release, including release notes and tags. The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide",
      options: [
        {
          name: "--platform",
          description: "The device platform",
          args: {
            name: "string",
          },
        },
        {
          name: "--release-version",
          description:
            "The release version. For the latest available version, specify LATEST",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Returns the IAM policy that is attached to the specified rule group. You must be the owner of the rule group to perform this operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the rule group for which you want to get the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Retrieves the IP addresses that are currently blocked by a rate-based rule instance. This is only available for rate-based rules that aggregate solely on the IP address or on the forwarded IP address.  The maximum number of addresses that can be blocked for a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked. For a rate-based rule that you've defined inside a rule group, provide the name of the rule group reference statement in your request, in addition to the rate-based rule name and the web ACL name.  WAF monitors web requests and manages keys independently for each unique combination of web ACL, optional rule group, and rate-based rule. For example, if you define a rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF monitors web requests and manages keys for that web ACL, rule group reference statement, and rate-based rule instance. If you use the same rule group in a second web ACL, WAF monitors web requests and manages keys for this second usage completely independent of your first",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-acl-name",
          description:
            "The name of the web ACL. You cannot change the name of a web ACL after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-acl-id",
          description:
            "The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-group-rule-name",
          description:
            "The name of the rule group reference statement in your web ACL. This is required only when you have the rate-based rule nested inside a rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-name",
          description:
            "The name of the rate-based rule to get the keys for. If you have the rule defined inside a rule group that you're using in your web ACL, also provide the name of the rule group reference statement in the request parameter RuleGroupRuleName",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-regex-pattern-set",
      description: "Retrieves the specified RegexPatternSet",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-rule-group",
      description: "Retrieves the specified RuleGroup",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN) of the entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Gets detailed information about a specified number of requests--a sample--that WAF randomly selects from among the first 5,000 requests that your Amazon Web Services resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.  GetSampledRequests returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, GetSampledRequests returns an updated time range. This new time range indicates the actual period during which WAF selected the requests in the sample",
      options: [
        {
          name: "--web-acl-arn",
          description:
            "The Amazon resource name (ARN) of the WebACL for which you want a sample of requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-metric-name",
          description:
            "The metric name assigned to the Rule or RuleGroup dimension for which you want a sample of requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-window",
          description:
            'The start date and time and the end date and time of the range for which you want GetSampledRequests to return a sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". You can specify any time range in the previous three hours. If you specify a start time that\'s earlier than three hours ago, WAF sets it to three hours ago',
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-items",
          description:
            "The number of requests that you want WAF to return from among the first 5,000 requests that your Amazon Web Services resource received during the time range. If your resource received fewer requests than the value of MaxItems, GetSampledRequests returns information about all of them",
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
      name: "get-web-acl",
      description: "Retrieves the specified WebACL",
      options: [
        {
          name: "--name",
          description:
            "The name of the web ACL. You cannot change the name of a web ACL after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-web-acl-for-resource",
      description:
        "Retrieves the WebACL for the specified resource.  This call uses GetWebACL, to verify that your account has permission to access the retrieved web ACL. If you get an error that indicates that your account isn't authorized to perform wafv2:GetWebACL on the resource, that error won't be included in your CloudTrail event history.  For Amazon CloudFront, don't use this call. Instead, call the CloudFront action GetDistributionConfig. For information, see GetDistributionConfig in the Amazon CloudFront API Reference.   Required permissions for customer-managed IAM policies  This call requires permissions that are specific to the protected resource type. For details, see Permissions for GetWebACLForResource in the WAF Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose web ACL you want to retrieve.  The ARN must be in one of the following formats:   For an Application Load Balancer: arn:partition:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id     For an Amazon API Gateway REST API: arn:partition:apigateway:region::/restapis/api-id/stages/stage-name     For an AppSync GraphQL API: arn:partition:appsync:region:account-id:apis/GraphQLApiId     For an Amazon Cognito user pool: arn:partition:cognito-idp:region:account-id:userpool/user-pool-id     For an App Runner service: arn:partition:apprunner:region:account-id:service/apprunner-service-name/apprunner-service-id     For an Amazon Web Services Verified Access instance: arn:partition:ec2:region:account-id:verified-access-instance/instance-id",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-api-keys",
      description:
        "Retrieves a list of the API keys that you've defined for the specified scope.  API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-available-managed-rule-group-versions",
      description:
        "Returns a list of the available versions for the specified managed rule group",
      options: [
        {
          name: "--vendor-name",
          description:
            "The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the managed rule group. You use this, along with the vendor name, to identify the rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-available-managed-rule-groups",
      description:
        "Retrieves an array of managed rule groups that are available for you to use. This list includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're subscribed to",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-ip-sets",
      description:
        "Retrieves an array of IPSetSummary objects for the IP sets that you manage",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-logging-configurations",
      description: "Retrieves an array of your LoggingConfiguration objects",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
          args: {
            name: "integer",
          },
        },
        {
          name: "--log-scope",
          description:
            "The owner of the logging configuration, which must be set to CUSTOMER for the configurations that you manage.  The log scope SECURITY_LAKE indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see Collecting data from Amazon Web Services services in the Amazon Security Lake user guide.  Default: CUSTOMER",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-managed-rule-sets",
      description:
        "Retrieves the managed rule sets that you own.   This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.  Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-mobile-sdk-releases",
      description:
        "Retrieves a list of the available releases for the mobile SDK and the specified device platform.  The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see WAF client application integration in the WAF Developer Guide",
      options: [
        {
          name: "--platform",
          description: "The device platform to retrieve the list for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-regex-pattern-sets",
      description:
        "Retrieves an array of RegexPatternSetSummary objects for the regex pattern sets that you manage",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-resources-for-web-acl",
      description:
        "Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL.  For Amazon CloudFront, don't use this call. Instead, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference.   Required permissions for customer-managed IAM policies  This call requires permissions that are specific to the protected resource type. For details, see Permissions for ListResourcesForWebACL in the WAF Developer Guide",
      options: [
        {
          name: "--web-acl-arn",
          description: "The Amazon Resource Name (ARN) of the web ACL",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Used for web ACLs that are scoped for regional applications. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.   If you don't provide a resource type, the call uses the resource type APPLICATION_LOAD_BALANCER.   Default: APPLICATION_LOAD_BALANCER",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Retrieves an array of RuleGroupSummary objects for the rule groups that you manage",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "list-tags-for-resource",
      description:
        'Retrieves the TagInfoForResource for the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the WAF console',
      options: [
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Retrieves an array of WebACLSummary objects for the web ACLs that you manage",
      options: [
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-marker",
          description:
            "When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a NextMarker value that you can use in a subsequent call to get the next batch of objects",
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
      name: "put-logging-configuration",
      description:
        "Enables the specified LoggingConfiguration, to start logging from a web ACL, according to the configuration provided.   This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call.  To modify an existing logging configuration, do the following:    Retrieve it by calling GetLoggingConfiguration    Update its settings as needed   Provide the complete logging configuration specification to this call     You can define one logging destination per web ACL.  You can access information about the traffic that WAF inspects using the following steps:   Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.  The name that you give the destination must start with aws-waf-logs-. Depending on the type of destination, you might need to configure additional settings or permissions.  For configuration requirements and pricing information for each destination type, see Logging web ACL traffic in the WAF Developer Guide.   Associate your logging destination to your web ACL using a PutLoggingConfiguration request.   When you successfully enable logging using a PutLoggingConfiguration request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role. For additional information about web ACL logging, see Logging web ACL traffic information in the WAF Developer Guide",
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
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-managed-rule-set-versions",
      description:
        "Defines the versions of your managed rule set that you are offering to the customers. Customers see your offerings as managed rule groups with versioning.  This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.  Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.  Customers retrieve their managed rule group list by calling ListAvailableManagedRuleGroups. The name that you provide here for your managed rule set is the name the customer sees for the corresponding managed rule group. Customers can retrieve the available versions for a managed rule group by calling ListAvailableManagedRuleGroupVersions. You provide a rule group specification for each version. For each managed rule set, you must specify a version that you recommend using.  To initiate the expiration of a managed rule group version, use UpdateManagedRuleSetVersionExpiryDate",
      options: [
        {
          name: "--name",
          description:
            "The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set. This name is assigned to the corresponding managed rule group, which your customers can access and use",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the managed rule set. The ID is returned in the responses to commands like list. You provide it to operations like get and update",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommended-version",
          description:
            "The version of the named managed rule group that you'd like your customers to choose, from among your version offerings",
          args: {
            name: "string",
          },
        },
        {
          name: "--versions-to-publish",
          description:
            "The versions of the named managed rule group that you want to offer to your customers",
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
      name: "put-permission-policy",
      description:
        "Use this to share a rule group with other accounts. This action attaches an IAM policy to the specified resource. You must be the owner of the rule group to perform this operation. This action is subject to the following restrictions:   You can attach only one policy with each PutPermissionPolicy request.   The ARN in the request must be a valid WAF RuleGroup ARN and the rule group must exist in the same Region.   The user making the request must be the owner of the rule group.   If a rule group has been shared with your account, you can access it through the call GetRuleGroup, and you can reference it in CreateWebACL and UpdateWebACL. Rule groups that are shared with you don't appear in your WAF console rule groups listing",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the RuleGroup to which you want to attach the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "The policy to attach to the specified rule group.  The policy specifications must conform to the following:   The policy must be composed using IAM Policy version 2012-10-17.   The policy must include specifications for Effect, Action, and Principal.    Effect must specify Allow.    Action must specify wafv2:CreateWebACL, wafv2:UpdateWebACL, and wafv2:PutFirewallManagerRuleGroups and may optionally specify wafv2:GetRuleGroup. WAF rejects any extra actions or wildcard actions in the policy.   The policy must not include a Resource parameter.   For more information, see IAM Policies",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        'Associates tags with the specified Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can\'t manage or view tags through the WAF console',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of key:value pairs to associate with the resource",
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
        'Disassociates tags from an Amazon Web Services resource. Tags are key:value pairs that you can associate with Amazon Web Services resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each Amazon Web Services resource',
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "An array of keys identifying the tags to disassociate from the resource",
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
      name: "update-ip-set",
      description:
        "Updates the specified IPSet.   This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call.  To modify an IP set, do the following:    Retrieve it by calling GetIPSet    Update its settings as needed   Provide the complete IP set specification to this call     Temporary inconsistencies during updates  When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.  The following are examples of the temporary inconsistencies that you might notice during change propagation:    After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.    After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.   After you change a rule action setting, you might see the old action in some places and the new action in others.    After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another",
      options: [
        {
          name: "--name",
          description:
            "The name of the IP set. You cannot change the name of an IPSet after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the IP set that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--addresses",
          description:
            'Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0.  Example address strings:    For requests that originated from the IP address 192.0.2.44, specify 192.0.2.44/32.   For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24.   For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify 1111:0000:0000:0000:0000:0000:0000:0111/128.   For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify 1111:0000:0000:0000:0000:0000:0000:0000/64.   For more information about CIDR notation, see the Wikipedia entry Classless Inter-Domain Routing. Example JSON Addresses specifications:    Empty array: "Addresses": []    Array with one address: "Addresses": ["192.0.2.44/32"]    Array with three addresses: "Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]    INVALID specification: "Addresses": [""] INVALID',
          args: {
            name: "list",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-managed-rule-set-version-expiry-date",
      description:
        "Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to ListAvailableManagedRuleGroupVersions for the managed rule group.   This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.  Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate",
      options: [
        {
          name: "--name",
          description:
            "The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set. This name is assigned to the corresponding managed rule group, which your customers can access and use",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the managed rule set. The ID is returned in the responses to commands like list. You provide it to operations like get and update",
          args: {
            name: "string",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-to-expire",
          description:
            "The version that you want to remove from your list of offerings for the named managed rule group",
          args: {
            name: "string",
          },
        },
        {
          name: "--expiry-timestamp",
          description:
            'The time that you want the version to expire. Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z"',
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
      name: "update-regex-pattern-set",
      description:
        "Updates the specified RegexPatternSet.  This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call.  To modify a regex pattern set, do the following:    Retrieve it by calling GetRegexPatternSet    Update its settings as needed   Provide the complete regex pattern set specification to this call     Temporary inconsistencies during updates  When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.  The following are examples of the temporary inconsistencies that you might notice during change propagation:    After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.    After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.   After you change a rule action setting, you might see the old action in some places and the new action in others.    After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another",
      options: [
        {
          name: "--name",
          description:
            "The name of the set. You cannot change the name after you create the set",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the set that helps with identification",
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
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
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
        "Updates the specified RuleGroup.  This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call.  To modify a rule group, do the following:    Retrieve it by calling GetRuleGroup    Update its settings as needed   Provide the complete rule group specification to this call     A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.   Temporary inconsistencies during updates  When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.  The following are examples of the temporary inconsistencies that you might notice during change propagation:    After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.    After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.   After you change a rule action setting, you might see the old action in some places and the new action in others.    After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another",
      options: [
        {
          name: "--name",
          description:
            "The name of the rule group. You cannot change the name of a rule group after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the rule group that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.  For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide",
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
      name: "update-web-acl",
      description:
        "Updates the specified WebACL. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL.   This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call.  To modify a web ACL, do the following:    Retrieve it by calling GetWebACL    Update its settings as needed   Provide the complete web ACL specification to this call     A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.   Temporary inconsistencies during updates  When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.  The following are examples of the temporary inconsistencies that you might notice during change propagation:    After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.    After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.   After you change a rule action setting, you might see the old action in some places and the new action in others.    After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another",
      options: [
        {
          name: "--name",
          description:
            "The name of the web ACL. You cannot change the name of a web ACL after you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:    CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1.    API and SDKs - For all calls, use the Region endpoint us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-action",
          description:
            "The action to perform if none of the Rules contained in the WebACL match",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "A description of the web ACL that helps with identification",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them",
          args: {
            name: "list",
          },
        },
        {
          name: "--visibility-config",
          description:
            "Defines and enables Amazon CloudWatch metrics and web request sample collection",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lock-token",
          description:
            "A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-response-bodies",
          description:
            "A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.  For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide.  For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--captcha-config",
          description:
            "Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own CaptchaConfig settings. If you don't specify this, WAF uses its default settings for CaptchaConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--challenge-config",
          description:
            "Specifies how WAF should handle challenge evaluations for rules that don't have their own ChallengeConfig settings. If you don't specify this, WAF uses its default settings for ChallengeConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--token-domains",
          description:
            'Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don\'t specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource\'s host domain plus all domains in the token domain list, including their prefixed subdomains. Example JSON: "TokenDomains": { "mywebsite.com", "myotherwebsite.com" }  Public suffixes aren\'t allowed. For example, you can\'t use gov.au or co.uk as token domains',
          args: {
            name: "list",
          },
        },
        {
          name: "--association-config",
          description:
            "Specifies custom configurations for the associations between the web ACL and protected resources.  Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).   You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see WAF Pricing.  For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes)",
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
