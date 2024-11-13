const completionSpec: Fig.Spec = {
  name: "gamelift",
  description:
    "Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand.   About Amazon GameLift solutions  Get more information on these Amazon GameLift solutions in the Amazon GameLift Developer Guide.   Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance player demand and hosting costs, configure your game session management to minimize player latency, and add FlexMatch for matchmaking.   Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure and set up ready-to-go game servers for your game. Realtime Servers provides a game server framework with core Amazon GameLift infrastructure already built in. Then use the full range of Amazon GameLift managed hosting features, including FlexMatch, for your game.   Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game hosting, including boosting the viability of low-cost Spot Instances gaming. For a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.   Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a customizable matchmaking service for multiplayer games. Use FlexMatch as integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone service into your own hosting solution.    About this API Reference  This reference guide describes the low-level service API for Amazon GameLift. With each topic in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI reference. Useful links:    Amazon GameLift API operations listed by tasks      Amazon GameLift tools and resources",
  subcommands: [
    {
      name: "accept-match",
      description:
        "Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit.  When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status REQUIRES_ACCEPTANCE. This is a trigger for your game to get acceptance from all players in each ticket. Calls to this action are only valid for tickets that are in this status; calls for tickets not in this status result in an error. To register acceptance, specify the ticket ID, one or more players, and an acceptance response. When all players have accepted, Amazon GameLift advances the matchmaking tickets to status PLACING, and attempts to create a new game session for the match.  If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. Each matchmaking ticket in the failed match is handled as follows:    If the ticket has one or more players who rejected the match or failed to respond, the ticket status is set CANCELLED and processing is terminated.   If all players in the ticket accepted the match, the ticket status is returned to SEARCHING to find a new match.     Learn more    Add FlexMatch to a game client    FlexMatch events (reference)",
      options: [
        {
          name: "--ticket-id",
          description:
            "A unique identifier for a matchmaking ticket. The ticket must be in status REQUIRES_ACCEPTANCE; otherwise this request will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-ids",
          description:
            "A unique identifier for a player delivering the response. This parameter can include one or multiple player IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--acceptance-type",
          description: "Player response to the proposed match",
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
      name: "claim-game-server",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in CLAIMED status for 60 seconds, and returns connection information that players can use to connect to the game server.  To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. Add filter options to further restrict how a game server is chosen, such as only allowing game servers on ACTIVE instances to be claimed. When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains AVAILABLE while the claim status is set to CLAIMED for up to 60 seconds. This time period gives the game server time to update its status to UTILIZED after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable. If you try to claim a specific game server, this request will fail in the following cases:   If the game server utilization status is UTILIZED.   If the game server claim status is CLAIMED.   If the game server is running on an instance in DRAINING status and the provided filter option does not allow placing on DRAINING instances.    Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group where the game server is running. If you are not specifying a game server to claim, this value identifies where you want Amazon GameLift FleetIQ to look for an available game server to claim",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-id",
          description:
            "A custom string that uniquely identifies the game server to claim. If this parameter is left empty, Amazon GameLift FleetIQ searches for an available game server in the specified game server group",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-data",
          description:
            "A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-option",
          description:
            "Object that restricts how a claimed game server is chosen",
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
      name: "create-alias",
      description:
        "Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build.  Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site.  To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling UpdateAlias.  Related actions   All APIs by task",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with an alias. Alias names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A human-readable description of the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-strategy",
          description:
            "The routing configuration, including routing type and fleet target, for the alias",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new alias resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-build",
      description:
        "Creates an Amazon GameLift build resource for your game server software and stores the software for deployment to hosting resources. Combine game server binaries and dependencies into a single .zip file   Use the CLI command  upload-build  to quickly and simply create a new build and upload your game build .zip file to Amazon GameLift Amazon S3. This helper command eliminates the need to explicitly manage access permissions.  Alternatively, use the CreateBuild action for the following scenarios:   You want to create a build and upload a game build zip file from in an Amazon S3 location that you control. In this scenario, you need to give Amazon GameLift permission to access to the Amazon S3 bucket. With permission in place, call CreateBuild and specify a build name, the build's runtime operating system, and the Amazon S3 storage location where the build file is stored.   You want to create a build and upload a local game build zip file to an Amazon S3 location that's controlled by Amazon GameLift. (See the upload-build CLI command for this scenario.) In this scenario, you need to request temporary access credentials to the Amazon GameLift Amazon S3 location. Specify a build name and the build's runtime operating system. The response provides an Amazon S3 location and a set of temporary access credentials. Use the credentials to upload your build files to the specified Amazon S3 location (see Uploading Objects in the Amazon S3 Developer Guide). You can't update build files after uploading them to Amazon GameLift Amazon S3.   If successful, this action creates a new build resource with a unique build ID and places it in INITIALIZED status. When the build reaches READY status, you can create fleets with it.  Learn more   Uploading Your Game    Create a Build with Files in Amazon S3   All APIs by task",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a build. Build names do not need to be unique. You can change this value later",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-location",
          description:
            "Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region. If a StorageLocation is specified, the size of your file can be found in your Amazon S3 bucket. Amazon GameLift will report a SizeOnDisk of 0",
          args: {
            name: "structure",
          },
        },
        {
          name: "--operating-system",
          description:
            "The environment that your game server binaries run on. This value determines the type of fleet resources that you use for this build. If your game build contains multiple executables, they all must run on the same operating system. This parameter is required, and there's no default value. You can't change a build's operating system later.  Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x., first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See  Migrate to Amazon GameLift server SDK version 5",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new build resource. Tags are developer defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits",
          args: {
            name: "list",
          },
        },
        {
          name: "--server-sdk-version",
          description:
            "A server SDK version you used when integrating your game server build with Amazon GameLift. For more information see Integrate games with custom game servers. By default Amazon GameLift sets this value to 4.0.2",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-version",
          description:
            "Version information that is associated with a build or script. Version strings do not need to be unique. You can change this value later",
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
      name: "create-container-fleet",
      description:
        "Creates a managed fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your containerized game servers. Use this operation to define how to deploy a container architecture onto each fleet instance and configure fleet settings. You can create a container fleet in any Amazon Web Services Regions that Amazon GameLift supports for multi-location fleets. A container fleet can be deployed to a single location or multiple locations. Container fleets are deployed with Amazon Linux 2023 as the instance operating system. Define the fleet's container architecture using container group definitions. Each fleet can have one of the following container group types:   The game server container group runs your game server build and dependent software. Amazon GameLift deploys one or more replicas of this container group to each fleet instance. The number of replicas depends on the computing capabilities of the fleet instance in use.    An optional per-instance container group might be used to run other software that only needs to run once per instance, such as background services, logging, or test processes. One per-instance container group is deployed to each fleet instance.    Each container group can include the definition for one or more containers. A container definition specifies a container image that is stored in an Amazon Elastic Container Registry (Amazon ECR) public or private repository.  Request options  Use this operation to make the following types of requests. Most fleet settings have default values, so you can create a working fleet with a minimal configuration and default values, which you can customize later.   Create a fleet with no container groups. You can configure a container fleet and then add container group definitions later. In this scenario, no fleet instances are deployed, and the fleet can't host game sessions until you add a game server container group definition. Provide the following required parameter values:    FleetRoleArn      Create a fleet with a game server container group. Provide the following required parameter values:    FleetRoleArn     GameServerContainerGroupDefinitionName      Create a fleet with a game server container group and a per-instance container group. Provide the following required parameter values:    FleetRoleArn     GameServerContainerGroupDefinitionName     PerInstanceContainerGroupDefinitionName       Results  If successful, this operation creates a new container fleet resource, places it in PENDING status, and initiates the fleet creation workflow. For fleets with container groups, this workflow starts a fleet deployment and transitions the status to ACTIVE. Fleets without a container group are placed in CREATED status. You can update most of the properties of a fleet, including container group definitions, and deploy the update across all fleet instances. Use a fleet update to deploy a new game server version update across the container fleet",
      options: [
        {
          name: "--fleet-role-arn",
          description:
            "The unique identifier for an Identity and Access Management (IAM) role with permissions to run your containers on resources that are managed by Amazon GameLift. Use an IAM service role with the GameLiftContainerFleetPolicy managed policy attached. For more information, see Set up an IAM service role. You can't change this fleet property after the fleet is created. IAM role ARN values use the following pattern: arn:aws:iam::[Amazon Web Services account]:role/[role name]",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A meaningful description of the container fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-container-group-definition-name",
          description:
            "A container group definition resource that describes how to deploy containers with your game server build and support software onto each fleet instance. You can specify the container group definition's name to use the latest version. Alternatively, provide an ARN value with a specific version number. Create a container group definition by calling CreateContainerGroupDefinition. This operation creates a ContainerGroupDefinition resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--per-instance-container-group-definition-name",
          description:
            "The name of a container group definition resource that describes a set of axillary software. A fleet instance has one process for executables in this container group. A per-instance container group is optional. You can update the fleet to add or remove a per-instance container group at any time. You can specify the container group definition's name to use the latest version. Alternatively, provide an ARN value with a specific version number.  Create a container group definition by calling CreateContainerGroupDefinition. This operation creates a ContainerGroupDefinition resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-connection-port-range",
          description:
            "The set of port numbers to open on each fleet instance. A fleet's connection ports map to container ports that are configured in the fleet's container group definitions.  By default, Amazon GameLift calculates an optimal port range based on your fleet configuration. To use the calculated range, don't set this parameter. The values are:   Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift uses the following formula: 4192 + [# of game server container groups per fleet instance] * [# of container ports in the game server container group definition] + [# of container ports in the game server container group definition]    You can also choose to manually set this parameter. When manually setting this parameter, you must use port numbers that match the fleet's inbound permissions port range.  If you set values manually, Amazon GameLift no longer calculates a port range for you, even if you later remove the manual settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-inbound-permissions",
          description:
            "The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. As a best practice, when remotely accessing a fleet instance, we recommend opening ports only when you need them and closing them when you're finished. By default, Amazon GameLift calculates an optimal port range based on your fleet configuration. To use the calculated range, don't set this parameter. The values are:   Protocol: UDP   Port range: 4192 to a number calculated based on your fleet configuration. Amazon GameLift uses the following formula: 4192 + [# of game server container groups per fleet instance] * [# of container ports in the game server container group definition] + [# of container ports in the game server container group definition]    You can also choose to manually set this parameter. When manually setting this parameter, you must use port numbers that match the fleet's connection port range.  If you set values manually, Amazon GameLift no longer calculates a port range for you, even if you later remove the manual settings",
          args: {
            name: "list",
          },
        },
        {
          name: "--game-server-container-groups-per-instance",
          description:
            "The number of times to replicate the game server container group on each fleet instance.  By default, Amazon GameLift calculates the maximum number of game server container groups that can fit on each instance. This calculation is based on the CPU and memory resources of the fleet's instance type). To use the calculated maximum, don't set this parameter. If you set this number manually, Amazon GameLift uses your value as long as it's less than the calculated maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--instance-type",
          description:
            "The Amazon EC2 instance type to use for all instances in the fleet. For multi-location fleets, the instance type must be available in the home region and all remote locations. Instance type determines the computing resources and processing power that's available to host your game servers. This includes including CPU, memory, storage, and networking capacity.  By default, Amazon GameLift selects an instance type that fits the needs of your container groups and is available in all selected fleet locations. You can also choose to manually set this parameter. See Amazon Elastic Compute Cloud Instance Types for detailed descriptions of Amazon EC2 instance types. You can't update this fleet property later",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-type",
          description:
            "Indicates whether to use On-Demand or Spot instances for this fleet. Learn more about when to use  On-Demand versus Spot Instances. This fleet property can't be changed after the fleet is created. By default, this property is set to ON_DEMAND. You can't update this fleet property later",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "A set of locations to deploy container fleet instances to. You can add any Amazon Web Services Region or Local Zone that's supported by Amazon GameLift. Provide a list of one or more Amazon Web Services Region codes, such as us-west-2, or Local Zone names. Also include the fleet's home Region, which is the Amazon Web Services Region where the fleet is created. For a list of supported Regions and Local Zones, see  Amazon GameLift service locations for managed hosting",
          args: {
            name: "list",
          },
        },
        {
          name: "--metric-groups",
          description:
            "The name of an Amazon Web Services CloudWatch metric group to add this fleet to. You can use a metric group to aggregate metrics for multiple fleets. You can specify an existing metric group name or use a new name to create a new metric group. Each fleet can have only one metric group, but you can change this value at any time",
          args: {
            name: "list",
          },
        },
        {
          name: "--new-game-session-protection-policy",
          description:
            "Determines whether Amazon GameLift can shut down game sessions on the fleet that are actively running and hosting players. Amazon GameLift might prompt an instance shutdown when scaling down fleet capacity or when retiring unhealthy instances. You can also set game session protection for individual game sessions using UpdateGameSession.    NoProtection -- Game sessions can be shut down during active gameplay.     FullProtection -- Game sessions in ACTIVE status can't be shut down.   By default, this property is set to NoProtection",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-creation-limit-policy",
          description:
            "A policy that limits the number of game sessions that each individual player can create on instances in this fleet. The limit applies for a specified span of time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--log-configuration",
          description:
            "A method for collecting container logs for the fleet. Amazon GameLift saves all standard output for each container in logs, including game session logs. You can select from the following methods:     CLOUDWATCH -- Send logs to an Amazon CloudWatch log group that you define. Each container emits a log stream, which is organized in the log group.     S3 -- Store logs in an Amazon S3 bucket that you define.    NONE -- Don't collect container logs.   By default, this property is set to CLOUDWATCH.  Amazon GameLift requires permissions to send logs other Amazon Web Services services in your account. These permissions are included in the IAM fleet role for this container fleet (see FleetRoleArn)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-container-group-definition",
      description:
        "Creates a ContainerGroupDefinition that describes a set of containers for hosting your game server with Amazon GameLift managed containers hosting. An Amazon GameLift container group is similar to a container task or pod. Use container group definitions when you create a container fleet with CreateContainerFleet.  A container group definition determines how Amazon GameLift deploys your containers to each instance in a container fleet. You can maintain multiple versions of a container group definition. There are two types of container groups:   A game server container group has the containers that run your game server application and supporting software. A game server container group can have these container types:   Game server container. This container runs your game server. You can define one game server container in a game server container group.   Support container. This container runs software in parallel with your game server. You can define up to 8 support containers in a game server group.   When building a game server container group definition, you can choose to bundle your game server executable and all dependent software into a single game server container. Alternatively, you can separate the software into one game server container and one or more support containers. On a container fleet instance, a game server container group can be deployed multiple times (depending on the compute resources of the instance). This means that all containers in the container group are replicated together.   A per-instance container group has containers for processes that aren't replicated on a container fleet instance. This might include background services, logging, test processes, or processes that need to persist independently of the game server container group. When building a per-instance container group, you can define up to 10 support containers.    This operation requires Identity and Access Management (IAM) permissions to access container images in Amazon ECR repositories. See  IAM permissions for Amazon GameLift for help setting the appropriate permissions.   Request options  Use this operation to make the following types of requests. You can specify values for the minimum required parameters and customize optional values later.   Create a game server container group definition. Provide the following required parameter values:    Name     ContainerGroupType (GAME_SERVER)    OperatingSystem (omit to use default value)    TotalMemoryLimitMebibytes (omit to use default value)    TotalVcpuLimit (omit to use default value)   At least one GameServerContainerDefinition     ContainerName     ImageUrl     PortConfiguration     ServerSdkVersion (omit to use default value)       Create a per-instance container group definition. Provide the following required parameter values:    Name     ContainerGroupType (PER_INSTANCE)    OperatingSystem (omit to use default value)    TotalMemoryLimitMebibytes (omit to use default value)    TotalVcpuLimit (omit to use default value)   At least one SupportContainerDefinition     ContainerName     ImageUrl         Results  If successful, this request creates a ContainerGroupDefinition resource and assigns a unique ARN value. You can update most properties of a container group definition by calling UpdateContainerGroupDefinition, and optionally save the update as a new version",
      options: [
        {
          name: "--name",
          description:
            "A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-group-type",
          description:
            "The type of container group being defined. Container group type determines how Amazon GameLift deploys the container group on each fleet instance. Default value: GAME_SERVER",
          args: {
            name: "string",
          },
        },
        {
          name: "--total-memory-limit-mebibytes",
          description:
            "The maximum amount of memory (in MiB) to allocate to the container group. All containers in the group share this memory. If you specify memory limits for an individual container, the total value must be greater than any individual container's memory limit. Default value: 1024",
          args: {
            name: "integer",
          },
        },
        {
          name: "--total-vcpu-limit",
          description:
            "The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share this memory. If you specify vCPU limits for individual containers, the total value must be equal to or greater than the sum of the CPU limits for all containers in the group. Default value: 1",
          args: {
            name: "double",
          },
        },
        {
          name: "--game-server-container-definition",
          description:
            "The definition for the game server container in this group. Define a game server container only when the container group type is GAME_SERVER. Game server containers specify a container image with your game server build. You can pass in your container definitions as a JSON file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--support-container-definitions",
          description:
            "One or more definition for support containers in this group. You can define a support container in any type of container group. You can pass in your container definitions as a JSON file",
          args: {
            name: "list",
          },
        },
        {
          name: "--operating-system",
          description:
            "The platform that all containers in the group use. Containers in a group must run on the same operating system. Default value: AMAZON_LINUX_2023   Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See  Migrate to Amazon GameLift server SDK version 5",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-description",
          description:
            "A description for the initial version of this container group definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the container group definition resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-fleet",
      description:
        "Creates a fleet of compute resources to host your game servers. Use this operation to set up the following types of fleets based on compute type:   Managed EC2 fleet  An EC2 fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances. Your game server build is deployed to each fleet instance. Amazon GameLift manages the fleet's instances and controls the lifecycle of game server processes, which host game sessions for players. EC2 fleets can have instances in multiple locations. Each instance in the fleet is designated a Compute. To create an EC2 fleet, provide these required parameters:   Either BuildId or ScriptId     ComputeType set to EC2 (the default value)    EC2InboundPermissions     EC2InstanceType     FleetType     Name     RuntimeConfiguration with at least one ServerProcesses configuration   If successful, this operation creates a new fleet resource and places it in NEW status while Amazon GameLift initiates the fleet creation workflow. To debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create a development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished.  When the fleet status is ACTIVE, you can adjust capacity settings and turn autoscaling on/off for each location.  Anywhere fleet  An Anywhere fleet represents compute resources that are not owned or managed by Amazon GameLift. You might create an Anywhere fleet with your local machine for testing, or use one to host game servers with on-premises hardware or other game hosting solutions.  To create an Anywhere fleet, provide these required parameters:    ComputeType set to ANYWHERE     Locations specifying a custom location    Name    If successful, this operation creates a new fleet resource and places it in ACTIVE status. You can register computes with a fleet in ACTIVE status.   Learn more   Setting up fleets   Debug fleet creation issues   Multi-location fleets",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a fleet. Fleet names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-id",
          description:
            "The unique identifier for a custom game server build to be deployed to a fleet with compute type EC2. You can use either the build ID or ARN. The build must be uploaded to Amazon GameLift and in READY status. This fleet property can't be changed after the fleet is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--script-id",
          description:
            "The unique identifier for a Realtime configuration script to be deployed to a fleet with compute type EC2. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift prior to creating the fleet. This fleet property can't be changed after the fleet is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-launch-path",
          description:
            "This parameter is no longer used. Specify a server launch path using the RuntimeConfiguration parameter. Requests that use this parameter instead continue to be valid",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-launch-parameters",
          description:
            "This parameter is no longer used. Specify server launch parameters using the RuntimeConfiguration parameter. Requests that use this parameter instead continue to be valid",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-paths",
          description:
            "This parameter is no longer used. To specify where Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server API ProcessReady() and specify one or more directory paths in logParameters. For more information, see Initialize the server process in the Amazon GameLift Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--ec2-instance-type",
          description:
            "The Amazon GameLift-supported Amazon EC2 instance type to use with managed EC2 fleets. Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See Amazon Elastic Compute Cloud Instance Types for detailed descriptions of Amazon EC2 instance types",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-inbound-permissions",
          description:
            "The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. Set this parameter for managed EC2 fleets. You can leave this parameter empty when creating the fleet, but you must call UpdateFleetPortSettings to set it before players can connect to game sessions. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges",
          args: {
            name: "list",
          },
        },
        {
          name: "--new-game-session-protection-policy",
          description:
            "The status of termination protection for active game sessions on the fleet. By default, this property is set to NoProtection. You can also set game session protection for an individual game session by calling UpdateGameSession.    NoProtection - Game sessions can be terminated during active gameplay as a result of a scale-down event.     FullProtection - Game sessions in ACTIVE status cannot be terminated during a scale-down event",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime-configuration",
          description:
            "Instructions for how to launch and run server processes on the fleet. Set runtime configuration for managed EC2 fleets. For an Anywhere fleets, set this parameter only if the fleet is running the Amazon GameLift Agent. The runtime configuration defines one or more server process configurations. Each server process identifies a game executable or Realtime script file and the number of processes to run concurrently.   This parameter replaces the parameters ServerLaunchPath and ServerLaunchParameters, which are still supported for backward compatibility",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-creation-limit-policy",
          description:
            "A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-groups",
          description:
            "The name of an Amazon Web Services CloudWatch metric group to add this fleet to. A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time",
          args: {
            name: "list",
          },
        },
        {
          name: "--peer-vpc-aws-account-id",
          description:
            "Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the Amazon Web Services account that owns the VPC. You can find your account ID in the Amazon Web Services Management Console under account settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--peer-vpc-id",
          description:
            "A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-type",
          description:
            "Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to ON_DEMAND. Learn more about when to use  On-Demand versus Spot Instances. This fleet property can't be changed after the fleet is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-role-arn",
          description:
            "A unique identifier for an IAM role that manages access to your Amazon Web Services services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN by using the IAM dashboard in the Amazon Web Services Management Console. Learn more about using on-box credentials for your game servers at  Access external resources from a game server. This fleet property can't be changed after the fleet is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-configuration",
          description:
            "Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet. Amazon GameLift uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift. By default, the CertificateConfiguration is DISABLED. You can't change this property after you create the fleet.  Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition.  ACM isn't available in all Amazon Web Services regions. A fleet creation request with certificate generation enabled in an unsupported Region, fails with a 4xx error. For more information about the supported Regions, see Supported Regions in the Certificate Manager User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--locations",
          description:
            "A set of remote locations to deploy additional instances to and manage as a multi-location fleet. Use this parameter when creating a fleet in Amazon Web Services Regions that support multiple locations. You can add any Amazon Web Services Region or Local Zone that's supported by Amazon GameLift. Provide a list of one or more Amazon Web Services Region codes, such as us-west-2, or Local Zone names. When using this parameter, Amazon GameLift requires you to include your home location in the request. For a list of supported Regions and Local Zones, see  Amazon GameLift service locations for managed hosting",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new fleet resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
          args: {
            name: "list",
          },
        },
        {
          name: "--compute-type",
          description:
            "The type of compute resource used to host your game servers.     EC2 \u2013 The game server build is deployed to Amazon EC2 instances for cloud hosting. This is the default setting.    ANYWHERE \u2013 Your game server and supporting software is deployed to compute resources that are provided and managed by you. With this compute type, you can also set the AnywhereConfiguration parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--anywhere-configuration",
          description: "Amazon GameLift Anywhere configuration options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-role-credentials-provider",
          description:
            "Prompts Amazon GameLift to generate a shared credentials file for the IAM role that's defined in InstanceRoleArn. The shared credentials file is stored on each fleet instance and refreshed as needed. Use shared credentials for applications that are deployed along with the game server executable, if the game server is integrated with server SDK version 5.x. For more information about using shared credentials, see  Communicate with other Amazon Web Services resources from your fleets",
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
      name: "create-fleet-locations",
      description:
        "Adds remote locations to a managed EC2 fleet or managed container fleet and begins populating the new locations with instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings.  You can't add remote locations to a fleet that resides in an Amazon Web Services Region that doesn't support multiple locations. Fleets created prior to March 2021 can't support multiple locations.  To add fleet locations, specify the fleet to be updated and provide a list of one or more locations.  If successful, this operation returns the list of added locations with their status set to NEW. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using DescribeFleetEvents.  Learn more   Setting up fleets   Update fleet locations    Amazon GameLift service locations for managed hosting",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to add locations to. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "A list of locations to deploy additional instances to and manage as part of the fleet. You can add any Amazon GameLift-supported Amazon Web Services Region as a remote location, in the form of an Amazon Web Services Region code such as us-west-2",
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
      name: "create-game-server-group",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch. Before creating a new game server group, you must have the following:    An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see  Launching an Instance from a Launch Template in the Amazon Elastic Compute Cloud User Guide.    An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see Create IAM roles for cross-service interaction in the Amazon GameLift FleetIQ Developer Guide.   To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric. Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "An identifier for the new game server group. This value is used to generate unique ARN identifiers for the Amazon EC2 Auto Scaling group and the Amazon GameLift FleetIQ game server group. The name must be unique per Region per Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-size",
          description:
            "The minimum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift FleetIQ and Amazon EC2 do not scale down the group below this minimum. In production, this value should be set to at least 1. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-size",
          description:
            "The maximum number of instances allowed in the Amazon EC2 Auto Scaling group. During automatic scaling events, Amazon GameLift FleetIQ and EC2 do not scale up the group above this maximum. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--launch-template",
          description:
            'The Amazon EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. You can specify the template using either the template name or ID. For help with creating a launch template, see Creating a Launch Template for an Auto Scaling Group in the Amazon Elastic Compute Cloud Auto Scaling User Guide. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs.  If you specify network interfaces in your launch template, you must explicitly set the property AssociatePublicIpAddress to "true". If no network interface is specified in the launch template, Amazon GameLift FleetIQ uses your account\'s default VPC',
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-definitions",
          description:
            'The Amazon EC2 instance types and sizes to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift FleetIQ. For more information on instance types, see EC2 Instance Types in the Amazon Elastic Compute Cloud User Guide. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see  Instance Weighting for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide',
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-policy",
          description:
            'Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. The scaling policy uses the metric "PercentUtilizedGameServers" to maintain a buffer of idle game servers that can immediately accommodate new games and players. After the Auto Scaling group is created, update this value directly in the Auto Scaling group using the Amazon Web Services console or APIs',
          args: {
            name: "structure",
          },
        },
        {
          name: "--balancing-strategy",
          description:
            "Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:    SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.    SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.    ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-protection-policy",
          description:
            "A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to NO_PROTECTION by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-subnets",
          description:
            "A list of virtual private cloud (VPC) subnets to use with instances in the game server group. By default, all Amazon GameLift FleetIQ-supported Availability Zones are used. You can use this parameter to specify VPCs that you've set up. This property cannot be updated after the game server group is created, and the corresponding Auto Scaling group will always use the property value that is set with this request, even if the Auto Scaling group is updated directly",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new game server group resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management, and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-game-session",
      description:
        "Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with StartGameSessionPlacement , which uses the FleetIQ algorithm and queues to optimize the placement process. When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The target fleet must be in ACTIVE status.  You can use this operation in the following ways:    To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration.    To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration.    To create a game session on an instance in an Anywhere fleet, specify the fleet's custom location.   If successful, Amazon GameLift initiates a workflow to start a new game session and returns a GameSession object containing the game session configuration and status. When the game session status is ACTIVE, it is updated with connection information and you can create player sessions for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using UpdateGameSession to change the game session's player session creation policy. Amazon GameLift retains logs for active for 14 days. To access the logs, call GetGameSessionLogUrl to download the log files.  Available in Amazon GameLift Local.   Learn more   Start a game session   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to create a game session in. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-id",
          description:
            "A unique identifier for the alias associated with the fleet to create a game session in. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-player-session-count",
          description:
            "The maximum number of players that can be connected simultaneously to the game session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a game session. Session names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-properties",
          description:
            'A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. For an example, see Create a game session with custom properties',
          args: {
            name: "list",
          },
        },
        {
          name: "--creator-id",
          description:
            "A unique identifier for a player or entity creating the game session.  If you add a resource creation limit policy to a fleet, the CreateGameSession operation requires a CreatorId. Amazon GameLift limits the number of game session creation requests with the same CreatorId in a specified time period. If you your fleet doesn't have a resource creation limit policy and you provide a CreatorId in your CreateGameSession requests, Amazon GameLift limits requests to one request per CreatorId per second. To not limit CreateGameSession requests with the same CreatorId, don't provide a CreatorId in your CreateGameSession request",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-id",
          description:
            "This parameter is deprecated. Use IdempotencyToken instead.  Custom string that uniquely identifies a request for a new game session. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "Custom string that uniquely identifies the new game session request. This is useful for ensuring that game session requests with the same idempotency token are processed only once. Subsequent requests with the same string return the original GameSession object, with an updated status. Maximum token length is 48 characters. If provided, this string is included in the new game session's ID. A game session ARN has the following format: arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token>. Idempotency tokens remain in use for 30 days after a game session has ended; game session objects are retained for this time period and then deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-data",
          description:
            "A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "A fleet's remote location to place the new game session in. If this parameter is not set, the new game session is placed in the fleet's home Region. Specify a remote location with an Amazon Web Services Region code such as us-west-2. When using an Anywhere fleet, this parameter is required and must be set to the Anywhere fleet's custom location",
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
      name: "create-game-session-queue",
      description:
        "Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session.  A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed. The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities. To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity. If successful, a new GameSessionQueue object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with StartGameSessionPlacement or StartMatchmaking, reference a queue's name or ARN.   Learn more    Design a game session queue    Create a game session queue   Related actions   CreateGameSessionQueue | DescribeGameSessionQueues | UpdateGameSessionQueue | DeleteGameSessionQueue | All APIs by task",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with game session queue. Queue names must be unique within each Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-in-seconds",
          description:
            "The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status",
          args: {
            name: "integer",
          },
        },
        {
          name: "--player-latency-policies",
          description:
            "A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value",
          args: {
            name: "list",
          },
        },
        {
          name: "--destinations",
          description:
            "A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-configuration",
          description:
            "A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as us-west-2. If this parameter is not set, game sessions can be placed in any queue location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--priority-configuration",
          description:
            "Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-event-data",
          description:
            "Information to be added to all events that are related to this game session queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-target",
          description:
            "An SNS topic ARN that is set up to receive game session placement notifications. See  Setting up notifications for game session placement",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new game session queue resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-location",
      description: "Creates a custom location for use in an Anywhere fleet",
      options: [
        {
          name: "--location-name",
          description: "A descriptive name for the custom location",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management, and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Rareference",
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
      name: "create-matchmaking-configuration",
      description:
        "Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration.  To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match. In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.  Learn more    Design a FlexMatch matchmaker    Set up FlexMatch event notification",
      options: [
        {
          name: "--name",
          description:
            "A unique identifier for the matchmaking configuration. This name is used to identify the configuration associated with a matchmaking request or ticket",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A human-readable description of the matchmaking configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-queue-arns",
          description:
            "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<region>::gamesessionqueue/<queue name>. Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. If FlexMatchMode is set to STANDALONE, do not set this parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--request-timeout-seconds",
          description:
            "The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--acceptance-timeout-seconds",
          description:
            "The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required",
          args: {
            name: "integer",
          },
        },
        {
          name: "--acceptance-required",
          description:
            "A flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status REQUIRES_ACCEPTANCE to indicate when a completed potential match is waiting for player acceptance",
        },
        {
          name: "--no-acceptance-required",
          description:
            "A flag that determines whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status REQUIRES_ACCEPTANCE to indicate when a completed potential match is waiting for player acceptance",
        },
        {
          name: "--rule-set-name",
          description:
            "A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-target",
          description:
            "An SNS topic ARN that is set up to receive matchmaking notifications. See  Setting up notifications for matchmaking for more information",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-player-count",
          description:
            "The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if FlexMatchMode is set to STANDALONE",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-event-data",
          description:
            "Information to be added to all events related to this matchmaking configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-properties",
          description:
            'A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. This information is added to the new GameSession object that is created for a successful match. This parameter is not used if FlexMatchMode is set to STANDALONE',
          args: {
            name: "list",
          },
        },
        {
          name: "--game-session-data",
          description:
            "A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session. This information is added to the new GameSession object that is created for a successful match. This parameter is not used if FlexMatchMode is set to STANDALONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--backfill-mode",
          description:
            "The method used to backfill game sessions that are created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have Amazon GameLift create a backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in  Backfill Existing Games with FlexMatch. Automatic backfill is not available when FlexMatchMode is set to STANDALONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--flex-match-mode",
          description:
            "Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.     STANDALONE - FlexMatch forms matches and returns match information, including players and team assignments, in a  MatchmakingSucceeded event.    WITH_QUEUE - FlexMatch forms matches and uses the specified Amazon GameLift queue to start a game session for the match",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-matchmaking-rule-set",
      description:
        "Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type. To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with. Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using ValidateMatchmakingRuleSet before creating a new rule set.  Learn more     Build a rule set     Design a matchmaker     Matchmaking with FlexMatch",
      options: [
        {
          name: "--name",
          description:
            "A unique identifier for the matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name value. Note that the rule set name is different from the optional name field in the rule set body",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-set-body",
          description:
            "A collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new matchmaking rule set resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference",
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
      name: "create-player-session",
      description:
        "Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in ACTIVE status and has a player creation policy of ACCEPT_ALL. You can add a group of players to a game session with CreatePlayerSessions .  To create a player session, specify a game session ID, player ID, and optionally a set of player data.  If successful, a slot is reserved in the game session for the player and a new PlayerSessions object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.  The maximum number of players per game session is 200. It is not adjustable.   Related actions   All APIs by task",
      options: [
        {
          name: "--game-session-id",
          description:
            "A unique identifier for the game session to add a player to",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-id",
          description:
            "A unique identifier for a player. Player IDs are developer-defined",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-data",
          description:
            "Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game",
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
      name: "create-player-sessions",
      description:
        "Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in ACTIVE status and has a player creation policy of ACCEPT_ALL. To add a single player to a game session, use CreatePlayerSession  To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID.  If successful, a slot is reserved in the game session for each player, and new PlayerSession objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. The maximum number of players per game session is 200. It is not adjustable.   Related actions   All APIs by task",
      options: [
        {
          name: "--game-session-id",
          description:
            "A unique identifier for the game session to add players to",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-ids",
          description: "List of unique identifiers for the players to be added",
          args: {
            name: "list",
          },
        },
        {
          name: "--player-data-map",
          description:
            "Map of string pairs, each specifying a player ID and a set of developer-defined information related to the player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. Any player data strings for player IDs that are not included in the PlayerIds parameter are ignored",
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
      name: "create-script",
      description:
        "Creates a script resource for your Realtime Servers script. Realtime scripts are JavaScript files that provide configuration settings and optional custom game logic for your game. Script logic is executed during an active game session. To deploy Realtime Servers for hosting, create an Amazon GameLift managed fleet with the script. To create a script resource, specify a script name and provide the script file(s). The script files and all dependencies must be combined into a single .zip file. You can upload the .zip file from either of these locations:    A locally available directory. Use the ZipFile parameter for this option.   An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the StorageLocation parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket.    If the call is successful, Amazon GameLift creates a new script resource with a unique script ID. The script is uploaded to an Amazon S3 bucket that is owned by Amazon GameLift.  Learn more   Amazon GameLift Realtime Servers   Set Up a Role for Amazon GameLift Access   Related actions   All APIs by task",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a script. Script names do not need to be unique. You can use UpdateScript to change this value later",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-location",
          description:
            'The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version',
          args: {
            name: "structure",
          },
        },
        {
          name: "--zip-file",
          description:
            'A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB. When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: --zip-file fileb://myRealtimeScript.zip',
          args: {
            name: "blob",
          },
        },
        {
          name: "--tags",
          description:
            "A list of labels to assign to the new script resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see  Tagging Amazon Web Services Resources in the Amazon Web Services General Reference. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the Amazon Web Services General Reference for actual tagging limits",
          args: {
            name: "list",
          },
        },
        {
          name: "--script-version",
          description:
            "Version information that is associated with a build or script. Version strings do not need to be unique. You can use UpdateScript to change this value later",
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
      name: "create-vpc-peering-authorization",
      description:
        "Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use CreateVpcPeeringConnection to establish the peering connection. For more information, see VPC Peering with Amazon GameLift Fleets. You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC.  To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift.  The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid.   Related actions   All APIs by task",
      options: [
        {
          name: "--game-lift-aws-account-id",
          description:
            "A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--peer-vpc-id",
          description:
            "A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets",
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
      name: "create-vpc-peering-connection",
      description:
        "Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see VPC Peering with Amazon GameLift Fleets. Before calling this operation to establish the peering connection, you first need to use CreateVpcPeeringAuthorization and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc.  To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using DescribeVpcPeeringConnections , or by monitoring fleet events for success or failure using DescribeFleetEvents .   Related actions   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift which GameLift VPC to peer with",
          args: {
            name: "string",
          },
        },
        {
          name: "--peer-vpc-aws-account-id",
          description:
            "A unique identifier for the Amazon Web Services account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your Account ID in the Amazon Web Services Management Console under account settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--peer-vpc-id",
          description:
            "A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets",
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
      name: "delete-alias",
      description:
        "Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.  Related actions   All APIs by task",
      options: [
        {
          name: "--alias-id",
          description:
            "A unique identifier of the alias that you want to delete. You can use either the alias ID or ARN value",
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
      name: "delete-build",
      description:
        "Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build. To delete a build, specify the build ID.   Learn more    Upload a Custom Server Build   All APIs by task",
      options: [
        {
          name: "--build-id",
          description:
            "A unique identifier for the build to delete. You can use either the build ID or ARN value",
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
      name: "delete-container-fleet",
      description:
        "Deletes all resources and information related to a container fleet and shuts down currently running fleet instances, including those in remote locations. The container fleet must be in ACTIVE status to be deleted. To delete a fleet, specify the fleet ID to be terminated. During the deletion process, the fleet status is changed to DELETING.   Learn more   Setting up Amazon GameLift Fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the container fleet to delete. You can use either the fleet ID or ARN value",
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
      name: "delete-container-group-definition",
      description:
        "Deletes a container group definition. You can delete a container group definition if there are no fleets using the definition.   Request options:    Delete an entire container group definition, including all versions. Specify the container group definition name, or use an ARN value without the version number.   Delete a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number.   Keep the newest versions and delete all older versions. Specify the container group definition name and the number of versions to retain. For example, set VersionCountToRetain to 5 to delete all but the five most recent versions.    Learn more     Manage a container group definition",
      options: [
        {
          name: "--name",
          description:
            "The unique identifier for the container group definition to delete. You can use either the Name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The specific version to delete",
          args: {
            name: "integer",
          },
        },
        {
          name: "--version-count-to-retain",
          description:
            "The number of most recent versions to keep while deleting all older versions",
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
      name: "delete-fleet",
      description:
        "Deletes all resources and information related to a fleet and shuts down any currently running fleet instances, including those in remote locations.  If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling CreateVpcPeeringAuthorization. You don't need to explicitly delete the VPC peering connection.  To delete a fleet, specify the fleet ID to be terminated. During the deletion process, the fleet status is changed to DELETING. When completed, the status switches to TERMINATED and the fleet event FLEET_DELETED is emitted.  Learn more   Setting up Amazon GameLift Fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value",
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
      name: "delete-fleet-locations",
      description:
        "Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down.  To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted.  If successful, GameLift sets the location status to DELETING, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to TERMINATED.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to delete locations for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "The list of fleet locations to delete. Specify locations in the form of an Amazon Web Services Region code, such as us-west-2",
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
      name: "delete-game-server-group",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:   The game server group   The corresponding Auto Scaling group   All game servers that are currently running in the group   To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in ACTIVE or ERROR status. If the delete request is successful, a series of operations are kicked off. The game server group status is changed to DELETE_SCHEDULED, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in ERROR status. Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group. Use either the name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-option",
          description:
            "The type of delete to perform. Options include the following:    SAFE_DELETE \u2013 (default) Terminates the game server group and Amazon EC2 Auto Scaling group only when it has no game servers that are in UTILIZED status.    FORCE_DELETE \u2013 Terminates the game server group, including all active game servers regardless of their utilization status, and the Amazon EC2 Auto Scaling group.     RETAIN \u2013 Does a safe delete of the game server group but retains the Amazon EC2 Auto Scaling group as is",
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
      name: "delete-game-session-queue",
      description:
        "Deletes a game session queue. Once a queue is successfully deleted, unfulfilled StartGameSessionPlacement requests that reference the queue will fail. To delete a queue, specify the queue name",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value",
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
      name: "delete-location",
      description:
        "Deletes a custom location. Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information, see DeregisterCompute",
      options: [
        {
          name: "--location-name",
          description: "The location name of the custom location to be deleted",
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
      name: "delete-matchmaking-configuration",
      description:
        "Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets",
      options: [
        {
          name: "--name",
          description:
            "A unique identifier for the matchmaking configuration. You can use either the configuration name or ARN value",
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
      name: "delete-matchmaking-rule-set",
      description:
        "Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration.   Learn more     Build a rule set",
      options: [
        {
          name: "--name",
          description:
            'A unique identifier for the matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value',
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
      name: "delete-scaling-policy",
      description:
        "Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with. To temporarily suspend scaling policies, use StopFleetActions. This operation suspends all policies for the fleet",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to be deleted. You can use either the fleet ID or ARN value",
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
      name: "delete-script",
      description:
        "Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted).  To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.  Learn more   Amazon GameLift Realtime Servers   Related actions   All APIs by task",
      options: [
        {
          name: "--script-id",
          description:
            "A unique identifier for the Realtime script to delete. You can use either the script ID or ARN value",
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
      name: "delete-vpc-peering-authorization",
      description:
        "Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use DeleteVpcPeeringConnection.  Related actions   All APIs by task",
      options: [
        {
          name: "--game-lift-aws-account-id",
          description:
            "A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--peer-vpc-id",
          description:
            "A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Fleets",
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
      name: "delete-vpc-peering-connection",
      description:
        "Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete..  Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed.   Related actions   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet. This fleet specified must match the fleet referenced in the VPC peering connection record. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-peering-connection-id",
          description: "A unique identifier for a VPC peering connection",
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
      name: "deregister-compute",
      description:
        "Removes a compute resource from an Amazon GameLift Anywhere fleet. Deregistered computes can no longer host game sessions through Amazon GameLift. For an Anywhere fleet that's running the Amazon GameLift Agent, the Agent handles all compute registry tasks for you. For an Anywhere fleet that doesn't use the Agent, call this operation to deregister fleet computes.  To deregister a compute, call this operation from the compute that's being deregistered and specify the compute name and the fleet ID",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet the compute resource is currently registered to",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-name",
          description:
            "The unique identifier of the compute resource to deregister. For an Anywhere fleet compute, use the registered compute name",
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
      name: "deregister-game-server",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers.  To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group where the game server is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-id",
          description:
            "A custom string that uniquely identifies the game server to deregister",
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
      name: "describe-alias",
      description:
        "Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use ResolveAlias.  To get alias properties, specify the alias ID. If successful, the requested alias record is returned.  Related actions   All APIs by task",
      options: [
        {
          name: "--alias-id",
          description:
            "The unique identifier for the fleet alias that you want to retrieve. You can use either the alias ID or ARN value",
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
      name: "describe-build",
      description:
        "Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.  Learn more    Upload a Custom Server Build   All APIs by task",
      options: [
        {
          name: "--build-id",
          description:
            "A unique identifier for the build to retrieve properties for. You can use either the build ID or ARN value",
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
      name: "describe-compute",
      description:
        "Retrieves properties for a compute resource in an Amazon GameLift fleet. To get a list of all computes in a fleet, call ListCompute.  To request information on a specific compute, provide the fleet ID and compute name. If successful, this operation returns details for the requested compute resource. Depending on the fleet's compute type, the result includes the following information:    For managed EC2 fleets, this operation returns information about the EC2 instance.   For Anywhere fleets, this operation returns information about the registered compute",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet that the compute belongs to. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-name",
          description:
            "The unique identifier of the compute resource to retrieve properties for. For an Anywhere fleet compute, use the registered compute name. For an EC2 fleet instance, use the instance ID",
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
      name: "describe-container-fleet",
      description:
        "Retrieves the properties for a container fleet. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages.   Request options    Get container fleet properties for a single fleet. Provide either the fleet ID or ARN value.     Results  If successful, a ContainerFleet object is returned. This object includes the fleet properties, including information about the most recent deployment.  Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the container fleet to retrieve. You can use either the fleet ID or ARN value",
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
      name: "describe-container-group-definition",
      description:
        "Retrieves the properties of a container group definition, including all container definitions in the group.   Request options:    Retrieve the latest version of a container group definition. Specify the container group definition name only, or use an ARN value without a version number.   Retrieve a particular version. Specify the container group definition name and a version number, or use an ARN value that includes the version number.    Results:  If successful, this operation returns the complete properties of a container group definition version.  Learn more     Manage a container group definition",
      options: [
        {
          name: "--name",
          description:
            "The unique identifier for the container group definition to retrieve properties for. You can use either the Name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The specific version to retrieve",
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
      name: "describe-ec2-instance-limits",
      description:
        "Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at Amazon EC2 Instance Types. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the Service limits page in the Amazon GameLift console. Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results:    Request specifies the Region ap-northeast-1 with no location. The result is limits and usage data on all instance types that are deployed in us-east-2, by all of the fleets that reside in ap-northeast-1.    Request specifies the Region us-east-1 with location ca-central-1. The result is limits and usage data on all instance types that are deployed in ca-central-1, by all of the fleets that reside in us-east-2. These limits do not affect fleets in any other Regions that deploy instances to ca-central-1.   Request specifies the Region eu-west-1 with location ca-central-1. The result is limits and usage data on all instance types that are deployed in ca-central-1, by all of the fleets that reside in eu-west-1.   This operation can be used in the following ways:   To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.   To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.   If successful, an EC2InstanceLimits object is returned with limits and usage data for each requested instance type.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--ec2-instance-type",
          description:
            "Name of an Amazon EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Do not specify a value for this parameter to retrieve limits for all instance types",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The name of a remote location to request instance limits for, in the form of an Amazon Web Services Region code such as us-west-2",
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
      name: "describe-fleet-attributes",
      description:
        "Retrieves core fleet-wide properties for fleets in an Amazon Web Services Region. Properties include the computing hardware and deployment configuration for instances in the fleet. You can use this operation in the following ways:    To get attributes for specific fleets, provide a list of fleet IDs or fleet ARNs.   To get attributes for all fleets, do not provide a fleet identifier.   When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a FleetAttributes object is returned for each fleet requested, unless the fleet identifier is not found.   Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.   Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-ids",
          description:
            "A list of unique fleet identifiers to retrieve attributes for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs",
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
      name: "describe-fleet-capacity",
      description:
        "Retrieves the resource capacity settings for one or more fleets. For a container fleet, this operation also returns counts for game server container groups. With multi-location fleets, this operation retrieves data for the fleet's home Region only. To retrieve capacity for remote locations, see DescribeFleetLocationCapacity. This operation can be used in the following ways:    To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs.    To get capacity data for all fleets, do not provide a fleet identifier.    When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a FleetCapacity object is returned for each requested fleet ID. Each FleetCapacity object includes a Location property, which is set to the fleet's home Region. Capacity values are returned only for fleets that currently exist.  Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.   Learn more   Setting up Amazon GameLift fleets   GameLift metrics for fleets",
      options: [
        {
          name: "--fleet-ids",
          description:
            "A unique identifier for the fleet to retrieve capacity information for. You can use either the fleet ID or ARN value. Leave this parameter empty to retrieve capacity information for all fleets",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs",
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
      name: "describe-fleet-deployment",
      description:
        "Retrieves information about a managed container fleet deployment.   Request options    Get information about the latest deployment for a specific fleet. Provide the fleet ID or ARN.    Get information about a specific deployment. Provide the fleet ID or ARN and the deployment ID.    Results  If successful, a FleetDeployment object is returned",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the container fleet. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-id",
          description:
            "A unique identifier for the deployment to return information for",
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
      name: "describe-fleet-events",
      description:
        "Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations.  You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a collection of event log entries matching the request are returned.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to get event logs for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            'The earliest date to retrieve event logs for. If no start time is specified, this call returns entries starting from when the fleet was created to the specified end time. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057")',
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            'The most recent date to retrieve event logs for. If no end time is specified, this call returns entries from the specified start time up to the present. Format is a number expressed in Unix time as milliseconds (ex: "1469498468.057")',
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-fleet-location-attributes",
      description:
        "Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity.  This operation can be used in the following ways:    To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested.    To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order.    When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a LocationAttributes object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call DescribeFleetAttributes.  Learn more   Setting up Amazon GameLift fleets    Amazon GameLift service locations for managed hosting",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to retrieve remote locations for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--locations",
          description:
            "A list of fleet locations to retrieve information for. Specify locations in the form of an Amazon Web Services Region code, such as us-west-2",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This limit is not currently enforced",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-fleet-location-capacity",
      description:
        "Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. For a managed container fleet, this operation also returns counts for game server container groups. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling DescribeFleetCapacity). To retrieve capacity data, identify a fleet and location.  If successful, a FleetCapacity object is returned for the requested fleet location.   Learn more   Setting up Amazon GameLift fleets    Amazon GameLift service locations for managed hosting  GameLift metrics for fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to request location capacity for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The fleet location to retrieve capacity information for. Specify a location in the form of an Amazon Web Services Region code, such as us-west-2",
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
      name: "describe-fleet-location-utilization",
      description:
        "Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling DescribeFleetUtilization). To retrieve utilization data, identify a fleet and location.  If successful, a FleetUtilization object is returned for the requested fleet location.   Learn more   Setting up Amazon GameLift fleets    Amazon GameLift service locations for managed hosting  GameLift metrics for fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to request location utilization for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The fleet location to retrieve utilization information for. Specify a location in the form of an Amazon Web Services Region code, such as us-west-2",
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
      name: "describe-fleet-port-settings",
      description:
        "Retrieves a fleet's inbound connection permissions. Inbound permissions specify IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game server processes that are running in the fleet must use a port that falls within this range. To connect to game server processes on a managed container fleet, the port settings should include one or more of the container fleet's connection ports.  Use this operation in the following ways:    To retrieve the port settings for a fleet, identify the fleet's unique identifier.    To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations.    If successful, a set of IpPermission objects is returned for the requested fleet ID. When specifying a location, this operation returns a pending status. If the requested fleet has been deleted, the result set is empty.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to retrieve port settings for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "A remote location to check for status of port setting updates. Use the Amazon Web Services Region code format, such as us-west-2",
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
      name: "describe-fleet-utilization",
      description:
        "Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See DescribeFleetLocationUtilization to get utilization statistics for a fleet's remote locations. This operation can be used in the following ways:    To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs.    To get utilization data for all fleets, do not provide a fleet identifier.    When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a FleetUtilization object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a Location property, which is set to the fleet's home Region.   Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.   Learn more   Setting up Amazon GameLift Fleets   GameLift Metrics for Fleets",
      options: [
        {
          name: "--fleet-ids",
          description:
            "A unique identifier for the fleet to retrieve utilization data for. You can use either the fleet ID or ARN value. To retrieve attributes for all current fleets, do not include this parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet IDs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet IDs",
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
      name: "describe-game-server",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on.  To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned.   Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group where the game server is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-id",
          description:
            "A custom string that uniquely identifies the game server information to be retrieved",
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
      name: "describe-game-server-group",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly. To get attributes for a game server group, provide a group name or ARN value. If successful, a GameServerGroup object is returned.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group. Use either the name or ARN value",
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
      name: "describe-game-server-instances",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers. To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of GameServerInstance objects is returned.  This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group. Use either the name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-ids",
          description:
            "The Amazon EC2 instance IDs that you want to retrieve status on. Amazon EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0. To retrieve all instances in the game server group, leave this parameter empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-game-session-details",
      description:
        "Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status. This operation can be used in the following ways:    To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.   To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.   To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.   Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a GameSessionDetail object is returned for each game session that matches the request.  Learn more   Find a game session   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to retrieve all game sessions active on the fleet. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-id",
          description: "A unique identifier for the game session to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-id",
          description:
            "A unique identifier for the alias associated with the fleet to retrieve all game sessions for. You can use either the alias ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "A fleet location to get game session details for. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as us-west-2",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-filter",
          description:
            "Game session status to filter results on. Possible game session statuses include ACTIVE, TERMINATED, ACTIVATING and TERMINATING (the last two are transitory)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-game-session-placement",
      description:
        "Retrieves information, including current status, about a game session placement request.  To get game session placement details, specify the placement ID. This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with DescribeGameSessionPlacement should only be used for games in development with low game session usage",
      options: [
        {
          name: "--placement-id",
          description:
            "A unique identifier for a game session placement to retrieve",
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
      name: "describe-game-session-queues",
      description:
        "Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.  Learn more    View Your Queues",
      options: [
        {
          name: "--names",
          description:
            "A list of queue names to retrieve information for. You can use either the queue ID or ARN value. To request settings for all queues, leave this parameter empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. You can request up to 50 results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-game-sessions",
      description:
        "Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status. This operation can be used in the following ways:    To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.   To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.   To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.   Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a GameSession object is returned for each game session that matches the request. This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with DescribeGameSessions should only be used for games in development with low game session usage.   Available in Amazon GameLift Local.   Learn more   Find a game session   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to retrieve game sessions for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-id",
          description: "A unique identifier for the game session to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-id",
          description:
            "A unique identifier for the alias associated with the fleet to retrieve game sessions for. You can use either the alias ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "A fleet location to get game sessions for. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as us-west-2",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-filter",
          description:
            "Game session status to filter results on. You can filter on the following states: ACTIVE, TERMINATED, ACTIVATING, and TERMINATING. The last two are transitory and used for only very brief periods of time",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-instances",
      description:
        "Retrieves information about the EC2 instances in an Amazon GameLift managed fleet, including instance ID, connection data, and status. You can use this operation with a multi-location fleet to get location-specific instance information. As an alternative, use the operations ListCompute and DescribeCompute to retrieve information for compute resources, including EC2 and Anywhere fleets. You can call this operation in the following ways:   To get information on all instances in a fleet's home Region, specify the fleet ID.   To get information on all instances in a fleet's remote location, specify the fleet ID and location name.   To get information on a specific instance in a fleet, specify the fleet ID and instance ID.   Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, this operation returns Instance objects for each requested instance, listed in no particular order. If you call this operation for an Anywhere fleet, you receive an InvalidRequestException.  Learn more   Remotely connect to fleet instances   Debug fleet issues   Related actions   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to retrieve instance information for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "A unique identifier for an instance to retrieve. Specify an instance ID or leave blank to retrieve all instances in the fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The name of a location to retrieve instance information for, in the form of an Amazon Web Services Region code such as us-west-2",
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
      name: "describe-matchmaking",
      description:
        "Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session.  To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists. This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.   Learn more    Add FlexMatch to a game client    Set Up FlexMatch event notification",
      options: [
        {
          name: "--ticket-ids",
          description:
            "A unique identifier for a matchmaking ticket. You can include up to 10 ID values",
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
      name: "describe-matchmaking-configurations",
      description:
        "Retrieves the details of FlexMatch matchmaking configurations.  This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned.   Learn more    Setting up FlexMatch matchmakers",
      options: [
        {
          name: "--names",
          description:
            "A unique identifier for the matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To request all existing configurations, leave this parameter empty",
          args: {
            name: "list",
          },
        },
        {
          name: "--rule-set-name",
          description:
            "A unique identifier for the matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to retrieve all matchmaking configurations that use this rule set",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. This parameter is limited to 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-matchmaking-rule-sets",
      description:
        "Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name.   Learn more     Build a rule set",
      options: [
        {
          name: "--names",
          description:
            'A list of one or more matchmaking rule set names to retrieve details for. (Note: The rule set name is different from the optional "name" field in the rule set body.) You can use either the rule set name or ARN value',
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "describe-player-sessions",
      description:
        "Retrieves properties for one or more player sessions.  This action can be used in the following ways:    To retrieve a specific player session, provide the player session ID only.   To retrieve all player sessions in a game session, provide the game session ID only.   To retrieve all player sessions for a specific player, provide a player ID only.   To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. If you provide a specific PlayerSessionId or PlayerId, Amazon GameLift ignores the filter criteria. Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a PlayerSession object is returned for each session that matches the request.  Related actions   All APIs by task",
      options: [
        {
          name: "--game-session-id",
          description:
            "A unique identifier for the game session to retrieve player sessions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-id",
          description:
            "A unique identifier for a player to retrieve player sessions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-session-id",
          description: "A unique identifier for a player session to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-session-status-filter",
          description:
            "Player session status to filter results on. Note that when a PlayerSessionId or PlayerId is provided in a DescribePlayerSessions request, then the PlayerSessionStatusFilter has no effect on the response. Possible player session statuses include the following:    RESERVED -- The player session request has been received, but the player has not yet connected to the server process and/or been validated.     ACTIVE -- The player has been validated by the server process and is currently connected.    COMPLETED -- The player connection has been dropped.    TIMEDOUT -- A player session request was received, but the player did not connect and/or was not validated within the timeout limit (60 seconds)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored",
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
      name: "describe-runtime-configuration",
      description:
        "Retrieves a fleet's runtime configuration settings. The runtime configuration determines which server processes run, and how they run, and how many run concurrently on computes in managed EC2 and Anywhere fleets. You can update a fleet's runtime configuration at any time using UpdateRuntimeConfiguration. To get the current runtime configuration for a fleet, provide the fleet ID.  If successful, a RuntimeConfiguration object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.  Learn more   Setting up Amazon GameLift fleets   Running multiple processes on a fleet",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to get the runtime configuration for. You can use either the fleet ID or ARN value",
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
      name: "describe-scaling-policies",
      description:
        "Retrieves all scaling policies applied to a fleet. To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of ScalingPolicy objects is returned for the fleet. A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet for which to retrieve scaling policies. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-filter",
          description:
            "Scaling policy status to filter results on. A scaling policy is only in force when in an ACTIVE status.    ACTIVE -- The scaling policy is currently in force.    UPDATEREQUESTED -- A request to update the scaling policy has been received.    UPDATING -- A change is being made to the scaling policy.    DELETEREQUESTED -- A request to delete the scaling policy has been received.    DELETING -- The scaling policy is being deleted.    DELETED -- The scaling policy has been deleted.    ERROR -- An error occurred in creating the policy. It should be removed and recreated",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The fleet location. If you don't specify this value, the response contains the scaling policies of every location in the fleet",
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
      name: "describe-script",
      description:
        "Retrieves properties for a Realtime script.  To request a script record, specify the script ID. If successful, an object containing the script properties is returned.  Learn more   Amazon GameLift Realtime Servers   Related actions   All APIs by task",
      options: [
        {
          name: "--script-id",
          description:
            "A unique identifier for the Realtime script to retrieve properties for. You can use either the script ID or ARN value",
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
      name: "describe-vpc-peering-authorizations",
      description:
        "Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account.   Related actions   All APIs by task",
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
      name: "describe-vpc-peering-connections",
      description:
        "Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID.  To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect.   Related actions   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet. You can use either the fleet ID or ARN value",
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
      name: "get-compute-access",
      description:
        "Requests authorization to remotely connect to a hosting resource in a Amazon GameLift managed fleet. This operation is not used with Amazon GameLift Anywhere fleets.  Request options  To request access to a compute, specify the compute name and the fleet ID.  Results  If successful, this operation returns a set of temporary Amazon Web Services credentials, including a two-part access key and a session token.   With a managed EC2 fleet (where compute type is EC2), use these credentials with Amazon EC2 Systems Manager (SSM) to start a session with the compute. For more details, see  Starting a session (CLI) in the Amazon EC2 Systems Manager User Guide",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet that holds the compute resource that you want to connect to. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-name",
          description:
            "A unique identifier for the compute resource that you want to connect to. For an EC2 fleet compute, use the instance ID. Use ListCompute to retrieve compute identifiers",
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
      name: "get-compute-auth-token",
      description:
        "Requests an authentication token from Amazon GameLift for a compute resource in an Amazon GameLift fleet. Game servers that are running on the compute use this token to communicate with the Amazon GameLift service, such as when calling the Amazon GameLift server SDK action InitSDK(). Authentication tokens are valid for a limited time span, so you need to request a fresh token before the current token expires.  Request options    For managed EC2 fleets (compute type EC2), auth token retrieval and refresh is handled automatically. All game servers that are running on all fleet instances have access to a valid auth token.   For Anywhere fleets (compute type ANYWHERE), if you're using the Amazon GameLift Agent, auth token retrieval and refresh is handled automatically for any compute where the Agent is running. If you're not using the Agent, create a mechanism to retrieve and refresh auth tokens for computes that are running game server processes.    Learn more     Create an Anywhere fleet     Test your integration     Server SDK reference guides (for version 5.x)",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet that the compute is registered to",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-name",
          description:
            "The name of the compute resource you are requesting the authentication token for. For an Anywhere fleet compute, use the registered compute name. For an EC2 fleet instance, use the instance ID",
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
      name: "get-game-session-log-url",
      description:
        "Retrieves the location of stored game session logs for a specified game session on Amazon GameLift managed fleets. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.  See the Amazon Web Services Service Limits page for maximum log file sizes. Log files that exceed this limit are not saved.   All APIs by task",
      options: [
        {
          name: "--game-session-id",
          description:
            "A unique identifier for the game session to get logs for",
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
      name: "get-instance-access",
      description:
        "Requests authorization to remotely connect to an instance in an Amazon GameLift managed fleet. Use this operation to connect to instances with game servers that use Amazon GameLift server SDK 4.x or earlier. To connect to instances with game servers that use server SDK 5.x or later, call GetComputeAccess. To request access to an instance, specify IDs for the instance and the fleet it belongs to. You can retrieve instance IDs for a fleet by calling DescribeInstances with the fleet ID.  If successful, this operation returns an IP address and credentials. The returned credentials match the operating system of the instance, as follows:    For a Windows instance: returns a user name and secret (password) for use with a Windows Remote Desktop client.    For a Linux instance: returns a user name and secret (RSA private key) for use with an SSH client. You must save the secret to a .pem file. If you're using the CLI, see the example  Get credentials for a Linux instance for tips on automatically saving the secret to a .pem file.     Learn more   Remotely connect to fleet instances   Debug fleet issues   Related actions   All APIs by task",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet that contains the instance you want to access. You can request access to instances in EC2 fleets with the following statuses: ACTIVATING, ACTIVE, or ERROR. Use either a fleet ID or an ARN value.   You can access fleets in ERROR status for a short period of time before Amazon GameLift deletes them",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "A unique identifier for the instance you want to access. You can access an instance in any status",
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
      name: "list-aliases",
      description:
        "Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.  Returned aliases are not listed in any particular order.   Related actions   All APIs by task",
      options: [
        {
          name: "--routing-strategy-type",
          description:
            "The routing type to filter results on. Use this parameter to retrieve only aliases with a certain routing type. To retrieve all aliases, leave this parameter empty. Possible routing types include the following:    SIMPLE -- The alias resolves to one specific fleet. Use this type when routing to active fleets.    TERMINAL -- The alias does not resolve to a fleet but instead can be used to display a message to the user. A terminal alias throws a TerminalRoutingStrategyException with the RoutingStrategy message embedded",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with an alias. Alias names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-builds",
      description:
        "Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the Status parameter. Use the pagination parameters to retrieve results in a set of sequential pages.   Build resources are not listed in any particular order.   Learn more    Upload a Custom Server Build   All APIs by task",
      options: [
        {
          name: "--status",
          description:
            "Build status to filter results by. To retrieve all builds, leave this parameter empty. Possible build statuses include the following:    INITIALIZED -- A new build has been defined, but no files have been uploaded. You cannot create fleets for builds that are in this status. When a build is successfully created, the build status is set to this value.     READY -- The game build has been successfully uploaded. You can now create new fleets for this build.    FAILED -- The game build upload failed. You cannot create new fleets for this build",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-compute",
      description:
        "Retrieves information on the compute resources in an Amazon GameLift fleet. Use the pagination parameters to retrieve results in a set of sequential pages.  Request options:    Retrieve a list of all computes in a fleet. Specify a fleet ID.    Retrieve a list of all computes in a specific fleet location. Specify a fleet ID and location.    Results:  If successful, this operation returns information on a set of computes. Depending on the type of fleet, the result includes the following information:    For managed EC2 fleets (compute type EC2), this operation returns information about the EC2 instance. Compute names are EC2 instance IDs.   For Anywhere fleets (compute type ANYWHERE), this operation returns compute names and details as provided when the compute was registered with RegisterCompute. This includes GameLiftServiceSdkEndpoint or GameLiftAgentEndpoint",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to retrieve compute resources for",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The name of a location to retrieve compute resources for. For an Amazon GameLift Anywhere fleet, use a custom location. For a managed fleet, provide a Amazon Web Services Region or Local Zone code (for example: us-west-2 or us-west-2-lax-1)",
          args: {
            name: "string",
          },
        },
        {
          name: "--container-group-definition-name",
          description:
            "For computes in a managed container fleet, the name of the deployed container group definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-status",
          description:
            "The status of computes in a managed container fleet, based on the success of the latest update deployment.    ACTIVE -- The compute is deployed with the correct container definitions. It is ready to process game servers and host game sessions.    IMPAIRED -- An update deployment to the compute failed, and the compute is deployed with incorrect container definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-container-fleets",
      description:
        "Retrieves a collection of container fleet resources in an Amazon Web Services Region. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.  Request options    Get a list of all fleets. Call this operation without specifying a container group definition.    Get a list of fleets filtered by container group definition. Provide the container group definition name or ARN value.   To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID.    Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, this operation returns a collection of container fleets that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve.  Fleet IDs are returned in no particular order",
      options: [
        {
          name: "--container-group-definition-name",
          description:
            "The container group definition to filter the list on. Use this parameter to retrieve only those fleets that use the specified container group definition. You can specify the container group definition's name to get fleets with the latest versions. Alternatively, provide an ARN value to get fleets with a specific version number",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-container-group-definition-versions",
      description:
        "Retrieves all versions of a container group definition. Use the pagination parameters to retrieve results in a set of sequential pages.  Request options:    Get all versions of a specified container group definition. Specify the container group definition name or ARN value. (If the ARN value has a version number, it's ignored.)    Results:  If successful, this operation returns the complete properties of a set of container group definition versions that match the request.  This operation returns the list of container group definitions in descending version order (latest first).    Learn more     Manage a container group definition",
      options: [
        {
          name: "--name",
          description:
            "The unique identifier for the container group definition to retrieve properties for. You can use either the Name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-container-group-definitions",
      description:
        "Retrieves container group definitions for the Amazon Web Services account and Amazon Web Services Region. Use the pagination parameters to retrieve results in a set of sequential pages. This operation returns only the latest version of each definition. To retrieve all versions of a container group definition, use ListContainerGroupDefinitionVersions.  Request options:    Retrieve the most recent versions of all container group definitions.    Retrieve the most recent versions of all container group definitions, filtered by type. Specify the container group type to filter on.     Results:  If successful, this operation returns the complete properties of a set of container group definition versions that match the request.  This operation returns the list of container group definitions in no particular order.    Learn more     Manage a container group definition",
      options: [
        {
          name: "--container-group-type",
          description:
            "The type of container group to retrieve. Container group type determines how Amazon GameLift deploys the container group on each fleet instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-fleet-deployments",
      description:
        "Retrieves a collection of container fleet deployments in an Amazon Web Services Region.   Request options    Get a list of all deployments. Call this operation without specifying a fleet ID.    Get a list of all deployments for a fleet. Specify the container fleet ID or ARN value.   To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID.    Use the pagination parameters to retrieve results as a set of sequential pages.   Results  If successful, this operation returns a list of deployments that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve.  Fleet IDs are returned in no particular order",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the container fleet. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-fleets",
      description:
        "Retrieves a collection of fleet resources in an Amazon Web Services Region. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only. You can use operation in the following ways:    To get a list of all fleets in a Region, don't provide a build or script identifier.   To get a list of all fleets where a specific game build is deployed, provide the build ID.   To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID.    Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, this operation returns a list of fleet IDs that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve.  Fleet IDs are returned in no particular order",
      options: [
        {
          name: "--build-id",
          description:
            "A unique identifier for the build to request fleets for. Use this parameter to return only fleets using a specified build. Use either the build ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--script-id",
          description:
            "A unique identifier for the Realtime script to request fleets for. Use this parameter to return only fleets using a specified script. Use either the script ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-game-server-groups",
      description: "Lists a game server groups",
      options: [
        {
          name: "--limit",
          description: "The game server groups' limit",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token from a previous request to retrieve the next page of results",
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
      name: "list-game-servers",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments.   Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "An identifier for the game server group to retrieve a list of game servers from. Use either the name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Indicates how to sort the returned data based on game server registration timestamp. Use ASCENDING to retrieve oldest game servers first, or use DESCENDING to retrieve newest game servers first. If this parameter is left empty, game servers are returned in no particular order",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-locations",
      description: "Lists all custom and Amazon Web Services locations",
      options: [
        {
          name: "--filters",
          description: "Filters the list for AWS or CUSTOM locations",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "list-scripts",
      description:
        "Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use.   Learn more   Amazon GameLift Realtime Servers   Related actions   All APIs by task",
      options: [
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
        "Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging. To list tags for a resource, specify the unique ARN value for the resource.  Learn more   Tagging Amazon Web Services Resources in the Amazon Web Services General Reference    Amazon Web Services Tagging Strategies   Related actions   All APIs by task",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the Amazon GameLift resource that you want to retrieve tags for. Amazon GameLift includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a List or Describe operation for the resource type",
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
      name: "put-scaling-policy",
      description:
        "Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling.  Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences. Learn more about how to work with auto-scaling in Set Up Fleet Automatic Scaling.  Target-based policy  A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target.  For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer.  To create or update a target-based policy, specify a fleet ID and name, and set the policy type to \"TargetBased\". Specify the metric to track (PercentAvailableGameSessions) and reference a TargetConfiguration object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.  Rule-based policy  A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action.  For example, a policy may make the following statement: \"If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%.\" A policy's rule statement has the following structure: If [MetricName] is [ComparisonOperator] [Threshold] for [EvaluationPeriods] minutes, then [ScalingAdjustmentType] to/by [ScalingAdjustment]. To implement the example, the rule statement would look like this: If [PercentIdleInstances] is [GreaterThanThreshold] [20] for [15] minutes, then [PercentChangeInCapacity] to/by [10]. To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to \"RuleBased\". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet cannot be in any of the following statuses: ERROR or DELETING",
          args: {
            name: "string",
          },
        },
        {
          name: "--scaling-adjustment",
          description:
            "Amount of adjustment to make, based on the scaling adjustment type",
          args: {
            name: "integer",
          },
        },
        {
          name: "--scaling-adjustment-type",
          description:
            'The type of adjustment to make to a fleet\'s instance count:    ChangeInCapacity -- add (or subtract) the scaling adjustment value from the current instance count. Positive values scale up while negative values scale down.    ExactCapacity -- set the instance count to the scaling adjustment value.    PercentChangeInCapacity -- increase or reduce the current instance count by the scaling adjustment, read as a percentage. Positive values scale up while negative values scale down; for example, a value of "-10" scales the fleet down by 10%',
          args: {
            name: "string",
          },
        },
        {
          name: "--threshold",
          description: "Metric value used to trigger a scaling event",
          args: {
            name: "double",
          },
        },
        {
          name: "--comparison-operator",
          description:
            "Comparison operator to use when measuring the metric against the threshold value",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-periods",
          description:
            "Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered",
          args: {
            name: "integer",
          },
        },
        {
          name: "--metric-name",
          description:
            "Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see Monitor Amazon GameLift with Amazon CloudWatch.     ActivatingGameSessions -- Game sessions in the process of being created.    ActiveGameSessions -- Game sessions that are currently running.    ActiveInstances -- Fleet instances that are currently running at least one game session.    AvailableGameSessions -- Additional game sessions that fleet could host simultaneously, given current capacity.    AvailablePlayerSessions -- Empty player slots in currently active game sessions. This includes game sessions that are not currently accepting players. Reserved player slots are not included.    CurrentPlayerSessions -- Player slots in active game sessions that are being used by a player or are reserved for a player.     IdleInstances -- Active instances that are currently hosting zero game sessions.     PercentAvailableGameSessions -- Unused percentage of the total number of game sessions that a fleet could host simultaneously, given current capacity. Use this metric for a target-based scaling policy.    PercentIdleInstances -- Percentage of the total number of active instances that are hosting zero game sessions.    QueueDepth -- Pending game session placement requests, in any queue, where the current fleet is the top-priority destination.    WaitTime -- Current wait time for pending game session placement requests, in any queue, where the current fleet is the top-priority destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-type",
          description:
            "The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-configuration",
          description:
            "An object that contains settings for a target-based scaling policy",
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
      name: "register-compute",
      description:
        "Registers a compute resource in an Amazon GameLift Anywhere fleet.  For an Anywhere fleet that's running the Amazon GameLift Agent, the Agent handles all compute registry tasks for you. For an Anywhere fleet that doesn't use the Agent, call this operation to register fleet computes. To register a compute, give the compute a name (must be unique within the fleet) and specify the compute resource's DNS name or IP address. Provide a fleet ID and a fleet location to associate with the compute being registered. You can optionally include the path to a TLS certificate on the compute resource. If successful, this operation returns compute details, including an Amazon GameLift SDK endpoint or Agent endpoint. Game server processes running on the compute can use this endpoint to communicate with the Amazon GameLift service. Each server process includes the SDK endpoint in its call to the Amazon GameLift server SDK action InitSDK().  To view compute details, call DescribeCompute with the compute name.   Learn more     Create an Anywhere fleet     Test your integration     Server SDK reference guides (for version 5.x)",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to register the compute to. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-name",
          description: "A descriptive label for the compute resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-path",
          description:
            "The path to a TLS certificate on your compute resource. Amazon GameLift doesn't validate the path and certificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--dns-name",
          description:
            "The DNS name of the compute resource. Amazon GameLift requires either a DNS name or IP address",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address",
          description:
            "The IP address of the compute resource. Amazon GameLift requires either a DNS name or IP address. When registering an Anywhere fleet, an IP address is required",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The name of a custom location to associate with the compute resource being registered. This parameter is required when registering a compute for an Anywhere fleet",
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
      name: "register-game-server",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session.  To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data. Once a game server is successfully registered, it is put in status AVAILABLE. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity.   Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group where the game server is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-id",
          description:
            "A custom string that uniquely identifies the game server to register. Game server IDs are developer-defined and must be unique across all game server groups in your Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The unique identifier for the instance where the game server is running. This ID is available in the instance metadata. EC2 instance IDs use a 17-character format, for example: i-1234567890abcdef0",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-info",
          description:
            "Information that is needed to make inbound client connections to the game server. This might include the IP address and port, DNS name, and other information",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-data",
          description:
            "A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers",
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
      name: "request-upload-credentials",
      description:
        "Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see CreateBuild. To request new credentials, specify the build ID as returned with an initial CreateBuild request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.  Learn more    Create a Build with Files in S3   All APIs by task",
      options: [
        {
          name: "--build-id",
          description:
            "A unique identifier for the build to get credentials for. You can use either the build ID or ARN value",
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
      name: "resolve-alias",
      description:
        "Attempts to retrieve a fleet ID that is associated with an alias. Specify a unique alias identifier. If the alias has a SIMPLE routing strategy, Amazon GameLift returns a fleet ID. If the alias has a TERMINAL routing strategy, the result is a TerminalRoutingStrategyException.  Related actions   All APIs by task",
      options: [
        {
          name: "--alias-id",
          description:
            "The unique identifier of the alias that you want to retrieve a fleet ID for. You can use either the alias ID or ARN value",
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
      name: "resume-game-server-group",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the SuspendGameServerGroup operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended. To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a GameServerGroup object is returned showing that the resumed activity is no longer listed in SuspendedActions.   Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group. Use either the name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--resume-actions",
          description: "The activity to resume for this game server group",
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
      name: "search-game-sessions",
      description:
        'Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order.  This operation is not designed to continually track game session status because that practice can cause you to exceed your API limit and generate errors. Instead, configure an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications from a matchmaker or a game session placement queue. When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet\'s locations.  This operation can be used in the following ways:    To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet\'s home Region and all remote locations that fit the search criteria.   To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet\'s home Region or any remote location.   Use the pagination parameters to retrieve results as a set of sequential pages.  If successful, a GameSession object is returned for each game session that matches the request. Search finds game sessions that are in ACTIVE status only. To retrieve information on game sessions in other statuses, use DescribeGameSessions . To set search and sort criteria, create a filter expression using the following game session attributes. For game session search examples, see the Examples section of this topic.    gameSessionId -- A unique identifier for the game session. You can use either a GameSessionId or GameSessionArn value.     gameSessionName -- Name assigned to a game session. Game session names do not need to be unique to a game session.    gameSessionProperties -- A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. The filter expression must specify the GameProperty -- a Key and a string Value to search for the game sessions. For example, to search for the above key-value pair, specify the following search filter: gameSessionProperties.difficulty = "novice". All game property values are searched as strings.  For examples of searching game sessions, see the ones below, and also see Search game sessions by game property.     maximumSessions -- Maximum number of player sessions allowed for a game session.    creationTimeMillis -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.    playerSessionCount -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.    hasAvailablePlayerSessions -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join.     Returned values for playerSessionCount and hasAvailablePlayerSessions change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join.    All APIs by task',
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to search for active game sessions. You can use either the fleet ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-id",
          description:
            "A unique identifier for the alias associated with the fleet to search for active game sessions. You can use either the alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but not both",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "A fleet location to search for game sessions. You can specify a fleet's home Region or a remote location. Use the Amazon Web Services Region code format, such as us-west-2",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-expression",
          description:
            'String containing the search criteria for the session search. If no filter expression is included, the request returns results for all game sessions in the fleet that are in ACTIVE status. A filter expression can contain one or multiple conditions. Each condition consists of the following:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, gameSessionProperties, maximumSessions, creationTimeMillis, playerSessionCount, hasAvailablePlayerSessions.    Comparator -- Valid comparators are: =, <>, <, >, <=, >=.     Value -- Value to be searched for. Values may be numbers, boolean values (true/false) or strings depending on the operand. String values are case sensitive and must be enclosed in single quotes. Special characters must be escaped. Boolean and string values can only be used with the comparators = and <>. For example, the following filter expression searches on gameSessionName: "FilterExpression": "gameSessionName = \'Matt\\\\\'s Awesome Game 1\'".    To chain multiple conditions in a single expression, use the logical keywords AND, OR, and NOT and parentheses as needed. For example: x AND y AND NOT z, NOT (x OR y). Session search evaluates conditions from left to right using the following precedence rules:    =, <>, <, >, <=, >=    Parentheses   NOT   AND   OR   For example, this filter expression retrieves game sessions hosting at least ten players that have an open player slot: "maximumSessions>=10 AND hasAvailablePlayerSessions=true"',
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-expression",
          description:
            'Instructions on how to sort the search results. If no sort expression is included, the request returns results in random order. A sort expression consists of the following elements:    Operand -- Name of a game session attribute. Valid values are gameSessionName, gameSessionId, gameSessionProperties, maximumSessions, creationTimeMillis, playerSessionCount, hasAvailablePlayerSessions.    Order -- Valid sort orders are ASC (ascending) and DESC (descending).   For example, this sort expression returns the oldest active sessions first: "SortExpression": "creationTimeMillis ASC". Results with a null value for the sort operand are returned at the end of the list',
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set or is set higher than 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value",
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
      name: "start-fleet-actions",
      description:
        "Resumes certain types of activity on fleet instances that were suspended with StopFleetActions. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity. This operation can be used in the following ways:    To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume.    To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume.    If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to restart actions on. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description: "List of actions to restart on the fleet",
          args: {
            name: "list",
          },
        },
        {
          name: "--location",
          description:
            "The fleet location to restart fleet actions for. Specify a location in the form of an Amazon Web Services Region code, such as us-west-2",
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
      name: "start-game-session-placement",
      description:
        "Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out. A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request. When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order. Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players.  To place a new game session request, specify the following:   The queue name and a set of game session properties and settings   A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request   (Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)   Latency data for all players (if you want to optimize game play for the players)   If successful, a new game session placement is created. To track the status of a placement request, call DescribeGameSessionPlacement and check the request's status. If the status is FULFILLED, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, submit a new request to the same queue or a different queue",
      options: [
        {
          name: "--placement-id",
          description:
            "A unique identifier to assign to the new game session placement. This value is developer-defined. The value must be unique across all Regions and cannot be reused",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-queue-name",
          description:
            "Name of the queue to use to place the new game session. You can use either the queue name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-properties",
          description:
            'A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}',
          args: {
            name: "list",
          },
        },
        {
          name: "--maximum-player-session-count",
          description:
            "The maximum number of players that can be connected simultaneously to the game session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--game-session-name",
          description:
            "A descriptive label that is associated with a game session. Session names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-latencies",
          description:
            "A set of values, expressed in milliseconds, that indicates the amount of latency that a player experiences when connected to @aws; Regions. This information is used to try to place the new game session where it can offer the best possible gameplay experience for the players",
          args: {
            name: "list",
          },
        },
        {
          name: "--desired-player-sessions",
          description:
            "Set of information on each player to create a player session for",
          args: {
            name: "list",
          },
        },
        {
          name: "--game-session-data",
          description:
            "A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session",
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
      name: "start-match-backfill",
      description:
        "Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements.  When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a GameSessions ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the GameSession resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request. When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled. To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the GameSession ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches. Only game sessions created by FlexMatch are supported for match backfill.  Learn more    Backfill existing games with FlexMatch    Matchmaking events (reference)   How Amazon GameLift FlexMatch works",
      options: [
        {
          name: "--ticket-id",
          description:
            "A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the match backfill ticket status and retrieve match results",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-name",
          description:
            "Name of the matchmaker to use for this request. You can use either the configuration name or ARN value. The ARN of the matchmaker that was used with the original game session is listed in the GameSession object, MatchmakerData property",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-arn",
          description:
            "A unique identifier for the game session. Use the game session ID. When using FlexMatch as a standalone matchmaking solution, this parameter is not needed",
          args: {
            name: "string",
          },
        },
        {
          name: "--players",
          description:
            "Match information on all players that are currently assigned to the game session. This information is used by the matchmaker to find new players and add them to the existing game. You can include up to 199 Players in a StartMatchBackfill request.   PlayerID, PlayerAttributes, Team -- This information is maintained in the GameSession object, MatchmakerData property, for all players who are currently assigned to the game session. The matchmaker data is in JSON syntax, formatted as a string. For more details, see  Match Data.  The backfill request must specify the team membership for every player. Do not specify team if you are not using backfill.   LatencyInMs -- If the matchmaker uses player latency, include a latency value, in milliseconds, for the Region that the game session is currently in. Do not include latency values for any other Region",
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
      name: "start-matchmaking",
      description:
        "Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match.  To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to QUEUED.  Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.  Learn more    Add FlexMatch to a game client    Set Up FlexMatch event notification    How Amazon GameLift FlexMatch works",
      options: [
        {
          name: "--ticket-id",
          description:
            "A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of a UUID. Use this identifier to track the matchmaking ticket status and retrieve match results",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-name",
          description:
            "Name of the matchmaking configuration to use for this request. Matchmaking configurations must exist in the same Region as this request. You can use either the configuration name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--players",
          description:
            "Information on each player to be matched. This information must include a player ID, and may contain player attributes and latency data to be used in the matchmaking process. After a successful match, Player objects contain the name of the team the player is assigned to. You can include up to 10 Players in a StartMatchmaking request",
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
      name: "stop-fleet-actions",
      description:
        "Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location.  Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations.  This operation can be used in the following ways:    To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend.    To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend.    If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using UpdateFleetCapacity. To restart fleet actions again, call StartFleetActions.  Learn more   Setting up Amazon GameLift Fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to stop actions on. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description: "List of actions to suspend on the fleet",
          args: {
            name: "list",
          },
        },
        {
          name: "--location",
          description:
            "The fleet location to stop fleet actions for. Specify a location in the form of an Amazon Web Services Region code, such as us-west-2",
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
      name: "stop-game-session-placement",
      description:
        "Cancels a game session placement that is in PENDING status. To stop a placement, provide the placement ID values. If successful, the placement is moved to CANCELLED status",
      options: [
        {
          name: "--placement-id",
          description:
            "A unique identifier for a game session placement to stop",
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
      name: "stop-matchmaking",
      description:
        "Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to CANCELLED. This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the MatchmakerData of an updated game session object, which is provided to the game server.  If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).   Learn more    Add FlexMatch to a game client",
      options: [
        {
          name: "--ticket-id",
          description: "A unique identifier for a matchmaking ticket",
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
      name: "suspend-game-server-group",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling ResumeGameServerGroup. You can suspend the following activity:    Instance type replacement - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active.    To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a GameServerGroup object is returned showing that the activity is listed in SuspendedActions.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group. Use either the name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--suspend-actions",
          description: "The activity to suspend for this game server group",
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
      description:
        "Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging. To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource.   Learn more   Tagging Amazon Web Services Resources in the Amazon Web Services General Reference    Amazon Web Services Tagging Strategies   Related actions   All APIs by task",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the Amazon GameLift resource that you want to assign tags to. Amazon GameLift includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a List or Describe operation for the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of one or more tags to assign to the specified Amazon GameLift resource. Tags are developer-defined and structured as key-value pairs. The maximum tag limit may be lower than stated. See  Tagging Amazon Web Services Resources for tagging limits",
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
        "Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging. To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.  Learn more   Tagging Amazon Web Services Resources in the Amazon Web Services General Reference    Amazon Web Services Tagging Strategies   Related actions   All APIs by task",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the Amazon GameLift resource that you want to remove tags from. Amazon GameLift includes resource ARNs in the data object for the resource. You can retrieve the ARN by calling a List or Describe operation for the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of one or more tag keys to remove from the specified Amazon GameLift resource",
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
      name: "update-alias",
      description:
        "Updates properties for an alias. Specify the unique identifier of the alias to be updated and the new property values. When reassigning an alias to a new fleet, provide an updated routing strategy. If successful, the updated alias record is returned.  Related actions   All APIs by task",
      options: [
        {
          name: "--alias-id",
          description:
            "A unique identifier for the alias that you want to update. You can use either the alias ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with an alias. Alias names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A human-readable description of the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-strategy",
          description:
            "The routing configuration, including routing type and fleet target, for the alias",
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
      name: "update-build",
      description:
        "Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.  Learn more    Upload a Custom Server Build   All APIs by task",
      options: [
        {
          name: "--build-id",
          description:
            "A unique identifier for the build to update. You can use either the build ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a build. Build names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-version",
          description:
            "Version information that is associated with a build or script. Version strings do not need to be unique",
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
      name: "update-container-fleet",
      description:
        "Updates the properties of a managed container fleet. Depending on the properties being updated, this operation might initiate a fleet deployment. You can track deployments for a fleet using DescribeFleetDeployment.  Request options  As with CreateContainerFleet, many fleet properties use common defaults or are calculated based on the fleet's container group definitions.    Update fleet properties that result in a fleet deployment. Include only those properties that you want to change. Specify deployment configuration settings.   Update fleet properties that don't result in a fleet deployment. Include only those properties that you want to change.   Changes to the following properties initiate a fleet deployment:     GameServerContainerGroupDefinition     PerInstanceContainerGroupDefinition     GameServerContainerGroupsPerInstance     InstanceInboundPermissions     InstanceConnectionPortRange     LogConfiguration     Results  If successful, this operation updates the container fleet resource, and might initiate a new deployment of fleet resources using the deployment configuration provided. A deployment replaces existing fleet instances with new instances that are deployed with the updated fleet properties. The fleet is placed in UPDATING status until the deployment is complete, then return to ACTIVE.  You can have only one update deployment active at a time for a fleet. If a second update request initiates a deployment while another deployment is in progress, the first deployment is cancelled",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the container fleet to update. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-container-group-definition-name",
          description:
            "The name or ARN value of a new game server container group definition to deploy on the fleet. If you're updating the fleet to a specific version of a container group definition, use the ARN value and include the version number. If you're updating the fleet to the latest version of a container group definition, you can use the name value. You can't remove a fleet's game server container group definition, you can only update or replace it with another definition. Update a container group definition by calling UpdateContainerGroupDefinition. This operation creates a ContainerGroupDefinition resource with an incremented version",
          args: {
            name: "string",
          },
        },
        {
          name: "--per-instance-container-group-definition-name",
          description:
            "The name or ARN value of a new per-instance container group definition to deploy on the fleet. If you're updating the fleet to a specific version of a container group definition, use the ARN value and include the version number. If you're updating the fleet to the latest version of a container group definition, you can use the name value. Update a container group definition by calling UpdateContainerGroupDefinition. This operation creates a ContainerGroupDefinition resource with an incremented version.  To remove a fleet's per-instance container group definition, leave this parameter empty and use the parameter RemoveAttributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-container-groups-per-instance",
          description:
            "The number of times to replicate the game server container group on each fleet instance. By default, Amazon GameLift calculates the maximum number of game server container groups that can fit on each instance. You can remove this property value to use the calculated value, or set it manually. If you set this number manually, Amazon GameLift uses your value as long as it's less than the calculated maximum",
          args: {
            name: "integer",
          },
        },
        {
          name: "--instance-connection-port-range",
          description:
            "A revised set of port numbers to open on each fleet instance. By default, Amazon GameLift calculates an optimal port range based on your fleet configuration. If you previously set this parameter manually, you can't reset this to use the calculated settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-inbound-permission-authorizations",
          description:
            "A set of ports to add to the container fleet's inbound permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-inbound-permission-revocations",
          description:
            "A set of ports to remove from the container fleet's inbound permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--deployment-configuration",
          description:
            "Instructions for how to deploy updates to a container fleet, if the fleet update initiates a deployment. The deployment configuration lets you determine how to replace fleet instances and what actions to take if the deployment fails",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A meaningful description of the container fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-groups",
          description:
            "The name of an Amazon Web Services CloudWatch metric group to add this fleet to",
          args: {
            name: "list",
          },
        },
        {
          name: "--new-game-session-protection-policy",
          description:
            "The game session protection policy to apply to all new game sessions that are started in this fleet. Game sessions that already exist are not affected",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-creation-limit-policy",
          description:
            "A policy that limits the number of game sessions that each individual player can create on instances in this fleet. The limit applies for a specified span of time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--log-configuration",
          description: "The method for collecting container logs for the fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--remove-attributes",
          description:
            "If set, this update removes a fleet's per-instance container group definition. You can't remove a fleet's game server container group definition",
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
      name: "update-container-group-definition",
      description:
        "Updates properties in an existing container group definition. This operation doesn't replace the definition. Instead, it creates a new version of the definition and saves it separately. You can access all versions that you choose to retain. The only property you can't update is the container group type.  Request options:    Update based on the latest version of the container group definition. Specify the container group definition name only, or use an ARN value without a version number. Provide updated values for the properties that you want to change only. All other values remain the same as the latest version.   Update based on a specific version of the container group definition. Specify the container group definition name and a source version number, or use an ARN value with a version number. Provide updated values for the properties that you want to change only. All other values remain the same as the source version.   Change a game server container definition. Provide the updated container definition.   Add or change a support container definition. Provide a complete set of container definitions, including the updated definition.   Remove a support container definition. Provide a complete set of container definitions, excluding the definition to remove. If the container group has only one support container definition, provide an empty set.    Results:  If successful, this operation returns the complete properties of the new container group definition version. If the container group definition version is used in an active fleets, the update automatically initiates a new fleet deployment of the new version. You can track a fleet's deployments using ListFleetDeployments",
      options: [
        {
          name: "--name",
          description:
            "A descriptive identifier for the container group definition. The name value must be unique in an Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-container-definition",
          description:
            "An updated definition for the game server container in this group. Define a game server container only when the container group type is GAME_SERVER. You can pass in your container definitions as a JSON file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--support-container-definitions",
          description:
            "One or more definitions for support containers in this group. You can define a support container in any type of container group. You can pass in your container definitions as a JSON file",
          args: {
            name: "list",
          },
        },
        {
          name: "--total-memory-limit-mebibytes",
          description:
            "The maximum amount of memory (in MiB) to allocate to the container group. All containers in the group share this memory. If you specify memory limits for an individual container, the total value must be greater than any individual container's memory limit",
          args: {
            name: "integer",
          },
        },
        {
          name: "--total-vcpu-limit",
          description:
            "The maximum amount of vCPU units to allocate to the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share this memory. If you specify vCPU limits for individual containers, the total value must be equal to or greater than the sum of the CPU limits for all containers in the group",
          args: {
            name: "double",
          },
        },
        {
          name: "--version-description",
          description:
            "A description for this update to the container group definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-version-number",
          description:
            "The container group definition version to update. The new version starts with values from the source version, and then updates values included in this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--operating-system",
          description:
            "The platform that all containers in the group use. Containers in a group must run on the same operating system.  Amazon Linux 2 (AL2) will reach end of support on 6/30/2025. See more details in the Amazon Linux 2 FAQs. For game servers that are hosted on AL2 and use Amazon GameLift server SDK 4.x, first update the game server build to server SDK 5.x, and then deploy to AL2023 instances. See  Migrate to Amazon GameLift server SDK version 5",
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
      name: "update-fleet-attributes",
      description:
        "Updates a fleet's mutable attributes, such as game session protection and resource creation limits. To update fleet attributes, specify the fleet ID and the property values that you want to change. If successful, Amazon GameLift returns the identifiers for the updated fleet.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to update attribute metadata for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a fleet. Fleet names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A human-readable description of a fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-game-session-protection-policy",
          description:
            "The game session protection policy to apply to all new game sessions created in this fleet. Game sessions that already exist are not affected. You can set protection for individual game sessions using UpdateGameSession.    NoProtection -- The game session can be terminated during a scale-down event.    FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-creation-limit-policy",
          description:
            "Policy settings that limit the number of game sessions an individual player can create over a span of time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-groups",
          description:
            "The name of a metric group to add this fleet to. Use a metric group in Amazon CloudWatch to aggregate the metrics from multiple fleets. Provide an existing metric group name, or create a new metric group by providing a new name. A fleet can only be in one metric group at a time",
          args: {
            name: "list",
          },
        },
        {
          name: "--anywhere-configuration",
          description: "Amazon GameLift Anywhere configuration options",
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
      name: "update-fleet-capacity",
      description:
        "Updates capacity settings for a managed EC2 fleet or managed container fleet. For these fleets, you adjust capacity by changing the number of instances in the fleet. Fleet capacity determines the number of game sessions and players that the fleet can host based on its configuration. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Use this operation to set these fleet capacity properties:    Minimum/maximum size: Set hard limits on the number of Amazon EC2 instances allowed. If Amazon GameLift receives a request--either through manual update or automatic scaling--it won't change the capacity to a value outside of this range.   Desired capacity: As an alternative to automatic scaling, manually set the number of Amazon EC2 instances to be maintained. Before changing a fleet's desired capacity, check the maximum capacity of the fleet's Amazon EC2 instance type by calling DescribeEC2InstanceLimits.   To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the Location parameter. The fleet must be in ACTIVE status.  To update capacity for a fleet's remote location, set the Location parameter to the location to update. The location must be in ACTIVE status. If successful, Amazon GameLift updates the capacity settings and returns the identifiers for the updated fleet and/or location. If a requested change to desired capacity exceeds the instance type's limit, the LimitExceeded exception occurs.  Updates often prompt an immediate change in fleet capacity, such as when current capacity is different than the new desired capacity or outside the new limits. In this scenario, Amazon GameLift automatically initiates steps to add or remove instances in the fleet location. You can track a fleet's current capacity by calling DescribeFleetCapacity or DescribeFleetLocationCapacity.   Learn more   Scaling fleet capacity",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to update capacity settings for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-instances",
          description:
            "The number of Amazon EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. Changes in desired instance value can take up to 1 minute to be reflected when viewing the fleet's capacity settings",
          args: {
            name: "integer",
          },
        },
        {
          name: "--min-size",
          description:
            "The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-size",
          description:
            "The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--location",
          description:
            "The name of a remote location to update fleet capacity settings for, in the form of an Amazon Web Services Region code such as us-west-2",
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
      name: "update-fleet-port-settings",
      description:
        "Updates permissions that allow inbound traffic to connect to game sessions in the fleet.  To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions.  For a container fleet, inbound permissions must specify port numbers that are defined in the fleet's connection port settings. If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling DescribeFleetPortSettings with a location name.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to update port settings for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--inbound-permission-authorizations",
          description:
            "A collection of port settings to be added to the fleet resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--inbound-permission-revocations",
          description:
            "A collection of port settings to be removed from the fleet resource",
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
      name: "update-game-server",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Updates information about a registered game server to help Amazon GameLift FleetIQ track game server availability. This operation is called by a game server process that is running on an instance in a game server group.  Use this operation to update the following types of game server information. You can make all three types of updates in the same request:   To update the game server's utilization status from AVAILABLE (when the game server is available to be claimed) to UTILIZED (when the game server is currently hosting games). Identify the game server and game server group and specify the new utilization status. You can't change the status from to UTILIZED to AVAILABLE .   To report health status, identify the game server and game server group and set health check to HEALTHY. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.   To change game server metadata, provide updated game server data.   Once a game server is successfully updated, the relevant statuses and timestamps are updated.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group where the game server is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-id",
          description:
            "A custom string that uniquely identifies the game server to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-server-data",
          description:
            "A set of custom game server properties, formatted as a single string value. This data is passed to a game client or service when it requests information on game servers",
          args: {
            name: "string",
          },
        },
        {
          name: "--utilization-status",
          description:
            "Indicates if the game server is available or is currently hosting gameplay. You can update a game server status from AVAILABLE to UTILIZED, but you can't change a the status from UTILIZED to AVAILABLE",
          args: {
            name: "string",
          },
        },
        {
          name: "--health-check",
          description:
            "Indicates health status of the game server. A request that includes this parameter updates the game server's LastHealthCheckTime timestamp",
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
      name: "update-game-server-group",
      description:
        "This operation is used with the Amazon GameLift FleetIQ solution and game server groups.  Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts. To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a GameServerGroup object is returned.  Learn more   Amazon GameLift FleetIQ Guide",
      options: [
        {
          name: "--game-server-group-name",
          description:
            "A unique identifier for the game server group. Use either the name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your Amazon EC2 Auto Scaling groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-definitions",
          description:
            'An updated list of Amazon EC2 instance types to use in the Auto Scaling group. The instance definitions must specify at least two different instance types that are supported by Amazon GameLift FleetIQ. This updated list replaces the entire current list of instance definitions for the game server group. For more information on instance types, see EC2 Instance Types in the Amazon EC2 User Guide. You can optionally specify capacity weighting for each instance type. If no weight value is specified for an instance type, it is set to the default value "1". For more information about capacity weighting, see  Instance Weighting for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide',
          args: {
            name: "list",
          },
        },
        {
          name: "--game-server-protection-policy",
          description:
            "A flag that indicates whether instances in the game server group are protected from early termination. Unprotected instances that have active game servers running might be terminated during a scale-down event, causing players to be dropped from the game. Protected instances cannot be terminated while there are active game servers running except in the event of a forced game server group deletion (see ). An exception to this is with Spot Instances, which can be terminated by Amazon Web Services regardless of protection status. This property is set to NO_PROTECTION by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--balancing-strategy",
          description:
            "Indicates how Amazon GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the game server group. Method options include the following:    SPOT_ONLY - Only Spot Instances are used in the game server group. If Spot Instances are unavailable or not viable for game hosting, the game server group provides no hosting capacity until Spot Instances can again be used. Until then, no new instances are started, and the existing nonviable Spot Instances are terminated (after current gameplay ends) and are not replaced.    SPOT_PREFERRED - (default value) Spot Instances are used whenever available in the game server group. If Spot Instances are unavailable, the game server group continues to provide hosting capacity by falling back to On-Demand Instances. Existing nonviable Spot Instances are terminated (after current gameplay ends) and are replaced with new On-Demand Instances.    ON_DEMAND_ONLY - Only On-Demand Instances are used in the game server group. No Spot Instances are used, even when available, while this balancing strategy is in force",
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
      name: "update-game-session",
      description:
        "Updates the mutable properties of a game session.  To update a game session, specify the game session ID and the values you want to change.  If successful, the updated GameSession object is returned.   All APIs by task",
      options: [
        {
          name: "--game-session-id",
          description: "A unique identifier for the game session to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-player-session-count",
          description:
            "The maximum number of players that can be connected simultaneously to the game session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a game session. Session names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--player-session-creation-policy",
          description:
            "A policy that determines whether the game session is accepting new players",
          args: {
            name: "string",
          },
        },
        {
          name: "--protection-policy",
          description:
            "Game session protection policy to apply to this game session only.    NoProtection -- The game session can be terminated during a scale-down event.    FullProtection -- If the game session is in an ACTIVE status, it cannot be terminated during a scale-down event",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-properties",
          description:
            'A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. You can use this parameter to modify game properties in an active game session. This action adds new properties and modifies existing properties. There is no way to delete properties. For an example, see Update the value of a game property',
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
      name: "update-game-session-queue",
      description:
        "Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations.   Learn more    Using Multi-Region Queues",
      options: [
        {
          name: "--name",
          description:
            "A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-in-seconds",
          description:
            "The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a TIMED_OUT status",
          args: {
            name: "integer",
          },
        },
        {
          name: "--player-latency-policies",
          description:
            "A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value. When updating policies, provide a complete collection of policies",
          args: {
            name: "list",
          },
        },
        {
          name: "--destinations",
          description:
            "A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference. When updating this list, provide a complete list of destinations",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-configuration",
          description:
            "A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of Amazon Web Services Region codes, such as us-west-2. If this parameter is not set, game sessions can be placed in any queue location. To remove an existing filter configuration, pass in an empty set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--priority-configuration",
          description:
            "Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process. To remove an existing priority configuration, pass in an empty set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--custom-event-data",
          description:
            "Information to be added to all events that are related to this game session queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-target",
          description:
            "An SNS topic ARN that is set up to receive game session placement notifications. See  Setting up notifications for game session placement",
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
      name: "update-matchmaking-configuration",
      description:
        "Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings.   Learn more    Design a FlexMatch matchmaker",
      options: [
        {
          name: "--name",
          description:
            "A unique identifier for the matchmaking configuration to update. You can use either the configuration name or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the matchmaking configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-session-queue-arns",
          description:
            "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<region>::gamesessionqueue/<queue name>. Queues can be located in any Region. Queues are used to start new Amazon GameLift-hosted game sessions for matches that are created with this matchmaking configuration. If FlexMatchMode is set to STANDALONE, do not set this parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--request-timeout-seconds",
          description:
            "The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. Requests that fail due to timing out can be resubmitted as needed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--acceptance-timeout-seconds",
          description:
            "The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required",
          args: {
            name: "integer",
          },
        },
        {
          name: "--acceptance-required",
          description:
            "A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status REQUIRES_ACCEPTANCE to indicate when a completed potential match is waiting for player acceptance",
        },
        {
          name: "--no-acceptance-required",
          description:
            "A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. To require acceptance, set to TRUE. With this option enabled, matchmaking tickets use the status REQUIRES_ACCEPTANCE to indicate when a completed potential match is waiting for player acceptance",
        },
        {
          name: "--rule-set-name",
          description:
            "A unique identifier for the matchmaking rule set to use with this configuration. You can use either the rule set name or ARN value. A matchmaking configuration can only use rule sets that are defined in the same Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-target",
          description:
            "An SNS topic ARN that is set up to receive matchmaking notifications. See  Setting up notifications for matchmaking for more information",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-player-count",
          description:
            "The number of player slots in a match to keep open for future players. For example, if the configuration's rule set specifies a match for a single 12-person team, and the additional player count is set to 2, only 10 players are selected for the match. This parameter is not used if FlexMatchMode is set to STANDALONE",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-event-data",
          description:
            "Information to add to all events related to the matchmaking configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--game-properties",
          description:
            'A set of key-value pairs that can store custom data in a game session. For example: {"Key": "difficulty", "Value": "novice"}. This information is added to the new GameSession object that is created for a successful match. This parameter is not used if FlexMatchMode is set to STANDALONE',
          args: {
            name: "list",
          },
        },
        {
          name: "--game-session-data",
          description:
            "A set of custom game session properties, formatted as a single string value. This data is passed to a game server process with a request to start a new game session. For more information, see Start a game session. This information is added to the game session that is created for a successful match. This parameter is not used if FlexMatchMode is set to STANDALONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--backfill-mode",
          description:
            "The method that is used to backfill game sessions created with this matchmaking configuration. Specify MANUAL when your game manages backfill requests manually or does not use the match backfill feature. Specify AUTOMATIC to have GameLift create a match backfill request whenever a game session has one or more open slots. Learn more about manual and automatic backfill in Backfill Existing Games with FlexMatch. Automatic backfill is not available when FlexMatchMode is set to STANDALONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--flex-match-mode",
          description:
            "Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.     STANDALONE - FlexMatch forms matches and returns match information, including players and team assignments, in a  MatchmakingSucceeded event.    WITH_QUEUE - FlexMatch forms matches and uses the specified Amazon GameLift queue to start a game session for the match",
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
      name: "update-runtime-configuration",
      description:
        "Updates the runtime configuration for the specified fleet. The runtime configuration tells Amazon GameLift how to launch server processes on computes in managed EC2 and Anywhere fleets. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in ACTIVE status. To update runtime configuration, specify the fleet ID and provide a RuntimeConfiguration with an updated set of server process configurations. If successful, the fleet's runtime configuration settings are updated. Fleet computes that run game server processes regularly check for and receive updated runtime configurations. The computes immediately take action to comply with the new configuration by launching new server processes or by not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.  Learn more   Setting up Amazon GameLift fleets",
      options: [
        {
          name: "--fleet-id",
          description:
            "A unique identifier for the fleet to update runtime configuration for. You can use either the fleet ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime-configuration",
          description:
            "Instructions for launching server processes on fleet computes. Server processes run either a custom game build executable or a Realtime Servers script. The runtime configuration lists the types of server processes to run, how to launch them, and the number of processes to run concurrently",
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
      name: "update-script",
      description:
        "Updates Realtime script metadata and content. To update script metadata, specify the script ID and provide updated name and/or version values.  To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the Version parameter to track updates to the script. If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions.   Learn more   Amazon GameLift Realtime Servers   Related actions   All APIs by task",
      options: [
        {
          name: "--script-id",
          description:
            "A unique identifier for the Realtime script to update. You can use either the script ID or ARN value",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive label that is associated with a script. Script names do not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-location",
          description:
            'The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version',
          args: {
            name: "structure",
          },
        },
        {
          name: "--zip-file",
          description:
            'A data object containing your Realtime scripts and dependencies as a zip file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB. When using the Amazon Web Services CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the string "fileb://" to indicate that the file data is a binary object. For example: --zip-file fileb://myRealtimeScript.zip',
          args: {
            name: "blob",
          },
        },
        {
          name: "--script-version",
          description:
            "Version information that is associated with a build or script. Version strings do not need to be unique",
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
      name: "validate-matchmaking-rule-set",
      description:
        "Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.  Learn more     Build a rule set",
      options: [
        {
          name: "--rule-set-body",
          description:
            "A collection of matchmaking rules to validate, formatted as a JSON string",
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
      name: "upload-build",
      description: "Upload a new build to AWS GameLift",
      options: [
        {
          name: "--name",
          description: "The name of the build",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-version",
          description: "The version of the build",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-root",
          description:
            "The path to the directory containing the build to upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-sdk-version",
          description:
            "The version of the GameLift server SDK used to create the game server",
          args: {
            name: "string",
          },
        },
        {
          name: "--operating-system",
          description: "The operating system the build runs on",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-game-session-log",
      description: "Download a compressed log file for a game session",
      options: [
        {
          name: "--game-session-id",
          description: "The game session ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--save-as",
          description: "The filename to which the file should be saved (.zip)",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
