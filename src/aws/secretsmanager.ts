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

const ttl = 30000;

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
    const dots_arr = [];
    const other_arr = [];

    arr.map((elm) => {
      if (elm.toLowerCase() == ".ds_store") return;
      if (elm.slice(0, 1) === ".") dots_arr.push(elm);
      else other_arr.push(elm);
    });

    return [
      ...other_arr.sort(sortFnStrings),
      "../",
      ...dots_arr.sort(sortFnStrings),
    ];
  };

  const temp_array = alphabeticalSortFilesAndFolders(out.split("\n"));

  const final_array = [];

  temp_array.forEach((item) => {
    if (!(item === "" || item === null || item === undefined)) {
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

const _prefixFile = "file://";
const _prefixFileb = "fileb://";

const generators: Record<string, Fig.Generator> = {
  secretIdsGenerator: {
    // --page-size does not affect the number of items returned,
    // just chunks request so it won't timeout
    script: [
      "aws",
      "secretsmanager",
      "list-secrets",
      "--sort-order",
      "asc",
      "--page-size",
      "100",
    ],
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["SecretList"];
        return list.map((item) => ({
          name: item["Name"],
        }));
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  kmsKeyIdGenerator: {
    // --page-size does not affect the number of items returned,
    // just chunks request so it won't timeout
    script: ["aws", "kms", "list-keys", "--page-size", "100"],
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["Keys"];
        return list.map((item) => ({
          name: item["KeyId"],
        }));
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  // --cli-input-json and a few other options takes a JSON string literal, or arbitrary files containing valid JSON.
  // In case the JSON is passed as a file, the filepath must be prefixed by file://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
  listFilesGenerator: {
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

  // --secret-binary and a few other options takes a blob as parameter.
  // The path pointing to the blob must be prefixed by fileb://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
  listBlobsGenerator: {
    script: (tokens) => {
      return appendFolderPath(tokens, _prefixFileb);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFileb);
    },

    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFileb);
    },

    getQueryTerm: (token) => {
      return filterWithPrefix(token, _prefixFileb);
    },
  },
  getReplicaRegionsGenerator: {
    script: ["aws", "kms", "list-keys", "--page-size", "100"],
    postProcess: function (out, tokens) {
      try {
        const list = JSON.parse(out)["Keys"];
        return list.flatMap((secret) => {
          return awsRegions.flatMap((region) => {
            return {
              name: `Region=${region},KmsKeyId=${secret.KeyId}`,
            };
          });
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
  getLambdasGenerator: {
    script: ["aws", "lambda", "list-functions", "--page-size", "100"],
    postProcess: function (out, tokens) {
      try {
        const list = JSON.parse(out)["Functions"];
        return list.map((item) => ({
          name: item["FunctionArn"],
        }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  getVersionIdGenerator: {
    custom: async function (tokens, executeShellCommand) {
      try {
        // secret-id value
        const idx = tokens.indexOf("--secret-id");
        if (idx < 0) {
          return [];
        }
        const secretId = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["secretsmanager", "describe-secret", "--secret-id", secretId],
        });
        const versions = JSON.parse(stdout)["VersionIdsToStages"];
        return Object.keys(versions).map((elm) => ({ name: elm }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  getVersionStageGenerator: {
    custom: async function (tokens, executeShellCommand) {
      try {
        // secret-id value
        const idx = tokens.indexOf("--secret-id");
        if (idx < 0) {
          return [];
        }
        const secretId = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["secretsmanager", "describe-secret", "--secret-id", secretId],
        });
        const versions = JSON.parse(stdout)["VersionIdsToStages"];
        return Object.keys(versions).map((elm) => ({ name: versions[elm][0] }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },

  listTagKeys: {
    custom: async function (tokens, executeShellCommand) {
      try {
        // secret-id value
        const idx = tokens.indexOf("--secret-id");
        if (idx < 0) {
          return [];
        }
        const secretId = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["secretsmanager", "describe-secret", "--secret-id", secretId],
        });
        const versions = JSON.parse(stdout)["Tags"];
        return versions.map((elm) => ({ name: elm["Key"] }));
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
  name: "secretsmanager",
  description:
    "AWS Secrets Manager API Reference AWS Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets. This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the AWS Secrets Manager User Guide.  API Version  This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.  As an alternative to using the API, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms such as Java, Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic access to AWS Secrets Manager. For example, the SDKs provide cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including downloading and installing them, see Tools for Amazon Web Services.  We recommend you use the AWS SDKs to make programmatic API calls to Secrets Manager. However, you also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn more about the Secrets Manager HTTP Query API, see Making Query Requests in the AWS Secrets Manager User Guide.  Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.  Support and Feedback for AWS Secrets Manager  We welcome your feedback. Send your comments to awssecretsmanager-feedback@amazon.com, or post your feedback and questions in the AWS Secrets Manager Discussion Forum. For more information about the AWS Discussion Forums, see Forums Help.  How examples are presented  The JSON that AWS Secrets Manager expects as your request parameters and the service returns as a response to HTTP query requests contain single, long strings without line breaks or white space formatting. The JSON shown in the examples displays the code formatted with both line breaks and white space to improve readability. When example input parameters can also cause long strings extending beyond the screen, you can insert line breaks to enhance readability. You should always submit the input as a single JSON text string.  Logging API Requests  AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information that's collected by AWS CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about AWS Secrets Manager and support for AWS CloudTrail, see Logging AWS Secrets Manager Events with AWS CloudTrail in the AWS Secrets Manager User Guide. To learn more about CloudTrail, including enabling it and find your log files, see the AWS CloudTrail User Guide",
  subcommands: [
    {
      name: "cancel-rotate-secret",
      description:
        "Disables automatic scheduled rotation and cancels the rotation of a secret if currently in progress. To re-enable scheduled rotation, call RotateSecret with AutomaticallyRotateAfterDays set to a value greater than 0. This immediately rotates your secret and then enables the automatic schedule.  If you cancel a rotation while in progress, it can leave the VersionStage labels in an unexpected state. Depending on the step of the rotation in progress, you might need to remove the staging label AWSPENDING from the partially created version, specified by the VersionId response value. You should also evaluate the partially rotated new version to see if it should be deleted, which you can do by removing all staging labels from the new version VersionStage field.  To successfully start a rotation, the staging label AWSPENDING must be in one of the following states:   Not attached to any version at all   Attached to the same version as the staging label AWSCURRENT    If the staging label AWSPENDING attached to a different version than the version with AWSCURRENT then the attempt to rotate fails.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:CancelRotateSecret    Related operations    To configure rotation for a secret or to manually trigger a rotation, use RotateSecret.   To get the rotation configuration details for a secret, use DescribeSecret.   To list all of the currently available secrets, use ListSecrets.   To list all of the versions currently associated with a secret, use ListSecretVersionIds",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret to cancel a rotation request. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-secret",
      description:
        "Creates a new secret. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret. Secrets Manager stores the encrypted secret data in one of a collection of \"versions\" associated with the secret. Each version contains a copy of the encrypted secret data. Each version is associated with one or more \"staging labels\" that identify where the version is in the rotation cycle. The SecretVersionsToStages field of the secret contains the mapping of staging labels to the active versions of the secret. Versions without a staging label are considered deprecated and not included in the list. You provide the secret data to be encrypted by putting text in either the SecretString parameter or binary data in the SecretBinary parameter, but not both. If you include SecretString or SecretBinary then Secrets Manager also creates an initial secret version and automatically attaches the staging label AWSCURRENT to the new version.    If you call an operation to encrypt or decrypt the SecretString or SecretBinary for a secret in the same account as the calling user and that secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default AWS managed customer master key (CMK) with the alias aws/secretsmanager. If this key doesn't already exist in your account then Secrets Manager creates it for you automatically. All users and roles in the same AWS account automatically have access to use the default CMK. Note that if an Secrets Manager API call results in AWS creating the account's AWS-managed CMK, it can result in a one-time significant delay in returning the result.   If the secret resides in a different AWS account from the credentials calling an API that requires encryption or decryption of the secret value then you must create and use a custom AWS KMS CMK because you can't access the default CMK for the account using credentials from a different AWS account. Store the ARN of the CMK in the secret when you create the secret or when you update it by including it in the KMSKeyId. If you call an API that must encrypt or decrypt SecretString or SecretBinary using credentials from a different account then the AWS KMS key policy must grant cross-account access to that other account's user or role for both the kms:GenerateDataKey and kms:Decrypt operations.       Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:CreateSecret   kms:GenerateDataKey - needed only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account default AWS managed CMK for Secrets Manager.   kms:Decrypt - needed only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account default AWS managed CMK for Secrets Manager.   secretsmanager:TagResource - needed only if you include the Tags parameter.     Related operations    To delete a secret, use DeleteSecret.   To modify an existing secret, use UpdateSecret.   To create a new version of a secret, use PutSecretValue.   To retrieve the encrypted secure string and secure binary values, use GetSecretValue.   To retrieve all other details for a secret, use DescribeSecret. This does not include the encrypted secure string and secure binary values.   To retrieve the list of secret versions associated with the current secret, use DescribeSecret and examine the SecretVersionsToStages response value",
      options: [
        {
          name: "--name",
          description:
            "Specifies the friendly name of the new secret. The secret name must be ASCII letters, digits, or the following characters : /_+=.@-  Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters at the end of the ARN",
          priority: 100,
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) If you include SecretString or SecretBinary, then an initial version is created as part of the secret, and this parameter specifies a unique identifier for the new version.   If you use the AWS CLI or one of the AWS SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken yourself for the new version and include the value in the request.  This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a UUID-type value to ensure uniqueness of your versions within the specified secret.    If the ClientRequestToken value isn't already associated with a version of the secret then a new version of the secret is created.    If a version with this value already exists and the version SecretString and SecretBinary values are the same as those in the request, then the request is ignored.   If a version with this value already exists and that version's SecretString and SecretBinary values are different from those in the request, then the request fails because you cannot modify an existing version. Instead, use PutSecretValue to create a new version.   This value becomes the VersionId of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "(Optional) Specifies a user-provided description of the secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "(Optional) Specifies the ARN, Key ID, or alias of the AWS KMS customer master key (CMK) to be used to encrypt the SecretString or SecretBinary values in the versions stored in this secret. You can specify any of the supported ways to identify a AWS KMS key ID. If you need to reference a CMK in a different account, you can use only the key ARN or the alias ARN. If you don't specify this value, then Secrets Manager defaults to using the AWS account's default CMK (the one named aws/secretsmanager). If a AWS KMS CMK with that name doesn't yet exist, then Secrets Manager creates it for you automatically the first time it needs to encrypt a version's SecretString or SecretBinary fields.  You can use the account default CMK to encrypt and decrypt only if you call this operation using credentials from the same account that owns the secret. If the secret resides in a different account, then you must create a custom CMK and specify the ARN in this field",
          priority: 80,
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
        },
        {
          name: "--secret-binary",
          description:
            "(Optional) Specifies binary data that you want to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then use the appropriate technique for your tool to pass the contents of the file as a parameter. Either SecretString or SecretBinary must have a value, but not both. They cannot both be empty. This parameter is not available using the Secrets Manager console. It can be accessed only by using the AWS CLI or one of the AWS SDKs",
          priority: 90,
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--secret-string",
          description:
            '(Optional) Specifies text data that you want to encrypt and store in this new version of the secret. Either SecretString or SecretBinary must have a value, but not both. They cannot both be empty. If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the SecretString parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that the Lambda rotation function knows how to parse. For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide. For example:  {"username":"bob","password":"abc123xyz456"}  If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text',
          priority: 90,
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            '(Optional) Specifies a list of user-defined tags that are attached to the secret. Each tag is a "Key" and "Value" pair of strings. This operation only appends tags to the existing list of tags. To remove tags, you must use UntagResource.    Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".   If you check tags in IAM policy Condition elements as part of your security strategy, then adding or removing a tag can change permissions. If the successful completion of this operation would result in you losing your permissions for this secret, then this operation is blocked and returns an Access Denied error.    This parameter requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide. For example:  [{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]  If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.  The following basic restrictions apply to tags:   Maximum number of tags per secret\u201450   Maximum key length\u2014127 Unicode characters in UTF-8   Maximum value length\u2014255 Unicode characters in UTF-8   Tag keys and values are case sensitive.   Do not use the aws: prefix in your tag names or values because AWS reserves it for AWS use. You can\'t edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.   If you use your tagging schema across multiple services and resources, remember other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @',
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--add-replica-regions",
          description:
            "(Optional) Add a list of regions to replicate secrets. Secrets Manager replicates the KMSKeyID objects to the list of regions specified in the parameter",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getReplicaRegionsGenerator,
          },
        },
        {
          name: "--force-overwrite-replica-secret",
          description:
            "(Optional) If set, the replication overwrites a secret with the same name in the destination region",
        },
        {
          name: "--no-force-overwrite-replica-secret",
          description:
            "(Optional) If set, the replication overwrites a secret with the same name in the destination region",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resource-policy",
      description:
        "Deletes the resource-based permission policy attached to the secret.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:DeleteResourcePolicy    Related operations    To attach a resource policy to a secret, use PutResourcePolicy.   To retrieve the current resource-based policy attached to a secret, use GetResourcePolicy.   To list all of the currently available secrets, use ListSecrets",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret that you want to delete the attached resource-based policy for. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-secret",
      description:
        "Deletes an entire secret and all of the versions. You can optionally include a recovery window during which you can restore the secret. If you don't specify a recovery window value, the operation defaults to 30 days. Secrets Manager attaches a DeletionDate stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently. At any time before recovery window ends, you can use RestoreSecret to remove the DeletionDate and cancel the deletion of the secret. You cannot access the encrypted secret information in any secret scheduled for deletion. If you need to access that information, you must cancel the deletion with RestoreSecret and then retrieve the information.    There is no explicit operation to delete a version of a secret. Instead, remove all staging labels from the VersionStage field of a version. That marks the version as deprecated and allows Secrets Manager to delete it as needed. Versions without any staging labels do not show up in ListSecretVersionIds unless you specify IncludeDeprecated.   The permanent secret deletion at the end of the waiting period is performed as a background task with low priority. There is no guarantee of a specific time after the recovery window for the actual delete operation to occur.     Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:DeleteSecret    Related operations    To create a secret, use CreateSecret.   To cancel deletion of a version of a secret before the recovery window has expired, use RestoreSecret",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret to delete. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--recovery-window-in-days",
          description:
            "(Optional) Specifies the number of days that Secrets Manager waits before Secrets Manager can delete the secret. You can't use both this parameter and the ForceDeleteWithoutRecovery parameter in the same API call. This value can range from 7 to 30 days with a default value of 30",
          args: {
            name: "long",
            suggestions: Array.from({ length: 31 - 7 }, (v, k) =>
              String(k + 7)
            ),
          },
        },
        {
          name: "--force-delete-without-recovery",
          description:
            "(Optional) Specifies that the secret is to be deleted without any recovery window. You can't use both this parameter and the RecoveryWindowInDays parameter in the same API call. An asynchronous background process performs the actual deletion, so there can be a short delay before the operation completes. If you write code to delete and then immediately recreate a secret with the same name, ensure that your code includes appropriate back off and retry logic.  Use this parameter with caution. This parameter causes the operation to skip the normal waiting period before the permanent deletion that AWS would normally impose with the RecoveryWindowInDays parameter. If you delete a secret with the ForceDeleteWithoutRecovery parameter, then you have no opportunity to recover the secret. You lose the secret permanently.   If you use this parameter and include a previously deleted or nonexistent secret, the operation does not return the error ResourceNotFoundException in order to correctly handle retries",
        },
        {
          name: "--no-force-delete-without-recovery",
          description:
            "(Optional) Specifies that the secret is to be deleted without any recovery window. You can't use both this parameter and the RecoveryWindowInDays parameter in the same API call. An asynchronous background process performs the actual deletion, so there can be a short delay before the operation completes. If you write code to delete and then immediately recreate a secret with the same name, ensure that your code includes appropriate back off and retry logic.  Use this parameter with caution. This parameter causes the operation to skip the normal waiting period before the permanent deletion that AWS would normally impose with the RecoveryWindowInDays parameter. If you delete a secret with the ForceDeleteWithoutRecovery parameter, then you have no opportunity to recover the secret. You lose the secret permanently.   If you use this parameter and include a previously deleted or nonexistent secret, the operation does not return the error ResourceNotFoundException in order to correctly handle retries",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-secret",
      description:
        "Retrieves the details of a secret. It does not include the encrypted fields. Secrets Manager only returns fields populated with a value in the response.   Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:DescribeSecret    Related operations    To create a secret, use CreateSecret.   To modify a secret, use UpdateSecret.   To retrieve the encrypted secret information in a version of the secret, use GetSecretValue.   To list all of the secrets in the AWS account, use ListSecrets",
      options: [
        {
          name: "--secret-id",
          description:
            "The identifier of the secret whose details you want to retrieve. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-random-password",
      description:
        "Generates a random password of the specified complexity. This operation is intended for use in the Lambda rotation function. Per best practice, we recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:GetRandomPassword",
      options: [
        {
          name: "--password-length",
          description:
            "The desired length of the generated password. The default value if you do not include this parameter is 32 characters",
          args: {
            name: "long",
          },
        },
        {
          name: "--exclude-characters",
          description:
            "A string that includes characters that should not be included in the generated password. The default is that all characters from the included sets can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude-numbers",
          description:
            "Specifies that the generated password should not include digits. The default if you do not include this switch parameter is that digits can be included",
        },
        {
          name: "--no-exclude-numbers",
          description:
            "Specifies that the generated password should not include digits. The default if you do not include this switch parameter is that digits can be included",
        },
        {
          name: "--exclude-punctuation",
          description:
            "Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included. The following are the punctuation characters that can be included in the generated password if you don't explicitly exclude them with ExcludeCharacters or ExcludePunctuation:  ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~",
        },
        {
          name: "--no-exclude-punctuation",
          description:
            "Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included. The following are the punctuation characters that can be included in the generated password if you don't explicitly exclude them with ExcludeCharacters or ExcludePunctuation:  ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~",
        },
        {
          name: "--exclude-uppercase",
          description:
            "Specifies that the generated password should not include uppercase letters. The default if you do not include this switch parameter is that uppercase letters can be included",
        },
        {
          name: "--no-exclude-uppercase",
          description:
            "Specifies that the generated password should not include uppercase letters. The default if you do not include this switch parameter is that uppercase letters can be included",
        },
        {
          name: "--exclude-lowercase",
          description:
            "Specifies that the generated password should not include lowercase letters. The default if you do not include this switch parameter is that lowercase letters can be included",
        },
        {
          name: "--no-exclude-lowercase",
          description:
            "Specifies that the generated password should not include lowercase letters. The default if you do not include this switch parameter is that lowercase letters can be included",
        },
        {
          name: "--include-space",
          description:
            "Specifies that the generated password can include the space character. The default if you do not include this switch parameter is that the space character is not included",
        },
        {
          name: "--no-include-space",
          description:
            "Specifies that the generated password can include the space character. The default if you do not include this switch parameter is that the space character is not included",
        },
        {
          name: "--require-each-included-type",
          description:
            "A boolean value that specifies whether the generated password must include at least one of every allowed character type. The default value is True and the operation requires at least one of every character type",
        },
        {
          name: "--no-require-each-included-type",
          description:
            "A boolean value that specifies whether the generated password must include at least one of every allowed character type. The default value is True and the operation requires at least one of every character type",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-resource-policy",
      description:
        "Retrieves the JSON text of the resource-based policy document attached to the specified secret. The JSON request string input and response output displays formatted code with white space and line breaks for better readability. Submit your input as a single line JSON string.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:GetResourcePolicy    Related operations    To attach a resource policy to a secret, use PutResourcePolicy.   To delete the resource-based policy attached to a secret, use DeleteResourcePolicy.   To list all of the currently available secrets, use ListSecrets",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret that you want to retrieve the attached resource-based policy for. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-secret-value",
      description:
        "Retrieves the contents of the encrypted fields SecretString or SecretBinary from the specified version of a secret, whichever contains content.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:GetSecretValue   kms:Decrypt - required only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account's default AWS managed CMK for Secrets Manager.    Related operations    To create a new version of the secret with different encrypted information, use PutSecretValue.   To retrieve the non-encrypted details for the secret, use DescribeSecret",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret containing the version that you want to retrieve. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--version-id",
          description:
            "Specifies the unique identifier of the version of the secret that you want to retrieve. If you specify both this parameter and VersionStage, the two parameters must refer to the same secret version. If you don't specify either a VersionStage or VersionId then the default is to perform the operation on the version with the VersionStage value of AWSCURRENT. This value is typically a UUID-type value with 32 hexadecimal digits",
          args: {
            name: "string",
            generators: generators.getVersionIdGenerator,
          },
        },
        {
          name: "--version-stage",
          description:
            "Specifies the secret version that you want to retrieve by the staging label attached to the version. Staging labels are used to keep track of different versions during the rotation process. If you specify both this parameter and VersionId, the two parameters must refer to the same secret version . If you don't specify either a VersionStage or VersionId, then the default is to perform the operation on the version with the VersionStage value of AWSCURRENT",
          args: {
            name: "string",
            generators: generators.getVersionStageGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-secret-version-ids",
      description:
        "Lists all of the versions attached to the specified secret. The output does not include the SecretString or SecretBinary fields. By default, the list includes only versions that have at least one staging label in VersionStage attached.  Always check the NextToken response parameter when calling any of the List* operations. These operations can occasionally return an empty or shorter than expected list of results even when there more results become available. When this happens, the NextToken response parameter contains a value to pass to the next call to the same API to request the next part of the list.   Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:ListSecretVersionIds    Related operations    To list the secrets in an account, use ListSecrets",
      options: [
        {
          name: "--secret-id",
          description:
            "The identifier for the secret containing the versions you want to list. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--max-results",
          description:
            "(Optional) Limits the number of results you want to include in the response. If you don't include this parameter, it defaults to a value that's specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (isn't null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Secrets Manager might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Use this parameter in a request if you receive a NextToken response in a previous request indicating there's more output available. In a subsequent call, set it to the value of the previous call NextToken response to indicate where the output should continue from",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-deprecated",
          description:
            "(Optional) Specifies that you want the results to include versions that do not have any staging labels attached to them. Such versions are considered deprecated and are subject to deletion by Secrets Manager as needed",
        },
        {
          name: "--no-include-deprecated",
          description:
            "(Optional) Specifies that you want the results to include versions that do not have any staging labels attached to them. Such versions are considered deprecated and are subject to deletion by Secrets Manager as needed",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-secrets",
      description:
        "Lists all of the secrets that are stored by Secrets Manager in the AWS account. To list the versions currently stored for a specific secret, use ListSecretVersionIds. The encrypted fields SecretString and SecretBinary are not included in the output. To get that information, call the GetSecretValue operation.  Always check the NextToken response parameter when calling any of the List* operations. These operations can occasionally return an empty or shorter than expected list of results even when there more results become available. When this happens, the NextToken response parameter contains a value to pass to the next call to the same API to request the next part of the list.   Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:ListSecrets    Related operations    To list the versions attached to a secret, use ListSecretVersionIds",
      options: [
        {
          name: "--max-results",
          description:
            "(Optional) Limits the number of results you want to include in the response. If you don't include this parameter, it defaults to a value that's specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (isn't null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that Secrets Manager might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "(Optional) Use this parameter in a request if you receive a NextToken response in a previous request indicating there's more output available. In a subsequent call, set it to the value of the previous call NextToken response to indicate where the output should continue from",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Lists the secret request filters",
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=string,Value=string",
          },
        },
        {
          name: "--sort-order",
          description: "Lists secrets in the requested order",
          args: {
            name: "string",
            suggestions: ["asc", "desc"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
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
      name: "put-resource-policy",
      description:
        "Attaches the contents of the specified resource-based permission policy to a secret. A resource-based policy is optional. Alternatively, you can use IAM identity-based policies that specify the secret's Amazon Resource Name (ARN) in the policy statement's Resources element. You can also use a combination of both identity-based and resource-based policies. The affected users and roles receive the permissions that are permitted by all of the relevant policies. For more information, see Using Resource-Based Policies for AWS Secrets Manager. For the complete description of the AWS policy syntax and grammar, see IAM JSON Policy Reference in the IAM User Guide.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:PutResourcePolicy    Related operations    To retrieve the resource policy attached to a secret, use GetResourcePolicy.   To delete the resource-based policy attached to a secret, use DeleteResourcePolicy.   To list all of the currently available secrets, use ListSecrets",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret that you want to attach the resource-based policy. You can specify either the ARN or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--resource-policy",
          description:
            "A JSON-formatted string constructed according to the grammar and syntax for an AWS resource-based policy. The policy in the string identifies who can access or manage this secret and its versions. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--block-public-policy",
          description:
            "(Optional) If you set the parameter, BlockPublicPolicy to true, then you block resource-based policies that allow broad access to the secret",
        },
        {
          name: "--no-block-public-policy",
          description:
            "(Optional) If you set the parameter, BlockPublicPolicy to true, then you block resource-based policies that allow broad access to the secret",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-secret-value",
      description:
        "Stores a new encrypted secret value in the specified secret. To do this, the operation creates a new version and attaches it to the secret. The version can contain a new SecretString value or a new SecretBinary value. You can also specify the staging labels that are initially attached to the new version.  The Secrets Manager console uses only the SecretString field. To add binary data to a secret with the SecretBinary field you must use the AWS CLI or one of the AWS SDKs.    If this operation creates the first version for the secret then Secrets Manager automatically attaches the staging label AWSCURRENT to the new version.   If you do not specify a value for VersionStages then Secrets Manager automatically moves the staging label AWSCURRENT to this new version.   If this operation moves the staging label AWSCURRENT from another version to this version, then Secrets Manager also automatically moves the staging label AWSPREVIOUS to the version that AWSCURRENT was removed from.   This operation is idempotent. If a version with a VersionId with the same value as the ClientRequestToken parameter already exists and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you cannot modify an existing version; you can only create new ones.      If you call an operation to encrypt or decrypt the SecretString or SecretBinary for a secret in the same account as the calling user and that secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default AWS managed customer master key (CMK) with the alias aws/secretsmanager. If this key doesn't already exist in your account then Secrets Manager creates it for you automatically. All users and roles in the same AWS account automatically have access to use the default CMK. Note that if an Secrets Manager API call results in AWS creating the account's AWS-managed CMK, it can result in a one-time significant delay in returning the result.   If the secret resides in a different AWS account from the credentials calling an API that requires encryption or decryption of the secret value then you must create and use a custom AWS KMS CMK because you can't access the default CMK for the account using credentials from a different AWS account. Store the ARN of the CMK in the secret when you create the secret or when you update it by including it in the KMSKeyId. If you call an API that must encrypt or decrypt SecretString or SecretBinary using credentials from a different account then the AWS KMS key policy must grant cross-account access to that other account's user or role for both the kms:GenerateDataKey and kms:Decrypt operations.     Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:PutSecretValue   kms:GenerateDataKey - needed only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account's default AWS managed CMK for Secrets Manager.    Related operations    To retrieve the encrypted value you store in the version of a secret, use GetSecretValue.   To create a secret, use CreateSecret.   To get the details for a secret, use DescribeSecret.   To list the versions attached to a secret, use ListSecretVersionIds",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) Specifies a unique identifier for the new version of the secret.   If you use the AWS CLI or one of the AWS SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken yourself for new versions and include that value in the request.   This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during the Lambda rotation function's processing. We recommend that you generate a UUID-type value to ensure uniqueness within the specified secret.    If the ClientRequestToken value isn't already associated with a version of the secret then a new version of the secret is created.    If a version with this value already exists and that version's SecretString or SecretBinary values are the same as those in the request then the request is ignored (the operation is idempotent).    If a version with this value already exists and the version of the SecretString and SecretBinary values are different from those in the request then the request fails because you cannot modify an existing secret version. You can only create new versions to store new secret values.   This value becomes the VersionId of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-binary",
          description:
            "(Optional) Specifies binary data that you want to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then use the appropriate technique for your tool to pass the contents of the file as a parameter. Either SecretBinary or SecretString must have a value, but not both. They cannot both be empty. This parameter is not accessible if the secret using the Secrets Manager console",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--secret-string",
          description:
            '(Optional) Specifies text data that you want to encrypt and store in this new version of the secret. Either SecretString or SecretBinary must have a value, but not both. They cannot both be empty. If you create this secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the SecretString parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that the default Lambda rotation function knows how to parse. For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide.  For example:  [{"username":"bob"},{"password":"abc123xyz456"}]  If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text',
          args: {
            name: "string",
          },
        },
        {
          name: "--version-stages",
          description:
            "(Optional) Specifies a list of staging labels that are attached to this version of the secret. These staging labels are used to track the versions through the rotation process by the Lambda rotation function. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value for VersionStages then Secrets Manager automatically moves the staging label AWSCURRENT to this new version",
          args: {
            name: "list",
            generators: generators.getVersionStageGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "remove-regions-from-replication",
      description: "Remove regions from replication",
      options: [
        {
          name: "--secret-id",
          description: "Remove a secret by SecretId from replica Regions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--remove-replica-regions",
          description: "Remove replication from specific Regions",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: awsRegions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "replicate-secret-to-regions",
      description:
        "Converts an existing secret to a multi-Region secret and begins replication the secret to a list of new regions",
      options: [
        {
          name: "--secret-id",
          description: "Use the Secret Id to replicate a secret to regions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--add-replica-regions",
          description: "Add Regions to replicate the secret",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getReplicaRegionsGenerator,
          },
        },
        {
          name: "--force-overwrite-replica-secret",
          description:
            "(Optional) If set, Secrets Manager replication overwrites a secret with the same name in the destination region",
        },
        {
          name: "--no-force-overwrite-replica-secret",
          description:
            "(Optional) If set, Secrets Manager replication overwrites a secret with the same name in the destination region",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "restore-secret",
      description:
        "Cancels the scheduled deletion of a secret by removing the DeletedDate time stamp. This makes the secret accessible to query once again.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:RestoreSecret    Related operations    To delete a secret, use DeleteSecret",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret that you want to restore from a previously scheduled deletion. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "rotate-secret",
      description:
        "Configures and starts the asynchronous process of rotating this secret. If you include the configuration parameters, the operation sets those values for the secret and then immediately starts a rotation. If you do not include the configuration parameters, the operation starts a rotation with the values already stored in the secret. After the rotation completes, the protected service and its clients all use the new version of the secret.  This required configuration information includes the ARN of an AWS Lambda function and the time between scheduled rotations. The Lambda rotation function creates a new version of the secret and creates or updates the credentials on the protected service to match. After testing the new credentials, the function marks the new secret with the staging label AWSCURRENT so that your clients all immediately begin to use the new version. For more information about rotating secrets and how to configure a Lambda function to rotate the secrets for your protected service, see Rotating Secrets in AWS Secrets Manager in the AWS Secrets Manager User Guide. Secrets Manager schedules the next rotation when the previous one completes. Secrets Manager schedules the date by adding the rotation interval (number of days) to the actual date of the last rotation. The service chooses the hour within that 24-hour date window randomly. The minute is also chosen somewhat randomly, but weighted towards the top of the hour and influenced by a variety of factors that help distribute load. The rotation function must end with the versions of the secret in one of two states:   The AWSPENDING and AWSCURRENT staging labels are attached to the same version of the secret, or   The AWSPENDING staging label is not attached to any version of the secret.   If the AWSPENDING staging label is present but not attached to the same version as AWSCURRENT then any later invocation of RotateSecret assumes that a previous rotation request is still in progress and returns an error.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:RotateSecret   lambda:InvokeFunction (on the function specified in the secret's metadata)    Related operations    To list the secrets in your account, use ListSecrets.   To get the details for a version of a secret, use DescribeSecret.   To create a new version of a secret, use CreateSecret.   To attach staging labels to or remove staging labels from a version of a secret, use UpdateSecretVersionStage",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret that you want to rotate. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) Specifies a unique identifier for the new version of the secret that helps ensure idempotency.  If you use the AWS CLI or one of the AWS SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request for this parameter. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken yourself for new versions and include that value in the request. You only need to specify your own value if you implement your own retry logic and want to ensure that a given secret is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified secret.  Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during the function's processing. This value becomes the VersionId of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--rotation-lambda-arn",
          description:
            "(Optional) Specifies the ARN of the Lambda function that can rotate the secret",
          args: {
            name: "string",
            generators: generators.getLambdasGenerator,
          },
        },
        {
          name: "--rotation-rules",
          description:
            "A structure that defines the rotation configuration for this secret",
          args: {
            name: "structure",
            description: "AutomaticallyAfterDays=number_of_days",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-replication-to-replica",
      description:
        "Removes the secret from replication and promotes the secret to a regional secret in the replica Region",
      options: [
        {
          name: "--secret-id",
          description:
            "Response to StopReplicationToReplica of a secret, based on the SecretId",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Attaches one or more tags, each consisting of a key name and a value, to the specified secret. Tags are part of the secret's overall metadata, and are not associated with any specific version of the secret. This operation only appends tags to the existing list of tags. To remove tags, you must use UntagResource. The following basic restrictions apply to tags:   Maximum number of tags per secret\u201450   Maximum key length\u2014127 Unicode characters in UTF-8   Maximum value length\u2014255 Unicode characters in UTF-8   Tag keys and values are case sensitive.   Do not use the aws: prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.   If you use your tagging schema across multiple services and resources, remember other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.    If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.   Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:TagResource    Related operations    To remove one or more tags from the collection attached to a secret, use UntagResource.   To view the list of tags attached to a secret, use DescribeSecret",
      options: [
        {
          name: "--secret-id",
          description:
            "The identifier for the secret that you want to attach tags to. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--tags",
          description:
            'The tags to attach to the secret. Each element in the list consists of a Key and a Value. This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide. For the AWS CLI, you can also use the syntax: --Tags Key="Key1",Value="Value1" Key="Key2",Value="Value2"[,\u2026]',
          args: {
            name: "list",
            isVariadic: true,
            description: "Key=Key1,Value=Value1",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Removes one or more tags from the specified secret. This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.  If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.   Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:UntagResource    Related operations    To add one or more tags to the collection attached to a secret, use TagResource.   To view the list of tags attached to a secret, use DescribeSecret",
      options: [
        {
          name: "--secret-id",
          description:
            "The identifier for the secret that you want to remove tags from. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag key names to remove from the secret. You don't specify the value. Both the key and its associated value are removed. This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide",
          args: {
            name: "list",
            generators: generators.listTagKeys,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-secret",
      description:
        "Modifies many of the details of the specified secret. If you include a ClientRequestToken and either SecretString or SecretBinary then it also creates a new version attached to the secret. To modify the rotation configuration of a secret, use RotateSecret instead.  The Secrets Manager console uses only the SecretString parameter and therefore limits you to encrypting and storing only a text string. To encrypt and store binary data as part of the version of a secret, you must use either the AWS CLI or one of the AWS SDKs.    If a version with a VersionId with the same value as the ClientRequestToken parameter already exists, the operation results in an error. You cannot modify an existing version, you can only create a new version.   If you include SecretString or SecretBinary to create a new secret version, Secrets Manager automatically attaches the staging label AWSCURRENT to the new version.       If you call an operation to encrypt or decrypt the SecretString or SecretBinary for a secret in the same account as the calling user and that secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default AWS managed customer master key (CMK) with the alias aws/secretsmanager. If this key doesn't already exist in your account then Secrets Manager creates it for you automatically. All users and roles in the same AWS account automatically have access to use the default CMK. Note that if an Secrets Manager API call results in AWS creating the account's AWS-managed CMK, it can result in a one-time significant delay in returning the result.   If the secret resides in a different AWS account from the credentials calling an API that requires encryption or decryption of the secret value then you must create and use a custom AWS KMS CMK because you can't access the default CMK for the account using credentials from a different AWS account. Store the ARN of the CMK in the secret when you create the secret or when you update it by including it in the KMSKeyId. If you call an API that must encrypt or decrypt SecretString or SecretBinary using credentials from a different account then the AWS KMS key policy must grant cross-account access to that other account's user or role for both the kms:GenerateDataKey and kms:Decrypt operations.     Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:UpdateSecret   kms:GenerateDataKey - needed only if you use a custom AWS KMS key to encrypt the secret. You do not need this permission to use the account's AWS managed CMK for Secrets Manager.   kms:Decrypt - needed only if you use a custom AWS KMS key to encrypt the secret. You do not need this permission to use the account's AWS managed CMK for Secrets Manager.    Related operations    To create a new secret, use CreateSecret.   To add only a new version to an existing secret, use PutSecretValue.   To get the details for a secret, use DescribeSecret.   To list the versions contained in a secret, use ListSecretVersionIds",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret that you want to modify or to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--client-request-token",
          description:
            "(Optional) If you want to add a new version to the secret, this parameter specifies a unique identifier for the new version that helps ensure idempotency.  If you use the AWS CLI or one of the AWS SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken yourself for new versions and include that value in the request. You typically only need to interact with this value if you implement your own retry logic and want to ensure that a given secret is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified secret.  Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during the Lambda rotation function's processing.   If the ClientRequestToken value isn't already associated with a version of the secret then a new version of the secret is created.    If a version with this value already exists and that version's SecretString and SecretBinary values are the same as those in the request then the request is ignored (the operation is idempotent).    If a version with this value already exists and that version's SecretString and SecretBinary values are different from the request then an error occurs because you cannot modify an existing secret value.   This value becomes the VersionId of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "(Optional) Specifies an updated user-provided description of the secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "(Optional) Specifies an updated ARN or alias of the AWS KMS customer master key (CMK) to be used to encrypt the protected text in new versions of this secret.  You can only use the account's default CMK to encrypt and decrypt if you call this operation using credentials from the same account that owns the secret. If the secret is in a different account, then you must create a custom CMK and provide the ARN of that CMK in this field. The user making the call must have permissions to both the secret and the CMK in their respective accounts",
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
        },
        {
          name: "--secret-binary",
          description:
            "(Optional) Specifies updated binary data that you want to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then use the appropriate technique for your tool to pass the contents of the file as a parameter. Either SecretBinary or SecretString must have a value, but not both. They cannot both be empty. This parameter is not accessible using the Secrets Manager console",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--secret-string",
          description:
            '(Optional) Specifies updated text data that you want to encrypt and store in this new version of the secret. Either SecretBinary or SecretString must have a value, but not both. They cannot both be empty. If you create this secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the SecretString parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that the default Lambda rotation function knows how to parse. For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide. For example:  [{"username":"bob"},{"password":"abc123xyz456"}]  If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text. You can also \'escape\' the double quote character in the embedded JSON text by prefacing each with a backslash. For example, the following string is surrounded by double-quotes. All of the embedded double quotes are escaped:  "[{\\"username\\":\\"bob\\"},{\\"password\\":\\"abc123xyz456\\"}]"',
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
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-secret-version-stage",
      description:
        "Modifies the staging labels attached to a version of a secret. Staging labels are used to track a version as it progresses through the secret rotation process. You can attach a staging label to only one version of a secret at a time. If a staging label to be added is already attached to another version, then it is moved--removed from the other version first and then attached to this one. For more information about staging labels, see Staging Labels in the AWS Secrets Manager User Guide.  The staging labels that you specify in the VersionStage parameter are added to the existing list of staging labels--they don't replace it. You can move the AWSCURRENT staging label to this version by including it in this call.  Whenever you move AWSCURRENT, Secrets Manager automatically moves the label AWSPREVIOUS to the version that AWSCURRENT was removed from.  If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager.  Minimum permissions  To run this command, you must have the following permissions:   secretsmanager:UpdateSecretVersionStage    Related operations    To get the list of staging labels that are currently associated with a version of a secret, use  DescribeSecret  and examine the SecretVersionsToStages response value",
      options: [
        {
          name: "--secret-id",
          description:
            "Specifies the secret with the version with the list of staging labels you want to modify. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--version-stage",
          description: "The staging label to add to this version",
          args: {
            name: "string",
            generators: generators.getVersionStageGenerator,
          },
        },
        {
          name: "--remove-from-version-id",
          description:
            "Specifies the secret version ID of the version that the staging label is to be removed from. If the staging label you are trying to attach to one version is already attached to a different version, then you must include this parameter and specify the version that the label is to be removed from. If the label is attached and you either do not specify this parameter, or the version ID does not match, then the operation fails",
          args: {
            name: "string",
            generators: generators.getVersionIdGenerator,
          },
        },
        {
          name: "--move-to-version-id",
          description:
            "(Optional) The secret version ID that you want to add the staging label. If you want to remove a label from a version, then do not specify this parameter. If the staging label is already attached to a different version of the secret, then you must also specify the RemoveFromVersionId parameter",
          args: {
            name: "string",
            generators: generators.getVersionIdGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "validate-resource-policy",
      description:
        "Validates that the resource policy does not grant a wide range of IAM principals access to your secret. The JSON request string input and response output displays formatted code with white space and line breaks for better readability. Submit your input as a single line JSON string. A resource-based policy is optional for secrets. The API performs three checks when validating the secret:   Sends a call to Zelkova, an automated reasoning engine, to ensure your Resource Policy does not allow broad access to your secret.   Checks for correct syntax in a policy.   Verifies the policy does not lock out a caller.    Minimum Permissions  You must have the permissions required to access the following APIs:    secretsmanager:PutResourcePolicy     secretsmanager:ValidateResourcePolicy",
      options: [
        {
          name: "--secret-id",
          description:
            "(Optional) The identifier of the secret with the resource-based policy you want to validate. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret.  If you specify an ARN, we generally recommend that you specify a complete ARN. You can specify a partial ARN too\u2014for example, if you don\u2019t include the final hyphen and six random characters that Secrets Manager adds at the end of the ARN when you created the secret. A partial ARN match can work as long as it uniquely matches only one secret. However, if your secret has a name that ends in a hyphen followed by six characters (before Secrets Manager adds the hyphen and six characters to the ARN) and you try to use that as a partial ARN, then those characters cause Secrets Manager to assume that you\u2019re specifying a complete ARN. This confusion can cause unexpected results. To avoid this situation, we recommend that you don\u2019t create secret names ending with a hyphen followed by six characters. If you specify an incomplete ARN without the random suffix, and instead provide the 'friendly name', you must not include the random suffix. If you do include the random suffix added by Secrets Manager, you receive either a ResourceNotFoundException or an AccessDeniedException error, depending on your permissions",
          priority: 100,
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--resource-policy",
          description:
            "A JSON-formatted string constructed according to the grammar and syntax for an AWS resource-based policy. The policy in the string identifies who can access or manage this secret and its versions. For information on how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters in the AWS CLI User Guide.publi",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
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
