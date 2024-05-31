const bucketGenerator: Fig.Generator = {
  script: ["aws", "s3api", "list-buckets"],
  postProcess: function (out) {
    const json = JSON.parse(out);
    return json.Buckets.map((bucket) => {
      let date;
      try {
        date = new Date(bucket.CreationDate).toLocaleDateString();
      } catch (e) {
        date = bucket.CreationDate;
      }

      return {
        name: bucket.Name,
        description: `Created: ${date}`,
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "s3api",
  description: "",
  subcommands: [
    {
      name: "abort-multipart-upload",
      description:
        "This action aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts.  To verify that all parts have been removed, so you don't get charged for the part storage, you should call the ListParts action and ensure that the parts list is empty. For information about permissions required to use the multipart upload, see Multipart Upload and Permissions. The following operations are related to AbortMultipartUpload:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name to which the upload was taking place.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "Key of the object for which the multipart upload was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id",
          description: "Upload ID that identifies the multipart upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "complete-multipart-upload",
      description:
        "Completes a multipart upload by assembling previously uploaded parts. You first initiate the multipart upload and then upload all parts using the UploadPart operation. After successfully uploading all relevant parts of an upload, you call this action to complete the upload. Upon receiving this request, Amazon S3 concatenates all the parts in ascending order by part number to create a new object. In the Complete Multipart Upload request, you must provide the parts list. You must ensure that the parts list is complete. This action concatenates the parts that you provide in the list. For each part in the list, you must provide the part number and the ETag value, returned after that part was uploaded. Processing of a Complete Multipart Upload request could take several minutes to complete. After Amazon S3 begins processing the request, it sends an HTTP response header that specifies a 200 OK response. While processing is in progress, Amazon S3 periodically sends white space characters to keep the connection from timing out. Because a request could fail after the initial 200 OK response has been sent, it is important that you check the response body to determine whether the request succeeded. Note that if CompleteMultipartUpload fails, applications should be prepared to retry the failed requests. For more information, see Amazon S3 Error Best Practices. For more information about multipart uploads, see Uploading Objects Using Multipart Upload. For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions.  CompleteMultipartUpload has the following special errors:   Error code: EntityTooSmall    Description: Your proposed upload is smaller than the minimum allowed object size. Each part must be at least 5 MB in size, except the last part.   400 Bad Request     Error code: InvalidPart    Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified entity tag might not have matched the part's entity tag.   400 Bad Request     Error code: InvalidPartOrder    Description: The list of parts was not in ascending order. The parts list must be specified in order by part number.   400 Bad Request     Error code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.   404 Not Found     The following operations are related to CompleteMultipartUpload:    CreateMultipartUpload     UploadPart     AbortMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "Name of the bucket to which the multipart upload was initiated",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "Object key for which the multipart upload was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--multipart-upload",
          description:
            "The container for the multipart upload request information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--upload-id",
          description: "ID for the initiated multipart upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "copy-object",
      description:
        "Creates a copy of an object that is already stored in Amazon S3.  You can store individual objects of up to 5 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy API. For more information, see Copy Object Using the REST Multipart Upload API.  All copy requests must be authenticated. Additionally, you must have read access to the source object and write access to the destination bucket. For more information, see REST Authentication. Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. If the error occurs before the copy action starts, you receive a standard Amazon S3 error. If the error occurs during the copy operation, the error response is embedded in the 200 OK response. This means that a 200 OK response can contain either a success or an error. Design your application to parse the contents of the response and handle it appropriately. If the copy is successful, you receive a response with information about the copied object.  If the request is an HTTP 1.1 request, the response is chunk encoded. If it were not, it would not contain the content-length, and you would need to read the entire body.  The copy request charge is based on the storage class and Region that you specify for the destination object. For pricing information, see Amazon S3 pricing.  Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 Bad Request error. For more information, see Transfer Acceleration.   Metadata  When copying an object, you can preserve all metadata (default) or specify new metadata. However, the ACL is not preserved and is set to private for the user making the request. To override the default ACL setting, specify a new ACL when generating a copy request. For more information, see Using ACLs.  To specify whether you want the object metadata copied from the source object or replaced with metadata provided in the request, you can optionally add the x-amz-metadata-directive header. When you grant permissions, you can use the s3:x-amz-metadata-directive condition key to enforce certain metadata behavior when objects are uploaded. For more information, see Specifying Conditions in a Policy in the Amazon S3 Developer Guide. For a complete list of Amazon S3-specific condition keys, see Actions, Resources, and Condition Keys for Amazon S3.   x-amz-copy-source-if Headers  To only copy an object under certain conditions, such as whether the Etag matches or whether the object was modified before or after a specified date, use the following request parameters:    x-amz-copy-source-if-match     x-amz-copy-source-if-none-match     x-amz-copy-source-if-unmodified-since     x-amz-copy-source-if-modified-since     If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data:    x-amz-copy-source-if-match condition evaluates to true    x-amz-copy-source-if-unmodified-since condition evaluates to false   If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code:    x-amz-copy-source-if-none-match condition evaluates to false    x-amz-copy-source-if-modified-since condition evaluates to true    All headers with the x-amz- prefix, including x-amz-copy-source, must be signed.   Server-side encryption  When you perform a CopyObject operation, you can optionally use the appropriate encryption-related headers to encrypt the object using server-side encryption with AWS managed encryption keys (SSE-S3 or SSE-KMS) or a customer-provided encryption key. With server-side encryption, Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts the data when you access it. For more information about server-side encryption, see Using Server-Side Encryption. If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.  Access Control List (ACL)-Specific Request Headers  When copying an object, you can optionally use headers to grant ACL-based permissions. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual AWS accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API.   Storage Class Options  You can use the CopyObject action to change the storage class of an object that is already stored in Amazon S3 using the StorageClass parameter. For more information, see Storage Classes in the Amazon S3 Service Developer Guide.  Versioning  By default, x-amz-copy-source identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the versionId subresource. If you enable versioning on the target bucket, Amazon S3 generates a unique version ID for the object being copied. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the x-amz-version-id response header in the response. If you do not enable versioning or suspend it on the target bucket, the version ID that Amazon S3 generates is always null. If the source object's storage class is GLACIER, you must restore a copy of this object before you can use it as a source object for the copy operation. For more information, see RestoreObject. The following operations are related to CopyObject:    PutObject     GetObject    For more information, see Copying Objects",
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the destination bucket. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description: "Specifies presentational information for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "A standard MIME type describing the format of the object data",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source",
          description:
            "Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.  Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.  Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key>. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL encoded.    To copy a specific version of an object, append ?versionId=<version-id> to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-match",
          description:
            "Copies the object if its entity tag (ETag) matches the specified tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-modified-since",
          description:
            "Copies the object if it has been modified since the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--copy-source-if-none-match",
          description:
            "Copies the object if its entity tag (ETag) is different than the specified ETag",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-unmodified-since",
          description:
            "Copies the object if it hasn't been modified since the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The key of the destination object",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "A map of metadata to store with the object in S3",
          args: {
            name: "map",
          },
        },
        {
          name: "--metadata-directive",
          description:
            "Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging-directive",
          description:
            "Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption",
          description:
            "The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms)",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description:
            "By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-redirect-location",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. For information about configuring using any of the officially supported AWS SDKs and AWS CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.  Specifying this header with a COPY action doesn\u2019t affect bucket-level settings for S3 Bucket Key",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.  Specifying this header with a COPY action doesn\u2019t affect bucket-level settings for S3 Bucket Key",
        },
        {
          name: "--copy-source-sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when decrypting the source object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description:
            "The tag-set for the object destination object this value must be used in conjunction with the TaggingDirective. The tag-set must be encoded as URL Query parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "The Object Lock mode that you want to apply to the copied object",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "The date and time when you want the copied object's Object Lock to expire",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Specifies whether you want to apply a Legal Hold to the copied object",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-source-bucket-owner",
          description:
            "The account ID of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "create-bucket",
      description:
        'Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid AWS Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner. Not every string is an acceptable bucket name. For information about bucket naming restrictions, see Working with Amazon S3 buckets.  If you want to create an Amazon S3 on Outposts bucket, see Create Bucket.  By default, the bucket is created in the US East (N. Virginia) Region. You can optionally specify a Region in the request body. You might choose a Region to optimize latency, minimize costs, or address regulatory requirements. For example, if you reside in Europe, you will probably find it advantageous to create buckets in the Europe (Ireland) Region. For more information, see Accessing a bucket.  If you send your create bucket request to the s3.amazonaws.com endpoint, the request goes to the us-east-1 Region. Accordingly, the signature calculations in Signature Version 4 must use us-east-1 as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see Virtual hosting of buckets.  When creating a bucket using this operation, you can optionally specify the accounts or groups that should be granted specific permissions on the bucket. There are two ways to grant the appropriate permissions using the request headers.   Specify a canned ACL using the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL.   Specify access permissions explicitly using the x-amz-grant-read, x-amz-grant-write, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. These headers map to the set of permissions Amazon S3 supports in an ACL. For more information, see Access control list (ACL) overview. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an AWS account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an AWS account  Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.    For example, the following x-amz-grant-read header grants the AWS accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  The following operations are related to CreateBucket:    PutObject     DeleteBucket',
      options: [
        {
          name: "--acl",
          description: "The canned ACL to apply to the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description: "The name of the bucket to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--create-bucket-configuration",
          description: "The configuration information for the bucket",
          args: {
            name: "structure",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description: "Allows grantee to list the objects in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description: "Allows grantee to read the bucket ACL",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write",
          description:
            "Allows grantee to create, overwrite, and delete any object in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-enabled-for-bucket",
          description:
            "Specifies whether you want S3 Object Lock to be enabled for the new bucket",
        },
        {
          name: "--no-object-lock-enabled-for-bucket",
          description:
            "Specifies whether you want S3 Object Lock to be enabled for the new bucket",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-multipart-upload",
      description:
        'This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see UploadPart). You also include this upload ID in the final request to either complete or abort the multipart upload request. For more information about multipart uploads, see Multipart Upload Overview. If you have configured a lifecycle rule to abort incomplete multipart uploads, the upload must complete within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy. For information about the permissions required to use the multipart upload API, see Multipart Upload and Permissions. For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see Authenticating Requests (AWS Signature Version 4).   After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stop charging you for storing them only after you either complete or abort a multipart upload.   You can optionally request server-side encryption. For server-side encryption, Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You can provide your own encryption key, or use AWS Key Management Service (AWS KMS) customer master keys (CMKs) or Amazon S3-managed encryption keys. If you choose to provide your own encryption key, the request headers you provide in UploadPart and UploadPartCopy requests must match the headers you used in the request to initiate the upload by using CreateMultipartUpload.  To perform a multipart upload with encryption using an AWS KMS CMK, the requester must have permission to the kms:Encrypt, kms:Decrypt, kms:ReEncrypt*, kms:GenerateDataKey*, and kms:DescribeKey actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. If your AWS Identity and Access Management (IAM) user or role is in the same AWS account as the AWS KMS CMK, then you must have these permissions on the key policy. If your IAM user or role belongs to a different account than the key, then you must have the permissions on both the key policy and your IAM user or role.  For more information, see Protecting Data Using Server-Side Encryption.  Access Permissions  When copying an object, you can optionally specify the accounts or groups that should be granted specific permissions on the new object. There are two ways to grant the permissions using the request headers:   Specify a canned ACL with the x-amz-acl request header. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview.   You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Server-Side- Encryption-Specific Request Headers  You can optionally tell Amazon S3 to encrypt data at rest using server-side encryption. Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. The option you use depends on whether you want to use AWS managed encryption keys or provide your own encryption key.    Use encryption keys managed by Amazon S3 or customer master keys (CMKs) stored in AWS Key Management Service (AWS KMS) \u2013 If you want AWS to manage the keys used to encrypt data, specify the following headers in the request.   x-amz-server-side-encryption   x-amz-server-side-encryption-aws-kms-key-id   x-amz-server-side-encryption-context    If you specify x-amz-server-side-encryption:aws:kms, but don\'t provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the AWS managed CMK in AWS KMS to protect the data.   All GET and PUT requests for an object protected by AWS KMS fail if you don\'t make them with SSL or by using SigV4.  For more information about server-side encryption with CMKs stored in AWS KMS (SSE-KMS), see Protecting Data Using Server-Side Encryption with CMKs stored in AWS KMS.   Use customer-provided encryption keys \u2013 If you want to manage your own encryption keys, provide all the following headers in the request.   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about server-side encryption with CMKs stored in AWS KMS (SSE-KMS), see Protecting Data Using Server-Side Encryption with CMKs stored in AWS KMS.    Access-Control-List (ACL)-Specific Request Headers  You also can use the following access control\u2013related headers with this operation. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual AWS accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the object. For more information, see Using ACLs. With this operation, you can grant access permissions using one of the following two methods:   Specify a canned ACL (x-amz-acl) \u2014 Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL.   Specify access permissions explicitly \u2014 To explicitly grant access permissions to specific AWS accounts or groups, use the following headers. Each header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. In the header, you specify a list of grantees who get the specific permission. To grant permissions explicitly, use:   x-amz-grant-read   x-amz-grant-write   x-amz-grant-read-acp   x-amz-grant-write-acp   x-amz-grant-full-control   You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an AWS account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an AWS account  Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.    For example, the following x-amz-grant-read header grants the AWS accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"       The following operations are related to CreateMultipartUpload:    UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads',
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket to which to initiate the upload When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description: "Specifies presentational information for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "A standard MIME type describing the format of the object data",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Object key for which the multipart upload is to be initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "A map of metadata to store with the object in S3",
          args: {
            name: "map",
          },
        },
        {
          name: "--server-side-encryption",
          description:
            "The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms)",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description:
            "By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-redirect-location",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "Specifies the ID of the symmetric customer managed AWS KMS CMK to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. For information about configuring using any of the officially supported AWS SDKs and AWS CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with an object action doesn\u2019t affect bucket-level settings for S3 Bucket Key",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with an object action doesn\u2019t affect bucket-level settings for S3 Bucket Key",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description:
            "The tag-set for the object. The tag-set must be encoded as URL Query parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "Specifies the Object Lock mode that you want to apply to the uploaded object",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "Specifies the date and time when you want the Object Lock to expire",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Specifies whether you want to apply a Legal Hold to the uploaded object",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket",
      description:
        "Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted.  Related Resources     CreateBucket     DeleteObject",
      options: [
        {
          name: "--bucket",
          description: "Specifies the bucket being deleted",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-analytics-configuration",
      description:
        "Deletes an analytics configuration for the bucket (specified by the analytics configuration ID). To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 analytics feature, see Amazon S3 Analytics \u2013 Storage Class Analysis.  The following operations are related to DeleteBucketAnalyticsConfiguration:    GetBucketAnalyticsConfiguration     ListBucketAnalyticsConfigurations     PutBucketAnalyticsConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket from which an analytics configuration is deleted",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID that identifies the analytics configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-cors",
      description:
        "Deletes the cors configuration information set for the bucket. To use this operation, you must have permission to perform the s3:PutBucketCORS action. The bucket owner has this permission by default and can grant this permission to others.  For information about cors, see Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide.  Related Resources:     PutBucketCors     RESTOPTIONSobject",
      options: [
        {
          name: "--bucket",
          description:
            "Specifies the bucket whose cors configuration is being deleted",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-encryption",
      description:
        "This implementation of the DELETE action removes default encryption from the bucket. For information about the Amazon S3 default encryption feature, see Amazon S3 Default Bucket Encryption in the Amazon S3 User Guide. To use this operation, you must have permissions to perform the s3:PutEncryptionConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide.  Related Resources     PutBucketEncryption     GetBucketEncryption",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the server-side encryption configuration to delete",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-intelligent-tiering-configuration",
      description:
        "Deletes the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead. S3 Intelligent-Tiering delivers automatic cost savings by moving data between access tiers, when access patterns change. The S3 Intelligent-Tiering storage class is suitable for objects larger than 128 KB that you plan to store for at least 30 days. If the size of an object is less than 128 KB, it is not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the frequent access tier rates in the S3 Intelligent-Tiering storage class.  If you delete an object before the end of the 30-day minimum storage duration period, you are charged for 30 days. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to DeleteBucketIntelligentTieringConfiguration include:     GetBucketIntelligentTieringConfiguration     PutBucketIntelligentTieringConfiguration     ListBucketIntelligentTieringConfigurations",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose configuration you want to modify or retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description:
            "The ID used to identify the S3 Intelligent-Tiering configuration",
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
      name: "delete-bucket-inventory-configuration",
      description:
        "Deletes an inventory configuration (identified by the inventory ID) from the bucket. To use this operation, you must have permissions to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. Operations related to DeleteBucketInventoryConfiguration include:     GetBucketInventoryConfiguration     PutBucketInventoryConfiguration     ListBucketInventoryConfigurations",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the inventory configuration to delete",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID used to identify the inventory configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-lifecycle",
      description:
        "Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. To use this operation, you must have permission to perform the s3:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the bucket owner can grant this permission to others. There is usually some time lag before lifecycle configuration deletion is fully propagated to all the Amazon S3 systems. For more information about the object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration",
      options: [
        {
          name: "--bucket",
          description: "The bucket name of the lifecycle to delete",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-metrics-configuration",
      description:
        "Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.  To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch.  The following operations are related to DeleteBucketMetricsConfiguration:    GetBucketMetricsConfiguration     PutBucketMetricsConfiguration     ListBucketMetricsConfigurations     Monitoring Metrics with Amazon CloudWatch",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the metrics configuration to delete",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID used to identify the metrics configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-ownership-controls",
      description:
        "Removes OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy. For information about Amazon S3 Object Ownership, see Using Object Ownership.  The following operations are related to DeleteBucketOwnershipControls:    GetBucketOwnershipControls     PutBucketOwnershipControls",
      options: [
        {
          name: "--bucket",
          description:
            "The Amazon S3 bucket whose OwnershipControls you want to delete",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-policy",
      description:
        "This implementation of the DELETE action uses the policy subresource to delete the policy of a specified bucket. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the DeleteBucketPolicy permissions on the specified bucket and belong to the bucket owner's account to use this operation.  If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and UserPolicies.  The following operations are related to DeleteBucketPolicy     CreateBucket     DeleteObject",
      options: [
        {
          name: "--bucket",
          description: "The bucket name",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-replication",
      description:
        "Deletes the replication configuration from the bucket. To use this operation, you must have permissions to perform the s3:PutReplicationConfiguration action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.   It can take a while for the deletion of a replication configuration to fully propagate.   For information about replication configuration, see Replication in the Amazon S3 Developer Guide.  The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication",
      options: [
        {
          name: "--bucket",
          description: "The bucket name",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-tagging",
      description:
        "Deletes the tags from the bucket. To use this operation, you must have permission to perform the s3:PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  The following operations are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging",
      options: [
        {
          name: "--bucket",
          description: "The bucket that has the tag set to be removed",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-bucket-website",
      description:
        "This action removes the website configuration for a bucket. Amazon S3 returns a 200 OK response upon successfully deleting a website configuration on the specified bucket. You will get a 200 OK response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a 404 response if the bucket specified in the request does not exist. This DELETE action requires the S3:DeleteBucketWebsite permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the S3:DeleteBucketWebsite permission.  For more information about hosting websites, see Hosting Websites on Amazon S3.  The following operations are related to DeleteBucketWebsite:    GetBucketWebsite     PutBucketWebsite",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name for which you want to remove the website configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-object",
      description:
        "Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects but will still respond that the command was successful. To remove a specific version, you must be the bucket owner and you must use the version Id subresource. Using this subresource permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header, x-amz-delete-marker, to true.  If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the x-amz-mfa request header in the DELETE versionId request. Requests that include x-amz-mfa must use HTTPS.   For more information about MFA Delete, see Using MFA Delete. To see sample requests that use versioning, see Sample Request.  You can delete objects by explicitly calling DELETE Object or configure its lifecycle (PutBucketLifecycle) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the s3:DeleteObject, s3:DeleteObjectVersion, and s3:PutLifeCycleConfiguration actions.  The following action is related to DeleteObject:    PutObject",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name of the bucket containing the object.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description: "Key name of the object to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa",
          description:
            "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "VersionId used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-governance-retention",
          description:
            "Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation",
        },
        {
          name: "--no-bypass-governance-retention",
          description:
            "Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation",
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-object-tagging",
      description:
        "Removes the entire tag set from the specified object. For more information about managing object tags, see  Object Tagging. To use this operation, you must have permission to perform the s3:DeleteObjectTagging action. To delete tags of a specific object version, add the versionId query parameter in the request. You will need permission for the s3:DeleteObjectVersionTagging action. The following operations are related to DeleteBucketMetricsConfiguration:    PutObjectTagging     GetObjectTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the objects from which to remove the tags.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key that identifies the object in the bucket from which to remove all tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The versionId of the object that the tag-set will be removed from",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-objects",
      description:
        "This action enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this action provides a suitable alternative to sending individual delete requests, reducing per-request overhead. The request contains a list of up to 1000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete action and returns the result of that delete, success, or failure, in the response. Note that if the object specified in the request is not found, Amazon S3 returns the result as deleted.  The action supports two modes for the response: verbose and quiet. By default, the action uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete action encountered an error. For a successful deletion, the action does not return any information about the delete in the response body. When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see  MFA Delete. Finally, the Content-MD5 header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit. The following operations are related to DeleteObjects:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the objects to delete.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delete",
          description: "Container for the request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mfa",
          description:
            "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-governance-retention",
          description:
            "Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. You must have sufficient permissions to perform this operation",
        },
        {
          name: "--no-bypass-governance-retention",
          description:
            "Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. You must have sufficient permissions to perform this operation",
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "delete-public-access-block",
      description:
        "Removes the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The following operations are related to DeletePublicAccessBlock:    Using Amazon S3 Block Public Access     GetPublicAccessBlock     PutPublicAccessBlock     GetBucketPolicyStatus",
      options: [
        {
          name: "--bucket",
          description:
            "The Amazon S3 bucket whose PublicAccessBlock configuration you want to delete",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-accelerate-configuration",
      description:
        "This implementation of the GET action uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to and from Amazon S3. To use this operation, you must have permission to perform the s3:GetAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. You set the Transfer Acceleration state of an existing bucket to Enabled or Suspended by using the PutBucketAccelerateConfiguration operation.  A GET accelerate request does not return a state value for a bucket that has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state has never been set on the bucket.  For more information about transfer acceleration, see Transfer Acceleration in the Amazon S3 User Guide.  Related Resources     PutBucketAccelerateConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which the accelerate configuration is retrieved",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-acl",
      description:
        "This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket. To use GET to return the ACL of the bucket, you must have READ_ACP access to the bucket. If READ_ACP permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header.  Related Resources     ListObjects",
      options: [
        {
          name: "--bucket",
          description: "Specifies the S3 bucket whose ACL is being requested",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-analytics-configuration",
      description:
        "This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see  Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  For information about Amazon S3 analytics feature, see Amazon S3 Analytics \u2013 Storage Class Analysis in the Amazon S3 User Guide.  Related Resources     DeleteBucketAnalyticsConfiguration     ListBucketAnalyticsConfigurations     PutBucketAnalyticsConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket from which an analytics configuration is retrieved",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID that identifies the analytics configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-cors",
      description:
        "Returns the cors configuration information set for the bucket.  To use this operation, you must have permission to perform the s3:GetBucketCORS action. By default, the bucket owner has this permission and can grant it to others.  For more information about cors, see  Enabling Cross-Origin Resource Sharing. The following operations are related to GetBucketCors:    PutBucketCors     DeleteBucketCors",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name for which to get the cors configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-encryption",
      description:
        "Returns the default encryption configuration for an Amazon S3 bucket. If the bucket does not have a default encryption configuration, GetBucketEncryption returns ServerSideEncryptionConfigurationNotFoundError.  For information about the Amazon S3 default encryption feature, see Amazon S3 Default Bucket Encryption.  To use this operation, you must have permission to perform the s3:GetEncryptionConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The following operations are related to GetBucketEncryption:    PutBucketEncryption     DeleteBucketEncryption",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket from which the server-side encryption configuration is retrieved",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-intelligent-tiering-configuration",
      description:
        "Gets the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead. S3 Intelligent-Tiering delivers automatic cost savings by moving data between access tiers, when access patterns change. The S3 Intelligent-Tiering storage class is suitable for objects larger than 128 KB that you plan to store for at least 30 days. If the size of an object is less than 128 KB, it is not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the frequent access tier rates in the S3 Intelligent-Tiering storage class.  If you delete an object before the end of the 30-day minimum storage duration period, you are charged for 30 days. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to GetBucketIntelligentTieringConfiguration include:     DeleteBucketIntelligentTieringConfiguration     PutBucketIntelligentTieringConfiguration     ListBucketIntelligentTieringConfigurations",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose configuration you want to modify or retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description:
            "The ID used to identify the S3 Intelligent-Tiering configuration",
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
      name: "get-bucket-inventory-configuration",
      description:
        "Returns an inventory configuration (identified by the inventory configuration ID) from the bucket. To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. The following operations are related to GetBucketInventoryConfiguration:    DeleteBucketInventoryConfiguration     ListBucketInventoryConfigurations     PutBucketInventoryConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the inventory configuration to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID used to identify the inventory configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-lifecycle",
      description:
        "For an updated version of this API, see GetBucketLifecycleConfiguration. If you configured a bucket lifecycle using the filter element, you should see the updated version of this topic. This topic is provided for backward compatibility.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management.  To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycle has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycle:    GetBucketLifecycleConfiguration     PutBucketLifecycle     DeleteBucketLifecycle",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the lifecycle information",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-lifecycle-configuration",
      description:
        "Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The response describes the new filter element that you can use to specify a filter to select a subset of objects to which the rule applies. If you are using a previous version of the lifecycle configuration, it still works. For the earlier action, see GetBucketLifecycle.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management. To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycleConfiguration:    GetBucketLifecycle     PutBucketLifecycle     DeleteBucketLifecycle",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the lifecycle information",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-location",
      description:
        "Returns the Region the bucket resides in. You set the bucket's Region using the LocationConstraint request parameter in a CreateBucket request. For more information, see CreateBucket.  To use this implementation of the operation, you must be the bucket owner. The following operations are related to GetBucketLocation:    GetObject     CreateBucket",
      options: [
        {
          name: "--bucket",
          description: "The name of the bucket for which to get the location",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-logging",
      description:
        "Returns the logging status of a bucket and the permissions users have to view and modify that status. To use GET, you must be the bucket owner. The following operations are related to GetBucketLogging:    CreateBucket     PutBucketLogging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name for which to get the logging information",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-metrics-configuration",
      description:
        "Gets a metrics configuration (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.  To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to GetBucketMetricsConfiguration:    PutBucketMetricsConfiguration     DeleteBucketMetricsConfiguration     ListBucketMetricsConfigurations     Monitoring Metrics with Amazon CloudWatch",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the metrics configuration to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID used to identify the metrics configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-notification",
      description: "No longer used, see GetBucketNotificationConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the notification configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-notification-configuration",
      description:
        "Returns the notification configuration of a bucket. If notifications are not enabled on the bucket, the action returns an empty NotificationConfiguration element. By default, you must be the bucket owner to read the notification configuration of a bucket. However, the bucket owner can use a bucket policy to grant permission to other users to read this configuration with the s3:GetBucketNotification permission. For more information about setting and reading the notification configuration on a bucket, see Setting Up Notification of Bucket Events. For more information about bucket policies, see Using Bucket Policies. The following action is related to GetBucketNotification:    PutBucketNotification",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the notification configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-ownership-controls",
      description:
        "Retrieves OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  For information about Amazon S3 Object Ownership, see Using Object Ownership.  The following operations are related to GetBucketOwnershipControls:    PutBucketOwnershipControls     DeleteBucketOwnershipControls",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose OwnershipControls you want to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-policy",
      description:
        "Returns the policy of a specified bucket. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have GetBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.  As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.  For more information about bucket policies, see Using Bucket Policies and User Policies. The following action is related to GetBucketPolicy:    GetObject",
      options: [
        {
          name: "--bucket",
          description: "The bucket name for which to get the bucket policy",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-policy-status",
      description:
        'Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public. In order to use this operation, you must have the s3:GetBucketPolicyStatus permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  For more information about when Amazon S3 considers a bucket public, see The Meaning of "Public".  The following operations are related to GetBucketPolicyStatus:    Using Amazon S3 Block Public Access     GetPublicAccessBlock     PutPublicAccessBlock     DeletePublicAccessBlock',
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose policy status you want to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-replication",
      description:
        "Returns the replication configuration of a bucket.   It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result.    For information about replication configuration, see Replication in the Amazon S3 User Guide. This action requires permissions for the s3:GetReplicationConfiguration action. For more information about permissions, see Using Bucket Policies and User Policies. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication and Priority elements. The response also returns those elements. For information about GetBucketReplication errors, see List of replication-related error codes  The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name for which to get the replication information",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-request-payment",
      description:
        "Returns the request payment configuration of a bucket. To use this version of the operation, you must be the bucket owner. For more information, see Requester Pays Buckets. The following operations are related to GetBucketRequestPayment:    ListObjects",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the payment request configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-tagging",
      description:
        "Returns the tag set associated with the bucket. To use this operation, you must have permission to perform the s3:GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSetError    Description: There is no tag set associated with the bucket.     The following operations are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the tagging information",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-versioning",
      description:
        "Returns the versioning state of a bucket. To retrieve the versioning state of a bucket, you must be the bucket owner. This implementation also returns the MFA Delete status of the versioning state. If the MFA Delete status is enabled, the bucket owner must use an authentication device to change the versioning state of the bucket. The following operations are related to GetBucketVersioning:    GetObject     PutObject     DeleteObject",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the versioning information",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-bucket-website",
      description:
        "Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see Hosting Websites on Amazon S3.  This GET action requires the S3:GetBucketWebsite permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the S3:GetBucketWebsite permission. The following operations are related to DeleteBucketWebsite:    DeleteBucketWebsite     PutBucketWebsite",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name for which to get the website configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-object",
      description:
        'Retrieves objects from Amazon S3. To use GET, you must have READ access to the object. If you grant READ access to the anonymous user, you can return the object without using an authorization header. An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer file system. You can, however, create a logical hierarchy by using object key names that imply a folder structure. For example, instead of naming an object sample.jpg, you can name it photos/2006/February/sample.jpg. To get an object from such a logical hierarchy, specify the full key name for the object in the GET operation. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg, specify the resource as /photos/2006/February/sample.jpg. For a path-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket, specify the resource as /examplebucket/photos/2006/February/sample.jpg. For more information about request types, see HTTP Host Header Bucket Specification. To distribute large files to many people, you can save bandwidth costs by using BitTorrent. For more information, see Amazon S3 Torrent. For more information about returning the ACL of an object, see GetObjectAcl. If the object you are retrieving is stored in the S3 Glacier or S3 Glacier Deep Archive storage class, or S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, before you can retrieve the object you must first restore a copy using RestoreObject. Otherwise, this action returns an InvalidObjectStateError error. For information about restoring archived objects, see Restoring Archived Objects. Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with CMKs stored in AWS KMS (SSE-KMS) or server-side encryption with Amazon S3\u2013managed encryption keys (SSE-S3). If your object does use these types of keys, you\u2019ll get an HTTP 400 BadRequest error. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys). Assuming you have permission to read object tags (permission for the s3:GetObjectVersionTagging action), the response also returns the x-amz-tagging-count header that provides the count of number of tags associated with the object. You can use GetObjectTagging to retrieve the tag set associated with an object.  Permissions  You need the s3:GetObject permission for this operation. For more information, see Specifying Permissions in a Policy. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 will return an HTTP status code 404 ("no such key") error.   If you don\u2019t have the s3:ListBucket permission, Amazon S3 will return an HTTP status code 403 ("access denied") error.    Versioning  By default, the GET action returns the current version of an object. To return a different version, use the versionId subresource.  If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes x-amz-delete-marker: true in the response.  For more information about versioning, see PutBucketVersioning.   Overriding Response Header Values  There are times when you want to override certain response header values in a GET response. For example, you might override the Content-Disposition response header value in your GET request. You can override values for a set of response headers using the following query parameters. These response header values are sent only on a successful request, that is, when status code 200 OK is returned. The set of headers you can override using these parameters is a subset of the headers that Amazon S3 accepts when you create an object. The response headers that you can override for the GET response are Content-Type, Content-Language, Expires, Cache-Control, Content-Disposition, and Content-Encoding. To override these header values in the GET response, you use the following request parameters.  You must sign the request, either using an Authorization header or a presigned URL, when using these parameters. They cannot be used with an unsigned (anonymous) request.     response-content-type     response-content-language     response-expires     response-cache-control     response-content-disposition     response-content-encoding     Additional Considerations about Request Headers  If both of the If-Match and If-Unmodified-Since headers are present in the request as follows: If-Match condition evaluates to true, and; If-Unmodified-Since condition evaluates to false; then, S3 returns 200 OK and the data requested.  If both of the If-None-Match and If-Modified-Since headers are present in the request as follows: If-None-Match condition evaluates to false, and; If-Modified-Since condition evaluates to true; then, S3 returns 304 Not Modified response code. For more information about conditional requests, see RFC 7232. The following operations are related to GetObject:    ListBuckets     GetObjectAcl',
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--if-match",
          description:
            "Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-modified-since",
          description:
            "Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-unmodified-since",
          description:
            "Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--key",
          description: "Key of the object to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--range",
          description:
            "Downloads the specified range bytes of an object. For more information about the HTTP Range header, see https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-cache-control",
          description: "Sets the Cache-Control header of the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-content-disposition",
          description: "Sets the Content-Disposition header of the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-content-encoding",
          description: "Sets the Content-Encoding header of the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-content-language",
          description: "Sets the Content-Language header of the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-content-type",
          description: "Sets the Content-Type header of the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-expires",
          description: "Sets the Expires header of the response",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--version-id",
          description:
            "VersionId used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when decrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 used to encrypt the data. This value is used to decrypt the object when recovering it and must match the one used when storing the data. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--part-number",
          description:
            "Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
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
      name: "get-object-acl",
      description:
        "Returns the access control list (ACL) of an object. To use this operation, you must have READ_ACP access to the object. This action is not supported by Amazon S3 on Outposts.  Versioning  By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource. The following operations are related to GetObjectAcl:    GetObject     DeleteObject     PutObject",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name that contains the object for which to get the ACL information.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key of the object for which to get the ACL information",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "VersionId used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-object-legal-hold",
      description:
        "Gets an object's current Legal Hold status. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object whose Legal Hold status you want to retrieve.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key name for the object whose Legal Hold status you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version ID of the object whose Legal Hold status you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-object-lock-configuration",
      description:
        "Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket whose Object Lock configuration you want to retrieve. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-object-retention",
      description:
        "Retrieves an object's retention settings. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object whose retention settings you want to retrieve.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key name for the object whose retention settings you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version ID for the object whose retention settings you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "get-object-tagging",
      description:
        "Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object. To use this operation, you must have permission to perform the s3:GetObjectTagging action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the s3:GetObjectVersionTagging action.  By default, the bucket owner has this permission and can grant this permission to others.  For information about the Amazon S3 object tagging feature, see Object Tagging. The following action is related to GetObjectTagging:    PutObjectTagging     DeleteObjectTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object for which to get the tagging information.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description: "Object key for which to get the tagging information",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The versionId of the object for which to get the tagging information",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
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
      name: "get-object-torrent",
      description:
        "Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're distributing large files. For more information about BitTorrent, see Using BitTorrent with Amazon S3.  You can get torrent only for objects that are less than 5 GB in size, and that are not encrypted using server-side encryption with a customer-provided encryption key.  To use GET, you must have READ access to the object. This action is not supported by Amazon S3 on Outposts. The following action is related to GetObjectTorrent:    GetObject",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the object for which to get the torrent files",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description: "The object key for which to get the information",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
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
      name: "get-public-access-block",
      description:
        'Retrieves the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner\'s account. If the PublicAccessBlock settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to GetPublicAccessBlock:    Using Amazon S3 Block Public Access     PutPublicAccessBlock     GetPublicAccessBlock     DeletePublicAccessBlock',
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose PublicAccessBlock configuration you want to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "head-bucket",
      description:
        "This action is useful to determine if a bucket exists and you have permission to access it. The action returns a 200 OK if the bucket exists and you have permission to access it. If the bucket does not exist or you do not have permission to access it, the HEAD request returns a generic 404 Not Found or 403 Forbidden code. A message body is not included, so you cannot determine the exception beyond these error codes. To use this operation, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "head-object",
      description:
        'The HEAD action retrieves metadata from an object without returning the object itself. This action is useful if you\'re only interested in an object\'s metadata. To use HEAD, you must have READ access to the object. A HEAD request has the same options as a GET action on an object. The response is identical to the GET response except that there is no response body. Because of this, if the HEAD request generates an error, it returns a generic 404 Not Found or 403 Forbidden code. It is not possible to retrieve the exact exception beyond these error codes. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers:   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5   For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys).    Encryption request headers, like x-amz-server-side-encryption, should not be sent for GET requests if your object uses server-side encryption with CMKs stored in AWS KMS (SSE-KMS) or server-side encryption with Amazon S3\u2013managed encryption keys (SSE-S3). If your object does use these types of keys, you\u2019ll get an HTTP 400 BadRequest error.    The last modified property in this case is the creation date of the object.    Request headers are limited to 8 KB in size. For more information, see Common Request Headers. Consider the following when using request headers:    Consideration 1 \u2013 If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested.    Consideration 2 \u2013 If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code.   For more information about conditional requests, see RFC 7232.  Permissions  You need the s3:GetObject permission for this operation. For more information, see Specifying Permissions in a Policy. If the object you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 ("no such key") error.   If you don\u2019t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 ("access denied") error.   The following action is related to HeadObject:    GetObject',
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the object. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--if-match",
          description:
            "Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-modified-since",
          description:
            "Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-unmodified-since",
          description:
            "Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--key",
          description: "The object key",
          args: {
            name: "string",
          },
        },
        {
          name: "--range",
          description:
            "Downloads the specified range bytes of an object. For more information about the HTTP Range header, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "VersionId used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--part-number",
          description:
            "Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-bucket-analytics-configurations",
      description:
        "Lists the analytics configurations for the bucket. You can have up to 1,000 analytics configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. You should always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there will be a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about Amazon S3 analytics feature, see Amazon S3 Analytics \u2013 Storage Class Analysis.  The following operations are related to ListBucketAnalyticsConfigurations:    GetBucketAnalyticsConfiguration     DeleteBucketAnalyticsConfiguration     PutBucketAnalyticsConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket from which analytics configurations are retrieved",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--continuation-token",
          description:
            "The ContinuationToken that represents a placeholder from where this request should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-bucket-intelligent-tiering-configurations",
      description:
        "Lists the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead. S3 Intelligent-Tiering delivers automatic cost savings by moving data between access tiers, when access patterns change. The S3 Intelligent-Tiering storage class is suitable for objects larger than 128 KB that you plan to store for at least 30 days. If the size of an object is less than 128 KB, it is not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the frequent access tier rates in the S3 Intelligent-Tiering storage class.  If you delete an object before the end of the 30-day minimum storage duration period, you are charged for 30 days. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to ListBucketIntelligentTieringConfigurations include:     DeleteBucketIntelligentTieringConfiguration     PutBucketIntelligentTieringConfiguration     GetBucketIntelligentTieringConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose configuration you want to modify or retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--continuation-token",
          description:
            "The ContinuationToken that represents a placeholder from where this request should begin",
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
      name: "list-bucket-inventory-configurations",
      description:
        "Returns a list of inventory configurations for the bucket. You can have up to 1,000 analytics configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page.  To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory  The following operations are related to ListBucketInventoryConfigurations:    GetBucketInventoryConfiguration     DeleteBucketInventoryConfiguration     PutBucketInventoryConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the inventory configurations to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--continuation-token",
          description:
            "The marker used to continue an inventory configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-bucket-metrics-configurations",
      description:
        "Lists the metrics configurations for the bucket. The metrics configurations are only for the request metrics of the bucket and do not provide information on daily storage metrics. You can have up to 1,000 configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For more information about metrics configurations and CloudWatch request metrics, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to ListBucketMetricsConfigurations:    PutBucketMetricsConfiguration     GetBucketMetricsConfiguration     DeleteBucketMetricsConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the metrics configurations to retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--continuation-token",
          description:
            "The marker that is used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-buckets",
      description:
        "Returns a list of all buckets owned by the authenticated sender of the request",
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
      name: "list-multipart-uploads",
      description:
        "This action lists in-progress multipart uploads. An in-progress multipart upload is a multipart upload that has been initiated using the Initiate Multipart Upload request, but has not yet been completed or aborted. This action returns at most 1,000 multipart uploads in the response. 1,000 multipart uploads is the maximum number of uploads a response can include, which is also the default value. You can further limit the number of uploads in a response by specifying the max-uploads parameter in the response. If additional multipart uploads satisfy the list criteria, the response will contain an IsTruncated element with the value true. To list the additional multipart uploads, use the key-marker and upload-id-marker request parameters. In the response, the uploads are sorted by key. If your application has initiated more than one multipart upload using the same object key, then uploads in the response are first sorted by key. Additionally, uploads are sorted in ascending order within each key by the upload initiation time. For more information on multipart uploads, see Uploading Objects Using Multipart Upload. For information on permissions required to use the multipart upload API, see Multipart Upload and Permissions. The following operations are related to ListMultipartUploads:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket to which the multipart upload was initiated.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description:
            "Character you use to group keys. All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, CommonPrefixes. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under CommonPrefixes result element are not returned elsewhere in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-marker",
          description:
            "Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin. If upload-id-marker is not specified, only the keys lexicographically greater than the specified key-marker will be included in the list. If upload-id-marker is specified, any multipart uploads for a key equal to the key-marker might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified upload-id-marker",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-uploads",
          description:
            "Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--prefix",
          description:
            "Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id-marker",
          description:
            "Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified upload-id-marker",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-object-versions",
      description:
        "Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions.   To use this operation, you must have permissions to perform the s3:ListBucketVersions action. Be aware of the name difference.     A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.  To use this operation, you must have READ access to the bucket. This action is not supported by Amazon S3 on Outposts. The following operations are related to ListObjectVersions:    ListObjectsV2     GetObject     PutObject     DeleteObject",
      options: [
        {
          name: "--bucket",
          description: "The bucket name that contains the objects",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description:
            "A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-marker",
          description:
            "Specifies the key to start with when listing objects in a bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-keys",
          description:
            "Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains <isTruncated>true</isTruncated>. To return the additional keys, see key-marker and version-id-marker",
          args: {
            name: "integer",
          },
        },
        {
          name: "--prefix",
          description:
            "Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id-marker",
          description:
            "Specifies the object version you want to start listing from",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-objects",
      description:
        "Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately.  This action has been revised. We recommend that you use the newer version, ListObjectsV2, when developing applications. For backward compatibility, Amazon S3 continues to support ListObjects.  The following operations are related to ListObjects:    ListObjectsV2     GetObject     PutObject     CreateBucket     ListBuckets",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the objects. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description: "A delimiter is a character you use to group keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the key to start with when listing objects in a bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-keys",
          description:
            "Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more",
          args: {
            name: "integer",
          },
        },
        {
          name: "--prefix",
          description:
            "Limits the response to keys that begin with the specified prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that she or he will be charged for the list objects request. Bucket owners need not specify this parameter in their requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-objects-v2",
      description:
        "Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. Objects are returned sorted in an ascending order of the respective key names in the list. To use this operation, you must have READ access to the bucket. To use this action in an AWS Identity and Access Management (IAM) policy, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  This section describes the latest revision of this action. We recommend that you use this revised API for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API, ListObjects.  To get a list of your buckets, see ListBuckets. The following operations are related to ListObjectsV2:    GetObject     PutObject     CreateBucket",
      options: [
        {
          name: "--bucket",
          description:
            "Bucket name to list.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description: "A delimiter is a character you use to group keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Encoding type used by Amazon S3 to encode object keys in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-keys",
          description:
            "Sets the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more",
          args: {
            name: "integer",
          },
        },
        {
          name: "--prefix",
          description:
            "Limits the response to keys that begin with the specified prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--continuation-token",
          description:
            "ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key",
          args: {
            name: "string",
          },
        },
        {
          name: "--fetch-owner",
          description:
            "The owner field is not present in listV2 by default, if you want to return owner field with each key in the result then set the fetch owner field to true",
        },
        {
          name: "--no-fetch-owner",
          description:
            "The owner field is not present in listV2 by default, if you want to return owner field with each key in the result then set the fetch owner field to true",
        },
        {
          name: "--start-after",
          description:
            "StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "list-parts",
      description:
        "Lists the parts that have been uploaded for a specific multipart upload. This operation must include the upload ID, which you obtain by sending the initiate multipart upload request (see CreateMultipartUpload). This request returns a maximum of 1,000 uploaded parts. The default number of parts returned is 1,000 parts. You can restrict the number of parts returned by specifying the max-parts request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an IsTruncated field with the value of true, and a NextPartNumberMarker element. In subsequent ListParts requests you can include the part-number-marker query string parameter and set its value to the NextPartNumberMarker field value from the previous response. For more information on multipart uploads, see Uploading Objects Using Multipart Upload. For information on permissions required to use the multipart upload API, see Multipart Upload and Permissions. The following operations are related to ListParts:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket to which the parts are being uploaded.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "Object key for which the multipart upload was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-parts",
          description: "Sets the maximum number of parts to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--part-number-marker",
          description:
            "Specifies the part after which listing should begin. Only parts with higher part numbers will be listed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--upload-id",
          description:
            "Upload ID identifying the multipart upload whose parts are being listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-accelerate-configuration",
      description:
        'Sets the accelerate configuration of an existing bucket. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to Amazon S3.  To use this operation, you must have permission to perform the s3:PutAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  The Transfer Acceleration state of a bucket can be set to one of the following two values:    Enabled \u2013 Enables accelerated data transfers to the bucket.    Suspended \u2013 Disables accelerated data transfers to the bucket.   The GetBucketAccelerateConfiguration action returns the transfer acceleration state of a bucket. After setting the Transfer Acceleration state of a bucket to Enabled, it might take up to thirty minutes before the data transfer rates to the bucket increase.  The name of the bucket used for Transfer Acceleration must be DNS-compliant and must not contain periods (".").  For more information about transfer acceleration, see Transfer Acceleration. The following operations are related to PutBucketAccelerateConfiguration:    GetBucketAccelerateConfiguration     CreateBucket',
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which the accelerate configuration is set",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--accelerate-configuration",
          description: "Container for setting the transfer acceleration state",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-acl",
      description:
        'Sets the permissions on an existing bucket using access control lists (ACL). For more information, see Using ACLs. To set the ACL of a bucket, you must have WRITE_ACP permission. You can use one of the following two ways to set a bucket\'s permissions:   Specify the ACL in the request body   Specify permissions using request headers    You cannot specify access permission using both the body and the request headers.  Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach.  Access Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (AWS accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an AWS account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an AWS account  Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.    For example, the following x-amz-grant-write header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two AWS accounts identified by their email addresses.  x-amz-grant-write: uri="http://acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you\'re assigning access rights (using request elements) in the following ways:   By the person\'s ID:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>  DisplayName is optional and ignored in the request   By URI:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>    By Email address:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress>lt;/Grantee>  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.   Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.     Related Resources     CreateBucket     DeleteBucket     GetObjectAcl',
      options: [
        {
          name: "--acl",
          description: "The canned ACL to apply to the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-control-policy",
          description:
            "Contains the elements that set the ACL permissions for an object per grantee",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bucket",
          description: "The bucket to which to apply the ACL",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description: "Allows grantee to list the objects in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description: "Allows grantee to read the bucket ACL",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write",
          description:
            "Allows grantee to create, overwrite, and delete any object in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-analytics-configuration",
      description:
        "Sets an analytics configuration for the bucket (specified by the analytics configuration ID). You can have up to 1,000 analytics configurations per bucket. You can choose to have storage class analysis export analysis reports sent to a comma-separated values (CSV) flat file. See the DataExport request element. Reports are updated daily and are based on the object filters that you configure. When selecting data export, you specify a destination bucket and an optional destination prefix where the file is written. You can export the data to a destination bucket in a different account. However, the destination bucket must be in the same Region as the bucket that you are making the PUT analytics configuration to. For more information, see Amazon S3 Analytics \u2013 Storage Class Analysis.   You must create a bucket policy on the destination bucket where the exported file is written to grant permissions to Amazon S3 to write objects to the bucket. For an example policy, see Granting Permissions for Amazon S3 Inventory and Storage Class Analysis.  To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  Special Errors       HTTP Error: HTTP 400 Bad Request     Code: InvalidArgument     Cause: Invalid argument.         HTTP Error: HTTP 400 Bad Request     Code: TooManyConfigurations     Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.         HTTP Error: HTTP 403 Forbidden     Code: AccessDenied     Cause: You are not the owner of the specified bucket, or you do not have the s3:PutAnalyticsConfiguration bucket permission to set the configuration on the bucket.       Related Resources     GetBucketAnalyticsConfiguration     DeleteBucketAnalyticsConfiguration     ListBucketAnalyticsConfigurations",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket to which an analytics configuration is stored",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID that identifies the analytics configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-configuration",
          description:
            "The configuration and any analyses for the analytics filter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-cors",
      description:
        "Sets the cors configuration for your bucket. If the configuration exists, Amazon S3 replaces it. To use this operation, you must be allowed to perform the s3:PutBucketCORS action. By default, the bucket owner has this permission and can grant it to others. You set this configuration on a bucket so that the bucket can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your Amazon S3 bucket at my.example.bucket.com by using the browser's XMLHttpRequest capability. To enable cross-origin resource sharing (CORS) on a bucket, you add the cors subresource to the bucket. The cors subresource is an XML document in which you configure rules that identify origins and the HTTP methods that can be executed on your bucket. The document is limited to 64 KB in size.  When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a bucket, it evaluates the cors configuration on the bucket and uses the first CORSRule rule that matches the incoming browser request to enable a cross-origin request. For a rule to match, the following conditions must be met:   The request's Origin header must match AllowedOrigin elements.   The request method (for example, GET, PUT, HEAD, and so on) or the Access-Control-Request-Method header in case of a pre-flight OPTIONS request must be one of the AllowedMethod elements.    Every header specified in the Access-Control-Request-Headers request header of a pre-flight request must match an AllowedHeader element.     For more information about CORS, go to Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide.  Related Resources     GetBucketCors     DeleteBucketCors     RESTOPTIONSobject",
      options: [
        {
          name: "--bucket",
          description: "Specifies the bucket impacted by the corsconfiguration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--cors-configuration",
          description:
            "Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-encryption",
      description:
        "This action uses the encryption subresource to configure default encryption and Amazon S3 Bucket Key for an existing bucket. Default encryption for a bucket can use server-side encryption with Amazon S3-managed keys (SSE-S3) or AWS KMS customer master keys (SSE-KMS). If you specify default encryption using SSE-KMS, you can also configure Amazon S3 Bucket Key. For information about default encryption, see Amazon S3 default bucket encryption in the Amazon S3 User Guide. For more information about S3 Bucket Keys, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.  This action requires AWS Signature Version 4. For more information, see  Authenticating Requests (AWS Signature Version 4).   To use this operation, you must have permissions to perform the s3:PutEncryptionConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.   Related Resources     GetBucketEncryption     DeleteBucketEncryption",
      options: [
        {
          name: "--bucket",
          description:
            "Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3) or customer master keys stored in AWS KMS (SSE-KMS). For information about the Amazon S3 default encryption feature, see Amazon S3 Default Bucket Encryption in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the server-side encryption configuration. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption-configuration",
          description:
            "Specifies the default server-side-encryption configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-intelligent-tiering-configuration",
      description:
        "Puts a S3 Intelligent-Tiering configuration to the specified bucket. You can have up to 1,000 S3 Intelligent-Tiering configurations per bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead. S3 Intelligent-Tiering delivers automatic cost savings by moving data between access tiers, when access patterns change. The S3 Intelligent-Tiering storage class is suitable for objects larger than 128 KB that you plan to store for at least 30 days. If the size of an object is less than 128 KB, it is not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the frequent access tier rates in the S3 Intelligent-Tiering storage class.  If you delete an object before the end of the 30-day minimum storage duration period, you are charged for 30 days. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to PutBucketIntelligentTieringConfiguration include:     DeleteBucketIntelligentTieringConfiguration     GetBucketIntelligentTieringConfiguration     ListBucketIntelligentTieringConfigurations     You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically move objects stored in the S3 Intelligent-Tiering storage class to the Archive Access or Deep Archive Access tier.   Special Errors     HTTP 400 Bad Request Error     Code: InvalidArgument    Cause: Invalid Argument      HTTP 400 Bad Request Error     Code: TooManyConfigurations    Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.       HTTP 403 Forbidden Error     Code: AccessDenied    Cause: You are not the owner of the specified bucket, or you do not have the s3:PutIntelligentTieringConfiguration bucket permission to set the configuration on the bucket",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose configuration you want to modify or retrieve",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description:
            "The ID used to identify the S3 Intelligent-Tiering configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--intelligent-tiering-configuration",
          description: "Container for S3 Intelligent-Tiering configuration",
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
      name: "put-bucket-inventory-configuration",
      description:
        "This implementation of the PUT action adds an inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket.  Amazon S3 inventory generates inventories of the objects in the bucket on a daily or weekly basis, and the results are published to a flat file. The bucket that is inventoried is called the source bucket, and the bucket where the inventory flat file is stored is called the destination bucket. The destination bucket must be in the same AWS Region as the source bucket.  When you configure an inventory for a source bucket, you specify the destination bucket where you want the inventory to be stored, and whether to generate the inventory daily or weekly. You can also configure what object metadata to include and whether to inventory all object versions or only current versions. For more information, see Amazon S3 Inventory in the Amazon S3 User Guide.  You must create a bucket policy on the destination bucket to grant permissions to Amazon S3 to write objects to the bucket in the defined location. For an example policy, see  Granting Permissions for Amazon S3 Inventory and Storage Class Analysis.  To use this operation, you must have permissions to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  Special Errors     HTTP 400 Bad Request Error     Code: InvalidArgument    Cause: Invalid Argument      HTTP 400 Bad Request Error     Code: TooManyConfigurations    Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.       HTTP 403 Forbidden Error     Code: AccessDenied    Cause: You are not the owner of the specified bucket, or you do not have the s3:PutInventoryConfiguration bucket permission to set the configuration on the bucket.       Related Resources     GetBucketInventoryConfiguration     DeleteBucketInventoryConfiguration     ListBucketInventoryConfigurations",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket where the inventory configuration will be stored",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID used to identify the inventory configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--inventory-configuration",
          description: "Specifies the inventory configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-lifecycle",
      description:
        "For an updated version of this API, see PutBucketLifecycleConfiguration. This version has been deprecated. Existing lifecycle configurations will work. For new lifecycle configurations, use the updated API.   Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. For information about lifecycle configuration, see Object Lifecycle Management in the Amazon S3 User Guide.  By default, all Amazon S3 resources, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration) are private. Only the resource owner, the AWS account that created the resource, can access it. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, users must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit denial also supersedes any other permissions. If you want to prevent users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:     s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration    For more information about permissions, see Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. For more examples of transitioning objects to storage classes such as STANDARD_IA or ONEZONE_IA, see Examples of Lifecycle Configuration.  Related Resources     GetBucketLifecycle(Deprecated)    GetBucketLifecycleConfiguration     RestoreObject    By default, a resource owner\u2014in this case, a bucket owner, which is the AWS account that created the bucket\u2014can perform any of the operations. A resource owner can also grant others permission to perform the operation. For more information, see the following topics in the Amazon S3 User Guide:     Specifying Permissions in a Policy     Managing Access Permissions to your Amazon S3 Resources",
      options: [
        {
          name: "--bucket",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle-configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-lifecycle-configuration",
      description:
        "Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. For information about lifecycle configuration, see Managing Access Permissions to Your Amazon S3 Resources.  Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, or a combination of both. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see PutBucketLifecycle.   Rules  You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. Each rule consists of the following:   Filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, or a combination of both.   Status whether the rule is in effect.   One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions.   For more information, see Object Lifecycle Management and Lifecycle Configuration Elements.  Permissions  By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the AWS account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:   s3:DeleteObject   s3:DeleteObjectVersion   s3:PutLifecycleConfiguration   For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources. The following are related to PutBucketLifecycleConfiguration:    Examples of Lifecycle Configuration     GetBucketLifecycleConfiguration     DeleteBucketLifecycle",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to set the configuration",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--lifecycle-configuration",
          description:
            "Container for lifecycle rules. You can add as many as 1,000 rules",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-logging",
      description:
        'Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. All logs are saved to buckets in the same AWS Region as the source bucket. To set the logging status of a bucket, you must be the bucket owner. The bucket owner is automatically granted FULL_CONTROL to all logs. You use the Grantee request element to grant access to other people. The Permissions request element specifies the kind of access the grantee has to the logs.  Grantee Values  You can specify the person (grantee) to whom you\'re assigning access rights (using request elements) in the following ways:   By the person\'s ID:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>  DisplayName is optional and ignored in the request.   By Email address:   <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress></Grantee>  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.   By URI:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>    To enable logging, you use LoggingEnabled and its children request elements. To disable logging, you use an empty BucketLoggingStatus request element:  <BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01" />  For more information about server access logging, see Server Access Logging.  For more information about creating a bucket, see CreateBucket. For more information about returning the logging status of a bucket, see GetBucketLogging. The following operations are related to PutBucketLogging:    PutObject     DeleteBucket     CreateBucket     GetBucketLogging',
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to set the logging parameters",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--bucket-logging-status",
          description: "Container for logging status information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash of the PutBucketLogging request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-metrics-configuration",
      description:
        "Sets a metrics configuration (specified by the metrics configuration ID) for the bucket. You can have up to 1,000 metrics configurations per bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to PutBucketMetricsConfiguration:    DeleteBucketMetricsConfiguration     PutBucketMetricsConfiguration     ListBucketMetricsConfigurations     GetBucketLifecycle has the following special error:   Error code: TooManyConfigurations    Description: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.   HTTP Status Code: HTTP 400 Bad Request",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which the metrics configuration is set",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--id",
          description: "The ID used to identify the metrics configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--metrics-configuration",
          description: "Specifies the metrics configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-notification",
      description:
        "No longer used, see the PutBucketNotificationConfiguration operation",
      options: [
        {
          name: "--bucket",
          description: "The name of the bucket",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash of the PutPublicAccessBlock request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-configuration",
          description: "The container for the configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-notification-configuration",
      description:
        "Enables notifications of specified events for a bucket. For more information about event notifications, see Configuring Event Notifications. Using this API, you can replace an existing notification configuration. The configuration is an XML file that defines the event types that you want Amazon S3 to publish and the destination where you want Amazon S3 to publish an event notification when it detects an event of the specified type. By default, your bucket has no event notifications configured. That is, the notification configuration will be an empty NotificationConfiguration.  <NotificationConfiguration>   </NotificationConfiguration>  This action replaces the existing notification configuration with the configuration you include in the request body. After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and that the bucket owner has permission to publish to it by sending a test notification. In the case of AWS Lambda destinations, Amazon S3 verifies that the Lambda function permissions grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information, see Configuring Notifications for Amazon S3 Events. You can disable notifications by adding the empty NotificationConfiguration element. By default, only the bucket owner can configure notifications on a bucket. However, bucket owners can use a bucket policy to grant permission to other users to set this configuration with s3:PutBucketNotification permission.  The PUT notification is an atomic operation. For example, suppose your notification configuration includes SNS topic, SQS queue, and Lambda function configurations. When you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add the configuration to your bucket.   Responses  If the configuration in the request body includes only one TopicConfiguration specifying only the s3:ReducedRedundancyLostObject event type, the response will also include the x-amz-sns-test-message-id header containing the message ID of the test notification sent to the topic. The following action is related to PutBucketNotificationConfiguration:    GetBucketNotificationConfiguration",
      options: [
        {
          name: "--bucket",
          description: "The name of the bucket",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--notification-configuration",
          description:
            "A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-ownership-controls",
      description:
        "Creates or modifies OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  For information about Amazon S3 Object Ownership, see Using Object Ownership.  The following operations are related to PutBucketOwnershipControls:    GetBucketOwnershipControls     DeleteBucketOwnershipControls",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose OwnershipControls you want to set",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash of the OwnershipControls request body.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
          },
        },
        {
          name: "--ownership-controls",
          description:
            "The OwnershipControls (BucketOwnerPreferred or ObjectWriter) that you want to apply to this Amazon S3 bucket",
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
      name: "put-bucket-policy",
      description:
        "Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the PutBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.   As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.   For more information about bucket policies, see Using Bucket Policies and User Policies. The following operations are related to PutBucketPolicy:    CreateBucket     DeleteBucket",
      options: [
        {
          name: "--bucket",
          description: "The name of the bucket",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash of the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirm-remove-self-bucket-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future",
        },
        {
          name: "--no-confirm-remove-self-bucket-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future",
        },
        {
          name: "--policy",
          description: "The bucket policy as a JSON document",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-replication",
      description:
        "Creates a replication configuration or replaces an existing one. For more information, see Replication in the Amazon S3 Developer Guide.   To perform this operation, the user or role performing the action must have the iam:PassRole permission.  Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority.  If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility.  For information about enabling versioning on a bucket, see Using Versioning. By default, a resource owner, in this case the AWS account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see Specifying Permissions in a Policy and Managing Access Permissions to Your Amazon S3 Resources.  Handling Replication of Encrypted Objects  By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with CMKs stored in AWS KMS. To replicate AWS KMS-encrypted objects, add the following: SourceSelectionCriteria, SseKmsEncryptedObjects, Status, EncryptionConfiguration, and ReplicaKmsKeyID. For information about replication configuration, see Replicating Objects Created with SSE Using CMKs stored in AWS KMS. For information on PutBucketReplication errors, see List of replication-related error codes  The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication",
      options: [
        {
          name: "--bucket",
          description: "The name of the bucket",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-configuration",
          description:
            "A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB",
          args: {
            name: "structure",
          },
        },
        {
          name: "--token",
          description:
            "A token to allow Object Lock to be enabled for an existing bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-request-payment",
      description:
        "Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. For more information, see Requester Pays Buckets. The following operations are related to PutBucketRequestPayment:    CreateBucket     GetBucketRequestPayment",
      options: [
        {
          name: "--bucket",
          description: "The bucket name",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payment-configuration",
          description: "Container for Payer",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-tagging",
      description:
        "Sets the tags for a bucket. Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost Allocation and Tagging.  Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see Using Cost Allocation in Amazon S3 Bucket Tags.  To use this operation, you must have permissions to perform the s3:PutBucketTagging action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  PutBucketTagging has the following special errors:   Error code: InvalidTagError    Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see User-Defined Tag Restrictions and AWS-Generated Cost Allocation Tag Restrictions.     Error code: MalformedXMLError    Description: The XML provided does not match the schema.     Error code: OperationAbortedError     Description: A conflicting conditional action is currently in progress against this resource. Please try again.     Error code: InternalError    Description: The service was unable to apply the provided tag to the bucket.     The following operations are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging",
      options: [
        {
          name: "--bucket",
          description: "The bucket name",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description: "Container for the TagSet and Tag elements",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-versioning",
      description:
        "Sets the versioning state of an existing bucket. To set the versioning state, you must be the bucket owner. You can set the versioning state with one of the following values:  Enabled\u2014Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.  Suspended\u2014Disables versioning for the objects in the bucket. All objects added to the bucket receive the version ID null. If the versioning state has never been set on a bucket, it has no versioning state; a GetBucketVersioning request does not return a versioning state value. If the bucket owner enables MFA Delete in the bucket versioning configuration, the bucket owner must include the x-amz-mfa request header and the Status and the MfaDelete request elements in a request to set the versioning state of the bucket.  If you have an object expiration lifecycle policy in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle policy will manage the deletes of the noncurrent object versions in the version-enabled bucket. (A version-enabled bucket maintains one current and zero or more noncurrent object versions.) For more information, see Lifecycle and Versioning.   Related Resources     CreateBucket     DeleteBucket     GetBucketVersioning",
      options: [
        {
          name: "--bucket",
          description: "The bucket name",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            ">The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa",
          description:
            "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device",
          args: {
            name: "string",
          },
        },
        {
          name: "--versioning-configuration",
          description: "Container for setting the versioning state",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-bucket-website",
      description:
        "Sets the configuration of the website that is specified in the website subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see Hosting Websites on Amazon S3. This PUT action requires the S3:PutBucketWebsite permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the S3:PutBucketWebsite permission. To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket.    WebsiteConfiguration     RedirectAllRequestsTo     HostName     Protocol    If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected.     WebsiteConfiguration     IndexDocument     Suffix     ErrorDocument     Key     RoutingRules     RoutingRule     Condition     HttpErrorCodeReturnedEquals     KeyPrefixEquals     Redirect     Protocol     HostName     ReplaceKeyPrefixWith     ReplaceKeyWith     HttpRedirectCode    Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see Configuring an Object Redirect in the Amazon S3 User Guide",
      options: [
        {
          name: "--bucket",
          description: "The bucket name",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-configuration",
          description: "Container for the request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-object",
      description:
        "Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object to it. Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. Amazon S3 does not provide object locking; if you need this, make sure to build it into your application layer or use versioning instead. To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, returns an error. Additionally, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5 value.   The Content-MD5 header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information about Amazon S3 Object Lock, see Amazon S3 Object Lock Overview in the Amazon S3 User Guide.    Server-side Encryption  You can optionally request server-side encryption. With server-side encryption, Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts the data when you access it. You have the option to provide your own encryption key or use AWS managed encryption keys (SSE-S3 or SSE-KMS). For more information, see Using Server-Side Encryption. If you request server-side encryption using AWS Key Management Service (SSE-KMS), you can enable an S3 Bucket Key at the object-level. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.  Access Control List (ACL)-Specific Request Headers  You can use headers to grant ACL- based permissions. By default, all objects are private. Only the owner has full access control. When adding a new object, you can grant permissions to individual AWS accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API.   Storage Class Options  By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide.  Versioning  If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects. For more information about versioning, see Adding Objects to Versioning Enabled Buckets. For information about returning the versioning state of a bucket, see GetBucketVersioning.   Related Resources     CopyObject     DeleteObject",
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the object. For more information, see Canned ACL. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description: "Object data",
          args: {
            name: "blob",
          },
        },
        {
          name: "--bucket",
          description:
            "The bucket name to which the PUT action was initiated.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--cache-control",
          description:
            "Can be used to specify caching behavior along the request/reply chain. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description:
            "Specifies presentational information for the object. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-length",
          description:
            "Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13",
          args: {
            name: "long",
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "A standard MIME type describing the format of the contents. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable. For more information, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to read the object data and its metadata. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the object ACL. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable object. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "Object key for which the PUT action was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "A map of metadata to store with the object in S3",
          args: {
            name: "map",
          },
        },
        {
          name: "--server-side-encryption",
          description:
            "The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms)",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description:
            "By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see Storage Classes in the Amazon S3 Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-redirect-location",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:  x-amz-website-redirect-location: /anotherPage.html  In the following example, the request header sets the object redirect to another website:  x-amz-website-redirect-location: http://www.example.com/  For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "If x-amz-server-side-encryption is present and has the value of aws:kms, this header specifies the ID of the AWS Key Management Service (AWS KMS) symmetrical customer managed customer master key (CMK) that was used for the object.  If the value of x-amz-server-side-encryption is aws:kms, this header specifies the ID of the symmetric customer managed AWS KMS CMK that will be used for the object. If you specify x-amz-server-side-encryption:aws:kms, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the AWS managed CMK in AWS to protect the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with a PUT action doesn\u2019t affect bucket-level settings for S3 Bucket Key",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with a PUT action doesn\u2019t affect bucket-level settings for S3 Bucket Key",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description:
            'The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")',
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "The Object Lock mode that you want to apply to this object",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "The date and time when you want this object's Object Lock to expire",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-object-acl",
      description:
        'Uses the acl subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket. You must have WRITE_ACP permission to set the ACL of an object. For more information, see What permissions can I grant? in the Amazon S3 User Guide. This action is not supported by Amazon S3 on Outposts. Depending on your application needs, you can choose to set the ACL on an object using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, you can continue to use that approach. For more information, see Access Control List (ACL) Overview in the Amazon S3 Developer Guide.  Access Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (AWS accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an AWS account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an AWS account  Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.    For example, the following x-amz-grant-read header grants list objects permission to the two AWS accounts identified by their email addresses.  x-amz-grant-read: emailAddress="xyz@amazon.com", emailAddress="abc@amazon.com"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you\'re assigning access rights (using request elements) in the following ways:   By the person\'s ID:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>  DisplayName is optional and ignored in the request.   By URI:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>    By Email address:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress>lt;/Grantee>  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.  Using email addresses to specify a grantee is only supported in the following AWS Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the AWS General Reference.     Versioning  The ACL of an object is set at the object version level. By default, PUT sets the ACL of the current version of an object. To set the ACL of a different version, use the versionId subresource.  Related Resources     CopyObject     GetObject',
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the object. For more information, see Canned ACL",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-control-policy",
          description:
            "Contains the elements that set the ACL permissions for an object per grantee",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bucket",
          description:
            "The bucket name that contains the object to which you want to attach the ACL.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.>  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to list the objects in the bucket. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the bucket ACL. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write",
          description:
            "Allows grantee to create, overwrite, and delete any object in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable bucket. This action is not supported by Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Key for which the PUT action was initiated. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "VersionId used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-object-legal-hold",
      description:
        "Applies a Legal Hold configuration to the specified object. For more information, see Locking Objects. This action is not supported by Amazon S3 on Outposts",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object that you want to place a Legal Hold on.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key name for the object that you want to place a Legal Hold on",
          args: {
            name: "string",
          },
        },
        {
          name: "--legal-hold",
          description:
            "Container element for the Legal Hold configuration you want to apply to the specified object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version ID of the object that you want to place a Legal Hold on",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-object-lock-configuration",
      description:
        "Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects.     The DefaultRetention settings require both a mode and a period.   The DefaultRetention period can be either Days or Years but you must select one. You cannot specify Days and Years at the same time.   You can only enable Object Lock for new buckets. If you want to turn on Object Lock for an existing bucket, contact AWS Support",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket whose Object Lock configuration you want to create or replace",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--object-lock-configuration",
          description:
            "The Object Lock configuration that you want to apply to the specified bucket",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description:
            "A token to allow Object Lock to be enabled for an existing bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-object-retention",
      description:
        "Places an Object Retention configuration on an object. For more information, see Locking Objects.  This action is not supported by Amazon S3 on Outposts",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name that contains the object you want to apply this Object Retention configuration to.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key name for the object that you want to apply this Object Retention configuration to",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention",
          description:
            "The container element for the Object Retention configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version ID for the object that you want to apply this Object Retention configuration to",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-governance-retention",
          description:
            "Indicates whether this action should bypass Governance-mode restrictions",
        },
        {
          name: "--no-bypass-governance-retention",
          description:
            "Indicates whether this action should bypass Governance-mode restrictions",
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "put-object-tagging",
      description:
        "Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see GetObjectTagging. For tagging-related restrictions related to characters and encodings, see Tag Restrictions. Note that Amazon S3 limits the maximum number of tags to 10 tags per object. To use this operation, you must have permission to perform the s3:PutObjectTagging action. By default, the bucket owner has this permission and can grant this permission to others. To put tags of any other version, use the versionId query parameter. You also need permission for the s3:PutObjectVersionTagging action. For information about the Amazon S3 object tagging feature, see Object Tagging.  Special Errors       Code: InvalidTagError      Cause: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Object Tagging.         Code: MalformedXMLError      Cause: The XML provided does not match the schema.         Code: OperationAbortedError      Cause: A conflicting conditional action is currently in progress against this resource. Please try again.         Code: InternalError     Cause: The service was unable to apply the provided tag to the object.       Related Resources     GetObjectTagging     DeleteObjectTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description: "Name of the object key",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The versionId of the object that the tag-set will be added to",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash for the request body. For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description: "Container for the TagSet and Tag elements",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
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
      name: "put-public-access-block",
      description:
        'Creates or modifies the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner\'s account. If the PublicAccessBlock configurations are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public".  Related Resources     GetPublicAccessBlock     DeletePublicAccessBlock     GetBucketPolicyStatus     Using Amazon S3 Block Public Access',
      options: [
        {
          name: "--bucket",
          description:
            "The name of the Amazon S3 bucket whose PublicAccessBlock configuration you want to set",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash of the PutPublicAccessBlock request body.  For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-access-block-configuration",
          description:
            'The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon S3 User Guide',
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "restore-object",
      description:
        "Restores an archived copy of an object back into Amazon S3 This action is not supported by Amazon S3 on Outposts. This action performs the following types of requests:     select - Perform a select query on an archived object    restore an archive - Restore an archived object   To use this operation, you must have permissions to perform the s3:RestoreObject action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  Querying Archives with Select Requests  You use a select type of request to perform SQL queries on archived objects. The archived objects that are being queried by the select request must be formatted as uncompressed comma-separated values (CSV) files. You can run queries and custom analytics on your archived data without having to restore your data to a hotter Amazon S3 tier. For an overview about select requests, see Querying Archived Objects in the Amazon S3 User Guide. When making a select request, do the following:   Define an output location for the select query's output. This must be an Amazon S3 bucket in the same AWS Region as the bucket that contains the archive object that is being queried. The AWS account that initiates the job must have permissions to write to the S3 bucket. You can specify the storage class and encryption for the output objects stored in the bucket. For more information about output, see Querying Archived Objects in the Amazon S3 User Guide. For more information about the S3 structure in the request body, see the following:    PutObject     Managing Access with ACLs in the Amazon S3 User Guide     Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide      Define the SQL expression for the SELECT type of restoration for your query in the request body's SelectParameters structure. You can use expressions like the following examples.   The following expression returns all records from the specified object.  SELECT * FROM Object    Assuming that you are not using any headers for data stored in the object, you can specify columns with positional headers.  SELECT s._1, s._2 FROM Object s WHERE s._3 > 100    If you have headers and you set the fileHeaderInfo in the CSV structure in the request body to USE, you can specify headers in the query. (If you set the fileHeaderInfo field to IGNORE, the first row is skipped for the query.) You cannot mix ordinal positions with header column names.   SELECT s.Id, s.FirstName, s.SSN FROM S3Object s      For more information about using SQL with S3 Glacier Select restore, see SQL Reference for Amazon S3 Select and S3 Glacier Select in the Amazon S3 User Guide.  When making a select request, you can also do the following:   To expedite your queries, specify the Expedited tier. For more information about tiers, see \"Restoring Archives,\" later in this topic.   Specify details about the data serialization format of both the input object that is being queried and the serialization of the CSV-encoded query results.   The following are additional important facts about the select feature:   The output results are new Amazon S3 objects. Unlike archive retrievals, they are stored until explicitly deleted-manually or through a lifecycle policy.   You can issue more than one select request on the same Amazon S3 object. Amazon S3 doesn't deduplicate requests, so avoid issuing duplicate requests.    Amazon S3 accepts a select request even if the object has already been restored. A select request doesn\u2019t return error response 409.    Restoring objects  Objects that you archive to the S3 Glacier or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers are not accessible in real time. For objects in Archive Access or Deep Archive Access tiers you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier. For objects in S3 Glacier or S3 Glacier Deep Archive storage classes you must first initiate a restore request, and then wait until a temporary copy of the object is available. To access an archived object, you must restore the object for the duration (number of days) that you specify. To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version. When restoring an archived object (or using a select request), you can specify one of the following data access tier options in the Tier element of the request body:      Expedited  - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for a subset of archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1\u20135 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.     Standard  - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3\u20135 hours for objects stored in the S3 Glacier storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering.     Bulk  - Bulk retrievals are the lowest-cost retrieval option in S3 Glacier, enabling you to retrieve large amounts, even petabytes, of data inexpensively. Bulk retrievals typically finish within 5\u201312 hours for objects stored in the S3 Glacier storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Bulk retrievals are free for objects stored in S3 Intelligent-Tiering.   For more information about archive retrieval options and provisioned capacity for Expedited data access, see Restoring Archived Objects in the Amazon S3 User Guide.  You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see  Upgrading the speed of an in-progress restore in the Amazon S3 User Guide.  To get the status of object restoration, you can send a HEAD request. Operations return the x-amz-restore header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see Configuring Amazon S3 Event Notifications in the Amazon S3 User Guide. After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object. If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see PutBucketLifecycleConfiguration and Object Lifecycle Management in Amazon S3 User Guide.  Responses  A successful action returns either the 200 OK or 202 Accepted status code.    If the object is not previously restored, then Amazon S3 returns 202 Accepted in the response.    If the object is previously restored, Amazon S3 returns 200 OK in the response.     Special Errors       Code: RestoreAlreadyInProgress     Cause: Object restore is already in progress. (This error does not apply to SELECT type requests.)     HTTP Status Code: 409 Conflict     SOAP Fault Code Prefix: Client         Code: GlacierExpeditedRetrievalNotAvailable     Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.)     HTTP Status Code: 503     SOAP Fault Code Prefix: N/A       Related Resources     PutBucketLifecycleConfiguration     GetBucketNotificationConfiguration     SQL Reference for Amazon S3 Select and S3 Glacier Select  in the Amazon S3 User Guide",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object to restore.  When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description: "Object key for which the action was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "VersionId used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-request",
          description: "Container for restore job parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "select-object-content",
      description:
        "This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON, CSV, or Apache Parquet) of the object. Amazon S3 uses this format to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. This action is not supported by Amazon S3 on Outposts. For more information about Amazon S3 Select, see Selecting Content from Objects in the Amazon S3 User Guide. For more information about using SQL with Amazon S3 Select, see  SQL Reference for Amazon S3 Select and S3 Glacier Select in the Amazon S3 User Guide.   Permissions  You must have s3:GetObject permission for this operation.\u00a0Amazon S3 Select does not support anonymous access. For more information about permissions, see Specifying Permissions in a Policy in the Amazon S3 User Guide.   Object Data Formats  You can use Amazon S3 Select to query objects that have the following format properties:    CSV, JSON, and Parquet - Objects must be in CSV, JSON, or Parquet format.    UTF-8 - UTF-8 is the only encoding type Amazon S3 Select supports.    GZIP or BZIP2 - CSV and JSON files can be compressed using GZIP or BZIP2. GZIP and BZIP2 are the only compression formats that Amazon S3 Select supports for CSV and JSON files. Amazon S3 Select supports columnar compression for Parquet using GZIP or Snappy. Amazon S3 Select does not support whole-object compression for Parquet objects.    Server-side encryption - Amazon S3 Select supports querying objects that are protected with server-side encryption. For objects that are encrypted with customer-provided encryption keys (SSE-C), you must use HTTPS, and you must use the headers that are documented in the GetObject. For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. For objects that are encrypted with Amazon S3 managed encryption keys (SSE-S3) and customer master keys (CMKs) stored in AWS Key Management Service (SSE-KMS), server-side encryption is handled transparently, so you don't need to specify anything. For more information about server-side encryption, including SSE-S3 and SSE-KMS, see Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide.    Working with the Response Body  Given the response size is unknown, Amazon S3 Select streams the response as a series of messages and includes a Transfer-Encoding header with chunked as its value in the response. For more information, see Appendix: SelectObjectContent Response .   GetObject Support  The SelectObjectContent action does not support the following GetObject functionality. For more information, see GetObject.    Range: Although you can specify a scan range for an Amazon S3 Select request (see SelectObjectContentRequest - ScanRange in the request parameters), you cannot specify the range of bytes of an object to return.    GLACIER, DEEP_ARCHIVE and REDUCED_REDUNDANCY storage classes: You cannot specify the GLACIER, DEEP_ARCHIVE, or REDUCED_REDUNDANCY storage classes. For more information, about storage classes see Storage Classes in the Amazon S3 User Guide.     Special Errors  For a list of special errors for this operation, see List of SELECT Object Content Error Codes   Related Resources     GetObject     GetBucketLifecycleConfiguration     PutBucketLifecycleConfiguration",
      options: [
        {
          name: "--bucket",
          description: "The S3 bucket",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description: "The object key",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "The SSE Algorithm used to encrypt the object. For more information, see Server-Side Encryption (Using Customer-Provided Encryption Keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "The SSE Customer Key. For more information, see Server-Side Encryption (Using Customer-Provided Encryption Keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "The SSE Customer Key MD5. For more information, see Server-Side Encryption (Using Customer-Provided Encryption Keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description: "The expression that is used to query the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-type",
          description: "The type of the provided expression (for example, SQL)",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-progress",
          description:
            "Specifies if periodic request progress information should be enabled",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-serialization",
          description:
            "Describes the format of the data in the object that is being queried",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-serialization",
          description:
            "Describes the format of the data that you want Amazon S3 to return in response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--scan-range",
          description:
            "Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional, but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.  ScanRangemay be used in the following ways:    <scanrange><start>50</start><end>100</end></scanrange> - process only the records starting between the bytes 50 and 100 (inclusive, counting from zero)    <scanrange><start>50</start></scanrange> - process only the records starting after the byte 50    <scanrange><end>50</end></scanrange> - process only the records within the last 50 bytes of the file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the records will be saved",
      },
    },
    {
      name: "upload-part",
      description:
        "Uploads a part in a multipart upload.  In this operation, you provide part data in your request. However, you have an option to specify your existing Amazon S3 object as a data source for the part you are uploading. To upload a part from an existing object, you use the UploadPartCopy operation.   You must initiate a multipart upload (see CreateMultipartUpload) before you can upload any part. In response to your initiate request, Amazon S3 returns an upload ID, a unique identifier, that you must include in your upload part request. Part numbers can be any number from 1 to 10,000, inclusive. A part number uniquely identifies a part and also defines its position within the object being created. If you upload a new part using the same part number that was used with a previous part, the previously uploaded part is overwritten. Each part must be at least 5 MB in size, except the last part. There is no size limit on the last part of your multipart upload. To ensure that data is not corrupted when traversing the network, specify the Content-MD5 header in the upload part request. Amazon S3 checks the part data against the provided MD5 value. If they do not match, Amazon S3 returns an error.  If the upload request is signed with Signature Version 4, then AWS S3 uses the x-amz-content-sha256 header as a checksum instead of Content-MD5. For more information see Authenticating Requests: Using the Authorization Header (AWS Signature Version 4).   Note: After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage. For more information on multipart uploads, go to Multipart Upload Overview in the Amazon S3 User Guide . For information on the permissions required to use the multipart upload API, go to Multipart Upload and Permissions in the Amazon S3 User Guide. You can optionally request server-side encryption where Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it for you when you access it. You have the option of providing your own encryption key, or you can use the AWS managed encryption keys. If you choose to provide your own encryption key, the request headers you provide in the request must match the headers you used in the request to initiate the upload by using CreateMultipartUpload. For more information, go to Using Server-Side Encryption in the Amazon S3 User Guide. Server-side encryption is supported by the S3 Multipart Upload actions. Unless you are using a customer-provided encryption key, you don't need to specify the encryption parameters in each UploadPart request. Instead, you only need to specify the server-side encryption parameters in the initial Initiate Multipart request. For more information, see CreateMultipartUpload. If you requested server-side encryption using a customer-provided encryption key in your initiate multipart upload request, you must provide identical encryption information in each part upload using the following headers.   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5    Special Errors       Code: NoSuchUpload     Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.      HTTP Status Code: 404 Not Found      SOAP Fault Code Prefix: Client       Related Resources     CreateMultipartUpload     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--body",
          description: "Object data",
          args: {
            name: "blob",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket to which the multipart upload was initiated. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-length",
          description:
            "Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically",
          args: {
            name: "long",
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameter is required if object lock parameters are specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Object key for which the multipart upload was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--part-number",
          description:
            "Part number of part being uploaded. This is a positive integer between 1 and 10,000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--upload-id",
          description:
            "Upload ID identifying the multipart upload whose part is being uploaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "upload-part-copy",
      description:
        "Uploads a part by copying data from an existing object as data source. You specify the data source by adding the request header x-amz-copy-source in your request and a byte range by adding the request header x-amz-copy-source-range in your request.  The minimum allowable part size for a multipart upload is 5 MB. For more information about multipart upload limits, go to Quick Facts in the Amazon S3 User Guide.   Instead of using an existing object as part data, you might use the UploadPart action and provide data in your request.  You must initiate a multipart upload before you can upload any part. In response to your initiate request. Amazon S3 returns a unique identifier, the upload ID, that you must include in your upload part request. For more information about using the UploadPartCopy operation, see the following:   For conceptual information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide.   For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide.   For information about copying objects using a single atomic action vs. the multipart upload, see Operations on Objects in the Amazon S3 User Guide.   For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see CopyObject and UploadPart.   Note the following additional considerations about the request headers x-amz-copy-source-if-match, x-amz-copy-source-if-none-match, x-amz-copy-source-if-unmodified-since, and x-amz-copy-source-if-modified-since:      Consideration 1 - If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows:  x-amz-copy-source-if-match condition evaluates to true, and;  x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data.     Consideration 2 - If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows:  x-amz-copy-source-if-none-match condition evaluates to false, and;  x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code.     Versioning  If your bucket has versioning enabled, you could have multiple versions of the same object. By default, x-amz-copy-source identifies the current version of the object to copy. If the current version is a delete marker and you don't specify a versionId in the x-amz-copy-source, Amazon S3 returns a 404 error, because the object does not exist. If you specify versionId in the x-amz-copy-source and the versionId is a delete marker, Amazon S3 returns an HTTP 400 error, because you are not allowed to specify a delete marker as a version for the x-amz-copy-source.  You can optionally specify a specific version of the source object to copy by adding the versionId subresource as shown in the following example:  x-amz-copy-source: /bucket/object?versionId=version id   Special Errors       Code: NoSuchUpload     Cause: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.     HTTP Status Code: 404 Not Found         Code: InvalidRequest     Cause: The specified copy source is not supported as a byte-range copy source.     HTTP Status Code: 400 Bad Request       Related Resources     CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--copy-source",
          description:
            "Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.  Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.  Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key>. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL encoded.    To copy a specific version of an object, append ?versionId=<version-id> to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-match",
          description:
            "Copies the object if its entity tag (ETag) matches the specified tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-modified-since",
          description:
            "Copies the object if it has been modified since the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--copy-source-if-none-match",
          description:
            "Copies the object if its entity tag (ETag) is different than the specified ETag",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-unmodified-since",
          description:
            "Copies the object if it hasn't been modified since the specified time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--copy-source-range",
          description:
            "The range of bytes to copy from the source object. The range value must use the form bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if the source object is greater than 5 MB",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Object key for which the multipart upload was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--part-number",
          description:
            "Part number of part being copied. This is a positive integer between 1 and 10,000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--upload-id",
          description:
            "Upload ID identifying the multipart upload whose part is being copied",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when decrypting the source object (for example, AES256)",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-source-bucket-owner",
          description:
            "The account ID of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
      name: "write-get-object-response",
      description:
        "Passes transformed objects to a GetObject operation when using Object Lambda Access Points. For information about Object Lambda Access Points, see Transforming objects with Object Lambda Access Points in the Amazon S3 User Guide. This operation supports metadata that can be returned by GetObject, in addition to RequestRoute, RequestToken, StatusCode, ErrorCode, and ErrorMessage. The GetObject response metadata is supported so that the WriteGetObjectResponse caller, typically an AWS Lambda function, can provide the same metadata when it internally invokes GetObject. When WriteGetObjectResponse is called by a customer-owned Lambda function, the metadata returned to the end user GetObject call might differ from what Amazon S3 would normally return. AWS provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact personally identifiable information (PII) and decompress S3 objects. These Lambda functions are available in the AWS Serverless Application Repository, and can be selected through the AWS Management Console when you create your Object Lambda Access Point. Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket.  Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket.  Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP.  For information on how to view and use these functions, see Using AWS built Lambda functions in the Amazon S3 User Guide",
      options: [
        {
          name: "--request-route",
          description: "Route prefix to the HTTP URL generated",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-token",
          description:
            "A single use encrypted token that maps WriteGetObjectResponse to the end user GetObject request",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description: "The object data",
          args: {
            name: "blob",
          },
        },
        {
          name: "--status-code",
          description:
            "The integer status code for an HTTP response of a corresponding GetObject request.  Status Codes     200 - OK     206 - Partial Content     304 - Not Modified     400 - Bad Request     401 - Unauthorized     403 - Forbidden     404 - Not Found     405 - Method Not Allowed     409 - Conflict     411 - Length Required     412 - Precondition Failed     416 - Range Not Satisfiable     500 - Internal Server Error     503 - Service Unavailable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--error-code",
          description:
            'A string that uniquely identifies an error condition. Returned in the <Code> tag of the error XML response for a corresponding GetObject call. Cannot be used with a successful StatusCode header or when the transformed object is provided in the body. All error codes from S3 are sentence-cased. Regex value is "^[A-Z][a-zA-Z]+$"',
          args: {
            name: "string",
          },
        },
        {
          name: "--error-message",
          description:
            "Contains a generic description of the error condition. Returned in the <Message> tag of the error XML response for a corresponding GetObject call. Cannot be used with a successful StatusCode header or when the transformed object is provided in body",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-ranges",
          description: "Indicates that a range of bytes was specified",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description: "Specifies presentational information for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-length",
          description: "The size of the content body in bytes",
          args: {
            name: "long",
          },
        },
        {
          name: "--content-range",
          description: "The portion of the object returned in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "A standard MIME type describing the format of the object data",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-marker",
          description:
            "Specifies whether an object stored in Amazon S3 is (true) or is not (false) a delete marker",
        },
        {
          name: "--no-delete-marker",
          description:
            "Specifies whether an object stored in Amazon S3 is (true) or is not (false) a delete marker",
        },
        {
          name: "--e-tag",
          description:
            "An opaque identifier assigned by a web server to a specific version of a resource found at a URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--expiration",
          description:
            "If object stored in Amazon S3 expiration is configured (see PUT Bucket lifecycle) it includes expiry-date and rule-id key-value pairs providing object expiration information. The value of the rule-id is URL encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-modified",
          description: "The date and time that the object was last modified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--missing-meta",
          description:
            "Set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers",
          args: {
            name: "integer",
          },
        },
        {
          name: "--metadata",
          description: "A map of metadata to store with the object in S3",
          args: {
            name: "map",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information about S3 Object Lock, see Object Lock",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Indicates whether an object stored in Amazon S3 has an active legal hold",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "The date and time when Object Lock is configured to expire",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--parts-count",
          description: "The count of parts this object has",
          args: {
            name: "integer",
          },
        },
        {
          name: "--replication-status",
          description:
            "Indicates if request involves bucket that is either a source or destination in a Replication rule. For more information about S3 Replication, see Replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-charged",
          description:
            "If present, indicates that the requester was successfully charged for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore",
          description:
            "Provides information about object restoration operation and expiration time of the restored object copy",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption",
          description:
            "The server-side encryption algorithm used when storing requested object in Amazon S3 (for example, AES256, aws:kms)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Encryption algorithm used if server-side encryption with a customer-provided encryption key was specified for object stored in Amazon S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for stored in Amazon S3 object",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data stored in S3. For more information, see Protecting data using server-side encryption with customer-provided encryption keys (SSE-C)",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description: "The class of storage used to store object in Amazon S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-count",
          description: "The number of tags, if any, on the object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--version-id",
          description:
            "An ID used to reference a specific version of the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with AWS KMS (SSE-KMS)",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with AWS KMS (SSE-KMS)",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
          name: "bucket-exists",
          description:
            "Wait until 200 response is received when polling with ``head-bucket``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--bucket",
              description:
                "The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--expected-bucket-owner",
              description:
                "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
          name: "bucket-not-exists",
          description:
            "Wait until 404 response is received when polling with ``head-bucket``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--bucket",
              description:
                "The bucket name. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--expected-bucket-owner",
              description:
                "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
          name: "object-exists",
          description:
            "Wait until 200 response is received when polling with ``head-object``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--bucket",
              description:
                "The name of the bucket containing the object. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--if-match",
              description:
                "Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed)",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-modified-since",
              description:
                "Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified)",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--if-none-match",
              description:
                "Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified)",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-unmodified-since",
              description:
                "Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed)",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--key",
              description: "The object key",
              args: {
                name: "string",
              },
            },
            {
              name: "--range",
              description:
                "Downloads the specified range bytes of an object. For more information about the HTTP Range header, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request",
              args: {
                name: "string",
              },
            },
            {
              name: "--version-id",
              description:
                "VersionId used to reference a specific version of the object",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-algorithm",
              description:
                "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key",
              description:
                "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key-md5",
              description:
                "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
              args: {
                name: "string",
              },
            },
            {
              name: "--request-payer",
              description:
                "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
              args: {
                name: "string",
              },
            },
            {
              name: "--part-number",
              description:
                "Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object",
              args: {
                name: "integer",
              },
            },
            {
              name: "--expected-bucket-owner",
              description:
                "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
          name: "object-not-exists",
          description:
            "Wait until 404 response is received when polling with ``head-object``. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks",
          options: [
            {
              name: "--bucket",
              description:
                "The name of the bucket containing the object. When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon S3 User Guide. When using this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this action using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--if-match",
              description:
                "Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed)",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-modified-since",
              description:
                "Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified)",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--if-none-match",
              description:
                "Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified)",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-unmodified-since",
              description:
                "Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed)",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--key",
              description: "The object key",
              args: {
                name: "string",
              },
            },
            {
              name: "--range",
              description:
                "Downloads the specified range bytes of an object. For more information about the HTTP Range header, see http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request",
              args: {
                name: "string",
              },
            },
            {
              name: "--version-id",
              description:
                "VersionId used to reference a specific version of the object",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-algorithm",
              description:
                "Specifies the algorithm to use to when encrypting the object (for example, AES256)",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key",
              description:
                "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key-md5",
              description:
                "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error",
              args: {
                name: "string",
              },
            },
            {
              name: "--request-payer",
              description:
                "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets in the Amazon S3 Developer Guide",
              args: {
                name: "string",
              },
            },
            {
              name: "--part-number",
              description:
                "Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object",
              args: {
                name: "integer",
              },
            },
            {
              name: "--expected-bucket-owner",
              description:
                "The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error",
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
