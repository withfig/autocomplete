const completionSpec: Fig.Spec = {
  name: "firehose",
  description:
    "Amazon Data Firehose  Amazon Data Firehose was previously known as Amazon Kinesis Data Firehose.  Amazon Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch Service, Amazon Redshift, Splunk, and various other supported destinations",
  subcommands: [
    {
      name: "create-delivery-stream",
      description:
        "Creates a Firehose stream. By default, you can create up to 50 Firehose streams per Amazon Web Services Region. This is an asynchronous operation that immediately returns. The initial status of the Firehose stream is CREATING. After the Firehose stream is created, its status is ACTIVE and it now accepts data. If the Firehose stream creation fails, the status transitions to CREATING_FAILED. Attempts to send data to a delivery stream that is not in the ACTIVE state cause an exception. To check the state of a Firehose stream, use DescribeDeliveryStream. If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. A Firehose stream can be configured to receive records directly from providers using PutRecord or PutRecordBatch, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the DeliveryStreamType parameter to KinesisStreamAsSource, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the KinesisStreamSourceConfiguration parameter. To create a Firehose stream with server-side encryption (SSE) enabled, include DeliveryStreamEncryptionConfigurationInput in your request. This is optional. You can also invoke StartDeliveryStreamEncryption to turn on SSE for an existing Firehose stream that doesn't have SSE enabled. A Firehose stream is configured with a single destination, such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service, Amazon OpenSearch Serverless, Splunk, and any custom HTTP endpoint or HTTP endpoints owned by or supported by third-party service providers, including Datadog, Dynatrace, LogicMonitor, MongoDB, New Relic, and Sumo Logic. You must specify only one of the following destination configuration parameters: ExtendedS3DestinationConfiguration, S3DestinationConfiguration, ElasticsearchDestinationConfiguration, RedshiftDestinationConfiguration, or SplunkDestinationConfiguration. When you specify S3DestinationConfiguration, you can also provide the following optional values: BufferingHints, EncryptionConfiguration, and CompressionFormat. By default, if no BufferingHints value is provided, Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. BufferingHints is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3. A few notes about Amazon Redshift as a destination:   An Amazon Redshift destination requires an S3 bucket as intermediate location. Firehose first delivers data to Amazon S3 and then uses COPY syntax to load data into an Amazon Redshift table. This is specified in the RedshiftDestinationConfiguration.S3Configuration parameter.   The compression formats SNAPPY or ZIP cannot be specified in RedshiftDestinationConfiguration.S3Configuration because the Amazon Redshift COPY operation that reads from the S3 bucket doesn't support these compression formats.   We strongly recommend that you use the user name and password you provide exclusively with Firehose, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions.   Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see Grant Firehose Access to an Amazon S3 Destination in the Amazon Firehose Developer Guide",
      options: [
        {
          name: "--delivery-stream-name",
          description:
            "The name of the Firehose stream. This name must be unique per Amazon Web Services account in the same Amazon Web Services Region. If the Firehose streams are in different accounts or different Regions, you can have multiple Firehose streams with the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-stream-type",
          description:
            "The Firehose stream type. This parameter can be one of the following values:    DirectPut: Provider applications access the Firehose stream directly.    KinesisStreamAsSource: The Firehose stream uses a Kinesis data stream as a source",
          args: {
            name: "string",
          },
        },
        {
          name: "--kinesis-stream-source-configuration",
          description:
            "When a Kinesis data stream is used as the source for the Firehose stream, a KinesisStreamSourceConfiguration containing the Kinesis data stream Amazon Resource Name (ARN) and the role ARN for the source stream",
          args: {
            name: "structure",
          },
        },
        {
          name: "--delivery-stream-encryption-configuration-input",
          description:
            "Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-destination-configuration",
          description:
            "[Deprecated] The destination in Amazon S3. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--extended-s3-destination-configuration",
          description:
            "The destination in Amazon S3. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--redshift-destination-configuration",
          description:
            "The destination in Amazon Redshift. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--elasticsearch-destination-configuration",
          description:
            "The destination in Amazon ES. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--amazonopensearchservice-destination-configuration",
          description:
            "The destination in Amazon OpenSearch Service. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--splunk-destination-configuration",
          description:
            "The destination in Splunk. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--http-endpoint-destination-configuration",
          description:
            "Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A set of tags to assign to the Firehose stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide. You can specify up to 50 tags when creating a Firehose stream. If you specify tags in the CreateDeliveryStream action, Amazon Data Firehose performs an additional authorization on the firehose:TagDeliveryStream action to verify if users have permissions to create tags. If you do not provide this permission, requests to create new Firehose Firehose streams with IAM resource tags will fail with an AccessDeniedException such as following.  AccessDeniedException  User: arn:aws:sts::x:assumed-role/x/x is not authorized to perform: firehose:TagDeliveryStream on resource: arn:aws:firehose:us-east-1:x:deliverystream/x with an explicit deny in an identity-based policy. For an example IAM policy, see Tag example",
          args: {
            name: "list",
          },
        },
        {
          name: "--amazon-open-search-serverless-destination-configuration",
          description:
            "The destination in the Serverless offering for Amazon OpenSearch Service. You can specify only one destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--msk-source-configuration",
          description:
            "The configuration for the Amazon MSK cluster to be used as the source for a delivery stream",
          args: {
            name: "structure",
          },
        },
        {
          name: "--snowflake-destination-configuration",
          description: "Configure Snowflake destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iceberg-destination-configuration",
          description: "Configure Apache Iceberg Tables destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--database-source-configuration",
          description:
            "Amazon Data Firehose is in preview release and is subject to change",
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
      name: "delete-delivery-stream",
      description:
        "Deletes a Firehose stream and its data. You can delete a Firehose stream only if it is in one of the following states: ACTIVE, DELETING, CREATING_FAILED, or DELETING_FAILED. You can't delete a Firehose stream that is in the CREATING state. To check the state of a Firehose stream, use DescribeDeliveryStream.  DeleteDeliveryStream is an asynchronous API. When an API request to DeleteDeliveryStream succeeds, the Firehose stream is marked for deletion, and it goes into the DELETING state.While the Firehose stream is in the DELETING state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a Firehose stream. Removal of a Firehose stream that is in the DELETING state is a low priority operation for the service. A stream may remain in the DELETING state for several minutes. Therefore, as a best practice, applications should not wait for streams in the DELETING state to be removed",
      options: [
        {
          name: "--delivery-stream-name",
          description: "The name of the Firehose stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-force-delete",
          description:
            "Set this to true if you want to delete the Firehose stream even if Firehose is unable to retire the grant for the CMK. Firehose might be unable to retire the grant due to a customer error, such as when the CMK or the grant are in an invalid state. If you force deletion, you can then use the RevokeGrant operation to revoke the grant you gave to Firehose. If a failure to retire the grant happens due to an Amazon Web Services KMS issue, Firehose keeps retrying the delete operation. The default value is false",
        },
        {
          name: "--no-allow-force-delete",
          description:
            "Set this to true if you want to delete the Firehose stream even if Firehose is unable to retire the grant for the CMK. Firehose might be unable to retire the grant due to a customer error, such as when the CMK or the grant are in an invalid state. If you force deletion, you can then use the RevokeGrant operation to revoke the grant you gave to Firehose. If a failure to retire the grant happens due to an Amazon Web Services KMS issue, Firehose keeps retrying the delete operation. The default value is false",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-delivery-stream",
      description:
        "Describes the specified Firehose stream and its status. For example, after your Firehose stream is created, call DescribeDeliveryStream to see whether the Firehose stream is ACTIVE and therefore ready for data to be sent to it.  If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. If the status is DELETING_FAILED, you can force deletion by invoking DeleteDeliveryStream again but with DeleteDeliveryStreamInput$AllowForceDelete set to true",
      options: [
        {
          name: "--delivery-stream-name",
          description: "The name of the Firehose stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The limit on the number of destinations to return. You can have one destination per Firehose stream",
          args: {
            name: "integer",
          },
        },
        {
          name: "--exclusive-start-destination-id",
          description:
            "The ID of the destination to start returning the destination information. Firehose supports one destination per Firehose stream",
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
      name: "list-delivery-streams",
      description:
        "Lists your Firehose streams in alphabetical order of their names. The number of Firehose streams might be too large to return using a single call to ListDeliveryStreams. You can limit the number of Firehose streams returned, using the Limit parameter. To determine whether there are more delivery streams to list, check the value of HasMoreDeliveryStreams in the output. If there are more Firehose streams to list, you can request them by calling this operation again and setting the ExclusiveStartDeliveryStreamName parameter to the name of the last Firehose stream returned in the last call",
      options: [
        {
          name: "--limit",
          description:
            "The maximum number of Firehose streams to list. The default value is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--delivery-stream-type",
          description:
            "The Firehose stream type. This can be one of the following values:    DirectPut: Provider applications access the Firehose stream directly.    KinesisStreamAsSource: The Firehose stream uses a Kinesis data stream as a source.   This parameter is optional. If this parameter is omitted, Firehose streams of all types are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclusive-start-delivery-stream-name",
          description:
            "The list of Firehose streams returned by this call to ListDeliveryStreams will start with the Firehose stream whose name comes alphabetically immediately after the name you specify in ExclusiveStartDeliveryStreamName",
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
      name: "list-tags-for-delivery-stream",
      description:
        "Lists the tags for the specified Firehose stream. This operation has a limit of five transactions per second per account",
      options: [
        {
          name: "--delivery-stream-name",
          description:
            "The name of the Firehose stream whose tags you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclusive-start-tag-key",
          description:
            "The key to use as the starting point for the list of tags. If you set this parameter, ListTagsForDeliveryStream gets all tags that occur after ExclusiveStartTagKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The number of tags to return. If this number is less than the total number of tags associated with the Firehose stream, HasMoreTags is set to true in the response. To list additional tags, set ExclusiveStartTagKey to the last key in the response",
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
      name: "put-record",
      description:
        "Writes a single data record into an Firehose stream. To write multiple data records into a Firehose stream, use PutRecordBatch. Applications using these operations are referred to as producers. By default, each Firehose stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use PutRecord and PutRecordBatch, the limits are an aggregate across these two operations for each Firehose stream. For more information about limits and how to request an increase, see Amazon Firehose Limits.  Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics. You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on. For multi record de-aggregation, you can not put more than 500 records even if the data blob length is less than 1000 KiB. If you include more than 500 records, the request succeeds but the record de-aggregation doesn't work as expected and transformation lambda is invoked with the complete base64 encoded data blob instead of de-aggregated base64 decoded records. Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (\\n) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination. The PutRecord operation returns a RecordId, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation. If the PutRecord operation throws a ServiceUnavailableException, the API is automatically reinvoked (retried) 3 times. If the exception persists, it is possible that the throughput limits have been exceeded for the Firehose stream.  Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can result in data duplicates. For larger data assets, allow for a longer time out before retrying Put API operations. Data records sent to Firehose are stored for 24 hours from the time they are added to a Firehose stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.  Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding",
      options: [
        {
          name: "--delivery-stream-name",
          description: "The name of the Firehose stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--record",
          description: "The record",
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
      name: "put-record-batch",
      description:
        "Writes multiple data records into a Firehose stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a Firehose stream, use PutRecord. Applications using these operations are referred to as producers. Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics. For information about service quota, see Amazon Firehose Quota. Each PutRecordBatch request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed. You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on. For multi record de-aggregation, you can not put more than 500 records even if the data blob length is less than 1000 KiB. If you include more than 500 records, the request succeeds but the record de-aggregation doesn't work as expected and transformation lambda is invoked with the complete base64 encoded data blob instead of de-aggregated base64 decoded records. Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (\\n) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination. The PutRecordBatch response includes a count of failed records, FailedPutCount, and an array of responses, RequestResponses. Even if the PutRecordBatch call succeeds, the value of FailedPutCount may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the RequestResponses array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. RequestResponses includes both successfully and unsuccessfully processed records. Firehose tries to process all records in each PutRecordBatch request. A single record failure does not stop the processing of subsequent records.  A successfully processed record includes a RecordId value, which is unique for the record. An unsuccessfully processed record includes ErrorCode and ErrorMessage values. ErrorCode reflects the type of error, and is one of the following values: ServiceUnavailableException or InternalFailure. ErrorMessage provides more detailed information about the error. If there is an internal server error or a timeout, the write might have completed or it might have failed. If FailedPutCount is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination. If PutRecordBatch throws ServiceUnavailableException, the API is automatically reinvoked (retried) 3 times. If the exception persists, it is possible that the throughput limits have been exceeded for the Firehose stream. Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can result in data duplicates. For larger data assets, allow for a longer time out before retrying Put API operations. Data records sent to Firehose are stored for 24 hours from the time they are added to a Firehose stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.  Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding",
      options: [
        {
          name: "--delivery-stream-name",
          description: "The name of the Firehose stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--records",
          description: "One or more records",
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
      name: "start-delivery-stream-encryption",
      description:
        "Enables server-side encryption (SSE) for the Firehose stream.  This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to ENABLING, and then to ENABLED. The encryption status of a Firehose stream is the Status property in DeliveryStreamEncryptionConfiguration. If the operation fails, the encryption status changes to ENABLING_FAILED. You can continue to read and write data to your Firehose stream while the encryption status is ENABLING, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to ENABLED before all records written to the Firehose stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively. To check the encryption status of a Firehose stream, use DescribeDeliveryStream. Even if encryption is currently enabled for a Firehose stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type CUSTOMER_MANAGED_CMK, Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type CUSTOMER_MANAGED_CMK, Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant. For the KMS grant creation to be successful, the Firehose API operations StartDeliveryStreamEncryption and CreateDeliveryStream should not be called with session credentials that are more than 6 hours old. If a Firehose stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get ENABLING_FAILED, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK. If the encryption status of your Firehose stream is ENABLING_FAILED, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Firehose to invoke KMS encrypt and decrypt operations. You can enable SSE for a Firehose stream only if it's a Firehose stream that uses DirectPut as its source.  The StartDeliveryStreamEncryption and StopDeliveryStreamEncryption operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call StartDeliveryStreamEncryption 13 times and StopDeliveryStreamEncryption 12 times for the same Firehose stream in a 24-hour period",
      options: [
        {
          name: "--delivery-stream-name",
          description:
            "The name of the Firehose stream for which you want to enable server-side encryption (SSE)",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-stream-encryption-configuration-input",
          description:
            "Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE)",
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
      name: "stop-delivery-stream-encryption",
      description:
        "Disables server-side encryption (SSE) for the Firehose stream.  This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to DISABLING, and then to DISABLED. You can continue to read and write data to your stream while its status is DISABLING. It can take up to 5 seconds after the encryption status changes to DISABLED before all records written to the Firehose stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively. To check the encryption state of a Firehose stream, use DescribeDeliveryStream.  If SSE is enabled using a customer managed CMK and then you invoke StopDeliveryStreamEncryption, Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination. The StartDeliveryStreamEncryption and StopDeliveryStreamEncryption operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call StartDeliveryStreamEncryption 13 times and StopDeliveryStreamEncryption 12 times for the same Firehose stream in a 24-hour period",
      options: [
        {
          name: "--delivery-stream-name",
          description:
            "The name of the Firehose stream for which you want to disable server-side encryption (SSE)",
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
      name: "tag-delivery-stream",
      description:
        "Adds or updates tags for the specified Firehose stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.  Each Firehose stream can have up to 50 tags.  This operation has a limit of five transactions per second per account",
      options: [
        {
          name: "--delivery-stream-name",
          description:
            "The name of the Firehose stream to which you want to add the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A set of key-value pairs to use to create the tags",
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
      name: "untag-delivery-stream",
      description:
        "Removes tags from the specified Firehose stream. Removed tags are deleted, and you can't recover them after this operation successfully completes. If you specify a tag that doesn't exist, the operation ignores it. This operation has a limit of five transactions per second per account",
      options: [
        {
          name: "--delivery-stream-name",
          description: "The name of the Firehose stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys. Each corresponding tag is removed from the delivery stream",
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
      name: "update-destination",
      description:
        "Updates the specified destination of the specified Firehose stream. Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target Firehose stream remains active while the configurations are updated, so data writes to the Firehose stream can continue during this process. The updated configurations are usually effective within a few minutes. Switching between Amazon OpenSearch Service and other services is not supported. For an Amazon OpenSearch Service destination, you can only update to another Amazon OpenSearch Service destination. If the destination type is the same, Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if EncryptionConfiguration is not specified, then the existing EncryptionConfiguration is maintained on the destination. If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Firehose does not merge any parameters. In this case, all parameters must be specified. Firehose uses CurrentDeliveryStreamVersionId to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using DescribeDeliveryStream. Use the new version ID to set CurrentDeliveryStreamVersionId in the next call",
      options: [
        {
          name: "--delivery-stream-name",
          description: "The name of the Firehose stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-delivery-stream-version-id",
          description:
            "Obtain this value from the VersionId result of DeliveryStreamDescription. This value is required, and helps the service perform conditional operations. For example, if there is an interleaving update and this value is null, then the update destination fails. After the update is successful, the VersionId value is updated. The service then performs a merge of the old configuration with the new configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the destination",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-destination-update",
          description:
            "[Deprecated] Describes an update for a destination in Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--extended-s3-destination-update",
          description: "Describes an update for a destination in Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--redshift-destination-update",
          description:
            "Describes an update for a destination in Amazon Redshift",
          args: {
            name: "structure",
          },
        },
        {
          name: "--elasticsearch-destination-update",
          description: "Describes an update for a destination in Amazon ES",
          args: {
            name: "structure",
          },
        },
        {
          name: "--amazonopensearchservice-destination-update",
          description:
            "Describes an update for a destination in Amazon OpenSearch Service",
          args: {
            name: "structure",
          },
        },
        {
          name: "--splunk-destination-update",
          description: "Describes an update for a destination in Splunk",
          args: {
            name: "structure",
          },
        },
        {
          name: "--http-endpoint-destination-update",
          description:
            "Describes an update to the specified HTTP endpoint destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--amazon-open-search-serverless-destination-update",
          description:
            "Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service",
          args: {
            name: "structure",
          },
        },
        {
          name: "--snowflake-destination-update",
          description:
            "Update to the Snowflake destination configuration settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--iceberg-destination-update",
          description:
            "Describes an update for a destination in Apache Iceberg Tables",
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
