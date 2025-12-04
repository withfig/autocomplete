const statistics = ["SampleCount", "Average", "Sum", "Minimum", "Maximum"];
const alarmStates = ["OK", "ALARM", "INSUFFICIENT_DATA"];
const metricTypes = ["CompositeAlarm", "MetricAlarm"];
const unit = [
  "Seconds",
  "Microseconds",
  "Milliseconds",
  "Bytes",
  "Kilobytes",
  "Megabytes",
  "Gigabytes",
  "Terabytes",
  "Bits",
  "Kilobits",
  "Megabits",
  "Gigabits",
  "Terabits",
  "Percent",
  "Count",
  "Bytes/Second",
  "Kilobytes/Second",
  "Megabytes/Second",
  "Gigabytes/Second",
  "Terabytes/Second",
  "Bits/Second",
  "Kilobits/Second",
  "Megabits/Second",
  "Gigabits/Second",
  "Terabits/Second",
  "Count/Second",
  "None",
];
const namespaces = [
  "AWS/AmplifyHosting",
  "AWS/ApiGateway",
  "AWS/AppRunner",
  "AWS/AppStream",
  "AWS/AppSync",
  "AWS/Athena",
  "Backup",
  "AWS/Billing",
  "AWS/CertificateManager",
  "AWS/ACMPrivateCA",
  "AWS/Chatbot",
  "AWS/ClientVPN",
  "AWS/CloudFront",
  "AWS/CloudHSM",
  "AWS/CloudSearch",
  "AWS/Logs",
  "AWS/CodeBuild",
  "AWS/CodeGuruProfiler",
  "AWS/Cognito",
  "AWS/Connect",
  "AWS/DataSync",
  "AWS/DMS",
  "AWS/DX",
  "AWS/DocDB",
  "AWS/DynamoDB",
  "AWS/DAX",
  "AWS/EC2",
  "AWS/ElasticGPUs",
  "AWS/EC2Spot",
  "AWS/AutoScaling",
  "AWS/ElasticBeanstalk",
  "AWS/EBS",
  "AWS/ECS",
  "AWS/ECS/ManagedScaling",
  "AWS/EFS",
  "AWS/ElasticInference",
  "AWS/ApplicationELB",
  "AWS/NetworkELB",
  "AWS/GatewayELB",
  "AWS/ELB",
  "AWS/ElasticTranscoder",
  "AWS/ElastiCache",
  "AWS/ElastiCache",
  "AWS/ES",
  "AWS/ElasticMapReduce",
  "AWS/MediaConnect",
  "AWS/MediaConvert",
  "AWS/MediaLive",
  "AWS/MediaPackage",
  "AWS/MediaStore",
  "AWS/MediaTailor",
  "AWS/Events",
  "AWS/FSx",
  "AWS/FSx",
  "AWS/GameLift",
  "AWS/GlobalAccelerator",
  "Glue",
  "AWS/GroundStation",
  "AWS/Inspector",
  "AWS/IVS",
  "AWS/IoT",
  "AWS/IoTAnalytics",
  "AWS/IoTSiteWise",
  "AWS/ThingsGraph",
  "AWS/KMS",
  "AWS/Cassandra",
  "AWS/KinesisAnalytics",
  "AWS/Firehose",
  "AWS/Kinesis",
  "AWS/KinesisVideo",
  "AWS/Lambda",
  "AWS/Lex",
  "AWS/Location",
  "AWS/LookoutMetrics",
  "AWS/ML",
  "AWS/Kafka",
  "AWS/AmazonMQ",
  "AWS/Neptune",
  "AWS/NetworkFirewall",
  "AWS/OpsWorks",
  "AWS/Polly",
  "AWS/QLDB",
  "AWS/Redshift",
  "AWS/RDS",
  "AWS/Robomaker",
  "AWS/Route53",
  "AWS/SageMaker",
  "AWS/SDKMetrics",
  "AWS/ServiceCatalog",
  "AWS/DDoSProtection",
  "AWS/SES",
  "AWS/SNS",
  "AWS/SQS",
  "AWS/S3",
  "AWS/SWF",
  "AWS/States",
  "AWS/StorageGateway",
  "AWS/SSM-RunCommand",
  "AWS/Textract",
  "AWS/Timestream",
  "AWS/Transfer",
  "AWS/Translate",
  "AWS/TrustedAdvisor",
  "AWS/NATGateway",
  "AWS/TransitGateway",
  "AWS/VPN",
  "AWS/WAFV2",
  "WAF",
  "AWS/WorkMail",
  "AWS/WorkSpaces",
];
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
    return list
      .map((elm) => {
        const name = (childKey ? elm[childKey] : elm) as string;
        return {
          name,
          icon: "fig://icon?type=aws",
        };
      })
      .filter(uniqueNames);
  } catch (e) {
    console.log(e);
  }
  return [];
};
const listCustomGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let args = ["cloudwatch", command];
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
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
    return list.map((elm) => {
      const name = (childKey ? elm[childKey] : elm) as string;
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
const listDimensionTypes = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  command: string,
  option: string,
  parentKey: string,
  childKey: string
): Promise<Fig.Suggestion[]> => {
  try {
    const idx = tokens.indexOf(option);
    if (idx < 0) {
      return [];
    }
    const { stdout } = await executeShellCommand({
      command: "aws",
      args: ["cloudwatch", command, option, tokens[idx + 1]],
    });
    const metrics = JSON.parse(stdout)[parentKey];
    // traverse JSON & compose key-value style suggestion
    return metrics
      .map((metric) => {
        return metric[childKey].map((dimension) => {
          const composite = `Name=${dimension.Name},Value=${dimension.Value}`;
          return {
            name: composite,
            insertValue: composite,
            icon: "fig://icon?type=aws",
          };
        });
      })
      .flat()
      .filter(uniqueNames);
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
const getResultList = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteCommandFunction,
  args: string[],
  key: string
): Promise<Fig.Suggestion[]> => {
  const { stdout } = await executeShellCommand({
    command: "aws",
    args,
  });
  return JSON.parse(stdout)[key];
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
  const sortFnStrings = (a, b) => {
    return a.localeCompare(b);
  };
  const alphabeticalSortFilesAndFolders = (arr) => {
    const dotsArr = [];
    const otherArr = [];
    arr.map((elm) => {
      if (elm.toLowerCase() == ".ds_store") return;
      if (elm.slice(0, 1) === ".") dotsArr.push(elm);
      else otherArr.push(elm);
    });
    return [
      ...otherArr.sort(sortFnStrings),
      "../",
      ...dotsArr.sort(sortFnStrings),
    ];
  };
  const tempArr = alphabeticalSortFilesAndFolders(out.split("\n"));
  const finalArr = [];
  tempArr.forEach((item) => {
    if (!(item === "" || item === null || item === undefined)) {
      const outputType = item.slice(-1) === "/" ? "folder" : "file";
      finalArr.push({
        type: outputType,
        name: item,
        insertValue: item,
      });
    }
  });
  return finalArr;
};
const uniqueNames = (value, index, self) =>
  self.map((x) => x.name).indexOf(value.name) === index;
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
const generators: Record<string, Fig.Generator> = {
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
  listAlarms: {
    script: ["aws", "cloudwatch", "describe-alarms"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "MetricAlarms", "AlarmName");
    },
  },
  listAlarmArns: {
    script: ["aws", "cloudwatch", "describe-alarms"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "MetricAlarms", "AlarmArn");
    },
  },
  listAdNamespaces: {
    script: ["aws", "cloudwatch", "describe-anomaly-detectors"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "AnomalyDetectors", "Namespace");
    },
  },
  listMetricNamespaces: {
    script: ["aws", "cloudwatch", "list-metrics"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Metrics", "Namespace");
    },
  },
  listMetricsForNamespace: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "list-metrics",
        ["--namespace"],
        "Metrics",
        "MetricName"
      );
    },
  },
  listMetricDimensions: {
    custom: async function (tokens, executeShellCommand) {
      return listDimensionTypes(
        tokens,
        executeShellCommand,
        "list-metrics",
        "--namespace",
        "Metrics",
        "Dimensions"
      );
    },
  },
  listAdDimensions: {
    custom: async function (tokens, executeShellCommand) {
      return listDimensionTypes(
        tokens,
        executeShellCommand,
        "describe-anomaly-detectors",
        "--namespace",
        "AnomalyDetectors",
        "Dimensions"
      );
    },
  },
  listAssociatedStats: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "describe-anomaly-detectors",
        ["--namespace", "--metric-name"],
        "AnomalyDetectors",
        "Stat"
      );
    },
  },
  listDashboards: {
    script: ["aws", "cloudwatch", "list-dashboards"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "DashboardEntries", "DashboardName");
    },
  },
  listInsightRules: {
    script: ["aws", "cloudwatch", "describe-insight-rules"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "InsightRules", "Name");
    },
  },
  listMetricStreams: {
    script: ["aws", "cloudwatch", "list-metric-streams"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Entries", "Name");
    },
  },
  listMetrics: {
    script: ["aws", "cloudwatch", "list-metrics"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Metrics", "MetricName");
    },
  },
  listSNSTopics: {
    script: ["aws", "sns", "list-topics"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Topics", "TopicArn");
    },
  },
  listFirehoseArns: {
    // AWS is dumb, and firehose cli works totally different than other CLIs.
    // First we need to get a list of stream names, then we have to describe each
    // individually, to get an ARN
    custom: async function (tokens, executeShellCommand) {
      // get list of stream names
      const result = await getResultList(
        tokens,
        executeShellCommand,
        ["firehose", "list-delivery-streams"],
        "DeliveryStreamNames"
      );
      // construct "query"
      const objects = result.flat().map((stream) => {
        return {
          command: [
            "firehose",
            "describe-delivery-stream",
            "--delivery-stream-name",
            Array.isArray(stream.name) ? stream.name[0] : stream.name,
          ],
          parentKey: "DeliveryStreamDescription",
          childKey: "DeliveryStreamARN",
        };
      });
      // Fire up multiple API calls
      return MultiSuggestionsGenerator(tokens, executeShellCommand, [
        ...objects,
      ]);
    },
  },
  listRoles: {
    script: ["aws", "iam", "list-roles"],
    postProcess: (out) => {
      return postPrecessGenerator(out, "Roles", "Arn");
    },
  },
};
const completionSpec: Fig.Spec = {
  name: "cloudwatch",
  description:
    "Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications. CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money. In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health",
  subcommands: [
    {
      name: "delete-alarms",
      description:
        "Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.  If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the DescribeAlarms operation after using DeleteAlarms.  It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete. To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the AlarmRule of one of the alarms to false.  Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path",
      options: [
        {
          name: "--alarm-names",
          description:
            "The alarms to be deleted. Do not enclose the alarm names in quote marks",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listAlarms,
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
      name: "delete-anomaly-detector",
      description:
        "Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see Deleting an anomaly detection model in the CloudWatch User Guide",
      options: [
        {
          name: "--namespace",
          description:
            "The namespace associated with the anomaly detection model to delete",
          args: {
            name: "string",
            generators: generators.listAdNamespaces,
          },
        },
        {
          name: "--metric-name",
          description:
            "The metric name associated with the anomaly detection model to delete",
          args: {
            name: "string",
            generators: generators.listMetricsForNamespace,
          },
        },
        {
          name: "--dimensions",
          description:
            "The metric dimensions associated with the anomaly detection model to delete",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listAdDimensions,
          },
        },
        {
          name: "--stat",
          description:
            "The statistic associated with the anomaly detection model to delete",
          args: {
            name: "string",
            generators: generators.listAssociatedStats,
          },
        },
        {
          name: "--single-metric-anomaly-detector",
          description:
            "A single metric anomaly detector to be deleted. When using SingleMetricAnomalyDetector, you cannot include the following parameters in the same operation:    Dimensions,    MetricName     Namespace     Stat    the MetricMathAnomalyDetector parameters of DeleteAnomalyDetectorInput    Instead, specify the single metric anomaly detector attributes as part of the SingleMetricAnomalyDetector property",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-math-anomaly-detector",
          description:
            "The metric math anomaly detector to be deleted. When using MetricMathAnomalyDetector, you cannot include following parameters in the same operation:    Dimensions,    MetricName     Namespace     Stat    the SingleMetricAnomalyDetector parameters of DeleteAnomalyDetectorInput    Instead, specify the metric math anomaly detector attributes as part of the MetricMathAnomalyDetector property",
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
      name: "delete-dashboards",
      description:
        "Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted",
      options: [
        {
          name: "--dashboard-names",
          description:
            "The dashboards to be deleted. This parameter is required",
          args: {
            name: "list",
            generators: generators.listDashboards,
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
      name: "delete-insight-rules",
      description:
        "Permanently deletes the specified Contributor Insights rules. If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available",
      options: [
        {
          name: "--rule-names",
          description:
            "An array of the rule names to delete. If you need to find out the names of your rules, use DescribeInsightRules",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listInsightRules,
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
      name: "delete-metric-stream",
      description: "Permanently deletes the metric stream that you specify",
      options: [
        {
          name: "--name",
          description: "The name of the metric stream to delete",
          args: {
            name: "string",
            generators: generators.listMetricStreams,
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
      name: "describe-alarm-history",
      description:
        "Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned. CloudWatch retains the history of an alarm even if you delete the alarm. To use this operation and return information about a composite alarm, you must be signed on with the cloudwatch:DescribeAlarmHistory permission that is scoped to *. You can't return information about composite alarms if your cloudwatch:DescribeAlarmHistory permission has a narrower scope",
      options: [
        {
          name: "--alarm-name",
          description: "The name of the alarm",
          args: {
            name: "string",
            generators: generators.listAlarms,
          },
        },
        {
          name: "--alarm-types",
          description:
            "Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: metricTypes,
          },
        },
        {
          name: "--history-item-type",
          description: "The type of alarm histories to retrieve",
          args: {
            name: "string",
            suggestions: ["ConfigurationUpdate", "StateUpdate", "Action"],
          },
        },
        {
          name: "--start-date",
          description: "The starting date to retrieve alarm history",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date",
          description: "The ending date to retrieve alarm history",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of alarm history records to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call to indicate that there is more data available",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-by",
          description:
            "Specified whether to return the newest or oldest alarm history first. Specify TimestampDescending to have the newest event history returned first, and specify TimestampAscending to have the oldest history returned first",
          args: {
            name: "string",
            suggestions: ["TimestampDescending", "TimestampAscending"],
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
      name: "describe-alarms",
      description:
        "Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action. To use this operation and return information about composite alarms, you must be signed on with the cloudwatch:DescribeAlarms permission that is scoped to *. You can't return information about composite alarms if your cloudwatch:DescribeAlarms permission has a narrower scope",
      options: [
        {
          name: "--alarm-names",
          description: "The names of the alarms to retrieve information about",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listAlarms,
          },
        },
        {
          name: "--alarm-name-prefix",
          description:
            "An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix. If this parameter is specified, you cannot specify AlarmNames",
          args: {
            name: "string",
          },
        },
        {
          name: "--alarm-types",
          description:
            "Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned, even if composite alarms exist in the account. For example, if you omit this parameter or specify MetricAlarms, the operation returns only a list of metric alarms. It does not return any composite alarms, even if composite alarms exist in the account. If you specify CompositeAlarms, the operation returns only a list of composite alarms, and does not return any metric alarms",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: metricTypes,
          },
        },
        {
          name: "--children-of-alarm-name",
          description:
            'If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the AlarmRule field of the composite alarm that you specify in ChildrenOfAlarmName. Information about the composite alarm that you name in ChildrenOfAlarmName is not returned. If you specify ChildrenOfAlarmName, you cannot specify any other parameters in the request except for MaxRecords and NextToken. If you do so, you receive a validation error.  Only the Alarm Name, ARN, StateValue (OK/ALARM/INSUFFICIENT_DATA), and StateUpdatedTimestamp information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another DescribeAlarms operation and specify the parent alarm names in the AlarmNames parameter',
          args: {
            name: "string",
          },
        },
        {
          name: "--parents-of-alarm-name",
          description:
            'If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have AlarmRule parameters that reference the alarm named in ParentsOfAlarmName. Information about the alarm that you specify in ParentsOfAlarmName is not returned. If you specify ParentsOfAlarmName, you cannot specify any other parameters in the request except for MaxRecords and NextToken. If you do so, you receive a validation error.  Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another DescribeAlarms operation and specify the parent alarm names in the AlarmNames parameter',
          args: {
            name: "string",
          },
        },
        {
          name: "--state-value",
          description:
            "Specify this parameter to receive information only about alarms that are currently in the state that you specify",
          args: {
            name: "string",
            suggestions: alarmStates,
          },
        },
        {
          name: "--action-prefix",
          description:
            "Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description: "The maximum number of alarm descriptions to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call to indicate that there is more data available",
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
      name: "describe-alarms-for-metric",
      description:
        "Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit. This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric",
      options: [
        {
          name: "--metric-name",
          description: "The name of the metric",
          args: {
            name: "string",
            generators: generators.listMetricsForNamespace,
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the metric",
          args: {
            name: "string",
            generators: generators.listMetricNamespaces,
          },
        },
        {
          name: "--statistic",
          description:
            "The statistic for the metric, other than percentiles. For percentile statistics, use ExtendedStatistics",
          args: {
            name: "string",
            suggestions: statistics,
          },
        },
        {
          name: "--extended-statistic",
          description:
            "The percentile statistic for the metric. Specify a value between p0.0 and p100",
          args: {
            name: "string",
          },
        },
        {
          name: "--dimensions",
          description:
            "The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listMetricDimensions,
          },
        },
        {
          name: "--period",
          description:
            "The period, in seconds, over which the statistic is applied",
          args: {
            name: "integer",
          },
        },
        {
          name: "--unit",
          description: "The unit for the metric",
          args: {
            name: "string",
            suggestions: unit,
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
      name: "describe-anomaly-detectors",
      description:
        "Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding METRIC_MATH to the AnomalyDetectorTypes array. This will return all metric math anomaly detectors in your account",
      options: [
        {
          name: "--next-token",
          description:
            "Use the token returned by the previous operation to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. The maximum value that you can specify is 100. To retrieve the remaining results, make another call with the returned NextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description:
            "Limits the results to only the anomaly detection models that are associated with the specified namespace",
          args: {
            name: "string",
            generators: generators.listAdNamespaces,
          },
        },
        {
          name: "--metric-name",
          description:
            "Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned",
          args: {
            name: "string",
            generators: generators.listMetrics,
          },
        },
        {
          name: "--dimensions",
          description:
            "Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listAdDimensions,
          },
        },
        {
          name: "--anomaly-detector-types",
          description:
            "The anomaly detector types to request when using DescribeAnomalyDetectorsInput. If empty, defaults to SINGLE_METRIC",
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
      name: "describe-insight-rules",
      description:
        "Returns a list of all the Contributor Insights rules in your account. For more information about Contributor Insights, see Using Contributor Insights to Analyze High-Cardinality Data",
      options: [
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous operation, to get the next set of rules",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default of 500 is used",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disable-alarm-actions",
      description:
        "Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes",
      options: [
        {
          name: "--alarm-names",
          description: "The names of the alarms",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listAlarms,
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
      name: "disable-insight-rules",
      description:
        "Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs",
      options: [
        {
          name: "--rule-names",
          description:
            "An array of the rule names to disable. If you need to find out the names of your rules, use DescribeInsightRules",
          args: {
            name: "list",
            generators: generators.listInsightRules,
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
      name: "enable-alarm-actions",
      description: "Enables the actions for the specified alarms",
      options: [
        {
          name: "--alarm-names",
          description: "The names of the alarms",
          args: {
            name: "list",
            generators: generators.listAlarms,
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
      name: "enable-insight-rules",
      description:
        "Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data",
      options: [
        {
          name: "--rule-names",
          description:
            "An array of the rule names to enable. If you need to find out the names of your rules, use DescribeInsightRules",
          args: {
            name: "list",
            generators: generators.listInsightRules,
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
      name: "get-dashboard",
      description:
        "Displays the details of the dashboard that you specify. To copy an existing dashboard, use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard to create the copy",
      options: [
        {
          name: "--dashboard-name",
          description: "The name of the dashboard to be described",
          args: {
            name: "string",
            generators: generators.listDashboards,
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
      name: "get-insight-rule-report",
      description:
        "This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group. You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:    UniqueContributors -- the number of unique contributors for each data point.    MaxContributorValue -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph. If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's Value, during that period.    SampleCount -- the number of data points matched by the rule.    Sum -- the sum of the values from all contributors during the time period represented by that data point.    Minimum -- the minimum value from a single observation during the time period represented by that data point.    Maximum -- the maximum value from a single observation during the time period represented by that data point.    Average -- the average value from all contributors during the time period represented by that data point",
      options: [
        {
          name: "--rule-name",
          description: "The name of the rule that you want to see data from",
          args: {
            name: "string",
            generators: generators.listInsightRules,
          },
        },
        {
          name: "--start-time",
          description:
            "The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--period",
          description:
            "The period, in seconds, to use for the statistics in the InsightRuleMetricDatapoint results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-contributor-count",
          description:
            "The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used",
          args: {
            name: "integer",
            suggestions: Array.from({ length: 101 - 1 }, (v, k) =>
              String(k + 1)
            ),
          },
        },
        {
          name: "--metrics",
          description:
            "Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more of the following metrics:    UniqueContributors -- the number of unique contributors for each data point.    MaxContributorValue -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph. If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's Value, during that period.    SampleCount -- the number of data points matched by the rule.    Sum -- the sum of the values from all contributors during the time period represented by that data point.    Minimum -- the minimum value from a single observation during the time period represented by that data point.    Maximum -- the maximum value from a single observation during the time period represented by that data point.    Average -- the average value from all contributors during the time period represented by that data point",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: [
              "UniqueContributors",
              "MaxContributorValue",
              "SampleCount",
              "Sum",
              "Minimum",
              "Maximum",
              "Average",
            ],
          },
        },
        {
          name: "--order-by",
          description:
            "Determines what statistic to use to rank the contributors. Valid values are Sum and Maximum",
          args: {
            name: "string",
            suggestions: ["SUM", "MAXIMUM"],
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
      name: "get-metric-data",
      description:
        "You can use the GetMetricData API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions. A GetMetricData operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. If you include a Metrics Insights query, each GetMetricData operation can include only one query. But the same GetMetricData operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see Query your metrics with CloudWatch Metrics Insights. Calls to the GetMetricData API have a different pricing structure than calls to GetMetricStatistics. For more information about pricing, see Amazon CloudWatch Pricing. Amazon CloudWatch retains metric data as follows:   Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).   Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. If you omit Unit in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.  Using Metrics Insights queries with metric math  You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a GROUP BY clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a GROUP BY clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series",
      options: [
        {
          name: "--metric-data-queries",
          description:
            "The metric queries to be returned. A single GetMetricData call can include as many as 500 MetricDataQuery structures. Each of these structures can specify either a metric to retrieve, a Metrics Insights query, or a math expression to perform on retrieved data",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--start-time",
          description:
            "The time stamp indicating the earliest data to be returned. The value specified is inclusive; results include data points with the specified time stamp.  CloudWatch rounds the specified time stamp as follows:   Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.   Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.   Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.   If you set Period to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15.  For better performance, specify StartTime and EndTime values that align with the value of the metric's Period and sync up with the beginning and end of an hour. For example, if the Period of a metric is 5 minutes, specifying 12:05 or 12:30 as StartTime can get a faster response from CloudWatch than setting 12:07 or 12:29 as the StartTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The time stamp indicating the latest data to be returned. The value specified is exclusive; results include data points up to the specified time stamp. For better performance, specify StartTime and EndTime values that align with the value of the metric's Period and sync up with the beginning and end of an hour. For example, if the Period of a metric is 5 minutes, specifying 12:05 or 12:30 as EndTime can get a faster response from CloudWatch than setting 12:07 or 12:29 as the EndTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous GetMetricData operation, to get the next set of data points",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-by",
          description:
            "The order in which data points should be returned. TimestampDescending returns the newest data first and paginates when the MaxDatapoints limit is reached. TimestampAscending returns the oldest data first and paginates when the MaxDatapoints limit is reached. If you omit this parameter, the default of TimestampDescending is used",
          args: {
            name: "string",
            suggestions: ["TimestampDescending", "TimestampAscending"],
          },
        },
        {
          name: "--max-datapoints",
          description:
            "The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used",
          args: {
            name: "integer",
          },
        },
        {
          name: "--label-options",
          description:
            "This structure includes the Timezone parameter, which you can use to specify your time zone so that the labels of returned data display the correct time for your time zone",
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
      name: "get-metric-statistics",
      description:
        "Gets statistics for the specified metric. The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order. CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:   The SampleCount value of the statistic set is 1.   The Min and the Max values of the statistic set are equal.   Percentile statistics are not available for metrics when any of the metric values are negative numbers. Amazon CloudWatch retains metric data as follows:   Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a StorageResolution of 1.   Data points with a period of 60 seconds (1-minute) are available for 15 days.   Data points with a period of 300 seconds (5-minute) are available for 63 days.   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).   Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour. CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016. For information about metrics and dimensions supported by Amazon Web Services services, see the Amazon CloudWatch Metrics and Dimensions Reference in the Amazon CloudWatch User Guide",
      options: [
        {
          name: "--namespace",
          description: "The namespace of the metric, with or without spaces",
          args: {
            name: "string",
            generators: generators.listMetricNamespaces,
          },
        },
        {
          name: "--metric-name",
          description: "The name of the metric, with or without spaces",
          args: {
            name: "string",
            generators: generators.listMetricsForNamespace,
          },
        },
        {
          name: "--dimensions",
          description:
            "The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can't retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see Dimension Combinations in the Amazon CloudWatch User Guide. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listMetricDimensions,
          },
        },
        {
          name: "--start-time",
          description:
            "The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request. The value specified is inclusive; results include data points with the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z). CloudWatch rounds the specified time stamp as follows:   Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.   Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.   Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.   If you set Period to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The time stamp that determines the last data point to return. The value specified is exclusive; results include data points up to the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--period",
          description:
            "The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a PutMetricData call that includes a StorageResolution of 1 second. If the StartTime parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:   Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).   Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).   Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--statistics",
          description:
            "The metric statistics, other than percentile. For percentile statistics, use ExtendedStatistics. When calling GetMetricStatistics, you must specify either Statistics or ExtendedStatistics, but not both",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: statistics,
          },
        },
        {
          name: "--extended-statistics",
          description:
            "The percentile statistics. Specify values between p0.0 and p100. When calling GetMetricStatistics, you must specify either Statistics or ExtendedStatistics, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--unit",
          description:
            "The unit for a given metric. If you omit Unit, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions",
          args: {
            name: "string",
            suggestions: unit,
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
      name: "get-metric-stream",
      description:
        "Returns information about the metric stream that you specify",
      options: [
        {
          name: "--name",
          description:
            "The name of the metric stream to retrieve information about",
          args: {
            name: "string",
            generators: generators.listMetricStreams,
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
      name: "get-metric-widget-image",
      description:
        "You can use the GetMetricWidgetImage API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard. The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations. There is a limit of 20 transactions per second for this API. Each GetMetricWidgetImage action has the following limits:   As many as 100 metrics in the graph.   Up to 100 KB uncompressed payload",
      options: [
        {
          name: "--metric-widget",
          description:
            "A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one MetricWidget parameter in each GetMetricWidgetImage call. For more information about the syntax of MetricWidget see GetMetricWidgetImage: Metric Widget Structure and Syntax. If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-format",
          description:
            "The format of the resulting image. Only PNG images are supported. The default is png. If you specify png, the API returns an HTTP response with the content-type set to text/xml. The image data is in a MetricWidgetImage field. For example:   <GetMetricWidgetImageResponse xmlns=<URLstring>>    <GetMetricWidgetImageResult>    <MetricWidgetImage>    iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...    </MetricWidgetImage>    </GetMetricWidgetImageResult>    <ResponseMetadata>    <RequestId>6f0d4192-4d42-11e8-82c1-f539a07e0e3b</RequestId>    </ResponseMetadata>   </GetMetricWidgetImageResponse>  The image/png setting is intended only for custom HTTP requests. For most use cases, and all actions using an Amazon Web Services SDK, you should use png. If you specify image/png, the HTTP response has a content-type set to image/png, and the body of the response is a PNG image",
          args: {
            name: "string",
            suggestions: ["png"],
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
      name: "list-dashboards",
      description:
        "Returns a list of the dashboards for your account. If you include DashboardNamePrefix, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed.   ListDashboards returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call ListDashboards again and include the value you received for NextToken in the first call, to receive the next 1000 results",
      options: [
        {
          name: "--dashboard-name-prefix",
          description:
            'If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_"',
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call to indicate that there is more data available",
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
      name: "list-managed-insight-rules",
      description:
        "Returns a list that contains the number of managed Contributor Insights rules in your account",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of an Amazon Web Services resource that has managed Contributor Insights rules",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "Include this value to get the next set of rules if the value was returned by the previous operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation. If you omit this parameter, the default number is used. The default number is 100",
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
      name: "list-metric-streams",
      description: "Returns a list of metric streams in this account",
      options: [
        {
          name: "--next-token",
          description:
            "Include this value, if it was returned by the previous call, to get the next set of metric streams",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in one operation",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-metrics",
      description:
        "List the specified metrics. You can use the returned metrics with GetMetricData or GetMetricStatistics to get statistical data. Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls. After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use GetMetricData or GetMetricStatistics. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see CloudWatch cross-account observability.  ListMetrics doesn't return information about metrics if those metrics haven't reported data in the past two weeks. To retrieve those metrics, use GetMetricData or GetMetricStatistics",
      options: [
        {
          name: "--namespace",
          description:
            "The metric namespace to filter against. Only the namespace that matches exactly will be returned",
          args: {
            name: "string",
            generators: generators.listMetricNamespaces,
          },
        },
        {
          name: "--metric-name",
          description:
            "The name of the metric to filter against. Only the metrics with names that match exactly will be returned",
          args: {
            name: "string",
            generators: generators.listMetrics,
          },
        },
        {
          name: "--dimensions",
          description:
            "The dimensions to filter against. Only the dimensions that match exactly will be returned",
          args: {
            name: "list",
            generators: generators.listMetricDimensions,
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a previous call to indicate that there is more data available",
          args: {
            name: "string",
          },
        },
        {
          name: "--recently-active",
          description:
            "To filter the results to show only metrics that have had data points published in the past three hours, specify this parameter with a value of PT3H. This is the only valid value for this parameter. The results that are returned are an approximation of the value you specify. There is a low probability that the returned results include metrics with last published data as much as 50 minutes more than the specified time interval",
          args: {
            name: "string",
            suggestions: ["PT3H"],
          },
        },
        {
          name: "--include-linked-accounts",
          description:
            "If you are using this operation in a monitoring account, specify true to include metrics from source accounts in the returned data. The default is false",
        },
        {
          name: "--no-include-linked-accounts",
          description:
            "If you are using this operation in a monitoring account, specify true to include metrics from source accounts in the returned data. The default is false",
        },
        {
          name: "--owning-account",
          description:
            "When you use this operation in a monitoring account, use this field to return metrics only from one source account. To do so, specify that source account ID in this field, and also specify true for IncludeLinkedAccounts",
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
        "Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch resource that you want to view tags for. The ARN format of an alarm is arn:aws:cloudwatch:Region:account-id:alarm:alarm-name   The ARN format of a Contributor Insights rule is arn:aws:cloudwatch:Region:account-id:insight-rule/insight-rule-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference",
          args: {
            name: "string",
            generators: generators.listAlarmArns,
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
      name: "put-anomaly-detector",
      description:
        "Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed. If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account. You can specify the account ID in the object you specify in the SingleMetricAnomalyDetector parameter. For more information, see CloudWatch Anomaly Detection",
      options: [
        {
          name: "--namespace",
          description:
            "The namespace of the metric to create the anomaly detection model for",
          args: {
            name: "string",
            suggestions: namespaces,
          },
        },
        {
          name: "--metric-name",
          description:
            "The name of the metric to create the anomaly detection model for",
          args: {
            name: "string",
            generators: generators.listMetrics,
          },
        },
        {
          name: "--dimensions",
          description:
            "The metric dimensions to create the anomaly detection model for",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listAdDimensions,
          },
        },
        {
          name: "--stat",
          description:
            "The statistic to use for the metric and the anomaly detection model",
          args: {
            name: "string",
            generators: generators.listAssociatedStats,
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges. The configuration can also include the time zone to use for the metric",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-characteristics",
          description:
            "Use this object to include parameters to provide information about your metric to CloudWatch to help it build more accurate anomaly detection models. Currently, it includes the PeriodicSpikes parameter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--single-metric-anomaly-detector",
          description:
            "A single metric anomaly detector to be created. When using SingleMetricAnomalyDetector, you cannot include the following parameters in the same operation:    Dimensions     MetricName     Namespace     Stat    the MetricMathAnomalyDetector parameters of PutAnomalyDetectorInput    Instead, specify the single metric anomaly detector attributes as part of the property SingleMetricAnomalyDetector",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-math-anomaly-detector",
          description:
            "The metric math anomaly detector to be created. When using MetricMathAnomalyDetector, you cannot include the following parameters in the same operation:    Dimensions     MetricName     Namespace     Stat    the SingleMetricAnomalyDetector parameters of PutAnomalyDetectorInput    Instead, specify the metric math anomaly detector attributes as part of the property MetricMathAnomalyDetector",
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
      name: "put-composite-alarm",
      description:
        "Creates or updates a composite alarm. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met. The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms. Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state. Composite alarms can take the following actions:   Notify Amazon SNS topics.   Invoke Lambda functions.   Create OpsItems in Systems Manager Ops Center.   Create incidents in Systems Manager Incident Manager.    It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete. To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the AlarmRule of one of the alarms to false.  Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path.   When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in INSUFFICIENT_DATA state. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. To use this operation, you must be signed on with the cloudwatch:PutCompositeAlarm permission that is scoped to *. You can't create a composite alarms if your cloudwatch:PutCompositeAlarm permission has a narrower scope. If you are an IAM user, you must have iam:CreateServiceLinkedRole to create a composite alarm that has Systems Manager OpsItem actions",
      options: [
        {
          name: "--actions-enabled",
          description:
            "Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is TRUE",
        },
        {
          name: "--no-actions-enabled",
          description:
            "Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is TRUE",
        },
        {
          name: "--alarm-actions",
          description:
            "The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: ]  Amazon SNS actions:   arn:aws:sns:region:account-id:sns-topic-name    Lambda actions:    Invoke the latest version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name     Invoke a specific version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name:version-number     Invoke a function by using an alias Lambda function: arn:aws:lambda:region:account-id:function:function-name:alias-name      Systems Manager actions:   arn:aws:ssm:region:account-id:opsitem:severity    Start a Amazon Q Developer operational investigation   arn:aws:aiops:region:account-id:investigation-group:ingestigation-group-id",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--alarm-description",
          description: "The description for the composite alarm",
          args: {
            name: "string",
          },
        },
        {
          name: "--alarm-name",
          description:
            "The name for the composite alarm. This name must be unique within the Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--alarm-rule",
          description:
            'An expression that specifies which other alarms are to be evaluated to determine this composite alarm\'s state. For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression. You can use either alarm names or ARNs to reference the other alarms that are to be evaluated. Functions can include the following:    ALARM("alarm-name or alarm-ARN") is TRUE if the named alarm is in ALARM state.    OK("alarm-name or alarm-ARN") is TRUE if the named alarm is in OK state.    INSUFFICIENT_DATA("alarm-name or alarm-ARN") is TRUE if the named alarm is in INSUFFICIENT_DATA state.    TRUE always evaluates to TRUE.    FALSE always evaluates to FALSE.   TRUE and FALSE are useful for testing a complex AlarmRule structure, and for testing your alarm actions. Alarm names specified in AlarmRule can be surrounded with double-quotes ("), but do not have to be. The following are some examples of AlarmRule:    ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh) specifies that the composite alarm goes into ALARM state only if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.    ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress) specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state and DeploymentInProgress is not in ALARM state. This example reduces alarm noise during a known deployment window.    (ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh) goes into ALARM state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state. This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an alarm action on high CPU or disk usage if a known network problem is also occurring.   The AlarmRule can specify as many as 100 "children" alarms. The AlarmRule expression can have as many as 500 elements. Elements are child alarms, TRUE or FALSE statements, and parentheses',
          args: {
            name: "string",
          },
        },
        {
          name: "--insufficient-data-actions",
          description:
            "The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: ]  Amazon SNS actions:   arn:aws:sns:region:account-id:sns-topic-name    Lambda actions:    Invoke the latest version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name     Invoke a specific version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name:version-number     Invoke a function by using an alias Lambda function: arn:aws:lambda:region:account-id:function:function-name:alias-name",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--ok-actions",
          description:
            "The actions to execute when this alarm transitions to an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: ]  Amazon SNS actions:   arn:aws:sns:region:account-id:sns-topic-name    Lambda actions:    Invoke the latest version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name     Invoke a specific version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name:version-number     Invoke a function by using an alias Lambda function: arn:aws:lambda:region:account-id:function:function-name:alias-name",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listSNSTopics,
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the cloudwatch:TagResource permission. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use TagResource or UntagResource",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--actions-suppressor",
          description:
            "Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions-suppressor-wait-period",
          description:
            "The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the ALARM state. After this time, the composite alarm performs its actions.    WaitPeriod is required only when ActionsSuppressor is specified",
          args: {
            name: "integer",
          },
        },
        {
          name: "--actions-suppressor-extension-period",
          description:
            "The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the ALARM state. After this time, the composite alarm performs its actions.    ExtensionPeriod is required only when ActionsSuppressor is specified",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-dashboard",
      description:
        "Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here. All dashboards in your account are global, not region-specific. A simple way to create a dashboard using PutDashboard is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use GetDashboard, and then use the data returned within DashboardBody as the template for the new dashboard when you call PutDashboard. When you create a dashboard with PutDashboard, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the DashboardBody script or the CloudFormation template used to create the dashboard",
      options: [
        {
          name: "--dashboard-name",
          description:
            'The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required',
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-body",
          description:
            "The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required. For more information about the syntax, see Dashboard Body Structure and Syntax",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "put-insight-rule",
      description:
        "Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see Using Contributor Insights to Analyze High-Cardinality Data. If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available",
      options: [
        {
          name: "--rule-name",
          description: "A unique name for the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-state",
          description:
            "The state of the rule. Valid values are ENABLED and DISABLED",
          args: {
            name: "string",
            suggestions: ["ENABLES", "DISABLED"],
          },
        },
        {
          name: "--rule-definition",
          description:
            "The definition of the rule, as a JSON object. For details on the valid syntax, see Contributor Insights Rule Syntax",
          args: {
            name: "string",
            generators: generators.listFiles,
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the Contributor Insights rule. You can associate as many as 50 tags with a rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values. To be able to associate tags with a rule, you must have the cloudwatch:TagResource permission in addition to the cloudwatch:PutInsightRule permission. If you are using this operation to update an existing Contributor Insights rule, any tags you specify in this parameter are ignored. To change the tags of an existing rule, use TagResource",
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
      name: "put-managed-insight-rules",
      description:
        "Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with PutInsightRule. The rules can be enabled, disabled, and deleted using EnableInsightRules, DisableInsightRules, and DeleteInsightRules. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use ListManagedInsightRules to describe all available rules",
      options: [
        {
          name: "--managed-rules",
          description: "A list of ManagedRules to enable",
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
      name: "put-metric-alarm",
      description:
        "Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see Create alarms on Metrics Insights queries. Alarms based on anomaly detection models cannot have Auto Scaling actions. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:   The iam:CreateServiceLinkedRole permission for all alarms with EC2 actions   The iam:CreateServiceLinkedRole permissions to create an alarm with Systems Manager OpsItem or response plan actions.   The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called AWSServiceRoleForCloudWatchEvents and AWSServiceRoleForCloudWatchAlarms_ActionSSM. For more information, see Amazon Web Services service-linked role. Each PutMetricAlarm action has a maximum uncompressed payload of 120 KB.  Cross-account alarms  You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:   The account where the metrics are located (the sharing account) must already have a sharing role named CloudWatch-CrossAccountSharingRole. If it does not already have this role, you must create it using the instructions in Set up a sharing account in  Cross-account cross-Region CloudWatch console. The policy for that role must grant access to the ID of the account where you are creating the alarm.    The account where you are creating the alarm (the monitoring account) must already have a service-linked role named AWSServiceRoleForCloudWatchCrossAccount to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in Set up a monitoring account in  Cross-account cross-Region CloudWatch console",
      options: [
        {
          name: "--alarm-name",
          description:
            "The name for the alarm. This name must be unique within the Region. The name must contain only UTF-8 characters, and can't contain ASCII control characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--alarm-description",
          description: "The description for the alarm",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions-enabled",
          description:
            "Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE",
        },
        {
          name: "--no-actions-enabled",
          description:
            "Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE",
        },
        {
          name: "--ok-actions",
          description:
            "The actions to execute when this alarm transitions to an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:  EC2 actions:     arn:aws:automate:region:ec2:stop     arn:aws:automate:region:ec2:terminate     arn:aws:automate:region:ec2:reboot     arn:aws:automate:region:ec2:recover     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0     Autoscaling action:     arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name      Lambda actions:    Invoke the latest version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name     Invoke a specific version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name:version-number     Invoke a function by using an alias Lambda function: arn:aws:lambda:region:account-id:function:function-name:alias-name      SNS notification action:     arn:aws:sns:region:account-id:sns-topic-name      SSM integration actions:     arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name      arn:aws:ssm-incidents::account-id:responseplan/response-plan-name",
          args: {
            name: "list",
          },
        },
        {
          name: "--alarm-actions",
          description:
            "The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:  EC2 actions:     arn:aws:automate:region:ec2:stop     arn:aws:automate:region:ec2:terminate     arn:aws:automate:region:ec2:reboot     arn:aws:automate:region:ec2:recover     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0     Autoscaling action:     arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name      Lambda actions:    Invoke the latest version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name     Invoke a specific version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name:version-number     Invoke a function by using an alias Lambda function: arn:aws:lambda:region:account-id:function:function-name:alias-name      SNS notification action:     arn:aws:sns:region:account-id:sns-topic-name      SSM integration actions:     arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name      arn:aws:ssm-incidents::account-id:responseplan/response-plan-name      Start a Amazon Q Developer operational investigation   arn:aws:aiops:region:account-id:investigation-group:ingestigation-group-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--insufficient-data-actions",
          description:
            "The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:  EC2 actions:     arn:aws:automate:region:ec2:stop     arn:aws:automate:region:ec2:terminate     arn:aws:automate:region:ec2:reboot     arn:aws:automate:region:ec2:recover     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0     arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0     Autoscaling action:     arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name      Lambda actions:    Invoke the latest version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name     Invoke a specific version of a Lambda function: arn:aws:lambda:region:account-id:function:function-name:version-number     Invoke a function by using an alias Lambda function: arn:aws:lambda:region:account-id:function:function-name:alias-name      SNS notification action:     arn:aws:sns:region:account-id:sns-topic-name      SSM integration actions:     arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name      arn:aws:ssm-incidents::account-id:responseplan/response-plan-name",
          args: {
            name: "list",
          },
        },
        {
          name: "--metric-name",
          description:
            "The name for the metric associated with the alarm. For each PutMetricAlarm operation, you must specify either MetricName or a Metrics array. If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the Namespace, Dimensions, Period, Unit, Statistic, or ExtendedStatistic parameters. Instead, you specify all this information in the Metrics array",
          args: {
            name: "string",
            generators: generators.listMetrics,
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace for the metric associated specified in MetricName",
          args: {
            name: "string",
            generators: generators.listMetricNamespaces,
          },
        },
        {
          name: "--statistic",
          description:
            "The statistic for the metric specified in MetricName, other than percentile. For percentile statistics, use ExtendedStatistic. When you call PutMetricAlarm and specify a MetricName, you must specify either Statistic or ExtendedStatistic, but not both",
          args: {
            name: "string",
            suggestions: statistics,
          },
        },
        {
          name: "--extended-statistic",
          description:
            "The extended statistic for the metric specified in MetricName. When you call PutMetricAlarm and specify a MetricName, you must specify either Statistic or ExtendedStatistic but not both. If you specify ExtendedStatistic, the following are valid values:    p90     tm90     tc90     ts90     wm90     IQM     PR(n:m) where n and m are values of the metric    TC(X%:X%) where X is between 10 and 90 inclusive.    TM(X%:X%) where X is between 10 and 90 inclusive.    TS(X%:X%) where X is between 10 and 90 inclusive.    WM(X%:X%) where X is between 10 and 90 inclusive.   For more information about these extended statistics, see CloudWatch statistics definitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--dimensions",
          description: "The dimensions for the metric specified in MetricName",
          args: {
            name: "list",
            generators: generators.listMetricDimensions,
          },
        },
        {
          name: "--period",
          description:
            "The length, in seconds, used each time the metric specified in MetricName is evaluated. Valid values are 10, 30, and any multiple of 60.  Period is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the Metrics array. Be sure to specify 10 or 30 only for metrics that are stored by a PutMetricData call with a StorageResolution of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see Amazon CloudWatch Pricing. An alarm's total current evaluation period can be no longer than one day, so Period multiplied by EvaluationPeriods cannot be more than 86,400 seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--unit",
          description:
            "The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately. If you are creating an alarm based on a metric math expression, you can specify the unit for each metric (if needed) within the objects in the Metrics array. If you don't specify Unit, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually, metrics are published with only one unit, so the alarm works as intended. However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and it behaves unpredictably. We recommend omitting Unit so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the INSUFFICIENT DATA state",
          args: {
            name: "string",
            suggestions: unit,
          },
        },
        {
          name: "--evaluation-periods",
          description:
            'The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N. An alarm\'s total current evaluation period can be no longer than one day, so this number multiplied by Period cannot be more than 86,400 seconds',
          args: {
            name: "integer",
          },
        },
        {
          name: "--datapoints-to-alarm",
          description:
            'The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see Evaluating an Alarm in the Amazon CloudWatch User Guide',
          args: {
            name: "integer",
          },
        },
        {
          name: "--threshold",
          description:
            "The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models",
          args: {
            name: "double",
          },
        },
        {
          name: "--comparison-operator",
          description:
            "The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand. The values LessThanLowerOrGreaterThanUpperThreshold, LessThanLowerThreshold, and GreaterThanUpperThreshold are used only for alarms based on anomaly detection models",
          args: {
            name: "string",
            suggestions: [
              "GreaterThanOrEqualToThreshold",
              "GreaterThanThreshold",
              "LessThanThreshold",
              "LessThanOrEqualToThreshold",
              "LessThanLowerOrGreaterThanUpperThreshold",
              "LessThanLowerThreshold",
              "GreaterThanUpperThreshold",
            ],
          },
        },
        {
          name: "--treat-missing-data",
          description:
            "Sets how this alarm is to handle missing data points. If TreatMissingData is omitted, the default behavior of missing is used. For more information, see Configuring How CloudWatch Alarms Treats Missing Data. Valid Values: breaching | notBreaching | ignore | missing   Alarms that evaluate metrics in the AWS/DynamoDB namespace always ignore missing data even if you choose a different option for TreatMissingData. When an AWS/DynamoDB metric has missing data, alarms that evaluate that metric remain in their current state",
          args: {
            name: "string",
            suggestions: ["breaching", "notBreaching", "ignore", "missing"],
          },
        },
        {
          name: "--evaluate-low-sample-count-percentile",
          description:
            "Used only for alarms based on percentiles. If you specify ignore, the alarm state does not change during periods with too few data points to be statistically significant. If you specify evaluate or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see Percentile-Based CloudWatch Alarms and Low Data Samples. Valid Values: evaluate | ignore",
          args: {
            name: "string",
            suggestions: ["evaluate", "ignore"],
          },
        },
        {
          name: "--metrics",
          description:
            "An array of MetricDataQuery structures that enable you to create an alarm based on the result of a metric math expression. For each PutMetricAlarm operation, you must specify either MetricName or a Metrics array. Each item in the Metrics array either retrieves a metric or performs a math expression. One item in the Metrics array is the expression that the alarm watches. You designate this expression by setting ReturnData to true for this object in the array. For more information, see MetricDataQuery. If you use the Metrics parameter, you cannot include the Namespace, MetricName, Dimensions, Period, Unit, Statistic, or ExtendedStatistic parameters of PutMetricAlarm in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the Metrics array",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the cloudwatch:TagResource permission. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use TagResource or UntagResource. To use this field to set tags for an alarm when you create it, you must be signed on with both the cloudwatch:PutMetricAlarm and cloudwatch:TagResource permissions",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--threshold-metric-id",
          description:
            "If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function. For an example of how to use this parameter, see the Anomaly Detection Model Alarm example on this page. If your alarm uses this parameter, it cannot have Auto Scaling actions",
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
      name: "put-metric-data",
      description:
        "Publishes metric data to Amazon CloudWatch. CloudWatch associates the data with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. You can publish metrics with associated entity data (so that related telemetry can be found and viewed together), or publish metric data by itself. To send entity data with your metrics, use the EntityMetricData parameter. To send metrics without entity data, use the MetricData parameter. The EntityMetricData structure includes MetricData structures for the metric data. You can publish either individual values in the Value field, or arrays of values and the number of times each value occurred during the period by using the Values and Counts fields in the MetricData structure. Using the Values and Counts method enables you to publish up to 150 values per metric with one PutMetricData request, and supports retrieving percentile statistics on this data. Each PutMetricData request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics (across both the MetricData and EntityMetricData properties). Although the Value parameter accepts numbers of type Double, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported. You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see Publishing Metrics in the Amazon CloudWatch User Guide. You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricData or GetMetricStatistics from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for GetMetricData or GetMetricStatistics. CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:   The SampleCount value of the statistic set is 1 and Min, Max, and Sum are all equal.   The Min and Max are equal, and Sum is equal to Min multiplied by SampleCount",
      options: [
        {
          name: "--namespace",
          description:
            "The namespace for the metric data. You can use ASCII characters for the namespace, except for control characters which are not supported. To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with AWS/",
          args: {
            name: "string",
            suggestions: namespaces,
          },
        },
        {
          name: "--metric-data",
          description:
            "The data for the metrics. Use this parameter if your metrics do not contain associated entities. The array can include no more than 1000 metrics per call. The limit of metrics allowed, 1000, is the sum of both EntityMetricData and MetricData metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--entity-metric-data",
          description:
            "Data for metrics that contain associated entity information. You can include up to two EntityMetricData objects, each of which can contain a single Entity and associated metrics. The limit of metrics allowed, 1000, is the sum of both EntityMetricData and MetricData metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--strict-entity-validation",
          description:
            "Whether to accept valid metric data when an invalid entity is sent.   When set to true: Any validation error (for entity or metric data) will fail the entire request, and no data will be ingested. The failed operation will return a 400 result with the error.   When set to false: Validation errors in the entity will not associate the metric with the entity, but the metric data will still be accepted and ingested. Validation errors in the metric data will fail the entire request, and no data will be ingested. In the case of an invalid entity, the operation will return a 200 status, but an additional response header will contain information about the validation errors. The new header, X-Amzn-Failure-Message is an enumeration of the following values:    InvalidEntity - The provided entity is invalid.    InvalidKeyAttributes - The provided KeyAttributes of an entity is invalid.    InvalidAttributes - The provided Attributes of an entity is invalid.    InvalidTypeValue - The provided Type in the KeyAttributes of an entity is invalid.    EntitySizeTooLarge - The number of EntityMetricData objects allowed is 2.    MissingRequiredFields - There are missing required fields in the KeyAttributes for the provided Type.   For details of the requirements for specifying an entity, see How to add related information to telemetry in the CloudWatch User Guide.   This parameter is required when EntityMetricData is included",
        },
        {
          name: "--no-strict-entity-validation",
          description:
            "Whether to accept valid metric data when an invalid entity is sent.   When set to true: Any validation error (for entity or metric data) will fail the entire request, and no data will be ingested. The failed operation will return a 400 result with the error.   When set to false: Validation errors in the entity will not associate the metric with the entity, but the metric data will still be accepted and ingested. Validation errors in the metric data will fail the entire request, and no data will be ingested. In the case of an invalid entity, the operation will return a 200 status, but an additional response header will contain information about the validation errors. The new header, X-Amzn-Failure-Message is an enumeration of the following values:    InvalidEntity - The provided entity is invalid.    InvalidKeyAttributes - The provided KeyAttributes of an entity is invalid.    InvalidAttributes - The provided Attributes of an entity is invalid.    InvalidTypeValue - The provided Type in the KeyAttributes of an entity is invalid.    EntitySizeTooLarge - The number of EntityMetricData objects allowed is 2.    MissingRequiredFields - There are missing required fields in the KeyAttributes for the provided Type.   For details of the requirements for specifying an entity, see How to add related information to telemetry in the CloudWatch User Guide.   This parameter is required when EntityMetricData is included",
        },
        {
          name: "--metric-name",
          description: "The name of the metric",
          args: {
            name: "string",
            generators: generators.listMetrics,
          },
        },
        {
          name: "--timestamp",
          description:
            "The time stamp used for the metric.  If not specified, the default value is set to the time the metric data was received",
          args: {
            name: "string",
          },
        },
        {
          name: "--unit",
          description: "The unit of metric",
          args: {
            name: "string",
            suggestions: unit,
          },
        },
        {
          name: "--value",
          description:
            "The value for the metric.  Although the --value parameter accepts numbers of type Double, Amazon CloudWatch truncates values with very large exponents.  Values with base-10 exponents greater than 126 (1 x 10^126) are truncated.  Likewise, values with base-10 exponents less than -130 (1 x 10^-130) are also truncated",
          args: {
            name: "string",
          },
        },
        {
          name: "--dimensions",
          description:
            "The --dimensions argument further expands on the identity of a metric using a Name=Value pair, separated by commas, for example: --dimensions InstanceID=1-23456789,InstanceType=m1.small. Note that the --dimensions argument has a different format when used in get-metric-data, where for the same example you would use the format --dimensions Name=InstanceID,Value=i-aaba32d4 Name=InstanceType,value=m1.small",
          args: {
            name: "string",
            generators: generators.listMetricDimensions,
          },
        },
        {
          name: "--statistic-values",
          description: "A set of statistical values describing the metric",
          args: {
            name: "string",
            suggestions: statistics,
          },
        },
        {
          name: "--storage-resolution",
          description:
            "Valid values are 1 and 60. Setting this to 1 specifies this metric as a high-resolution metric, so that CloudWatch stores the metric with sub-minute resolution down to one second. Setting this to 60 specifies this metric as a regular-resolution metric, which CloudWatch stores at 1-minute resolution. Currently, high resolution is available only for custom metrics. For more information about high-resolution metrics, see High-Resolution Metrics in the Amazon CloudWatch User Guide.  This field is optional, if you do not specify it the default of 60 is used",
          args: {
            name: "string",
            suggestions: ["1", "60"],
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
      name: "put-metric-stream",
      description:
        "Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions. For more information, see  Using Metric Streams. To create a metric stream, you must be signed in to an account that has the iam:PassRole permission and either the CloudWatchFullAccess policy or the cloudwatch:PutMetricStream permission. When you create or update a metric stream, you choose one of the following:   Stream metrics from all metric namespaces in the account.   Stream metrics from all metric namespaces in the account, except for the namespaces that you list in ExcludeFilters.   Stream metrics from only the metric namespaces that you list in IncludeFilters.   By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use the StatisticsConfigurations parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see Amazon CloudWatch Pricing.  When you use PutMetricStream to create a new metric stream, the stream is created in the running state. If you use it to update an existing stream, the state of the stream is not changed. If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see CloudWatch cross-account observability",
      options: [
        {
          name: "--name",
          description:
            'If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region. If you are updating a metric stream, specify the name of that stream here. Valid characters are A-Z, a-z, 0-9, "-" and "_"',
          args: {
            name: "string",
          },
        },
        {
          name: "--include-filters",
          description:
            "If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here. You cannot include IncludeFilters and ExcludeFilters in the same operation",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--exclude-filters",
          description:
            "If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here. You cannot include ExcludeFilters and IncludeFilters in the same operation",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--firehose-arn",
          description:
            "The ARN of the Amazon Kinesis Data Firehose delivery stream to use for this metric stream. This Amazon Kinesis Data Firehose delivery stream must already exist and must be in the same account as the metric stream",
          args: {
            name: "string",
            generators: generators.listFirehoseArns,
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Data Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the following permissions:   firehose:PutRecord   firehose:PutRecordBatch",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--output-format",
          description:
            "The output format for the stream. Valid values are json, opentelemetry1.0, and opentelemetry0.7. For more information about metric stream output formats, see  Metric streams output formats",
          args: {
            name: "string",
            suggestions: ["opentelemetry0.7", "json"],
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to associate with the metric stream. You can associate as many as 50 tags with a metric stream. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. You can use this parameter only when you are creating a new metric stream. If you are using this operation to update an existing metric stream, any tags you specify in this parameter are ignored. To change the tags of an existing metric stream, use TagResource or UntagResource",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--statistics-configurations",
          description:
            "By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members. For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's OutputFormat. If the OutputFormat is json, you can stream any additional statistic that is supported by CloudWatch, listed in  CloudWatch statistics definitions. If the OutputFormat is opentelemetry1.0 or opentelemetry0.7, you can stream percentile statistics such as p95, p99.9, and so on",
          args: {
            name: "list",
          },
        },
        {
          name: "--include-linked-accounts-metrics",
          description:
            "If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts in the metric stream",
        },
        {
          name: "--no-include-linked-accounts-metrics",
          description:
            "If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts in the metric stream",
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
      name: "set-alarm-state",
      description:
        "Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an SNS message. Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory. If you use SetAlarmState on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration. If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the StateReasonData parameter to enable the policy to take the correct action",
      options: [
        {
          name: "--alarm-name",
          description: "The name of the alarm",
          args: {
            name: "string",
            generators: generators.listAlarms,
          },
        },
        {
          name: "--state-value",
          description: "The value of the state",
          args: {
            name: "string",
            suggestions: alarmStates,
          },
        },
        {
          name: "--state-reason",
          description:
            "The reason that this alarm is set to this specific state, in text format",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-reason-data",
          description:
            "The reason that this alarm is set to this specific state, in JSON format. For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "start-metric-streams",
      description:
        "Starts the streaming of metrics for one or more of your metric streams",
      options: [
        {
          name: "--names",
          description:
            'The array of the names of metric streams to start streaming. This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will start streaming',
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listMetricStreams,
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
      name: "stop-metric-streams",
      description:
        "Stops the streaming of metrics for one or more of your metric streams",
      options: [
        {
          name: "--names",
          description:
            'The array of the names of metric streams to stop streaming. This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will stop streaming',
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listMetricStreams,
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
        "Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch resource that you're adding tags to. The ARN format of an alarm is arn:aws:cloudwatch:Region:account-id:alarm:alarm-name   The ARN format of a Contributor Insights rule is arn:aws:cloudwatch:Region:account-id:insight-rule/insight-rule-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference",
          args: {
            name: "string",
            generators: generators.listAlarmArns,
          },
        },
        {
          name: "--tags",
          description:
            "The list of key-value pairs to associate with the alarm",
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
      description: "Removes one or more tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the CloudWatch resource that you're removing tags from. The ARN format of an alarm is arn:aws:cloudwatch:Region:account-id:alarm:alarm-name   The ARN format of a Contributor Insights rule is arn:aws:cloudwatch:Region:account-id:insight-rule/insight-rule-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference",
          args: {
            name: "string",
            generators: generators.listAlarmArns,
          },
        },
        {
          name: "--tag-keys",
          description: "The list of tag keys to remove from the resource",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "alarm-exists",
          description:
            "Wait until JMESPath query length(MetricAlarms[]) > `0` returns True when polling with ``describe-alarms``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--alarm-names",
              description:
                "The names of the alarms to retrieve information about",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listAlarms,
              },
            },
            {
              name: "--alarm-name-prefix",
              description:
                "An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix. If this parameter is specified, you cannot specify AlarmNames",
              args: {
                name: "string",
              },
            },
            {
              name: "--alarm-types",
              description:
                "Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned, even if composite alarms exist in the account. For example, if you omit this parameter or specify MetricAlarms, the operation returns only a list of metric alarms. It does not return any composite alarms, even if composite alarms exist in the account. If you specify CompositeAlarms, the operation returns only a list of composite alarms, and does not return any metric alarms",
              args: {
                name: "list",
                isVariadic: true,
                suggestions: metricTypes,
              },
            },
            {
              name: "--children-of-alarm-name",
              description:
                'If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the AlarmRule field of the composite alarm that you specify in ChildrenOfAlarmName. Information about the composite alarm that you name in ChildrenOfAlarmName is not returned. If you specify ChildrenOfAlarmName, you cannot specify any other parameters in the request except for MaxRecords and NextToken. If you do so, you receive a validation error.  Only the Alarm Name, ARN, StateValue (OK/ALARM/INSUFFICIENT_DATA), and StateUpdatedTimestamp information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another DescribeAlarms operation and specify the parent alarm names in the AlarmNames parameter',
              args: {
                name: "string",
              },
            },
            {
              name: "--parents-of-alarm-name",
              description:
                'If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have AlarmRule parameters that reference the alarm named in ParentsOfAlarmName. Information about the alarm that you specify in ParentsOfAlarmName is not returned. If you specify ParentsOfAlarmName, you cannot specify any other parameters in the request except for MaxRecords and NextToken. If you do so, you receive a validation error.  Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another DescribeAlarms operation and specify the parent alarm names in the AlarmNames parameter',
              args: {
                name: "string",
              },
            },
            {
              name: "--state-value",
              description:
                "Specify this parameter to receive information only about alarms that are currently in the state that you specify",
              args: {
                name: "string",
                suggestions: alarmStates,
              },
            },
            {
              name: "--action-prefix",
              description:
                "Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic",
              args: {
                name: "string",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of alarm descriptions to retrieve",
              args: {
                name: "integer",
              },
            },
            {
              name: "--next-token",
              description:
                "The token returned by a previous call to indicate that there is more data available",
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
          name: "composite-alarm-exists",
          description:
            "Wait until JMESPath query length(CompositeAlarms[]) > `0` returns True when polling with ``describe-alarms``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 40 failed checks",
          options: [
            {
              name: "--alarm-names",
              description:
                "The names of the alarms to retrieve information about",
              args: {
                name: "list",
                isVariadic: true,
                generators: generators.listAlarms,
              },
            },
            {
              name: "--alarm-name-prefix",
              description:
                "An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix. If this parameter is specified, you cannot specify AlarmNames",
              args: {
                name: "string",
              },
            },
            {
              name: "--alarm-types",
              description:
                "Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned, even if composite alarms exist in the account. For example, if you omit this parameter or specify MetricAlarms, the operation returns only a list of metric alarms. It does not return any composite alarms, even if composite alarms exist in the account. If you specify CompositeAlarms, the operation returns only a list of composite alarms, and does not return any metric alarms",
              args: {
                name: "list",
                isVariadic: true,
                suggestions: metricTypes,
              },
            },
            {
              name: "--children-of-alarm-name",
              description:
                'If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the AlarmRule field of the composite alarm that you specify in ChildrenOfAlarmName. Information about the composite alarm that you name in ChildrenOfAlarmName is not returned. If you specify ChildrenOfAlarmName, you cannot specify any other parameters in the request except for MaxRecords and NextToken. If you do so, you receive a validation error.  Only the Alarm Name, ARN, StateValue (OK/ALARM/INSUFFICIENT_DATA), and StateUpdatedTimestamp information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another DescribeAlarms operation and specify the parent alarm names in the AlarmNames parameter',
              args: {
                name: "string",
              },
            },
            {
              name: "--parents-of-alarm-name",
              description:
                'If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have AlarmRule parameters that reference the alarm named in ParentsOfAlarmName. Information about the alarm that you specify in ParentsOfAlarmName is not returned. If you specify ParentsOfAlarmName, you cannot specify any other parameters in the request except for MaxRecords and NextToken. If you do so, you receive a validation error.  Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another DescribeAlarms operation and specify the parent alarm names in the AlarmNames parameter',
              args: {
                name: "string",
              },
            },
            {
              name: "--state-value",
              description:
                "Specify this parameter to receive information only about alarms that are currently in the state that you specify",
              args: {
                name: "string",
                suggestions: alarmStates,
              },
            },
            {
              name: "--action-prefix",
              description:
                "Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic",
              args: {
                name: "string",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of alarm descriptions to retrieve",
              args: {
                name: "integer",
              },
            },
            {
              name: "--next-token",
              description:
                "The token returned by a previous call to indicate that there is more data available",
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
      ],
    },
  ],
};
export default completionSpec;
