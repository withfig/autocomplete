const completionSpec: Fig.Spec = {
  name: "personalize",
  description:
    "Amazon Personalize is a machine learning service that makes it easy to add individualized recommendations to customers",
  subcommands: [
    {
      name: "create-batch-inference-job",
      description:
        "Generates batch recommendations based on a list of items or users stored in Amazon S3 and exports the recommendations to an Amazon S3 bucket. To generate batch recommendations, specify the ARN of a solution version and an Amazon S3 URI for the input and output data. For user personalization, popular items, and personalized ranking solutions, the batch inference job generates a list of recommended items for each user ID in the input file. For related items solutions, the job generates a list of recommended items for each item ID in the input file. For more information, see Creating a batch inference job .  If you use the Similar-Items recipe, Amazon Personalize can add descriptive themes to batch recommendations. To generate themes, set the job's mode to THEME_GENERATION and specify the name of the field that contains item names in the input data.  For more information about generating themes, see Batch recommendations with themes from Content Generator .  You can't get batch recommendations with the Trending-Now or Next-Best-Action recipes",
      options: [
        {
          name: "--job-name",
          description: "The name of the batch inference job to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution version that will be used to generate the batch inference recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-arn",
          description:
            "The ARN of the filter to apply to the batch inference job. For more information on using filters, see Filtering batch recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--num-results",
          description: "The number of recommendations to retrieve",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-input",
          description:
            "The Amazon S3 path that leads to the input file to base your recommendations on. The input material must be in JSON format",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-output",
          description:
            "The path to the Amazon S3 bucket where the job's output will be stored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output Amazon S3 buckets respectively",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-inference-job-config",
          description: "The configuration details of a batch inference job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the batch inference job",
          args: {
            name: "list",
          },
        },
        {
          name: "--batch-inference-job-mode",
          description:
            "The mode of the batch inference job. To generate descriptive themes for groups of similar items, set the job mode to THEME_GENERATION. If you don't want to generate themes, use the default BATCH_INFERENCE.  When you get batch recommendations with themes, you will incur additional costs. For more information, see Amazon Personalize pricing",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-generation-config",
          description:
            "For theme generation jobs, specify the name of the column in your Items dataset that contains each item's name",
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
      name: "create-batch-segment-job",
      description:
        "Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see Getting batch recommendations and user segments",
      options: [
        {
          name: "--job-name",
          description: "The name of the batch segment job to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution version you want the batch segment job to use to generate batch segments",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-arn",
          description:
            "The ARN of the filter to apply to the batch segment job. For more information on using filters, see Filtering batch recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--num-results",
          description:
            "The number of predicted users generated by the batch segment job for each line of input data. The maximum number of users per segment is 5 million",
          args: {
            name: "integer",
          },
        },
        {
          name: "--job-input",
          description:
            "The Amazon S3 path for the input data used to generate the batch segment job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--job-output",
          description:
            "The Amazon S3 path for the bucket where the job's output will be stored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the Amazon Identity and Access Management role that has permissions to read and write to your input and output Amazon S3 buckets respectively",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the batch segment job",
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
      name: "create-campaign",
      description:
        "You incur campaign costs while it is active. To avoid unnecessary costs, make sure to delete the campaign when you are finished. For information about campaign costs, see Amazon Personalize pricing.  Creates a campaign that deploys a solution version. When a client calls the GetRecommendations and GetPersonalizedRanking APIs, a campaign is specified in the request.  Minimum Provisioned TPS and Auto-Scaling    A high minProvisionedTPS will increase your cost. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary.   When you create an Amazon Personalize campaign, you can specify the minimum provisioned transactions per second (minProvisionedTPS) for the campaign. This is the baseline transaction throughput for the campaign provisioned by Amazon Personalize. It sets the minimum billing charge for the campaign while it is active. A transaction is a single GetRecommendations or GetPersonalizedRanking request. The default minProvisionedTPS is 1.  If your TPS increases beyond the minProvisionedTPS, Amazon Personalize auto-scales the provisioned capacity up and down, but never below minProvisionedTPS. There's a short time delay while the capacity is increased that might cause loss of transactions. When your traffic reduces, capacity returns to the minProvisionedTPS.  You are charged for the the minimum provisioned TPS or, if your requests exceed the minProvisionedTPS, the actual TPS. The actual TPS is the total number of recommendation requests you make. We recommend starting with a low minProvisionedTPS, track your usage using Amazon CloudWatch metrics, and then increase the minProvisionedTPS as necessary. For more information about campaign costs, see Amazon Personalize pricing.  Status  A campaign can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   DELETE PENDING > DELETE IN_PROGRESS   To get the campaign status, call DescribeCampaign.  Wait until the status of the campaign is ACTIVE before asking the campaign for recommendations.   Related APIs     ListCampaigns     DescribeCampaign     UpdateCampaign     DeleteCampaign",
      options: [
        {
          name: "--name",
          description:
            "A name for the new campaign. The campaign name must be unique within your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the trained model to deploy with the campaign. To specify the latest solution version of your solution, specify the ARN of your solution in SolutionArn/$LATEST format. You must use this format if you set syncWithLatestSolutionVersion to True in the CampaignConfig.   To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version.   For more information about automatic campaign updates, see Enabling automatic campaign updates",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-provisioned-tps",
          description:
            "Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support. A high minProvisionedTPS will increase your bill. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary",
          args: {
            name: "integer",
          },
        },
        {
          name: "--campaign-config",
          description: "The configuration details of a campaign",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the campaign",
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
      name: "create-data-deletion-job",
      description:
        "Creates a batch job that deletes all references to specific users from an Amazon Personalize dataset group in batches. You specify the users to delete in a CSV file of userIds in an Amazon S3 bucket. After a job completes, Amazon Personalize no longer trains on the users\u2019 data and no longer considers the users when generating user segments. For more information about creating a data deletion job, see Deleting users.   Your input file must be a CSV file with a single USER_ID column that lists the users IDs. For more information about preparing the CSV file, see Preparing your data deletion file and uploading it to Amazon S3.   To give Amazon Personalize permission to access your input CSV file of userIds, you must specify an IAM service role that has permission to read from the data source. This role needs GetObject and ListBucket permissions for the bucket and its content. These permissions are the same as importing data. For information on granting access to your Amazon S3 bucket, see Giving Amazon Personalize Access to Amazon S3 Resources.     After you create a job, it can take up to a day to delete all references to the users from datasets and models. Until the job completes, Amazon Personalize continues to use the data when training. And if you use a User Segmentation recipe, the users might appear in user segments.   Status  A data deletion job can have one of the following statuses:   PENDING > IN_PROGRESS > COMPLETED -or- FAILED   To get the status of the data deletion job, call DescribeDataDeletionJob API operation and specify the Amazon Resource Name (ARN) of the job. If the status is FAILED, the response includes a failureReason key, which describes why the job failed.  Related APIs     ListDataDeletionJobs     DescribeDataDeletionJob",
      options: [
        {
          name: "--job-name",
          description: "The name for the data deletion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group that has the datasets you want to delete records from",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source",
          description:
            "The Amazon S3 bucket that contains the list of userIds of the users to delete",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the data deletion job",
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
      name: "create-dataset",
      description:
        "Creates an empty dataset and adds it to the specified dataset group. Use CreateDatasetImportJob to import your training data to a dataset. There are 5 types of datasets:   Item interactions   Items   Users   Action interactions   Actions   Each dataset type has an associated schema with required field types. Only the Item interactions dataset is required in order to train a model (also referred to as creating a solution). A dataset can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   DELETE PENDING > DELETE IN_PROGRESS   To get the status of the dataset, call DescribeDataset.  Related APIs     CreateDatasetGroup     ListDatasets     DescribeDataset     DeleteDataset",
      options: [
        {
          name: "--name",
          description: "The name for the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-arn",
          description:
            "The ARN of the schema to associate with the dataset. The schema defines the dataset fields",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group to add the dataset to",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The type of dataset. One of the following (case insensitive) values:   Interactions   Items   Users   Actions   Action_Interactions",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the dataset",
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
      name: "create-dataset-export-job",
      description:
        "Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize PutObject permissions for your Amazon S3 bucket. For information, see Exporting a dataset in the Amazon Personalize developer guide.   Status  A dataset export job can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED    To get the status of the export job, call DescribeDatasetExportJob, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed",
      options: [
        {
          name: "--job-name",
          description: "The name for the dataset export job",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset that contains the data to export",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-mode",
          description:
            "The data to export, based on how you imported the data. You can choose to export only BULK data that you imported using a dataset import job, only PUT data that you imported incrementally (using the console, PutEvents, PutUsers and PutItems operations), or ALL for both types. The default value is PUT",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-output",
          description:
            "The path to the Amazon S3 bucket where the job's output is stored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the dataset export job",
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
      name: "create-dataset-group",
      description:
        "Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:   Item interactions   Items   Users   Actions   Action interactions    A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns.  A dataset group can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   DELETE PENDING   To get the status of the dataset group, call DescribeDatasetGroup. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the creation failed.  You must wait until the status of the dataset group is ACTIVE before adding a dataset to the group.  You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.  APIs that require a dataset group ARN in the request     CreateDataset     CreateEventTracker     CreateSolution     Related APIs     ListDatasetGroups     DescribeDatasetGroup     DeleteDatasetGroup",
      options: [
        {
          name: "--name",
          description: "The name for the new dataset group",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the Identity and Access Management (IAM) role that has permissions to access the Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of a Key Management Service (KMS) key used to encrypt the datasets",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The domain of the dataset group. Specify a domain to create a Domain dataset group. The domain you specify determines the default schemas for datasets and the use cases available for recommenders. If you don't specify a domain, you create a Custom dataset group with solution versions that you deploy with a campaign",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the dataset group",
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
      name: "create-dataset-import-job",
      description:
        "Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see Giving Amazon Personalize Access to Amazon S3 Resources.  If you already created a recommender or deployed a custom solution version with a campaign, how new bulk records influence recommendations depends on the domain use case or recipe that you use. For more information, see How new data influences real-time recommendations.  By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.   Status  A dataset import job can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   To get the status of the import job, call DescribeDatasetImportJob, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed.  Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.   Related APIs     ListDatasetImportJobs     DescribeDatasetImportJob",
      options: [
        {
          name: "--job-name",
          description: "The name for the dataset import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-arn",
          description: "The ARN of the dataset that receives the imported data",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source",
          description:
            "The Amazon S3 bucket that contains the training data to import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the IAM role that has permissions to read from the Amazon S3 data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the dataset import job",
          args: {
            name: "list",
          },
        },
        {
          name: "--import-mode",
          description:
            "Specify how to add the new records to an existing dataset. The default import mode is FULL. If you haven't imported bulk records into the dataset previously, you can only specify FULL.   Specify FULL to overwrite all existing bulk data in your dataset. Data you imported individually is not replaced.   Specify INCREMENTAL to append the new records to the existing data in your dataset. Amazon Personalize replaces any record with the same ID with the new one",
          args: {
            name: "string",
          },
        },
        {
          name: "--publish-attribution-metrics-to-s3",
          description:
            "If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3",
        },
        {
          name: "--no-publish-attribution-metrics-to-s3",
          description:
            "If you created a metric attribution, specify whether to publish metrics for this import job to Amazon S3",
        },
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
      name: "create-event-tracker",
      description:
        "Creates an event tracker that you use when adding event data to a specified dataset group using the PutEvents API.  Only one event tracker can be associated with a dataset group. You will get an error if you call CreateEventTracker using the same dataset group as an existing event tracker.  When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the PutEvents operation. Amazon Personalize then appends the event data to the Item interactions dataset of the dataset group you specify in your event tracker.  The event tracker can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   DELETE PENDING > DELETE IN_PROGRESS   To get the status of the event tracker, call DescribeEventTracker.  The event tracker must be in the ACTIVE state before using the tracking ID.   Related APIs     ListEventTrackers     DescribeEventTracker     DeleteEventTracker",
      options: [
        {
          name: "--name",
          description: "The name for the event tracker",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group that receives the event data",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the event tracker",
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
      name: "create-filter",
      description:
        "Creates a recommendation filter. For more information, see Filtering recommendations and user segments",
      options: [
        {
          name: "--name",
          description: "The name of the filter to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The ARN of the dataset group that the filter will belong to",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-expression",
          description:
            "The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules. For information about filter expression structure and syntax, see Filter expressions",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the filter",
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
      name: "create-metric-attribution",
      description:
        "Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see Measuring impact of recommendations",
      options: [
        {
          name: "--name",
          description: "A name for the metric attribution",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the destination dataset group for the metric attribution",
          args: {
            name: "string",
          },
        },
        {
          name: "--metrics",
          description:
            "A list of metric attributes for the metric attribution. Each metric attribute specifies an event type to track and a function. Available functions are SUM() or SAMPLECOUNT(). For SUM() functions, provide the dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE)",
          args: {
            name: "list",
          },
        },
        {
          name: "--metrics-output-config",
          description:
            "The output configuration details for the metric attribution",
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
      name: "create-recommender",
      description:
        "Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a GetRecommendations request.   Minimum recommendation requests per second   A high minRecommendationRequestsPerSecond will increase your bill. We recommend starting with 1 for minRecommendationRequestsPerSecond (the default). Track your usage using Amazon CloudWatch metrics, and increase the minRecommendationRequestsPerSecond as necessary.  When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (minRecommendationRequestsPerSecond) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is 1. A recommendation request is a single GetRecommendations operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage.   If your requests per second increases beyond minRecommendationRequestsPerSecond, Amazon Personalize auto-scales the provisioned capacity up and down, but never below minRecommendationRequestsPerSecond. There's a short time delay while the capacity is increased that might cause loss of requests.  Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default minRecommendationRequestsPerSecond, track your usage using Amazon CloudWatch metrics, and then increase the minRecommendationRequestsPerSecond as necessary.   Status  A recommender can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE   DELETE PENDING > DELETE IN_PROGRESS   To get the recommender status, call DescribeRecommender.  Wait until the status of the recommender is ACTIVE before asking the recommender for recommendations.   Related APIs     ListRecommenders     DescribeRecommender     UpdateRecommender     DeleteRecommender",
      options: [
        {
          name: "--name",
          description: "The name of the recommender",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the destination domain dataset group for the recommender",
          args: {
            name: "string",
          },
        },
        {
          name: "--recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the recipe that the recommender will use. For a recommender, a recipe is a Domain dataset group use case. Only Domain dataset group use cases can be used to create a recommender. For information about use cases see Choosing recommender use cases",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommender-config",
          description: "The configuration details of the recommender",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the recommender",
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
      name: "create-schema",
      description:
        "Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format. Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call CreateDataset.  Related APIs     ListSchemas     DescribeSchema     DeleteSchema",
      options: [
        {
          name: "--name",
          description: "The name for the schema",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description: "A schema in Avro JSON format",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description:
            "The domain for the schema. If you are creating a schema for a dataset in a Domain dataset group, specify the domain you chose when you created the Domain dataset group",
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
      name: "create-solution",
      description:
        "By default, all new solutions use automatic training. With automatic training, you incur training costs while your solution is active. To avoid unnecessary costs, when you are finished you can update the solution to turn off automatic training. For information about training costs, see Amazon Personalize pricing.  Creates the configuration for training a model (creating a solution version). This configuration includes the recipe to use for model training and optional training configuration, such as columns to use in training and feature transformation parameters. For more information about configuring a solution, see Creating and configuring a solution.   By default, new solutions use automatic training to create solution versions every 7 days. You can change the training frequency. Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information, see Configuring automatic training.  To turn off automatic training, set performAutoTraining to false. If you turn off automatic training, you must manually create a solution version by calling the CreateSolutionVersion operation. After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion.  After training completes you can evaluate model accuracy by calling GetSolutionMetrics. When you are satisfied with the solution version, you deploy it using CreateCampaign. The campaign provides recommendations to a client through the GetRecommendations API.  Amazon Personalize doesn't support configuring the hpoObjective for solution hyperparameter optimization at this time.   Status  A solution can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   DELETE PENDING > DELETE IN_PROGRESS   To get the status of the solution, call DescribeSolution. If you use manual training, the status must be ACTIVE before you call CreateSolutionVersion.  Related APIs     UpdateSolution     ListSolutions     CreateSolutionVersion     DescribeSolution     DeleteSolution       ListSolutionVersions     DescribeSolutionVersion",
      options: [
        {
          name: "--name",
          description: "The name for the solution",
          args: {
            name: "string",
          },
        },
        {
          name: "--perform-hpo",
          description:
            "Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false",
        },
        {
          name: "--no-perform-hpo",
          description:
            "Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false",
        },
        {
          name: "--perform-auto-ml",
          description:
            "We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see Choosing a recipe.  Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn. When set to true, Amazon Personalize analyzes your training data and selects the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit recipeArn. Amazon Personalize determines the optimal recipe by running tests with different values for the hyperparameters. AutoML lengthens the training process as compared to selecting a specific recipe",
        },
        {
          name: "--no-perform-auto-ml",
          description:
            "We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see Choosing a recipe.  Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn. When set to true, Amazon Personalize analyzes your training data and selects the optimal USER_PERSONALIZATION recipe and hyperparameters. In this case, you must omit recipeArn. Amazon Personalize determines the optimal recipe by running tests with different values for the hyperparameters. AutoML lengthens the training process as compared to selecting a specific recipe",
        },
        {
          name: "--perform-auto-training",
          description:
            "Whether the solution uses automatic training to create new solution versions (trained models). The default is True and the solution automatically creates new solution versions every 7 days. You can change the training frequency by specifying a schedulingExpression in the AutoTrainingConfig as part of solution configuration. For more information about automatic training, see Configuring automatic training.  Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training.   After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion",
        },
        {
          name: "--no-perform-auto-training",
          description:
            "Whether the solution uses automatic training to create new solution versions (trained models). The default is True and the solution automatically creates new solution versions every 7 days. You can change the training frequency by specifying a schedulingExpression in the AutoTrainingConfig as part of solution configuration. For more information about automatic training, see Configuring automatic training.  Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training.   After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion",
        },
        {
          name: "--recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the recipe to use for model training. This is required when performAutoML is false. For information about different Amazon Personalize recipes and their ARNs, see Choosing a recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group that provides the training data",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-type",
          description:
            "When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-config",
          description:
            "The configuration properties for the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.  Amazon Personalize doesn't support configuring the hpoObjective at this time",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the solution",
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
      name: "create-solution-version",
      description:
        "Trains or retrains an active solution in a Custom dataset group. A solution is created using the CreateSolution operation and must be in the ACTIVE state before calling CreateSolutionVersion. A new version of the solution is created every time you call this operation.  Status  A solution version can be in one of the following states:   CREATE PENDING   CREATE IN_PROGRESS   ACTIVE   CREATE FAILED   CREATE STOPPING   CREATE STOPPED   To get the status of the version, call DescribeSolutionVersion. Wait until the status shows as ACTIVE before calling CreateCampaign. If the status shows as CREATE FAILED, the response includes a failureReason key, which describes why the job failed.  Related APIs     ListSolutionVersions     DescribeSolutionVersion     ListSolutions     CreateSolution     DescribeSolution     DeleteSolution",
      options: [
        {
          name: "--name",
          description: "The name of the solution version",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution containing the training configuration information",
          args: {
            name: "string",
          },
        },
        {
          name: "--training-mode",
          description:
            "The scope of training to be performed when creating the solution version. The default is FULL. This creates a completely new model based on the entirety of the training data from the datasets in your dataset group.  If you use User-Personalization, you can specify a training mode of UPDATE. This updates the model to consider new items for recommendations. It is not a full retraining. You should still complete a full retraining weekly. If you specify UPDATE, Amazon Personalize will stop automatic updates for the solution version. To resume updates, create a new solution with training mode set to FULL and deploy it in a campaign. For more information about automatic updates, see Automatic updates.  The UPDATE option can only be used when you already have an active solution version created from the input solution using the FULL option and the input solution was trained with the User-Personalization recipe or the legacy HRNN-Coldstart recipe",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the solution version",
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
      name: "delete-campaign",
      description:
        "Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a GetRecommendations request. For information on creating campaigns, see CreateCampaign",
      options: [
        {
          name: "--campaign-arn",
          description:
            "The Amazon Resource Name (ARN) of the campaign to delete",
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
      name: "delete-dataset",
      description:
        "Deletes a dataset. You can't delete a dataset if an associated DatasetImportJob or SolutionVersion is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see CreateDataset",
      options: [
        {
          name: "--dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset to delete",
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
      name: "delete-dataset-group",
      description:
        "Deletes a dataset group. Before you delete a dataset group, you must delete the following:   All associated event trackers.   All associated solutions.   All datasets in the dataset group",
      options: [
        {
          name: "--dataset-group-arn",
          description: "The ARN of the dataset group to delete",
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
      name: "delete-event-tracker",
      description:
        "Deletes the event tracker. Does not delete the dataset from the dataset group. For more information on event trackers, see CreateEventTracker",
      options: [
        {
          name: "--event-tracker-arn",
          description:
            "The Amazon Resource Name (ARN) of the event tracker to delete",
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
      name: "delete-filter",
      description: "Deletes a filter",
      options: [
        {
          name: "--filter-arn",
          description: "The ARN of the filter to delete",
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
      name: "delete-metric-attribution",
      description: "Deletes a metric attribution",
      options: [
        {
          name: "--metric-attribution-arn",
          description: "The metric attribution's Amazon Resource Name (ARN)",
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
      name: "delete-recommender",
      description:
        "Deactivates and removes a recommender. A deleted recommender can no longer be specified in a GetRecommendations request",
      options: [
        {
          name: "--recommender-arn",
          description:
            "The Amazon Resource Name (ARN) of the recommender to delete",
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
      name: "delete-schema",
      description:
        "Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see CreateSchema",
      options: [
        {
          name: "--schema-arn",
          description: "The Amazon Resource Name (ARN) of the schema to delete",
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
      name: "delete-solution",
      description:
        "Deletes all versions of a solution and the Solution object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call ListCampaigns and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated SolutionVersion is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see CreateSolution",
      options: [
        {
          name: "--solution-arn",
          description: "The ARN of the solution to delete",
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
      name: "describe-algorithm",
      description: "Describes the given algorithm",
      options: [
        {
          name: "--algorithm-arn",
          description:
            "The Amazon Resource Name (ARN) of the algorithm to describe",
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
      name: "describe-batch-inference-job",
      description:
        "Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations",
      options: [
        {
          name: "--batch-inference-job-arn",
          description: "The ARN of the batch inference job to describe",
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
      name: "describe-batch-segment-job",
      description:
        "Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments",
      options: [
        {
          name: "--batch-segment-job-arn",
          description: "The ARN of the batch segment job to describe",
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
      name: "describe-campaign",
      description:
        "Describes the given campaign, including its status. A campaign can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   DELETE PENDING > DELETE IN_PROGRESS   When the status is CREATE FAILED, the response includes the failureReason key, which describes why. For more information on campaigns, see CreateCampaign",
      options: [
        {
          name: "--campaign-arn",
          description: "The Amazon Resource Name (ARN) of the campaign",
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
      name: "describe-data-deletion-job",
      description:
        "Describes the data deletion job created by CreateDataDeletionJob, including the job status",
      options: [
        {
          name: "--data-deletion-job-arn",
          description:
            "The Amazon Resource Name (ARN) of the data deletion job",
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
      name: "describe-dataset",
      description:
        "Describes the given dataset. For more information on datasets, see CreateDataset",
      options: [
        {
          name: "--dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset to describe",
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
      name: "describe-dataset-export-job",
      description:
        "Describes the dataset export job created by CreateDatasetExportJob, including the export job status",
      options: [
        {
          name: "--dataset-export-job-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset export job to describe",
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
      name: "describe-dataset-group",
      description:
        "Describes the given dataset group. For more information on dataset groups, see CreateDatasetGroup",
      options: [
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group to describe",
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
      name: "describe-dataset-import-job",
      description:
        "Describes the dataset import job created by CreateDatasetImportJob, including the import job status",
      options: [
        {
          name: "--dataset-import-job-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset import job to describe",
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
      name: "describe-event-tracker",
      description:
        "Describes an event tracker. The response includes the trackingId and status of the event tracker. For more information on event trackers, see CreateEventTracker",
      options: [
        {
          name: "--event-tracker-arn",
          description:
            "The Amazon Resource Name (ARN) of the event tracker to describe",
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
      name: "describe-feature-transformation",
      description: "Describes the given feature transformation",
      options: [
        {
          name: "--feature-transformation-arn",
          description:
            "The Amazon Resource Name (ARN) of the feature transformation to describe",
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
      name: "describe-filter",
      description: "Describes a filter's properties",
      options: [
        {
          name: "--filter-arn",
          description: "The ARN of the filter to describe",
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
      name: "describe-metric-attribution",
      description: "Describes a metric attribution",
      options: [
        {
          name: "--metric-attribution-arn",
          description: "The metric attribution's Amazon Resource Name (ARN)",
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
      name: "describe-recipe",
      description:
        "Describes a recipe. A recipe contains three items:   An algorithm that trains a model.   Hyperparameters that govern the training.   Feature transformation information for modifying the input data before training.   Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the CreateSolution API. CreateSolution trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the GetRecommendations API",
      options: [
        {
          name: "--recipe-arn",
          description:
            "The Amazon Resource Name (ARN) of the recipe to describe",
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
      name: "describe-recommender",
      description:
        "Describes the given recommender, including its status. A recommender can be in one of the following states:   CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED   STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE   DELETE PENDING > DELETE IN_PROGRESS   When the status is CREATE FAILED, the response includes the failureReason key, which describes why. The modelMetrics key is null when the recommender is being created or deleted. For more information on recommenders, see CreateRecommender",
      options: [
        {
          name: "--recommender-arn",
          description:
            "The Amazon Resource Name (ARN) of the recommender to describe",
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
      name: "describe-schema",
      description:
        "Describes a schema. For more information on schemas, see CreateSchema",
      options: [
        {
          name: "--schema-arn",
          description:
            "The Amazon Resource Name (ARN) of the schema to retrieve",
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
      name: "describe-solution",
      description:
        "Describes a solution. For more information on solutions, see CreateSolution",
      options: [
        {
          name: "--solution-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution to describe",
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
      name: "describe-solution-version",
      description:
        "Describes a specific version of a solution. For more information on solutions, see CreateSolution",
      options: [
        {
          name: "--solution-version-arn",
          description: "The Amazon Resource Name (ARN) of the solution version",
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
      name: "get-solution-metrics",
      description: "Gets the metrics for the specified solution version",
      options: [
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution version for which to get metrics",
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
      name: "list-batch-inference-jobs",
      description:
        "Gets a list of the batch inference jobs that have been performed off of a solution version",
      options: [
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution version from which the batch inference jobs were created",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of batch inference job results to return in each page. The default value is 100",
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
      name: "list-batch-segment-jobs",
      description:
        "Gets a list of the batch segment jobs that have been performed off of a solution version that you specify",
      options: [
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution version that the batch segment jobs used to generate batch segments",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of batch segment job results to return in each page. The default value is 100",
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
      name: "list-campaigns",
      description:
        "Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see CreateCampaign",
      options: [
        {
          name: "--solution-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution to list the campaigns for. When a solution is not specified, all the campaigns associated with the account are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListCampaigns for getting the next set of campaigns (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of campaigns to return",
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
      name: "list-data-deletion-jobs",
      description:
        "Returns a list of data deletion jobs for a dataset group ordered by creation time, with the most recent first. When a dataset group is not specified, all the data deletion jobs associated with the account are listed. The response provides the properties for each job, including the Amazon Resource Name (ARN). For more information on data deletion jobs, see Deleting users",
      options: [
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group to list data deletion jobs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListDataDeletionJobs for getting the next set of jobs (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of data deletion jobs to return",
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
      name: "list-dataset-export-jobs",
      description:
        "Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see CreateDatasetExportJob. For more information on datasets, see CreateDataset",
      options: [
        {
          name: "--dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset to list the dataset export jobs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListDatasetExportJobs for getting the next set of dataset export jobs (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of dataset export jobs to return",
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
      name: "list-dataset-groups",
      description:
        "Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see CreateDatasetGroup",
      options: [
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListDatasetGroups for getting the next set of dataset groups (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of dataset groups to return",
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
      name: "list-dataset-import-jobs",
      description:
        "Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see CreateDatasetImportJob. For more information on datasets, see CreateDataset",
      options: [
        {
          name: "--dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset to list the dataset import jobs for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListDatasetImportJobs for getting the next set of dataset import jobs (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of dataset import jobs to return",
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
      name: "list-datasets",
      description:
        "Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see CreateDataset",
      options: [
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset group that contains the datasets to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListDatasets for getting the next set of dataset import jobs (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of datasets to return",
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
      name: "list-event-trackers",
      description:
        "Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see CreateEventTracker",
      options: [
        {
          name: "--dataset-group-arn",
          description: "The ARN of a dataset group used to filter the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListEventTrackers for getting the next set of event trackers (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of event trackers to return",
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
      name: "list-filters",
      description: "Lists all filters that belong to a given dataset group",
      options: [
        {
          name: "--dataset-group-arn",
          description: "The ARN of the dataset group that contains the filters",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListFilters for getting the next set of filters (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of filters to return",
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
      name: "list-metric-attribution-metrics",
      description: "Lists the metrics for the metric attribution",
      options: [
        {
          name: "--metric-attribution-arn",
          description:
            "The Amazon Resource Name (ARN) of the metric attribution to retrieve attributes for",
          args: {
            name: "string",
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
          name: "--max-results",
          description:
            "The maximum number of metrics to return in one page of results",
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
      name: "list-metric-attributions",
      description: "Lists metric attributions",
      options: [
        {
          name: "--dataset-group-arn",
          description:
            "The metric attributions' dataset group Amazon Resource Name (ARN)",
          args: {
            name: "string",
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
          name: "--max-results",
          description:
            "The maximum number of metric attributions to return in one page of results",
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
      name: "list-recipes",
      description:
        "Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN)",
      options: [
        {
          name: "--recipe-provider",
          description: "The default is SERVICE",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListRecipes for getting the next set of recipes (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of recipes to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--domain",
          description:
            "Filters returned recipes by domain for a Domain dataset group. Only recipes (Domain dataset group use cases) for this domain are included in the response. If you don't specify a domain, all recipes are returned",
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
      name: "list-recommenders",
      description:
        "Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see CreateRecommender",
      options: [
        {
          name: "--dataset-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the Domain dataset group to list the recommenders for. When a Domain dataset group is not specified, all the recommenders associated with the account are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListRecommenders for getting the next set of recommenders (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of recommenders to return",
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
      name: "list-schemas",
      description:
        "Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see CreateSchema",
      options: [
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListSchemas for getting the next set of schemas (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of schemas to return",
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
      name: "list-solution-versions",
      description:
        "Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN)",
      options: [
        {
          name: "--solution-arn",
          description: "The Amazon Resource Name (ARN) of the solution",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListSolutionVersions for getting the next set of solution versions (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of solution versions to return",
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
      name: "list-solutions",
      description:
        "Returns a list of solutions in a given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see CreateSolution",
      options: [
        {
          name: "--dataset-group-arn",
          description: "The Amazon Resource Name (ARN) of the dataset group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token returned from the previous call to ListSolutions for getting the next set of solutions (if they exist)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of solutions to return",
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
      description: "Get a list of tags attached to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource's Amazon Resource Name (ARN)",
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
      name: "start-recommender",
      description:
        "Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender",
      options: [
        {
          name: "--recommender-arn",
          description:
            "The Amazon Resource Name (ARN) of the recommender to start",
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
      name: "stop-recommender",
      description:
        "Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender",
      options: [
        {
          name: "--recommender-arn",
          description:
            "The Amazon Resource Name (ARN) of the recommender to stop",
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
      name: "stop-solution-version-creation",
      description:
        "Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.  Depending on the current state of the solution version, the solution version state changes as follows:   CREATE_PENDING > CREATE_STOPPED or   CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED   You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped",
      options: [
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution version you want to stop creating",
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
      name: "tag-resource",
      description: "Add a list of tags to a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource's Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to apply to the resource. For more information see Tagging Amazon Personalize resources",
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
        "Removes the specified tags that are attached to a resource. For more information, see Removing tags from Amazon Personalize resources",
      options: [
        {
          name: "--resource-arn",
          description: "The resource's Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed",
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
      name: "update-campaign",
      description:
        "Updates a campaign to deploy a retrained solution version with an existing campaign, change your campaign's minProvisionedTPS, or modify your campaign's configuration. For example, you can set enableMetadataWithRecommendations to true for an existing campaign.  To update a campaign to start automatically using the latest solution version, specify the following:   For the SolutionVersionArn parameter, specify the Amazon Resource Name (ARN) of your solution in SolutionArn/$LATEST format.     In the campaignConfig, set syncWithLatestSolutionVersion to true.    To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the DescribeCampaign operation.  You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is Active.   For more information about updating a campaign, including code samples, see Updating a campaign. For more information about campaigns, see Creating a campaign",
      options: [
        {
          name: "--campaign-arn",
          description: "The Amazon Resource Name (ARN) of the campaign",
          args: {
            name: "string",
          },
        },
        {
          name: "--solution-version-arn",
          description:
            "The Amazon Resource Name (ARN) of a new model to deploy. To specify the latest solution version of your solution, specify the ARN of your solution in SolutionArn/$LATEST format. You must use this format if you set syncWithLatestSolutionVersion to True in the CampaignConfig.   To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version.   For more information about automatic campaign updates, see Enabling automatic campaign updates",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-provisioned-tps",
          description:
            "Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support. A high minProvisionedTPS will increase your bill. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary",
          args: {
            name: "integer",
          },
        },
        {
          name: "--campaign-config",
          description: "The configuration details of a campaign",
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
      name: "update-dataset",
      description:
        "Update a dataset to replace its schema with a new or existing one. For more information, see Replacing a dataset's schema",
      options: [
        {
          name: "--dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-arn",
          description:
            "The Amazon Resource Name (ARN) of the new schema you want use",
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
      name: "update-metric-attribution",
      description: "Updates a metric attribution",
      options: [
        {
          name: "--add-metrics",
          description: "Add new metric attributes to the metric attribution",
          args: {
            name: "list",
          },
        },
        {
          name: "--remove-metrics",
          description: "Remove metric attributes from the metric attribution",
          args: {
            name: "list",
          },
        },
        {
          name: "--metrics-output-config",
          description: "An output config for the metric attribution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric-attribution-arn",
          description:
            "The Amazon Resource Name (ARN) for the metric attribution to update",
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
      name: "update-recommender",
      description:
        "Updates the recommender to modify the recommender configuration. If you update the recommender to modify the columns used in training, Amazon Personalize automatically starts a full retraining of the models backing your recommender. While the update completes, you can still get recommendations from the recommender. The recommender uses the previous configuration until the update completes. To track the status of this update, use the latestRecommenderUpdate returned in the DescribeRecommender operation",
      options: [
        {
          name: "--recommender-arn",
          description:
            "The Amazon Resource Name (ARN) of the recommender to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommender-config",
          description: "The configuration details of the recommender",
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
      name: "update-solution",
      description:
        "Updates an Amazon Personalize solution to use a different automatic training configuration. When you update a solution, you can change whether the solution uses automatic training, and you can change the training frequency. For more information about updating a solution, see Updating a solution. A solution update can be in one of the following states: CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED To get the status of a solution update, call the DescribeSolution API operation and find the status in the latestSolutionUpdate",
      options: [
        {
          name: "--solution-arn",
          description:
            "The Amazon Resource Name (ARN) of the solution to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--perform-auto-training",
          description:
            "Whether the solution uses automatic training to create new solution versions (trained models). You can change the training frequency by specifying a schedulingExpression in the AutoTrainingConfig as part of solution configuration.   If you turn on automatic training, the first automatic training starts within one hour after the solution update completes. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information about automatic training, see Configuring automatic training.   After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion",
        },
        {
          name: "--no-perform-auto-training",
          description:
            "Whether the solution uses automatic training to create new solution versions (trained models). You can change the training frequency by specifying a schedulingExpression in the AutoTrainingConfig as part of solution configuration.   If you turn on automatic training, the first automatic training starts within one hour after the solution update completes. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information about automatic training, see Configuring automatic training.   After training starts, you can get the solution version's Amazon Resource Name (ARN) with the ListSolutionVersions API operation. To get its status, use the DescribeSolutionVersion",
        },
        {
          name: "--solution-update-config",
          description: "The new configuration details of the solution",
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
