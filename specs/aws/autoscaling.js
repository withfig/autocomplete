var completionSpec = {
    name: "autoscaling",
    description: "Amazon EC2 Auto Scaling Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks. Use this service with AWS Auto Scaling, Amazon CloudWatch, and Elastic Load Balancing. For more information, including information about granting IAM users required permissions for Amazon EC2 Auto Scaling actions, see the Amazon EC2 Auto Scaling User Guide.",
    subcommands: [
        {
            name: "attach-instances",
            description: "Attaches one or more EC2 instances to the specified Auto Scaling group. When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails. If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups. For more information, see Attach EC2 instances to your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--instance-ids",
                    description: "The IDs of the instances. You can specify up to 20 instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
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
            name: "attach-load-balancer-target-groups",
            description: "Attaches one or more target groups to the specified Auto Scaling group. This operation is used with the following load balancer types:     Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.     Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.     Gateway Load Balancer - Operates at the network layer (layer 3).   To describe the target groups for an Auto Scaling group, call the DescribeLoadBalancerTargetGroups API. To detach the target group from the Auto Scaling group, call the DetachLoadBalancerTargetGroups API. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--target-group-arns",
                    description: "The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing DescribeTargetGroups API operation.",
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
            name: "attach-load-balancers",
            description: "To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the AttachLoadBalancerTargetGroups API operation instead.  Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers. To describe the load balancers for an Auto Scaling group, call the DescribeLoadBalancers API. To detach the load balancer from the Auto Scaling group, call the DetachLoadBalancers API. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--load-balancer-names",
                    description: "The names of the load balancers. You can specify up to 10 load balancers.",
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
            name: "batch-delete-scheduled-action",
            description: "Deletes one or more scheduled actions for the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scheduled-action-names",
                    description: "The names of the scheduled actions to delete. The maximum number allowed is 50.",
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
            name: "batch-put-scheduled-update-group-action",
            description: "Creates or updates one or more scheduled scaling actions for an Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scheduled-update-group-actions",
                    description: "One or more scheduled actions. The maximum number allowed is 50.",
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
            name: "cancel-instance-refresh",
            description: "Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.  For more information, see Replacing Auto Scaling instances based on an instance refresh in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
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
            name: "complete-lifecycle-action",
            description: "Completes the lifecycle action for the specified token or instance with the specified result. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.   If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.    If you finish before the timeout period ends, complete the lifecycle action.    For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--lifecycle-hook-name",
                    description: "The name of the lifecycle hook.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--lifecycle-action-token",
                    description: "A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--lifecycle-action-result",
                    description: "The action for the group to take. This parameter can be either CONTINUE or ABANDON.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--instance-id",
                    description: "The ID of the instance.",
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
            name: "create-auto-scaling-group",
            description: "We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Creates an Auto Scaling group with the specified name and attributes.  If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide. For introductory exercises for creating an Auto Scaling group, see Getting started with Amazon EC2 Auto Scaling and Tutorial: Set up a scaled and load-balanced application in the Amazon EC2 Auto Scaling User Guide. For more information, see Auto Scaling groups in the Amazon EC2 Auto Scaling User Guide. Every Auto Scaling group has three size parameters (DesiredCapacity, MaxSize, and MinSize). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group. This name must be unique per Region per account.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--launch-configuration-name",
                    description: "The name of the launch configuration to use to launch instances.  Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--launch-template",
                    description: "Parameters used to specify the launch template and version to use to launch instances.  Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).  The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see Creating a launch template for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--mixed-instances-policy",
                    description: "An embedded object that specifies a mixed instances policy. The required properties must be specified. If optional properties are unspecified, their default values are used. The policy includes properties that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities, but also the properties that specify the instance configuration information\u2014the launch template and instance types. The policy can also include a weight for each instance type and different launch templates for individual instance types. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--instance-id",
                    description: "The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 DescribeInstances API operation. For more information, see Creating an Auto Scaling group using an EC2 instance in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--min-size",
                    description: "The minimum size of the group.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-size",
                    description: "The maximum size of the group.  With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--desired-capacity",
                    description: "The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--default-cooldown",
                    description: "The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is 300. This setting applies when using simple scaling policies, but not when using other scaling policies or scheduled scaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--availability-zones",
                    description: "A list of Availability Zones where instances in the Auto Scaling group can be created. This parameter is optional if you specify one or more subnets for VPCZoneIdentifier. Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into EC2-Classic.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--load-balancer-names",
                    description: "A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the TargetGroupARNs property instead.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--target-group-arns",
                    description: "The Amazon Resource Names (ARN) of the target groups to associate with the Auto Scaling group. Instances are registered as targets in a target group, and traffic is routed to the target group. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--health-check-type",
                    description: "The service to use for the health checks. The valid values are EC2 (default) and ELB. If you configure an Auto Scaling group to use load balancer (ELB) health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks. For more information, see Health checks for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-grace-period",
                    description: "The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. During this time, any health check failures for the instance are ignored. The default value is 0. For more information, see Health check grace period in the Amazon EC2 Auto Scaling User Guide. Conditional: Required if you are adding an ELB health check.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--placement-group",
                    description: "The name of an existing placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see Placement Groups in the Amazon EC2 User Guide for Linux Instances.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--vpc-zone-identifier",
                    description: "A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify for this parameter must reside in those Availability Zones. Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into a VPC.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--termination-policies",
                    description: "A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see Controlling which Auto Scaling instances terminate during scale in in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--new-instances-protected-from-scale-in",
                    description: "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--no-new-instances-protected-from-scale-in",
                    description: "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--capacity-rebalance",
                    description: "Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Amazon EC2 Auto Scaling Capacity Rebalancing in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--no-capacity-rebalance",
                    description: "Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Amazon EC2 Auto Scaling Capacity Rebalancing in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--lifecycle-hook-specification-list",
                    description: "One or more lifecycle hooks for the group, which specify actions to perform when Amazon EC2 Auto Scaling launches or terminates instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--tags",
                    description: "One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--service-linked-role-arn",
                    description: "The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-instance-lifetime",
                    description: "The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see Replacing Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.",
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
            name: "create-launch-configuration",
            description: "Creates a launch configuration. If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide. For more information, see Launch configurations in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--launch-configuration-name",
                    description: "The name of the launch configuration. This name must be unique per Region per account.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--image-id",
                    description: "The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see Finding an AMI in the Amazon EC2 User Guide for Linux Instances. If you do not specify InstanceId, you must specify ImageId.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--key-name",
                    description: "The name of the key pair. For more information, see Amazon EC2 Key Pairs in the Amazon EC2 User Guide for Linux Instances.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--security-groups",
                    description: "A list that contains the security groups to assign to the instances in the Auto Scaling group. [EC2-VPC] Specify the security group IDs. For more information, see Security Groups for Your VPC in the Amazon Virtual Private Cloud User Guide. [EC2-Classic] Specify either the security group names or the security group IDs. For more information, see Amazon EC2 Security Groups in the Amazon EC2 User Guide for Linux Instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--classic-link-vpc-id",
                    description: "The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. For more information, see ClassicLink in the Amazon EC2 User Guide for Linux Instances and Linking EC2-Classic instances to a VPC in the Amazon EC2 Auto Scaling User Guide. This parameter can only be used if you are launching EC2-Classic instances.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--classic-link-vpc-security-groups",
                    description: "The IDs of one or more security groups for the specified ClassicLink-enabled VPC. For more information, see ClassicLink in the Amazon EC2 User Guide for Linux Instances and Linking EC2-Classic instances to a VPC in the Amazon EC2 Auto Scaling User Guide. If you specify the ClassicLinkVPCId parameter, you must specify this parameter.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--user-data",
                    description: "The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--instance-id",
                    description: "The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping. To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request. For more information, see Creating a launch configuration using an EC2 instance in the Amazon EC2 Auto Scaling User Guide. If you do not specify InstanceId, you must specify both ImageId and InstanceType.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--instance-type",
                    description: "Specifies the instance type of the EC2 instance. For information about available instance types, see Available Instance Types in the Amazon EC2 User Guide for Linux Instances. If you do not specify InstanceId, you must specify InstanceType.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--kernel-id",
                    description: "The ID of the kernel associated with the AMI.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ramdisk-id",
                    description: "The ID of the RAM disk to select.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--block-device-mappings",
                    description: "A block device mapping, which specifies the block devices for the instance. You can specify virtual devices and EBS volumes. For more information, see Block Device Mapping in the Amazon EC2 User Guide for Linux Instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--instance-monitoring",
                    description: "Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. The default value is true (enabled).  When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see Configure Monitoring for Auto Scaling Instances in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--spot-price",
                    description: "The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Requesting Spot Instances in the Amazon EC2 Auto Scaling User Guide.  When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--iam-instance-profile",
                    description: "The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--ebs-optimized",
                    description: "Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances. The default value is false.",
                },
                {
                    name: "--no-ebs-optimized",
                    description: "Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances. The default value is false.",
                },
                {
                    name: "--associate-public-ip-address",
                    description: "For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. If you specify true, each instance in the Auto Scaling group receives a unique public IP address. For more information, see Launching Auto Scaling instances in a VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this parameter, you must specify at least one subnet for VPCZoneIdentifier when you create your group.  If the instance is launched into a default subnet, the default is to assign a public IP address, unless you disabled the option to assign a public IP address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IP address, unless you enabled the option to assign a public IP address on the subnet.",
                },
                {
                    name: "--no-associate-public-ip-address",
                    description: "For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. If you specify true, each instance in the Auto Scaling group receives a unique public IP address. For more information, see Launching Auto Scaling instances in a VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this parameter, you must specify at least one subnet for VPCZoneIdentifier when you create your group.  If the instance is launched into a default subnet, the default is to assign a public IP address, unless you disabled the option to assign a public IP address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IP address, unless you enabled the option to assign a public IP address on the subnet.",
                },
                {
                    name: "--placement-tenancy",
                    description: "The tenancy of the instance. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default), you must set the value of this parameter to dedicated. If you specify PlacementTenancy, you must specify at least one subnet for VPCZoneIdentifier when you create your group. For more information, see Configuring instance tenancy with Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid Values: default | dedicated",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--metadata-options",
                    description: "The metadata options for the instances. For more information, see Configuring the Instance Metadata Options in the Amazon EC2 Auto Scaling User Guide.",
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
            name: "create-or-update-tags",
            description: "Creates or updates tags for the specified Auto Scaling group. When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--tags",
                    description: "One or more tags.",
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
            name: "delete-auto-scaling-group",
            description: "Deletes the specified Auto Scaling group. If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action. To remove instances from the Auto Scaling group before deleting it, call the DetachInstances API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances. To terminate all instances before deleting the Auto Scaling group, call the UpdateAutoScalingGroup API and set the minimum size and desired capacity of the Auto Scaling group to zero.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--force-delete",
                    description: "Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the group.",
                },
                {
                    name: "--no-force-delete",
                    description: "Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the group.",
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
            name: "delete-launch-configuration",
            description: "Deletes the specified launch configuration. The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.",
            options: [
                {
                    name: "--launch-configuration-name",
                    description: "The name of the launch configuration.",
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
            name: "delete-lifecycle-hook",
            description: "Deletes the specified lifecycle hook. If there are any outstanding lifecycle actions, they are completed first (ABANDON for launching instances, CONTINUE for terminating instances).",
            options: [
                {
                    name: "--lifecycle-hook-name",
                    description: "The name of the lifecycle hook.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
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
            name: "delete-notification-configuration",
            description: "Deletes the specified notification.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--topic-arn",
                    description: "The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.",
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
            name: "delete-policy",
            description: "Deletes the specified scaling policy. Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action. For more information, see Deleting a scaling policy in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--policy-name",
                    description: "The name or Amazon Resource Name (ARN) of the policy.",
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
            name: "delete-scheduled-action",
            description: "Deletes the specified scheduled action.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scheduled-action-name",
                    description: "The name of the action to delete.",
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
            name: "delete-tags",
            description: "Deletes the specified tags.",
            options: [
                {
                    name: "--tags",
                    description: "One or more tags.",
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
            name: "delete-warm-pool",
            description: "Deletes the warm pool for the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--force-delete",
                    description: "Specifies that the warm pool is to be deleted along with all instances associated with the warm pool, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances.",
                },
                {
                    name: "--no-force-delete",
                    description: "Specifies that the warm pool is to be deleted along with all instances associated with the warm pool, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances.",
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
            description: "Describes the current Amazon EC2 Auto Scaling resource quotas for your AWS account. For information about requesting an increase, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide.",
            options: [
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
            name: "describe-adjustment-types",
            description: "Describes the available adjustment types for Amazon EC2 Auto Scaling scaling policies. These settings apply to step scaling policies and simple scaling policies; they do not apply to target tracking scaling policies. The following adjustment types are supported:   ChangeInCapacity   ExactCapacity   PercentChangeInCapacity",
            options: [
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
            name: "describe-auto-scaling-groups",
            description: "Describes one or more Auto Scaling groups.",
            options: [
                {
                    name: "--auto-scaling-group-names",
                    description: "The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the MaxRecords parameter. If you omit this parameter, all Auto Scaling groups are described.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-auto-scaling-instances",
            description: "Describes one or more Auto Scaling instances.",
            options: [
                {
                    name: "--instance-ids",
                    description: "The IDs of the instances. You can specify up to MaxRecords IDs. If you omit this parameter, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 50.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            name: "describe-auto-scaling-notification-types",
            description: "Describes the notification types that are supported by Amazon EC2 Auto Scaling.",
            options: [
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
            name: "describe-instance-refreshes",
            description: "Describes one or more instance refreshes. You can determine the status of a request by looking at the Status parameter. The following are the possible statuses:     Pending - The request was created, but the operation has not started.    InProgress - The operation is in progress.    Successful - The operation completed successfully.    Failed - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities.     Cancelling - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.     Cancelled - The operation is cancelled.    For more information, see Replacing Auto Scaling instances based on an instance refresh in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--instance-refresh-ids",
                    description: "One or more instance refresh IDs.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.",
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
            name: "describe-launch-configurations",
            description: "Describes one or more launch configurations.",
            options: [
                {
                    name: "--launch-configuration-names",
                    description: "The launch configuration names. If you omit this parameter, all launch configurations are described.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-lifecycle-hook-types",
            description: "Describes the available types of lifecycle hooks. The following hook types are supported:   autoscaling:EC2_INSTANCE_LAUNCHING   autoscaling:EC2_INSTANCE_TERMINATING",
            options: [
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
            name: "describe-lifecycle-hooks",
            description: "Describes the lifecycle hooks for the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--lifecycle-hook-names",
                    description: "The names of one or more lifecycle hooks. If you omit this parameter, all lifecycle hooks are described.",
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
            name: "describe-load-balancer-target-groups",
            description: "Describes the target groups for the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-load-balancers",
            description: "Describes the load balancers for the specified Auto Scaling group. This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DescribeLoadBalancerTargetGroups API instead.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-metric-collection-types",
            description: "Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling. The GroupStandbyInstances metric is not returned by default. You must explicitly request this metric when calling the EnableMetricsCollection API.",
            options: [
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
            name: "describe-notification-configurations",
            description: "Describes the notification actions associated with the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-names",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-policies",
            description: "Describes the policies for the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--policy-names",
                    description: "The names of one or more policies. If you omit this parameter, all policies are described. If a group name is provided, the results are limited to that group. This list is limited to 50 items. If you specify an unknown policy name, it is ignored with no error.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--policy-types",
                    description: "One or more policy types. The valid values are SimpleScaling, StepScaling, and TargetTrackingScaling.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to be returned with each call. The default value is 50 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-scaling-activities",
            description: "Describes one or more scaling activities for the specified Auto Scaling group. To view the scaling activities from the Amazon EC2 Auto Scaling console, choose the Activity tab of the Auto Scaling group. When scaling events occur, you see scaling activity messages in the Activity history. For more information, see Verifying a scaling activity for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--activity-ids",
                    description: "The activity IDs of the desired scaling activities. You can specify up to 50 IDs. If you omit this parameter, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--include-deleted-groups",
                    description: "Indicates whether to include scaling activity from deleted Auto Scaling groups.",
                },
                {
                    name: "--no-include-deleted-groups",
                    description: "Indicates whether to include scaling activity from deleted Auto Scaling groups.",
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            name: "describe-scaling-process-types",
            description: "Describes the scaling process types for use with the ResumeProcesses and SuspendProcesses APIs.",
            options: [
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
            name: "describe-scheduled-actions",
            description: "Describes the actions scheduled for your Auto Scaling group that haven't run or that have not reached their end time. To describe the actions that have already run, call the DescribeScalingActivities API.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scheduled-action-names",
                    description: "The names of one or more scheduled actions. You can specify up to 50 actions. If you omit this parameter, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--start-time",
                    description: "The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--end-time",
                    description: "The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            description: "Describes the specified tags. You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results. You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--filters",
                    description: "One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, auto-scaling-group) is 1000.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of items to return. (You received this token from a previous call.)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.",
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
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "describe-termination-policy-types",
            description: "Describes the termination policies supported by Amazon EC2 Auto Scaling. For more information, see Controlling which Auto Scaling instances terminate during scale in in the Amazon EC2 Auto Scaling User Guide.",
            options: [
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
            name: "describe-warm-pool",
            description: "Describes a warm pool and its instances.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-records",
                    description: "The maximum number of instances to return with this call. The maximum value is 50.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next set of instances to return. (You received this token from a previous call.)",
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
            name: "detach-instances",
            description: "Removes one or more instances from the specified Auto Scaling group. After the instances are detached, you can manage them independent of the Auto Scaling group. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached. If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups. For more information, see Detach EC2 instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--instance-ids",
                    description: "The IDs of the instances. You can specify up to 20 instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--should-decrement-desired-capacity",
                    description: "Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.",
                },
                {
                    name: "--no-should-decrement-desired-capacity",
                    description: "Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.",
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
            name: "detach-load-balancer-target-groups",
            description: "Detaches one or more target groups from the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--target-group-arns",
                    description: "The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.",
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
            name: "detach-load-balancers",
            description: "Detaches one or more Classic Load Balancers from the specified Auto Scaling group. This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DetachLoadBalancerTargetGroups API instead. When you detach a load balancer, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the DescribeLoadBalancers API call. The instances remain running.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--load-balancer-names",
                    description: "The names of the load balancers. You can specify up to 10 load balancers.",
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
            name: "disable-metrics-collection",
            description: "Disables group metrics for the specified Auto Scaling group.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--metrics",
                    description: "Specifies one or more of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity     WarmPoolDesiredCapacity     WarmPoolWarmedCapacity     WarmPoolPendingCapacity     WarmPoolTerminatingCapacity     WarmPoolTotalCapacity     GroupAndWarmPoolDesiredCapacity     GroupAndWarmPoolTotalCapacity    If you omit this parameter, all metrics are disabled.",
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
            name: "enable-metrics-collection",
            description: "Enables group metrics for the specified Auto Scaling group. For more information, see Monitoring CloudWatch metrics for your Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--metrics",
                    description: "Specifies which group-level metrics to start collecting. You can specify one or more of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances    The instance weighting feature supports the following additional metrics:     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity    The warm pools feature supports the following additional metrics:     WarmPoolDesiredCapacity     WarmPoolWarmedCapacity     WarmPoolPendingCapacity     WarmPoolTerminatingCapacity     WarmPoolTotalCapacity     GroupAndWarmPoolDesiredCapacity     GroupAndWarmPoolTotalCapacity    If you omit this parameter, all metrics are enabled.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--granularity",
                    description: "The granularity to associate with the metrics to collect. The only valid value is 1Minute.",
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
            name: "enter-standby",
            description: "Moves the specified instances into the standby state. If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group. If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--instance-ids",
                    description: "The IDs of the instances. You can specify up to 20 instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--should-decrement-desired-capacity",
                    description: "Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to Standby mode.",
                },
                {
                    name: "--no-should-decrement-desired-capacity",
                    description: "Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to Standby mode.",
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
            name: "execute-policy",
            description: "Executes the specified policy. This can be useful for testing the design of your scaling policy.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--policy-name",
                    description: "The name or ARN of the policy.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--honor-cooldown",
                    description: "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--no-honor-cooldown",
                    description: "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--metric-value",
                    description: "The metric value to compare to BreachThreshold. This enables you to execute a policy of type StepScaling and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59. If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error. Required if the policy type is StepScaling and not supported otherwise.",
                    args: {
                        name: "double",
                    },
                },
                {
                    name: "--breach-threshold",
                    description: "The breach threshold for the alarm. Required if the policy type is StepScaling and not supported otherwise.",
                    args: {
                        name: "double",
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
            name: "exit-standby",
            description: "Moves the specified instances out of the standby state. After you put the instances back in service, the desired capacity is incremented. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--instance-ids",
                    description: "The IDs of the instances. You can specify up to 20 instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
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
            name: "put-lifecycle-hook",
            description: "Creates or updates a lifecycle hook for the specified Auto Scaling group. A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated). This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.    Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the RecordLifecycleActionHeartbeat API call.   If you finish before the timeout period ends, complete the lifecycle action using the CompleteLifecycleAction API call.   For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails. You can view the lifecycle hooks for an Auto Scaling group using the DescribeLifecycleHooks API call. If you are no longer using a lifecycle hook, you can delete it by calling the DeleteLifecycleHook API.",
            options: [
                {
                    name: "--lifecycle-hook-name",
                    description: "The name of the lifecycle hook.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--lifecycle-transition",
                    description: "The instance state to which you want to attach the lifecycle hook. The valid values are:   autoscaling:EC2_INSTANCE_LAUNCHING   autoscaling:EC2_INSTANCE_TERMINATING   Required for new lifecycle hooks, but optional when updating existing hooks.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--role-arn",
                    description: "The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--notification-target-arn",
                    description: 'The ARN of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an SQS queue or an SNS topic. If you specify an empty string, this overrides the current ARN. This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic. When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: "Event": "autoscaling:TEST_NOTIFICATION".',
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--notification-metadata",
                    description: "Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--heartbeat-timeout",
                    description: "The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult parameter. You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat API.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--default-result",
                    description: "Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. This parameter can be either CONTINUE or ABANDON. The default value is ABANDON.",
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
            name: "put-notification-configuration",
            description: "Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address. This configuration overwrites any existing configuration. For more information, see Getting Amazon SNS notifications when your Auto Scaling group scales in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--topic-arn",
                    description: "The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--notification-types",
                    description: "The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the DescribeAutoScalingNotificationTypes API.",
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
            name: "put-scaling-policy",
            description: "Creates or updates a scaling policy for an Auto Scaling group. For more information about using scaling policies to scale your Auto Scaling group, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--policy-name",
                    description: "The name of the policy.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--policy-type",
                    description: "One of the following policy types:     TargetTrackingScaling     StepScaling     SimpleScaling (default)",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--adjustment-type",
                    description: "Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity. Required if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--min-adjustment-step",
                    description: "Available for backward compatibility. Use MinAdjustmentMagnitude instead.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--min-adjustment-magnitude",
                    description: "The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances. Valid only if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide.  Some Auto Scaling groups use instance weights. In this case, set the MinAdjustmentMagnitude to a value that is at least as large as your largest instance weight.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--scaling-adjustment",
                    description: "The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cooldown",
                    description: "The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--metric-aggregation-type",
                    description: "The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--step-adjustments",
                    description: "A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--estimated-instance-warmup",
                    description: "The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--target-tracking-configuration",
                    description: "A target tracking scaling policy. Includes support for predefined or customized metrics. The following predefined metrics are available:    ASGAverageCPUUtilization     ASGAverageNetworkIn     ASGAverageNetworkOut     ALBRequestCountPerTarget    If you specify ALBRequestCountPerTarget for the metric, you must specify the ResourceLabel parameter with the PredefinedMetricSpecification. For more information, see TargetTrackingConfiguration in the Amazon EC2 Auto Scaling API Reference. Required if the policy type is TargetTrackingScaling.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--enabled",
                    description: "Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see Disabling a scaling policy for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--no-enabled",
                    description: "Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see Disabling a scaling policy for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.",
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
            name: "put-scheduled-update-group-action",
            description: "Creates or updates a scheduled scaling action for an Auto Scaling group. For more information, see Scheduled scaling in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scheduled-action-name",
                    description: "The name of this scaling action.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--time",
                    description: "This parameter is no longer used.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--start-time",
                    description: 'The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, "2019-06-01T00:00:00Z"). If you specify Recurrence and StartTime, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence. If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.',
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--end-time",
                    description: "The date and time for the recurring schedule to end, in UTC.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--recurrence",
                    description: 'The recurring schedule for this action. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, "30 0 1 1,6,12 *"). For more information about this format, see Crontab. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops. Cron expressions use Universal Coordinated Time (UTC) by default.',
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--min-size",
                    description: "The minimum size of the Auto Scaling group.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-size",
                    description: "The maximum size of the Auto Scaling group.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--desired-capacity",
                    description: "The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--time-zone",
                    description: "Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default.  Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as Etc/GMT+9 or Pacific/Tahiti). For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.",
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
            name: "put-warm-pool",
            description: "Adds a warm pool to the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances. You can view the instances in the warm pool using the DescribeWarmPool API call. If you are no longer using a warm pool, you can delete it by calling the DeleteWarmPool API.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-group-prepared-capacity",
                    description: "Specifies the total maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group. This is an optional property. Specify it only if the warm pool size should not be determined by the difference between the group's maximum capacity and its desired capacity.   Amazon EC2 Auto Scaling will launch and maintain either the difference between the group's maximum capacity and its desired capacity, if a value for MaxGroupPreparedCapacity is not specified, or the difference between the MaxGroupPreparedCapacity and the desired capacity, if a value for MaxGroupPreparedCapacity is specified.  The size of the warm pool is dynamic. Only when MaxGroupPreparedCapacity and MinSize are set to the same value does the warm pool have an absolute size.  If the desired capacity of the Auto Scaling group is higher than the MaxGroupPreparedCapacity, the capacity of the warm pool is 0. To remove a value that you previously set, include the property but specify -1 for the value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--min-size",
                    description: "Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--pool-state",
                    description: "Sets the instance state to transition to after the lifecycle hooks finish. Valid values are: Stopped (default) or Running.",
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
            name: "record-lifecycle-action-heartbeat",
            description: "Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the PutLifecycleHook API call. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.    If you finish before the timeout period ends, complete the lifecycle action.   For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--lifecycle-hook-name",
                    description: "The name of the lifecycle hook.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--lifecycle-action-token",
                    description: "A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--instance-id",
                    description: "The ID of the instance.",
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
            name: "resume-processes",
            description: "Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group. For more information, see Suspending and resuming scaling processes in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scaling-processes",
                    description: "One or more of the following processes:    Launch     Terminate     AddToLoadBalancer     AlarmNotification     AZRebalance     HealthCheck     InstanceRefresh     ReplaceUnhealthy     ScheduledActions    If you omit this parameter, all processes are specified.",
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
            name: "set-desired-capacity",
            description: "Sets the size of the specified Auto Scaling group. If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.  For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--desired-capacity",
                    description: "The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--honor-cooldown",
                    description: "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.",
                },
                {
                    name: "--no-honor-cooldown",
                    description: "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.",
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
            name: "set-instance-health",
            description: "Sets the health status of the specified instance. For more information, see Health checks for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--instance-id",
                    description: "The ID of the instance.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-status",
                    description: "The health status of the instance. Set to Healthy to have the instance remain in service. Set to Unhealthy to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--should-respect-grace-period",
                    description: "If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod specified for the group, by default, this call respects the grace period. Set this to False, to have the call not respect the grace period associated with the group. For more information about the health check grace period, see CreateAutoScalingGroup in the Amazon EC2 Auto Scaling API Reference.",
                },
                {
                    name: "--no-should-respect-grace-period",
                    description: "If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod specified for the group, by default, this call respects the grace period. Set this to False, to have the call not respect the grace period associated with the group. For more information about the health check grace period, see CreateAutoScalingGroup in the Amazon EC2 Auto Scaling API Reference.",
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
            name: "set-instance-protection",
            description: "Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool. For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.",
            options: [
                {
                    name: "--instance-ids",
                    description: "One or more instance IDs. You can specify up to 50 instances.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--protected-from-scale-in",
                    description: "Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.",
                },
                {
                    name: "--no-protected-from-scale-in",
                    description: "Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.",
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
            name: "start-instance-refresh",
            description: "Starts a new instance refresh operation, which triggers a rolling replacement of previously launched instances in the Auto Scaling group with a new group of instances. If successful, this call creates a new instance refresh request with a unique ID that you can use to track its progress. To query its status, call the DescribeInstanceRefreshes API. To describe the instance refreshes that have already run, call the DescribeInstanceRefreshes API. To cancel an instance refresh operation in progress, use the CancelInstanceRefresh API.  For more information, see Replacing Auto Scaling instances based on an instance refresh in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--strategy",
                    description: "The strategy to use for the instance refresh. The only valid value is Rolling. A rolling update is an update that is applied to all instances in an Auto Scaling group until all instances have been updated. A rolling update can fail due to failed health checks or if instances are on standby or are protected from scale in. If the rolling update process fails, any instances that were already replaced are not rolled back to their previous configuration.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--preferences",
                    description: "Set of preferences associated with the instance refresh request. If not provided, the default values are used. For MinHealthyPercentage, the default value is 90. For InstanceWarmup, the default is to use the value specified for the health check grace period for the Auto Scaling group. For more information, see RefreshPreferences in the Amazon EC2 Auto Scaling API Reference.",
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
            name: "suspend-processes",
            description: "Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group. If you suspend either the Launch or Terminate process types, it can prevent other process types from functioning properly. For more information, see Suspending and resuming scaling processes in the Amazon EC2 Auto Scaling User Guide. To resume processes that have been suspended, call the ResumeProcesses API.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--scaling-processes",
                    description: "One or more of the following processes:    Launch     Terminate     AddToLoadBalancer     AlarmNotification     AZRebalance     HealthCheck     InstanceRefresh     ReplaceUnhealthy     ScheduledActions    If you omit this parameter, all processes are specified.",
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
            name: "terminate-instance-in-auto-scaling-group",
            description: "Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool. This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to terminated. You can't connect to or start an instance after you've terminated it. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated.  By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see Rebalancing activities in the Amazon EC2 Auto Scaling User Guide.",
            options: [
                {
                    name: "--instance-id",
                    description: "The ID of the instance.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--should-decrement-desired-capacity",
                    description: "Indicates whether terminating the instance also decrements the size of the Auto Scaling group.",
                },
                {
                    name: "--no-should-decrement-desired-capacity",
                    description: "Indicates whether terminating the instance also decrements the size of the Auto Scaling group.",
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
            name: "update-auto-scaling-group",
            description: "We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Updates the configuration for the specified Auto Scaling group. To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns.  If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application. Note the following about changing DesiredCapacity, MaxSize, or MinSize:   If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.   If you specify a new value for MinSize without specifying a value for DesiredCapacity, and the new MinSize is larger than the current size of the group, this sets the group's DesiredCapacity to the new MinSize value.   If you specify a new value for MaxSize without specifying a value for DesiredCapacity, and the new MaxSize is smaller than the current size of the group, this sets the group's DesiredCapacity to the new MaxSize value.   To see which parameters have been set, call the DescribeAutoScalingGroups API. To view the scaling policies for an Auto Scaling group, call the DescribePolicies API. If the group has scaling policies, you can update them by calling the PutScalingPolicy API.",
            options: [
                {
                    name: "--auto-scaling-group-name",
                    description: "The name of the Auto Scaling group.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--launch-configuration-name",
                    description: "The name of the launch configuration. If you specify LaunchConfigurationName in your update request, you can't specify LaunchTemplate or MixedInstancesPolicy.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--launch-template",
                    description: "The launch template and version to use to specify the updates. If you specify LaunchTemplate in your update request, you can't specify LaunchConfigurationName or MixedInstancesPolicy.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--mixed-instances-policy",
                    description: "An embedded object that specifies a mixed instances policy. When you make changes to an existing policy, all optional properties are left unchanged if not specified. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--min-size",
                    description: "The minimum size of the Auto Scaling group.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-size",
                    description: "The maximum size of the Auto Scaling group.  With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--desired-capacity",
                    description: "The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--default-cooldown",
                    description: "The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is 300. This setting applies when using simple scaling policies, but not when using other scaling policies or scheduled scaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--availability-zones",
                    description: "One or more Availability Zones for the group.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--health-check-type",
                    description: "The service to use for the health checks. The valid values are EC2 and ELB. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--health-check-grace-period",
                    description: "The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. The default value is 0. For more information, see Health check grace period in the Amazon EC2 Auto Scaling User Guide. Conditional: Required if you are adding an ELB health check.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--placement-group",
                    description: "The name of an existing placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see Placement Groups in the Amazon EC2 User Guide for Linux Instances.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--vpc-zone-identifier",
                    description: "A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify for this parameter must reside in those Availability Zones.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--termination-policies",
                    description: "A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see Controlling which Auto Scaling instances terminate during scale in in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--new-instances-protected-from-scale-in",
                    description: "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--no-new-instances-protected-from-scale-in",
                    description: "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--service-linked-role-arn",
                    description: "The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-instance-lifetime",
                    description: "The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see Replacing Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--capacity-rebalance",
                    description: "Enables or disables Capacity Rebalancing. For more information, see Amazon EC2 Auto Scaling Capacity Rebalancing in the Amazon EC2 Auto Scaling User Guide.",
                },
                {
                    name: "--no-capacity-rebalance",
                    description: "Enables or disables Capacity Rebalancing. For more information, see Amazon EC2 Auto Scaling Capacity Rebalancing in the Amazon EC2 Auto Scaling User Guide.",
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
};

