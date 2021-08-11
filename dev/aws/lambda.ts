const awsPrincipals = [
  "a4b.amazonaws.com",
  "acm-pca.amazonaws.com",
  "acm.amazonaws.com",
  "alexa-appkit.amazon.com",
  "alexa-connectedhome.amazon.com",
  "amazonmq.amazonaws.com",
  "apigateway.amazonaws.com",
  "appflow.amazonaws.com",
  "application-autoscaling.amazonaws.com",
  "appstream.application-autoscaling.amazonaws.com",
  "appsync.amazonaws.com",
  "athena.amazonaws.com",
  "autoscaling.amazonaws.com",
  "aws-artifact-account-sync.amazonaws.com",
  "backup.amazonaws.com",
  "batch.amazonaws.com",
  "billingconsole.amazonaws.com",
  "budgets.amazonaws.com",
  "ce.amazonaws.com",
  "channels.lex.amazonaws.com",
  "chime.amazonaws.com",
  "cloud9.amazonaws.com",
  "clouddirectory.amazonaws.com",
  "cloudformation.amazonaws.com",
  "cloudfront.amazonaws.com",
  "cloudhsm.amazonaws.com",
  "cloudsearch.amazonaws.com",
  "cloudtrail.amazonaws.com",
  "cloudwatch-crossaccount.amazonaws.com",
  "codebuild.amazonaws.com",
  "codecommit.amazonaws.com",
  "codedeploy.${AWS::Region}.amazonaws.com",
  "codedeploy.amazonaws.com",
  "codepipeline.amazonaws.com",
  "codestar.amazonaws.com",
  "cognito-identity.amazonaws.com",
  "cognito-idp.amazonaws.com",
  "cognito-sync.amazonaws.com",
  "config-conforms.amazonaws.com",
  "config-multiaccountsetup.amazonaws.com",
  "config.amazonaws.com",
  "connect.amazonaws.com",
  "continuousexport.discovery.amazonaws.com",
  "custom-resource.application-autoscaling.amazonaws.com",
  "databrew.amazonaws.com",
  "datapipeline.amazonaws.com",
  "dax.amazonaws.com",
  "deeplens.amazonaws.com",
  "delivery.logs.amazonaws.com",
  "diode.amazonaws.com",
  "directconnect.amazonaws.com",
  "discovery.amazonaws.com",
  "dlm.amazonaws.com",
  "dms.amazonaws.com",
  "ds.amazonaws.com",
  "dynamodb.amazonaws.com",
  "dynamodb.application-autoscaling.amazonaws.com",
  "ec.amazonaws.com",
  "ec2.amazonaws.com",
  "ec2.application-autoscaling.amazonaws.com",
  "ec2fleet.amazonaws.com",
  "ec2scheduled.amazonaws.com",
  "ecr.amazonaws.com",
  "ecs-tasks.amazonaws.com",
  "ecs.amazonaws.com",
  "ecs.application-autoscaling.amazonaws.com",
  "edgelambda.amazonaws.com",
  "eks.amazonaws.com",
  "elasticache.amazonaws.com",
  "elasticbeanstalk.amazonaws.com",
  "elasticfilesystem.amazonaws.com",
  "elasticloadbalancing.amazonaws.com",
  "elasticmapreduce.amazonaws.com",
  "elastictranscoder.amazonaws.com",
  "email.cognito-idp.amazonaws.com",
  "es.amazonaws.com",
  "events.amazonaws.com",
  "firehose.amazonaws.com",
  "fms.amazonaws.com",
  "freertos.amazonaws.com",
  "fsx.amazonaws.com",
  "gamelift.amazonaws.com",
  "glacier.amazonaws.com",
  "globalaccelerator.amazonaws.com",
  "glue.amazonaws.com",
  "greengrass.amazonaws.com",
  "guardduty.amazonaws.com",
  "health.amazonaws.com",
  "iam.amazonaws.com",
  "importexport.amazonaws.com",
  "inspector.amazonaws.com",
  "iot.amazonaws.com",
  "iotanalytics.amazonaws.com",
  "iotevents.amazonaws.com",
  "iotsitewise.amazonaws.com",
  "iotthingsgraph.amazonaws.com",
  "jellyfish.amazonaws.com",
  "kafka.amazonaws.com",
  "kinesis.amazonaws.com",
  "kinesisanalytics.amazonaws.com",
  "kms.amazonaws.com",
  "lakeformation.amazonaws.com",
  "lambda.amazonaws.com",
  "lex.amazonaws.com",
  "license-manager.amazonaws.com",
  "lightsail.amazonaws.com",
  "logger.cloudfront.amazonaws.com",
  "logs.amazonaws.com",
  "machinelearning.amazonaws.com",
  "macie.amazonaws.com",
  "managedservices.amazonaws.com",
  "mediaconnect.amazonaws.com",
  "mediaconvert.amazonaws.com",
  "mediapackage.amazonaws.com",
  "mediastore.amazonaws.com",
  "mediatailor.amazonaws.com",
  "member.org.stacksets.cloudformation.amazonaws.com",
  "metering-marketplace.amazonaws.com",
  "migrationhub.amazonaws.com",
  "mobilehub.amazonaws.com",
  "monitoring.amazonaws.com",
  "monitoring.rds.amazonaws.com",
  "ops.apigateway.amazonaws.com",
  "opsworks-cm.amazonaws.com",
  "opsworks.amazonaws.com",
  "organizations.amazonaws.com",
  "pinpoint.amazonaws.com",
  "polly.amazonaws.com",
  "qldb.amazonaws.com",
  "quicksight.amazonaws.com",
  "ram.amazonaws.com",
  "rds.amazonaws.com",
  "redshift.amazonaws.com",
  "rekognition.amazonaws.com",
  "replication.dynamodb.amazonaws.com",
  "replicator.lambda.amazonaws.com",
  "resource-groups.amazonaws.com",
  "robomaker.amazonaws.com",
  "route53.amazonaws.com",
  "route53domains.amazonaws.com",
  "route53resolver.amazonaws.com",
  "s3.amazonaws.com",
  "sagemaker.amazonaws.com",
  "secretsmanager.amazonaws.com",
  "securityhub.amazonaws.com",
  "serverlessrepo.amazonaws.com",
  "servicecatalog.amazonaws.com",
  "servicediscovery.amazonaws.com",
  "ses.amazonaws.com",
  "shield.amazonaws.com",
  "signer.amazonaws.com",
  "signin.amazonaws.com",
  "sms.amazonaws.com",
  "sns.amazonaws.com",
  "spotfleet.amazonaws.com",
  "sqs.amazonaws.com",
  "ssm.amazonaws.com",
  "sso.amazonaws.com",
  "states.amazonaws.com",
  "storagegateway.amazonaws.com",
  "sts.amazonaws.com",
  "support.amazonaws.com",
  "swf.amazonaws.com",
  "tagging.amazonaws.com",
  "tagpolicies.tag.amazonaws.com",
  "transcribe.amazonaws.com",
  "transfer.amazonaws.com",
  "translate.amazonaws.com",
  "trustedadvisor.amazonaws.com",
  "tts.amazonaws.com",
  "vmie.amazonaws.com",
  "waf-regional.amazonaws.com",
  "waf.amazonaws.com",
  "workdocs.amazonaws.com",
  "worklink.amazonaws.com",
  "workmail.amazonaws.com",
  "workspaces.amazonaws.com",
  "xray.amazonaws.com",
];

