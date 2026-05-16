const tags = ["TAGS"];
const launchTypes = ["EC2", "FARGATE", "EXTERNAL"];
const schedulingStrategy = ["REPLICA", "DAEMON"];
const tagsToPropagate = ["TASK_DEFINITION", "SERVICE"];
const clusterInformation = [
  "ATTACHMENTS",
  "CONFIGURATIONS",
  "SETTINGS",
  "STATISTICS",
  "TAGS",
];
const accountSettingsResourceNames = [
  "serviceLongArnFormat",
  "taskLongArnFormat",
  "containerInstanceLongArnFormat",
  "awsvpcTrunking",
  "containerInsights",
];
const status = [
  "ACTIVE",
  "DRAINING",
  "REGISTERING",
  "DEREGISTERING",
  "REGISTRATION_FAILED",
];
const taskDefinitionFamilyStatus = ["ACTIVE", "INACTIVE", "ALL"];
const postPrecessGenerator = (
  out: string,
  parentKey: string,
  childKey = ""
): Fig.Suggestion[] => {
  try {
    const list = JSON.parse(out)[parentKey];
    if (!Array.isArray(list)) {
      return [
        {
          name: list[childKey],
          icon: "fig://icon?type=aws",
        },
      ];
    }
    return list.map((resource) => {
      const name = (childKey ? resource[childKey] : resource) as string;
      return {
        name,
        icon: "fig://icon?type=aws",
      };
    });
  } catch (e) {
    console.log(e);
  }
  return [];
};
const customGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["ecs", command];
    for (const option of options) {
      const idx = tokens.indexOf(option);
      if (idx < 0) {
        continue;
      }
      const param = tokens[idx + 1];
      args = [...args, option, param];
    }
    const { stdout } = await executeShellCommand({
      command: "aws",
      args,
    });
    const list = JSON.parse(stdout)[parentKey];
    if (!Array.isArray(list)) {
      return [
        {
          name: list[childKey],
          icon: "fig://icon?type=aws",
        },
      ];
    }
    return list.map((resource) => {
      const name = (childKey ? resource[childKey] : resource) as string;
      return {
        name,
        icon: "fig://icon?type=aws",
      };
    });
  } catch (e) {
    console.log(e);
  }
  return [];
};
const MultiSuggestionsGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  enabled: {
    command: string[];
    parentKey: string;
    childKey: string;
  }[]
) => {
  try {
    const list: Fig.Suggestion[][] = [];
    const promises: Promise<string>[] = [];
    for (let i = 0; i < enabled.length; i++) {
      promises[i] = executeShellCommand({
        command: "aws",
        args: enabled[i].command,
      }).then(({ stdout }) => stdout);
    }
    const result = await Promise.all(promises);
    for (let i = 0; i < enabled.length; i++) {
      list[i] = postPrecessGenerator(
        result[i],
        enabled[i].parentKey,
        enabled[i].childKey
      );
    }
    return list.flat();
  } catch (e) {
    console.log(e);
  }
  return [];
};
const _prefixFile = "file://";
const appendFolderPath = (tokens: string[], prefix: string): string[] => {
  const baseLsCommand = ["ls", "-1ApL"];
  let whatHasUserTyped = tokens[tokens.length - 1];
  if (!whatHasUserTyped.startsWith(prefix)) {
    return ["echo", prefix];
  }
  whatHasUserTyped = whatHasUserTyped.slice(prefix.length);
  let folderPath = "";
  const lastSlashIndex = whatHasUserTyped.lastIndexOf("/");
  if (lastSlashIndex > -1) {
    if (whatHasUserTyped.startsWith("/") && lastSlashIndex === 0) {
      folderPath = "/";
    } else {
      folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
    }
  }
  return [...baseLsCommand, folderPath];
};
const postProcessFiles = (out: string, prefix: string): Fig.Suggestion[] => {
  if (out.trim() === prefix) {
    return [
      {
        name: prefix,
        insertValue: prefix,
      },
    ];
  }
  return sortSuggestions(out.split("\n"), false);
};
const triggerPrefix = (
  newToken: string,
  oldToken: string,
  prefix: string
): boolean => {
  if (!newToken.startsWith(prefix)) {
    if (!oldToken) return false;
    return oldToken.startsWith(prefix);
  }
  return newToken.lastIndexOf("/") !== oldToken.lastIndexOf("/");
};
const filterWithPrefix = (token: string, prefix: string): string => {
  if (!token.startsWith(prefix)) return token;
  return token.slice(token.lastIndexOf("/") + 1);
};
const sortSuggestions = (arr: string[], isS3?: boolean): Fig.Suggestion[] => {
  const sortFnStrings = (a, b) => {
    return a.localeCompare(b);
  };
  const alphabeticalSortFilesAndFolders = (arr) => {
    const dots_arr = [];
    const other_arr = [];
    arr.map((fsObject) => {
      if (fsObject.toLowerCase() == ".ds_store") return;
      if (fsObject.slice(0, 1) === ".") {
        dots_arr.push(fsObject);
      } else {
        other_arr.push(fsObject);
      }
    });
    if (isS3) {
      return [
        ...other_arr.sort(sortFnStrings),
        ...dots_arr.sort(sortFnStrings),
      ];
    }
    return [
      ...other_arr.sort(sortFnStrings),
      "../",
      ...dots_arr.sort(sortFnStrings),
    ];
  };
  const temp_array = alphabeticalSortFilesAndFolders(arr);
  const final_array = [];
  temp_array.forEach((item) => {
    if (item !== "" && item !== null) {
      const outputType = item.slice(-1) === "/" ? "folder" : "file";
      final_array.push({
        type: outputType,
        name: item,
        insertValue: item,
      });
    }
  });
  return final_array;
};
const generators = {
  listFiles: {
    script: (tokens) => {
      return appendFolderPath(tokens, _prefixFile);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFile);
    },
    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFile);
    },
    getQueryTerm: (token) => {
      return filterWithPrefix(token, _prefixFile);
    },
  },
  listCapacityProviders: {
    script: ["aws", "ecs", "describe-capacity-providers"],
    postProcess: (out) =>
      postPrecessGenerator(out, "capacityProviders", "name"),
  },
  listClusters: {
    script: ["aws", "ecs", "list-clusters"],
    postProcess: (out) => postPrecessGenerator(out, "clusterArns"),
  },
  listTaskDefinitions: {
    script: ["aws", "ecs", "list-task-definitions"],
    postProcess: (out) => postPrecessGenerator(out, "taskDefinitionArns"),
  },
  listTaskSets: {
    custom: (out, executeShellCommand) =>
      customGenerator(
        out,
        executeShellCommand,
        "describe-task-sets",
        ["--cluster", "--service"],
        "taskSets",
        "taskSetArn"
      ),
  },
  listRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => postPrecessGenerator(out, "Roles", "RoleName"),
  },
  listServices: {
    script: ["aws", "ecs", "list-services"],
    postProcess: (out) => postPrecessGenerator(out, "serviceArns"),
  },
  listUsers: {
    script: ["aws", "iam", "list-users"],
    postProcess: (out) => postPrecessGenerator(out, "Users", "Arn"),
  },
  listContainerInstances: {
    script: ["aws", "ecs", "list-container-instances"],
    postProcess: (out) => postPrecessGenerator(out, "containerInstanceArns"),
  },
  listTasks: {
    script: ["aws", "ecs", "list-tasks"],
    postProcess: (out) => postPrecessGenerator(out, "taskArns"),
  },
  listAttributeNames: {
    script: [
      "aws",
      "ecs",
      "list-attributes",
      "--target-type",
      "container-instance",
    ],
    postProcess: (out) => postPrecessGenerator(out, "attributes", "name"),
  },
  listAttributeValueForName: {
    custom: (out, executeShellCommand) =>
      customGenerator(
        out,
        executeShellCommand,
        "list-attributes --target-type container-instance",
        ["--attribute-name"],
        "attributes",
        "value"
      ),
  },
  listTaskDefinitionFamilies: {
    script: ["aws", "ecs", "list-task-definition-families"],
    postProcess: (out) => postPrecessGenerator(out, "families"),
  },
  listStartedBy: {
    custom: async (tokens, executeShellCommand) => {
      const out = await executeShellCommand("aws ecs list-tasks");
      const list = JSON.parse(out)["taskArns"];
      const tasks = list.map((arn) => ({
        command: ["ecs", "describe-tasks", "--tasks", arn],
        parentKey: "tasks",
        childKey: "startedBy",
      }));
      return MultiSuggestionsGenerator(tokens, executeShellCommand, [...tasks]);
    },
  },
  listTaskGroups: {
    custom: async (tokens, executeShellCommand) => {
      const idx = tokens.indexOf("--cluster");
      if (idx < 0) {
        return;
      }
      const param = tokens[idx + 1];
      const out = await executeShellCommand(
        `aws ecs list-tasks --cluster ${param}`
      );
      const list = JSON.parse(out)["taskArns"];
      const tasks = list.map((arn) => ({
        command: ["ecs", "describe-tasks", "--tasks", arn],
        parentKey: "tasks",
        childKey: "group",
      }));
      return MultiSuggestionsGenerator(tokens, executeShellCommand, [...tasks]);
    },
  },
  listTagsForResource: {
    custom: (out, executeShellCommand) =>
      customGenerator(
        out,
        executeShellCommand,
        "list-tags-for-resource",
        ["--resource-arn"],
        "tags",
        "key"
      ),
  },
  listCodedeployApplications: {
    script: ["aws", "deploy", "list-applications"],
    postProcess: (out) => postPrecessGenerator(out, "applications"),
  },
  listCodedeployDeploymentGroups: {
    custom: async (tokens, executeShellCommand) => {
      try {
        const idx = tokens.indexOf("--codedeploy-application");
        if (idx < 0) {
          return;
        }
        const param = tokens[idx + 1];
        const out = await executeShellCommand(
          `aws deploy list-deployment-groups --application-name ${param}`
        );
        const list = JSON.parse(out)["deploymentGroups"];
        return list.map((group) => {
          return {
            name: group,
            icon: "fig://icon?type=aws",
          };
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
const completionSpec: Fig.Spec = {
  name: "ecs",
  description:
    "Amazon Elastic Container Service Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes it easy to run, stop, and manage Docker containers. You can host your cluster on a serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) or External (on-premises) instances that you manage. Amazon ECS makes it easy to launch and stop container-based applications with simple API calls. This makes it easy to get the state of your cluster from a centralized service, and gives you access to many familiar Amazon EC2 features. You can use Amazon ECS to schedule the placement of containers across your cluster based on your resource needs, isolation policies, and availability requirements. With Amazon ECS, you don't need to operate your own cluster management and configuration management systems. You also don't need to worry about scaling your management infrastructure",
  subcommands: [
    {
      name: "create-capacity-provider",
      description:
        "Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling. Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the FARGATE and FARGATE_SPOT capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports",
      options: [
        {
          name: "--name",
          description:
            'The name of the capacity provider. Up to 255 characters are allowed. They include letters (both upper and lowercase letters), numbers, underscores (_), and hyphens (-). The name can\'t be prefixed with "aws", "ecs", or "fargate"',
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-group-provider",
          description:
            "The details of the Auto Scaling group for the capacity provider",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the capacity provider to categorize and organize them more conveniently. Each tag consists of a key and an optional value. You define both of them. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-cluster",
      description:
        "Creates a new Amazon ECS cluster. By default, your account receives a default cluster when you launch your first container instance. However, you can create your own cluster with a unique name.  When you call the CreateCluster API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster-name",
          description:
            "The name of your cluster. If you don't specify a name for your cluster, you create a cluster that's named default. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--settings",
          description:
            "The setting to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. If this value is specified, it overrides the containerInsights value set with PutAccountSetting or PutAccountSettingDefault",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "name=containerInsights,value=enabled",
              "name=containerInsights,value=disabled",
            ],
          },
        },
        {
          name: "--configuration",
          description: "The execute command configuration for the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--capacity-providers",
          description:
            "The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the CreateService or RunTask actions. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the CreateCapacityProvider API operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used. The PutCapacityProvider API operation is used to update the list of available capacity providers for a cluster after the cluster is created",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listCapacityProviders,
          },
        },
        {
          name: "--default-capacity-provider-strategy",
          description:
            "The capacity provider strategy to set as the default for the cluster. After a default capacity provider strategy is set for a cluster, when you call the CreateService or RunTask APIs with no capacity provider strategy or launch type specified, the default capacity provider strategy for the cluster is used. If a default capacity provider strategy isn't defined for a cluster when it was created, it can be defined later with the PutClusterCapacityProviders API operation",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--service-connect-defaults",
          description:
            "Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the enabled parameter to true in the ServiceConnectConfiguration. You can set the namespace of each service individually in the ServiceConnectConfiguration to override this default parameter. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-service",
      description:
        "Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the desiredCount, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, use UpdateService.  On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.   Amazon Elastic Inference (EI) is no longer available to customers.  In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see Service load balancing in the Amazon Elastic Container Service Developer Guide. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. volumeConfigurations is only supported for REPLICA service and not DAEMON service. For more infomation, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. Tasks for services that don't use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. There are two service scheduler strategies available:    REPLICA - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see Service scheduler concepts in the Amazon Elastic Container Service Developer Guide.    DAEMON - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see Service scheduler concepts in the Amazon Elastic Container Service Developer Guide.   You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. You can use UpdateService. The default value for a replica service for minimumHealthyPercent is 100%. The default value for a daemon service for minimumHealthyPercent is 0%. If a service uses the ECS deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the RUNNING state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the RUNNING state, tasks for services that don't use a load balancer are considered healthy . If they're in the RUNNING state and reported as healthy by the load balancer, tasks for services that do use a load balancer are considered healthy . The default value for minimum healthy percent is 100%. If a service uses the ECS deployment controller, the maximum percent parameter represents an upper limit on the number of tasks in a service that are allowed in the RUNNING or PENDING state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the DRAINING state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%. If a service uses either the CODE_DEPLOY or EXTERNAL deployment controller types and tasks that use the EC2 launch type, the minimum healthy percent and maximum percent values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the RUNNING state. This is while the container instances are in the DRAINING state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service. When creating a service that uses the EXTERNAL deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the CreateTaskSet. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide. When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see Amazon ECS task placement in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--service-name",
          description:
            "The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-definition",
          description:
            "The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision isn't specified, the latest ACTIVE revision is used. A task definition must be specified if the service uses either the ECS or CODE_DEPLOY deployment controllers. For more information about deployment types, see Amazon ECS deployment types",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--availability-zone-rebalancing",
          description:
            "Indicates whether to use Availability Zone rebalancing for the service. For more information, see Balancing an Amazon ECS service across Availability Zones in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--load-balancers",
          description:
            "A load balancer object representing the load balancers to use with your service. For more information, see Service load balancing in the Amazon Elastic Container Service Developer Guide. If the service uses the rolling update (ECS) deployment controller and using either an Application Load Balancer or Network Load Balancer, you must specify one or more target group ARNs to attach to the service. The service-linked role is required for services that use multiple target groups. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide. If the service uses the CODE_DEPLOY deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When creating an CodeDeploy deployment group, you specify two target groups (referred to as a targetGroupPair). During a deployment, CodeDeploy determines which task set in your service has the status PRIMARY, and it associates one target group with it. Then, it also associates the other target group with the replacement task set. The load balancer can also have up to two listeners: a required listener for production traffic and an optional listener that you can use to perform validation tests with Lambda functions before routing production traffic to it. If you use the CODE_DEPLOY deployment controller, these values can be changed when updating the service. For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name, and the container port to access from the load balancer. The container name must be as it appears in a container definition. The load balancer name parameter must be omitted. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group that's specified here. For Classic Load Balancers, this object must contain the load balancer name, the container name , and the container port to access from the load balancer. The container name must be as it appears in a container definition. The target group ARN parameter must be omitted. When a task from this service is placed on a container instance, the container instance is registered with the load balancer that's specified here. Services with tasks that use the awsvpc network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers aren't supported. Also, when you create any target groups for these services, you must choose ip as the target type, not instance. This is because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--service-registries",
          description:
            "The details of the service discovery registry to associate with this service. For more information, see Service discovery.  Each service may be associated with one service registry. Multiple service registries for each service isn't supported",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--desired-count",
          description:
            "The number of instantiations of the specified task definition to place and keep running in your service. This is required if schedulingStrategy is REPLICA or isn't specified. If schedulingStrategy is DAEMON then this isn't required",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed",
          args: {
            name: "string",
          },
        },
        {
          name: "--launch-type",
          description:
            "The infrastructure that you run your service on. For more information, see Amazon ECS launch types in the Amazon Elastic Container Service Developer Guide. The FARGATE launch type runs your tasks on Fargate On-Demand infrastructure.  Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see Fargate capacity providers in the Amazon ECS Developer Guide.  The EC2 launch type runs your tasks on Amazon EC2 instances registered to your cluster. The EXTERNAL launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster. A service can use either a launch type or a capacity provider strategy. If a launchType is specified, the capacityProviderStrategy parameter must be omitted",
          args: {
            name: "string",
            suggestions: launchTypes,
          },
        },
        {
          name: "--capacity-provider-strategy",
          description:
            "The capacity provider strategy to use for the service. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. A capacity provider strategy can contain a maximum of 20 capacity providers",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--platform-version",
          description:
            "The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used. For more information, see Fargate platform versions in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the awsvpc network mode. If you specify the role parameter, you must also specify a load balancer object with the loadBalancers parameter.  If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the awsvpc network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide.  If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name bar has a path of /foo/ then you would specify /foo/bar as the role name. For more information, see Friendly names and paths in the IAM User Guide",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--deployment-configuration",
          description:
            "Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks",
          args: {
            name: "structure",
            isVariadic: true,
          },
        },
        {
          name: "--placement-constraints",
          description:
            "An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--placement-strategy",
          description:
            "The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--network-configuration",
          description:
            "The network configuration for the service. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see Task networking in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--health-check-grace-period-seconds",
          description:
            "The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't specify a health check grace period value, the default value of 0 is used. If you don't use any of the health checks, then healthCheckGracePeriodSeconds is unused. If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up",
          args: {
            name: "integer",
          },
        },
        {
          name: "--scheduling-strategy",
          description:
            "The scheduling strategy to use for the service. For more information, see Services. There are two service scheduler strategies available:    REPLICA-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the CODE_DEPLOY or EXTERNAL deployment controller types.    DAEMON-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.  Tasks using the Fargate launch type or the CODE_DEPLOY or EXTERNAL deployment controller types don't support the DAEMON scheduling strategy",
          args: {
            name: "string",
            suggestions: ["REPLICA", "DAEMON"],
          },
        },
        {
          name: "--deployment-controller",
          description:
            "The deployment controller to use for the service. If no deployment controller is specified, the default value of ECS is used",
          args: {
            name: "structure",
            suggestions: ["type=ECS", "type=CODE_DEPLOY", "type=EXTERNAL"],
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--enable-ecs-managed-tags",
          description:
            "Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see Tagging your Amazon ECS resources in the Amazon Elastic Container Service Developer Guide. When you use Amazon ECS managed tags, you need to set the propagateTags request parameter",
        },
        {
          name: "--no-enable-ecs-managed-tags",
          description:
            "Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see Tagging your Amazon ECS resources in the Amazon Elastic Container Service Developer Guide. When you use Amazon ECS managed tags, you need to set the propagateTags request parameter",
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action. You must set this to a value other than NONE when you use Cost Explorer. For more information, see Amazon ECS usage reports in the Amazon Elastic Container Service Developer Guide. The default is NONE",
          args: {
            name: "string",
            suggestions: ["TASK_DEFINITION", "SERVICE"],
          },
        },
        {
          name: "--enable-execute-command",
          description:
            "Determines whether the execute command functionality is turned on for the service. If true, this enables execute command functionality on all containers in the service tasks",
        },
        {
          name: "--service-connect-configuration",
          description:
            "The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--volume-configurations",
          description:
            "The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-lattice-configurations",
          description:
            "The VPC Lattice configuration for the service being created",
          args: {
            name: "list",
          },
        },
        {
          name: "--disable-execute-command",
          description:
            "Determines whether the execute command functionality is turned on for the service. If true, this enables execute command functionality on all containers in the service tasks",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-task-set",
      description:
        "Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide.  On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.  For information about the maximum number of task sets and other quotas, see Amazon ECS service quotas in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--service",
          description:
            "The short name or full Amazon Resource Name (ARN) of the service to create the task set in",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--external-id",
          description:
            "An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID Cloud Map attribute set to the provided value",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-definition",
          description:
            "The task definition for the tasks in the task set to use. If a revision isn't specified, the latest ACTIVE revision is used",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--network-configuration",
          description:
            "An object representing the network configuration for a task set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--load-balancers",
          description:
            "A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--service-registries",
          description:
            "The details of the service discovery registries to assign to this task set. For more information, see Service discovery",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--launch-type",
          description:
            "The launch type that new tasks in the task set uses. For more information, see Amazon ECS launch types in the Amazon Elastic Container Service Developer Guide. If a launchType is specified, the capacityProviderStrategy parameter must be omitted",
          args: {
            name: "string",
            suggestions: launchTypes,
          },
        },
        {
          name: "--capacity-provider-strategy",
          description:
            "The capacity provider strategy to use for the task set. A capacity provider strategy consists of one or more capacity providers along with the base and weight to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The PutClusterCapacityProviders API is used to associate a capacity provider with a cluster. Only capacity providers with an ACTIVE or UPDATING status can be used. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the CreateCapacityProviderProviderAPI operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used. The PutClusterCapacityProviders API operation is used to update the list of available capacity providers for a cluster after the cluster is created",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--platform-version",
          description:
            "The platform version that the tasks in the task set uses. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--scale",
          description:
            "A floating-point percentage of the desired number of tasks to place and keep running in the task set",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. When a service is deleted, the tags are deleted. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-account-setting",
      description:
        "Disables an account setting for a specified user, role, or the root user for an account",
      options: [
        {
          name: "--name",
          description:
            "The resource name to disable the account setting for. If serviceLongArnFormat is specified, the ARN for your Amazon ECS services is affected. If taskLongArnFormat is specified, the ARN and resource ID for your Amazon ECS tasks is affected. If containerInstanceLongArnFormat is specified, the ARN and resource ID for your Amazon ECS container instances is affected. If awsvpcTrunking is specified, the ENI limit for your Amazon ECS container instances is affected",
          args: {
            name: "string",
            suggestions: accountSettingsResourceNames,
          },
        },
        {
          name: "--principal-arn",
          description:
            "The Amazon Resource Name (ARN) of the principal. It can be an user, role, or the root user. If you specify the root user, it disables the account setting for all users, roles, and the root user of the account unless a user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user",
          args: {
            name: "string",
            generators: [generators.listRoles, generators.listUsers],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listUsers,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-attributes",
      description:
        "Deletes one or more custom attributes from an Amazon ECS resource",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to delete attributes. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--attributes",
          description:
            "The attributes to delete from your resource. You can specify up to 10 attributes for each request. For custom attributes, specify the attribute name and target ID, but don't specify the value. If you specify the target ID using the short form, you must also specify the target type",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-capacity-provider",
      description:
        "Deletes the specified capacity provider.  The FARGATE and FARGATE_SPOT capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either PutClusterCapacityProviders or by deleting the cluster.  Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The UpdateService API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the forceNewDeployment option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use PutClusterCapacityProviders or delete the cluster",
      options: [
        {
          name: "--capacity-provider",
          description:
            "The short name or full Amazon Resource Name (ARN) of the capacity provider to delete",
          args: {
            name: "string",
            generators: generators.listCapacityProviders,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-cluster",
      description:
        "Deletes the specified cluster. The cluster transitions to the INACTIVE state. Clusters with an INACTIVE status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on INACTIVE clusters persisting. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with ListContainerInstances and deregister them with DeregisterContainerInstance",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to delete",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-service",
      description:
        "Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService.  When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in the ListServices API operation. After all tasks have transitioned to either STOPPING or STOPPED status, the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with the DescribeServices API operation. However, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices calls on those services return a ServiceNotFoundException error.   If you attempt to create a new service with the same name as an existing service in either ACTIVE or DRAINING status, you receive an error",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to delete. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--service",
          description: "The name of the service to delete",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--force",
          description:
            "If true, allows you to delete a service even if it wasn't scaled down to zero tasks. It's only necessary to use this if the service uses the REPLICA scheduling strategy",
        },
        {
          name: "--no-force",
          description:
            "If true, allows you to delete a service even if it wasn't scaled down to zero tasks. It's only necessary to use this if the service uses the REPLICA scheduling strategy",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-task-definitions",
      description:
        "Deletes one or more task definitions. You must deregister a task definition revision before you delete it. For more information, see DeregisterTaskDefinition. When you delete a task definition revision, it is immediately transitions from the INACTIVE to DELETE_IN_PROGRESS. Existing tasks and services that reference a DELETE_IN_PROGRESS task definition revision continue to run without disruption. Existing services that reference a DELETE_IN_PROGRESS task definition revision can still scale up or down by modifying the service's desired count. You can't use a DELETE_IN_PROGRESS task definition revision to run new tasks or create new services. You also can't update an existing service to reference a DELETE_IN_PROGRESS task definition revision.  A task definition revision will stay in DELETE_IN_PROGRESS status until all the associated tasks and services have been terminated. When you delete all INACTIVE task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the DELETE_IN_PROGRESS state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by Amazon ECS and the revision is incremented the next time you create a task definition with that name",
      options: [
        {
          name: "--task-definitions",
          description:
            "The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to delete. You must specify a revision. You can specify up to 10 task definitions as a comma separated list",
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
      name: "delete-task-set",
      description:
        "Deletes a specified task set within a service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set found in to delete",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--service",
          description:
            "The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to delete",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--task-set",
          description:
            "The task set ID or full Amazon Resource Name (ARN) of the task set to delete",
          args: {
            name: "string",
            generators: generators.listTaskSets,
          },
        },
        {
          name: "--force",
          description:
            "If true, you can delete a task set even if it hasn't been scaled down to zero",
        },
        {
          name: "--no-force",
          description:
            "If true, you can delete a task set even if it hasn't been scaled down to zero",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deregister-container-instance",
      description:
        "Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.  If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated)",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to deregister. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container-instance",
          description:
            "The container instance ID or full ARN of the container instance to deregister. For more information about the ARN format, see Amazon Resource Name (ARN) in the Amazon ECS Developer Guide",
          args: {
            name: "string",
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--force",
          description:
            "Forces the container instance to be deregistered. If you have tasks running on the container instance when you deregister it with the force option, these tasks remain running until you terminate the instance or the tasks stop through some other means, but they're orphaned (no longer monitored or accounted for by Amazon ECS). If an orphaned task on your container instance is part of an Amazon ECS service, then the service scheduler starts another copy of that task, on a different container instance if possible.  Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer target group are deregistered. They begin connection draining according to the settings on the load balancer or target group",
        },
        {
          name: "--no-force",
          description:
            "Forces the container instance to be deregistered. If you have tasks running on the container instance when you deregister it with the force option, these tasks remain running until you terminate the instance or the tasks stop through some other means, but they're orphaned (no longer monitored or accounted for by Amazon ECS). If an orphaned task on your container instance is part of an Amazon ECS service, then the service scheduler starts another copy of that task, on a different container instance if possible.  Any containers in orphaned service tasks that are registered with a Classic Load Balancer or an Application Load Balancer target group are deregistered. They begin connection draining according to the settings on the load balancer or target group",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deregister-task-definition",
      description:
        "Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision. You can't use an INACTIVE task definition to run new tasks or create new services, and you can't update an existing service to reference an INACTIVE task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.  At this time, INACTIVE task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on INACTIVE task definitions persisting beyond the lifecycle of any associated tasks and services.  You must deregister a task definition revision before you delete it. For more information, see DeleteTaskDefinitions",
      options: [
        {
          name: "--task-definition",
          description:
            "The family and revision (family:revision) or full Amazon Resource Name (ARN) of the task definition to deregister. You must specify a revision",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-capacity-providers",
      description: "Describes one or more of your capacity providers",
      options: [
        {
          name: "--capacity-providers",
          description:
            "The short name or full Amazon Resource Name (ARN) of one or more capacity providers. Up to 100 capacity providers can be described in an action",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listCapacityProviders,
          },
        },
        {
          name: "--include",
          description:
            "Specifies whether or not you want to see the resource tags for the capacity provider. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: tags,
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of account setting results returned by DescribeCapacityProviders in paginated output. When this parameter is used, DescribeCapacityProviders only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeCapacityProviders request with the returned nextToken value. This value can be between 1 and 10. If this parameter is not used, then DescribeCapacityProviders returns up to 10 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous paginated DescribeCapacityProviders request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-clusters",
      description:
        "Describes one or more of your clusters.  For CLI examples, see describe-clusters.rst on GitHub",
      options: [
        {
          name: "--clusters",
          description:
            "A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listClusters,
          },
        },
        {
          name: "--include",
          description:
            "Determines whether to include additional information about the clusters in the response. If this field is omitted, this information isn't included. If ATTACHMENTS is specified, the attachments for the container instances or tasks within the cluster are included, for example the capacity providers. If SETTINGS is specified, the settings for the cluster are included. If CONFIGURATIONS is specified, the configuration for the cluster is included. If STATISTICS is specified, the task and service count is included, separated by launch type. If TAGS is specified, the metadata tags associated with the cluster are included",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: clusterInformation,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-container-instances",
      description:
        "Describes one or more container instances. Returns metadata about each container instance requested",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the container instance or container instances you are describing were launched in any cluster other than the default cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container-instances",
          description:
            "A list of up to 100 container instance IDs or full Amazon Resource Name (ARN) entries",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--include",
          description:
            "Specifies whether you want to see the resource tags for the container instance. If TAGS is specified, the tags are included in the response. If CONTAINER_INSTANCE_HEALTH is specified, the container instance health is included in the response. If this field is omitted, tags and container instance health status aren't included in the response",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: tags,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-service-deployments",
      description:
        "Describes one or more of your service deployments. A service deployment happens when you release a software update for the service. For more information, see Amazon ECS service deployments",
      options: [
        {
          name: "--service-deployment-arns",
          description:
            "The ARN of the service deployment. You can specify a maximum of 20 ARNs",
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
      name: "describe-service-revisions",
      description:
        "Describes one or more service revisions. A service revision is a version of the service that includes the values for the Amazon ECS resources (for example, task definition) and the environment resources (for example, load balancers, subnets, and security groups). For more information, see Amazon ECS service revisions. You can't describe a service revision that was created before October 25, 2024",
      options: [
        {
          name: "--service-revision-arns",
          description:
            "The ARN of the service revision.  You can specify a maximum of 20 ARNs. You can call ListServiceDeployments to get the ARNs",
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
      name: "describe-services",
      description: "Describes the specified services running in your cluster",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--services",
          description:
            "A list of services to describe. You may specify up to 10 services to describe in a single operation",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listServices,
          },
        },
        {
          name: "--include",
          description:
            "Determines whether you want to see the resource tags for the service. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: tags,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-task-definition",
      description:
        "Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.  You can only describe INACTIVE task definitions while an active task or service references them",
      options: [
        {
          name: "--task-definition",
          description:
            "The family for the latest ACTIVE revision, family and revision (family:revision) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--include",
          description:
            "Determines whether to see the resource tags for the task definition. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: tags,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-task-sets",
      description:
        "Describes the task sets in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--service",
          description:
            "The short name or full Amazon Resource Name (ARN) of the service that the task sets exist in",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--task-sets",
          description:
            "The ID or full Amazon Resource Name (ARN) of task sets to describe",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listTaskSets,
          },
        },
        {
          name: "--include",
          description:
            "Specifies whether to see the resource tags for the task set. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: tags,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-tasks",
      description:
        "Describes a specified task or tasks. Currently, stopped tasks appear in the returned results for at least one hour. If you have tasks with tags, and then delete the cluster, the tagged tasks are returned in the response. If you create a new cluster with the same name as the deleted cluster, the tagged tasks are not included in the response",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required. If you do not specify a value, the default cluster is used",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--tasks",
          description: "A list of up to 100 task IDs or full ARN entries",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listTasks,
          },
        },
        {
          name: "--include",
          description:
            "Specifies whether you want to see the resource tags for the task. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: tags,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "discover-poll-endpoint",
      description:
        "This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Returns an endpoint for the Amazon ECS agent to poll for updates",
      options: [
        {
          name: "--container-instance",
          description:
            "The container instance ID or full ARN of the container instance. For more information about the ARN format, see Amazon Resource Name (ARN) in the Amazon ECS Developer Guide",
          args: {
            name: "string",
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that the container instance belongs to",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "execute-command",
      description:
        "Runs a command remotely on a container within a task. If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an AccessDeniedException when there is a mismatch between the condition key value and the corresponding parameter value. For information about required permissions and considerations, see Using Amazon ECS Exec for debugging in the Amazon ECS Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The Amazon Resource Name (ARN) or short name of the cluster the task is running in. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container",
          description:
            "The name of the container to execute the command on. A container name only needs to be specified for tasks containing multiple containers",
          args: {
            name: "string",
          },
        },
        {
          name: "--command",
          description: "The command to run on the container",
          args: {
            name: "string",
          },
        },
        {
          name: "--interactive",
          description: "Use this flag to run your command in interactive mode",
        },
        {
          name: "--task",
          description:
            "The Amazon Resource Name (ARN) or ID of the task the container is part of",
          args: {
            name: "string",
            generators: generators.listTasks,
          },
        },
        {
          name: "--non-interactive",
          description: "Use this flag to run your command in interactive mode",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-task-protection",
      description:
        "Retrieves the protection status of tasks in an Amazon ECS service",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in",
          args: {
            name: "string",
          },
        },
        {
          name: "--tasks",
          description: "A list of up to 100 task IDs or full ARN entries",
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
      name: "list-account-settings",
      description: "Lists the account settings for a specified principal",
      options: [
        {
          name: "--name",
          description:
            "The name of the account setting you want to list the settings for",
          args: {
            name: "string",
            suggestions: accountSettingsResourceNames,
          },
        },
        {
          name: "--value",
          description:
            "The value of the account settings to filter results with. You must also specify an account setting name to use this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description:
            "The ARN of the principal, which can be a user, role, or the root user. If this field is omitted, the account settings are listed only for the authenticated user.  Federated users assume the account setting of the root user and can't have explicit account settings set for them",
          args: {
            name: "string",
            generators: [generators.listRoles, generators.listUsers],
          },
        },
        {
          name: "--effective-settings",
          description:
            "Determines whether to return the effective settings. If true, the account settings for the root user or the default setting for the principalArn are returned. If false, the account settings for the principalArn are returned if they're set. Otherwise, no account settings are returned",
        },
        {
          name: "--no-effective-settings",
          description:
            "Determines whether to return the effective settings. If true, the account settings for the root user or the default setting for the principalArn are returned. If false, the account settings for the principalArn are returned if they're set. Otherwise, no account settings are returned",
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListAccountSettings request indicating that more results are available to fulfill the request and further calls will be needed. If maxResults was provided, it's possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of account setting results returned by ListAccountSettings in paginated output. When this parameter is used, ListAccountSettings only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListAccountSettings request with the returned nextToken value. This value can be between 1 and 10. If this parameter isn't used, then ListAccountSettings returns up to 10 results and a nextToken value if applicable",
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
            generators: generators.listFiles,
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
      name: "list-attributes",
      description:
        "Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, ListAttributes returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (ecs.os-type=linux)",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to list attributes. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--target-type",
          description: "The type of the target to list attributes with",
          args: {
            name: "string",
            suggestions: ["container-instance"],
          },
        },
        {
          name: "--attribute-name",
          description: "The name of the attribute to filter the results with",
          args: {
            name: "string",
            generators: generators.listAttributeNames,
          },
        },
        {
          name: "--attribute-value",
          description:
            "The value of the attribute to filter results with. You must also specify an attribute name to use this parameter",
          args: {
            name: "string",
            generators: generators.listAttributeValueForName,
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListAttributes request indicating that more results are available to fulfill the request and further calls are needed. If maxResults was provided, it's possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of cluster results that ListAttributes returned in paginated output. When this parameter is used, ListAttributes only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListAttributes request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListAttributes returns up to 100 results and a nextToken value if applicable",
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
            generators: generators.listFiles,
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
      name: "list-clusters",
      description: "Returns a list of existing clusters",
      options: [
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListClusters request indicating that more results are available to fulfill the request and further calls are needed. If maxResults was provided, it's possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of cluster results that ListClusters returned in paginated output. When this parameter is used, ListClusters only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListClusters returns up to 100 results and a nextToken value if applicable",
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
            generators: generators.listFiles,
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
      name: "list-container-instances",
      description:
        "Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instances to list. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--filter",
          description:
            "You can filter the results of a ListContainerInstances operation with cluster query language statements. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListContainerInstances request indicating that more results are available to fulfill the request and further calls are needed. If maxResults was provided, it's possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of container instance results that ListContainerInstances returned in paginated output. When this parameter is used, ListContainerInstances only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListContainerInstances request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListContainerInstances returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description:
            "Filters the container instances by status. For example, if you specify the DRAINING status, the results include only container instances that have been set to DRAINING using UpdateContainerInstancesState. If you don't specify this parameter, the default is to include container instances set to all states other than INACTIVE",
          args: {
            name: "string",
            suggestions: status,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "list-service-deployments",
      description:
        "This operation lists all the service deployments that meet the specified filter criteria. A service deployment happens when you release a softwre update for the service. You route traffic from the running service revisions to the new service revison and control the number of running tasks.  This API returns the values that you use for the request parameters in DescribeServiceRevisions",
      options: [
        {
          name: "--service",
          description: "The ARN or name of the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--cluster",
          description:
            "The cluster that hosts the service. This can either be the cluster name or ARN. Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performanceIf you don't specify a cluster, default is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "An optional filter you can use to narrow the results. If you do not specify a status, then all status values are included in the result",
          args: {
            name: "list",
          },
        },
        {
          name: "--created-at",
          description:
            "An optional filter you can use to narrow the results by the service creation date. If you do not specify a value, the result includes all services created before the current time. The format is yyyy-MM-dd HH:mm:ss.SSSSSS",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListServiceDeployments request indicating that more results are available to fulfill the request and further calls are needed. If you provided maxResults, it's possible the number of results is fewer than maxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of service deployment results that ListServiceDeployments returned in paginated output. When this parameter is used, ListServiceDeployments only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListServiceDeployments request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListServiceDeployments returns up to 20 results and a nextToken value if applicable",
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
      name: "list-services",
      description:
        "Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the ListServices results. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListServices request indicating that more results are available to fulfill the request and further calls will be needed. If maxResults was provided, it is possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of service results that ListServices returned in paginated output. When this parameter is used, ListServices only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListServices request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListServices returns up to 10 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--launch-type",
          description:
            "The launch type to use when filtering the ListServices results",
          args: {
            name: "string",
            suggestions: launchTypes,
          },
        },
        {
          name: "--scheduling-strategy",
          description:
            "The scheduling strategy to use when filtering the ListServices results",
          args: {
            name: "string",
            suggestions: schedulingStrategy,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "list-services-by-namespace",
      description:
        "This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, ListServices can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use ListServices. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--namespace",
          description:
            "The namespace name or full Amazon Resource Name (ARN) of the Cloud Map namespace to list the services in. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value that's returned from a ListServicesByNamespace request. It indicates that more results are available to fulfill the request and further calls are needed. If maxResults is returned, it is possible the number of results is less than maxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of service results that ListServicesByNamespace returns in paginated output. When this parameter is used, ListServicesByNamespace only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListServicesByNamespace request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListServicesByNamespace returns up to 10 results and a nextToken value if applicable",
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
      name: "list-tags-for-resource",
      description: "List the tags for an Amazon ECS resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon ECS tasks, services, task definitions, clusters, and container instances",
          args: {
            name: "string",
            generators: [
              generators.listTasks,
              generators.listTaskDefinitions,
              generators.listClusters,
              generators.listServices,
              generators.listContainerInstances,
            ],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-task-definition-families",
      description:
        "Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any ACTIVE task definition revisions. You can filter out task definition families that don't contain any ACTIVE task definition revisions by setting the status parameter to ACTIVE. You can also filter the results with the familyPrefix parameter",
      options: [
        {
          name: "--family-prefix",
          description:
            "The familyPrefix is a string that's used to filter the results of ListTaskDefinitionFamilies. If you specify a familyPrefix, only task definition family names that begin with the familyPrefix string are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The task definition family status to filter the ListTaskDefinitionFamilies results with. By default, both ACTIVE and INACTIVE task definition families are listed. If this parameter is set to ACTIVE, only task definition families that have an ACTIVE task definition revision are returned. If this parameter is set to INACTIVE, only task definition families that do not have any ACTIVE task definition revisions are returned. If you paginate the resulting output, be sure to keep the status value constant in each subsequent request",
          args: {
            name: "string",
            suggestions: taskDefinitionFamilyStatus,
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListTaskDefinitionFamilies request indicating that more results are available to fulfill the request and further calls will be needed. If maxResults was provided, it is possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of task definition family results that ListTaskDefinitionFamilies returned in paginated output. When this parameter is used, ListTaskDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTaskDefinitionFamilies request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListTaskDefinitionFamilies returns up to 100 results and a nextToken value if applicable",
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
            generators: generators.listFiles,
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
      name: "list-task-definitions",
      description:
        "Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter",
      options: [
        {
          name: "--family-prefix",
          description:
            "The full family name to filter the ListTaskDefinitions results with. Specifying a familyPrefix limits the listed task definitions to task definition revisions that belong to that family",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The task definition status to filter the ListTaskDefinitions results with. By default, only ACTIVE task definitions are listed. By setting this parameter to INACTIVE, you can view task definitions that are INACTIVE as long as an active task or service still references them. If you paginate the resulting output, be sure to keep the status value constant in each subsequent request",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--sort",
          description:
            "The order to sort the results in. Valid values are ASC and DESC. By default, (ASC) task definitions are listed lexicographically by family name and in ascending numerical order by revision so that the newest task definitions in a family are listed last. Setting this parameter to DESC reverses the sort order on family name and revision. This is so that the newest task definitions in a family are listed first",
          args: {
            name: "string",
            suggestions: ["ASC", "DESC"],
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListTaskDefinitions request indicating that more results are available to fulfill the request and further calls will be needed. If maxResults was provided, it is possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of task definition results that ListTaskDefinitions returned in paginated output. When this parameter is used, ListTaskDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTaskDefinitions request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListTaskDefinitions returns up to 100 results and a nextToken value if applicable",
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
            generators: generators.listFiles,
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
      name: "list-tasks",
      description:
        "Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task. Recently stopped tasks might appear in the returned results",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to use when filtering the ListTasks results. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container-instance",
          description:
            "The container instance ID or full ARN of the container instance to use when filtering the ListTasks results. Specifying a containerInstance limits the results to tasks that belong to that container instance",
          args: {
            name: "string",
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--family",
          description:
            "The name of the task definition family to use when filtering the ListTasks results. Specifying a family limits the results to tasks that belong to that family",
          args: {
            name: "string",
            generators: generators.listTaskDefinitionFamilies,
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a ListTasks request indicating that more results are available to fulfill the request and further calls will be needed. If maxResults was provided, it's possible the number of results to be fewer than maxResults.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of task results that ListTasks returned in paginated output. When this parameter is used, ListTasks only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListTasks request with the returned nextToken value. This value can be between 1 and 100. If this parameter isn't used, then ListTasks returns up to 100 results and a nextToken value if applicable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--started-by",
          description:
            "The startedBy value to filter the task results with. Specifying a startedBy value limits the results to tasks that were started with that value. When you specify startedBy as the filter, it must be the only filter that you use",
          args: {
            name: "string",
            generators: generators.listStartedBy,
          },
        },
        {
          name: "--service-name",
          description:
            "The name of the service to use when filtering the ListTasks results. Specifying a serviceName limits the results to tasks that belong to that service",
          args: {
            name: "string",
          },
        },
        {
          name: "--desired-status",
          description:
            "The task desired status to use when filtering the ListTasks results. Specifying a desiredStatus of STOPPED limits the results to tasks that Amazon ECS has set the desired status to STOPPED. This can be useful for debugging tasks that aren't starting properly or have died or finished. The default status filter is RUNNING, which shows tasks that Amazon ECS has set the desired status to RUNNING.  Although you can filter results based on a desired status of PENDING, this doesn't return any results. Amazon ECS never sets the desired status of a task to that value (only a task's lastStatus may have a value of PENDING)",
          args: {
            name: "string",
            suggestions: ["RUNNING", "PENDING", "STOPPED"],
          },
        },
        {
          name: "--launch-type",
          description:
            "The launch type to use when filtering the ListTasks results",
          args: {
            name: "string",
            suggestions: launchTypes,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "put-account-setting",
      description:
        "Modifies an account setting. Account settings are set on a per-Region basis. If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see Account Settings in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--name",
          description:
            "The Amazon ECS account setting name to modify. The following are the valid values for the account setting name.    serviceLongArnFormat - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.    taskLongArnFormat - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.    fargateFIPSMode - When turned on, you can run Fargate workloads in a manner that is compliant with Federal Information Processing Standard (FIPS-140). For more information, see Fargate Federal Information Processing Standard (FIPS-140).    containerInstanceLongArnFormat - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.    awsvpcTrunking - When modified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If awsvpcTrunking is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see Elastic Network Interface Trunking in the Amazon Elastic Container Service Developer Guide.    containerInsights - Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.  To use Container Insights with enhanced observability, set the containerInsights account setting to enhanced. To use Container Insights, set the containerInsights account setting to enabled. For more information, see Monitor Amazon ECS containers using Container Insights with enhanced observability in the Amazon Elastic Container Service Developer Guide.    dualStackIPv6 - When turned on, when using a VPC in dual stack mode, your tasks using the awsvpc network mode can have an IPv6 address assigned. For more information on using IPv6 with tasks launched on Amazon EC2 instances, see Using a VPC in dual-stack mode. For more information on using IPv6 with tasks launched on Fargate, see Using a VPC in dual-stack mode.    fargateTaskRetirementWaitPeriod - When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace them. Use fargateTaskRetirementWaitPeriod to configure the wait time to retire a Fargate task. For information about the Fargate tasks maintenance, see Amazon Web Services Fargate task maintenance in the Amazon ECS Developer Guide.    tagResourceAuthorization - Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as ecsCreateCluster. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the ecs:TagResource action. For more information, see Grant permission to tag resources on creation in the Amazon ECS Developer Guide.    guardDutyActivate - The guardDutyActivate parameter is read-only in Amazon ECS and indicates whether Amazon ECS Runtime Monitoring is enabled or disabled by your security administrator in your Amazon ECS account. Amazon GuardDuty controls this account setting on your behalf. For more information, see Protecting Amazon ECS workloads with Amazon ECS Runtime Monitoring",
          args: {
            name: "string",
            suggestions: accountSettingsResourceNames,
          },
        },
        {
          name: "--value",
          description:
            "The account setting value for the specified principal ARN. Accepted values are enabled, disabled, enhanced, on, and off. When you specify fargateTaskRetirementWaitPeriod for the name, the following are the valid values:    0 - Amazon Web Services sends the notification, and immediately retires the affected tasks.    7 - Amazon Web Services sends the notification, and waits 7 calendar days to retire the tasks.    14 - Amazon Web Services sends the notification, and waits 14 calendar days to retire the tasks",
          args: {
            name: "string",
            suggestions: ["enabled", "disabled"],
          },
        },
        {
          name: "--principal-arn",
          description:
            "The ARN of the principal, which can be a user, role, or the root user. If you specify the root user, it modifies the account setting for all users, roles, and the root user of the account unless a user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user.  You must use the root user when you set the Fargate wait time (fargateTaskRetirementWaitPeriod).  Federated users assume the account setting of the root user and can't have explicit account settings set for them",
          args: {
            name: "string",
            generators: [generators.listRoles, generators.listUsers],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-account-setting-default",
      description:
        "Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis",
      options: [
        {
          name: "--name",
          description:
            "The resource name for which to modify the account setting. The following are the valid values for the account setting name.    serviceLongArnFormat - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.    taskLongArnFormat - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.    containerInstanceLongArnFormat - When modified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.    awsvpcTrunking - When modified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If awsvpcTrunking is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see Elastic Network Interface Trunking in the Amazon Elastic Container Service Developer Guide.    containerInsights - Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.  To use Container Insights with enhanced observability, set the containerInsights account setting to enhanced. To use Container Insights, set the containerInsights account setting to enabled. For more information, see Monitor Amazon ECS containers using Container Insights with enhanced observability in the Amazon Elastic Container Service Developer Guide.    dualStackIPv6 - When turned on, when using a VPC in dual stack mode, your tasks using the awsvpc network mode can have an IPv6 address assigned. For more information on using IPv6 with tasks launched on Amazon EC2 instances, see Using a VPC in dual-stack mode. For more information on using IPv6 with tasks launched on Fargate, see Using a VPC in dual-stack mode.    fargateFIPSMode - If you specify fargateFIPSMode, Fargate FIPS 140 compliance is affected.    fargateTaskRetirementWaitPeriod - When Amazon Web Services determines that a security or infrastructure update is needed for an Amazon ECS task hosted on Fargate, the tasks need to be stopped and new tasks launched to replace them. Use fargateTaskRetirementWaitPeriod to configure the wait time to retire a Fargate task. For information about the Fargate tasks maintenance, see Amazon Web Services Fargate task maintenance in the Amazon ECS Developer Guide.    tagResourceAuthorization - Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as ecsCreateCluster. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the ecs:TagResource action. For more information, see Grant permission to tag resources on creation in the Amazon ECS Developer Guide.    guardDutyActivate - The guardDutyActivate parameter is read-only in Amazon ECS and indicates whether Amazon ECS Runtime Monitoring is enabled or disabled by your security administrator in your Amazon ECS account. Amazon GuardDuty controls this account setting on your behalf. For more information, see Protecting Amazon ECS workloads with Amazon ECS Runtime Monitoring",
          args: {
            name: "string",
            suggestions: accountSettingsResourceNames,
          },
        },
        {
          name: "--value",
          description:
            "The account setting value for the specified principal ARN. Accepted values are enabled, disabled, on, enhanced, and off. When you specify fargateTaskRetirementWaitPeriod for the name, the following are the valid values:    0 - Amazon Web Services sends the notification, and immediately retires the affected tasks.    7 - Amazon Web Services sends the notification, and waits 7 calendar days to retire the tasks.    14 - Amazon Web Services sends the notification, and waits 14 calendar days to retire the tasks",
          args: {
            name: "string",
            suggestions: ["enabled", "disabled"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-attributes",
      description:
        "Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use DeleteAttributes. For more information, see Attributes in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that contains the resource to apply attributes. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--attributes",
          description:
            "The attributes to apply to your resource. You can specify up to 10 custom attributes for each resource. You can specify up to 10 attributes in a single call",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-cluster-capacity-providers",
      description:
        "Modifies the available capacity providers and the default capacity provider strategy for a cluster. You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a PutClusterCapacityProviders API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks. When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array ([]) to bypass defining a default strategy",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to modify the capacity provider settings for. If you don't specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--capacity-providers",
          description:
            "The name of one or more capacity providers to associate with the cluster. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the CreateCapacityProvider API operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listCapacityProviders,
          },
        },
        {
          name: "--default-capacity-provider-strategy",
          description:
            "The capacity provider strategy to use by default for the cluster. When creating a service or running a task on a cluster, if no capacity provider or launch type is specified then the default capacity provider strategy for the cluster is used. A capacity provider strategy consists of one or more capacity providers along with the base and weight to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The PutClusterCapacityProviders API is used to associate a capacity provider with a cluster. Only capacity providers with an ACTIVE or UPDATING status can be used. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the CreateCapacityProvider API operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "register-container-instance",
      description:
        "This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to register your container instance with. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--instance-identity-document",
          description:
            "The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/document/",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-identity-document-signature",
          description:
            "The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/signature/",
          args: {
            name: "string",
          },
        },
        {
          name: "--total-resources",
          description: "The resources available on the instance",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--version-info",
          description:
            "The version information for the Amazon ECS container agent and Docker daemon that runs on the container instance",
          args: {
            name: "structure",
          },
        },
        {
          name: "--container-instance-arn",
          description:
            "The ARN of the container instance (if it was previously registered)",
          args: {
            name: "string",
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--attributes",
          description:
            "The container instance attributes that this container instance supports",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--platform-devices",
          description:
            "The devices that are available on the container instance. The only supported device type is a GPU",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "register-task-definition",
      description:
        "Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide. You can specify a role for your task with the taskRoleArn parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. If you specify the awsvpc network mode, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--family",
          description:
            "You must specify a family for a task definition. You can use it track multiple versions of the same task definition. The family is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed",
          args: {
            name: "string",
            generators: generators.listTaskDefinitionFamilies,
          },
        },
        {
          name: "--task-role-arn",
          description:
            "The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
            generators: generators.listTasks,
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see IAM roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--network-mode",
          description:
            "The Docker networking mode to use for the containers in the task. The valid values are none, bridge, awsvpc, and host. If no network mode is specified, the default is bridge. For Amazon ECS tasks on Fargate, the awsvpc network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, <default> or awsvpc can be used. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The host and awsvpc network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the bridge mode. With the host and awsvpc network modes, exposed container ports are mapped directly to the corresponding host port (for the host network mode) or the attached elastic network interface port (for the awsvpc network mode), so you cannot take advantage of dynamic host port mappings.   When using the host network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.  If the network mode is awsvpc, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration value when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide. If the network mode is host, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used",
          args: {
            name: "string",
            suggestions: ["bridge", "host", "awsvpc", "none"],
          },
        },
        {
          name: "--container-definitions",
          description:
            "A list of container definitions in JSON format that describe the different containers that make up your task",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listFiles,
          },
        },
        {
          name: "--volumes",
          description:
            "A list of volume definitions in JSON format that containers in your task might use",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listFiles,
          },
        },
        {
          name: "--placement-constraints",
          description:
            "An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--requires-compatibilities",
          description:
            "The task launch type that Amazon ECS validates the task definition against. A client exception is returned if the task definition doesn't validate against the compatibilities specified. If no value is specified, the parameter is omitted from the response",
          args: {
            name: "list",
            suggestions: launchTypes,
          },
        },
        {
          name: "--cpu",
          description:
            "The number of CPU units used by the task. It can be expressed as an integer using CPU units (for example, 1024) or as a string using vCPUs (for example, 1 vCPU or 1 vcpu) in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered.  Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.  If you're using the EC2 launch type, this field is optional. Supported values are between 128 CPU units (0.125 vCPUs) and 10240 CPU units (10 vCPUs). If you do not specify a value, the parameter is ignored. If you're using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the memory parameter: The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate.   256 (.25 vCPU) - Available memory values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)   512 (.5 vCPU) - Available memory values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)   1024 (1 vCPU) - Available memory values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)   2048 (2 vCPU) - Available memory values: 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)   4096 (4 vCPU) - Available memory values: 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)   8192 (8 vCPU) - Available memory values: 16 GB and 60 GB in 4 GB increments This option requires Linux platform 1.4.0 or later.   16384 (16vCPU) - Available memory values: 32GB and 120 GB in 8 GB increments This option requires Linux platform 1.4.0 or later",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory",
          description:
            "The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB (for example ,1024) or as a string using GB (for example, 1GB or 1 GB) in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered.  Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers.  If using the EC2 launch type, this field is optional. If using the Fargate launch type, this field is required and you must use one of the following values. This determines your range of supported values for the cpu parameter. The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate.   512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU)   1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU)   2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU)   Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU)   Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU)   Between 16 GB and 60 GB in 4 GB increments - Available cpu values: 8192 (8 vCPU) This option requires Linux platform 1.4.0 or later.   Between 32GB and 120 GB in 8 GB increments - Available cpu values: 16384 (16 vCPU) This option requires Linux platform 1.4.0 or later",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--pid-mode",
          description:
            "The process namespace to use for the containers in the task. The valid values are host or task. On Fargate for Linux containers, the only valid value is task. For example, monitoring sidecars might need pidMode to access information about other containers running in the same task. If host is specified, all containers within the tasks that specified the host PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same process namespace. If no value is specified, the default is a private namespace for each container. If the host PID mode is used, there's a heightened risk of undesired process namespace exposure.  This parameter is not supported for Windows containers.   This parameter is only supported for tasks that are hosted on Fargate if the tasks are using platform version 1.4.0 or later (Linux). This isn't supported for Windows containers on Fargate",
          args: {
            name: "string",
            suggestions: ["host", "task"],
          },
        },
        {
          name: "--ipc-mode",
          description:
            "The IPC resource namespace to use for the containers in the task. The valid values are host, task, or none. If host is specified, then all containers within the tasks that specified the host IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same IPC resources. If none is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. If the host IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose. If you are setting namespaced kernel parameters using systemControls for the containers in the task, the following will apply to your IPC resource namespace. For more information, see System Controls in the Amazon Elastic Container Service Developer Guide.   For tasks that use the host IPC mode, IPC namespace related systemControls are not supported.   For tasks that use the task IPC mode, IPC namespace related systemControls will apply to all containers within a task.    This parameter is not supported for Windows containers or tasks run on Fargate",
          args: {
            name: "string",
            suggestions: ["host", "task", "none"],
          },
        },
        {
          name: "--proxy-configuration",
          description:
            "The configuration details for the App Mesh proxy. For tasks hosted on Amazon EC2 instances, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the ecs-init package to use a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version 20190301 or later, then they contain the required versions of the container agent and ecs-init. For more information, see Amazon ECS-optimized AMI versions in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--inference-accelerators",
          description:
            "The Elastic Inference accelerators to use for the containers in the task",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--ephemeral-storage",
          description:
            "The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see Using data volumes in tasks in the Amazon ECS Developer Guide.  For tasks using the Fargate launch type, the task requires the following platforms:   Linux platform version 1.4.0 or later.   Windows platform version 1.0.0 or later",
          args: {
            name: "structure",
          },
        },
        {
          name: "--runtime-platform",
          description:
            "The operating system that your tasks definitions run on. A platform family is specified only for tasks using the Fargate launch type",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "run-task",
      description:
        "Starts a new task using the specified task definition.  On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.   Amazon Elastic Inference (EI) is no longer available to customers.  You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. Alternatively, you can use StartTask to use your own scheduler or place tasks manually on specific container instances. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more infomation, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command. To manage eventual consistency, you can do the following:   Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.   Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time",
      options: [
        {
          name: "--capacity-provider-strategy",
          description:
            "The capacity provider strategy to use for the task. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. When you use cluster auto scaling, you must specify capacityProviderStrategy and not launchType.  A capacity provider strategy can contain a maximum of 20 capacity providers",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster to run your task on. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--count",
          description:
            "The number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks for each call",
          args: {
            name: "integer",
            suggestions: Array.from({ length: 10 }, (_, i) => i + 1).map(
              (number) => number.toString()
            ),
          },
        },
        {
          name: "--enable-ecs-managed-tags",
          description:
            "Specifies whether to use Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide",
        },
        {
          name: "--no-enable-ecs-managed-tags",
          description:
            "Specifies whether to use Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide",
        },
        {
          name: "--enable-execute-command",
          description:
            "Determines whether to use the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task. If true, then the task definition must have a task role, or you must provide one as an override",
        },
        {
          name: "--group",
          description:
            "The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name)",
          args: {
            name: "string",
            generators: generators.listTaskGroups,
          },
        },
        {
          name: "--launch-type",
          description:
            "The infrastructure to run your standalone task on. For more information, see Amazon ECS launch types in the Amazon Elastic Container Service Developer Guide. The FARGATE launch type runs your tasks on Fargate On-Demand infrastructure.  Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see Fargate capacity providers in the Amazon ECS Developer Guide.  The EC2 launch type runs your tasks on Amazon EC2 instances registered to your cluster. The EXTERNAL launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster. A task can use either a launch type or a capacity provider strategy. If a launchType is specified, the capacityProviderStrategy parameter must be omitted. When you use cluster auto scaling, you must specify capacityProviderStrategy and not launchType",
          args: {
            name: "string",
            suggestions: launchTypes,
          },
        },
        {
          name: "--network-configuration",
          description:
            "The network configuration for the task. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see Task networking in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--overrides",
          description:
            "A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it should receive. You can override the default command for a container (that's specified in the task definition or Docker image) with a command override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an environment override. A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure",
          args: {
            name: "structure",
            generators: generators.listFiles,
          },
        },
        {
          name: "--placement-constraints",
          description:
            "An array of placement constraint objects to use for the task. You can specify up to 10 constraints for each task (including constraints in the task definition and those specified at runtime)",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "type=distinctInstance,expression=string",
              "type=memberOf,expression=string",
            ],
          },
        },
        {
          name: "--placement-strategy",
          description:
            "The placement strategy objects to use for the task. You can specify a maximum of 5 strategy rules for each task",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "type=random,field=string",
              "type=spread,field=string",
              "type=binpack,field=string",
            ],
          },
        },
        {
          name: "--platform-version",
          description:
            "The platform version the task uses. A platform version is only specified for tasks hosted on Fargate. If one isn't specified, the LATEST platform version is used. For more information, see Fargate platform versions in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use theTagResource API action.  An error will be received if you specify the SERVICE option when running a task",
          args: {
            name: "string",
            suggestions: tagsToPropagate,
          },
        },
        {
          name: "--reference-id",
          description:
            "This parameter is only used by Amazon ECS. It is not intended for use by customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--started-by",
          description:
            "An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the startedBy parameter. You can then identify which tasks belong to that job by filtering the results of a ListTasks call with the startedBy value. Up to 128 letters (uppercase and lowercase), numbers, hyphens (-), forward slash (/), and underscores (_) are allowed. If a task is started by an Amazon ECS service, then the startedBy parameter contains the deployment ID of the service that starts it",
          args: {
            name: "string",
            generators: generators.listStartedBy,
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--task-definition",
          description:
            "The family and revision (family:revision) or full ARN of the task definition to run. If a revision isn't specified, the latest ACTIVE revision is used. The full ARN value must match the value that you specified as the Resource of the principal's permissions policy. When you specify a task definition, you must either specify a specific revision, or all revisions in the ARN. To specify a specific revision, include the revision number in the ARN. For example, to specify revision 2, use arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:2. To specify all revisions, use the wildcard (*) in the ARN. For example, to specify all revisions, use arn:aws:ecs:us-east-1:111122223333:task-definition/TaskFamilyName:*. For more information, see Policy Resources for Amazon ECS in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--client-token",
          description:
            "An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 64 characters are allowed. The valid characters are characters in the range of 33-126, inclusive. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--volume-configurations",
          description:
            "The details of the volume that was configuredAtLaunch. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in in TaskManagedEBSVolumeConfiguration. The name of the volume must match the name from the task definition",
          args: {
            name: "list",
          },
        },
        {
          name: "--disable-execute-command",
          description:
            "Determines whether to use the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task. If true, then the task definition must have a task role, or you must provide one as an override",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-task",
      description:
        "Starts a new task from the specified task definition on the specified container instance or instances.  On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.   Amazon Elastic Inference (EI) is no longer available to customers.  Alternatively, you can useRunTask to place tasks for you. For more information, see Scheduling Tasks in the Amazon Elastic Container Service Developer Guide. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. For more infomation, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster where to start your task. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container-instances",
          description:
            "The container instance IDs or full ARN entries for the container instances where you would like to place your task. You can specify up to 10 container instances",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--enable-ecs-managed-tags",
          description:
            "Specifies whether to use Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide",
        },
        {
          name: "--no-enable-ecs-managed-tags",
          description:
            "Specifies whether to use Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide",
        },
        {
          name: "--enable-execute-command",
          description:
            "Whether or not the execute command functionality is turned on for the task. If true, this turns on the execute command functionality on all containers in the task",
        },
        {
          name: "--group",
          description:
            "The name of the task group to associate with the task. The default value is the family name of the task definition (for example, family:my-family-name)",
          args: {
            name: "string",
            generators: generators.listTaskGroups,
          },
        },
        {
          name: "--network-configuration",
          description:
            "The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the awsvpc networking mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--overrides",
          description:
            "A list of container overrides in JSON format that specify the name of a container in the specified task definition and the overrides it receives. You can override the default command for a container (that's specified in the task definition or Docker image) with a command override. You can also override existing environment variables (that are specified in the task definition or Docker image) on a container or add new environment variables to it with an environment override.  A total of 8192 characters are allowed for overrides. This limit includes the JSON formatting characters of the override structure",
          args: {
            name: "structure",
            generators: generators.listFiles,
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated",
          args: {
            name: "string",
            suggestions: tagsToPropagate,
          },
        },
        {
          name: "--reference-id",
          description:
            "This parameter is only used by Amazon ECS. It is not intended for use by customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--started-by",
          description:
            "An optional tag specified when a task is started. For example, if you automatically trigger a task to run a batch process job, you could apply a unique identifier for that job to your task with the startedBy parameter. You can then identify which tasks belong to that job by filtering the results of a ListTasks call with the startedBy value. Up to 36 letters (uppercase and lowercase), numbers, hyphens (-), forward slash (/), and underscores (_) are allowed. If a task is started by an Amazon ECS service, the startedBy parameter contains the deployment ID of the service that starts it",
          args: {
            name: "string",
            generators: generators.listStartedBy,
          },
        },
        {
          name: "--tags",
          description:
            "The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--task-definition",
          description:
            "The family and revision (family:revision) or full ARN of the task definition to start. If a revision isn't specified, the latest ACTIVE revision is used",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--volume-configurations",
          description:
            "The details of the volume that was configuredAtLaunch. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in TaskManagedEBSVolumeConfiguration. The name of the volume must match the name from the task definition",
          args: {
            name: "list",
          },
        },
        {
          name: "--disable-execute-command",
          description:
            "Whether or not the execute command functionality is turned on for the task. If true, this turns on the execute command functionality on all containers in the task",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-task",
      description:
        "Stops a running task. Any tags associated with the task will be deleted. When you call StopTask on a task, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM value and a default 30-second timeout, after which the SIGKILL value is sent and the containers are forcibly stopped. If the container handles the SIGTERM value gracefully and exits within 30 seconds from receiving it, no SIGKILL value is sent. For Windows containers, POSIX signals do not work and runtime stops the container by sending a CTRL_SHUTDOWN_EVENT. For more information, see Unable to react to graceful shutdown of (Windows) container #25982 on GitHub.  The default 30-second timeout can be configured on the Amazon ECS container agent with the ECS_CONTAINER_STOP_TIMEOUT variable. For more information, see Amazon ECS Container Agent Configuration in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to stop. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--task",
          description: "The task ID of the task to stop",
          args: {
            name: "string",
            generators: generators.listTasks,
          },
        },
        {
          name: "--reason",
          description:
            "An optional message specified when a task is stopped. For example, if you're using a custom scheduler, you can use this parameter to specify the reason for stopping the task here, and the message appears in subsequent DescribeTasks> API operations on this task",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "submit-attachment-state-changes",
      description:
        "This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that an attachment changed states",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full ARN of the cluster that hosts the container instance the attachment belongs to",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--attachments",
          description:
            "Any attachments associated with the state change request",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "submit-container-state-change",
      description:
        "This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a container changed states",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full ARN of the cluster that hosts the container",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--task",
          description:
            "The task ID or full Amazon Resource Name (ARN) of the task that hosts the container",
          args: {
            name: "string",
            generators: generators.listTasks,
          },
        },
        {
          name: "--container-name",
          description: "The name of the container",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime-id",
          description: "The ID of the Docker container",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the state change request",
          args: {
            name: "string",
          },
        },
        {
          name: "--exit-code",
          description:
            "The exit code that's returned for the state change request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reason",
          description: "The reason for the state change request",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-bindings",
          description: "The network bindings of the container",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "bindIP=string,containerPort=integer,hostPort=integer,protocol=tcp",
              "bindIP=string,containerPort=integer,hostPort=integer,protocol=udp",
            ],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "submit-task-state-change",
      description:
        "This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.  Sent to acknowledge that a task changed states",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--task",
          description:
            "The task ID or full ARN of the task in the state change request",
          args: {
            name: "string",
            generators: generators.listTasks,
          },
        },
        {
          name: "--status",
          description: "The status of the state change request",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description: "The reason for the state change request",
          args: {
            name: "string",
          },
        },
        {
          name: "--containers",
          description:
            "Any containers that's associated with the state change request",
          args: {
            name: "list",
          },
        },
        {
          name: "--attachments",
          description:
            "Any attachments associated with the state change request",
          args: {
            name: "list",
          },
        },
        {
          name: "--managed-agents",
          description:
            "The details for the managed agent that's associated with the task",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--pull-started-at",
          description:
            "The Unix timestamp for the time when the container image pull started",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--pull-stopped-at",
          description:
            "The Unix timestamp for the time when the container image pull completed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--execution-stopped-at",
          description:
            "The Unix timestamp for the time when the task execution stopped",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to add tags to. Currently, the supported resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container instances",
          args: {
            name: "string",
            generators: [
              generators.listTasks,
              generators.listTaskDefinitions,
              generators.listClusters,
              generators.listServices,
              generators.listContainerInstances,
            ],
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the resource. A tag is an array of key-value pairs. The following basic restrictions apply to tags:   Maximum number of tags per resource - 50   For each resource, each tag key must be unique, and each tag key can have only one value.   Maximum key length - 128 Unicode characters in UTF-8   Maximum value length - 256 Unicode characters in UTF-8   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.   Tag keys and values are case-sensitive.   Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes specified tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to delete tags from. Currently, the supported resources are Amazon ECS capacity providers, tasks, services, task definitions, clusters, and container instances",
          args: {
            name: "string",
            generators: [
              generators.listTasks,
              generators.listTaskDefinitions,
              generators.listClusters,
              generators.listServices,
              generators.listContainerInstances,
            ],
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listTagsForResource,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-capacity-provider",
      description: "Modifies the parameters for a capacity provider",
      options: [
        {
          name: "--name",
          description: "The name of the capacity provider to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-scaling-group-provider",
          description:
            "An object that represent the parameters to update for the Auto Scaling group capacity provider",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-cluster",
      description: "Updates the cluster",
      options: [
        {
          name: "--cluster",
          description: "The name of the cluster to modify the settings for",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--settings",
          description: "The cluster settings for your cluster",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "name=containerInsights,value=enabled",
              "name=containerInsights,value=disabled",
            ],
          },
        },
        {
          name: "--configuration",
          description: "The execute command configuration for the cluster",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-connect-defaults",
          description:
            "Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the enabled parameter to true in the ServiceConnectConfiguration. You can set the namespace of each service individually in the ServiceConnectConfiguration to override this default parameter. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-cluster-settings",
      description: "Modifies the settings to use for a cluster",
      options: [
        {
          name: "--cluster",
          description: "The name of the cluster to modify the settings for",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--settings",
          description:
            "The setting to use by default for a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. If this value is specified, it overrides the containerInsights value set with PutAccountSetting or PutAccountSettingDefault.  Currently, if you delete an existing cluster that does not have Container Insights turned on, and then create a new cluster with the same name with Container Insights tuned on, Container Insights will not actually be turned on. If you want to preserve the same name for your existing cluster and turn on Container Insights, you must wait 7 days before you can re-create it",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "name=containerInsights,value=enabled",
              "name=containerInsights,value=disabled",
            ],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-container-agent",
      description:
        "Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.  The UpdateContainerAgent API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the ecs-init package. This updates the agent. For more information, see Updating the Amazon ECS container agent in the Amazon Elastic Container Service Developer Guide.   Agent updates with the UpdateContainerAgent API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.  The UpdateContainerAgent API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually updating the Amazon ECS container agent in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that your container instance is running on. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container-instance",
          description:
            "The container instance ID or full ARN entries for the container instance where you would like to update the Amazon ECS container agent",
          args: {
            name: "string",
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-container-instances-state",
      description:
        "Modifies the status of an Amazon ECS container instance. Once a container instance has reached an ACTIVE state, you can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.  A container instance can't be changed to DRAINING until it has reached an ACTIVE status. If the instance is in any other status, an error will be received.  When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according to the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. You can change the deployment configuration of your service using UpdateService.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.   Any PENDING or RUNNING tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When a container instance has been drained, you can set a container instance to ACTIVE status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the container instance to update. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--container-instances",
          description:
            "A list of up to 10 container instance IDs or full ARN entries",
          args: {
            name: "list",
            generators: generators.listContainerInstances,
          },
        },
        {
          name: "--status",
          description:
            "The container instance state to update the container instance with. The only valid values for this action are ACTIVE and DRAINING. A container instance can only be updated to DRAINING status once it has reached an ACTIVE state. If a container instance is in REGISTERING, DEREGISTERING, or REGISTRATION_FAILED state you can describe the container instance but can't update the container instance state",
          args: {
            name: "string",
            suggestions: status,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-service",
      description:
        "Modifies the parameters of a service.  On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.  For services using the rolling update (ECS) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration.  You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more infomation, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. You can update your volume configurations and trigger a new deployment. volumeConfigurations is only supported for REPLICA service and not DAEMON service. If you leave volumeConfigurations null, it doesn't trigger a new deployment. For more infomation on volumes, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. For services using the blue/green (CODE_DEPLOY) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see CreateDeployment in the CodeDeploy API Reference. For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see CreateTaskSet. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more infomation, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. If you have updated the container image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.  If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, my_image:latest), you don't need to create a new revision of your task definition. You can update the service using the forceNewDeployment option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.  You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy.   If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer.   The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).   When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout. After this, SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.   Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.   By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.   Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.   Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.     When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic:    Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.   Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.    You must have a service-linked role when you update any of the following service properties:    loadBalancers,    serviceRegistries    For more information about the role see the CreateService request parameter  role",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that your service runs on. If you do not specify a cluster, the default cluster is assumed",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--service",
          description: "The name of the service to update",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--desired-count",
          description:
            "The number of instantiations of the task to place and keep running in your service",
          args: {
            name: "integer",
          },
        },
        {
          name: "--task-definition",
          description:
            "The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision is not specified, the latest ACTIVE revision is used. If you modify the task definition with UpdateService, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--capacity-provider-strategy",
          description:
            "The capacity provider strategy to update the service to use. if the service uses the default capacity provider strategy for the cluster, the service can be updated to use one or more capacity providers as opposed to the default capacity provider strategy. However, when a service is using a capacity provider strategy that's not the default capacity provider strategy, the service can't be updated to use the cluster's default capacity provider strategy. A capacity provider strategy consists of one or more capacity providers along with the base and weight to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The PutClusterCapacityProviders API is used to associate a capacity provider with a cluster. Only capacity providers with an ACTIVE or UPDATING status can be used. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the CreateClusterCapacityProvider API operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used. The PutClusterCapacityProvidersAPI operation is used to update the list of available capacity providers for a cluster after the cluster is created",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--deployment-configuration",
          description:
            "Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks",
          args: {
            name: "structure",
            suggestions: [
              "deploymentCircuitBreaker={enable=true,rollback=true},maximumPercent=integer,minimumHealthyPercent=integer",
              "deploymentCircuitBreaker={enable=true,rollback=false},maximumPercent=integer,minimumHealthyPercent=integer",
              "deploymentCircuitBreaker={enable=false,rollback=true},maximumPercent=integer,minimumHealthyPercent=integer",
              "deploymentCircuitBreaker={enable=false,rollback=false},maximumPercent=integer,minimumHealthyPercent=integer",
            ],
          },
        },
        {
          name: "--availability-zone-rebalancing",
          description:
            "Indicates whether to use Availability Zone rebalancing for the service. For more information, see Balancing an Amazon ECS service across Availability Zones in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-configuration",
          description:
            "An object representing the network configuration for the service",
          args: {
            name: "structure",
          },
        },
        {
          name: "--placement-constraints",
          description:
            "An array of task placement constraint objects to update the service to use. If no value is specified, the existing placement constraints for the service will remain unchanged. If this value is specified, it will override any existing placement constraints defined for the service. To remove all existing placement constraints, specify an empty array. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "type=distinctInstance,expression=string",
              "type=memberOf,expression=string",
            ],
          },
        },
        {
          name: "--placement-strategy",
          description:
            "The task placement strategy objects to update the service to use. If no value is specified, the existing placement strategy for the service will remain unchanged. If this value is specified, it will override the existing placement strategy defined for the service. To remove an existing placement strategy, specify an empty object. You can specify a maximum of five strategy rules for each service",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "type=random,field=string",
              "type=spread,field=string",
              "type=binpack,field=string",
            ],
          },
        },
        {
          name: "--platform-version",
          description:
            "The platform version that your tasks in the service run on. A platform version is only specified for tasks using the Fargate launch type. If a platform version is not specified, the LATEST platform version is used. For more information, see Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-new-deployment",
          description:
            "Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (my_image:latest) or to roll Fargate tasks onto a newer platform version",
        },
        {
          name: "--no-force-new-deployment",
          description:
            "Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (my_image:latest) or to roll Fargate tasks onto a newer platform version",
        },
        {
          name: "--health-check-grace-period-seconds",
          description:
            "The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't specify a health check grace period value, the default value of 0 is used. If you don't use any of the health checks, then healthCheckGracePeriodSeconds is unused. If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up",
          args: {
            name: "integer",
          },
        },
        {
          name: "--enable-execute-command",
          description:
            "If true, this enables execute command functionality on all task containers. If you do not want to override the value that was set when the service was created, you can set this to null when performing this action",
        },
        {
          name: "--enable-ecs-managed-tags",
          description:
            "Determines whether to turn on Amazon ECS managed tags for the tasks in the service. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide. Only tasks launched after the update will reflect the update. To update the tags on all tasks, set forceNewDeployment to true, so that Amazon ECS starts new tasks with the updated tags",
        },
        {
          name: "--no-enable-ecs-managed-tags",
          description:
            "Determines whether to turn on Amazon ECS managed tags for the tasks in the service. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide. Only tasks launched after the update will reflect the update. To update the tags on all tasks, set forceNewDeployment to true, so that Amazon ECS starts new tasks with the updated tags",
        },
        {
          name: "--load-balancers",
          description:
            "A list of Elastic Load Balancing load balancer objects. It contains the load balancer name, the container name, and the container port to access from the load balancer. The container name is as it appears in a container definition. When you add, update, or remove a load balancer configuration, Amazon ECS starts new tasks with the updated Elastic Load Balancing configuration, and then stops the old tasks when the new tasks are running. For services that use rolling updates, you can add, update, or remove Elastic Load Balancing target groups. You can update from a single target group to multiple target groups and from multiple target groups to a single target group. For services that use blue/green deployments, you can update Elastic Load Balancing target groups by using  CreateDeployment  through CodeDeploy. Note that multiple target groups are not supported for blue/green deployments. For more information see Register multiple target groups with a service in the Amazon Elastic Container Service Developer Guide.  For services that use the external deployment controller, you can add, update, or remove load balancers by using CreateTaskSet. Note that multiple target groups are not supported for external deployments. For more information see Register multiple target groups with a service in the Amazon Elastic Container Service Developer Guide.  You can remove existing loadBalancers by passing an empty list",
          args: {
            name: "list",
          },
        },
        {
          name: "--propagate-tags",
          description:
            "Determines whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags aren't propagated. Only tasks launched after the update will reflect the update. To update the tags on all tasks, set forceNewDeployment to true, so that Amazon ECS starts new tasks with the updated tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-registries",
          description:
            "The details for the service discovery registries to assign to this service. For more information, see Service Discovery. When you add, update, or remove the service registries configuration, Amazon ECS starts new tasks with the updated service registries configuration, and then stops the old tasks when the new tasks are running. You can remove existing serviceRegistries by passing an empty list",
          args: {
            name: "list",
          },
        },
        {
          name: "--service-connect-configuration",
          description:
            "The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--volume-configurations",
          description:
            "The details of the volume that was configuredAtLaunch. You can configure the size, volumeType, IOPS, throughput, snapshot and encryption in ServiceManagedEBSVolumeConfiguration. The name of the volume must match the name from the task definition. If set to null, no new deployment is triggered. Otherwise, if this configuration differs from the existing one, it triggers a new deployment",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-lattice-configurations",
          description:
            "An object representing the VPC Lattice configuration for the service being updated",
          args: {
            name: "list",
          },
        },
        {
          name: "--disable-execute-command",
          description:
            "If true, this enables execute command functionality on all task containers. If you do not want to override the value that was set when the service was created, you can set this to null when performing this action",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-service-primary-task-set",
      description:
        "Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--service",
          description:
            "The short name or full Amazon Resource Name (ARN) of the service that the task set exists in",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--primary-task-set",
          description:
            "The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the deployment",
          args: {
            name: "string",
            generators: generators.listTaskSets,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-task-protection",
      description:
        "Updates the protection status of a task. You can set protectionEnabled to true to protect your task from termination during scale-in events from Service Autoscaling or deployments. Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the protectionEnabled property making the task eligible for termination by a subsequent scale-in event. You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the expiresInMinutes property. The expiresInMinutes property is always reset when you invoke this operation for a task that already has protectionEnabled set to true. You can keep extending the protection expiration period of a task by invoking this operation repeatedly. To learn more about Amazon ECS task protection, see Task scale-in protection in the  Amazon Elastic Container Service Developer Guide .  This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an TASK_NOT_VALID failure. For more information, see API failure reasons.   If you prefer to set task protection from within the container, we recommend using the Task scale-in protection endpoint",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task sets exist in",
          args: {
            name: "string",
          },
        },
        {
          name: "--tasks",
          description: "A list of up to 10 task IDs or full ARN entries",
          args: {
            name: "list",
          },
        },
        {
          name: "--protection-enabled",
          description:
            "Specify true to mark a task for protection and false to unset protection, making it eligible for termination",
        },
        {
          name: "--no-protection-enabled",
          description:
            "Specify true to mark a task for protection and false to unset protection, making it eligible for termination",
        },
        {
          name: "--expires-in-minutes",
          description:
            "If you set protectionEnabled to true, you can specify the duration for task protection in minutes. You can specify a value from 1 minute to up to 2,880 minutes (48 hours). During this time, your task will not be terminated by scale-in events from Service Auto Scaling or deployments. After this time period lapses, protectionEnabled will be reset to false. If you don\u2019t specify the time, then the task is automatically protected for 120 minutes (2 hours)",
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
      name: "update-task-set",
      description:
        "Modifies a task set. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide",
      options: [
        {
          name: "--cluster",
          description:
            "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set is found in",
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--service",
          description:
            "The short name or full Amazon Resource Name (ARN) of the service that the task set is found in",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--task-set",
          description:
            "The short name or full Amazon Resource Name (ARN) of the task set to update",
          args: {
            name: "string",
            generators: generators.listTaskSets,
          },
        },
        {
          name: "--scale",
          description:
            "A floating-point percentage of the desired number of tasks to place and keep running in the task set",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deploy",
      description:
        "Deploys a new task definition to the specified ECS service. Only services that use CodeDeploy for deployments are supported. This command will register a new task definition, update the CodeDeploy appspec with the new task definition revision, create a CodeDeploy deployment, and wait for the deployment to successfully complete. This command will exit with a return code of 255 if the deployment does not succeed within 30 minutes by default or up to 10 minutes more than your deployment group's configured wait time (max of 6 hours)",
      options: [
        {
          name: "--service",
          description:
            "The short name or full Amazon Resource Name (ARN) of the service to update",
          args: {
            name: "string",
            generators: generators.listServices,
          },
        },
        {
          name: "--task-definition",
          description:
            "The file path where your task definition file is located. The format of the file must be the same as the JSON output of: aws ecs register-task-definition --generate-cli-skeleton",
          args: {
            name: "string",
            generators: generators.listTaskDefinitions,
          },
        },
        {
          name: "--codedeploy-appspec",
          description:
            "The file path where your AWS CodeDeploy appspec file is located. The appspec file may be in JSON or YAML format. The TaskDefinition property will be updated within the appspec with the newly registered task definition ARN, overwriting any placeholder values in the file",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--cluster",
          description:
            'The short name or full Amazon Resource Name (ARN) of the cluster that your service is running within. If you do not specify a cluster, the "default" cluster is assumed',
          args: {
            name: "string",
            generators: generators.listClusters,
          },
        },
        {
          name: "--codedeploy-application",
          description:
            "The name of the AWS CodeDeploy application to use for the deployment. The specified application must use the 'ECS' compute platform. If you do not specify an application, the application name AppECS-[CLUSTER_NAME]-[SERVICE_NAME] is assumed",
          args: {
            name: "string",
            generators: generators.listCodedeployApplications,
          },
        },
        {
          name: "--codedeploy-deployment-group",
          description:
            "The name of the AWS CodeDeploy deployment group to use for the deployment. The specified deployment group must be associated with the specified ECS service and cluster. If you do not specify a deployment group, the deployment group name DgpECS-[CLUSTER_NAME]-[SERVICE_NAME] is assumed",
          args: {
            name: "string",
            generators: generators.listCodedeployDeploymentGroups,
          },
        },
      ],
      subcommands: [
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
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "services-inactive",
          description:
            "Wait until JMESPath query services[].status returns INACTIVE for any element when polling with ``describe-services``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--cluster",
              description:
                "The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--services",
              description:
                "A list of services to describe. You may specify up to 10 services to describe in a single operation",
              args: {
                name: "list",
                generators: generators.listServices,
              },
            },
            {
              name: "--include",
              description:
                "Determines whether you want to see the resource tags for the service. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
              args: {
                name: "list",
                isVariadic: true,
                suggestions: tags,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "services-stable",
          description:
            "Wait until JMESPath query length(services[?!(length(deployments) == `1` && runningCount == desiredCount)]) == `0` returns True when polling with ``describe-services``. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--cluster",
              description:
                "The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--services",
              description:
                "A list of services to describe. You may specify up to 10 services to describe in a single operation",
              args: {
                name: "list",
                generators: generators.listServices,
              },
            },
            {
              name: "--include",
              description:
                "Determines whether you want to see the resource tags for the service. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
              args: {
                name: "list",
                isVariadic: true,
                suggestions: tags,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "tasks-running",
          description:
            "Wait until JMESPath query tasks[].lastStatus returns RUNNING for all elements when polling with ``describe-tasks``. It will poll every 6 seconds until a successful state has been reached. This will exit with a return code of 255 after 100 failed checks",
          options: [
            {
              name: "--cluster",
              description:
                "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required. If you do not specify a value, the default cluster is used",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--tasks",
              description: "A list of up to 100 task IDs or full ARN entries",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listTasks,
              },
            },
            {
              name: "--include",
              description:
                "Specifies whether you want to see the resource tags for the task. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
              args: {
                name: "list",
                isVariadic: true,
                suggestions: tags,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "tasks-stopped",
          description:
            "Wait until JMESPath query tasks[].lastStatus returns STOPPED for all elements when polling with ``describe-tasks``. It will poll every 6 seconds until a successful state has been reached. This will exit with a return code of 255 after 100 failed checks",
          options: [
            {
              name: "--cluster",
              description:
                "The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required. If you do not specify a value, the default cluster is used",
              args: {
                name: "string",
                generators: generators.listClusters,
              },
            },
            {
              name: "--tasks",
              description: "A list of up to 100 task IDs or full ARN entries",
              args: {
                name: "list",
                generators: generators.listTasks,
              },
            },
            {
              name: "--include",
              description:
                "Specifies whether you want to see the resource tags for the task. If TAGS is specified, the tags are included in the response. If this field is omitted, tags aren't included in the response",
              args: {
                name: "list",
                isVariadic: true,
                suggestions: tags,
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
                generators: generators.listFiles,
              },
            },
            {
              name: "--generate-cli-skeleton",
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
