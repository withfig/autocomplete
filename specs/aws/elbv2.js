var completionSpec = {
    name: "elbv2",
    description: "Elastic Load Balancing A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets. Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This reference covers the following load balancer types:   Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.   Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.   Gateway Load Balancer - Operates at the network layer (layer 3).   For more information, see the Elastic Load Balancing User Guide. All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.",
    subcommands: [
        {
            name: "add-listener-certificates",
            description: "Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener. If the certificate in already in the certificate list, the call is successful but the certificate is not added again. For more information, see HTTPS listeners in the Application Load Balancers Guide or TLS listeners in the Network Load Balancers Guide.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Name (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--certificates",
                    description: "The certificate to add. You can specify one certificate per call. Set CertificateArn to the certificate ARN but do not set IsDefault.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "add-tags",
            description: "Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, AddTags updates its value.",
            options: [
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Name (ARN) of the resource.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--tags",
                    description: "The tags.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-listener",
            description: "Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following:    Listeners for your Application Load Balancers     Listeners for your Network Load Balancers     Listeners for your Gateway Load Balancers    This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--protocol",
                    description: "The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can\u2019t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--port",
                    description: "The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--ssl-policy",
                    description: "[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see Security policies in the Application Load Balancers Guide and Security policies in the Network Load Balancers Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--certificates",
                    description: "[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set CertificateArn to the certificate ARN but do not set IsDefault.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--default-actions",
                    description: "The actions for the default rule.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--alpn-policy",
                    description: "[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:    HTTP1Only     HTTP2Only     HTTP2Optional     HTTP2Preferred     None    For more information, see ALPN policies in the Network Load Balancers Guide.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--tags",
                    description: "The tags to assign to the listener.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-load-balancer",
            description: "Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following:    Application Load Balancers     Network Load Balancers     Gateway Load Balancers    This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.",
            options: [
                {
                    name: "--name",
                    description: 'The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".',
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--subnets",
                    description: "The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers] You can specify subnets from one or more Availability Zones. [Gateway Load Balancers] You can specify subnets from one or more Availability Zones.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--subnet-mappings",
                    description: "The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet. [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--security-groups",
                    description: "[Application Load Balancers] The IDs of the security groups for the load balancer.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--scheme",
                    description: "The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer. You cannot specify a scheme for a Gateway Load Balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "The tags to assign to the load balancer.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--type",
                    description: "The type of load balancer. The default is application.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ip-address-type",
                    description: "The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses). Internal load balancers must use ipv4.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--customer-owned-ipv4-pool",
                    description: "[Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-rule",
            description: "Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see Listener rules in the Application Load Balancers Guide.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Name (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--conditions",
                    description: "The conditions.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--priority",
                    description: "The rule priority. A listener can't have multiple rules with the same priority.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--actions",
                    description: "The actions.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--tags",
                    description: "The tags to assign to the rule.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-target-group",
            description: "Creates a target group. For more information, see the following:    Target groups for your Application Load Balancers     Target groups for your Network Load Balancers     Target groups for your Gateway Load Balancers    This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.",
            options: [
                {
                    name: "--name",
                    description: "The name of the target group. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--protocol",
                    description: "The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--protocol-version",
                    description: "[HTTP/HTTPS protocol] The protocol version. Specify GRPC to send requests to targets using gRPC. Specify HTTP2 to send requests to targets using HTTP/2. The default is HTTP1, which sends requests to targets using HTTP/1.1.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--port",
                    description: "The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--vpc-id",
                    description: "The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-protocol",
                    description: "The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-port",
                    description: "The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is traffic-port, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-enabled",
                    description: "Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance or ip, health checks are always enabled and cannot be disabled.",
                },
                {
                    name: "--no-health-check-enabled",
                    description: "Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance or ip, health checks are always enabled and cannot be disabled.",
                },
                {
                    name: "--health-check-path",
                    description: "[HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-interval-seconds",
                    description: "The approximate amount of time, in seconds, between health checks of an individual target. If the target group protocol is TCP, TLS, UDP, or TCP_UDP, the supported values are 10 and 30 seconds. If the target group protocol is HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is lambda, the default is 35 seconds.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--health-check-timeout-seconds",
                    description: "The amount of time, in seconds, during which no response from a target means a failed health check. For target groups with a protocol of HTTP, HTTPS, or GENEVE, the default is 5 seconds. For target groups with a protocol of TCP or TLS, this value must be 6 seconds for HTTP health checks and 10 seconds for TCP and HTTPS health checks. If the target type is lambda, the default is 30 seconds.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--healthy-threshold-count",
                    description: "The number of consecutive health checks successes required before considering an unhealthy target healthy. For target groups with a protocol of HTTP or HTTPS, the default is 5. For target groups with a protocol of TCP, TLS, or GENEVE, the default is 3. If the target type is lambda, the default is 5.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--unhealthy-threshold-count",
                    description: "The number of consecutive health check failures required before considering a target unhealthy. If the target group protocol is HTTP or HTTPS, the default is 2. If the target group protocol is TCP or TLS, this value must be the same as the healthy threshold count. If the target group protocol is GENEVE, the default is 3. If the target type is lambda, the default is 2.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--matcher",
                    description: "[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--target-type",
                    description: "The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.    instance - Register targets by instance ID. This is the default value.    ip - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.    lambda - Register a single Lambda function as a target.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "The tags to assign to the target group.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-listener",
            description: "Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer to which it is attached.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Name (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-load-balancer",
            description: "Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-rule",
            description: "Deletes the specified rule. You can't delete the default rule.",
            options: [
                {
                    name: "--rule-arn",
                    description: "The Amazon Resource Name (ARN) of the rule.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-target-group",
            description: "Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "deregister-targets",
            description: "Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--targets",
                    description: "The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-account-limits",
            description: "Describes the current Elastic Load Balancing resource limits for your AWS account. For more information, see the following:    Quotas for your Application Load Balancers     Quotas for your Network Load Balancers     Quotas for your Gateway Load Balancers",
            options: [
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-listener-certificates",
            description: "Describes the default certificate and the certificate list for the specified HTTPS or TLS listener. If the default certificate is also in the certificate list, it appears twice in the results (once with IsDefault set to true and once with IsDefault set to false). For more information, see SSL certificates in the Application Load Balancers Guide or Server certificates in the Network Load Balancers Guide.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Names (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-listeners",
            description: "Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--listener-arns",
                    description: "The Amazon Resource Names (ARN) of the listeners.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-load-balancer-attributes",
            description: "Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following:    Load balancer attributes in the Application Load Balancers Guide     Load balancer attributes in the Network Load Balancers Guide     Load balancer attributes in the Gateway Load Balancers Guide",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-load-balancers",
            description: "Describes the specified load balancers or all of your load balancers.",
            options: [
                {
                    name: "--load-balancer-arns",
                    description: "The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--names",
                    description: "The names of the load balancers.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-rules",
            description: "Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Name (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--rule-arns",
                    description: "The Amazon Resource Names (ARN) of the rules.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-ssl-policies",
            description: "Describes the specified policies or all policies used for SSL negotiation. For more information, see Security policies in the Application Load Balancers Guide or Security policies in the Network Load Balancers Guide.",
            options: [
                {
                    name: "--names",
                    description: "The names of the policies.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-tags",
            description: "Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.",
            options: [
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-target-group-attributes",
            description: "Describes the attributes for the specified target group. For more information, see the following:    Target group attributes in the Application Load Balancers Guide     Target group attributes in the Network Load Balancers Guide     Target group attributes in the Gateway Load Balancers Guide",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-target-groups",
            description: "Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--target-group-arns",
                    description: "The Amazon Resource Names (ARN) of the target groups.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--names",
                    description: "The names of the target groups.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--marker",
                    description: "The marker for the next set of results. (You received this marker from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "describe-target-health",
            description: "Describes the health of the specified targets or all of your targets.",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--targets",
                    description: "The targets.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "modify-listener",
            description: "Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged. Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties. To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Name (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--port",
                    description: "The port for connections from clients to the load balancer. You cannot specify a port for a Gateway Load Balancer.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--protocol",
                    description: "The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and TCP_UDP protocols. You can\u2019t change the protocol to UDP or TCP_UDP if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ssl-policy",
                    description: "[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see Security policies in the Application Load Balancers Guide or Security policies in the Network Load Balancers Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--certificates",
                    description: "[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set CertificateArn to the certificate ARN but do not set IsDefault.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--default-actions",
                    description: "The actions for the default rule.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--alpn-policy",
                    description: "[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:    HTTP1Only     HTTP2Only     HTTP2Optional     HTTP2Preferred     None    For more information, see ALPN policies in the Network Load Balancers Guide.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "modify-load-balancer-attributes",
            description: "Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--attributes",
                    description: "The load balancer attributes.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "modify-rule",
            description: "Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged. To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.",
            options: [
                {
                    name: "--rule-arn",
                    description: "The Amazon Resource Name (ARN) of the rule.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--conditions",
                    description: "The conditions.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--actions",
                    description: "The actions.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "modify-target-group",
            description: "Modifies the health checks used when evaluating the health state of the targets in the specified target group.",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-protocol",
                    description: "The protocol the load balancer uses when performing health checks on targets. The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks. With Network Load Balancers, you can't modify this setting.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-port",
                    description: "The port the load balancer uses when performing health checks on targets.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-path",
                    description: "[HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-enabled",
                    description: "Indicates whether health checks are enabled.",
                },
                {
                    name: "--no-health-check-enabled",
                    description: "Indicates whether health checks are enabled.",
                },
                {
                    name: "--health-check-interval-seconds",
                    description: "The approximate amount of time, in seconds, between health checks of an individual target. For TCP health checks, the supported values are 10 or 30 seconds. With Network Load Balancers, you can't modify this setting.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--health-check-timeout-seconds",
                    description: "[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check. With Network Load Balancers, you can't modify this setting.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--healthy-threshold-count",
                    description: "The number of consecutive health checks successes required before considering an unhealthy target healthy.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--unhealthy-threshold-count",
                    description: "The number of consecutive health check failures required before considering the target unhealthy. For target groups with a protocol of TCP or TLS, this value must be the same as the healthy threshold count.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--matcher",
                    description: "[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. With Network Load Balancers, you can't modify this setting.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "modify-target-group-attributes",
            description: "Modifies the specified attributes of the specified target group.",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--attributes",
                    description: "The attributes.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "register-targets",
            description: "Registers the specified targets with the specified target group. If the target is an EC2 instance, it must be in the running state when you register it. By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports. With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.",
            options: [
                {
                    name: "--target-group-arn",
                    description: "The Amazon Resource Name (ARN) of the target group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--targets",
                    description: "The targets.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "remove-listener-certificates",
            description: "Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.",
            options: [
                {
                    name: "--listener-arn",
                    description: "The Amazon Resource Name (ARN) of the listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--certificates",
                    description: "The certificate to remove. You can specify one certificate per call. Set CertificateArn to the certificate ARN but do not set IsDefault.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "remove-tags",
            description: "Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.",
            options: [
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Name (ARN) of the resource.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--tag-keys",
                    description: "The tag keys for the tags to remove.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "set-ip-address-type",
            description: "Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ip-address-type",
                    description: "The IP address type. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses). Internal load balancers must use ipv4. You can\u2019t specify dualstack for a load balancer with a UDP or TCP_UDP listener.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "set-rule-priorities",
            description: "Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.",
            options: [
                {
                    name: "--rule-priorities",
                    description: "The rule priorities.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "set-security-groups",
            description: "Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups. You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--security-groups",
                    description: "The IDs of the security groups.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "set-subnets",
            description: "Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets. When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.",
            options: [
                {
                    name: "--load-balancer-arn",
                    description: "The Amazon Resource Name (ARN) of the load balancer.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--subnets",
                    description: "The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers] You can specify subnets from one or more Availability Zones.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--subnet-mappings",
                    description: "The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings. [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets. [Application Load Balancers on Outposts] You must specify one Outpost subnet. [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones. [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--ip-address-type",
                    description: "[Network Load Balancers] The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses). You can\u2019t specify dualstack for a load balancer with a UDP or TCP_UDP listener. Internal load balancers must use ipv4.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "wait",
            description: "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
            subcommands: [
                {
                    name: "load-balancer-available",
                    description: "Wait until JMESPath query LoadBalancers[].State.Code returns active for all elements when polling with ``describe-load-balancers``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
                    options: [
                        {
                            name: "--load-balancer-arns",
                            description: "The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--names",
                            description: "The names of the load balancers.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--marker",
                            description: "The marker for the next set of results. (You received this marker from a previous call.)",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--page-size",
                            description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "integer",
                            },
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--starting-token",
                            description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--max-items",
                            description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "integer",
                            },
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                        },
                    ],
                },
                {
                    name: "load-balancer-exists",
                    description: "Wait until 200 response is received when polling with ``describe-load-balancers``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
                    options: [
                        {
                            name: "--load-balancer-arns",
                            description: "The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--names",
                            description: "The names of the load balancers.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--marker",
                            description: "The marker for the next set of results. (You received this marker from a previous call.)",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--page-size",
                            description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "integer",
                            },
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--starting-token",
                            description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--max-items",
                            description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "integer",
                            },
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                        },
                    ],
                },
                {
                    name: "load-balancers-deleted",
                    description: "Wait until LoadBalancerNotFound is thrown when polling with ``describe-load-balancers``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
                    options: [
                        {
                            name: "--load-balancer-arns",
                            description: "The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--names",
                            description: "The names of the load balancers.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--marker",
                            description: "The marker for the next set of results. (You received this marker from a previous call.)",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--page-size",
                            description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "integer",
                            },
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--starting-token",
                            description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--max-items",
                            description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                            args: {
                                name: "integer",
                            },
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                        },
                    ],
                },
                {
                    name: "target-deregistered",
                    description: "Wait until InvalidTarget is thrown when polling with ``describe-target-health``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
                    options: [
                        {
                            name: "--target-group-arn",
                            description: "The Amazon Resource Name (ARN) of the target group.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--targets",
                            description: "The targets.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                        },
                    ],
                },
                {
                    name: "target-in-service",
                    description: "Wait until JMESPath query TargetHealthDescriptions[].TargetHealth.State returns healthy for all elements when polling with ``describe-target-health``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks.",
                    options: [
                        {
                            name: "--target-group-arn",
                            description: "The Amazon Resource Name (ARN) of the target group.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--targets",
                            description: "The targets.",
                            args: {
                                name: "list",
                            },
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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

