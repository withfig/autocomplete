const completionSpec: Fig.Spec = {
  name: "codebuild",
  description:
    "CodeBuild CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild to use your own build tools. CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about CodeBuild, see the  CodeBuild User Guide",
  subcommands: [
    {
      name: "batch-delete-builds",
      description: "Deletes one or more builds",
      options: [
        {
          name: "--ids",
          description: "The IDs of the builds to delete",
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
      name: "batch-get-build-batches",
      description: "Retrieves information about one or more batch builds",
      options: [
        {
          name: "--ids",
          description:
            "An array that contains the batch build identifiers to retrieve",
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
      name: "batch-get-builds",
      description: "Gets information about one or more builds",
      options: [
        {
          name: "--ids",
          description: "The IDs of the builds",
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
      name: "batch-get-fleets",
      description: "Gets information about one or more compute fleets",
      options: [
        {
          name: "--names",
          description: "The names or ARNs of the compute fleets",
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
      name: "batch-get-projects",
      description: "Gets information about one or more build projects",
      options: [
        {
          name: "--names",
          description:
            "The names or ARNs of the build projects. To get information about a project shared with your Amazon Web Services account, its ARN must be specified. You cannot specify a shared project using its name",
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
      name: "batch-get-report-groups",
      description: "Returns an array of report groups",
      options: [
        {
          name: "--report-group-arns",
          description:
            "An array of report group ARNs that identify the report groups to return",
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
      name: "batch-get-reports",
      description: "Returns an array of reports",
      options: [
        {
          name: "--report-arns",
          description:
            "An array of ARNs that identify the Report objects to return",
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
      description: "Creates a compute fleet",
      options: [
        {
          name: "--name",
          description: "The name of the compute fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-capacity",
          description:
            "The initial number of machines allocated to the \ufb02eet, which de\ufb01nes the number of builds that can run in parallel",
          args: {
            name: "integer",
          },
        },
        {
          name: "--environment-type",
          description:
            "The environment type of the compute fleet.   The environment type ARM_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (S\u00e3o Paulo).   The environment type ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type LINUX_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type LINUX_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type LINUX_GPU_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).   The environment type MAC_ARM is available for Medium fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), and EU (Frankfurt)   The environment type MAC_ARM is available for Large fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).   The environment type WINDOWS_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type WINDOWS_SERVER_2019_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), Asia Pacific (Tokyo), Asia Pacific (Mumbai) and EU (Ireland).   The environment type WINDOWS_SERVER_2022_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (S\u00e3o Paulo) and Asia Pacific (Mumbai).   For more information, see Build environment compute types in the CodeBuild user guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-type",
          description:
            "Information about the compute resources the compute fleet uses. Available values include:    ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine.   If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment types in the CodeBuild User Guide.     BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for builds.    BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for builds.    BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type.    BUILD_GENERAL1_XLARGE: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type.    BUILD_GENERAL1_2XLARGE: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.    BUILD_LAMBDA_1GB: Use up to 1 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_2GB: Use up to 2 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_4GB: Use up to 4 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_8GB: Use up to 8 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_10GB: Use up to 10 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    If you use BUILD_GENERAL1_SMALL:     For environment type LINUX_CONTAINER, you can use up to 4 GiB memory and 2 vCPUs for builds.     For environment type LINUX_GPU_CONTAINER, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.    For environment type ARM_CONTAINER, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds.    If you use BUILD_GENERAL1_LARGE:     For environment type LINUX_CONTAINER, you can use up to 16 GiB memory and 8 vCPUs for builds.     For environment type LINUX_GPU_CONTAINER, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.    For environment type ARM_CONTAINER, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds.   For more information, see On-demand environment types in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-configuration",
          description:
            "The compute configuration of the compute fleet. This is only required if computeType is set to ATTRIBUTE_BASED_COMPUTE",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scaling-configuration",
          description: "The scaling configuration of the compute fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--overflow-behavior",
          description:
            "The compute fleet overflow behavior.   For overflow behavior QUEUE, your overflow builds need to wait on the existing fleet instance to become available.   For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild on-demand.  If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Information about the VPC configuration that CodeBuild accesses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--proxy-configuration",
          description: "The proxy configuration of the compute fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--image-id",
          description: "The Amazon Machine Image (AMI) of the compute fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-service-role",
          description:
            "The service role associated with the compute fleet. For more information, see  Allow a user to add a permission policy for a fleet service role in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag key and value pairs associated with this compute fleet. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags",
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
      name: "create-project",
      description: "Creates a build project",
      options: [
        {
          name: "--name",
          description: "The name of the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description that makes the build project easy to identify",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "Information about the build input source code for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--secondary-sources",
          description: "An array of ProjectSource objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-version",
          description:
            "A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:    For CodeCommit: the commit ID, branch, or Git tag to use.   For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For GitLab: the commit ID, branch, or Git tag to use.   For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Amazon S3: the version ID of the object that represents the build input ZIP file to use.   If sourceVersion is specified at the build level, then that version takes precedence over this sourceVersion (at the project level).  For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--secondary-source-versions",
          description:
            "An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they take precedence over these secondarySourceVersions (at the project level)",
          args: {
            name: "list",
          },
        },
        {
          name: "--artifacts",
          description:
            "Information about the build output artifacts for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--secondary-artifacts",
          description: "An array of ProjectArtifacts objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--cache",
          description:
            "Stores recently used information so that it can be quickly accessed at a later time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--environment",
          description:
            "Information about the build environment for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-in-minutes",
          description:
            "How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes",
          args: {
            name: "integer",
          },
        },
        {
          name: "--queued-timeout-in-minutes",
          description:
            "The number of minutes a build is allowed to be queued before it times out",
          args: {
            name: "integer",
          },
        },
        {
          name: "--encryption-key",
          description:
            "The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.  You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.   You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/<alias-name>)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag key and value pairs associated with this build project. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-config",
          description:
            "VpcConfig enables CodeBuild to access resources in an Amazon VPC.  If you're using compute fleets during project creation, do not provide vpcConfig",
          args: {
            name: "structure",
          },
        },
        {
          name: "--badge-enabled",
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge",
        },
        {
          name: "--no-badge-enabled",
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge",
        },
        {
          name: "--logs-config",
          description:
            "Information about logs for the build project. These can be logs in CloudWatch Logs, logs uploaded to a specified S3 bucket, or both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-system-locations",
          description:
            "An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System",
          args: {
            name: "list",
          },
        },
        {
          name: "--build-batch-config",
          description:
            "A ProjectBuildBatchConfig object that defines the batch build options for the project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--concurrent-build-limit",
          description:
            "The maximum number of concurrent builds that are allowed for this project. New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run",
          args: {
            name: "integer",
          },
        },
        {
          name: "--auto-retry-limit",
          description:
            "The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times",
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
      name: "create-report-group",
      description:
        "Creates a report group. A report group contains a collection of reports",
      options: [
        {
          name: "--name",
          description: "The name of the report group",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of report group",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-config",
          description:
            "A ReportExportConfig object that contains information about where the report group test results are exported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag key and value pairs associated with this report group.  These tags are available for use by Amazon Web Services services that support CodeBuild report group tags",
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
      name: "create-webhook",
      description:
        "For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.  If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings",
      options: [
        {
          name: "--project-name",
          description: "The name of the CodeBuild project",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-filter",
          description:
            "A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built.  It is recommended that you use filterGroups instead of branchFilter",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-groups",
          description:
            "An array of arrays of WebhookFilter objects used to determine which webhooks are triggered. At least one WebhookFilter in the array must specify EVENT as its type.  For a build to be triggered, at least one filter group in the filterGroups array must pass. For a filter group to pass, each of its filters must pass",
          args: {
            name: "list",
          },
        },
        {
          name: "--build-type",
          description: "Specifies the type of build this webhook will trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--manual-creation",
          description:
            "If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns payloadUrl and secret values for the webhook. The payloadUrl and secret values in the output can be used to manually create a webhook within GitHub.   manualCreation is only available for GitHub webhooks",
        },
        {
          name: "--no-manual-creation",
          description:
            "If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns payloadUrl and secret values for the webhook. The payloadUrl and secret values in the output can be used to manually create a webhook within GitHub.   manualCreation is only available for GitHub webhooks",
        },
        {
          name: "--scope-configuration",
          description:
            "The scope configuration for global or organization webhooks.  Global or organization webhooks are only available for GitHub and Github Enterprise webhooks",
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
      name: "delete-build-batch",
      description: "Deletes a batch build",
      options: [
        {
          name: "--id",
          description: "The identifier of the batch build to delete",
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
      name: "delete-fleet",
      description:
        "Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted",
      options: [
        {
          name: "--arn",
          description: "The ARN of the compute fleet",
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
      name: "delete-project",
      description:
        "Deletes a build project. When you delete a project, its builds are not deleted",
      options: [
        {
          name: "--name",
          description: "The name of the build project",
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
      name: "delete-report",
      description: "Deletes a report",
      options: [
        {
          name: "--arn",
          description: "The ARN of the report to delete",
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
      name: "delete-report-group",
      description:
        "Deletes a report group. Before you delete a report group, you must delete its reports",
      options: [
        {
          name: "--arn",
          description: "The ARN of the report group to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-reports",
          description:
            "If true, deletes any reports that belong to a report group before deleting the report group.  If false, you must delete any reports in the report group. Use ListReportsForReportGroup to get the reports in a report group. Use DeleteReport to delete the reports. If you call DeleteReportGroup for a report group that contains one or more reports, an exception is thrown",
        },
        {
          name: "--no-delete-reports",
          description:
            "If true, deletes any reports that belong to a report group before deleting the report group.  If false, you must delete any reports in the report group. Use ListReportsForReportGroup to get the reports in a report group. Use DeleteReport to delete the reports. If you call DeleteReportGroup for a report group that contains one or more reports, an exception is thrown",
        },
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
      name: "delete-resource-policy",
      description:
        "Deletes a resource policy that is identified by its resource ARN",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource that is associated with the resource policy",
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
      name: "delete-source-credentials",
      description:
        "Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials",
      options: [
        {
          name: "--arn",
          description: "The Amazon Resource Name (ARN) of the token",
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
      name: "delete-webhook",
      description:
        "For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository",
      options: [
        {
          name: "--project-name",
          description: "The name of the CodeBuild project",
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
      name: "describe-code-coverages",
      description: "Retrieves one or more code coverage reports",
      options: [
        {
          name: "--report-arn",
          description:
            "The ARN of the report for which test cases are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous call to DescribeCodeCoverages. This specifies the next item to return. To return the beginning of the list, exclude this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies if the results are sorted in ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies how the results are sorted. Possible values are:  FILE_PATH  The results are sorted by file path.  LINE_COVERAGE_PERCENTAGE  The results are sorted by the percentage of lines that are covered",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-line-coverage-percentage",
          description: "The minimum line coverage percentage to report",
          args: {
            name: "double",
          },
        },
        {
          name: "--max-line-coverage-percentage",
          description: "The maximum line coverage percentage to report",
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
      name: "describe-test-cases",
      description: "Returns a list of details about test cases for a report",
      options: [
        {
          name: "--report-arn",
          description:
            "The ARN of the report for which test cases are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated test cases returned per response. Use nextToken to iterate pages in the list of returned TestCase objects. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A TestCaseFilter object used to filter the returned reports",
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
      name: "get-report-group-trend",
      description:
        "Analyzes and accumulates test report values for the specified test reports",
      options: [
        {
          name: "--report-group-arn",
          description:
            "The ARN of the report group that contains the reports to analyze",
          args: {
            name: "string",
          },
        },
        {
          name: "--num-of-reports",
          description:
            "The number of reports to analyze. This operation always retrieves the most recent reports. If this parameter is omitted, the most recent 100 reports are analyzed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--trend-field",
          description:
            "The test report value to accumulate. This must be one of the following values:  Test reports:   DURATION  Accumulate the test run times for the specified reports.  PASS_RATE  Accumulate the percentage of tests that passed for the specified test reports.  TOTAL  Accumulate the total number of tests for the specified test reports.      Code coverage reports:   BRANCH_COVERAGE  Accumulate the branch coverage percentages for the specified test reports.  BRANCHES_COVERED  Accumulate the branches covered values for the specified test reports.  BRANCHES_MISSED  Accumulate the branches missed values for the specified test reports.  LINE_COVERAGE  Accumulate the line coverage percentages for the specified test reports.  LINES_COVERED  Accumulate the lines covered values for the specified test reports.  LINES_MISSED  Accumulate the lines not covered values for the specified test reports",
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
      name: "get-resource-policy",
      description:
        "Gets a resource policy that is identified by its resource ARN",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource that is associated with the resource policy",
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
      name: "import-source-credentials",
      description:
        "Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository",
      options: [
        {
          name: "--username",
          description:
            "The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections",
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description:
            "For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access token or the app password. For the authType CODECONNECTIONS, this is the connectionArn. For the authType SECRETS_MANAGER, this is the secretArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-type",
          description: "The source provider used for this project",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-type",
          description:
            "The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild console",
          args: {
            name: "string",
          },
        },
        {
          name: "--should-overwrite",
          description:
            "Set to false to prevent overwriting the repository source credentials. Set to true to overwrite the repository source credentials. The default value is true",
        },
        {
          name: "--no-should-overwrite",
          description:
            "Set to false to prevent overwriting the repository source credentials. Set to true to overwrite the repository source credentials. The default value is true",
        },
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
      name: "invalidate-project-cache",
      description: "Resets the cache for a project",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the CodeBuild build project that the cache is reset for",
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
      name: "list-build-batches",
      description:
        "Retrieves the identifiers of your build batches in the current region",
      options: [
        {
          name: "--filter",
          description:
            "A BuildBatchFilter object that specifies the filters for the search",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order of the returned items. Valid values include:    ASCENDING: List the batch build identifiers in ascending order by identifier.    DESCENDING: List the batch build identifiers in descending order by identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous call to ListBuildBatches. This specifies the next item to return. To return the beginning of the list, exclude this parameter",
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
      name: "list-build-batches-for-project",
      description:
        "Retrieves the identifiers of the build batches for a specific project",
      options: [
        {
          name: "--project-name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "A BuildBatchFilter object that specifies the filters for the search",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "Specifies the sort order of the returned items. Valid values include:    ASCENDING: List the batch build identifiers in ascending order by identifier.    DESCENDING: List the batch build identifiers in descending order by identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken value returned from a previous call to ListBuildBatchesForProject. This specifies the next item to return. To return the beginning of the list, exclude this parameter",
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
        "Gets a list of build IDs, with each build ID representing a single build",
      options: [
        {
          name: "--sort-order",
          description:
            "The order to list build IDs. Valid values include:    ASCENDING: List the build IDs in ascending order by build ID.    DESCENDING: List the build IDs in descending order by build ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
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
      name: "list-builds-for-project",
      description:
        "Gets a list of build identifiers for the specified build project, with each build identifier representing a single build",
      options: [
        {
          name: "--project-name",
          description: "The name of the CodeBuild project",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order to sort the results in. The results are sorted by build number, not the build identifier. If this is not specified, the results are sorted in descending order. Valid values include:    ASCENDING: List the build identifiers in ascending order, by build number.    DESCENDING: List the build identifiers in descending order, by build number.   If the project has more than 100 builds, setting the sort order will result in an error",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
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
      name: "list-curated-environment-images",
      description:
        "Gets information about Docker images that are managed by CodeBuild",
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
      name: "list-fleets",
      description:
        "Gets a list of compute fleet names with each compute fleet name representing a single compute fleet",
      options: [
        {
          name: "--next-token",
          description:
            "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated compute fleets returned per response. Use nextToken to iterate pages in the list of returned compute fleets",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order in which to list compute fleets. Valid values include:    ASCENDING: List in ascending order.    DESCENDING: List in descending order.   Use sortBy to specify the criterion to be used to list compute fleet names",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The criterion to be used to list compute fleet names. Valid values include:    CREATED_TIME: List based on when each compute fleet was created.    LAST_MODIFIED_TIME: List based on when information about each compute fleet was last changed.    NAME: List based on each compute fleet's name.   Use sortOrder to specify in what order to list the compute fleet names based on the preceding criteria",
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
      name: "list-projects",
      description:
        "Gets a list of build project names, with each build project name representing a single build project",
      options: [
        {
          name: "--sort-by",
          description:
            "The criterion to be used to list build project names. Valid values include:    CREATED_TIME: List based on when each build project was created.    LAST_MODIFIED_TIME: List based on when information about each build project was last changed.    NAME: List based on each build project's name.   Use sortOrder to specify in what order to list the build project names based on the preceding criteria",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order in which to list build projects. Valid values include:    ASCENDING: List in ascending order.    DESCENDING: List in descending order.   Use sortBy to specify the criterion to be used to list build project names",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a nextToken. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
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
      name: "list-report-groups",
      description:
        "Gets a list ARNs for the report groups in the current Amazon Web Services account",
      options: [
        {
          name: "--sort-order",
          description:
            "Used to specify the order to sort the list of returned report groups. Valid values are ASCENDING and DESCENDING",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The criterion to be used to list build report groups. Valid values include:     CREATED_TIME: List based on when each report group was created.    LAST_MODIFIED_TIME: List based on when each report group was last changed.    NAME: List based on each report group's name",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated report groups returned per response. Use nextToken to iterate pages in the list of returned ReportGroup objects. The default value is 100",
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
      name: "list-reports",
      description:
        "Returns a list of ARNs for the reports in the current Amazon Web Services account",
      options: [
        {
          name: "--sort-order",
          description:
            "Specifies the sort order for the list of returned reports. Valid values are:     ASCENDING: return reports in chronological order based on their creation date.     DESCENDING: return reports in the reverse chronological order based on their creation date",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated reports returned per response. Use nextToken to iterate pages in the list of returned Report objects. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A ReportFilter object used to filter the returned reports",
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
      name: "list-reports-for-report-group",
      description:
        "Returns a list of ARNs for the reports that belong to a ReportGroup",
      options: [
        {
          name: "--report-group-arn",
          description:
            "The ARN of the report group for which you want to return report ARNs",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "Use to specify whether the results are returned in ascending or descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated reports in this report group returned per response. Use nextToken to iterate pages in the list of returned Report objects. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A ReportFilter object used to filter the returned reports",
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
      name: "list-shared-projects",
      description:
        "Gets a list of projects that are shared with other Amazon Web Services accounts or users",
      options: [
        {
          name: "--sort-by",
          description:
            "The criterion to be used to list build projects shared with the current Amazon Web Services account or user. Valid values include:     ARN: List based on the ARN.     MODIFIED_TIME: List based on when information about the shared project was last changed",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order in which to list shared build projects. Valid values include:    ASCENDING: List in ascending order.    DESCENDING: List in descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated shared build projects returned per response. Use nextToken to iterate pages in the list of returned Project objects. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
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
      name: "list-shared-report-groups",
      description:
        "Gets a list of report groups that are shared with other Amazon Web Services accounts or users",
      options: [
        {
          name: "--sort-order",
          description:
            "The order in which to list shared report groups. Valid values include:    ASCENDING: List in ascending order.    DESCENDING: List in descending order",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid values include:     ARN: List based on the ARN.     MODIFIED_TIME: List based on when information about the shared report group was last changed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of paginated shared report groups per response. Use nextToken to iterate pages in the list of returned ReportGroup objects. The default value is 100",
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
      name: "list-source-credentials",
      description: "Returns a list of SourceCredentialsInfo objects",
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
      name: "put-resource-policy",
      description:
        "Stores a resource policy for the ARN of a Project or ReportGroup object",
      options: [
        {
          name: "--policy",
          description:
            "A JSON-formatted resource policy. For more information, see Sharing a Project and Sharing a Report Group in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The ARN of the Project or ReportGroup resource you want to associate with a resource policy",
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
      name: "retry-build",
      description: "Restarts a build",
      options: [
        {
          name: "--id",
          description: "Specifies the identifier of the build to restart",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuild request. The token is included in the RetryBuild request and is valid for five minutes. If you repeat the RetryBuild request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error",
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
      name: "retry-build-batch",
      description:
        "Restarts a failed batch build. Only batch builds that have failed can be retried",
      options: [
        {
          name: "--id",
          description: "Specifies the identifier of the batch build to restart",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuildBatch request. The token is included in the RetryBuildBatch request and is valid for five minutes. If you repeat the RetryBuildBatch request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--retry-type",
          description: "Specifies the type of retry to perform",
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
      name: "start-build",
      description:
        "Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the CodeBuild build project to start running a build",
          args: {
            name: "string",
          },
        },
        {
          name: "--secondary-sources-override",
          description: "An array of ProjectSource objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--secondary-sources-version-override",
          description:
            "An array of ProjectSourceVersion objects that specify one or more versions of the project's secondary sources to be used for this build only",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-version",
          description:
            "The version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:  CodeCommit  The commit ID, branch, or Git tag to use.  GitHub  The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.  GitLab  The commit ID, branch, or Git tag to use.  Bitbucket  The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.  Amazon S3  The version ID of the object that represents the build input ZIP file to use.   If sourceVersion is specified at the project level, then this sourceVersion (at the build level) takes precedence.  For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--artifacts-override",
          description:
            "Build output artifact settings that override, for this build only, the latest ones already defined in the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--secondary-artifacts-override",
          description: "An array of ProjectArtifacts objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--environment-variables-override",
          description:
            "A set of environment variables that overrides, for this build only, the latest ones already defined in the build project",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-type-override",
          description:
            "A source input type, for this build, that overrides the source input defined in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-location-override",
          description:
            "A location that overrides, for this build, the source location for the one defined in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-auth-override",
          description:
            "An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket, GitHub, GitLab, or GitLab Self Managed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--git-clone-depth-override",
          description:
            "The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project",
          args: {
            name: "integer",
          },
        },
        {
          name: "--git-submodules-config-override",
          description:
            "Information about the Git submodules configuration for this build of an CodeBuild build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--buildspec-override",
          description:
            "A buildspec file declaration that overrides the latest one defined in the build project, for this build only. The buildspec defined on the project is not changed. If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see Buildspec File Name and Storage Location.  Since this property allows you to change the build commands that will run in the container, you should note that an IAM principal with the ability to call this API and set this parameter can override the default settings. Moreover, we encourage that you use a trustworthy buildspec location like a file in your source repository or a Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--insecure-ssl-override",
          description:
            "Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise",
        },
        {
          name: "--no-insecure-ssl-override",
          description:
            "Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise",
        },
        {
          name: "--report-build-status-override",
          description:
            "Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown.  To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see Source provider access in the CodeBuild User Guide.   The status of a build triggered by a webhook is always reported to your source provider",
        },
        {
          name: "--no-report-build-status-override",
          description:
            "Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown.  To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see Source provider access in the CodeBuild User Guide.   The status of a build triggered by a webhook is always reported to your source provider",
        },
        {
          name: "--build-status-config-override",
          description:
            "Contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is GITHUB, GITHUB_ENTERPRISE, or BITBUCKET",
          args: {
            name: "structure",
          },
        },
        {
          name: "--environment-type-override",
          description:
            "A container type for this build that overrides the one specified in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-override",
          description:
            "The name of an image for this build that overrides the one specified in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-type-override",
          description:
            "The name of a compute type for this build that overrides the one specified in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-override",
          description:
            "The name of a certificate for this build that overrides the one specified in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-override",
          description:
            "A ProjectCache object specified for this build that overrides the one defined in the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role-override",
          description:
            "The name of a service role for this build that overrides the one specified in the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--privileged-mode-override",
          description:
            "Enable this flag to override privileged mode in the build project",
        },
        {
          name: "--no-privileged-mode-override",
          description:
            "Enable this flag to override privileged mode in the build project",
        },
        {
          name: "--timeout-in-minutes-override",
          description:
            "The number of build timeout minutes, from 5 to 2160 (36 hours), that overrides, for this build only, the latest setting already defined in the build project",
          args: {
            name: "integer",
          },
        },
        {
          name: "--queued-timeout-in-minutes-override",
          description:
            "The number of minutes a build is allowed to be queued before it times out",
          args: {
            name: "integer",
          },
        },
        {
          name: "--encryption-key-override",
          description:
            "The Key Management Service customer master key (CMK) that overrides the one specified in the build project. The CMK key encrypts the build output artifacts.   You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.   You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/<alias-name>)",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild request. The token is included in the StartBuild request and is valid for 5 minutes. If you repeat the StartBuild request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--logs-config-override",
          description:
            "Log settings for this build that override the log settings defined in the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--registry-credential-override",
          description: "The credentials for access to a private registry",
          args: {
            name: "structure",
          },
        },
        {
          name: "--image-pull-credentials-type-override",
          description:
            "The type of credentials CodeBuild uses to pull images in your build. There are two valid values:   CODEBUILD  Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.  SERVICE_ROLE  Specifies that CodeBuild uses your build project's service role.    When using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated image, you must use CODEBUILD credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--debug-session-enabled",
          description:
            "Specifies if session debugging is enabled for this build. For more information, see Viewing a running build in Session Manager",
        },
        {
          name: "--no-debug-session-enabled",
          description:
            "Specifies if session debugging is enabled for this build. For more information, see Viewing a running build in Session Manager",
        },
        {
          name: "--fleet-override",
          description:
            "A ProjectFleet object specified for this build that overrides the one defined in the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-retry-limit-override",
          description:
            "The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times",
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
      name: "start-build-batch",
      description: "Starts a batch build for a project",
      options: [
        {
          name: "--project-name",
          description: "The name of the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--secondary-sources-override",
          description:
            "An array of ProjectSource objects that override the secondary sources defined in the batch build project",
          args: {
            name: "list",
          },
        },
        {
          name: "--secondary-sources-version-override",
          description:
            "An array of ProjectSourceVersion objects that override the secondary source versions in the batch build project",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-version",
          description:
            "The version of the batch build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:  CodeCommit  The commit ID, branch, or Git tag to use.  GitHub  The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.  Bitbucket  The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.  Amazon S3  The version ID of the object that represents the build input ZIP file to use.   If sourceVersion is specified at the project level, then this sourceVersion (at the build level) takes precedence.  For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--artifacts-override",
          description:
            "An array of ProjectArtifacts objects that contains information about the build output artifact overrides for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--secondary-artifacts-override",
          description:
            "An array of ProjectArtifacts objects that override the secondary artifacts defined in the batch build project",
          args: {
            name: "list",
          },
        },
        {
          name: "--environment-variables-override",
          description:
            "An array of EnvironmentVariable objects that override, or add to, the environment variables defined in the batch build project",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-type-override",
          description:
            "The source input type that overrides the source input defined in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-location-override",
          description:
            "A location that overrides, for this batch build, the source location defined in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-auth-override",
          description:
            "A SourceAuth object that overrides the one defined in the batch build project. This override applies only if the build project's source is BitBucket or GitHub",
          args: {
            name: "structure",
          },
        },
        {
          name: "--git-clone-depth-override",
          description:
            "The user-defined depth of history, with a minimum value of 0, that overrides, for this batch build only, any previous depth of history defined in the batch build project",
          args: {
            name: "integer",
          },
        },
        {
          name: "--git-submodules-config-override",
          description:
            "A GitSubmodulesConfig object that overrides the Git submodules configuration for this batch build",
          args: {
            name: "structure",
          },
        },
        {
          name: "--buildspec-override",
          description:
            "A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project. If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see Buildspec File Name and Storage Location",
          args: {
            name: "string",
          },
        },
        {
          name: "--insecure-ssl-override",
          description:
            "Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise",
        },
        {
          name: "--no-insecure-ssl-override",
          description:
            "Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise",
        },
        {
          name: "--report-build-batch-status-override",
          description:
            "Set to true to report to your source provider the status of a batch build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown.   The status of a build triggered by a webhook is always reported to your source provider",
        },
        {
          name: "--no-report-build-batch-status-override",
          description:
            "Set to true to report to your source provider the status of a batch build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown.   The status of a build triggered by a webhook is always reported to your source provider",
        },
        {
          name: "--environment-type-override",
          description:
            "A container type for this batch build that overrides the one specified in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-override",
          description:
            "The name of an image for this batch build that overrides the one specified in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-type-override",
          description:
            "The name of a compute type for this batch build that overrides the one specified in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-override",
          description:
            "The name of a certificate for this batch build that overrides the one specified in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-override",
          description: "A ProjectCache object that specifies cache overrides",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role-override",
          description:
            "The name of a service role for this batch build that overrides the one specified in the batch build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--privileged-mode-override",
          description:
            "Enable this flag to override privileged mode in the batch build project",
        },
        {
          name: "--no-privileged-mode-override",
          description:
            "Enable this flag to override privileged mode in the batch build project",
        },
        {
          name: "--build-timeout-in-minutes-override",
          description:
            "Overrides the build timeout specified in the batch build project",
          args: {
            name: "integer",
          },
        },
        {
          name: "--queued-timeout-in-minutes-override",
          description:
            "The number of minutes a batch build is allowed to be queued before it times out",
          args: {
            name: "integer",
          },
        },
        {
          name: "--encryption-key-override",
          description:
            "The Key Management Service customer master key (CMK) that overrides the one specified in the batch build project. The CMK key encrypts the build output artifacts.  You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.   You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/<alias-name>)",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuildBatch request. The token is included in the StartBuildBatch request and is valid for five minutes. If you repeat the StartBuildBatch request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error",
          args: {
            name: "string",
          },
        },
        {
          name: "--logs-config-override",
          description:
            "A LogsConfig object that override the log settings defined in the batch build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--registry-credential-override",
          description:
            "A RegistryCredential object that overrides credentials for access to a private registry",
          args: {
            name: "structure",
          },
        },
        {
          name: "--image-pull-credentials-type-override",
          description:
            "The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values:   CODEBUILD  Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.  SERVICE_ROLE  Specifies that CodeBuild uses your build project's service role.    When using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated image, you must use CODEBUILD credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--build-batch-config-override",
          description:
            "A BuildBatchConfigOverride object that contains batch build configuration overrides",
          args: {
            name: "structure",
          },
        },
        {
          name: "--debug-session-enabled",
          description:
            "Specifies if session debugging is enabled for this batch build. For more information, see Viewing a running build in Session Manager. Batch session debugging is not supported for matrix batch builds",
        },
        {
          name: "--no-debug-session-enabled",
          description:
            "Specifies if session debugging is enabled for this batch build. For more information, see Viewing a running build in Session Manager. Batch session debugging is not supported for matrix batch builds",
        },
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
      name: "stop-build",
      description: "Attempts to stop running a build",
      options: [
        {
          name: "--id",
          description: "The ID of the build",
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
      name: "stop-build-batch",
      description: "Stops a running batch build",
      options: [
        {
          name: "--id",
          description: "The identifier of the batch build to stop",
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
      name: "update-fleet",
      description: "Updates a compute fleet",
      options: [
        {
          name: "--arn",
          description: "The ARN of the compute fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-capacity",
          description:
            "The initial number of machines allocated to the compute \ufb02eet, which de\ufb01nes the number of builds that can run in parallel",
          args: {
            name: "integer",
          },
        },
        {
          name: "--environment-type",
          description:
            "The environment type of the compute fleet.   The environment type ARM_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (S\u00e3o Paulo).   The environment type ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type LINUX_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type LINUX_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type LINUX_GPU_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).   The environment type MAC_ARM is available for Medium fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), and EU (Frankfurt)   The environment type MAC_ARM is available for Large fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).   The environment type WINDOWS_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (S\u00e3o Paulo), and Asia Pacific (Mumbai).   The environment type WINDOWS_SERVER_2019_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), Asia Pacific (Tokyo), Asia Pacific (Mumbai) and EU (Ireland).   The environment type WINDOWS_SERVER_2022_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (S\u00e3o Paulo) and Asia Pacific (Mumbai).   For more information, see Build environment compute types in the CodeBuild user guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-type",
          description:
            "Information about the compute resources the compute fleet uses. Available values include:    ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine.   If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment types in the CodeBuild User Guide.     BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for builds.    BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for builds.    BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type.    BUILD_GENERAL1_XLARGE: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type.    BUILD_GENERAL1_2XLARGE: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.    BUILD_LAMBDA_1GB: Use up to 1 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_2GB: Use up to 2 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_4GB: Use up to 4 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_8GB: Use up to 8 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    BUILD_LAMBDA_10GB: Use up to 10 GiB memory for builds. Only available for environment type LINUX_LAMBDA_CONTAINER and ARM_LAMBDA_CONTAINER.    If you use BUILD_GENERAL1_SMALL:     For environment type LINUX_CONTAINER, you can use up to 4 GiB memory and 2 vCPUs for builds.     For environment type LINUX_GPU_CONTAINER, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.    For environment type ARM_CONTAINER, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds.    If you use BUILD_GENERAL1_LARGE:     For environment type LINUX_CONTAINER, you can use up to 16 GiB memory and 8 vCPUs for builds.     For environment type LINUX_GPU_CONTAINER, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.    For environment type ARM_CONTAINER, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds.   For more information, see On-demand environment types in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-configuration",
          description:
            "The compute configuration of the compute fleet. This is only required if computeType is set to ATTRIBUTE_BASED_COMPUTE",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scaling-configuration",
          description: "The scaling configuration of the compute fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--overflow-behavior",
          description:
            "The compute fleet overflow behavior.   For overflow behavior QUEUE, your overflow builds need to wait on the existing fleet instance to become available.   For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild on-demand.  If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-config",
          description:
            "Information about the VPC configuration that CodeBuild accesses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--proxy-configuration",
          description: "The proxy configuration of the compute fleet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--image-id",
          description: "The Amazon Machine Image (AMI) of the compute fleet",
          args: {
            name: "string",
          },
        },
        {
          name: "--fleet-service-role",
          description:
            "The service role associated with the compute fleet. For more information, see  Allow a user to add a permission policy for a fleet service role in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag key and value pairs associated with this compute fleet. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags",
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
      name: "update-project",
      description: "Changes the settings of a build project",
      options: [
        {
          name: "--name",
          description:
            "The name of the build project.  You cannot change a build project's name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new or replacement description of the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source",
          description:
            "Information to be changed about the build input source code for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--secondary-sources",
          description: "An array of ProjectSource objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-version",
          description:
            "A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:    For CodeCommit: the commit ID, branch, or Git tag to use.   For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For GitLab: the commit ID, branch, or Git tag to use.   For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Amazon S3: the version ID of the object that represents the build input ZIP file to use.    If sourceVersion is specified at the build level, then that version takes precedence over this sourceVersion (at the project level).   For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--secondary-source-versions",
          description:
            "An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build level, then they take over these secondarySourceVersions (at the project level)",
          args: {
            name: "list",
          },
        },
        {
          name: "--artifacts",
          description:
            "Information to be changed about the build output artifacts for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--secondary-artifacts",
          description: "An array of ProjectArtifact objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--cache",
          description:
            "Stores recently used information so that it can be quickly accessed at a later time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--environment",
          description:
            "Information to be changed about the build environment for the build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service-role",
          description:
            "The replacement ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--timeout-in-minutes",
          description:
            "The replacement value in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out any related build that did not get marked as completed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--queued-timeout-in-minutes",
          description:
            "The number of minutes a build is allowed to be queued before it times out",
          args: {
            name: "integer",
          },
        },
        {
          name: "--encryption-key",
          description:
            "The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.   You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.   You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/<alias-name>)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An updated list of tag key and value pairs associated with this build project. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-config",
          description:
            "VpcConfig enables CodeBuild to access resources in an Amazon VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--badge-enabled",
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge",
        },
        {
          name: "--no-badge-enabled",
          description:
            "Set this to true to generate a publicly accessible URL for your project's build badge",
        },
        {
          name: "--logs-config",
          description:
            "Information about logs for the build project. A project can create logs in CloudWatch Logs, logs in an S3 bucket, or both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-system-locations",
          description:
            "An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System",
          args: {
            name: "list",
          },
        },
        {
          name: "--build-batch-config",
          description:
            "Contains configuration information about a batch build project",
          args: {
            name: "structure",
          },
        },
        {
          name: "--concurrent-build-limit",
          description:
            "The maximum number of concurrent builds that are allowed for this project. New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run. To remove this limit, set this value to -1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--auto-retry-limit",
          description:
            "The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times",
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
      name: "update-project-visibility",
      description:
        "Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide.  The following should be kept in mind when making your projects public:   All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.   All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:   Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.   Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.     A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded",
      options: [
        {
          name: "--project-arn",
          description: "The Amazon Resource Name (ARN) of the build project",
          args: {
            name: "string",
          },
        },
        {
          name: "--project-visibility",
          description:
            "Specifies the visibility of the project's builds. Possible values are:  PUBLIC_READ  The project builds are visible to the public.  PRIVATE  The project builds are not visible to the public",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-access-role",
          description:
            "The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds",
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
      name: "update-report-group",
      description: "Updates a report group",
      options: [
        {
          name: "--arn",
          description: "The ARN of the report group to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-config",
          description:
            "Used to specify an updated export type. Valid values are:     S3: The report results are exported to an S3 bucket.     NO_EXPORT: The report results are not exported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "An updated list of tag key and value pairs associated with this report group.  These tags are available for use by Amazon Web Services services that support CodeBuild report group tags",
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
      name: "update-webhook",
      description:
        "Updates the webhook associated with an CodeBuild build project.    If you use Bitbucket for your repository, rotateSecret is ignored",
      options: [
        {
          name: "--project-name",
          description: "The name of the CodeBuild project",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-filter",
          description:
            "A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built.   It is recommended that you use filterGroups instead of branchFilter",
          args: {
            name: "string",
          },
        },
        {
          name: "--rotate-secret",
          description:
            "A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, rotateSecret is ignored",
        },
        {
          name: "--no-rotate-secret",
          description:
            "A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, rotateSecret is ignored",
        },
        {
          name: "--filter-groups",
          description:
            "An array of arrays of WebhookFilter objects used to determine if a webhook event can trigger a build. A filter group must contain at least one EVENT WebhookFilter",
          args: {
            name: "list",
          },
        },
        {
          name: "--build-type",
          description: "Specifies the type of build this webhook will trigger",
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
};
export default completionSpec;