const awsRegions = [
  "af-south-1",
  "eu-north-1",
  "ap-south-1",
  "eu-west-3",
  "eu-west-2",
  "eu-south-1",
  "eu-west-1",
  "ap-northeast-3",
  "ap-northeast-2",
  "me-south-1",
  "ap-northeast-1",
  "sa-east-1",
  "ca-central-1",
  "ap-east-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "eu-central-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
];

const runtimes = [
  "nodejs",
  "nodejs4.3",
  "nodejs6.10",
  "nodejs8.10",
  "nodejs10.x",
  "nodejs12.x",
  "nodejs14.x",
  "java8",
  "java8.al2",
  "java11",
  "python2.7",
  "python3.6",
  "python3.7",
  "python3.8",
  "dotnetcore1.0",
  "dotnetcore2.0",
  "dotnetcore2.1",
  "dotnetcore3.1",
  "nodejs4.3-edge",
  "go1.x",
  "ruby2.5",
  "ruby2.7",
  "provided",
  "provided.al2",
];

const ttl = 300000;

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

const listCustomGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteShellCommandFunction,
  command: string,
  options: string[],
  parentKey: string,
  childKey = ""
): Promise<Fig.Suggestion[]> => {
  try {
    let cmd = `aws lambda ${command}`;

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const idx = tokens.indexOf(option);
      if (idx < 0) {
        continue;
      }
      const param = tokens[idx + 1];
      cmd += ` ${option} ${param}`;
    }

    const out = await executeShellCommand(cmd);

    const list = JSON.parse(out)[parentKey];

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

const getResultList = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteShellCommandFunction,
  command: string,
  key: string
): Promise<Fig.Suggestion[]> => {
  const out = await executeShellCommand(command);
  return JSON.parse(out)[key];
};

