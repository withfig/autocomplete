const completionSpec: Fig.Spec = {
  name: "deploy",
  description:
    "CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless Lambda functions, or applications in an Amazon ECS service. You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use CodeDeploy. CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.  CodeDeploy Components  Use the information in this guide to help you work with the following CodeDeploy components:    Application: A name that uniquely identifies the application you want to deploy. CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.    Deployment group: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.    Deployment configuration: A set of deployment rules and deployment success and failure conditions used by CodeDeploy during a deployment.    Deployment: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances.     Application revisions: For an Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content\u2014source code, webpages, executable files, and deployment scripts\u2014along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.   This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.  CodeDeploy Information Resources     CodeDeploy User Guide     CodeDeploy API Reference Guide     CLI Reference for CodeDeploy     CodeDeploy Developer Forum",
  subcommands: [
    {
      name: "add-tags-to-on-premises-instances",
      description: "Adds tags to on-premises instances",
      options: [
        {
          name: "--tags",
          description:
            "The tag key-value pairs to add to the on-premises instances. Keys and values are both required. Keys cannot be null or empty strings. Value-only tags are not allowed",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-names",
          description:
            "The names of the on-premises instances to which to add tags",
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
      name: "batch-get-application-revisions",
      description:
        "Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application about which to get revision information",
          args: {
            name: "string",
          },
        },
        {
          name: "--revisions",
          description:
            "An array of RevisionLocation objects that specify information to get about the application revisions, including type and location. The maximum number of RevisionLocation objects you can specify is 25",
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
      name: "batch-get-applications",
      description:
        "Gets information about one or more applications. The maximum number of applications that can be returned is 100",
      options: [
        {
          name: "--application-names",
          description:
            "A list of application names separated by spaces. The maximum number of application names you can specify is 100",
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
      name: "batch-get-deployment-groups",
      description: "Gets information about one or more deployment groups",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the applicable user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-group-names",
          description: "The names of the deployment groups",
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
      name: "batch-get-deployment-instances",
      description:
        "This method works, but is deprecated. Use BatchGetDeploymentTargets instead.    Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer BatchGetDeploymentTargets works with all compute platforms. The maximum number of instances that can be returned is 25",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-ids",
          description:
            "The unique IDs of instances used in the deployment. The maximum number of instance IDs you can specify is 25",
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
      name: "batch-get-deployment-targets",
      description:
        "Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25.  The type of targets returned depends on the deployment's compute platform or deployment method:     EC2/On-premises: Information about Amazon EC2 instance targets.     Lambda: Information about Lambda functions targets.     Amazon ECS: Information about Amazon ECS service targets.     CloudFormation: Information about targets of blue/green deployments initiated by a CloudFormation stack update",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-ids",
          description:
            "The unique IDs of the deployment targets. The compute platform of the deployment determines the type of the targets and their formats. The maximum number of deployment target IDs you can specify is 25.    For deployments that use the EC2/On-premises compute platform, the target IDs are Amazon EC2 or on-premises instances IDs, and their target type is instanceTarget.     For deployments that use the Lambda compute platform, the target IDs are the names of Lambda functions, and their target type is instanceTarget.     For deployments that use the Amazon ECS compute platform, the target IDs are pairs of Amazon ECS clusters and services specified using the format <clustername>:<servicename>. Their target type is ecsTarget.     For deployments that are deployed with CloudFormation, the target IDs are CloudFormation stack IDs. Their target type is cloudFormationTarget",
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
      name: "batch-get-deployments",
      description:
        "Gets information about one or more deployments. The maximum number of deployments that can be returned is 25",
      options: [
        {
          name: "--deployment-ids",
          description:
            "A list of deployment IDs, separated by spaces. The maximum number of deployment IDs you can specify is 25",
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
      name: "batch-get-on-premises-instances",
      description:
        "Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25",
      options: [
        {
          name: "--instance-names",
          description:
            "The names of the on-premises instances about which to get information. The maximum number of instance names you can specify is 25",
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
      name: "continue-deployment",
      description:
        "For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.)",
      options: [
        {
          name: "--deployment-id",
          description:
            "The unique ID of a blue/green deployment for which you want to start rerouting traffic to the replacement environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-wait-type",
          description:
            "The status of the deployment's waiting period. READY_WAIT indicates that the deployment is ready to start shifting traffic. TERMINATION_WAIT indicates that the traffic is shifted, but the original target is not terminated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Creates an application",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application. This name must be unique with the applicable user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-platform",
          description:
            "The destination platform type for the deployment (Lambda, Server, or ECS)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define",
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
      name: "create-deployment",
      description:
        "Deploys an application revision through the specified deployment group",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-group-name",
          description: "The name of the deployment group",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description: "The type and location of the revision to deploy",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deployment-config-name",
          description:
            "The name of a deployment configuration associated with the user or Amazon Web Services account. If not specified, the value configured in the deployment group is used as the default. If the deployment group does not have a deployment configuration associated with it, CodeDeployDefault.OneAtATime is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A comment about the deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--ignore-application-stop-failures",
          description:
            "If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if ApplicationStop fails, the deployment continues with DownloadBundle. If BeforeBlockTraffic fails, the deployment continues with BlockTraffic. If AfterBlockTraffic fails, the deployment continues with ApplicationStop.   If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.   During a deployment, the CodeDeploy agent runs the scripts specified for ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail.   If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use ignoreApplicationStopFailures to specify that the ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic failures should be ignored",
        },
        {
          name: "--no-ignore-application-stop-failures",
          description:
            "If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if ApplicationStop fails, the deployment continues with DownloadBundle. If BeforeBlockTraffic fails, the deployment continues with BlockTraffic. If AfterBlockTraffic fails, the deployment continues with ApplicationStop.   If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.   During a deployment, the CodeDeploy agent runs the scripts specified for ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail.   If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use ignoreApplicationStopFailures to specify that the ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic failures should be ignored",
        },
        {
          name: "--target-instances",
          description:
            "Information about the instances that belong to the replacement environment in a blue/green deployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-rollback-configuration",
          description:
            "Configuration information for an automatic rollback that is added when a deployment is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-outdated-instances-only",
          description:
            "Indicates whether to deploy to all instances or only to instances that are not running the latest application revision",
        },
        {
          name: "--no-update-outdated-instances-only",
          description:
            "Indicates whether to deploy to all instances or only to instances that are not running the latest application revision",
        },
        {
          name: "--file-exists-behavior",
          description:
            "Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment. The fileExistsBehavior parameter takes any of the following values:   DISALLOW: The deployment fails. This is also the default behavior if no option is specified.   OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance.   RETAIN: The version of the file already on the instance is kept and used as part of the new deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--override-alarm-configuration",
          description:
            "Allows you to specify information about alarms associated with a deployment. The alarm configuration that you specify here will override the alarm configuration at the deployment group level. Consider overriding the alarm configuration if you have set up alarms at the deployment group level that are causing deployment failures. In this case, you would call CreateDeployment to create a new deployment that uses a previous application revision that is known to work, and set its alarm configuration to turn off alarm polling. Turning off alarm polling ensures that the new deployment proceeds without being blocked by the alarm that was generated by the previous, failed, deployment.  If you specify an overrideAlarmConfiguration, you need the UpdateDeploymentGroup IAM permission when calling CreateDeployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-location",
          description:
            "Information about the location of the application revision in Amazon S3. You must specify the bucket, the key, and bundleType. Optionally, you can also specify an eTag and version",
          args: {
            name: "structure",
          },
        },
        {
          name: "--github-location",
          description:
            "Information about the location of the application revision in GitHub. You must specify the repository and commit ID that references the application revision. For the repository, use the format GitHub-account/repository-name or GitHub-org/repository-name. For the commit ID, use the SHA1 Git commit reference",
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
      name: "create-deployment-config",
      description: "Creates a deployment configuration",
      options: [
        {
          name: "--deployment-config-name",
          description: "The name of the deployment configuration to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--minimum-healthy-hosts",
          description:
            "The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value. The type parameter takes either of the following values:   HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.   FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, CodeDeploy converts the percentage to the equivalent number of instances and rounds up fractional instances.   The value parameter takes an integer. For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic-routing-config",
          description:
            "The configuration that specifies how the deployment traffic is routed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--compute-platform",
          description:
            "The destination platform type for the deployment (Lambda, Server, or ECS)",
          args: {
            name: "string",
          },
        },
        {
          name: "--zonal-config",
          description:
            "Configure the ZonalConfig object if you want CodeDeploy to deploy your application to one Availability Zone at a time, within an Amazon Web Services Region. For more information about the zonal configuration feature, see zonal configuration in the CodeDeploy User Guide",
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
      name: "create-deployment-group",
      description:
        "Creates a deployment group to which application revisions are deployed",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-group-name",
          description:
            "The name of a new deployment group for the specified application",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-config-name",
          description:
            "If specified, the deployment configuration name can be either one of the predefined configurations provided with CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation.  CodeDeployDefault.OneAtATime is the default deployment configuration. It is used if a configuration isn't specified for the deployment or deployment group. For more information about the predefined deployment configurations in CodeDeploy, see Working with Deployment Configurations in CodeDeploy in the CodeDeploy User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-tag-filters",
          description:
            "The Amazon EC2 tags on which to filter. The deployment group includes Amazon EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-premises-instance-tag-filters",
          description:
            "The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags. Cannot be used in the same call as OnPremisesTagSet",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-groups",
          description: "A list of associated Amazon EC2 Auto Scaling groups",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-role-arn",
          description:
            "A service role Amazon Resource Name (ARN) that allows CodeDeploy to act on the user's behalf when interacting with Amazon Web Services services",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-configurations",
          description:
            "Information about triggers to create when the deployment group is created. For examples, see Create a Trigger for an CodeDeploy Event in the CodeDeploy User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--alarm-configuration",
          description:
            "Information to add about Amazon CloudWatch alarms when the deployment group is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-rollback-configuration",
          description:
            "Configuration information for an automatic rollback that is added when a deployment group is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outdated-instances-strategy",
          description:
            "Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-style",
          description:
            "Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blue-green-deployment-configuration",
          description:
            "Information about blue/green deployment options for a deployment group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--load-balancer-info",
          description:
            "Information about the load balancer used in a deployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ec2-tag-set",
          description:
            "Information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ecs-services",
          description:
            "The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-premises-tag-set",
          description:
            "Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all of the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "list",
          },
        },
        {
          name: "--termination-hook-enabled",
          description:
            "This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see Integrating CodeDeploy with Amazon EC2 Auto Scaling in the CodeDeploy User Guide. Set terminationHookEnabled to true to have CodeDeploy install a termination hook into your Auto Scaling group when you create a deployment group. When this hook is installed, CodeDeploy will perform termination deployments. For information about termination deployments, see Enabling termination deployments during Auto Scaling scale-in events in the CodeDeploy User Guide. For more information about Auto Scaling scale-in events, see the Scale in topic in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-termination-hook-enabled",
          description:
            "This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see Integrating CodeDeploy with Amazon EC2 Auto Scaling in the CodeDeploy User Guide. Set terminationHookEnabled to true to have CodeDeploy install a termination hook into your Auto Scaling group when you create a deployment group. When this hook is installed, CodeDeploy will perform termination deployments. For information about termination deployments, see Enabling termination deployments during Auto Scaling scale-in events in the CodeDeploy User Guide. For more information about Auto Scaling scale-in events, see the Scale in topic in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--ec-2-tag-set",
          description:
            "Information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters",
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
      name: "delete-application",
      description: "Deletes an application",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-deployment-config",
      description:
        "Deletes a deployment configuration.  A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted",
      options: [
        {
          name: "--deployment-config-name",
          description:
            "The name of a deployment configuration associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-deployment-group",
      description: "Deletes a deployment group",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-group-name",
          description:
            "The name of a deployment group for the specified application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-git-hub-account-token",
      description: "Deletes a GitHub account connection",
      options: [
        {
          name: "--token-name",
          description: "The name of the GitHub account connection to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resources-by-external-id",
      description:
        "Deletes resources linked to an external ID. This action only applies if you have configured blue/green deployments through CloudFormation.   It is not necessary to call this action directly. CloudFormation calls it on your behalf when it needs to delete stack resources. This action is offered publicly in case you need to delete resources to comply with General Data Protection Regulation (GDPR) requirements",
      options: [
        {
          name: "--external-id",
          description:
            "The unique ID of an external resource (for example, a CloudFormation stack ID) that is linked to one or more CodeDeploy resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deregister-on-premises-instance",
      description: "Deregisters an on-premises instance",
      options: [
        {
          name: "--instance-name",
          description: "The name of the on-premises instance to deregister",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Gets information about an application",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-application-revision",
      description: "Gets information about an application revision",
      options: [
        {
          name: "--application-name",
          description:
            "The name of the application that corresponds to the revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description:
            "Information about the application revision to get, including type and location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-location",
          description:
            "Information about the location of the application revision in Amazon S3. You must specify the bucket, the key, and bundleType. Optionally, you can also specify an eTag and version",
          args: {
            name: "structure",
          },
        },
        {
          name: "--github-location",
          description:
            "Information about the location of the application revision in GitHub. You must specify the repository and commit ID that references the application revision. For the repository, use the format GitHub-account/repository-name or GitHub-org/repository-name. For the commit ID, use the SHA1 Git commit reference",
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
      name: "get-deployment",
      description:
        "Gets information about a deployment.   The content property of the appSpecContent object in the returned revision is always null. Use GetApplicationRevision and the sha256 property of the returned appSpecContent object to get the content of the deployment\u2019s AppSpec file",
      options: [
        {
          name: "--deployment-id",
          description:
            "The unique ID of a deployment associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-deployment-config",
      description: "Gets information about a deployment configuration",
      options: [
        {
          name: "--deployment-config-name",
          description:
            "The name of a deployment configuration associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-deployment-group",
      description: "Gets information about a deployment group",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-group-name",
          description:
            "The name of a deployment group for the specified application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-deployment-instance",
      description: "Gets information about an instance as part of a deployment",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description: "The unique ID of an instance in the deployment group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-deployment-target",
      description: "Returns information about a deployment target",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-id",
          description: "The unique ID of a deployment target",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-on-premises-instance",
      description: "Gets information about an on-premises instance",
      options: [
        {
          name: "--instance-name",
          description:
            "The name of the on-premises instance about which to get information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-application-revisions",
      description: "Lists information about revisions for an application",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The column name to use to sort the list results:    registerTime: Sort by the time the revisions were registered with CodeDeploy.    firstUsedTime: Sort by the time the revisions were first used in a deployment.    lastUsedTime: Sort by the time the revisions were last used in a deployment.    If not specified or set to null, the results are returned in an arbitrary order",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order in which to sort the list results:     ascending: ascending order.    descending: descending order.   If not specified, the results are sorted in ascending order. If set to null, the results are sorted in an arbitrary order",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket",
          description:
            "An Amazon S3 bucket name to limit the search for revisions.   If set to null, all of the user's buckets are searched",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-key-prefix",
          description:
            "A key prefix for the set of Amazon S3 objects to limit the search for revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployed",
          description:
            "Whether to list revisions based on whether the revision is the target revision of a deployment group:     include: List revisions that are target revisions of a deployment group.    exclude: Do not list revisions that are target revisions of a deployment group.    ignore: List all revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous ListApplicationRevisions call. It can be used to return the next set of applications in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--s-3-bucket",
          description:
            "An Amazon S3 bucket name to limit the search for revisions.   If set to null, all of the user's buckets are searched",
          args: {
            name: "string",
          },
        },
        {
          name: "--s-3-key-prefix",
          description:
            "A key prefix for the set of Amazon S3 objects to limit the search for revisions",
          args: {
            name: "string",
          },
        },
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
      name: "list-applications",
      description:
        "Lists the applications registered with the user or Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous list applications call. It can be used to return the next set of applications in the list",
          args: {
            name: "string",
          },
        },
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
      name: "list-deployment-configs",
      description:
        "Lists the deployment configurations with the user or Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous ListDeploymentConfigs call. It can be used to return the next set of deployment configurations in the list",
          args: {
            name: "string",
          },
        },
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
      name: "list-deployment-groups",
      description:
        "Lists the deployment groups for an application registered with the Amazon Web Services user or Amazon Web Services account",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous list deployment groups call. It can be used to return the next set of deployment groups in the list",
          args: {
            name: "string",
          },
        },
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
      name: "list-deployment-instances",
      description:
        "The newer BatchGetDeploymentTargets should be used instead because it works with all compute types. ListDeploymentInstances throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda.    Lists the instance for a deployment associated with the user or Amazon Web Services account",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous list deployment instances call. It can be used to return the next set of deployment instances in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-status-filter",
          description:
            "A subset of instances to list by status:    Pending: Include those instances with pending deployments.    InProgress: Include those instances where deployments are still in progress.    Succeeded: Include those instances with successful deployments.    Failed: Include those instances with failed deployments.    Skipped: Include those instances with skipped deployments.    Unknown: Include those instances with deployments in an unknown state",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-type-filter",
          description:
            'The set of instances in a blue/green deployment, either those in the original environment ("BLUE") or those in the replacement environment ("GREEN"), for which you want to view instance information',
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
      name: "list-deployment-targets",
      description:
        "Returns an array of target IDs that are associated a deployment",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token identifier returned from the previous ListDeploymentTargets call. It can be used to return the next set of deployment targets in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-filters",
          description:
            "A key used to filter the returned targets. The two valid values are:    TargetStatus - A TargetStatus filter string can be Failed, InProgress, Pending, Ready, Skipped, Succeeded, or Unknown.     ServerInstanceLabel - A ServerInstanceLabel filter string can be Blue or Green",
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
      name: "list-deployments",
      description:
        "Lists the deployments in a deployment group for an application registered with the user or Amazon Web Services account",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account.  If applicationName is specified, then deploymentGroupName must be specified. If it is not specified, then deploymentGroupName must not be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-group-name",
          description:
            "The name of a deployment group for the specified application.  If deploymentGroupName is specified, then applicationName must be specified. If it is not specified, then applicationName must not be specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-id",
          description:
            "The unique ID of an external resource for returning deployments linked to the external resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-only-statuses",
          description:
            "A subset of deployments to list by status:    Created: Include created deployments in the resulting list.    Queued: Include queued deployments in the resulting list.    In Progress: Include in-progress deployments in the resulting list.    Succeeded: Include successful deployments in the resulting list.    Failed: Include failed deployments in the resulting list.    Stopped: Include stopped deployments in the resulting list",
          args: {
            name: "list",
          },
        },
        {
          name: "--create-time-range",
          description:
            "A time range (start and end) for returning a subset of the list of deployments",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous list deployments call. It can be used to return the next set of deployments in the list",
          args: {
            name: "string",
          },
        },
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
      name: "list-git-hub-account-token-names",
      description: "Lists the names of stored connections to GitHub accounts",
      options: [
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous ListGitHubAccountTokenNames call. It can be used to return the next set of names in the list",
          args: {
            name: "string",
          },
        },
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
      name: "list-on-premises-instances",
      description:
        "Gets a list of names for one or more on-premises instances. Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter",
      options: [
        {
          name: "--registration-status",
          description:
            "The registration status of the on-premises instances:    Deregistered: Include deregistered on-premises instances in the resulting list.    Registered: Include registered on-premises instances in the resulting list",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-filters",
          description:
            "The on-premises instance tags that are used to restrict the on-premises instance names returned",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous list on-premises instances call. It can be used to return the next set of on-premises instances in the list",
          args: {
            name: "string",
          },
        },
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of a CodeDeploy resource. ListTagsForResource returns all the tags associated with the resource that is identified by the ResourceArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier returned from the previous ListTagsForResource call. It can be used to return the next set of applications in the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-lifecycle-event-hook-execution-status",
      description:
        "Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are BeforeAllowTraffic and AfterAllowTraffic. For Amazon ECS deployments, the available lifecycle hooks are BeforeInstall, AfterInstall, AfterAllowTestTraffic, BeforeAllowTraffic, and AfterAllowTraffic. Lambda validation functions return Succeeded or Failed. For more information, see AppSpec 'hooks' Section for an Lambda Deployment  and AppSpec 'hooks' Section for an Amazon ECS Deployment",
      options: [
        {
          name: "--deployment-id",
          description:
            "The unique ID of a deployment. Pass this ID to a Lambda function that validates a deployment lifecycle event",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-event-hook-execution-id",
          description:
            "The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is specified in the hooks section of the AppSpec file",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The result of a Lambda function that validates a deployment lifecycle event. The values listed in Valid Values are valid for lifecycle statuses in general; however, only Succeeded and Failed can be passed successfully in your API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "register-application-revision",
      description:
        "Registers with CodeDeploy a revision for the specified application",
      options: [
        {
          name: "--application-name",
          description:
            "The name of an CodeDeploy application associated with the user or Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A comment about the revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision",
          description:
            "Information about the application revision to register, including type and location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-location",
          description:
            "Information about the location of the application revision in Amazon S3. You must specify the bucket, the key, and bundleType. Optionally, you can also specify an eTag and version",
          args: {
            name: "structure",
          },
        },
        {
          name: "--github-location",
          description:
            "Information about the location of the application revision in GitHub. You must specify the repository and commit ID that references the application revision. For the repository, use the format GitHub-account/repository-name or GitHub-org/repository-name. For the commit ID, use the SHA1 Git commit reference",
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
      name: "register-on-premises-instance",
      description:
        "Registers an on-premises instance.  Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both",
      options: [
        {
          name: "--instance-name",
          description: "The name of the on-premises instance to register",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-session-arn",
          description:
            "The ARN of the IAM session to associate with the on-premises instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-user-arn",
          description:
            "The ARN of the user to associate with the on-premises instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "remove-tags-from-on-premises-instances",
      description:
        "Removes one or more tags from one or more on-premises instances",
      options: [
        {
          name: "--tags",
          description:
            "The tag key-value pairs to remove from the on-premises instances",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-names",
          description:
            "The names of the on-premises instances from which to remove tags",
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
      name: "skip-wait-time-for-instance-termination",
      description:
        "In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete",
      options: [
        {
          name: "--deployment-id",
          description:
            "The unique ID of a blue/green deployment for which you want to skip the instance termination wait time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-deployment",
      description: "Attempts to stop an ongoing deployment",
      options: [
        {
          name: "--deployment-id",
          description: "The unique ID of a deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-rollback-enabled",
          description:
            "Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision",
        },
        {
          name: "--no-auto-rollback-enabled",
          description:
            "Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Associates the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of a resource, such as a CodeDeploy application or deployment group",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags that TagResource associates with a resource. The resource is identified by the ResourceArn input parameter",
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
        "Disassociates a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identified by the list of keys in the TagKeys input parameter",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that specifies from which resource to disassociate the tags with the keys in the TagKeys input parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of keys of Tag objects. The Tag objects identified by the keys are disassociated from the resource specified by the ResourceArn input parameter",
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
      name: "update-application",
      description: "Changes the name of an application",
      options: [
        {
          name: "--application-name",
          description: "The current name of the application you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-application-name",
          description: "The new name to give the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-deployment-group",
      description: "Changes information about a deployment group",
      options: [
        {
          name: "--application-name",
          description:
            "The application name that corresponds to the deployment group to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-deployment-group-name",
          description: "The current name of the deployment group",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-deployment-group-name",
          description:
            "The new name of the deployment group, if you want to change it",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-config-name",
          description:
            "The replacement deployment configuration name to use, if you want to change it",
          args: {
            name: "string",
          },
        },
        {
          name: "--ec2-tag-filters",
          description:
            "The replacement set of Amazon EC2 tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-premises-instance-tag-filters",
          description:
            "The replacement set of on-premises instance tags on which to filter, if you want to change them. To keep the existing tags, enter their names. To remove tags, do not enter any tag names",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-groups",
          description:
            'The replacement list of Auto Scaling groups to be included in the deployment group, if you want to change them.   To keep the Auto Scaling groups, enter their names or do not specify this parameter.    To remove Auto Scaling groups, specify a non-null empty list of Auto Scaling group names to detach all CodeDeploy-managed Auto Scaling lifecycle hooks. For examples, see Amazon EC2 instances in an Amazon EC2 Auto Scaling group fail to launch and receive the error "Heartbeat Timeout" in the CodeDeploy User Guide',
          args: {
            name: "list",
          },
        },
        {
          name: "--service-role-arn",
          description:
            "A replacement ARN for the service role, if you want to change it",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-configurations",
          description:
            "Information about triggers to change when the deployment group is updated. For examples, see Edit a Trigger in a CodeDeploy Deployment Group in the CodeDeploy User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--alarm-configuration",
          description:
            "Information to add or change about Amazon CloudWatch alarms when the deployment group is updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-rollback-configuration",
          description:
            "Information for an automatic rollback configuration that is added or changed when a deployment group is updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outdated-instances-strategy",
          description:
            "Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-style",
          description:
            "Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blue-green-deployment-configuration",
          description:
            "Information about blue/green deployment options for a deployment group",
          args: {
            name: "structure",
          },
        },
        {
          name: "--load-balancer-info",
          description:
            "Information about the load balancer used in a deployment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ec2-tag-set",
          description:
            "Information about groups of tags applied to on-premises instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ecs-services",
          description:
            "The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>",
          args: {
            name: "list",
          },
        },
        {
          name: "--on-premises-tag-set",
          description:
            "Information about an on-premises instance tag set. The deployment group includes only on-premises instances identified by all the tag groups",
          args: {
            name: "structure",
          },
        },
        {
          name: "--termination-hook-enabled",
          description:
            "This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see Integrating CodeDeploy with Amazon EC2 Auto Scaling in the CodeDeploy User Guide. Set terminationHookEnabled to true to have CodeDeploy install a termination hook into your Auto Scaling group when you update a deployment group. When this hook is installed, CodeDeploy will perform termination deployments. For information about termination deployments, see Enabling termination deployments during Auto Scaling scale-in events in the CodeDeploy User Guide. For more information about Auto Scaling scale-in events, see the Scale in topic in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--no-termination-hook-enabled",
          description:
            "This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see Integrating CodeDeploy with Amazon EC2 Auto Scaling in the CodeDeploy User Guide. Set terminationHookEnabled to true to have CodeDeploy install a termination hook into your Auto Scaling group when you update a deployment group. When this hook is installed, CodeDeploy will perform termination deployments. For information about termination deployments, see Enabling termination deployments during Auto Scaling scale-in events in the CodeDeploy User Guide. For more information about Auto Scaling scale-in events, see the Scale in topic in the Amazon EC2 Auto Scaling User Guide",
        },
        {
          name: "--ec-2-tag-set",
          description:
            "Information about groups of tags applied to on-premises instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups",
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
      name: "push",
      description:
        "Bundles and uploads to Amazon Simple Storage Service (Amazon S3) an application revision, which is a zip archive file that contains deployable content and an accompanying Application Specification file (AppSpec file). If the upload is successful, a message is returned that describes how to call the create-deployment command to deploy the application revision from Amazon S3 to target Amazon Elastic Compute Cloud (Amazon EC2) instances",
      options: [
        {
          name: "--application-name",
          description:
            "Required. The name of the AWS CodeDeploy application to be associated with the application revision",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-location",
          description:
            "Required. Information about the location of the application revision to be uploaded to Amazon S3. You must specify both a bucket and a key that represent the Amazon S3 bucket name and the object key name. Content will be zipped before uploading. Use the format s3:///",
          args: {
            name: "string",
          },
        },
        {
          name: "--ignore-hidden-files",
          description:
            "Optional. Set the --ignore-hidden-files flag to not bundle and upload hidden files to Amazon S3; otherwise, set the --no-ignore-hidden-files flag (the default) to bundle and upload hidden files to Amazon S3",
        },
        {
          name: "--no-ignore-hidden-files",
        },
        {
          name: "--source",
          description:
            "Optional. The location of the deployable content and the accompanying AppSpec file on the development machine to be zipped and uploaded to Amazon S3. If not specified, the current directory is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Optional. A comment that summarizes the application revision. If not specified, the default string \"Uploaded by AWS CLI 'time' UTC\" is used, where 'time' is the current system time in Coordinated Universal Time (UTC)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "register",
      description:
        "Creates an IAM user for the on-premises instance, if not provided, and saves the user's credentials to an on-premises instance configuration file; registers the on-premises instance with AWS CodeDeploy; and optionally adds tags to the on-premises instance",
      options: [
        {
          name: "--instance-name",
          description: "Required. The name of the on-premises instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Optional. The list of key/value pairs to tag the on-premises instance",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--iam-user-arn",
          description:
            "Optional. The IAM user associated with the on-premises instance",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "deregister",
      description:
        "Removes any tags from the on-premises instance; deregisters the on-premises instance from AWS CodeDeploy; and, unless requested otherwise, deletes the IAM user for the on-premises instance",
      options: [
        {
          name: "--instance-name",
          description: "Required. The name of the on-premises instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--no-delete-iam-user",
          description:
            "Optional. Do not delete the IAM user for the registered on-premises instance",
        },
      ],
    },
    {
      name: "install",
      description:
        "Configures and installs the AWS CodeDeploy Agent on the on-premises instance",
      options: [
        {
          name: "--config-file",
          description:
            "Required. The path to the on-premises instance configuration file",
          args: {
            name: "string",
          },
        },
        {
          name: "--override-config",
          description:
            "Optional. Overrides the on-premises instance configuration file",
        },
        {
          name: "--agent-installer",
          description: "Optional. The AWS CodeDeploy Agent installer file",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description:
        "Uninstalls the AWS CodeDeploy Agent from the on-premises instance",
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "deployment-successful",
          description:
            "Wait until JMESPath query deploymentInfo.status returns Succeeded when polling with ``get-deployment``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks",
          options: [
            {
              name: "--deployment-id",
              description:
                "The unique ID of a deployment associated with the user or Amazon Web Services account",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
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
