const completionSpec: Fig.Spec = {
  name: "autoscaling",
  description:
    "Amazon EC2 Auto Scaling Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances based on user-defined scaling policies, scheduled actions, and health checks. For more information, see the Amazon EC2 Auto Scaling User Guide and the Amazon EC2 Auto Scaling API Reference",
  subcommands: [
    {
      name: "attach-instances",
      description:
        "Attaches one or more EC2 instances to the specified Auto Scaling group. When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails. If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups. For more information, see Detach or attach instances in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--instance-ids",
          description:
            "The IDs of the instances. You can specify up to 20 instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
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
      name: "attach-load-balancer-target-groups",
      description:
        "This API operation is superseded by AttachTrafficSources, which can attach multiple traffic sources types. We recommend using AttachTrafficSources to simplify how you manage traffic sources. However, we continue to support AttachLoadBalancerTargetGroups. You can use both the original AttachLoadBalancerTargetGroups API operation and AttachTrafficSources on the same Auto Scaling group.  Attaches one or more target groups to the specified Auto Scaling group. This operation is used with the following load balancer types:    Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.    Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.    Gateway Load Balancer - Operates at the network layer (layer 3).   To describe the target groups for an Auto Scaling group, call the DescribeLoadBalancerTargetGroups API. To detach the target group from the Auto Scaling group, call the DetachLoadBalancerTargetGroups API. This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-group-arns",
          description:
            "The Amazon Resource Names (ARNs) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing DescribeTargetGroups API operation",
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
      name: "attach-load-balancers",
      description:
        "This API operation is superseded by https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html, which can attach multiple traffic sources types. We recommend using AttachTrafficSources to simplify how you manage traffic sources. However, we continue to support AttachLoadBalancers. You can use both the original AttachLoadBalancers API operation and AttachTrafficSources on the same Auto Scaling group.  Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers. To describe the load balancers for an Auto Scaling group, call the DescribeLoadBalancers API. To detach a load balancer from the Auto Scaling group, call the DetachLoadBalancers API. This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--load-balancer-names",
          description:
            "The names of the load balancers. You can specify up to 10 load balancers",
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
      name: "attach-traffic-sources",
      description:
        "Attaches one or more traffic sources to the specified Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group:   Application Load Balancer   Classic Load Balancer   Gateway Load Balancer   Network Load Balancer   VPC Lattice   This operation is additive and does not detach existing traffic sources from the Auto Scaling group.  After the operation completes, use the DescribeTrafficSources API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the DetachTrafficSources API",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-sources",
          description:
            "The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources",
          args: {
            name: "list",
          },
        },
        {
          name: "--skip-zonal-shift-validation",
          description:
            "If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-skip-zonal-shift-validation",
          description:
            "If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-delete-scheduled-action",
      description:
        "Deletes one or more scheduled actions for the specified Auto Scaling group",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-action-names",
          description:
            "The names of the scheduled actions to delete. The maximum number allowed is 50",
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
      name: "batch-put-scheduled-update-group-action",
      description:
        "Creates or updates one or more scheduled scaling actions for an Auto Scaling group",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-update-group-actions",
          description:
            "One or more scheduled actions. The maximum number allowed is 50",
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
      name: "cancel-instance-refresh",
      description:
        "Cancels an instance refresh or rollback that is in progress. If an instance refresh or rollback is not in progress, an ActiveInstanceRefreshNotFound error occurs. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. When you cancel an instance refresh, this does not roll back any changes that it made. Use the RollbackInstanceRefresh API to roll back instead",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
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
      name: "complete-lifecycle-action",
      description:
        "Completes the lifecycle action for the specified token or instance with the specified result. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.   (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.   If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.    If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call.    For more information, see Complete a lifecycle action in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--lifecycle-hook-name",
          description: "The name of the lifecycle hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-action-token",
          description:
            "A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-action-result",
          description:
            "The action for the group to take. You can specify either CONTINUE or ABANDON",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description: "The ID of the instance",
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
      name: "create-auto-scaling-group",
      description:
        "We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Creates an Auto Scaling group with the specified name and attributes.  If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. If you're new to Amazon EC2 Auto Scaling, see the introductory tutorials in Get started with Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Every Auto Scaling group has three size properties (DesiredCapacity, MaxSize, and MinSize). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances",
      options: [
        {
          name: "--auto-scaling-group-name",
          description:
            "The name of the Auto Scaling group. This name must be unique per Region per account. The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.  You cannot use a colon (:) in the name",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-configuration-name",
          description:
            "The name of the launch configuration to use to launch instances.  Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId)",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-template",
          description:
            "Information used to specify the launch template and version to use to launch instances.  Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).  The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see Create a launch template for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mixed-instances-policy",
          description:
            "The mixed instances policy. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-id",
          description:
            "The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 DescribeInstances API operation. For more information, see Create an Auto Scaling group using parameters from an existing instance in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-size",
          description: "The minimum size of the group",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-size",
          description:
            "The maximum size of the group.  With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--desired-capacity",
          description:
            "The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-cooldown",
          description:
            "Only needed if you use simple scaling policies.  The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Default: 300 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--availability-zones",
          description:
            "A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the VPCZoneIdentifier property, or for attaching a network interface when an existing network interface ID is specified in a launch template",
          args: {
            name: "list",
          },
        },
        {
          name: "--load-balancer-names",
          description:
            "A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the TargetGroupARNs property instead",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-group-arns",
          description:
            "The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--health-check-type",
          description:
            "A comma-separated value string of one or more health check types. The valid values are EC2, EBS, ELB, and VPC_LATTICE. EC2 is the default health check and cannot be disabled. For more information, see Health checks for instances in an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Only specify EC2 if you must clear a value that was previously set",
          args: {
            name: "string",
          },
        },
        {
          name: "--health-check-grace-period",
          description:
            "The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the InService state. For more information, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Default: 0 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--placement-group",
          description:
            "The name of the placement group into which to launch your instances. For more information, see Placement groups in the Amazon EC2 User Guide for Linux Instances.  A cluster placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-zone-identifier",
          description:
            "A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify must reside in those Availability Zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--termination-policies",
          description:
            "A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid values: Default | AllocationStrategy | ClosestToNextInstanceHour | NewestInstance | OldestInstance | OldestLaunchConfiguration | OldestLaunchTemplate | arn:aws:lambda:region:account-id:function:my-function:my-alias",
          args: {
            name: "list",
          },
        },
        {
          name: "--new-instances-protected-from-scale-in",
          description:
            "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-new-instances-protected-from-scale-in",
          description:
            "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--capacity-rebalance",
          description:
            "Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions in the in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-capacity-rebalance",
          description:
            "Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions in the in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--lifecycle-hook-specification-list",
          description:
            "One or more lifecycle hooks to add to the Auto Scaling group before instances are launched",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see Tag Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-linked-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-instance-lifetime",
          description:
            "The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see Replace Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--context",
          description: "Reserved",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-capacity-type",
          description:
            "The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports DesiredCapacityType for attribute-based instance type selection only. For more information, see Create a mixed instances group using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide. By default, Amazon EC2 Auto Scaling specifies units, which translates into number of instances. Valid values: units | vcpu | memory-mib",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-instance-warmup",
          description:
            "The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the InService state.  During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see Set the default instance warmup for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.  To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, even if it is set to 0 seconds. To remove a value that you previously set, include the property but specify -1 for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of 0 or other nominal value.  Default: None",
          args: {
            name: "integer",
          },
        },
        {
          name: "--traffic-sources",
          description:
            "The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-maintenance-policy",
          description:
            "An instance maintenance policy. For more information, see Set instance maintenance policy in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--availability-zone-distribution",
          description:
            "The instance capacity distribution across Availability Zones",
          args: {
            name: "structure",
          },
        },
        {
          name: "--availability-zone-impairment-policy",
          description: "The policy for Availability Zone impairment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--skip-zonal-shift-validation",
          description:
            "If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-skip-zonal-shift-validation",
          description:
            "If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--capacity-reservation-specification",
          description:
            "The capacity reservation specification for the Auto Scaling group",
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
      name: "create-launch-configuration",
      description:
        "Creates a launch configuration. If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. For more information, see Launch configurations in the Amazon EC2 Auto Scaling User Guide.  Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see Launch templates in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--launch-configuration-name",
          description:
            "The name of the launch configuration. This name must be unique per Region per account",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-id",
          description:
            "The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see Find a Linux AMI in the Amazon EC2 User Guide for Linux Instances. If you specify InstanceId, an ImageId is not required",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-name",
          description:
            "The name of the key pair. For more information, see Amazon EC2 key pairs and Amazon EC2 instances in the Amazon EC2 User Guide for Linux Instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-groups",
          description:
            "A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see Control traffic to your Amazon Web Services resources using security groups in the Amazon Virtual Private Cloud User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--classic-link-vpc-id",
          description: "Available for backward compatibility",
          args: {
            name: "string",
          },
        },
        {
          name: "--classic-link-vpc-security-groups",
          description: "Available for backward compatibility",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-data",
          description:
            "The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping. To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request. For more information, see Create a launch configuration in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "Specifies the instance type of the EC2 instance. For information about available instance types, see Available instance types in the Amazon EC2 User Guide for Linux Instances. If you specify InstanceId, an InstanceType is not required",
          args: {
            name: "string",
          },
        },
        {
          name: "--kernel-id",
          description:
            "The ID of the kernel associated with the AMI.  We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide for Linux Instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--ramdisk-id",
          description:
            "The ID of the RAM disk to select.  We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide for Linux Instances",
          args: {
            name: "string",
          },
        },
        {
          name: "--block-device-mappings",
          description:
            "The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see Block device mappings in the Amazon EC2 User Guide for Linux Instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-monitoring",
          description:
            "Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. The default value is true (enabled).  When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see Configure monitoring for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--spot-price",
          description:
            "The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Request Spot Instances for fault-tolerant and flexible applications in the Amazon EC2 Auto Scaling User Guide. Valid Range: Minimum value of 0.001  When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-instance-profile",
          description:
            "The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--ebs-optimized",
          description:
            "Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-optimized instances in the Amazon EC2 User Guide for Linux Instances. The default value is false",
        },
        {
          name: "--no-ebs-optimized",
          description:
            "Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-optimized instances in the Amazon EC2 User Guide for Linux Instances. The default value is false",
        },
        {
          name: "--associate-public-ip-address",
          description:
            "Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. If you specify true, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see Provide network connectivity for your Auto Scaling instances using Amazon VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this property, you must specify at least one subnet for VPCZoneIdentifier when you create your group",
        },
        {
          name: "--no-associate-public-ip-address",
          description:
            "Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. If you specify true, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see Provide network connectivity for your Auto Scaling instances using Amazon VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this property, you must specify at least one subnet for VPCZoneIdentifier when you create your group",
        },
        {
          name: "--placement-tenancy",
          description:
            "The tenancy of the instance, either default or dedicated. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default), you must set the value of this property to dedicated. If you specify PlacementTenancy, you must specify at least one subnet for VPCZoneIdentifier when you create your group. Valid values: default | dedicated",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-options",
          description:
            "The metadata options for the instances. For more information, see Configure the instance metadata options in the Amazon EC2 Auto Scaling User Guide",
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
      name: "create-or-update-tags",
      description:
        "Creates or updates tags for the specified Auto Scaling group. When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message. For more information, see Tag Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--tags",
          description: "One or more tags",
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
      name: "delete-auto-scaling-group",
      description:
        "Deletes the specified Auto Scaling group. If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. The force delete operation will also terminate the EC2 instances. If the group has a warm pool, the force delete option also deletes the warm pool. To remove instances from the Auto Scaling group before deleting it, call the DetachInstances API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances. To terminate all instances before deleting the Auto Scaling group, call the UpdateAutoScalingGroup API and set the minimum size and desired capacity of the Auto Scaling group to zero. If the group has scaling policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action. For more information, see Delete your Auto Scaling infrastructure in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This action also deletes any outstanding lifecycle actions associated with the group",
        },
        {
          name: "--no-force-delete",
          description:
            "Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This action also deletes any outstanding lifecycle actions associated with the group",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-launch-configuration",
      description:
        "Deletes the specified launch configuration. The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use",
      options: [
        {
          name: "--launch-configuration-name",
          description: "The name of the launch configuration",
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
      name: "delete-lifecycle-hook",
      description:
        "Deletes the specified lifecycle hook. If there are any outstanding lifecycle actions, they are completed first (ABANDON for launching instances, CONTINUE for terminating instances)",
      options: [
        {
          name: "--lifecycle-hook-name",
          description: "The name of the lifecycle hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
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
      name: "delete-notification-configuration",
      description: "Deletes the specified notification",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-arn",
          description: "The Amazon Resource Name (ARN) of the Amazon SNS topic",
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
      name: "delete-policy",
      description:
        "Deletes the specified scaling policy. Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action. For more information, see Delete a scaling policy in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "The name or Amazon Resource Name (ARN) of the policy",
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
      name: "delete-scheduled-action",
      description: "Deletes the specified scheduled action",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-action-name",
          description: "The name of the action to delete",
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
      name: "delete-tags",
      description: "Deletes the specified tags",
      options: [
        {
          name: "--tags",
          description: "One or more tags",
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
      name: "delete-warm-pool",
      description:
        "Deletes the warm pool for the specified Auto Scaling group. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "Specifies that the warm pool is to be deleted along with all of its associated instances, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances",
        },
        {
          name: "--no-force-delete",
          description:
            "Specifies that the warm pool is to be deleted along with all of its associated instances, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-account-limits",
      description:
        "Describes the current Amazon EC2 Auto Scaling resource quotas for your account. When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
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
      name: "describe-adjustment-types",
      description:
        "Describes the available adjustment types for step scaling and simple scaling policies. The following adjustment types are supported:    ChangeInCapacity     ExactCapacity     PercentChangeInCapacity",
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
      name: "describe-auto-scaling-groups",
      description:
        "Gets information about the Auto Scaling groups in the account and Region. If you specify Auto Scaling group names, the output includes information for only the specified Auto Scaling groups. If you specify filters, the output includes information for only those Auto Scaling groups that meet the filter criteria. If you do not specify group names or filters, the output includes information for all Auto Scaling groups.  This operation also returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the DescribeWarmPool API",
      options: [
        {
          name: "--auto-scaling-group-names",
          description:
            "The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the MaxRecords property. If you omit this property, all Auto Scaling groups are described",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "One or more filters to limit the results based on specific tags",
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
      name: "describe-auto-scaling-instances",
      description:
        "Gets information about the Auto Scaling instances in the account and Region",
      options: [
        {
          name: "--instance-ids",
          description:
            "The IDs of the instances. If you omit this property, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error. Array Members: Maximum number of 50 items",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
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
      name: "describe-auto-scaling-notification-types",
      description:
        "Describes the notification types that are supported by Amazon EC2 Auto Scaling",
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
      name: "describe-instance-refreshes",
      description:
        "Gets information about the instance refreshes for the specified Auto Scaling group from the previous six weeks. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. To help you determine the status of an instance refresh, Amazon EC2 Auto Scaling returns information about the instance refreshes you previously initiated, including their status, start time, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete. If a rollback is initiated while an instance refresh is in progress, Amazon EC2 Auto Scaling also returns information about the rollback of the instance refresh",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-refresh-ids",
          description: "One or more instance refresh IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100",
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
      name: "describe-launch-configurations",
      description:
        "Gets information about the launch configurations in the account and Region",
      options: [
        {
          name: "--launch-configuration-names",
          description:
            "The launch configuration names. If you omit this property, all launch configurations are described. Array Members: Maximum number of 50 items",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100",
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
      name: "describe-lifecycle-hook-types",
      description:
        "Describes the available types of lifecycle hooks. The following hook types are supported:    autoscaling:EC2_INSTANCE_LAUNCHING     autoscaling:EC2_INSTANCE_TERMINATING",
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
      name: "describe-lifecycle-hooks",
      description:
        "Gets information about the lifecycle hooks for the specified Auto Scaling group",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-hook-names",
          description:
            "The names of one or more lifecycle hooks. If you omit this property, all lifecycle hooks are described",
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
      name: "describe-load-balancer-target-groups",
      description:
        "This API operation is superseded by DescribeTrafficSources, which can describe multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DescribeLoadBalancerTargetGroups. You can use both the original DescribeLoadBalancerTargetGroups API operation and DescribeTrafficSources on the same Auto Scaling group.  Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group. To determine the attachment status of the target group, use the State element in the response. When you attach a target group to an Auto Scaling group, the initial State value is Adding. The state transitions to Added after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to InService after at least one Auto Scaling instance passes the health check. When the target group is in the InService state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the InService state.  Target groups also have an InService state if you attach them in the CreateAutoScalingGroup API call. If your target group state is InService, but it is not working properly, check the scaling activities by calling DescribeScalingActivities and take any corrective actions necessary. For help with failed health checks, see Troubleshooting Amazon EC2 Auto Scaling: Health checks in the Amazon EC2 Auto Scaling User Guide. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.   You can use this operation to describe target groups that were attached by using AttachLoadBalancerTargetGroups, but not for target groups that were attached by using AttachTrafficSources",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 100 and the maximum value is 100",
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
      name: "describe-load-balancers",
      description:
        "This API operation is superseded by DescribeTrafficSources, which can describe multiple traffic sources types. We recommend using DescribeTrafficSources to simplify how you manage traffic sources. However, we continue to support DescribeLoadBalancers. You can use both the original DescribeLoadBalancers API operation and DescribeTrafficSources on the same Auto Scaling group.  Gets information about the load balancers for the specified Auto Scaling group. This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DescribeLoadBalancerTargetGroups API instead. To determine the attachment status of the load balancer, use the State element in the response. When you attach a load balancer to an Auto Scaling group, the initial State value is Adding. The state transitions to Added after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to InService after at least one Auto Scaling instance passes the health check. When the load balancer is in the InService state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the InService state.  Load balancers also have an InService state if you attach them in the CreateAutoScalingGroup API call. If your load balancer state is InService, but it is not working properly, check the scaling activities by calling DescribeScalingActivities and take any corrective actions necessary. For help with failed health checks, see Troubleshooting Amazon EC2 Auto Scaling: Health checks in the Amazon EC2 Auto Scaling User Guide. For more information, see Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 100 and the maximum value is 100",
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
      name: "describe-metric-collection-types",
      description:
        "Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling",
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
      name: "describe-notification-configurations",
      description:
        "Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups",
      options: [
        {
          name: "--auto-scaling-group-names",
          description: "The name of the Auto Scaling group",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100",
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
      name: "describe-policies",
      description:
        "Gets information about the scaling policies in the account and Region",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-names",
          description:
            "The names of one or more policies. If you omit this property, all policies are described. If a group name is provided, the results are limited to that group. If you specify an unknown policy name, it is ignored with no error. Array Members: Maximum number of 50 items",
          args: {
            name: "list",
          },
        },
        {
          name: "--policy-types",
          description:
            "One or more policy types. The valid values are SimpleScaling, StepScaling, TargetTrackingScaling, and PredictiveScaling",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to be returned with each call. The default value is 50 and the maximum value is 100",
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
      name: "describe-scaling-activities",
      description:
        "Gets information about the scaling activities in the account and Region. When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see Verify a scaling activity for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. If the scaling event succeeds, the value of the StatusCode element in the response is Successful. If an attempt to launch instances failed, the StatusCode value is Failed or Cancelled and the StatusMessage element in the response indicates the cause of the failure. For help interpreting the StatusMessage, see Troubleshooting Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--activity-ids",
          description:
            "The activity IDs of the desired scaling activities. If you omit this property, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group. Array Members: Maximum number of 50 IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-deleted-groups",
          description:
            "Indicates whether to include scaling activity from deleted Auto Scaling groups",
        },
        {
          name: "--no-include-deleted-groups",
          description:
            "Indicates whether to include scaling activity from deleted Auto Scaling groups",
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 100 and the maximum value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
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
      name: "describe-scaling-process-types",
      description:
        "Describes the scaling process types for use with the ResumeProcesses and SuspendProcesses APIs",
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
      name: "describe-scheduled-actions",
      description:
        "Gets information about the scheduled actions that haven't run or that have not reached their end time. To describe the scaling activities for scheduled actions that have already run, call the DescribeScalingActivities API",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-action-names",
          description:
            "The names of one or more scheduled actions. If you omit this property, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error. Array Members: Maximum number of 50 actions",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-time",
          description:
            "The earliest scheduled start time to return. If scheduled action names are provided, this property is ignored",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The latest scheduled start time to return. If scheduled action names are provided, this property is ignored",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100",
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
      name: "describe-tags",
      description:
        "Describes the specified tags. You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results. You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned. For more information, see Tag Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--filters",
          description:
            "One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, auto-scaling-group) is 1000",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The default value is 50 and the maximum value is 100",
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
      name: "describe-termination-policy-types",
      description:
        "Describes the termination policies supported by Amazon EC2 Auto Scaling. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
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
      name: "describe-traffic-sources",
      description:
        "Gets information about the traffic sources for the specified Auto Scaling group. You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type. If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-source-type",
          description:
            "The traffic source type that you want to describe. The following lists the valid values:    elb if the traffic source is a Classic Load Balancer.    elbv2 if the traffic source is a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer.    vpc-lattice if the traffic source is VPC Lattice",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of items to return. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of items to return with this call. The maximum value is 50",
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
      name: "describe-warm-pool",
      description:
        "Gets information about a warm pool and its instances. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of instances to return with this call. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of instances to return. (You received this token from a previous call.)",
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
      name: "detach-instances",
      description:
        "Removes one or more instances from the specified Auto Scaling group. After the instances are detached, you can manage them independent of the Auto Scaling group. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached. If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups. For more information, see Detach or attach instances in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--instance-ids",
          description:
            "The IDs of the instances. You can specify up to 20 instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--should-decrement-desired-capacity",
          description:
            "Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached",
        },
        {
          name: "--no-should-decrement-desired-capacity",
          description:
            "Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "detach-load-balancer-target-groups",
      description:
        "This API operation is superseded by DetachTrafficSources, which can detach multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DetachLoadBalancerTargetGroups. You can use both the original DetachLoadBalancerTargetGroups API operation and DetachTrafficSources on the same Auto Scaling group.  Detaches one or more target groups from the specified Auto Scaling group. When you detach a target group, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the DescribeLoadBalancerTargetGroups API call. The instances remain running.  You can use this operation to detach target groups that were attached by using AttachLoadBalancerTargetGroups, but not for target groups that were attached by using AttachTrafficSources",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-group-arns",
          description:
            "The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups",
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
      name: "detach-load-balancers",
      description:
        "This API operation is superseded by DetachTrafficSources, which can detach multiple traffic sources types. We recommend using DetachTrafficSources to simplify how you manage traffic sources. However, we continue to support DetachLoadBalancers. You can use both the original DetachLoadBalancers API operation and DetachTrafficSources on the same Auto Scaling group.  Detaches one or more Classic Load Balancers from the specified Auto Scaling group. This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DetachLoadBalancerTargetGroups API instead. When you detach a load balancer, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the DescribeLoadBalancers API call. The instances remain running",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--load-balancer-names",
          description:
            "The names of the load balancers. You can specify up to 10 load balancers",
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
      name: "detach-traffic-sources",
      description:
        "Detaches one or more traffic sources from the specified Auto Scaling group. When you detach a traffic source, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the DescribeTrafficSources API call. The instances continue to run",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-sources",
          description:
            "The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources",
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
      name: "disable-metrics-collection",
      description:
        "Disables group metrics collection for the specified Auto Scaling group",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--metrics",
          description:
            "Identifies the metrics to disable. You can specify one or more of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity     WarmPoolDesiredCapacity     WarmPoolWarmedCapacity     WarmPoolPendingCapacity     WarmPoolTerminatingCapacity     WarmPoolTotalCapacity     GroupAndWarmPoolDesiredCapacity     GroupAndWarmPoolTotalCapacity    If you omit this property, all metrics are disabled. For more information, see Amazon CloudWatch metrics for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
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
      name: "enable-metrics-collection",
      description:
        "Enables group metrics collection for the specified Auto Scaling group. You can use these metrics to track changes in an Auto Scaling group and to set alarms on threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch console. For more information, see Monitor CloudWatch metrics for your Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--metrics",
          description:
            "Identifies the metrics to enable. You can specify one or more of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity     WarmPoolDesiredCapacity     WarmPoolWarmedCapacity     WarmPoolPendingCapacity     WarmPoolTerminatingCapacity     WarmPoolTotalCapacity     GroupAndWarmPoolDesiredCapacity     GroupAndWarmPoolTotalCapacity    If you specify Granularity and don't specify any metrics, all metrics are enabled. For more information, see Amazon CloudWatch metrics for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is 1Minute",
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
      name: "enter-standby",
      description:
        "Moves the specified instances into the standby state. If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group. If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--instance-ids",
          description:
            "The IDs of the instances. You can specify up to 20 instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--should-decrement-desired-capacity",
          description:
            "Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to Standby mode",
        },
        {
          name: "--no-should-decrement-desired-capacity",
          description:
            "Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to Standby mode",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "execute-policy",
      description:
        "Executes the specified policy. This can be useful for testing the design of your scaling policy",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "The name or ARN of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--honor-cooldown",
          description:
            "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-honor-cooldown",
          description:
            "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--metric-value",
          description:
            "The metric value to compare to BreachThreshold. This enables you to execute a policy of type StepScaling and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59. If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error. Required if the policy type is StepScaling and not supported otherwise",
          args: {
            name: "double",
          },
        },
        {
          name: "--breach-threshold",
          description:
            "The breach threshold for the alarm. Required if the policy type is StepScaling and not supported otherwise",
          args: {
            name: "double",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "exit-standby",
      description:
        "Moves the specified instances out of the standby state. After you put the instances back in service, the desired capacity is incremented. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--instance-ids",
          description:
            "The IDs of the instances. You can specify up to 20 instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
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
      name: "get-predictive-scaling-forecast",
      description:
        "Retrieves the forecast data for a predictive scaling policy. Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast. A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts. For more information, see Predictive scaling for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The inclusive start time of the time range for the forecast data to get. At most, the date and time can be one year before the current date and time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is 30 days.  Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. Amazon EC2 Auto Scaling only issues forecasts for periods of two days in advance",
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
      name: "put-lifecycle-hook",
      description:
        "Creates or updates a lifecycle hook for the specified Auto Scaling group. Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.   (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.    Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the RecordLifecycleActionHeartbeat API call.   If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call.   For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails. You can view the lifecycle hooks for an Auto Scaling group using the DescribeLifecycleHooks API call. If you are no longer using a lifecycle hook, you can delete it by calling the DeleteLifecycleHook API",
      options: [
        {
          name: "--lifecycle-hook-name",
          description: "The name of the lifecycle hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-transition",
          description:
            "The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.   To create a lifecycle hook for scale-out events, specify autoscaling:EC2_INSTANCE_LAUNCHING.   To create a lifecycle hook for scale-in events, specify autoscaling:EC2_INSTANCE_TERMINATING.   Required for new lifecycle hooks, but optional when updating existing hooks",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-target-arn",
          description:
            'The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in a wait state for the lifecycle hook. You can specify either an Amazon SNS topic or an Amazon SQS queue. If you specify an empty string, this overrides the current ARN. This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic. When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: "Event": "autoscaling:TEST_NOTIFICATION"',
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-metadata",
          description:
            "Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target",
          args: {
            name: "string",
          },
        },
        {
          name: "--heartbeat-timeout",
          description:
            "The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-result",
          description:
            "The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is ABANDON. Valid values: CONTINUE | ABANDON",
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
      name: "put-notification-configuration",
      description:
        "Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address. This configuration overwrites any existing configuration. For more information, see Amazon SNS notification options for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-arn",
          description: "The Amazon Resource Name (ARN) of the Amazon SNS topic",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-types",
          description:
            "The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the DescribeAutoScalingNotificationTypes API",
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
      name: "put-scaling-policy",
      description:
        "Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used.  For more information about using dynamic scaling, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide. For more information about using predictive scaling, see Predictive scaling for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. You can view the scaling policies for an Auto Scaling group using the DescribePolicies API call. If you are no longer using a scaling policy, you can delete it by calling the DeletePolicy API",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-name",
          description: "The name of the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description:
            "One of the following policy types:     TargetTrackingScaling     StepScaling     SimpleScaling (default)    PredictiveScaling",
          args: {
            name: "string",
          },
        },
        {
          name: "--adjustment-type",
          description:
            "Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity. Required if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-adjustment-step",
          description:
            "Available for backward compatibility. Use MinAdjustmentMagnitude instead",
          args: {
            name: "integer",
          },
        },
        {
          name: "--min-adjustment-magnitude",
          description:
            "The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances. Valid only if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide.  Some Auto Scaling groups use instance weights. In this case, set the MinAdjustmentMagnitude to a value that is at least as large as your largest instance weight",
          args: {
            name: "integer",
          },
        },
        {
          name: "--scaling-adjustment",
          description:
            "The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cooldown",
          description:
            "A cooldown period, in seconds, that applies to a specific simple scaling policy. When a cooldown period is specified here, it overrides the default cooldown. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Default: None",
          args: {
            name: "integer",
          },
        },
        {
          name: "--metric-aggregation-type",
          description:
            "The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling",
          args: {
            name: "string",
          },
        },
        {
          name: "--step-adjustments",
          description:
            "A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)",
          args: {
            name: "list",
          },
        },
        {
          name: "--estimated-instance-warmup",
          description:
            "Not needed if the default instance warmup is defined for the group.  The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This warm-up period applies to instances launched due to a specific target tracking or step scaling policy. When a warm-up period is specified here, it overrides the default instance warmup. Valid only if the policy type is TargetTrackingScaling or StepScaling.  The default is to use the value for the default instance warmup defined for the group. If default instance warmup is null, then EstimatedInstanceWarmup falls back to the value of default cooldown",
          args: {
            name: "integer",
          },
        },
        {
          name: "--target-tracking-configuration",
          description:
            "A target tracking scaling policy. Provides support for predefined or custom metrics. The following predefined metrics are available:    ASGAverageCPUUtilization     ASGAverageNetworkIn     ASGAverageNetworkOut     ALBRequestCountPerTarget    If you specify ALBRequestCountPerTarget for the metric, you must specify the ResourceLabel property with the PredefinedMetricSpecification. For more information, see TargetTrackingConfiguration in the Amazon EC2 Auto Scaling API Reference. Required if the policy type is TargetTrackingScaling",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enabled",
          description:
            "Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see Disable a scaling policy for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-enabled",
          description:
            "Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see Disable a scaling policy for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--predictive-scaling-configuration",
          description:
            "A predictive scaling policy. Provides support for predefined and custom metrics. Predefined metrics include CPU utilization, network in/out, and the Application Load Balancer request count. For more information, see PredictiveScalingConfiguration in the Amazon EC2 Auto Scaling API Reference. Required if the policy type is PredictiveScaling",
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
      name: "put-scheduled-update-group-action",
      description:
        "Creates or updates a scheduled scaling action for an Auto Scaling group. For more information, see Scheduled scaling in the Amazon EC2 Auto Scaling User Guide. You can view the scheduled actions for an Auto Scaling group using the DescribeScheduledActions API call. If you are no longer using a scheduled action, you can delete it by calling the DeleteScheduledAction API. If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-action-name",
          description: "The name of this scaling action",
          args: {
            name: "string",
          },
        },
        {
          name: "--time",
          description: "This property is no longer used",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--start-time",
          description:
            'The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, "2021-06-01T00:00:00Z"). If you specify Recurrence and StartTime, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence',
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            'The date and time for the recurring schedule to end, in UTC. For example, "2021-06-01T00:00:00Z"',
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--recurrence",
          description:
            'The recurring schedule for this action. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, "30 0 1 1,6,12 *"). For more information about this format, see Crontab. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops. Cron expressions use Universal Coordinated Time (UTC) by default',
          args: {
            name: "string",
          },
        },
        {
          name: "--min-size",
          description: "The minimum size of the Auto Scaling group",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-size",
          description: "The maximum size of the Auto Scaling group",
          args: {
            name: "integer",
          },
        },
        {
          name: "--desired-capacity",
          description:
            "The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions.   You must specify at least one of the following properties: MaxSize, MinSize, or DesiredCapacity",
          args: {
            name: "integer",
          },
        },
        {
          name: "--time-zone",
          description:
            "Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default.  Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as Etc/GMT+9 or Pacific/Tahiti). For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
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
      name: "put-warm-pool",
      description:
        "Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. This operation must be called from the Region in which the Auto Scaling group was created. You can view the instances in the warm pool using the DescribeWarmPool API call. If you are no longer using a warm pool, you can delete it by calling the DeleteWarmPool API. For more information, see Warm pools for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-group-prepared-capacity",
          description:
            "Specifies the maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group. This is an optional property. Specify it only if you do not want the warm pool size to be determined by the difference between the group's maximum capacity and its desired capacity.   If a value for MaxGroupPreparedCapacity is not specified, Amazon EC2 Auto Scaling launches and maintains the difference between the group's maximum capacity and its desired capacity. If you specify a value for MaxGroupPreparedCapacity, Amazon EC2 Auto Scaling uses the difference between the MaxGroupPreparedCapacity and the desired capacity instead.  The size of the warm pool is dynamic. Only when MaxGroupPreparedCapacity and MinSize are set to the same value does the warm pool have an absolute size.  If the desired capacity of the Auto Scaling group is higher than the MaxGroupPreparedCapacity, the capacity of the warm pool is 0, unless you specify a value for MinSize. To remove a value that you previously set, include the property but specify -1 for the value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--min-size",
          description:
            "Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pool-state",
          description:
            "Sets the instance state to transition to after the lifecycle actions are complete. Default is Stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-reuse-policy",
          description:
            "Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in",
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
      name: "record-lifecycle-action-heartbeat",
      description:
        "Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the PutLifecycleHook API call. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.   (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.    If you finish before the timeout period ends, send a callback by using the CompleteLifecycleAction API call.   For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--lifecycle-hook-name",
          description: "The name of the lifecycle hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-action-token",
          description:
            "A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description: "The ID of the instance",
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
      name: "resume-processes",
      description:
        "Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group. For more information, see Suspend and resume Amazon EC2 Auto Scaling processes in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-processes",
          description:
            "One or more of the following processes:    Launch     Terminate     AddToLoadBalancer     AlarmNotification     AZRebalance     HealthCheck     InstanceRefresh     ReplaceUnhealthy     ScheduledActions    If you omit this property, all processes are specified",
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
      name: "rollback-instance-refresh",
      description:
        "Cancels an instance refresh that is in progress and rolls back any changes that it made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh. This restores your Auto Scaling group to the configuration that it was using before the start of the instance refresh.  This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes. A rollback is not supported in the following situations:    There is no desired configuration specified for the instance refresh.   The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the ImageId property.   The Auto Scaling group uses the launch template's $Latest or $Default version.   When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately begins replacing instances. You can check the status of this operation through the DescribeInstanceRefreshes API operation",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
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
      name: "set-desired-capacity",
      description:
        "Sets the size of the specified Auto Scaling group. If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.  For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-capacity",
          description:
            "The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain",
          args: {
            name: "integer",
          },
        },
        {
          name: "--honor-cooldown",
          description:
            "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities",
        },
        {
          name: "--no-honor-cooldown",
          description:
            "Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-instance-health",
      description:
        "Sets the health status of the specified instance. For more information, see Set up a custom health check for your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--instance-id",
          description: "The ID of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--health-status",
          description:
            "The health status of the instance. Set to Healthy to have the instance remain in service. Set to Unhealthy to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--should-respect-grace-period",
          description:
            "If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod specified for the group, by default, this call respects the grace period. Set this to False, to have the call not respect the grace period associated with the group. For more information about the health check grace period, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-should-respect-grace-period",
          description:
            "If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod specified for the group, by default, this call respects the grace period. Set this to False, to have the call not respect the grace period associated with the group. For more information about the health check grace period, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "set-instance-protection",
      description:
        "Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool. For more information, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails",
      options: [
        {
          name: "--instance-ids",
          description:
            "One or more instance IDs. You can specify up to 50 instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--protected-from-scale-in",
          description:
            "Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in",
        },
        {
          name: "--no-protected-from-scale-in",
          description:
            "Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-instance-refresh",
      description:
        "Starts an instance refresh. This operation is part of the instance refresh feature in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group.  If successful, the request's response contains a unique ID that you can use to track the progress of the instance refresh. To query its status, call the DescribeInstanceRefreshes API. To describe the instance refreshes that have already run, call the DescribeInstanceRefreshes API. To cancel an instance refresh that is in progress, use the CancelInstanceRefresh API.  An instance refresh might fail for several reasons, such as EC2 launch failures, misconfigured health checks, or not ignoring or allowing the termination of instances that are in Standby state or protected from scale in. You can monitor for failed EC2 launches using the scaling activities. To find the scaling activities, call the DescribeScalingActivities API. If you enable auto rollback, your Auto Scaling group will be rolled back automatically when the instance refresh fails. You can enable this feature before starting an instance refresh by specifying the AutoRollback property in the instance refresh preferences. Otherwise, to roll back an instance refresh before it finishes, use the RollbackInstanceRefresh API",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--strategy",
          description:
            "The strategy to use for the instance refresh. The only valid value is Rolling",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-configuration",
          description:
            "The desired configuration. For example, the desired configuration can specify a new launch template or a new version of the current launch template. Once the instance refresh succeeds, Amazon EC2 Auto Scaling updates the settings of the Auto Scaling group to reflect the new desired configuration.   When you specify a new launch template or a new version of the current launch template for your desired configuration, consider enabling the SkipMatching property in preferences. If it's enabled, Amazon EC2 Auto Scaling skips replacing instances that already use the specified launch template and instance types. This can help you reduce the number of replacements that are required to apply updates",
          args: {
            name: "structure",
          },
        },
        {
          name: "--preferences",
          description:
            "Sets your preferences for the instance refresh so that it performs as expected when you start it. Includes the instance warmup time, the minimum and maximum healthy percentages, and the behaviors that you want Amazon EC2 Auto Scaling to use if instances that are in Standby state or protected from scale in are found. You can also choose to enable additional features, such as the following:   Auto rollback   Checkpoints   CloudWatch alarms   Skip matching   Bake time",
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
      name: "suspend-processes",
      description:
        "Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group. If you suspend either the Launch or Terminate process types, it can prevent other process types from functioning properly. For more information, see Suspend and resume Amazon EC2 Auto Scaling processes in the Amazon EC2 Auto Scaling User Guide. To resume processes that have been suspended, call the ResumeProcesses API",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-processes",
          description:
            "One or more of the following processes:    Launch     Terminate     AddToLoadBalancer     AlarmNotification     AZRebalance     HealthCheck     InstanceRefresh     ReplaceUnhealthy     ScheduledActions    If you omit this property, all processes are specified",
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
      name: "terminate-instance-in-auto-scaling-group",
      description:
        "Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool. This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to terminated. You can't connect to or start an instance after you've terminated it. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated.  By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide",
      options: [
        {
          name: "--instance-id",
          description: "The ID of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--should-decrement-desired-capacity",
          description:
            "Indicates whether terminating the instance also decrements the size of the Auto Scaling group",
        },
        {
          name: "--no-should-decrement-desired-capacity",
          description:
            "Indicates whether terminating the instance also decrements the size of the Auto Scaling group",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-auto-scaling-group",
      description:
        "We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Updates the configuration for the specified Auto Scaling group. To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns.  If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application. Note the following about changing DesiredCapacity, MaxSize, or MinSize:   If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.   If you specify a new value for MinSize without specifying a value for DesiredCapacity, and the new MinSize is larger than the current size of the group, this sets the group's DesiredCapacity to the new MinSize value.   If you specify a new value for MaxSize without specifying a value for DesiredCapacity, and the new MaxSize is smaller than the current size of the group, this sets the group's DesiredCapacity to the new MaxSize value.   To see which properties have been set, call the DescribeAutoScalingGroups API. To view the scaling policies for an Auto Scaling group, call the DescribePolicies API. If the group has scaling policies, you can update them by calling the PutScalingPolicy API",
      options: [
        {
          name: "--auto-scaling-group-name",
          description: "The name of the Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-configuration-name",
          description:
            "The name of the launch configuration. If you specify LaunchConfigurationName in your update request, you can't specify LaunchTemplate or MixedInstancesPolicy",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-template",
          description:
            "The launch template and version to use to specify the updates. If you specify LaunchTemplate in your update request, you can't specify LaunchConfigurationName or MixedInstancesPolicy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mixed-instances-policy",
          description:
            "The mixed instances policy. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--min-size",
          description: "The minimum size of the Auto Scaling group",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-size",
          description:
            "The maximum size of the Auto Scaling group.  With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--desired-capacity",
          description:
            "The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-cooldown",
          description:
            "Only needed if you use simple scaling policies.  The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--availability-zones",
          description: "One or more Availability Zones for the group",
          args: {
            name: "list",
          },
        },
        {
          name: "--health-check-type",
          description:
            "A comma-separated value string of one or more health check types. The valid values are EC2, EBS, ELB, and VPC_LATTICE. EC2 is the default health check and cannot be disabled. For more information, see Health checks for instances in an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. Only specify EC2 if you must clear a value that was previously set",
          args: {
            name: "string",
          },
        },
        {
          name: "--health-check-grace-period",
          description:
            "The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the InService state. For more information, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--placement-group",
          description:
            "The name of an existing placement group into which to launch your instances. To remove the placement group setting, pass an empty string for placement-group. For more information about placement groups, see Placement groups in the Amazon EC2 User Guide for Linux Instances.  A cluster placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-zone-identifier",
          description:
            "A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify must reside in those Availability Zones",
          args: {
            name: "string",
          },
        },
        {
          name: "--termination-policies",
          description:
            "A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see Configure termination policies for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid values: Default | AllocationStrategy | ClosestToNextInstanceHour | NewestInstance | OldestInstance | OldestLaunchConfiguration | OldestLaunchTemplate | arn:aws:lambda:region:account-id:function:my-function:my-alias",
          args: {
            name: "list",
          },
        },
        {
          name: "--new-instances-protected-from-scale-in",
          description:
            "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-new-instances-protected-from-scale-in",
          description:
            "Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Use instance scale-in protection in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--service-linked-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-instance-lifetime",
          description:
            "The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see Replacing Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--capacity-rebalance",
          description:
            "Enables or disables Capacity Rebalancing. For more information, see Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-capacity-rebalance",
          description:
            "Enables or disables Capacity Rebalancing. For more information, see Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--context",
          description: "Reserved",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-capacity-type",
          description:
            "The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports DesiredCapacityType for attribute-based instance type selection only. For more information, see Create a mixed instances group using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide. By default, Amazon EC2 Auto Scaling specifies units, which translates into number of instances. Valid values: units | vcpu | memory-mib",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-instance-warmup",
          description:
            "The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the InService state.  During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see Set the default instance warmup for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.  To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, even if it is set to 0 seconds. To remove a value that you previously set, include the property but specify -1 for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of 0 or other nominal value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--instance-maintenance-policy",
          description:
            "An instance maintenance policy. For more information, see Set instance maintenance policy in the Amazon EC2 Auto Scaling User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--availability-zone-distribution",
          description:
            "The instance capacity distribution across Availability Zones",
          args: {
            name: "structure",
          },
        },
        {
          name: "--availability-zone-impairment-policy",
          description: "The policy for Availability Zone impairment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--skip-zonal-shift-validation",
          description:
            "If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-skip-zonal-shift-validation",
          description:
            "If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--capacity-reservation-specification",
          description:
            "The capacity reservation specification for the Auto Scaling group",
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
