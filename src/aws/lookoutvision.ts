const completionSpec: Fig.Spec = {
  name: "lookoutvision",
  description:
    "This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions, data types, common parameters, and common errors. Amazon Lookout for Vision enables you to find visual defects in industrial products, accurately and at scale. It uses computer vision to identify missing components in an industrial product, damage to vehicles or structures, irregularities in production lines, and even minuscule defects in silicon wafers \u2014 or any other physical item where quality is important such as a missing capacitor on printed circuit boards",
  subcommands: [
    {
      name: "create-dataset",
      description:
        "Creates a new dataset in an Amazon Lookout for Vision project. CreateDataset can create a training or a test dataset from a valid dataset source (DatasetSource). If you want a single dataset project, specify train for the value of DatasetType. To have a project with separate training and test datasets, call CreateDataset twice. On the first call, specify train for the value of DatasetType. On the second call, specify test for the value of DatasetType.  This operation requires permissions to perform the lookoutvision:CreateDataset operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project in which you want to create a dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The type of the dataset. Specify train for a training dataset. Specify test for a test dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-source",
          description:
            "The location of the manifest file that Amazon Lookout for Vision uses to create the dataset. If you don't specify DatasetSource, an empty dataset is created and the operation synchronously returns. Later, you can add JSON Lines by calling UpdateDatasetEntries.  If you specify a value for DataSource, the manifest at the S3 location is validated and used to create the dataset. The call to CreateDataset is asynchronous and might take a while to complete. To find out the current status, Check the value of Status returned in a call to DescribeDataset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to CreateDataset completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from CreateDataset. In this case, safely retry your call to CreateDataset by using the same ClientToken parameter value. If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple dataset creation requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to CreateDataset. An idempotency token is active for 8 hours",
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
      name: "create-model",
      description:
        "Creates a new version of a model within an an Amazon Lookout for Vision project. CreateModel is an asynchronous operation in which Amazon Lookout for Vision trains, tests, and evaluates a new version of a model.  To get the current status, check the Status field returned in the response from DescribeModel. If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset to create a training and a test dataset. If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test the model.  After training completes, the evaluation metrics are stored at the location specified in OutputConfig.  This operation requires permissions to perform the lookoutvision:CreateModel operation. If you want to tag your model, you also require permission to the lookoutvision:TagResource operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project in which you want to create a model version",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the version of the model",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to CreateModel completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from CreateModel. In this case, safely retry your call to CreateModel by using the same ClientToken parameter value.  If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from starting multiple training jobs. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to CreateModel. An idempotency token is active for 8 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-config",
          description:
            "The location where Amazon Lookout for Vision saves the training results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The identifier for your AWS KMS key. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A set of tags (key-value pairs) that you want to attach to the model",
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
      description:
        "Creates an empty Amazon Lookout for Vision project. After you create the project, add a dataset by calling CreateDataset. This operation requires permissions to perform the lookoutvision:CreateProject operation",
      options: [
        {
          name: "--project-name",
          description: "The name for the project",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to CreateProject completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from CreateProject. In this case, safely retry your call to CreateProject by using the same ClientToken parameter value.  If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple project creation requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to CreateProject. An idempotency token is active for 8 hours",
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
        "Deletes an existing Amazon Lookout for Vision dataset.  If your the project has a single dataset, you must create a new dataset before you can create a model. If you project has a training dataset and a test dataset consider the following.    If you delete the test dataset, your project reverts to a single dataset project. If you then train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.   If you delete the training dataset, you must create a training dataset before you can create a model.   This operation requires permissions to perform the lookoutvision:DeleteDataset operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the dataset that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The type of the dataset to delete. Specify train to delete the training dataset. Specify test to delete the test dataset. To delete the dataset in a single dataset project, specify train",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to DeleteDataset completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from DeleteDataset. In this case, safely retry your call to DeleteDataset by using the same ClientToken parameter value.  If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple deletetion requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to DeleteDataset. An idempotency token is active for 8 hours",
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
      name: "delete-model",
      description:
        "Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model, use the StopModel operation. It might take a few seconds to delete a model. To determine if a model has been deleted, call ListModels and check if the version of the model (ModelVersion) is in the Models array.   This operation requires permissions to perform the lookoutvision:DeleteModel operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the model that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the model that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to DeleteModel completes only once. You choose the value to pass. For example, an issue might prevent you from getting a response from DeleteModel. In this case, safely retry your call to DeleteModel by using the same ClientToken parameter value. If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple model deletion requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to DeleteModel. An idempotency token is active for 8 hours",
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
        "Deletes an Amazon Lookout for Vision project. To delete a project, you must first delete each version of the model associated with the project. To delete a model use the DeleteModel operation. You also have to delete the dataset(s) associated with the model. For more information, see DeleteDataset. The images referenced by the training and test datasets aren't deleted.  This operation requires permissions to perform the lookoutvision:DeleteProject operation",
      options: [
        {
          name: "--project-name",
          description: "The name of the project to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to DeleteProject completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from DeleteProject. In this case, safely retry your call to DeleteProject by using the same ClientToken parameter value.  If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple project deletion requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to DeleteProject. An idempotency token is active for 8 hours",
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
        "Describe an Amazon Lookout for Vision dataset. This operation requires permissions to perform the lookoutvision:DescribeDataset operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the dataset that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The type of the dataset to describe. Specify train to describe the training dataset. Specify test to describe the test dataset. If you have a single dataset project, specify train",
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
      name: "describe-model",
      description:
        "Describes a version of an Amazon Lookout for Vision model. This operation requires permissions to perform the lookoutvision:DescribeModel operation",
      options: [
        {
          name: "--project-name",
          description:
            "The project that contains the version of a model that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the model that you want to describe",
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
      name: "describe-model-packaging-job",
      description:
        "Describes an Amazon Lookout for Vision model packaging job.  This operation requires permissions to perform the lookoutvision:DescribeModelPackagingJob operation. For more information, see Using your Amazon Lookout for Vision model on an edge device in the Amazon Lookout for Vision Developer Guide",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the model packaging job that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description: "The job name for the model packaging job",
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
      name: "describe-project",
      description:
        "Describes an Amazon Lookout for Vision project. This operation requires permissions to perform the lookoutvision:DescribeProject operation",
      options: [
        {
          name: "--project-name",
          description: "The name of the project that you want to describe",
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
      name: "detect-anomalies",
      description:
        "Detects anomalies in an image that you supply.  The response from DetectAnomalies includes a boolean prediction that the image contains one or more anomalies and a confidence value for the prediction. If the model is an image segmentation model, the response also includes segmentation information for each type of anomaly found in the image.  Before calling DetectAnomalies, you must first start your model with the StartModel operation. You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your model uses. If you are not using a model, use the StopModel operation to stop your model.   For more information, see Detecting anomalies in an image in the Amazon Lookout for Vision developer guide. This operation requires permissions to perform the lookoutvision:DetectAnomalies operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the model version that you want to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the model that you want to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description: "The unencrypted image bytes that you want to analyze",
          args: {
            name: "blob",
          },
        },
        {
          name: "--content-type",
          description:
            "The type of the image passed in Body. Valid values are image/png (PNG format images) and image/jpeg (JPG format images)",
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
      name: "list-dataset-entries",
      description:
        "Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly information for a single image, including the image location and the assigned label. This operation requires permissions to perform the lookoutvision:ListDatasetEntries operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the dataset that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The type of the dataset that you want to list. Specify train to list the training dataset. Specify test to list the test dataset. If you have a single dataset project, specify train",
          args: {
            name: "string",
          },
        },
        {
          name: "--labeled",
          description:
            "Specify true to include labeled entries, otherwise specify false. If you don't specify a value, Lookout for Vision returns all entries",
        },
        {
          name: "--no-labeled",
          description:
            "Specify true to include labeled entries, otherwise specify false. If you don't specify a value, Lookout for Vision returns all entries",
        },
        {
          name: "--anomaly-class",
          description:
            "Specify normal to include only normal images. Specify anomaly to only include anomalous entries. If you don't specify a value, Amazon Lookout for Vision returns normal and anomalous images",
          args: {
            name: "string",
          },
        },
        {
          name: "--before-creation-date",
          description:
            "Only includes entries before the specified date in the response. For example, 2020-06-23T00:00:00",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--after-creation-date",
          description:
            "Only includes entries after the specified date in the response. For example, 2020-06-23T00:00:00",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of dataset entries",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--source-ref-contains",
          description:
            'Perform a "contains" search on the values of the source-ref key within the dataset. For example a value of "IMG_17" returns all JSON Lines where the source-ref key value matches *IMG_17*',
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
      name: "list-model-packaging-jobs",
      description:
        "Lists the model packaging jobs created for an Amazon Lookout for Vision project.  This operation requires permissions to perform the lookoutvision:ListModelPackagingJobs operation.  For more information, see Using your Amazon Lookout for Vision model on an edge device in the Amazon Lookout for Vision Developer Guide",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project for which you want to list the model packaging jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100",
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
      name: "list-models",
      description:
        "Lists the versions of a model in an Amazon Lookout for Vision project. The ListModels operation is eventually consistent. Recent calls to CreateModel might take a while to appear in the response from ListProjects. This operation requires permissions to perform the lookoutvision:ListModels operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the model versions that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of models",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100",
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
      name: "list-projects",
      description:
        "Lists the Amazon Lookout for Vision projects in your AWS account that are in the AWS Region in which you call ListProjects. The ListProjects operation is eventually consistent. Recent calls to CreateProject and DeleteProject might take a while to appear in the response from ListProjects. This operation requires permissions to perform the lookoutvision:ListProjects operation",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of projects",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100",
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
      description:
        "Returns a list of tags attached to the specified Amazon Lookout for Vision model. This operation requires permissions to perform the lookoutvision:ListTagsForResource operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the model for which you want to list tags",
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
      name: "start-model",
      description:
        "Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while to complete. To check the current state of the model, use DescribeModel. A model is ready to use when its status is HOSTED. Once the model is running, you can detect custom labels in new images by calling DetectAnomalies.  You are charged for the amount of time that the model is running. To stop a running model, call StopModel.  This operation requires permissions to perform the lookoutvision:StartModel operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the model that you want to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the model that you want to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-inference-units",
          description:
            "The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to StartModel completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from StartModel. In this case, safely retry your call to StartModel by using the same ClientToken parameter value.  If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple start requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to StartModel. An idempotency token is active for 8 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-inference-units",
          description:
            "The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Lookout for Vision doesn't auto-scale the model",
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
      name: "start-model-packaging-job",
      description:
        "Starts an Amazon Lookout for Vision model packaging job. A model packaging job creates an AWS IoT Greengrass component for a Lookout for Vision model. You can use the component to deploy your model to an edge device managed by Greengrass.  Use the DescribeModelPackagingJob API to determine the current status of the job. The model packaging job is complete if the value of Status is SUCCEEDED. To deploy the component to the target device, use the component name and component version with the AWS IoT Greengrass CreateDeployment API. This operation requires the following permissions:    lookoutvision:StartModelPackagingJob     s3:PutObject     s3:GetBucketLocation     kms:GenerateDataKey     greengrass:CreateComponentVersion     greengrass:DescribeComponent    (Optional) greengrass:TagResource. Only required if you want to tag the component.   For more information, see Using your Amazon Lookout for Vision model on an edge device in the Amazon Lookout for Vision Developer Guide",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project which contains the version of the model that you want to package",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description:
            "The version of the model within the project that you want to package",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-name",
          description:
            "A name for the model packaging job. If you don't supply a value, the service creates a job name for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description: "The configuration for the model packaging job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description for the model packaging job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to StartModelPackagingJob completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from StartModelPackagingJob. In this case, safely retry your call to StartModelPackagingJob by using the same ClientToken parameter value. If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple dataset creation requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to StartModelPackagingJob. An idempotency token is active for 8 hours",
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
      name: "stop-model",
      description:
        "Stops the hosting of a running model. The operation might take a while to complete. To check the current status, call DescribeModel.  After the model hosting stops, the Status of the model is TRAINED. This operation requires permissions to perform the lookoutvision:StopModel operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the model that you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the model that you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to StopModel completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from StopModel. In this case, safely retry your call to StopModel by using the same ClientToken parameter value. If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple stop requests. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to StopModel. An idempotency token is active for 8 hours",
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
      description:
        "Adds one or more key-value tags to an Amazon Lookout for Vision model. For more information, see Tagging a model in the Amazon Lookout for Vision Developer Guide.  This operation requires permissions to perform the lookoutvision:TagResource operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the model to assign the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The key-value tags to assign to the model",
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
        "Removes one or more tags from an Amazon Lookout for Vision model. For more information, see Tagging a model in the Amazon Lookout for Vision Developer Guide.  This operation requires permissions to perform the lookoutvision:UntagResource operation",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the model from which you want to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of the keys of the tags that you want to remove",
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
      name: "update-dataset-entries",
      description:
        "Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image used for training or testing an Amazon Lookout for Vision model. To update an existing JSON Line, use the source-ref field to identify the JSON Line. The JSON line that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset.  For more information, see Defining JSON lines for anomaly classification in the Amazon Lookout for Vision Developer Guide.   The images you reference in the source-ref field of a JSON line, must be in the same S3 bucket as the existing images in the dataset.   Updating a dataset might take a while to complete. To check the current status, call DescribeDataset and check the Status field in the response. This operation requires permissions to perform the lookoutvision:UpdateDatasetEntries operation",
      options: [
        {
          name: "--project-name",
          description:
            "The name of the project that contains the dataset that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-type",
          description:
            "The type of the dataset that you want to update. Specify train to update the training dataset. Specify test to update the test dataset. If you have a single dataset project, specify train",
          args: {
            name: "string",
          },
        },
        {
          name: "--changes",
          description: "The entries to add to the dataset",
          args: {
            name: "blob",
          },
        },
        {
          name: "--client-token",
          description:
            "ClientToken is an idempotency token that ensures a call to UpdateDatasetEntries completes only once. You choose the value to pass. For example, An issue might prevent you from getting a response from UpdateDatasetEntries. In this case, safely retry your call to UpdateDatasetEntries by using the same ClientToken parameter value. If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you. This prevents retries after a network error from making multiple updates with the same dataset entries. You'll need to provide your own value for other use cases.  An error occurs if the other input parameters are not the same as in the first request. Using a different value for ClientToken is considered a new call to UpdateDatasetEntries. An idempotency token is active for 8 hours",
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