const listCustomSIDGenerator = async (
  tokens: string[],
  executeShellCommand: Fig.ExecuteShellCommandFunction,
  command: string,
  options: string[]
): Promise<Fig.Suggestion[]> => {
  try {
    let cmd = `aws lambda ${command}`;

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const idx = tokens.indexOf(option);
      if (idx < 0) {
        continue;
      }
      const param = tokens[idx + 1];
      cmd += ` ${option} ${param}`;
    }

    const out = await executeShellCommand(cmd);

    const policies = JSON.parse(out)["Policy"];
    const statement = JSON.parse(policies)["Statement"];
    return statement.map((elm) => {
      return {
        name: elm["Sid"],
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
  executeShellCommand: Fig.ExecuteShellCommandFunction,
  enabled: Record<string, string>[]
) => {
  try {
    const list: Fig.Suggestion[][] = [];
    const promises: Promise<string>[] = [];
    for (let i = 0; i < enabled.length; i++) {
      promises[i] = executeShellCommand(enabled[i]["command"]);
    }
    const result = await Promise.all(promises);

    for (let i = 0; i < enabled.length; i++) {
      list[i] = postPrecessGenerator(
        result[i],
        enabled[i]["parentKey"],
        enabled[i]["childKey"]
      );
    }

    return list.flat();
  } catch (e) {
    console.log(e);
  }
  return [];
};

const _prefixFile = "file://";
const _prefixBlob = "fileb://";
const _prefixS3 = "s3://";

const appendFolderPath = (tokens: string[], prefix: string): string => {
  const baseLSCommand = "\\ls -1ApL ";
  let whatHasUserTyped = tokens[tokens.length - 1];

  if (!whatHasUserTyped.startsWith(prefix)) {
    return `echo '${prefix}'`;
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

  return baseLSCommand + folderPath;
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
  // --cli-input-json and a few other options takes a JSON string literal, or arbitrary files containing valid JSON.
  // In case the JSON is passed as a file, the filepath must be prefixed by file://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
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

  listBlobs: {
    script: (tokens) => {
      return appendFolderPath(tokens, _prefixBlob);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixBlob);
    },

    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixBlob);
    },

    getQueryTerm: (token) => {
      return filterWithPrefix(token, _prefixBlob);
    },
  },

  listLayerArns: {
    script: "aws lambda list-layers",
    postProcess: (out) => {
      return postPrecessGenerator(out, "Layers", "LayerArn");
    },
    cache: {
      ttl: ttl,
    },
  },

  listLayerVersionNumber: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "list-layer-versions",
        ["--layer-name"],
        "LayerVersions",
        "Version"
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  getPrincipal: {
    script: "aws sts get-caller-identity",
    postProcess: function (out, tokens) {
      try {
        const accountId = JSON.parse(out)["Account"];
        return [{ name: accountId }, { name: "*" }];
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  getLayerVersionPolicyRevison: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "get-layer-version-policy",
        ["--layer-name", "--version-number"],
        "RevisionId"
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  getFunctionPolicyRevisionId: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "get-policy",
        ["--function-name"],
        "RevisionId"
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  getFunctionRevisionId: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "get-function",
        ["--function-name"],
        "Configuration",
        "RevisionId"
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  listLambdaFunctions: {
    script: "aws lambda list-functions",
    postProcess: (out) => {
      return postPrecessGenerator(out, "Functions", "FunctionArn");
    },
    cache: {
      ttl: ttl,
    },
  },

  awsPrincipals: {
    custom: async () => {
      return awsPrincipals.map((elm) => ({ name: elm }));
    },
  },

  listAliases: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomGenerator(
        tokens,
        executeShellCommand,
        "list-aliases",
        ["--function-name"],
        "Aliases",
        "Name"
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  listVersions: {
    custom: async function (tokens, executeShellCommand) {
      try {
        const idx = tokens.indexOf("--function-name");
        const cmd = `aws lambda list-versions-by-function --function-name ${
          tokens[idx + 1]
        }`;

        const out = await executeShellCommand(cmd);

        const list = JSON.parse(out)["Versions"];
        return list
          .filter((elm) => elm.Version !== "$LATEST")
          .map((elm) => {
            const version = elm["Version"];

            return {
              insertValue: version,
              name: version,
              displayName: `version: ${version}`,
              icon: "fig://icon?type=aws",
            };
          });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  listSIDs: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomSIDGenerator(tokens, executeShellCommand, "get-policy", [
        "--function-name",
      ]);
    },
    cache: {
      ttl: ttl,
    },
  },

  listLayerVersionSIDs: {
    custom: async function (tokens, executeShellCommand) {
      return listCustomSIDGenerator(
        tokens,
        executeShellCommand,
        "get-layer-version-policy",
        ["--layer-name", "--version-number"]
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  listEventSourceArns: {
    custom: async function (tokens, executeShellCommand) {
      // Getting sqs queues is implemented, altough it has a huge performance toll.
      // It seems Fig rejects long-running promises after a time.
      // I am currently investigating if this is the case.

      // const result = await Promise.all([
      //   getResultList(tokens, executeShellCommand, "aws sqs list-queues", "QueueUrls"),
      //   getResultList(tokens, executeShellCommand, "aws kinesis list-streams", "StreamNames")
      // ]);

      // const objects = result.flat().map((elm) => {
      //   if (elm.includes("sqs")) {
      //     return ({
      //       command: `aws sqs get-queue-attributes --queue-url ${elm} --attribute-names QueueArn`,
      //       parentKey: "Attributes",
      //       childKey: "QueueArn",
      //     })
      //   }
      //   return ({
      //     command: `aws kinesis describe-stream --stream-name ${elm}`,
      //     parentKey: "StreamDescription",
      //     childKey: "StreamARN",
      //   })
      // });

      return MultiSuggestionsGenerator(tokens, executeShellCommand, [
        {
          command: "aws dynamodbstreams list-streams",
          parentKey: "Streams",
          childKey: "StreamArn",
        },
        {
          command: "aws kafka list-clusters",
          parentKey: "ClusterInfoList",
          childKey: "ClusterArn",
        },
        //...objects,
      ]);
    },
    cache: {
      ttl: ttl,
    },
  },

  listDestinationConfigArns: {
    custom: async function (tokens, executeShellCommand) {
      // Getting sqs queues is implemented, altough it has a huge performance toll.
      // It seems Fig rejects long-running promises after a time.
      // I am currently investigating if this is the case.

      // const out = await executeShellCommand("aws sqs list-queues");
      // const list = JSON.parse(out)["QueueUrls"];
      // const sqsObjects = list.map((url) => ({
      //   command: `aws sqs get-queue-attributes --queue-url ${url} --attribute-names QueueArn`,
      //   parentKey: "Attributes",
      //   childKey: "QueueArn",
      // }));

      return MultiSuggestionsGenerator(tokens, executeShellCommand, [
        {
          command: "aws sns list-topics",
          parentKey: "Topics",
          childKey: "TopicArn",
        },
        {
          command: "aws events list-event-buses",
          parentKey: "EventBuses",
          childKey: "Arn",
        },
        {
          command: "aws lambda list-functions",
          parentKey: "Functions",
          childKey: "FunctionArn",
        },
        // ...sqsObjects,
      ]);
    },
    cache: {
      ttl: ttl,
    },
  },

  listRoles: {
    script: "aws iam list-roles --page-size 100",
    postProcess: function (out) {
      return postPrecessGenerator(out, "Roles", "RoleName");
    },
    cache: {
      ttl: ttl,
    },
  },

  listKmsKeys: {
    script: "aws kms list-keys --page-size 100",
    postProcess: function (out) {
      return postPrecessGenerator(out, "Keys", "KeyArn");
    },
    cache: {
      ttl: ttl,
    },
  },

  listLayers: {
    script: "aws lambda list-layers",
    postProcess: function (out) {
      return postPrecessGenerator(out, "Layers", "LayerArn");
    },
    cache: {
      ttl: ttl,
    },
  },

  listLayerArnsWithVersion: {
    script: "aws lambda list-layers",
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["Layers"];
        return list.map((elm) => {
          return {
            name: elm["LatestMatchingVersion"]["LayerVersionArn"],
            icon: "fig://icon?type=aws",
          };
        });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  listFilesystemConfigs: {
    script: "aws efs describe-file-systems",
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["FileSystems"];
        return list.map((elm) => {
          const name = ("FileSystemArn" ? elm["FileSystemArn"] : elm) as string;
          return {
            name: `Arn=${name},LocalMountPath=/mnt/`,
            icon: "fig://icon?type=aws",
          };
        });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  listCodeSigningConfigs: {
    script: "aws lambda list-code-signing-configs --page-size 100",
    postProcess: function (out) {
      return postPrecessGenerator(
        out,
        "CodeSigningConfigs",
        "CodeSigningConfigArn"
      );
    },
    cache: {
      ttl: ttl,
    },
  },

  listEventSourceMappingUUIDs: {
    script: "aws lambda list-event-source-mappings --page-size 100",
    postProcess: function (out) {
      return postPrecessGenerator(out, "EventSourceMappings", "UUID");
    },
    cache: {
      ttl: ttl,
    },
  },

  listCodeSHA: {
    script: "aws lambda list-functions",
    postProcess: function (out) {
      return postPrecessGenerator(out, "Functions", "CodeSha256");
    },
    cache: {
      ttl: ttl,
    },
  },

  listBuckets: {
    script: "aws s3 ls --page-size 1000",
    postProcess: function (out, tokens) {
      try {
        return out.split("\n").map((line) => {
          const parts = line.split(/\s+/);
          // sub prefix
          if (!parts.length) {
            return [];
          }
          return {
            name: parts[parts.length - 1],
          };
        }) as Fig.Suggestion[];
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  listS3Objects: {
    custom: async function (tokens, executeShellCommand) {
      try {
        const idx = tokens.indexOf("--s3-bucket");
        const cmd = `aws s3 ls ${_prefixS3}${
          tokens[idx + 1]
        } --recursive --page-size 1000`;

        const out = await executeShellCommand(cmd);

        if (out == "") {
          return [];
        }

        if (out.trim() === _prefixS3) {
          return [
            {
              name: _prefixS3,
              insertValue: _prefixS3,
            },
          ];
        }

        return out.split("\n").map((line) => {
          const parts = line.split(/\s+/);
          // sub prefix
          if (!parts.length) {
            return [];
          }
          return {
            name: parts[parts.length - 1],
          };
        }) as Fig.Suggestion[];
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  listS3ObjectVersions: {
    custom: async function (tokens, executeShellCommand) {
      try {
        const bucketIdx = tokens.indexOf("--s3-bucket");
        const objectIdx = tokens.indexOf("--s3-key");
        const cmd = `aws s3api list-object-versions --bucket ${
          tokens[bucketIdx + 1]
        } --prefix ${tokens[objectIdx + 1]}`;

        const out = await executeShellCommand(cmd);

        if (out == "") {
          return [];
        }

        if (out.trim() === _prefixS3) {
          return [
            {
              name: _prefixS3,
              insertValue: _prefixS3,
            },
          ];
        }

        const list = JSON.parse(out)["Versions"];
        return list
          .filter((elm) => elm["VersionId"] !== "null")
          .map((elm) => {
            return {
              name: elm["VersionId"],
              icon: "fig://icon?type=aws",
            };
          });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "lambda",
  description:
    "AWS Lambda  Overview  This is the AWS Lambda API Reference. The AWS Lambda Developer Guide provides additional information. For the service overview, see What is AWS Lambda, and for information about how the service works, see AWS Lambda: How it Works in the AWS Lambda Developer Guide.",
  subcommands: [
    {
      name: "add-layer-version-permission",
      description:
        "Adds permissions to the resource-based policy of a version of an AWS Lambda layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.",
      options: [
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayerArns,
          },
        },
        {
          name: "--version-number",
          description: "The version number.",
          args: {
            name: "long",
            generators: generators.listLayerVersionNumber,
          },
        },
        {
          name: "--statement-id",
          description:
            "An identifier that distinguishes the policy from others on the same layer version.",
          args: {
            name: "string",
            generators: generators.listLayerVersionSIDs,
          },
        },
        {
          name: "--action",
          description:
            "The API action that grants access to the layer. For example, lambda:GetLayerVersion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "An account ID, or * to grant permission to all AWS accounts.",
          args: {
            name: "string",
            generators: generators.getPrincipal,
          },
        },
        {
          name: "--organization-id",
          description:
            "With the principal set to *, grant permission to all accounts in the specified organization.",
          args: {
            name: "string",
            suggestions: ["*"],
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getLayerVersionPolicyRevison,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "add-permission",
      description:
        "Grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. To grant permission to another account, specify the account ID as the Principal. For AWS services, the principal is a domain-style identifier defined by the service, like s3.amazonaws.com or sns.amazonaws.com. For AWS services, you can also specify the ARN of the associated resource as the SourceArn. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function. This action adds a statement to a resource-based permissions policy for the function. For more information about function policies, see Lambda Function Policies.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--statement-id",
          description:
            "A statement identifier that differentiates the statement from others in the same policy.",
          args: {
            name: "string",
            generators: generators.listSIDs,
          },
        },
        {
          name: "--action",
          description:
            "The action that the principal can use on the function. For example, lambda:InvokeFunction or lambda:GetFunction.",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "The AWS service or account that invokes the function. If you specify a service, use SourceArn or SourceAccount to limit who can invoke the function through that service.",
          args: {
            name: "string",
            generators: [generators.getPrincipal, generators.awsPrincipals],
          },
        },
        {
          name: "--source-arn",
          description:
            "For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-account",
          description:
            "For Amazon S3, the ID of the account that owns the resource. Use this together with SourceArn to ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.",
          args: {
            name: "string",
            generators: generators.getPrincipal,
          },
        },
        {
          name: "--event-source-token",
          description:
            "For Alexa Smart Home functions, a token that must be supplied by the invoker.",
          args: {
            name: "string",
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version or alias to add permissions to a published version of the function.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getFunctionPolicyRevisionId,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "create-alias",
      description:
        "Creates an alias for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version. You can also map an alias to split invocation requests between two versions. Use the RoutingConfig parameter to specify a second version and the percentage of invocation requests that it receives.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--name",
          description: "The name of the alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-version",
          description: "The function version that the alias invokes.",
          args: {
            name: "string",
            generators: generators.listVersions,
          },
        },
        {
          name: "--description",
          description: "A description of the alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-config",
          description: "The routing configuration of the alias.",
          args: {
            name: "structure",
            description: "AdditionalVersionWeights={Key1=double,Key2=double}",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "create-code-signing-config",
      description:
        "Creates a code signing configuration. A code signing configuration defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail).",
      options: [
        {
          name: "--description",
          description: "Descriptive name for this code signing configuration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-publishers",
          description: "Signing profiles for this code signing configuration.",
          args: {
            name: "structure",
            description: "SigningProfileVersionArns=string,string",
          },
        },
        {
          name: "--code-signing-policies",
          description:
            "The code signing policies define the actions to take if the validation checks fail.",
          args: {
            name: "structure",
            suggestions: [
              "UntrustedArtifactOnDeployment=Warn",
              "UntrustedArtifactOnDeployment=Enforce",
            ],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "create-event-source-mapping",
      description:
        "Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function. For details about each event source type, see the following topics.    Using AWS Lambda with Amazon DynamoDB     Using AWS Lambda with Amazon Kinesis     Using AWS Lambda with Amazon SQS     Using AWS Lambda with Amazon MQ     Using AWS Lambda with Amazon MSK     Using AWS Lambda with Self-Managed Apache Kafka    The following error handling options are only available for stream sources (DynamoDB and Kinesis):    BisectBatchOnFunctionError - If the function returns an error, split the batch in two and retry.    DestinationConfig - Send discarded records to an Amazon SQS queue or Amazon SNS topic.    MaximumRecordAgeInSeconds - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires    MaximumRetryAttempts - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.    ParallelizationFactor - Process multiple batches from each shard concurrently.",
      options: [
        {
          name: "--event-source-arn",
          description:
            "The Amazon Resource Name (ARN) of the event source.    Amazon Kinesis - The ARN of the data stream or a stream consumer.    Amazon DynamoDB Streams - The ARN of the stream.    Amazon Simple Queue Service - The ARN of the queue.    Amazon Managed Streaming for Apache Kafka - The ARN of the cluster.",
          args: {
            name: "string",
            // SQS & Kineses seem to be non-performant / impossible via CLI
            // 1. list each streams / queues to get a list of names
            // 2. fire a request for each names to be able to extract arns
            // 3. Wait for each request to finish
            // It is simply a slow / poor ux operation
            generators: generators.listEventSourceArns,
          },
        },
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--enabled",
          description:
            "If true, the event source mapping is active. Set to false to pause polling and invocation.",
        },
        {
          name: "--no-enabled",
          description:
            "If true, the event source mapping is active. Set to false to pause polling and invocation.",
        },
        {
          name: "--batch-size",
          description:
            "The maximum number of items to retrieve in a single batch.    Amazon Kinesis - Default 100. Max 10,000.    Amazon DynamoDB Streams - Default 100. Max 1,000.    Amazon Simple Queue Service - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.    Amazon Managed Streaming for Apache Kafka - Default 100. Max 10,000.    Self-Managed Apache Kafka - Default 100. Max 10,000.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--maximum-batching-window-in-seconds",
          description:
            "(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--parallelization-factor",
          description:
            "(Streams) The number of batches to process from each shard concurrently.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--starting-position",
          description:
            "The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams sources. AT_TIMESTAMP is only supported for Amazon Kinesis streams.",
          args: {
            name: "string",
            suggestions: ["TRIM_HORIZON", "LATEST", "AT_TIMESTAMP"],
          },
        },
        {
          name: "--starting-position-timestamp",
          description:
            "With StartingPosition set to AT_TIMESTAMP, the time from which to start reading.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--destination-config",
          description:
            "(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.",
          args: {
            name: "structure",
            description:
              "OnSuccess={Destination=string},OnFailure={Destination=string",
          },
        },
        {
          name: "--maximum-record-age-in-seconds",
          description:
            "(Streams) Discard records older than the specified age. The default value is infinite (-1).",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bisect-batch-on-function-error",
          description:
            "(Streams) If the function returns an error, split the batch in two and retry.",
        },
        {
          name: "--no-bisect-batch-on-function-error",
          description:
            "(Streams) If the function returns an error, split the batch in two and retry.",
        },
        {
          name: "--maximum-retry-attempts",
          description:
            "(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tumbling-window-in-seconds",
          description:
            "(Streams) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--topics",
          description: "The name of the Kafka topic.",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--queues",
          description:
            "(MQ) The name of the Amazon MQ broker destination queue to consume.",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--source-access-configurations",
          description:
            "An array of the authentication protocol, or the VPC components to secure your event source.",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--self-managed-event-source",
          description: "The Self-Managed Apache Kafka cluster to send records.",
          args: {
            name: "structure",
            description: "Endpoints={Key1=string,string,Key2=string,string}",
          },
        },
        {
          name: "--function-response-types",
          description:
            "(Streams) A list of current response type enums applied to the event source mapping.",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "create-function",
      description:
        "Creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing. When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The State, StateReason, and StateReasonCode fields in the response from GetFunctionConfiguration indicate when the function is ready to invoke. For more information, see Function States. A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the Publish parameter to create version 1 of your function from its initial configuration. The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with UpdateFunctionConfiguration. Function-level settings apply to both the unpublished and published versions of the function, and include tags (TagResource) and per-function concurrency limits (PutFunctionConcurrency). You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with UpdateFunctionCode, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set set of signing profiles, which define the trusted publishers for this function. If another account or an AWS service invokes your function, use AddPermission to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias. To invoke your function directly, use Invoke. To invoke your function in response to events in other AWS services, create an event source mapping (CreateEventSourceMapping), or configure a function trigger in the other service. For more information, see Invoking Functions.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
          },
        },
        {
          name: "--runtime",
          description: "The identifier of the function's runtime.",
          args: {
            name: "string",
            suggestions: runtimes,
          },
        },
        {
          name: "--role",
          description:
            "The Amazon Resource Name (ARN) of the function's execution role.",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--handler",
          description:
            "The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see Programming Model.",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description: "The code for the function.",
          args: {
            name: "structure",
            description:
              "S3Bucket=string,S3Key=string,S3ObjectVersion=string,ImageUri=string",
          },
        },
        {
          name: "--description",
          description: "A description of the function.",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout",
          description:
            "The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--memory-size",
          description:
            "The amount of memory available to the function at runtime. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--publish",
          description:
            "Set to true to publish the first version of the function during creation.",
        },
        {
          name: "--no-publish",
          description:
            "Set to true to publish the first version of the function during creation.",
        },
        {
          name: "--vpc-config",
          description:
            "For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more information, see VPC Settings.",
          args: {
            name: "structure",
            description:
              "SubnetIds=string,string,SecurityGroupIds=string,string",
          },
        },
        {
          name: "--package-type",
          description:
            "The type of deployment package. Set to Image for container image and set Zip for ZIP archive.",
          args: {
            name: "string",
            suggestions: ["Zip", "Image"],
          },
        },
        {
          name: "--dead-letter-config",
          description:
            "A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead Letter Queues.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--environment",
          description:
            "Environment variables that are accessible from function code during execution.",
          args: {
            name: "structure",
            description: "Variables={Key1=string,Key2=string}",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
          args: {
            name: "string",
            generators: generators.listKmsKeys,
          },
        },
        {
          name: "--tracing-config",
          description:
            "Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.",
          args: {
            name: "structure",
            suggestions: ["Mode=Active", "Mode=PassThrough"],
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the function.",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
          },
        },
        {
          name: "--layers",
          description:
            "A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listLayerArnsWithVersion,
          },
        },
        {
          name: "--file-system-configs",
          description: "Connection settings for an Amazon EFS file system.",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listFilesystemConfigs,
            description: "Arn=string,LocalMountPath=string ...",
          },
        },
        {
          name: "--image-config",
          description:
            "Container image configuration values that override the values in the container image Dockerfile.",
          args: {
            name: "structure",
            description:
              "EntryPoint=string,string,Command=string,string,WorkingDirectory=string",
          },
        },
        {
          name: "--code-signing-config-arn",
          description:
            "To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.",
          args: {
            name: "string",
            generators: generators.listCodeSigningConfigs,
          },
        },
        {
          name: "--zip-file",
          description:
            "The path to the zip file of the code you are uploading. Specify --zip-file or --code, but not both. Example: fileb://code.zip",
          args: {
            name: "blob",
            generators: generators.listBlobs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-alias",
      description: "Deletes a Lambda function alias.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--name",
          description: "The name of the alias.",
          args: {
            name: "string",
            generators: generators.listAliases,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-code-signing-config",
      description:
        "Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it.",
      options: [
        {
          name: "--code-signing-config-arn",
          description:
            "The The Amazon Resource Name (ARN) of the code signing configuration.",
          args: {
            name: "string",
            generators: generators.listCodeSigningConfigs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-event-source-mapping",
      description:
        "Deletes an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings. When you delete an event source mapping, it enters a Deleting state and might not be completely deleted for several seconds.",
      options: [
        {
          name: "--uuid",
          description: "The identifier of the event source mapping.",
          args: {
            name: "string",
            generators: generators.listEventSourceMappingUUIDs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-function",
      description:
        "Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. To delete Lambda event source mappings that invoke a function, use DeleteEventSourceMapping. For AWS services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function or version.  Name formats     Function name - my-function (name-only), my-function:1 (with version).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version to delete. You can't delete a version that's referenced by an alias.",
          args: {
            name: "string",
            generators: [generators.listVersions],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-function-code-signing-config",
      description: "Removes the code signing configuration from the function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-function-concurrency",
      description: "Removes a concurrent execution limit from a function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-function-event-invoke-config",
      description:
        "Deletes the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "A version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-layer-version",
      description:
        "Deletes a version of an AWS Lambda layer. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.",
      options: [
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayers,
          },
        },
        {
          name: "--version-number",
          description: "The version number.",
          args: {
            name: "long",
            generators: generators.listLayerVersionNumber,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "delete-provisioned-concurrency-config",
      description:
        "Deletes the provisioned concurrency configuration for a function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "The version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-account-settings",
      description:
        "Retrieves details about your account's limits and usage in an AWS Region.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-alias",
      description: "Returns details about a Lambda function alias.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--name",
          description: "The name of the alias.",
          args: {
            name: "string",
            generators: generators.listAliases,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-code-signing-config",
      description:
        "Returns information about the specified code signing configuration.",
      options: [
        {
          name: "--code-signing-config-arn",
          description:
            "The The Amazon Resource Name (ARN) of the code signing configuration.",
          args: {
            name: "string",
            generators: generators.listCodeSigningConfigs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-event-source-mapping",
      description:
        "Returns details about an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.",
      options: [
        {
          name: "--uuid",
          description: "The identifier of the event source mapping.",
          args: {
            name: "string",
            generators: generators.listEventSourceMappingUUIDs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-function",
      description:
        "Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version or alias to get details about a published version of the function.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-function-code-signing-config",
      description:
        "Returns the code signing configuration for the specified function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-function-concurrency",
      description:
        "Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use PutFunctionConcurrency.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-function-configuration",
      description:
        "Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use UpdateFunctionConfiguration. To get all of a function's details, including function-level settings, use GetFunction.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version or alias to get details about a published version of the function.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-function-event-invoke-config",
      description:
        "Retrieves the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "A version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-layer-version",
      description:
        "Returns information about a version of an AWS Lambda layer, with a link to download the layer archive that's valid for 10 minutes.",
      options: [
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayerArns,
          },
        },
        {
          name: "--version-number",
          description: "The version number.",
          args: {
            name: "long",
            generators: generators.listLayerVersionNumber,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-layer-version-by-arn",
      description:
        "Returns information about a version of an AWS Lambda layer, with a link to download the layer archive that's valid for 10 minutes.",
      options: [
        {
          name: "--arn",
          description: "The ARN of the layer version.",
          args: {
            name: "string",
            generators: generators.listLayerArnsWithVersion,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-layer-version-policy",
      description:
        "Returns the permission policy for a version of an AWS Lambda layer. For more information, see AddLayerVersionPermission.",
      options: [
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayerArns,
          },
        },
        {
          name: "--version-number",
          description: "The version number.",
          args: {
            name: "long",
            generators: generators.listLayerVersionNumber,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-policy",
      description:
        "Returns the resource-based IAM policy for a function, version, or alias.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version or alias to get the policy for that resource.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "get-provisioned-concurrency-config",
      description:
        "Retrieves the provisioned concurrency configuration for a function's alias or version.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "The version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "invoke",
      description:
        "Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set InvocationType to Event. For synchronous invocation, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the execution log and trace. When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see Retry Behavior. For asynchronous invocation, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a dead-letter queue. The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, limit errors, or issues with your function's code and configuration. For example, Lambda returns TooManyRequestsException if executing the function would cause you to exceed a concurrency limit at either the account level (ConcurrentInvocationLimitExceeded) or function level (ReservedFunctionConcurrentInvocationLimitExceeded). For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--invocation-type",
          description:
            "Choose from the following options.    RequestResponse (default) - Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.    Event - Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if it's configured). The API response only includes a status code.    DryRun - Validate parameter values and verify that the user or role has permission to invoke the function.",
          args: {
            name: "string",
            suggestions: ["Event", "RequestResponse", "DryRun"],
          },
        },
        {
          name: "--log-type",
          description:
            "Set to Tail to include the execution log in the response.",
          args: {
            name: "string",
            suggestions: ["None", "Tail"],
          },
        },
        {
          name: "--client-context",
          description:
            "Up to 3583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload",
          description:
            "The JSON that you want to provide to your Lambda function as input.",
          args: {
            name: "blob",
            generators: generators.listBlobs,
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version or alias to invoke a published version of the function.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "invoke-async",
      description:
        "For asynchronous function invocation, use Invoke.  Invokes a function asynchronously.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--invoke-args",
          description:
            "The JSON that you want to provide to your Lambda function as input.",
          args: {
            name: "blob",
            generators: generators.listBlobs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "list-aliases",
      description: "Returns a list of aliases for a Lambda function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--function-version",
          description:
            "Specify a function version to only list aliases that invoke that version.",
          args: {
            name: "string",
            generators: generators.listVersions,
          },
        },
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-code-signing-configs",
      description:
        "Returns a list of code signing configurations. A request returns up to 10,000 configurations per call. You can use the MaxItems parameter to return fewer configurations per call.",
      options: [
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-event-source-mappings",
      description:
        "Lists event source mappings. Specify an EventSourceArn to only show event source mappings for a single event source.",
      options: [
        {
          name: "--event-source-arn",
          description:
            "The Amazon Resource Name (ARN) of the event source.    Amazon Kinesis - The ARN of the data stream or a stream consumer.    Amazon DynamoDB Streams - The ARN of the stream.    Amazon Simple Queue Service - The ARN of the queue.    Amazon Managed Streaming for Apache Kafka - The ARN of the cluster.",
          args: {
            name: "string",
            generators: generators.listEventSourceArns,
          },
        },
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--marker",
          description: "A pagination token returned by a previous call.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-function-event-invoke-configs",
      description:
        "Retrieves a list of configurations for asynchronous invocation for a function. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-functions",
      description:
        "Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call. Set FunctionVersion to ALL to include all published versions of each function in addition to the unpublished version.   The ListFunctions action returns a subset of the FunctionConfiguration fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode) for a function or version, use GetFunction.",
      options: [
        {
          name: "--master-region",
          description:
            "For Lambda@Edge functions, the AWS Region of the master function. For example, us-east-1 filters the list of functions to only include Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set FunctionVersion to ALL.",
          args: {
            name: "string",
            suggestions: awsRegions,
          },
        },
        {
          name: "--function-version",
          description:
            "Set to ALL to include entries for all published versions of each function.",
          args: {
            name: "string",
            suggestions: ["ALL"],
          },
        },
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-functions-by-code-signing-config",
      description:
        "List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.",
      options: [
        {
          name: "--code-signing-config-arn",
          description:
            "The The Amazon Resource Name (ARN) of the code signing configuration.",
          args: {
            name: "string",
            generators: generators.listCodeSigningConfigs,
          },
        },
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-layer-versions",
      description:
        "Lists the versions of an AWS Lambda layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime.",
      options: [
        {
          name: "--compatible-runtime",
          description: "A runtime identifier. For example, go1.x.",
          args: {
            name: "string",
            suggestions: runtimes,
          },
        },
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayerArns,
          },
        },
        {
          name: "--marker",
          description: "A pagination token returned by a previous call.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-layers",
      description:
        "Lists AWS Lambda layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime.",
      options: [
        {
          name: "--compatible-runtime",
          description: "A runtime identifier. For example, go1.x.",
          args: {
            name: "string",
            suggestions: runtimes,
          },
        },
        {
          name: "--marker",
          description: "A pagination token returned by a previous call.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-provisioned-concurrency-configs",
      description:
        "Retrieves a list of provisioned concurrency configurations for a function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "list-tags",
      description:
        "Returns a function's tags. You can also view tags with GetFunction.",
      options: [
        {
          name: "--resource",
          description: "The function's Amazon Resource Name (ARN).",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "list-versions-by-function",
      description:
        "Returns a list of versions, with the version-specific configuration of each. Lambda returns up to 50 versions per call.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--marker",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
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
            generators: generators.listFiles,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
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
      name: "publish-layer-version",
      description:
        "Creates an AWS Lambda layer from a ZIP archive. Each time you call PublishLayerVersion with the same layer name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.",
      options: [
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayerArns,
          },
        },
        {
          name: "--description",
          description: "The description of the version.",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The function layer archive.",
          args: {
            name: "structure",
            description: "S3Bucket=string,S3Key=string,S3ObjectVersion=string",
          },
        },
        {
          name: "--compatible-runtimes",
          description:
            "A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: runtimes,
          },
        },
        {
          name: "--license-info",
          description:
            "The layer's software license. It can be any of the following:   An SPDX license identifier. For example, MIT.   The URL of a license hosted on the internet. For example, https://opensource.org/licenses/MIT.   The full text of the license.",
          args: {
            name: "string",
          },
        },
        {
          name: "--zip-file",
          description:
            "The path to the zip file of the content you are uploading. Specify --zip-file or --content, but not both. Example: fileb://content.zip",
          args: {
            name: "blob",
            generators: generators.listBlobs,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "publish-version",
      description:
        "Creates a version from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change. AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use UpdateFunctionCode or UpdateFunctionConfiguration to update the function before publishing a version. Clients can invoke versions directly or with an alias. To create an alias, use CreateAlias.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--code-sha256",
          description:
            "Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of UpdateFunctionCode.",
          args: {
            name: "string",
            generators: generators.listCodeSHA,
          },
        },
        {
          name: "--description",
          description:
            "A description for the version to override the description in the function configuration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.",
          args: {
            name: "string",
            generators: generators.getFunctionRevisionId,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "put-function-code-signing-config",
      description:
        "Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.",
      options: [
        {
          name: "--code-signing-config-arn",
          description:
            "The The Amazon Resource Name (ARN) of the code signing configuration.",
          args: {
            name: "string",
            generators: generators.listCodeSigningConfigs,
          },
        },
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "put-function-concurrency",
      description:
        "Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level. Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use GetFunction to see the current setting for a function. Use GetAccountSettings to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see Managing Concurrency.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--reserved-concurrent-executions",
          description:
            "The number of simultaneous executions to reserve for the function.",
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
            generators: generators.listFiles,
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
      name: "put-function-event-invoke-config",
      description:
        "Configures options for asynchronous invocation on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use UpdateFunctionEventInvokeConfig. By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with UpdateFunctionConfiguration. To send an invocation record to a queue, topic, function, or event bus, specify a destination. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "A version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--maximum-retry-attempts",
          description:
            "The maximum number of times to retry when the function returns an error.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--maximum-event-age-in-seconds",
          description:
            "The maximum age of a request that Lambda sends to a function for processing.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--destination-config",
          description:
            "A destination for events after they have been sent to a function for processing.  Destinations     Function - The Amazon Resource Name (ARN) of a Lambda function.    Queue - The ARN of an SQS queue.    Topic - The ARN of an SNS topic.    Event Bus - The ARN of an Amazon EventBridge event bus.",
          args: {
            name: "structure",
            generators: [generators.listDestinationConfigArns],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "put-provisioned-concurrency-config",
      description:
        "Adds a provisioned concurrency configuration to a function's alias or version.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "The version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--provisioned-concurrent-executions",
          description:
            "The amount of provisioned concurrency to allocate for the version or alias.",
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
            generators: generators.listFiles,
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
      name: "remove-layer-version-permission",
      description:
        "Removes a statement from the permissions policy for a version of an AWS Lambda layer. For more information, see AddLayerVersionPermission.",
      options: [
        {
          name: "--layer-name",
          description: "The name or Amazon Resource Name (ARN) of the layer.",
          args: {
            name: "string",
            generators: generators.listLayerArns,
          },
        },
        {
          name: "--version-number",
          description: "The version number.",
          args: {
            name: "long",
            generators: generators.listLayerVersionNumber,
          },
        },
        {
          name: "--statement-id",
          description:
            "The identifier that was specified when the statement was added.",
          args: {
            name: "string",
            generators: generators.listLayerVersionSIDs,
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getLayerVersionPolicyRevison,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "remove-permission",
      description:
        "Revokes function-use permission from an AWS service or another account. You can get the ID of the statement from the output of GetPolicy.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--statement-id",
          description: "Statement ID of the permission to remove.",
          args: {
            name: "string",
            generators: generators.listSIDs,
          },
        },
        {
          name: "--qualifier",
          description:
            "Specify a version or alias to remove permissions from a published version of the function.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getFunctionRevisionId,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      description: "Adds tags to a function.",
      options: [
        {
          name: "--resource",
          description: "The function's Amazon Resource Name (ARN).",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the function.",
          args: {
            name: "map",
            description: "Key1=string,Key2=string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      description: "Removes tags from a function.",
      options: [
        {
          name: "--resource",
          description: "The function's Amazon Resource Name (ARN).",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to remove from the function.",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "update-alias",
      description: "Updates the configuration of a Lambda function alias.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--name",
          description: "The name of the alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-version",
          description: "The function version that the alias invokes.",
          args: {
            name: "string",
            generators: generators.listVersions,
          },
        },
        {
          name: "--description",
          description: "A description of the alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-config",
          description: "The routing configuration of the alias.",
          args: {
            name: "structure",
            description: "AdditionalVersionWeights={Key1=double,Key2=double}",
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getFunctionRevisionId,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "update-code-signing-config",
      description:
        "Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.",
      options: [
        {
          name: "--code-signing-config-arn",
          description:
            "The The Amazon Resource Name (ARN) of the code signing configuration.",
          args: {
            name: "string",
            generators: generators.listCodeSigningConfigs,
          },
        },
        {
          name: "--description",
          description: "Descriptive name for this code signing configuration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-publishers",
          description: "Signing profiles for this code signing configuration.",
          args: {
            name: "structure",
            description: "SigningProfileVersionArns=string,string",
          },
        },
        {
          name: "--code-signing-policies",
          description: "The code signing policy.",
          args: {
            name: "structure",
            description: "UntrustedArtifactOnDeployment=string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "update-event-source-mapping",
      description:
        "Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location. The following error handling options are only available for stream sources (DynamoDB and Kinesis):    BisectBatchOnFunctionError - If the function returns an error, split the batch in two and retry.    DestinationConfig - Send discarded records to an Amazon SQS queue or Amazon SNS topic.    MaximumRecordAgeInSeconds - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires    MaximumRetryAttempts - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.    ParallelizationFactor - Process multiple batches from each shard concurrently.",
      options: [
        {
          name: "--uuid",
          description: "The identifier of the event source mapping.",
          args: {
            name: "string",
            generators: generators.listEventSourceMappingUUIDs,
          },
        },
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--enabled",
          description:
            "If true, the event source mapping is active. Set to false to pause polling and invocation.",
        },
        {
          name: "--no-enabled",
          description:
            "If true, the event source mapping is active. Set to false to pause polling and invocation.",
        },
        {
          name: "--batch-size",
          description:
            "The maximum number of items to retrieve in a single batch.    Amazon Kinesis - Default 100. Max 10,000.    Amazon DynamoDB Streams - Default 100. Max 1,000.    Amazon Simple Queue Service - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.    Amazon Managed Streaming for Apache Kafka - Default 100. Max 10,000.    Self-Managed Apache Kafka - Default 100. Max 10,000.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--maximum-batching-window-in-seconds",
          description:
            "(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--destination-config",
          description:
            "(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.",
          args: {
            name: "structure",
            description:
              "OnSuccess={Destination=string},OnFailure={Destination=string}",
          },
        },
        {
          name: "--maximum-record-age-in-seconds",
          description:
            "(Streams) Discard records older than the specified age. The default value is infinite (-1).",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bisect-batch-on-function-error",
          description:
            "(Streams) If the function returns an error, split the batch in two and retry.",
        },
        {
          name: "--no-bisect-batch-on-function-error",
          description:
            "(Streams) If the function returns an error, split the batch in two and retry.",
        },
        {
          name: "--maximum-retry-attempts",
          description:
            "(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--parallelization-factor",
          description:
            "(Streams) The number of batches to process from each shard concurrently.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--source-access-configurations",
          description:
            "An array of the authentication protocol, or the VPC components to secure your event source.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tumbling-window-in-seconds",
          description:
            "(Streams) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--function-response-types",
          description:
            "(Streams) A list of current response type enums applied to the event source mapping.",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "update-function-code",
      description:
        "Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see Configuring code signing. The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.  For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--zip-file",
          description:
            "The path to the zip file of the {param_type} you are uploading. Specify --zip-file or --{param_type}, but not both. Example: fileb://{param_type}.zip",
          args: {
            name: "blob",
            generators: generators.listBlobs,
          },
        },
        {
          name: "--s3-bucket",
          description:
            "An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.",
          args: {
            name: "string",
            generators: generators.listBuckets,
          },
        },
        {
          name: "--s3-key",
          description: "The Amazon S3 key of the deployment package.",
          args: {
            name: "string",
            generators: generators.listS3Objects,
          },
        },
        {
          name: "--s3-object-version",
          description:
            "For versioned objects, the version of the deployment package object to use.",
          args: {
            name: "string",
            generators: generators.listS3ObjectVersions,
          },
        },
        {
          name: "--image-uri",
          description: "URI of a container image in the Amazon ECR registry.",
          args: {
            name: "string",
          },
        },
        {
          name: "--publish",
          description:
            "Set to true to publish a new version of the function after updating the code. This has the same effect as calling PublishVersion separately.",
        },
        {
          name: "--no-publish",
          description:
            "Set to true to publish a new version of the function after updating the code. This has the same effect as calling PublishVersion separately.",
        },
        {
          name: "--dry-run",
          description:
            "Set to true to validate the request parameters and access permissions without modifying the function code.",
        },
        {
          name: "--no-dry-run",
          description:
            "Set to true to validate the request parameters and access permissions without modifying the function code.",
        },
        {
          name: "--revision-id",
          description:
            "Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getFunctionRevisionId,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "update-function-configuration",
      description:
        "Modify the version-specific settings of a Lambda function. When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The LastUpdateStatus, LastUpdateStatusReason, and LastUpdateStatusReasonCode fields in the response from GetFunctionConfiguration indicate when the update is complete and the function is processing events with the new configuration. For more information, see Function States. These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version. To configure function concurrency, use PutFunctionConcurrency. To grant invoke permissions to an account or AWS service, use AddPermission.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function.  Name formats     Function name - my-function.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--role",
          description:
            "The Amazon Resource Name (ARN) of the function's execution role.",
          args: {
            name: "string",
            generators: generators.listRoles,
          },
        },
        {
          name: "--handler",
          description:
            "The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see Programming Model.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the function.",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout",
          description:
            "The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--memory-size",
          description:
            "The amount of memory available to the function at runtime. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--vpc-config",
          description:
            "For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more information, see VPC Settings.",
          args: {
            name: "structure",
            description:
              "SubnetIds=string,string,SecurityGroupIds=string,string",
          },
        },
        {
          name: "--environment",
          description:
            "Environment variables that are accessible from function code during execution.",
          args: {
            name: "structure",
            description: "Variables={Key1=string,Key2=string}",
          },
        },
        {
          name: "--runtime",
          description: "The identifier of the function's runtime.",
          args: {
            name: "string",
            suggestions: runtimes,
          },
        },
        {
          name: "--dead-letter-config",
          description:
            "A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead Letter Queues.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
          args: {
            name: "string",
            generators: generators.listKmsKeys,
          },
        },
        {
          name: "--tracing-config",
          description:
            "Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.",
          args: {
            name: "structure",
            suggestions: ["Mode=Active", "Mode=PassThrough"],
          },
        },
        {
          name: "--revision-id",
          description:
            "Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.",
          args: {
            name: "string",
            generators: generators.getFunctionRevisionId,
          },
        },
        {
          name: "--layers",
          description:
            "A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.",
          args: {
            name: "list",
            generators: generators.listLayerArnsWithVersion,
          },
        },
        {
          name: "--file-system-configs",
          description: "Connection settings for an Amazon EFS file system.",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.listFilesystemConfigs,
            description: "Arn=string,LocalMountPath=string ...",
          },
        },
        {
          name: "--image-config",
          description:
            "Container image configuration values that override the values in the container image Dockerfile.",
          args: {
            name: "structure",
            description:
              "EntryPoint=string,string,Command=string,string,WorkingDirectory=string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "update-function-event-invoke-config",
      description:
        "Updates the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.",
      options: [
        {
          name: "--function-name",
          description:
            "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
          args: {
            name: "string",
            generators: generators.listLambdaFunctions,
          },
        },
        {
          name: "--qualifier",
          description: "A version number or alias name.",
          args: {
            name: "string",
            generators: [generators.listVersions, generators.listAliases],
          },
        },
        {
          name: "--maximum-retry-attempts",
          description:
            "The maximum number of times to retry when the function returns an error.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--maximum-event-age-in-seconds",
          description:
            "The maximum age of a request that Lambda sends to a function for processing.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--destination-config",
          description:
            "A destination for events after they have been sent to a function for processing.  Destinations     Function - The Amazon Resource Name (ARN) of a Lambda function.    Queue - The ARN of an SQS queue.    Topic - The ARN of an SNS topic.    Event Bus - The ARN of an Amazon EventBridge event bus.",
          args: {
            name: "structure",
            description:
              "OnSuccess={Destination=string},OnFailure={Destination=string}",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
            generators: generators.listFiles,
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
      subcommands: [
        {
          name: "function-active",
          description:
            "Waits for the function's State to be Active. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--function-name",
              description:
                "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
              args: {
                name: "string",
                generators: generators.listLambdaFunctions,
              },
            },
            {
              name: "--qualifier",
              description:
                "Specify a version or alias to get details about a published version of the function.",
              args: {
                name: "string",
                generators: [generators.listVersions, generators.listAliases],
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
                generators: generators.listFiles,
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
          name: "function-exists",
          description:
            "Wait until 200 response is received when polling with ``get-function``. It will poll every 1 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
          options: [
            {
              name: "--function-name",
              description:
                "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
              args: {
                name: "string",
                generators: generators.listLambdaFunctions,
              },
            },
            {
              name: "--qualifier",
              description:
                "Specify a version or alias to get details about a published version of the function.",
              args: {
                name: "string",
                generators: [generators.listVersions, generators.listAliases],
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
                generators: generators.listFiles,
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
          name: "function-updated",
          description:
            "Waits for the function's LastUpdateStatus to be Successful. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--function-name",
              description:
                "The name of the Lambda function, version, or alias.  Name formats     Function name - my-function (name-only), my-function:v1 (with alias).    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function.    Partial ARN - 123456789012:function:my-function.   You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.",
              args: {
                name: "string",
                generators: generators.listLambdaFunctions,
              },
            },
            {
              name: "--qualifier",
              description:
                "Specify a version or alias to get details about a published version of the function.",
              args: {
                name: "string",
                generators: [generators.listVersions, generators.listAliases],
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
                generators: generators.listFiles,
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
    },
  ],
};

export default completionSpec;
