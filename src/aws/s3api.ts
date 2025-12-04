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
  description: null,
  subcommands: [
    {
      name: "abort-multipart-upload",
      description:
        "This operation aborts a multipart upload. After a multipart upload is aborted, no additional parts can be uploaded using that upload ID. The storage consumed by any previously uploaded parts will be freed. However, if any part uploads are currently in progress, those part uploads might or might not succeed. As a result, it might be necessary to abort a given multipart upload multiple times in order to completely free all storage consumed by all parts.  To verify that all parts have been removed and prevent getting charged for the part storage, you should call the ListParts API operation and ensure that the parts list is empty.     Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed. To delete these in-progress multipart uploads, use the ListMultipartUploads operation to list the in-progress multipart uploads in the bucket and use the AbortMultipartUpload operation to abort all the in-progress multipart uploads.     Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     Permissions     General purpose bucket permissions - For information about permissions required to use the multipart upload, see Multipart Upload and Permissions in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to AbortMultipartUpload:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name to which the upload was taking place.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match-initiated-time",
          description:
            "If present, this header aborts an in progress multipart upload only if it was initiated on the provided timestamp. If the initiated timestamp of the multipart upload does not match the provided value, the operation returns a 412 Precondition Failed error. If the initiated timestamp matches or if the multipart upload doesn\u2019t exist, the operation returns a 204 Success (No Content) response.   This functionality is only supported for directory buckets",
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
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Completes a multipart upload by assembling previously uploaded parts. You first initiate the multipart upload and then upload all parts using the UploadPart operation or the UploadPartCopy operation. After successfully uploading all relevant parts of an upload, you call this CompleteMultipartUpload operation to complete the upload. Upon receiving this request, Amazon S3 concatenates all the parts in ascending order by part number to create a new object. In the CompleteMultipartUpload request, you must provide the parts list and ensure that the parts list is complete. The CompleteMultipartUpload API operation concatenates the parts that you provide in the list. For each part in the list, you must provide the PartNumber value and the ETag value that are returned after that part was uploaded. The processing of a CompleteMultipartUpload request could take several minutes to finalize. After Amazon S3 begins processing the request, it sends an HTTP response header that specifies a 200 OK response. While processing is in progress, Amazon S3 periodically sends white space characters to keep the connection from timing out. A request could fail after the initial 200 OK response has been sent. This means that a 200 OK response can contain either a success or an error. The error response might be embedded in the 200 OK response. If you call this API operation directly, make sure to design your application to parse the contents of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throw an exception (or, for the SDKs that don't use exceptions, they return an error).  Note that if CompleteMultipartUpload fails, applications should be prepared to retry any failed requests (including 500 error responses). For more information, see Amazon S3 Error Best Practices.  You can't use Content-Type: application/x-www-form-urlencoded for the CompleteMultipartUpload requests. Also, if you don't provide a Content-Type header, CompleteMultipartUpload can still return a 200 OK response.  For more information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide.   Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions     General purpose bucket permissions - For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide. If you provide an additional checksum value in your MultipartUpload requests and the object is encrypted with Key Management Service, you must have permission to use the kms:Decrypt action for the CompleteMultipartUpload request to succeed.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key.    Special errors    Error Code: EntityTooSmall    Description: Your proposed upload is smaller than the minimum allowed object size. Each part must be at least 5 MB in size, except the last part.   HTTP Status Code: 400 Bad Request     Error Code: InvalidPart    Description: One or more of the specified parts could not be found. The part might not have been uploaded, or the specified ETag might not have matched the uploaded part's ETag.   HTTP Status Code: 400 Bad Request     Error Code: InvalidPartOrder    Description: The list of parts was not in ascending order. The parts list must be specified in order by part number.   HTTP Status Code: 400 Bad Request     Error Code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.   HTTP Status Code: 404 Not Found      HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to CompleteMultipartUpload:    CreateMultipartUpload     UploadPart     AbortMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "Name of the bucket to which the multipart upload was initiated.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
          name: "--checksum-crc32",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC-32 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-crc32-c",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC-32C checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha1",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha256",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should fetch the object's ETag, re-initiate the multipart upload with CreateMultipartUpload, and re-upload each part. Expects the ETag value as a string. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should re-initiate the multipart upload with CreateMultipartUpload and re-upload each part. Expects the '*' (asterisk) character. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is required only when the object was created using a checksum algorithm or if your bucket policy requires the use of SSE-C. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
        "Creates a copy of an object that is already stored in Amazon S3.  You can store individual objects of up to 5 TB in Amazon S3. You create a copy of your object up to 5 GB in size in a single atomic action using this API. However, to copy an object greater than 5 GB, you must use the multipart upload Upload Part - Copy (UploadPartCopy) API. For more information, see Copy Object Using the REST Multipart Upload API.  You can copy individual objects between general purpose buckets, between directory buckets, and between general purpose buckets and directory buckets.    Amazon S3 supports copy operations using Multi-Region Access Points only as a destination when using the Multi-Region Access Point ARN.     Directory buckets  - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   VPC endpoints don't support cross-Region requests (including copies). If you're using VPC endpoints, your source and destination buckets should be in the same Amazon Web Services Region as your VPC endpoint.    Both the Region that you want to copy the object from and the Region that you want to copy the object to must be enabled for your account. For more information about how to enable a Region for your account, see Enable or disable a Region for standalone accounts in the Amazon Web Services Account Management Guide.  Amazon S3 transfer acceleration does not support cross-Region copies. If you request a cross-Region copy using a transfer acceleration endpoint, you get a 400 Bad Request error. For more information, see Transfer Acceleration.   Authentication and authorization  All CopyObject requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication.  Directory buckets - You must use the IAM credentials to authenticate and authorize your access to the CopyObject API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.  Permissions  You must have read access to the source object and write access to the destination bucket.    General purpose bucket permissions - You must have permissions in an IAM policy based on the source and destination bucket types in a CopyObject operation.   If the source object is in a general purpose bucket, you must have  s3:GetObject  permission to read the source object that is being copied.    If the destination bucket is a general purpose bucket, you must have  s3:PutObject  permission to write the object copy to the destination bucket.       Directory bucket permissions - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in a CopyObject operation.   If the source object that you want to copy is in a directory bucket, you must have the  s3express:CreateSession  permission in the Action element of a policy to read the object. By default, the session is in the ReadWrite mode. If you want to restrict the access, you can explicitly set the s3express:SessionMode condition key to ReadOnly on the copy source bucket.   If the copy destination is a directory bucket, you must have the  s3express:CreateSession  permission in the Action element of a policy to write the object to the destination. The s3express:SessionMode condition key can't be set to ReadOnly on the copy destination bucket.    If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide.    Response and special errors  When the request is an HTTP 1.1 request, the response is chunk encoded. When the request is not an HTTP 1.1 request, the response would not contain the Content-Length. You always need to read the entire response body to check if the copy succeeds.    If the copy is successful, you receive a response with information about the copied object.   A copy request might return an error when Amazon S3 receives the copy request or while Amazon S3 is copying the files. A 200 OK response can contain either a success or an error.   If the error occurs before the copy action starts, you receive a standard Amazon S3 error.   If the error occurs during the copy operation, the error response is embedded in the 200 OK response. For example, in a cross-region copy, you may encounter throttling and receive a 200 OK response. For more information, see Resolve the Error 200 response when copying objects to Amazon S3. The 200 OK status code means the copy was accepted, but it doesn't mean the copy is complete. Another example is when you disconnect from Amazon S3 before the copy is complete, Amazon S3 might cancel the copy and you may receive a 200 OK response. You must stay connected to Amazon S3 until the entire response is successfully received and processed. If you call this API operation directly, make sure to design your application to parse the content of the response and handle it appropriately. If you use Amazon Web Services SDKs, SDKs handle this condition. The SDKs detect the embedded error and apply error handling per your configuration settings (including automatically retrying the request as appropriate). If the condition persists, the SDKs throw an exception (or, for the SDKs that don't use exceptions, they return an error).      Charge  The copy request charge is based on the storage class and Region that you specify for the destination object. The request can also result in a data retrieval charge for the source if the source storage class bills for data retrieval. If the copy source is in a different region, the data transfer is billed to the copy source account. For pricing information, see Amazon S3 pricing.  HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to CopyObject:    PutObject     GetObject",
      options: [
        {
          name: "--acl",
          description:
            "The canned access control list (ACL) to apply to the object. When you copy an object, the ACL metadata is not preserved and is set to private by default. Only the owner has full access control. To override the default ACL setting, specify a new ACL when you generate a copy request. For more information, see Using ACLs.  If the destination bucket that you're copying objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. For more information, see Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide.    If your destination bucket uses the bucket owner enforced setting for Object Ownership, all objects written to the bucket by any account will be owned by the bucket owner.   This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the destination bucket.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Copying objects across different Amazon Web Services Regions isn't supported when the source or destination bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region. Otherwise, you get an HTTP 400 Bad Request error with the error code InvalidRequest.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies the caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see Checking object integrity in the Amazon S3 User Guide. When you copy an object, if the source object has a checksum, that checksum value will be copied to the new object by default. If the CopyObject request does not include this x-amz-checksum-algorithm header, the checksum algorithm will be copied from the source object to the destination object (if it's present on the source object). You can optionally specify a different checksum algorithm to use with the x-amz-checksum-algorithm header. Unrecognized or unsupported values will respond with the HTTP status code 400 Bad Request.  For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description:
            "Specifies presentational information for the object. Indicates whether an object should be displayed in a web browser or downloaded as a file. It allows specifying the desired filename for the downloaded file",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.  For directory buckets, only the aws-chunked value is supported in this header field",
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
            "A standard MIME type that describes the format of the object data",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source",
          description:
            "Specifies the source object for the copy operation. The source object can be up to 5 GB. If the source object is an object that was uploaded by using a multipart upload, the object copy will be a single part object after the source object is copied to the destination bucket. You specify the value of the copy source in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the general purpose bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL-encoded. To copy the object reports/january.pdf from the directory bucket awsexamplebucket--use1-az5--x-s3, use awsexamplebucket--use1-az5--x-s3/reports/january.pdf. The value must be URL-encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.    Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region.   Access points are not supported by directory buckets.    Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key>. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL-encoded.    If your source bucket versioning is enabled, the x-amz-copy-source header by default identifies the current version of an object to copy. If the current version is a delete marker, Amazon S3 behaves as if the object was deleted. To copy a different version, use the versionId query parameter. Specifically, append ?versionId=<version-id> to the value (for example, awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893). If you don't specify a version ID, Amazon S3 copies the latest version of the source object. If you enable versioning on the destination bucket, Amazon S3 generates a unique version ID for the copied object. This version ID is different from the version ID of the source object. Amazon S3 returns the version ID of the copied object in the x-amz-version-id response header in the response. If you do not enable versioning or suspend it on the destination bucket, the version ID that Amazon S3 generates in the x-amz-version-id response header is always null.   Directory buckets - S3 Versioning isn't enabled and supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-match",
          description:
            "Copies the object if its entity tag (ETag) matches the specified tag.  If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data:    x-amz-copy-source-if-match condition evaluates to true    x-amz-copy-source-if-unmodified-since condition evaluates to false",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-modified-since",
          description:
            "Copies the object if it has been modified since the specified time. If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code:    x-amz-copy-source-if-none-match condition evaluates to false    x-amz-copy-source-if-modified-since condition evaluates to true",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--copy-source-if-none-match",
          description:
            "Copies the object if its entity tag (ETag) is different than the specified ETag. If both the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request and evaluate as follows, Amazon S3 returns the 412 Precondition Failed response code:    x-amz-copy-source-if-none-match condition evaluates to false    x-amz-copy-source-if-modified-since condition evaluates to true",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-unmodified-since",
          description:
            "Copies the object if it hasn't been modified since the specified time.  If both the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request and evaluate as follows, Amazon S3 returns 200 OK and copies the data:    x-amz-copy-source-if-match condition evaluates to true    x-amz-copy-source-if-unmodified-since condition evaluates to false",
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
            "Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to read the object data and its metadata.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the object ACL.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable object.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
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
            "Specifies whether the metadata is copied from the source object or replaced with metadata that's provided in the request. When copying an object, you can preserve all metadata (the default) or specify new metadata. If this header isn\u2019t specified, COPY is the default behavior.   General purpose bucket - For general purpose buckets, when you grant permissions, you can use the s3:x-amz-metadata-directive condition key to enforce certain metadata behavior when objects are uploaded. For more information, see Amazon S3 condition key examples in the Amazon S3 User Guide.   x-amz-website-redirect-location is unique to each object and is not copied when using the x-amz-metadata-directive header. To copy the value, you must specify x-amz-website-redirect-location in the request header",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging-directive",
          description:
            "Specifies whether the object tag-set is copied from the source object or replaced with the tag-set that's provided in the request. The default value is COPY.   Directory buckets - For directory buckets in a CopyObject operation, only the empty tag-set is supported. Any requests that attempt to write non-empty tags into directory buckets will receive a 501 Not Implemented status code. When the destination bucket is a directory bucket, you will receive a 501 Not Implemented response in any of the following situations:   When you attempt to COPY the tag-set from an S3 source object that has non-empty tags.   When you attempt to REPLACE the tag-set of a source object and set a non-empty value to x-amz-tagging.   When you don't set the x-amz-tagging-directive header and the source object has non-empty tags. This is because the default value of x-amz-tagging-directive is COPY.   Because only the empty tag-set is supported for directory buckets in a CopyObject operation, the following situations are allowed:   When you attempt to COPY the tag-set from a directory bucket source object that has no tags to a general purpose bucket. It copies an empty tag-set to the destination object.   When you attempt to REPLACE the tag-set of a directory bucket source object and set the x-amz-tagging value of the directory bucket destination object to empty.   When you attempt to REPLACE the tag-set of a general purpose bucket source object that has non-empty tags and set the x-amz-tagging value of the directory bucket destination object to empty.   When you attempt to REPLACE the tag-set of a directory bucket source object and don't set the x-amz-tagging value of the directory bucket destination object. This is because the default value of x-amz-tagging is the empty value",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption",
          description:
            "The server-side encryption algorithm used when storing this object in Amazon S3. Unrecognized or unsupported values won\u2019t write a destination object and will receive a 400 Bad Request response.  Amazon S3 automatically encrypts all new objects that are copied to an S3 bucket. When copying an object, if you don't specify encryption information in your copy request, the encryption setting of the target object is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a different default encryption configuration, Amazon S3 uses the corresponding encryption key to encrypt the target object copy. With server-side encryption, Amazon S3 encrypts your data as it writes your data to disks in its data centers and decrypts the data when you access it. For more information about server-side encryption, see Using Server-Side Encryption in the Amazon S3 User Guide.  General purpose buckets     For general purpose buckets, there are the following supported options for server-side encryption: server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), and server-side encryption with customer-provided encryption keys (SSE-C). Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the target object copy.   When you perform a CopyObject operation, if you want to use a different type of encryption setting for the target object, you can specify appropriate encryption-related headers to encrypt the target object with an Amazon S3 managed key, a KMS key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence.     Directory buckets     For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads.   To encrypt new object copies to a directory bucket with SSE-KMS, we recommend you specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a customer managed key). The Amazon Web Services managed key (aws/s3) isn't supported. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. After you specify a customer managed key for SSE-KMS, you can't override the customer managed key for the bucket's SSE-KMS configuration. Then, when you perform a CopyObject operation and want to specify server-side encryption settings for new object copies with SSE-KMS in the encryption-related request headers, you must ensure the encryption key is the same customer managed key that you specified for the directory bucket's default encryption configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description:
            "If the x-amz-storage-class header is not used, the copied object will be stored in the STANDARD Storage Class by default. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class.      Directory buckets  - For directory buckets, only the S3 Express One Zone storage class is supported to store newly created objects. Unsupported storage class values won't write a destination object and will respond with the HTTP status code 400 Bad Request.    Amazon S3 on Outposts  - S3 on Outposts only uses the OUTPOSTS Storage Class.    You can use the CopyObject action to change the storage class of an object that is already stored in Amazon S3 by using the x-amz-storage-class header. For more information, see Storage Classes in the Amazon S3 User Guide. Before using an object as a source object for the copy operation, you must restore a copy of it if it meets any of the following conditions:   The storage class of the source object is GLACIER or DEEP_ARCHIVE.   The storage class of the source object is INTELLIGENT_TIERING and it's S3 Intelligent-Tiering access tier is Archive Access or Deep Archive Access.   For more information, see RestoreObject and Copying Objects in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-redirect-location",
          description:
            "If the destination bucket is configured as a website, redirects requests for this object copy to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. This value is unique to each object and is not copied when using the x-amz-metadata-directive header. Instead, you may opt to provide this header in combination with the x-amz-metadata-directive header.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when encrypting the object (for example, AES256). When you perform a CopyObject operation, if you want to use a different type of encryption setting for the target object, you can specify appropriate encryption-related headers to encrypt the target object with an Amazon S3 managed key, a KMS key, or a customer-provided key. If the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence.   This functionality is not supported when the destination bucket is a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded. Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported when the destination bucket is a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported when the destination bucket is a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. All GET and PUT requests for an object protected by KMS will fail if they're not made via SSL or using SigV4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide.  Directory buckets - If you specify x-amz-server-side-encryption with aws:kms, the  x-amz-server-side-encryption-aws-kms-key-id header is implicitly assigned the ID of the KMS symmetric encryption customer managed key that's configured for your directory bucket's default encryption setting. If you want to specify the  x-amz-server-side-encryption-aws-kms-key-id header explicitly, you can only specify it with the ID (Key ID or Key ARN) of the KMS customer managed key that's configured for your directory bucket's default encryption setting. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for the destination object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.  General purpose buckets - This value must be explicitly added to specify encryption context for CopyObject requests if you want an additional encryption context for your destination object. The additional encryption context of the source object won't be copied to the destination object. For more information, see Encryption context in the Amazon S3 User Guide.  Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with a COPY action doesn\u2019t affect bucket-level settings for S3 Bucket Key. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.   Directory buckets - S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). If a target object uses SSE-KMS, you can enable an S3 Bucket Key for the object. Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Specifying this header with a COPY action doesn\u2019t affect bucket-level settings for S3 Bucket Key. For more information, see Amazon S3 Bucket Keys in the Amazon S3 User Guide.   Directory buckets - S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--copy-source-sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when decrypting the source object (for example, AES256). If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying.  This functionality is not supported when the source object is in a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be the same one that was used when the source object was created. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying.  This functionality is not supported when the source object is in a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. If the source object for the copy is stored in Amazon S3 using SSE-C, you must provide the necessary encryption information in your request so that Amazon S3 can decrypt the object for copying.  This functionality is not supported when the source object is in a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description:
            "The tag-set for the object copy in the destination bucket. This value must be used in conjunction with the x-amz-tagging-directive if you choose REPLACE for the x-amz-tagging-directive. If you choose COPY for the x-amz-tagging-directive, you don't need to set the x-amz-tagging header, because the tag-set will be copied from the source object directly. The tag-set must be encoded as URL Query parameters. The default value is the empty value.   Directory buckets - For directory buckets in a CopyObject operation, only the empty tag-set is supported. Any requests that attempt to write non-empty tags into directory buckets will receive a 501 Not Implemented status code. When the destination bucket is a directory bucket, you will receive a 501 Not Implemented response in any of the following situations:   When you attempt to COPY the tag-set from an S3 source object that has non-empty tags.   When you attempt to REPLACE the tag-set of a source object and set a non-empty value to x-amz-tagging.   When you don't set the x-amz-tagging-directive header and the source object has non-empty tags. This is because the default value of x-amz-tagging-directive is COPY.   Because only the empty tag-set is supported for directory buckets in a CopyObject operation, the following situations are allowed:   When you attempt to COPY the tag-set from a directory bucket source object that has no tags to a general purpose bucket. It copies an empty tag-set to the destination object.   When you attempt to REPLACE the tag-set of a directory bucket source object and set the x-amz-tagging value of the directory bucket destination object to empty.   When you attempt to REPLACE the tag-set of a general purpose bucket source object that has non-empty tags and set the x-amz-tagging value of the directory bucket destination object to empty.   When you attempt to REPLACE the tag-set of a directory bucket source object and don't set the x-amz-tagging value of the directory bucket destination object. This is because the default value of x-amz-tagging is the empty value",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "The Object Lock mode that you want to apply to the object copy.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "The date and time when you want the Object Lock of the object copy to expire.  This functionality is not supported for directory buckets",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Specifies whether you want to apply a legal hold to the object copy.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-source-bucket-owner",
          description:
            "The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This action creates an Amazon S3 bucket. To create an Amazon S3 on Outposts bucket, see  CreateBucket .  Creates a new S3 bucket. To create a bucket, you must set up Amazon S3 and have a valid Amazon Web Services Access Key ID to authenticate requests. Anonymous requests are never allowed to create buckets. By creating the bucket, you become the bucket owner. There are two types of buckets: general purpose buckets and directory buckets. For more information about these bucket types, see Creating, configuring, and working with Amazon S3 buckets in the Amazon S3 User Guide.     General purpose buckets - If you send your CreateBucket request to the s3.amazonaws.com global endpoint, the request goes to the us-east-1 Region. So the signature calculations in Signature Version 4 must use us-east-1 as the Region, even if the location constraint in the request specifies another Region where the bucket is to be created. If you create a bucket in a Region other than US East (N. Virginia), your application must be able to handle 307 redirect. For more information, see Virtual hosting of buckets in the Amazon S3 User Guide.    Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     Permissions     General purpose bucket permissions - In addition to the s3:CreateBucket permission, the following permissions are required in a policy when your CreateBucket request includes specific headers:     Access control lists (ACLs) - In your CreateBucket request, if you specify an access control list (ACL) and set it to public-read, public-read-write, authenticated-read, or if you explicitly specify any other custom ACLs, both s3:CreateBucket and s3:PutBucketAcl permissions are required. In your CreateBucket request, if you set the ACL to private, or if you don't specify any ACLs, only the s3:CreateBucket permission is required.     Object Lock - In your CreateBucket request, if you set x-amz-bucket-object-lock-enabled to true, the s3:PutBucketObjectLockConfiguration and s3:PutBucketVersioning permissions are required.    S3 Object Ownership - If your CreateBucket request includes the x-amz-object-ownership header, then the s3:PutBucketOwnershipControls permission is required.   To set an ACL on a bucket as part of a CreateBucket request, you must explicitly set S3 Object Ownership for the bucket to a different value than the default, BucketOwnerEnforced. Additionally, if your desired bucket ACL grants public access, you must first create the bucket (without the bucket ACL) and then explicitly disable Block Public Access on the bucket before using PutBucketAcl to set the ACL. If you try to create a bucket with a public ACL, the request will fail.   For the majority of modern use cases in S3, we recommend that you keep all Block Public Access settings enabled and keep ACLs disabled. If you would like to share data with users outside of your account, you can use bucket policies as needed. For more information, see Controlling ownership of objects and disabling ACLs for your bucket  and Blocking public access to your Amazon S3 storage  in the Amazon S3 User Guide.      S3 Block Public Access - If your specific use case requires granting public access to your S3 resources, you can disable Block Public Access. Specifically, you can create a new bucket with Block Public Access enabled, then separately call the  DeletePublicAccessBlock  API. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about S3 Block Public Access, see Blocking public access to your Amazon S3 storage  in the Amazon S3 User Guide.       Directory bucket permissions - You must have the s3express:CreateBucket permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.  The permissions for ACLs, Object Lock, S3 Object Ownership, and S3 Block Public Access are not supported for directory buckets. For directory buckets, all Block Public Access settings are enabled at the bucket level and S3 Object Ownership is set to Bucket owner enforced (ACLs disabled). These settings can't be modified.  For more information about permissions for creating and working with directory buckets, see Directory buckets in the Amazon S3 User Guide. For more information about supported S3 features for directory buckets, see Features of S3 Express One Zone in the Amazon S3 User Guide.     HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to CreateBucket:    PutObject     DeleteBucket",
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the bucket.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket to create.  General purpose buckets - For information about bucket naming restrictions, see Bucket naming rules in the Amazon S3 User Guide.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
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
            "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to list the objects in the bucket.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the bucket ACL.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write",
          description:
            "Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable bucket.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-enabled-for-bucket",
          description:
            "Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This functionality is not supported for directory buckets",
        },
        {
          name: "--no-object-lock-enabled-for-bucket",
          description:
            "Specifies whether you want S3 Object Lock to be enabled for the new bucket.  This functionality is not supported for directory buckets",
        },
        {
          name: "--object-ownership",
          description:
            "The container element for object ownership for a bucket's ownership controls.  BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the bucket-owner-full-control canned ACL.  ObjectWriter - The uploading account will own the object if the object is uploaded with the bucket-owner-full-control canned ACL.  BucketOwnerEnforced - Access control lists (ACLs) are disabled and no longer affect permissions. The bucket owner automatically owns and has full control over every object in the bucket. The bucket only accepts PUT requests that don't specify an ACL or specify bucket owner full control ACLs (such as the predefined bucket-owner-full-control canned ACL or a custom ACL in XML format that grants the same permissions). By default, ObjectOwnership is set to BucketOwnerEnforced and ACLs are disabled. We recommend keeping ACLs disabled, except in uncommon use cases where you must control access for each object individually. For more information about S3 Object Ownership, see Controlling ownership of objects and disabling ACLs for your bucket in the Amazon S3 User Guide.   This functionality is not supported for directory buckets. Directory buckets use the bucket owner enforced setting for S3 Object Ownership",
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
      name: "create-bucket-metadata-table-configuration",
      description:
        "Creates a metadata table configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide.   Permissions  To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see  Integrating Amazon S3 Tables with Amazon Web Services analytics services in the Amazon S3 User Guide.    s3:CreateBucketMetadataTableConfiguration     s3tables:CreateNamespace     s3tables:GetTable     s3tables:CreateTable     s3tables:PutTablePolicy      The following operations are related to CreateBucketMetadataTableConfiguration:    DeleteBucketMetadataTableConfiguration     GetBucketMetadataTableConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The general purpose bucket that you want to create the metadata table configuration in",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-md5",
          description:
            "The Content-MD5 header for the metadata table configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "The checksum algorithm to use with your metadata table configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-table-configuration",
          description: "The contents of your metadata table configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The expected owner of the general purpose bucket that contains your metadata table configuration",
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
      name: "create-multipart-upload",
      description:
        "This action initiates a multipart upload and returns an upload ID. This upload ID is used to associate all of the parts in the specific multipart upload. You specify this upload ID in each of your subsequent upload part requests (see UploadPart). You also include this upload ID in the final request to either complete or abort the multipart upload request. For more information about multipart uploads, see Multipart Upload Overview in the Amazon S3 User Guide.  After you initiate a multipart upload and upload one or more parts, to stop being charged for storing the uploaded parts, you must either complete or abort the multipart upload. Amazon S3 frees up the space used to store the parts and stops charging you for storing them only after you either complete or abort a multipart upload.   If you have configured a lifecycle rule to abort incomplete multipart uploads, the created multipart upload must be completed within the number of days specified in the bucket lifecycle configuration. Otherwise, the incomplete multipart upload becomes eligible for an abort action and Amazon S3 aborts the multipart upload. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration.     Directory buckets  - S3 Lifecycle is not supported by directory buckets.    Directory buckets  - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     Request signing  For request signing, multipart upload is just a series of regular requests. You initiate a multipart upload, send one or more requests to upload parts, and then complete the multipart upload process. You sign each request individually. There is nothing special about signing multipart upload requests. For more information about signing, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 User Guide.  Permissions     General purpose bucket permissions - To perform a multipart upload with encryption using an Key Management Service (KMS) KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    Encryption     General purpose buckets - Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. Amazon S3 automatically encrypts all new objects that are uploaded to an S3 bucket. When doing a multipart upload, if you don't specify encryption information in your request, the encryption setting of the uploaded parts is set to the default encryption configuration of the destination bucket. By default, all buckets have a base level of encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3). If the destination bucket has a default encryption configuration that uses server-side encryption with an Key Management Service (KMS) key (SSE-KMS), or a customer-provided encryption key (SSE-C), Amazon S3 uses the corresponding KMS key, or a customer-provided key to encrypt the uploaded parts. When you perform a CreateMultipartUpload operation, if you want to use a different type of encryption setting for the uploaded parts, you can request that Amazon S3 encrypts the object with a different encryption key (such as an Amazon S3 managed key, a KMS key, or a customer-provided key). When the encryption setting in your request is different from the default encryption configuration of the destination bucket, the encryption setting in your request takes precedence. If you choose to provide your own encryption key, the request headers you provide in UploadPart and UploadPartCopy requests must match the headers you used in the CreateMultipartUpload request.   Use KMS keys (SSE-KMS) that include the Amazon Web Services managed key (aws/s3) and KMS customer managed keys stored in Key Management Service (KMS) \u2013 If you want Amazon Web Services to manage the keys used to encrypt data, specify the following headers in the request.    x-amz-server-side-encryption     x-amz-server-side-encryption-aws-kms-key-id     x-amz-server-side-encryption-context       If you specify x-amz-server-side-encryption:aws:kms, but don't provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3 key) in KMS to protect the data.   To perform a multipart upload with encryption by using an Amazon Web Services KMS key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey* actions on the key. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information, see Multipart upload API and permissions and Protecting data using server-side encryption with Amazon Web Services KMS in the Amazon S3 User Guide.   If your Identity and Access Management (IAM) user or role is in the same Amazon Web Services account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role is in a different account from the key, then you must have the permissions on both the key policy and your IAM user or role.   All GET and PUT requests for an object protected by KMS fail if you don't make them by using Secure Sockets Layer (SSL), Transport Layer Security (TLS), or Signature Version 4. For information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see Specifying the Signature Version in Request Authentication in the Amazon S3 User Guide.    For more information about server-side encryption with KMS keys (SSE-KMS), see Protecting Data Using Server-Side Encryption with KMS keys in the Amazon S3 User Guide.   Use customer-provided encryption keys (SSE-C) \u2013 If you want to manage your own encryption keys, provide all the following headers in the request.    x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about server-side encryption with customer-provided encryption keys (SSE-C), see  Protecting data using server-side encryption with customer-provided encryption keys (SSE-C) in the Amazon S3 User Guide.      Directory buckets - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket.   When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket.    For directory buckets, when you perform a CreateMultipartUpload operation and an UploadPartCopy operation, the request headers you provide in the CreateMultipartUpload request must match the default encryption configuration of the destination bucket.      HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to CreateMultipartUpload:    UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the object. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. For more information, see Canned ACL in the Amazon S3 User Guide. By default, all objects are private. Only the owner has full access control. When uploading an object, you can grant access permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the access control list (ACL) on the new object. For more information, see Using ACLs. One way to grant the permissions using the request headers is to specify a canned ACL with the x-amz-acl request header.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description:
            "The name of the bucket where the multipart upload is initiated and where the object is uploaded.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.  For directory buckets, only the aws-chunked value is supported in this header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language that the content is in",
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
            'Specify access permissions explicitly to give the grantee READ, READ_ACP, and WRITE_ACP permissions on the object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an Amazon Web Services account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts',
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            'Specify access permissions explicitly to allow grantee to read the object data and its metadata. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an Amazon Web Services account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts',
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            'Specify access permissions explicitly to allows grantee to read the object ACL. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an Amazon Web Services account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts',
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            'Specify access permissions explicitly to allows grantee to allow grantee to write the ACL for the applicable object. By default, all objects are private. Only the owner has full access control. When uploading an object, you can use this header to explicitly grant access permissions to specific Amazon Web Services accounts or groups. This header maps to specific permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an Amazon Web Services account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants the Amazon Web Services accounts identified by account IDs permissions to read object data and its metadata:  x-amz-grant-read: id="11112222333", id="444455556666"      This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts',
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
            "The server-side encryption algorithm used when you store this object in Amazon S3 (for example, AES256, aws:kms).    Directory buckets  - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads.  In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket.   When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description:
            "By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide.    For directory buckets, only the S3 Express One Zone storage class is supported to store newly created objects.   Amazon S3 on Outposts only uses the OUTPOSTS Storage Class",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-redirect-location",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID.  General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data.  Directory buckets - If you specify x-amz-server-side-encryption with aws:kms, the  x-amz-server-side-encryption-aws-kms-key-id header is implicitly assigned the ID of the KMS symmetric encryption customer managed key that's configured for your directory bucket's default encryption setting. If you want to specify the  x-amz-server-side-encryption-aws-kms-key-id header explicitly, you can only specify it with the ID (Key ID or Key ARN) of the KMS customer managed key that's configured for your directory bucket's default encryption setting. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of this header is a Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.  Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS).  General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key.  Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS).  General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key.  Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description:
            "The tag-set for the object. The tag-set must be encoded as URL Query parameters.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "Specifies the Object Lock mode that you want to apply to the uploaded object.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "Specifies the date and time when you want the Object Lock to expire.  This functionality is not supported for directory buckets",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Specifies whether you want to apply a legal hold to the uploaded object.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm that you want Amazon S3 to use to create the checksum for the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
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
      name: "create-session",
      description:
        "Creates a session that establishes temporary security credentials to support fast authentication and authorization for the Zonal endpoint API operations on directory buckets. For more information about Zonal endpoint API operations that include the Availability Zone in the request endpoint, see S3 Express One Zone APIs in the Amazon S3 User Guide.  To make Zonal endpoint API requests on a directory bucket, use the CreateSession API operation. Specifically, you grant s3express:CreateSession permission to a bucket in a bucket policy or an IAM identity-based policy. Then, you use IAM credentials to make the CreateSession API request on the bucket, which returns temporary security credentials that include the access key ID, secret access key, session token, and expiration. These credentials have associated permissions to access the Zonal endpoint API operations. After the session is created, you don\u2019t need to use other policies to grant permissions to each Zonal endpoint API individually. Instead, in your Zonal endpoint API requests, you sign your requests by applying the temporary security credentials of the session to the request headers and following the SigV4 protocol for authentication. You also apply the session token to the x-amz-s3session-token request header for authorization. Temporary security credentials are scoped to the bucket and expire after 5 minutes. After the expiration time, any calls that you make with those credentials will fail. You must use IAM credentials again to make a CreateSession API request that generates a new set of temporary credentials for use. Temporary credentials cannot be extended or refreshed beyond the original specified interval. If you use Amazon Web Services SDKs, SDKs handle the session token refreshes automatically to avoid service interruptions when a session expires. We recommend that you use the Amazon Web Services SDKs to initiate and manage requests to the CreateSession API. For more information, see Performance guidelines and design patterns in the Amazon S3 User Guide.    You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     CopyObject API operation - Unlike other Zonal endpoint API operations, the CopyObject API operation doesn't use the temporary security credentials returned from the CreateSession API operation for authentication and authorization. For information about authentication and authorization of the CopyObject API operation on directory buckets, see CopyObject.     HeadBucket API operation - Unlike other Zonal endpoint API operations, the HeadBucket API operation doesn't use the temporary security credentials returned from the CreateSession API operation for authentication and authorization. For information about authentication and authorization of the HeadBucket API operation on directory buckets, see HeadBucket.     Permissions  To obtain temporary security credentials, you must create a bucket policy or an IAM identity-based policy that grants s3express:CreateSession permission to the bucket. In a policy, you can have the s3express:SessionMode condition key to control who can create a ReadWrite or ReadOnly session. For more information about ReadWrite or ReadOnly sessions, see  x-amz-create-session-mode . For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide.  To grant cross-account access to Zonal endpoint API operations, the bucket policy should also grant both accounts the s3express:CreateSession permission. If you want to encrypt objects with SSE-KMS, you must also have the kms:GenerateDataKey and the kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the target KMS key.  Encryption  For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. For Zonal endpoint (object-level) API operations except CopyObject and UploadPartCopy, you authenticate and authorize requests through CreateSession for low latency. To encrypt new objects in a directory bucket with SSE-KMS, you must specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a customer managed key). Then, when a session is created for Zonal endpoint API operations, new objects are automatically encrypted and decrypted with SSE-KMS and S3 Bucket Keys during the session.   Only 1 customer managed key is supported per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported. After you specify SSE-KMS as your bucket's default encryption configuration with a customer managed key, you can't change the customer managed key for the bucket's SSE-KMS configuration.   In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, you can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) from the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket.   When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. Also, in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), it's not supported to override the values of the encryption settings from the CreateSession request.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com",
      options: [
        {
          name: "--session-mode",
          description:
            "Specifies the mode of the session that will be created, either ReadWrite or ReadOnly. By default, a ReadWrite session is created. A ReadWrite session is capable of executing all the Zonal endpoint API operations on a directory bucket. A ReadOnly session is constrained to execute the following Zonal endpoint API operations: GetObject, HeadObject, ListObjectsV2, GetObjectAttributes, ListParts, and ListMultipartUploads",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket",
          description: "The name of the bucket that you create a session for",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption",
          description:
            "The server-side encryption algorithm to use when you store objects in the directory bucket. For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). By default, Amazon S3 encrypts data with SSE-S3. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "If you specify x-amz-server-side-encryption with aws:kms, you must specify the  x-amz-server-side-encryption-aws-kms-key-id header with the ID (Key ID or Key ARN) of the KMS symmetric encryption customer managed key to use. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Also, if the KMS key doesn't exist in the same account that't issuing the command, you must use the full Key ARN not the Key ID.  Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object.  General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide.  Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using KMS keys (SSE-KMS). S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using KMS keys (SSE-KMS). S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted.     Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed.    Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     Permissions     General purpose bucket permissions - You must have the s3:DeleteBucket permission on the specified bucket in a policy.    Directory bucket permissions - You must have the s3express:DeleteBucket permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to DeleteBucket:    CreateBucket     DeleteObject",
      options: [
        {
          name: "--bucket",
          description:
            "Specifies the bucket being deleted.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        "This operation is not supported for directory buckets.  Deletes an analytics configuration for the bucket (specified by the analytics configuration ID). To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 analytics feature, see Amazon S3 Analytics \u2013 Storage Class Analysis.  The following operations are related to DeleteBucketAnalyticsConfiguration:    GetBucketAnalyticsConfiguration     ListBucketAnalyticsConfigurations     PutBucketAnalyticsConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Deletes the cors configuration information set for the bucket. To use this operation, you must have permission to perform the s3:PutBucketCORS action. The bucket owner has this permission by default and can grant this permission to others.  For information about cors, see Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide.  Related Resources     PutBucketCors     RESTOPTIONSobject",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This implementation of the DELETE action resets the default encryption for the bucket as server-side encryption with Amazon S3 managed keys (SSE-S3).     General purpose buckets - For information about the bucket default encryption feature, see Amazon S3 Bucket Default Encryption in the Amazon S3 User Guide.    Directory buckets - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. For information about the default encryption configuration in directory buckets, see Setting default server-side encryption behavior for directory buckets.     Permissions     General purpose bucket permissions - The s3:PutEncryptionConfiguration permission is required in a policy. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Operations and Managing Access Permissions to Your Amazon S3 Resources.    Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutEncryptionConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to DeleteBucketEncryption:    PutBucketEncryption     GetBucketEncryption",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the server-side encryption configuration to delete.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        "This operation is not supported for directory buckets.  Deletes the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to DeleteBucketIntelligentTieringConfiguration include:     GetBucketIntelligentTieringConfiguration     PutBucketIntelligentTieringConfiguration     ListBucketIntelligentTieringConfigurations",
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
        "This operation is not supported for directory buckets.  Deletes an inventory configuration (identified by the inventory ID) from the bucket. To use this operation, you must have permissions to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. Operations related to DeleteBucketInventoryConfiguration include:     GetBucketInventoryConfiguration     PutBucketInventoryConfiguration     ListBucketInventoryConfigurations",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Deletes the lifecycle configuration from the specified bucket. Amazon S3 removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration.  Permissions     General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:PutLifecycleConfiguration permission. For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources.      Directory bucket permissions - You must have the s3express:PutLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.       HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region.amazonaws.com.   For more information about the object expiration, see Elements to Describe Lifecycle Actions. Related actions include:    PutBucketLifecycleConfiguration     GetBucketLifecycleConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations",
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
      name: "delete-bucket-metadata-table-configuration",
      description:
        "Deletes a metadata table configuration from a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide.   Permissions  To use this operation, you must have the s3:DeleteBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide.    The following operations are related to DeleteBucketMetadataTableConfiguration:    CreateBucketMetadataTableConfiguration     GetBucketMetadataTableConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The general purpose bucket that you want to remove the metadata table configuration from",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The expected bucket owner of the general purpose bucket that you want to remove the metadata table configuration from",
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
        "This operation is not supported for directory buckets.  Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.  To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch.  The following operations are related to DeleteBucketMetricsConfiguration:    GetBucketMetricsConfiguration     PutBucketMetricsConfiguration     ListBucketMetricsConfigurations     Monitoring Metrics with Amazon CloudWatch",
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
          description:
            "The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Removes OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy. For information about Amazon S3 Object Ownership, see Using Object Ownership.  The following operations are related to DeleteBucketOwnershipControls:    GetBucketOwnershipControls     PutBucketOwnershipControls",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Deletes the policy of a specified bucket.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions  If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the DeleteBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have DeleteBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.  To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.     General purpose bucket permissions - The s3:DeleteBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation, you must have the s3express:DeleteBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to DeleteBucketPolicy     CreateBucket     DeleteObject",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        "This operation is not supported for directory buckets.   Deletes the replication configuration from the bucket. To use this operation, you must have permissions to perform the s3:PutReplicationConfiguration action. The bucket owner has these permissions by default and can grant it to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.   It can take a while for the deletion of a replication configuration to fully propagate.   For information about replication configuration, see Replication in the Amazon S3 User Guide. The following operations are related to DeleteBucketReplication:    PutBucketReplication     GetBucketReplication",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Deletes the tags from the bucket. To use this operation, you must have permission to perform the s3:PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  The following operations are related to DeleteBucketTagging:    GetBucketTagging     PutBucketTagging",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  This action removes the website configuration for a bucket. Amazon S3 returns a 200 OK response upon successfully deleting a website configuration on the specified bucket. You will get a 200 OK response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a 404 response if the bucket specified in the request does not exist. This DELETE action requires the S3:DeleteBucketWebsite permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the S3:DeleteBucketWebsite permission.  For more information about hosting websites, see Hosting Websites on Amazon S3.  The following operations are related to DeleteBucketWebsite:    GetBucketWebsite     PutBucketWebsite",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Removes an object from a bucket. The behavior depends on the bucket's versioning state:    If bucket versioning is not enabled, the operation permanently deletes the object.   If bucket versioning is enabled, the operation inserts a delete marker, which becomes the current version of the object. To permanently delete an object in a versioned bucket, you must include the object\u2019s versionId in the request. For more information about versioning-enabled buckets, see Deleting object versions from a versioning-enabled bucket.   If bucket versioning is suspended, the operation removes the object that has a null versionId, if there is one, and inserts a delete marker that becomes the current version of the object. If there isn't an object with a null versionId, and all versions of the object have a versionId, Amazon S3 does not remove the object and only inserts a delete marker. To permanently delete an object that has a versionId, you must include the object\u2019s versionId in the request. For more information about versioning-suspended buckets, see Deleting objects from versioning-suspended buckets.       Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request.    Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.    To remove a specific version, you must use the versionId query parameter. Using this query parameter permanently deletes the version. If the object deleted is a delete marker, Amazon S3 sets the response header x-amz-delete-marker to true.  If the object you want to delete is in a bucket where the bucket versioning configuration is MFA Delete enabled, you must include the x-amz-mfa request header in the DELETE versionId request. Requests that include x-amz-mfa must use HTTPS. For more information about MFA Delete, see Using MFA Delete in the Amazon S3 User Guide. To see sample requests that use versioning, see Sample Request.    Directory buckets - MFA delete is not supported by directory buckets.  You can delete objects by explicitly calling DELETE Object or calling (PutBucketLifecycle) to enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them the s3:DeleteObject, s3:DeleteObjectVersion, and s3:PutLifeCycleConfiguration actions.    Directory buckets - S3 Lifecycle is not supported by directory buckets.   Permissions     General purpose bucket permissions - The following permissions are required in your policies when your DeleteObjects request includes specific headers.     s3:DeleteObject  - To delete an object from a bucket, you must always have the s3:DeleteObject permission.     s3:DeleteObjectVersion  - To delete a specific version of an object from a versioning-enabled bucket, you must have the s3:DeleteObjectVersion permission.      Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following action is related to DeleteObject:    PutObject",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name of the bucket containing the object.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "Version ID used to reference a specific version of the object.  For directory buckets in this API operation, only the null value of the version ID is supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-governance-retention",
          description:
            "Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation. To use this header, you must have the s3:BypassGovernanceRetention permission.  This functionality is not supported for directory buckets",
        },
        {
          name: "--no-bypass-governance-retention",
          description:
            "Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation. To use this header, you must have the s3:BypassGovernanceRetention permission.  This functionality is not supported for directory buckets",
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The If-Match header field makes the request method conditional on ETags. If the ETag value does not match, the operation returns a 412 Precondition Failed error. If the ETag matches or if the object doesn't exist, the operation will return a 204 Success (No Content) response. For more information about conditional requests, see RFC 7232.  This functionality is only supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match-last-modified-time",
          description:
            "If present, the object is deleted only if its modification times matches the provided Timestamp. If the Timestamp values do not match, the operation returns a 412 Precondition Failed error. If the Timestamp matches or if the object doesn\u2019t exist, the operation returns a 204 Success (No Content) response.  This functionality is only supported for directory buckets",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--if-match-size",
          description:
            "If present, the object is deleted only if its size matches the provided size in bytes. If the Size value does not match, the operation returns a 412 Precondition Failed error. If the Size matches or if the object doesn\u2019t exist, the operation returns a 204 Success (No Content) response.  This functionality is only supported for directory buckets.   You can use the If-Match, x-amz-if-match-last-modified-time and x-amz-if-match-size conditional headers in conjunction with each-other or individually",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "This operation is not supported for directory buckets.  Removes the entire tag set from the specified object. For more information about managing object tags, see  Object Tagging. To use this operation, you must have permission to perform the s3:DeleteObjectTagging action. To delete tags of a specific object version, add the versionId query parameter in the request. You will need permission for the s3:DeleteObjectVersionTagging action. The following operations are related to DeleteObjectTagging:    PutObjectTagging     GetObjectTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the objects from which to remove the tags.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this operation provides a suitable alternative to sending individual delete requests, reducing per-request overhead. The request can contain a list of up to 1000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete operation and returns the result of that delete, success or failure, in the response. Note that if the object specified in the request is not found, Amazon S3 returns the result as deleted.     Directory buckets - S3 Versioning isn't enabled and supported for directory buckets.    Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.    The operation supports two modes for the response: verbose and quiet. By default, the operation uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete operation encountered an error. For a successful deletion in a quiet mode, the operation does not return any information about the delete in the response body. When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see MFA Delete in the Amazon S3 User Guide.   Directory buckets - MFA delete is not supported by directory buckets.   Permissions     General purpose bucket permissions - The following permissions are required in your policies when your DeleteObjects request includes specific headers.     s3:DeleteObject  - To delete an object from a bucket, you must always specify the s3:DeleteObject permission.     s3:DeleteObjectVersion  - To delete a specific version of an object from a versioning-enabled bucket, you must specify the s3:DeleteObjectVersion permission.      Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    Content-MD5 request header     General purpose bucket - The Content-MD5 request header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit.    Directory bucket - The Content-MD5 request header or a additional checksum request header (including x-amz-checksum-crc32, x-amz-checksum-crc32c, x-amz-checksum-sha1, or x-amz-checksum-sha256) is required for all Multi-Object Delete requests.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to DeleteObjects:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the objects to delete.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. Required to permanently delete a versioned object if versioning is configured with MFA delete enabled. When performing the DeleteObjects operation on an MFA delete enabled bucket, which attempts to delete the specified versioned objects, you must include an MFA token. If you don't provide an MFA token, the entire request will fail, even if there are non-versioned objects that you are trying to delete. If you provide an invalid token, whether there are versioned object keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see  MFA Delete in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--bypass-governance-retention",
          description:
            "Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the s3:BypassGovernanceRetention permission.  This functionality is not supported for directory buckets",
        },
        {
          name: "--no-bypass-governance-retention",
          description:
            "Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. To use this header, you must have the s3:BypassGovernanceRetention permission.  This functionality is not supported for directory buckets",
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm  or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm  header, replace  algorithm  with the supported algorithm from the following list:     CRC32     CRC32C     SHA1     SHA256    For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm  doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 ignores any provided ChecksumAlgorithm parameter and uses the checksum algorithm that matches the provided value in x-amz-checksum-algorithm . If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
        "This operation is not supported for directory buckets.  Removes the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. The following operations are related to DeletePublicAccessBlock:    Using Amazon S3 Block Public Access     GetPublicAccessBlock     PutPublicAccessBlock     GetBucketPolicyStatus",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  This implementation of the GET action uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to and from Amazon S3. To use this operation, you must have permission to perform the s3:GetAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. You set the Transfer Acceleration state of an existing bucket to Enabled or Suspended by using the PutBucketAccelerateConfiguration operation.  A GET accelerate request does not return a state value for a bucket that has no transfer acceleration state. A bucket has no Transfer Acceleration state if a state has never been set on the bucket.  For more information about transfer acceleration, see Transfer Acceleration in the Amazon S3 User Guide. The following operations are related to GetBucketAccelerateConfiguration:    PutBucketAccelerateConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
        "This operation is not supported for directory buckets.  This implementation of the GET action uses the acl subresource to return the access control list (ACL) of a bucket. To use GET to return the ACL of the bucket, you must have the READ_ACP access to the bucket. If READ_ACP permission is granted to the anonymous user, you can return the ACL of the bucket without using an authorization header. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see  Controlling object ownership and disabling ACLs in the Amazon S3 User Guide.  The following operations are related to GetBucketAcl:    ListObjects",
      options: [
        {
          name: "--bucket",
          description:
            "Specifies the S3 bucket whose ACL is being requested. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  This implementation of the GET action returns an analytics configuration (identified by the analytics configuration ID) from the bucket. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see  Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  For information about Amazon S3 analytics feature, see Amazon S3 Analytics \u2013 Storage Class Analysis in the Amazon S3 User Guide. The following operations are related to GetBucketAnalyticsConfiguration:    DeleteBucketAnalyticsConfiguration     ListBucketAnalyticsConfigurations     PutBucketAnalyticsConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.  To use this operation, you must have permission to perform the s3:GetBucketCORS action. By default, the bucket owner has this permission and can grant it to others. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  For more information about CORS, see  Enabling Cross-Origin Resource Sharing. The following operations are related to GetBucketCors:    PutBucketCors     DeleteBucketCors",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name for which to get the cors configuration. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Returns the default encryption configuration for an Amazon S3 bucket. By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3).      General purpose buckets - For information about the bucket default encryption feature, see Amazon S3 Bucket Default Encryption in the Amazon S3 User Guide.    Directory buckets - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. For information about the default encryption configuration in directory buckets, see Setting default server-side encryption behavior for directory buckets.     Permissions     General purpose bucket permissions - The s3:GetEncryptionConfiguration permission is required in a policy. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Operations and Managing Access Permissions to Your Amazon S3 Resources.    Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetEncryptionConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to GetBucketEncryption:    PutBucketEncryption     DeleteBucketEncryption",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket from which the server-side encryption configuration is retrieved.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        "This operation is not supported for directory buckets.  Gets the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to GetBucketIntelligentTieringConfiguration include:     DeleteBucketIntelligentTieringConfiguration     PutBucketIntelligentTieringConfiguration     ListBucketIntelligentTieringConfigurations",
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
        "This operation is not supported for directory buckets.  Returns an inventory configuration (identified by the inventory configuration ID) from the bucket. To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. The following operations are related to GetBucketInventoryConfiguration:    DeleteBucketInventoryConfiguration     ListBucketInventoryConfigurations     PutBucketInventoryConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "For an updated version of this API, see GetBucketLifecycleConfiguration. If you configured a bucket lifecycle using the filter element, you should see the updated version of this topic. This topic is provided for backward compatibility.   This operation is not supported for directory buckets.  Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management.  To use this operation, you must have permission to perform the s3:GetLifecycleConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  GetBucketLifecycle has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycle:    GetBucketLifecycleConfiguration     PutBucketLifecycle     DeleteBucketLifecycle",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management. Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API, which is compatible with the new functionality. The previous version of the API supported filtering based only on an object key name prefix, which is supported for general purpose buckets for backward compatibility. For the related API description, see GetBucketLifecycle.  Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects, transitions and tag filters are not supported.   Permissions     General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:GetLifecycleConfiguration permission. For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources.      Directory bucket permissions - You must have the s3express:GetLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region.amazonaws.com.    GetBucketLifecycleConfiguration has the following special error:   Error code: NoSuchLifecycleConfiguration    Description: The lifecycle configuration does not exist.   HTTP Status Code: 404 Not Found   SOAP Fault Code Prefix: Client     The following operations are related to GetBucketLifecycleConfiguration:    GetBucketLifecycle     PutBucketLifecycle     DeleteBucketLifecycle",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations",
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
        "This operation is not supported for directory buckets.  Returns the Region the bucket resides in. You set the bucket's Region using the LocationConstraint request parameter in a CreateBucket request. For more information, see CreateBucket. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  We recommend that you use HeadBucket to return the Region that a bucket resides in. For backward compatibility, Amazon S3 continues to support GetBucketLocation.  The following operations are related to GetBucketLocation:    GetObject     CreateBucket",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the location. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the logging status of a bucket and the permissions users have to view and modify that status. The following operations are related to GetBucketLogging:    CreateBucket     PutBucketLogging",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
      name: "get-bucket-metadata-table-configuration",
      description:
        "Retrieves the metadata table configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide.   Permissions  To use this operation, you must have the s3:GetBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide.    The following operations are related to GetBucketMetadataTableConfiguration:    CreateBucketMetadataTableConfiguration     DeleteBucketMetadataTableConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The general purpose bucket that contains the metadata table configuration that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The expected owner of the general purpose bucket that you want to retrieve the metadata table configuration from",
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
        "This operation is not supported for directory buckets.  Gets a metrics configuration (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics.  To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to GetBucketMetricsConfiguration:    PutBucketMetricsConfiguration     DeleteBucketMetricsConfiguration     ListBucketMetricsConfigurations     Monitoring Metrics with Amazon CloudWatch",
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
          description:
            "The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
      description:
        "This operation is not supported for directory buckets.   No longer used, see GetBucketNotificationConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the notification configuration. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the notification configuration of a bucket. If notifications are not enabled on the bucket, the action returns an empty NotificationConfiguration element. By default, you must be the bucket owner to read the notification configuration of a bucket. However, the bucket owner can use a bucket policy to grant permission to other users to read this configuration with the s3:GetBucketNotification permission. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes. For more information about setting and reading the notification configuration on a bucket, see Setting Up Notification of Bucket Events. For more information about bucket policies, see Using Bucket Policies. The following action is related to GetBucketNotification:    PutBucketNotification",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket for which to get the notification configuration. When you use this API operation with an access point, provide the alias of the access point in place of the bucket name. When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Retrieves OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying permissions in a policy.  For information about Amazon S3 Object Ownership, see Using Object Ownership.  The following operations are related to GetBucketOwnershipControls:    PutBucketOwnershipControls     DeleteBucketOwnershipControls",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Returns the policy of a specified bucket.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions  If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the GetBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have GetBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.  To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.     General purpose bucket permissions - The s3:GetBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.    Example bucket policies   General purpose buckets example bucket policies - See Bucket policy examples in the Amazon S3 User Guide.  Directory bucket example bucket policies - See Example bucket policies for S3 Express One Zone in the Amazon S3 User Guide.  HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following action is related to GetBucketPolicy:    GetObject",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name to get the bucket policy for.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide   Access points - When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.  Object Lambda access points - When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  Access points and Object Lambda access points are not supported by directory buckets",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        'This operation is not supported for directory buckets.  Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public. In order to use this operation, you must have the s3:GetBucketPolicyStatus permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  For more information about when Amazon S3 considers a bucket public, see The Meaning of "Public".  The following operations are related to GetBucketPolicyStatus:    Using Amazon S3 Block Public Access     GetPublicAccessBlock     PutPublicAccessBlock     DeletePublicAccessBlock',
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the replication configuration of a bucket.   It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result.    For information about replication configuration, see Replication in the Amazon S3 User Guide. This action requires permissions for the s3:GetReplicationConfiguration action. For more information about permissions, see Using Bucket Policies and User Policies. If you include the Filter element in a replication configuration, you must also include the DeleteMarkerReplication and Priority elements. The response also returns those elements. For information about GetBucketReplication errors, see List of replication-related error codes  The following operations are related to GetBucketReplication:    PutBucketReplication     DeleteBucketReplication",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the request payment configuration of a bucket. To use this version of the operation, you must be the bucket owner. For more information, see Requester Pays Buckets. The following operations are related to GetBucketRequestPayment:    ListObjects",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the tag set associated with the bucket. To use this operation, you must have permission to perform the s3:GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others.  GetBucketTagging has the following special error:   Error code: NoSuchTagSet    Description: There is no tag set associated with the bucket.     The following operations are related to GetBucketTagging:    PutBucketTagging     DeleteBucketTagging",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the versioning state of a bucket. To retrieve the versioning state of a bucket, you must be the bucket owner. This implementation also returns the MFA Delete status of the versioning state. If the MFA Delete status is enabled, the bucket owner must use an authentication device to change the versioning state of the bucket. The following operations are related to GetBucketVersioning:    GetObject     PutObject     DeleteObject",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see Hosting Websites on Amazon S3.  This GET action requires the S3:GetBucketWebsite permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the S3:GetBucketWebsite permission. The following operations are related to GetBucketWebsite:    DeleteBucketWebsite     PutBucketWebsite",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Retrieves an object from Amazon S3. In the GetObject request, specify the full key name for the object.  General purpose buckets - Both the virtual-hosted-style requests and the path-style requests are supported. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg, specify the object key name as /photos/2006/February/sample.jpg. For a path-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket, specify the object key name as /examplebucket/photos/2006/February/sample.jpg. For more information about request types, see HTTP Host Header Bucket Specification in the Amazon S3 User Guide.  Directory buckets - Only virtual-hosted-style requests are supported. For a virtual hosted-style request example, if you have the object photos/2006/February/sample.jpg in the bucket named examplebucket--use1-az5--x-s3, specify the object key name as /photos/2006/February/sample.jpg. Also, when you make requests to this API operation, your requests are sent to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.  Permissions     General purpose bucket permissions - You must have the required permissions in a policy. To use GetObject, you must have the READ access to the object (or version). If you grant READ access to the anonymous user, the GetObject operation returns the object without using an authorization header. For more information, see Specifying permissions in a policy in the Amazon S3 User Guide. If you include a versionId in your request header, you must have the s3:GetObjectVersion permission to access a specific version of an object. The s3:GetObject permission is not required in this scenario. If you request the current version of an object without a specific versionId in the request header, only the s3:GetObject permission is required. The s3:GetObjectVersion permission is not required in this scenario.  If the object that you request doesn\u2019t exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found error.   If you don\u2019t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Access Denied error.      Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession . If the object is encrypted using SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key.    Storage classes  If the object you are retrieving is stored in the S3 Glacier Flexible Retrieval storage class, the S3 Glacier Deep Archive storage class, the S3 Intelligent-Tiering Archive Access tier, or the S3 Intelligent-Tiering Deep Archive Access tier, before you can retrieve the object you must first restore a copy using RestoreObject. Otherwise, this operation returns an InvalidObjectState error. For information about restoring archived objects, see Restoring Archived Objects in the Amazon S3 User Guide.  Directory buckets  - For directory buckets, only the S3 Express One Zone storage class is supported to store newly created objects. Unsupported storage class values won't write a destination object and will respond with the HTTP status code 400 Bad Request.  Encryption  Encryption request headers, like x-amz-server-side-encryption, should not be sent for the GetObject requests, if your object uses server-side encryption with Amazon S3 managed encryption keys (SSE-S3), server-side encryption with Key Management Service (KMS) keys (SSE-KMS), or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS). If you include the header in your GetObject requests for the object that uses these types of keys, you\u2019ll get an HTTP 400 Bad Request error.  Directory buckets - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide.  Overriding response header values through the request  There are times when you want to override certain response header values of a GetObject response. For example, you might override the Content-Disposition response header value through your GetObject request. You can override values for a set of response headers. These modified response header values are included only in a successful response, that is, when the HTTP status code 200 OK is returned. The headers you can override using the following query parameters in the request are a subset of the headers that Amazon S3 accepts when you create an object.  The response headers that you can override for the GetObject response are Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, and Expires. To override values for a set of response headers in the GetObject response, you can use the following query parameters in the request.    response-cache-control     response-content-disposition     response-content-encoding     response-content-language     response-content-type     response-expires     When you use these parameters, you must sign the request by using either an Authorization header or a presigned URL. These parameters cannot be used with an unsigned (anonymous) request.   HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to GetObject:    ListBuckets     GetObjectAcl",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Object Lambda access points - When you use this action with an Object Lambda access point, you must direct requests to the Object Lambda access point hostname. The Object Lambda access point hostname takes the form AccessPointName-AccountId.s3-object-lambda.Region.amazonaws.com.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--if-match",
          description:
            "Return the object only if its entity tag (ETag) is the same as the one specified in this header; otherwise, return a 412 Precondition Failed error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows: If-Match condition evaluates to true, and; If-Unmodified-Since condition evaluates to false; then, S3 returns 200 OK and the data requested.  For more information about conditional requests, see RFC 7232",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-modified-since",
          description:
            "Return the object only if it has been modified since the specified time; otherwise, return a 304 Not Modified error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows: If-None-Match condition evaluates to false, and; If-Modified-Since condition evaluates to true; then, S3 returns 304 Not Modified status code. For more information about conditional requests, see RFC 7232",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Return the object only if its entity tag (ETag) is different from the one specified in this header; otherwise, return a 304 Not Modified error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows: If-None-Match condition evaluates to false, and; If-Modified-Since condition evaluates to true; then, S3 returns 304 Not Modified HTTP status code. For more information about conditional requests, see RFC 7232",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-unmodified-since",
          description:
            "Return the object only if it has not been modified since the specified time; otherwise, return a 412 Precondition Failed error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows: If-Match condition evaluates to true, and; If-Unmodified-Since condition evaluates to false; then, S3 returns 200 OK and the data requested.  For more information about conditional requests, see RFC 7232",
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
            "Downloads the specified byte range of an object. For more information about the HTTP Range header, see https://www.rfc-editor.org/rfc/rfc9110.html#name-range.  Amazon S3 doesn't support retrieving multiple ranges of data per GET request",
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
            "Version ID used to reference a specific version of the object. By default, the GetObject operation returns the current version of an object. To return a different version, use the versionId subresource.    If you include a versionId in your request header, you must have the s3:GetObjectVersion permission to access a specific version of an object. The s3:GetObject permission is not required in this scenario.   If you request the current version of an object without a specific versionId in the request header, only the s3:GetObject permission is required. The s3:GetObjectVersion permission is not required in this scenario.    Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request.    For more information about versioning, see PutBucketVersioning",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when decrypting the object (for example, AES256). If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:    x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key that you originally provided for Amazon S3 to encrypt the data before storing it. This value is used to decrypt the object when recovering it and must match the one used when storing the data. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:    x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the customer-provided encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object, you must use the following headers:    x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-mode",
          description:
            "To retrieve the checksum, this mode must be enabled.  General purpose buckets - In addition, if you enable checksum mode and the object is uploaded with a checksum and encrypted with an Key Management Service (KMS) key, you must have permission to use the kms:Decrypt action to retrieve the checksum",
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
        "This operation is not supported for directory buckets.  Returns the access control list (ACL) of an object. To use this operation, you must have s3:GetObjectAcl permissions or READ_ACP access to the object. For more information, see Mapping of ACL permissions and access policy permissions in the Amazon S3 User Guide  This functionality is not supported for Amazon S3 on Outposts. By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the bucket-owner-full-control ACL with the owner being the account that created the bucket. For more information, see  Controlling object ownership and disabling ACLs in the Amazon S3 User Guide.  The following operations are related to GetObjectAcl:    GetObject     GetObjectAttributes     DeleteObject     PutObject",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name that contains the object for which to get the ACL information.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide",
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
            "Version ID used to reference a specific version of the object.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
      name: "get-object-attributes",
      description:
        "Retrieves all the metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata.   GetObjectAttributes combines the functionality of HeadObject and ListParts. All of the data returned with each of those individual calls can be returned with a single call to GetObjectAttributes.   Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions     General purpose bucket permissions - To use GetObjectAttributes, you must have READ access to the object. The permissions that you need to use this operation depend on whether the bucket is versioned. If the bucket is versioned, you need both the s3:GetObjectVersion and s3:GetObjectVersionAttributes permissions for this operation. If the bucket is not versioned, you need the s3:GetObject and s3:GetObjectAttributes permissions. For more information, see Specifying Permissions in a Policy in the Amazon S3 User Guide. If the object that you request does not exist, the error Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found (\"no such key\") error.   If you don't have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Forbidden (\"access denied\") error.      Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key.    Encryption   Encryption request headers, like x-amz-server-side-encryption, should not be sent for HEAD requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The x-amz-server-side-encryption header is used when you PUT an object to S3 and want to specify the encryption method. If you include this header in a GET request for an object that uses these types of keys, you\u2019ll get an HTTP 400 Bad Request error. It's because the encryption method can't be changed when you retrieve the object.  If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers to provide the encryption key for the server to be able to retrieve the object's metadata. The headers are:     x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide.   Directory bucket permissions - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads.   Versioning   Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request.  Conditional request headers  Consider the following when using request headers:   If both of the If-Match and If-Unmodified-Since headers are present in the request as follows, then Amazon S3 returns the HTTP status code 200 OK and the data requested:    If-Match condition evaluates to true.    If-Unmodified-Since condition evaluates to false.   For more information about conditional requests, see RFC 7232.   If both of the If-None-Match and If-Modified-Since headers are present in the request as follows, then Amazon S3 returns the HTTP status code 304 Not Modified:    If-None-Match condition evaluates to false.    If-Modified-Since condition evaluates to true.   For more information about conditional requests, see RFC 7232.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following actions are related to GetObjectAttributes:    GetObject     GetObjectAcl     GetObjectLegalHold     GetObjectLockConfiguration     GetObjectRetention     GetObjectTagging     HeadObject     ListParts",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket that contains the object.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
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
          name: "--version-id",
          description:
            "The version ID used to reference a specific version of the object.  S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request",
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
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-attributes",
          description:
            "Specifies the fields at the root level that you want returned in the response. Fields that you do not specify are not returned",
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
      name: "get-object-legal-hold",
      description:
        "This operation is not supported for directory buckets.  Gets an object's current legal hold status. For more information, see Locking Objects. This functionality is not supported for Amazon S3 on Outposts. The following action is related to GetObjectLegalHold:    GetObjectAttributes",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object whose legal hold status you want to retrieve.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key name for the object whose legal hold status you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version ID of the object whose legal hold status you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Gets the Object Lock configuration for a bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects. The following action is related to GetObjectLockConfiguration:    GetObjectAttributes",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket whose Object Lock configuration you want to retrieve.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Retrieves an object's retention settings. For more information, see Locking Objects. This functionality is not supported for Amazon S3 on Outposts. The following action is related to GetObjectRetention:    GetObjectAttributes",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object whose retention settings you want to retrieve.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object. To use this operation, you must have permission to perform the s3:GetObjectTagging action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the s3:GetObjectVersionTagging action.  By default, the bucket owner has this permission and can grant this permission to others.  For information about the Amazon S3 object tagging feature, see Object Tagging. The following actions are related to GetObjectTagging:    DeleteObjectTagging     GetObjectAttributes     PutObjectTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object for which to get the tagging information.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
        "This operation is not supported for directory buckets.  Returns torrent files from a bucket. BitTorrent can save you bandwidth when you're distributing large files.  You can get torrent only for objects that are less than 5 GB in size, and that are not encrypted using server-side encryption with a customer-provided encryption key.  To use GET, you must have READ access to the object. This functionality is not supported for Amazon S3 on Outposts. The following action is related to GetObjectTorrent:    GetObject",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        'This operation is not supported for directory buckets.  Retrieves the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:GetBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner\'s account. If the PublicAccessBlock settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to GetPublicAccessBlock:    Using Amazon S3 Block Public Access     PutPublicAccessBlock     GetPublicAccessBlock     DeletePublicAccessBlock',
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "You can use this operation to determine if a bucket exists and if you have permission to access it. The action returns a 200 OK if the bucket exists and you have permission to access it.  If the bucket does not exist or you do not have permission to access it, the HEAD request returns a generic 400 Bad Request, 403 Forbidden or 404 Not Found code. A message body is not included, so you cannot determine the exception beyond these HTTP response codes.   Authentication and authorization   General purpose buckets - Request to public buckets that grant the s3:ListBucket permission publicly do not need to be signed. All other HeadBucket requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication.  Directory buckets - You must use IAM credentials to authenticate and authorize your access to the HeadBucket API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.  Permissions      General purpose bucket permissions - To use this operation, you must have permissions to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Managing access permissions to your Amazon S3 resources in the Amazon S3 User Guide.    Directory bucket permissions - You must have the  s3express:CreateSession  permission in the Action element of a policy. By default, the session is in the ReadWrite mode. If you want to restrict the access, you can explicitly set the s3express:SessionMode condition key to ReadOnly on the bucket. For more information about example bucket policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.  You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Object Lambda access points - When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're interested only in an object's metadata.  A HEAD request has the same options as a GET operation on an object. The response is identical to the GET response except that there is no response body. Because of this, if the HEAD request generates an error, it returns a generic code, such as 400 Bad Request, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 412 Precondition Failed, or 304 Not Modified. It's not possible to retrieve the exact exception of these error codes.  Request headers are limited to 8 KB in size. For more information, see Common Request Headers.  Permissions      General purpose bucket permissions - To use HEAD, you must have the s3:GetObject permission. You need the relevant read object (or version) permission for this operation. For more information, see Actions, resources, and condition keys for Amazon S3 in the Amazon S3 User Guide. For more information about the permissions to S3 API operations by S3 resource types, see Required permissions for Amazon S3 API operations in the Amazon S3 User Guide. If the object you request doesn't exist, the error that Amazon S3 returns depends on whether you also have the s3:ListBucket permission.   If you have the s3:ListBucket permission on the bucket, Amazon S3 returns an HTTP status code 404 Not Found error.   If you don\u2019t have the s3:ListBucket permission, Amazon S3 returns an HTTP status code 403 Forbidden error.      Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession . If you enable x-amz-checksum-mode in the request and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object.    Encryption   Encryption request headers, like x-amz-server-side-encryption, should not be sent for HEAD requests if your object uses server-side encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3 managed encryption keys (SSE-S3). The x-amz-server-side-encryption header is used when you PUT an object to S3 and want to specify the encryption method. If you include this header in a HEAD request for an object that uses these types of keys, you\u2019ll get an HTTP 400 Bad Request error. It's because the encryption method can't be changed when you retrieve the object.  If you encrypt an object by using server-side encryption with customer-provided encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the metadata from the object, you must use the following headers to provide the encryption key for the server to be able to retrieve the object's metadata. The headers are:     x-amz-server-side-encryption-customer-algorithm     x-amz-server-side-encryption-customer-key     x-amz-server-side-encryption-customer-key-MD5    For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide.   Directory bucket  - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS. SSE-C isn't supported. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide.    Versioning    If the current version of the object is a delete marker, Amazon S3 behaves as if the object was deleted and includes x-amz-delete-marker: true in the response.   If the specified version is a delete marker, the response returns a 405 Method Not Allowed error and the Last-Modified: timestamp response header.       Directory buckets - Delete marker is not supported for directory buckets.    Directory buckets - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the null value of the version ID is supported by directory buckets. You can only specify null to the versionId query parameter in the request.     HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.  For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.    The following actions are related to HeadObject:    GetObject     GetObjectAttributes",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket that contains the object.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--if-match",
          description:
            "Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-modified-since",
          description:
            "Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code. For more information about conditional requests, see RFC 7232",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code. For more information about conditional requests, see RFC 7232",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-unmodified-since",
          description:
            "Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232",
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
            "HeadObject returns only the metadata for an object. If the Range is satisfiable, only the ContentLength is affected in the response. If the Range is not satisfiable, S3 returns a 416 - Requested Range Not Satisfiable error",
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
            "Version ID used to reference a specific version of the object.  For directory buckets in this API operation, only the null value of the version ID is supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-mode",
          description:
            "To retrieve the checksum, this parameter must be enabled.  General purpose buckets - If you enable checksum mode and the object is uploaded with a checksum and encrypted with an Key Management Service (KMS) key, you must have permission to use the kms:Decrypt action to retrieve the checksum.  Directory buckets - If you enable ChecksumMode and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object",
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
        "This operation is not supported for directory buckets.  Lists the analytics configurations for the bucket. You can have up to 1,000 analytics configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. You should always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there will be a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. To use this operation, you must have permissions to perform the s3:GetAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about Amazon S3 analytics feature, see Amazon S3 Analytics \u2013 Storage Class Analysis.  The following operations are related to ListBucketAnalyticsConfigurations:    GetBucketAnalyticsConfiguration     DeleteBucketAnalyticsConfiguration     PutBucketAnalyticsConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Lists the S3 Intelligent-Tiering configuration from the specified bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to ListBucketIntelligentTieringConfigurations include:     DeleteBucketIntelligentTieringConfiguration     PutBucketIntelligentTieringConfiguration     GetBucketIntelligentTieringConfiguration",
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
        "This operation is not supported for directory buckets.  Returns a list of inventory configurations for the bucket. You can have up to 1,000 analytics configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page.  To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory  The following operations are related to ListBucketInventoryConfigurations:    GetBucketInventoryConfiguration     DeleteBucketInventoryConfiguration     PutBucketInventoryConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Lists the metrics configurations for the bucket. The metrics configurations are only for the request metrics of the bucket and do not provide information on daily storage metrics. You can have up to 1,000 configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For more information about metrics configurations and CloudWatch request metrics, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to ListBucketMetricsConfigurations:    PutBucketMetricsConfiguration     GetBucketMetricsConfiguration     DeleteBucketMetricsConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Returns a list of all buckets owned by the authenticated sender of the request. To grant IAM permission to use this operation, you must add the s3:ListAllMyBuckets policy action.  For information about Amazon S3 buckets, see Creating, configuring, and working with Amazon S3 buckets.  We strongly recommend using only paginated ListBuckets requests. Unpaginated ListBuckets requests are only supported for Amazon Web Services accounts set to the default general purpose bucket quota of 10,000. If you have an approved general purpose bucket quota above 10,000, you must send paginated ListBuckets requests to list your account\u2019s buckets. All unpaginated ListBuckets requests will be rejected for Amazon Web Services accounts with a general purpose bucket quota greater than 10,000",
      options: [
        {
          name: "--max-buckets",
          description:
            "Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Amazon Web Services account, return all the buckets in response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--continuation-token",
          description:
            "ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results.  Length Constraints: Minimum length of 0. Maximum length of 1024. Required: No.  If you specify the bucket-region, prefix, or continuation-token query parameters without using max-buckets to set the maximum number of buckets returned in the response, Amazon S3 applies a default page size of 10,000 and provides a continuation token if there are more buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "Limits the response to bucket names that begin with the specified bucket name prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-region",
          description:
            "Limits the response to buckets that are located in the specified Amazon Web Services Region. The Amazon Web Services Region must be expressed according to the Amazon Web Services Region code, such as us-west-2 for the US West (Oregon) Region. For a list of the valid values for all of the Amazon Web Services Regions, see Regions and Endpoints.  Requests made to a Regional endpoint that is different from the bucket-region parameter are not supported. For example, if you want to limit the response to your buckets in Region us-west-2, the request must be made to an endpoint in Region us-west-2",
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
      name: "list-directory-buckets",
      description:
        "Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request. For more information about directory buckets, see Directory buckets in the Amazon S3 User Guide.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions  You must have the s3express:ListAllMyDirectoryBuckets permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.  HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region.amazonaws.com.     The BucketRegion response element is not part of the ListDirectoryBuckets Response Syntax",
      options: [
        {
          name: "--continuation-token",
          description:
            "ContinuationToken indicates to Amazon S3 that the list is being continued on buckets in this account with a token. ContinuationToken is obfuscated and is not a real bucket name. You can use this ContinuationToken for the pagination of the list results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-directory-buckets",
          description:
            "Maximum number of buckets to be returned in response. When the number is more than the count of buckets that are owned by an Amazon Web Services account, return all the buckets in response",
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
      name: "list-multipart-uploads",
      description:
        "This operation lists in-progress multipart uploads in a bucket. An in-progress multipart upload is a multipart upload that has been initiated by the CreateMultipartUpload request, but has not yet been completed or aborted.   Directory buckets - If multipart uploads in a directory bucket are in progress, you can't delete the bucket until all the in-progress multipart uploads are aborted or completed. To delete these in-progress multipart uploads, use the ListMultipartUploads operation to list the in-progress multipart uploads in the bucket and use the AbortMultipartUpload operation to abort all the in-progress multipart uploads.   The ListMultipartUploads operation returns a maximum of 1,000 multipart uploads in the response. The limit of 1,000 multipart uploads is also the default value. You can further limit the number of uploads in a response by specifying the max-uploads request parameter. If there are more than 1,000 multipart uploads that satisfy your ListMultipartUploads request, the response returns an IsTruncated element with the value of true, a NextKeyMarker element, and a NextUploadIdMarker element. To list the remaining multipart uploads, you need to make subsequent ListMultipartUploads requests. In these requests, include two query parameters: key-marker and upload-id-marker. Set the value of key-marker to the NextKeyMarker value from the previous response. Similarly, set the value of upload-id-marker to the NextUploadIdMarker value from the previous response.   Directory buckets - The upload-id-marker element and the NextUploadIdMarker element aren't supported by directory buckets. To list the additional multipart uploads, you only need to set the value of key-marker to the NextKeyMarker value from the previous response.   For more information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide.   Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions     General purpose bucket permissions - For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    Sorting of multipart uploads in response     General purpose bucket - In the ListMultipartUploads response, the multipart uploads are sorted based on two criteria:   Key-based sorting - Multipart uploads are initially sorted in ascending order based on their object keys.   Time-based sorting - For uploads that share the same object key, they are further sorted in ascending order based on the upload initiation time. Among uploads with the same key, the one that was initiated first will appear before the ones that were initiated later.      Directory bucket - In the ListMultipartUploads response, the multipart uploads aren't sorted lexicographically based on the object keys.     HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to ListMultipartUploads:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     ListParts     AbortMultipartUpload",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket to which the multipart upload was initiated.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description:
            "Character you use to group keys. All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, CommonPrefixes. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under CommonPrefixes result element are not returned elsewhere in the response.   Directory buckets - For directory buckets, / is the only supported delimiter",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Encoding type used by Amazon S3 to encode the object keys in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see Object key naming guidelines.  When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object test_file(3).png will appear as test_file%283%29.png",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-marker",
          description:
            "Specifies the multipart upload after which listing should begin.     General purpose buckets - For general purpose buckets, key-marker is an object key. Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin. If upload-id-marker is not specified, only the keys lexicographically greater than the specified key-marker will be included in the list. If upload-id-marker is specified, any multipart uploads for a key equal to the key-marker might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified upload-id-marker.    Directory buckets - For directory buckets, key-marker is obfuscated and isn't a real object key. The upload-id-marker parameter isn't supported by directory buckets. To list the additional multipart uploads, you only need to set the value of key-marker to the NextKeyMarker value from the previous response.  In the ListMultipartUploads response, the multipart uploads aren't sorted lexicographically based on the object keys",
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
            "Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way that you'd use a folder in a file system.)   Directory buckets - For directory buckets, only prefixes that end in a delimiter (/) are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--upload-id-marker",
          description:
            "Together with key-marker, specifies the multipart upload after which listing should begin. If key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any multipart uploads for a key equal to the key-marker might be included in the list only if they have an upload ID lexicographically greater than the specified upload-id-marker.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
        "This operation is not supported for directory buckets.  Returns metadata about all versions of the objects in a bucket. You can also use request parameters as selection criteria to return metadata about a subset of all the object versions.   To use this operation, you must have permission to perform the s3:ListBucketVersions action. Be aware of the name difference.     A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately.  To use this operation, you must have READ access to the bucket. The following operations are related to ListObjectVersions:    ListObjectsV2     GetObject     PutObject     DeleteObject",
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
            "Encoding type used by Amazon S3 to encode the object keys in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see Object key naming guidelines.  When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object test_file(3).png will appear as test_file%283%29.png",
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
            "Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains <isTruncated>true</isTruncated>. To return the additional keys, see key-marker and version-id-marker",
          args: {
            name: "integer",
          },
        },
        {
          name: "--prefix",
          description:
            "Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way that you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--optional-object-attributes",
          description:
            "Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned",
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
        "This operation is not supported for directory buckets.  Returns some or all (up to 1,000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Be sure to design your application to parse the contents of the response and handle it appropriately.  This action has been revised. We recommend that you use the newer version, ListObjectsV2, when developing applications. For backward compatibility, Amazon S3 continues to support ListObjects.  The following operations are related to ListObjects:    ListObjectsV2     GetObject     PutObject     CreateBucket     ListBuckets",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket containing the objects.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description: "A delimiter is a character that you use to group keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Encoding type used by Amazon S3 to encode the object keys in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see Object key naming guidelines.  When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object test_file(3).png will appear as test_file%283%29.png",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. Marker can be any key in the bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-keys",
          description:
            "Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--optional-object-attributes",
          description:
            "Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned",
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
        "Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. For more information about listing objects, see Listing object keys programmatically in the Amazon S3 User Guide. To get a list of your buckets, see ListBuckets.     General purpose bucket - For general purpose buckets, ListObjectsV2 doesn't return prefixes that are related only to in-progress multipart uploads.    Directory buckets - For directory buckets, ListObjectsV2 response includes the prefixes that are related only to in-progress multipart uploads.     Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.     Permissions     General purpose bucket permissions - To use this operation, you must have READ access to the bucket. You must have permission to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    Sorting order of returned objects     General purpose bucket - For general purpose buckets, ListObjectsV2 returns objects in lexicographical order based on their key names.    Directory bucket - For directory buckets, ListObjectsV2 does not return objects in lexicographical order.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.    This section describes the latest revision of this action. We recommend that you use this revised API operation for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API operation, ListObjects.  The following operations are related to ListObjectsV2:    GetObject     PutObject     CreateBucket",
      options: [
        {
          name: "--bucket",
          description:
            "Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--delimiter",
          description:
            "A delimiter is a character that you use to group keys.     Directory buckets - For directory buckets, / is the only supported delimiter.    Directory buckets  - When you query ListObjectsV2 with a delimiter during in-progress multipart uploads, the CommonPrefixes response parameter contains the prefixes that are associated with the in-progress multipart uploads. For more information about multipart uploads, see Multipart Upload Overview in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--encoding-type",
          description:
            "Encoding type used by Amazon S3 to encode the object keys in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see Object key naming guidelines.  When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object test_file(3).png will appear as test_file%283%29.png",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-keys",
          description:
            "Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more",
          args: {
            name: "integer",
          },
        },
        {
          name: "--prefix",
          description:
            "Limits the response to keys that begin with the specified prefix.   Directory buckets - For directory buckets, only prefixes that end in a delimiter (/) are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--continuation-token",
          description:
            "ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results",
          args: {
            name: "string",
          },
        },
        {
          name: "--fetch-owner",
          description:
            "The owner field is not present in ListObjectsV2 by default. If you want to return the owner field with each key in the result, then set the FetchOwner field to true.   Directory buckets - For directory buckets, the bucket owner is returned as the object owner for all objects",
        },
        {
          name: "--no-fetch-owner",
          description:
            "The owner field is not present in ListObjectsV2 by default. If you want to return the owner field with each key in the result, then set the FetchOwner field to true.   Directory buckets - For directory buckets, the bucket owner is returned as the object owner for all objects",
        },
        {
          name: "--start-after",
          description:
            "StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--optional-object-attributes",
          description:
            "Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned.  This functionality is not supported for directory buckets",
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
        "Lists the parts that have been uploaded for a specific multipart upload. To use this operation, you must provide the upload ID in the request. You obtain this uploadID by sending the initiate multipart upload request through CreateMultipartUpload. The ListParts request returns a maximum of 1,000 uploaded parts. The limit of 1,000 parts is also the default value. You can restrict the number of parts in a response by specifying the max-parts request parameter. If your multipart upload consists of more than 1,000 parts, the response returns an IsTruncated field with the value of true, and a NextPartNumberMarker element. To list remaining uploaded parts, in subsequent ListParts requests, include the part-number-marker query string parameter and set its value to the NextPartNumberMarker field value from the previous response. For more information on multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide.   Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions     General purpose bucket permissions - For information about permissions required to use the multipart upload API, see Multipart Upload and Permissions in the Amazon S3 User Guide. If the upload was created using server-side encryption with Key Management Service (KMS) keys (SSE-KMS) or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS), you must have permission to the kms:Decrypt action for the ListParts request to succeed.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession .    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to ListParts:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     GetObjectAttributes     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket to which the parts are being uploaded.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
        'This operation is not supported for directory buckets.  Sets the accelerate configuration of an existing bucket. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to Amazon S3.  To use this operation, you must have permission to perform the s3:PutAccelerateConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  The Transfer Acceleration state of a bucket can be set to one of the following two values:    Enabled \u2013 Enables accelerated data transfers to the bucket.    Suspended \u2013 Disables accelerated data transfers to the bucket.   The GetBucketAccelerateConfiguration action returns the transfer acceleration state of a bucket. After setting the Transfer Acceleration state of a bucket to Enabled, it might take up to thirty minutes before the data transfer rates to the bucket increase.  The name of the bucket used for Transfer Acceleration must be DNS-compliant and must not contain periods (".").  For more information about transfer acceleration, see Transfer Acceleration. The following operations are related to PutBucketAccelerateConfiguration:    GetBucketAccelerateConfiguration     CreateBucket',
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
        'This operation is not supported for directory buckets.  Sets the permissions on an existing bucket using access control lists (ACL). For more information, see Using ACLs. To set the ACL of a bucket, you must have the WRITE_ACP permission. You can use one of the following two ways to set a bucket\'s permissions:   Specify the ACL in the request body   Specify permissions using request headers    You cannot specify access permission using both the body and the request headers.  Depending on your application needs, you may choose to set the ACL on a bucket using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, then you can continue to use that approach.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide.   Permissions  You can set access permissions by using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use the x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an Amazon Web Services account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-write header grants create, overwrite, and delete objects permission to LogDelivery group predefined by Amazon S3 and two Amazon Web Services accounts identified by their email addresses.  x-amz-grant-write: uri="http://acs.amazonaws.com/groups/s3/LogDelivery", id="111122223333", id="555566667777"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you\'re assigning access rights (using request elements) in the following ways:   By the person\'s ID:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>  DisplayName is optional and ignored in the request   By URI:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>    By Email address:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress>&</Grantee>  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.   Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.      The following operations are related to PutBucketAcl:    CreateBucket     DeleteBucket     GetObjectAcl',
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
            "The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets an analytics configuration for the bucket (specified by the analytics configuration ID). You can have up to 1,000 analytics configurations per bucket. You can choose to have storage class analysis export analysis reports sent to a comma-separated values (CSV) flat file. See the DataExport request element. Reports are updated daily and are based on the object filters that you configure. When selecting data export, you specify a destination bucket and an optional destination prefix where the file is written. You can export the data to a destination bucket in a different account. However, the destination bucket must be in the same Region as the bucket that you are making the PUT analytics configuration to. For more information, see Amazon S3 Analytics \u2013 Storage Class Analysis.   You must create a bucket policy on the destination bucket where the exported file is written to grant permissions to Amazon S3 to write objects to the bucket. For an example policy, see Granting Permissions for Amazon S3 Inventory and Storage Class Analysis.  To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  PutBucketAnalyticsConfiguration has the following special errors:      HTTP Error: HTTP 400 Bad Request     Code: InvalidArgument     Cause: Invalid argument.         HTTP Error: HTTP 400 Bad Request     Code: TooManyConfigurations     Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.         HTTP Error: HTTP 403 Forbidden     Code: AccessDenied     Cause: You are not the owner of the specified bucket, or you do not have the s3:PutAnalyticsConfiguration bucket permission to set the configuration on the bucket.      The following operations are related to PutBucketAnalyticsConfiguration:    GetBucketAnalyticsConfiguration     DeleteBucketAnalyticsConfiguration     ListBucketAnalyticsConfigurations",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets the cors configuration for your bucket. If the configuration exists, Amazon S3 replaces it. To use this operation, you must be allowed to perform the s3:PutBucketCORS action. By default, the bucket owner has this permission and can grant it to others. You set this configuration on a bucket so that the bucket can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your Amazon S3 bucket at my.example.bucket.com by using the browser's XMLHttpRequest capability. To enable cross-origin resource sharing (CORS) on a bucket, you add the cors subresource to the bucket. The cors subresource is an XML document in which you configure rules that identify origins and the HTTP methods that can be executed on your bucket. The document is limited to 64 KB in size.  When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a bucket, it evaluates the cors configuration on the bucket and uses the first CORSRule rule that matches the incoming browser request to enable a cross-origin request. For a rule to match, the following conditions must be met:   The request's Origin header must match AllowedOrigin elements.   The request method (for example, GET, PUT, HEAD, and so on) or the Access-Control-Request-Method header in case of a pre-flight OPTIONS request must be one of the AllowedMethod elements.    Every header specified in the Access-Control-Request-Headers request header of a pre-flight request must match an AllowedHeader element.     For more information about CORS, go to Enabling Cross-Origin Resource Sharing in the Amazon S3 User Guide. The following operations are related to PutBucketCors:    GetBucketCors     DeleteBucketCors     RESTOPTIONSobject",
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
            "The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation configures default encryption and Amazon S3 Bucket Keys for an existing bucket.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.  By default, all buckets have a default encryption configuration that uses server-side encryption with Amazon S3 managed keys (SSE-S3).     General purpose buckets    You can optionally configure default encryption for a bucket by using server-side encryption with Key Management Service (KMS) keys (SSE-KMS) or dual-layer server-side encryption with Amazon Web Services KMS keys (DSSE-KMS). If you specify default encryption by using SSE-KMS, you can also configure Amazon S3 Bucket Keys. For information about the bucket default encryption feature, see Amazon S3 Bucket Default Encryption in the Amazon S3 User Guide.    If you use PutBucketEncryption to set your default bucket encryption to SSE-KMS, you should verify that your KMS key ID is correct. Amazon S3 doesn't validate the KMS key ID provided in PutBucketEncryption requests.      Directory buckets  - You can optionally configure default encryption for a bucket by using server-side encryption with Key Management Service (KMS) keys (SSE-KMS).   We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads.   Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported.    S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.   When you specify an KMS customer managed key for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.   For directory buckets, if you use PutBucketEncryption to set your default bucket encryption to SSE-KMS, Amazon S3 validates the KMS key ID provided in PutBucketEncryption requests.       If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester\u2019s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, this action requires Amazon Web Services Signature Version 4. For more information, see  Authenticating Requests (Amazon Web Services Signature Version 4).    Permissions     General purpose bucket permissions - The s3:PutEncryptionConfiguration permission is required in a policy. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutEncryptionConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. To set a directory bucket default encryption with SSE-KMS, you must also have the kms:GenerateDataKey and the kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the target KMS key.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to PutBucketEncryption:    GetBucketEncryption     DeleteBucketEncryption",
      options: [
        {
          name: "--bucket",
          description:
            "Specifies default encryption for a bucket using server-side encryption with different key options.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the server-side encryption configuration. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.  For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        "This operation is not supported for directory buckets.  Puts a S3 Intelligent-Tiering configuration to the specified bucket. You can have up to 1,000 S3 Intelligent-Tiering configurations per bucket. The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities. The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class. For more information, see Storage class for automatically optimizing frequently and infrequently accessed objects. Operations related to PutBucketIntelligentTieringConfiguration include:     DeleteBucketIntelligentTieringConfiguration     GetBucketIntelligentTieringConfiguration     ListBucketIntelligentTieringConfigurations     You only need S3 Intelligent-Tiering enabled on a bucket if you want to automatically move objects stored in the S3 Intelligent-Tiering storage class to the Archive Access or Deep Archive Access tier.   PutBucketIntelligentTieringConfiguration has the following special errors:  HTTP 400 Bad Request Error   Code: InvalidArgument  Cause: Invalid Argument  HTTP 400 Bad Request Error   Code: TooManyConfigurations  Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.   HTTP 403 Forbidden Error   Cause: You are not the owner of the specified bucket, or you do not have the s3:PutIntelligentTieringConfiguration bucket permission to set the configuration on the bucket",
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
        "This operation is not supported for directory buckets.  This implementation of the PUT action adds an inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket.  Amazon S3 inventory generates inventories of the objects in the bucket on a daily or weekly basis, and the results are published to a flat file. The bucket that is inventoried is called the source bucket, and the bucket where the inventory flat file is stored is called the destination bucket. The destination bucket must be in the same Amazon Web Services Region as the source bucket.  When you configure an inventory for a source bucket, you specify the destination bucket where you want the inventory to be stored, and whether to generate the inventory daily or weekly. You can also configure what object metadata to include and whether to inventory all object versions or only current versions. For more information, see Amazon S3 Inventory in the Amazon S3 User Guide.  You must create a bucket policy on the destination bucket to grant permissions to Amazon S3 to write objects to the bucket in the defined location. For an example policy, see  Granting Permissions for Amazon S3 Inventory and Storage Class Analysis.   Permissions  To use this operation, you must have permission to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default and can grant this permission to others.  The s3:PutInventoryConfiguration permission allows a user to create an S3 Inventory report that includes all object metadata fields available and to specify the destination bucket to store the inventory. A user with read access to objects in the destination bucket can also access all object metadata fields that are available in the inventory report.  To restrict access to an inventory report, see Restricting access to an Amazon S3 Inventory report in the Amazon S3 User Guide. For more information about the metadata fields available in S3 Inventory, see Amazon S3 Inventory lists in the Amazon S3 User Guide. For more information about permissions, see Permissions related to bucket subresource operations and Identity and access management in Amazon S3 in the Amazon S3 User Guide.    PutBucketInventoryConfiguration has the following special errors:  HTTP 400 Bad Request Error   Code: InvalidArgument  Cause: Invalid Argument  HTTP 400 Bad Request Error   Code: TooManyConfigurations  Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.   HTTP 403 Forbidden Error   Cause: You are not the owner of the specified bucket, or you do not have the s3:PutInventoryConfiguration bucket permission to set the configuration on the bucket.    The following operations are related to PutBucketInventoryConfiguration:    GetBucketInventoryConfiguration     DeleteBucketInventoryConfiguration     ListBucketInventoryConfigurations",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "For an updated version of this API, see PutBucketLifecycleConfiguration. This version has been deprecated. Existing lifecycle configurations will work. For new lifecycle configurations, use the updated API.    This operation is not supported for directory buckets.  Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. For information about lifecycle configuration, see Object Lifecycle Management in the Amazon S3 User Guide.  By default, all Amazon S3 resources, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration) are private. Only the resource owner, the Amazon Web Services account that created the resource, can access it. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, users must get the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. Explicit denial also supersedes any other permissions. If you want to prevent users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:     s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration    For more information about permissions, see Managing Access Permissions to your Amazon S3 Resources in the Amazon S3 User Guide. For more examples of transitioning objects to storage classes such as STANDARD_IA or ONEZONE_IA, see Examples of Lifecycle Configuration. The following operations are related to PutBucketLifecycle:    GetBucketLifecycle(Deprecated)    GetBucketLifecycleConfiguration     RestoreObject    By default, a resource owner\u2014in this case, a bucket owner, which is the Amazon Web Services account that created the bucket\u2014can perform any of the operations. A resource owner can also grant others permission to perform the operation. For more information, see the following topics in the Amazon S3 User Guide:     Specifying Permissions in a Policy     Managing Access Permissions to your Amazon S3 Resources",
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
            "For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if you want to retain any configuration details, they must be included in the new lifecycle configuration. For information about lifecycle configuration, see Managing your storage lifecycle.  Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see PutBucketLifecycle.   Rules Permissions HTTP Host header syntax  You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle configuration can have up to 1,000 rules. This limit is not adjustable. Bucket lifecycle configuration supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility for general purpose buckets. For the related API description, see PutBucketLifecycle.   Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects,transitions and tag filters are not supported.  A lifecycle rule consists of the following:   A filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, object size, or any combination of these.   A status indicating whether the rule is in effect.   One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions.   For more information, see Object Lifecycle Management and Lifecycle Configuration Elements.      General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. An explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions:    s3:DeleteObject     s3:DeleteObjectVersion     s3:PutLifecycleConfiguration  For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources.        Directory bucket permissions - You must have the s3express:PutLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.       Directory buckets  - The HTTP Host header syntax is s3express-control.region.amazonaws.com. The following operations are related to PutBucketLifecycleConfiguration:    GetBucketLifecycleConfiguration     DeleteBucketLifecycle",
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
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations",
          args: {
            name: "string",
          },
        },
        {
          name: "--transition-default-minimum-object-size",
          description:
            "Indicates which default minimum object size behavior is applied to the lifecycle configuration.  This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.     all_storage_classes_128K - Objects smaller than 128 KB will not transition to any storage class by default.     varies_by_storage_class - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB.    To customize the minimum object size for any transition you can add a filter that specifies a custom ObjectSizeGreaterThan or ObjectSizeLessThan in the body of your transition rule. Custom filters always take precedence over the default transition behavior",
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
        'This operation is not supported for directory buckets.  Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the source bucket. To set the logging status of a bucket, you must be the bucket owner. The bucket owner is automatically granted FULL_CONTROL to all logs. You use the Grantee request element to grant access to other people. The Permissions request element specifies the kind of access the grantee has to the logs.  If the target bucket for log delivery uses the bucket owner enforced setting for S3 Object Ownership, you can\'t use the Grantee request element to grant access to others. Permissions can only be granted using policies. For more information, see Permissions for server access log delivery in the Amazon S3 User Guide.   Grantee Values  You can specify the person (grantee) to whom you\'re assigning access rights (by using request elements) in the following ways:   By the person\'s ID:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>   DisplayName is optional and ignored in the request.   By Email address:   <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress></Grantee>  The grantee is resolved to the CanonicalUser and, in a response to a GETObjectAcl request, appears as the CanonicalUser.   By URI:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>      To enable logging, you use LoggingEnabled and its children request elements. To disable logging, you use an empty BucketLoggingStatus request element:  <BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01" />  For more information about server access logging, see Server Access Logging in the Amazon S3 User Guide.  For more information about creating a bucket, see CreateBucket. For more information about returning the logging status of a bucket, see GetBucketLogging. The following operations are related to PutBucketLogging:    PutObject     DeleteBucket     CreateBucket     GetBucketLogging',
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
            "The MD5 hash of the PutBucketLogging request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets a metrics configuration (specified by the metrics configuration ID) for the bucket. You can have up to 1,000 metrics configurations per bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to PutBucketMetricsConfiguration:    DeleteBucketMetricsConfiguration     GetBucketMetricsConfiguration     ListBucketMetricsConfigurations     PutBucketMetricsConfiguration has the following special error:   Error code: TooManyConfigurations    Description: You are attempting to create a new configuration but have already reached the 1,000-configuration limit.   HTTP Status Code: HTTP 400 Bad Request",
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
          description:
            "The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.   No longer used, see the PutBucketNotificationConfiguration operation",
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
            "The MD5 hash of the PutPublicAccessBlock request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Enables notifications of specified events for a bucket. For more information about event notifications, see Configuring Event Notifications. Using this API, you can replace an existing notification configuration. The configuration is an XML file that defines the event types that you want Amazon S3 to publish and the destination where you want Amazon S3 to publish an event notification when it detects an event of the specified type. By default, your bucket has no event notifications configured. That is, the notification configuration will be an empty NotificationConfiguration.  <NotificationConfiguration>   </NotificationConfiguration>  This action replaces the existing notification configuration with the configuration you include in the request body. After Amazon S3 receives this request, it first verifies that any Amazon Simple Notification Service (Amazon SNS) or Amazon Simple Queue Service (Amazon SQS) destination exists, and that the bucket owner has permission to publish to it by sending a test notification. In the case of Lambda destinations, Amazon S3 verifies that the Lambda function permissions grant Amazon S3 permission to invoke the function from the Amazon S3 bucket. For more information, see Configuring Notifications for Amazon S3 Events. You can disable notifications by adding the empty NotificationConfiguration element. For more information about the number of event notification configurations that you can create per bucket, see Amazon S3 service quotas in Amazon Web Services General Reference. By default, only the bucket owner can configure notifications on a bucket. However, bucket owners can use a bucket policy to grant permission to other users to set this configuration with the required s3:PutBucketNotification permission.  The PUT notification is an atomic operation. For example, suppose your notification configuration includes SNS topic, SQS queue, and Lambda function configurations. When you send a PUT request with this configuration, Amazon S3 sends test messages to your SNS topic. If the message fails, the entire PUT action will fail, and Amazon S3 will not add the configuration to your bucket.  If the configuration in the request body includes only one TopicConfiguration specifying only the s3:ReducedRedundancyLostObject event type, the response will also include the x-amz-sns-test-message-id header containing the message ID of the test notification sent to the topic. The following action is related to PutBucketNotificationConfiguration:    GetBucketNotificationConfiguration",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-destination-validation",
          description:
            "Skips validation of Amazon SQS, Amazon SNS, and Lambda destinations. True or false value",
        },
        {
          name: "--no-skip-destination-validation",
          description:
            "Skips validation of Amazon SQS, Amazon SNS, and Lambda destinations. True or false value",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "This operation is not supported for directory buckets.  Creates or modifies OwnershipControls for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketOwnershipControls permission. For more information about Amazon S3 permissions, see Specifying permissions in a policy.  For information about Amazon S3 Object Ownership, see Using object ownership.  The following operations are related to PutBucketOwnershipControls:    GetBucketOwnershipControls     DeleteBucketOwnershipControls",
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
            "The MD5 hash of the OwnershipControls request body.  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--ownership-controls",
          description:
            "The OwnershipControls (BucketOwnerEnforced, BucketOwnerPreferred, or ObjectWriter) that you want to apply to this Amazon S3 bucket",
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
        "Applies an Amazon S3 bucket policy to an Amazon S3 bucket.   Directory buckets  - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions  If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must both have the PutBucketPolicy permissions on the specified bucket and belong to the bucket owner's account in order to use this operation. If you don't have PutBucketPolicy permissions, Amazon S3 returns a 403 Access Denied error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 405 Method Not Allowed error.  To ensure that bucket owners don't inadvertently lock themselves out of their own buckets, the root principal in a bucket owner's Amazon Web Services account can perform the GetBucketPolicy, PutBucketPolicy, and DeleteBucketPolicy API actions, even if their bucket policy explicitly denies the root principal's access. Bucket owner root principals can only be blocked from performing these API actions by VPC endpoint policies and Amazon Web Services Organizations policies.     General purpose bucket permissions - The s3:PutBucketPolicy permission is required in a policy. For more information about general purpose buckets bucket policies, see Using Bucket Policies and User Policies in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutBucketPolicy permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide.    Example bucket policies   General purpose buckets example bucket policies - See Bucket policy examples in the Amazon S3 User Guide.  Directory bucket example bucket policies - See Example bucket policies for S3 Express One Zone in the Amazon S3 User Guide.  HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com.   The following operations are related to PutBucketPolicy:    CreateBucket     DeleteBucket",
      options: [
        {
          name: "--bucket",
          description:
            "The name of the bucket.  Directory buckets  - When you use this operation with a directory bucket, you must use path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash of the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm  or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm  header, replace  algorithm  with the supported algorithm from the following list:     CRC32     CRC32C     SHA1     SHA256    For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm  doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 ignores any provided ChecksumAlgorithm parameter and uses the checksum algorithm that matches the provided value in x-amz-checksum-algorithm .  For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirm-remove-self-bucket-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This functionality is not supported for directory buckets",
        },
        {
          name: "--no-confirm-remove-self-bucket-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.  This functionality is not supported for directory buckets",
        },
        {
          name: "--policy",
          description:
            "The bucket policy as a JSON document. For directory buckets, the only IAM action supported in the bucket policy is s3express:CreateSession",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).  For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented",
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
        "This operation is not supported for directory buckets.   Creates a replication configuration or replaces an existing one. For more information, see Replication in the Amazon S3 User Guide.  Specify the replication configuration in the request body. In the replication configuration, you provide the name of the destination bucket or buckets where you want Amazon S3 to replicate objects, the IAM role that Amazon S3 can assume to replicate objects on your behalf, and other relevant information. You can invoke this request for a specific Amazon Web Services Region by using the  aws:RequestedRegion  condition key. A replication configuration must include at least one rule, and can contain a maximum of 1,000. Each rule identifies a subset of objects to replicate by filtering the objects in the source bucket. To choose additional subsets of objects to replicate, add a rule for each subset. To specify a subset of the objects in the source bucket to apply a replication rule to, add the Filter element as a child of the Rule element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the Filter element in the configuration, you must also add the following elements: DeleteMarkerReplication, Status, and Priority.  If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see Backward Compatibility.  For information about enabling versioning on a bucket, see Using Versioning.  Handling Replication of Encrypted Objects  By default, Amazon S3 doesn't replicate objects that are stored at rest using server-side encryption with KMS keys. To replicate Amazon Web Services KMS-encrypted objects, add the following: SourceSelectionCriteria, SseKmsEncryptedObjects, Status, EncryptionConfiguration, and ReplicaKmsKeyID. For information about replication configuration, see Replicating Objects Created with SSE Using KMS keys. For information on PutBucketReplication errors, see List of replication-related error codes   Permissions  To create a PutBucketReplication request, you must have s3:PutReplicationConfiguration permissions for the bucket.  By default, a resource owner, in this case the Amazon Web Services account that created the bucket, can perform this operation. The resource owner can also grant others permissions to perform the operation. For more information about permissions, see Specifying Permissions in a Policy and Managing Access Permissions to Your Amazon S3 Resources.  To perform this operation, the user or role performing the action must have the iam:PassRole permission.    The following operations are related to PutBucketReplication:    GetBucketReplication     DeleteBucketReplication",
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
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. For more information, see Requester Pays Buckets. The following operations are related to PutBucketRequestPayment:    CreateBucket     GetBucketRequestPayment",
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
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets the tags for a bucket. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost Allocation and Tagging and Using Cost Allocation in Amazon S3 Bucket Tags.   When this operation sets the tags for a bucket, it will overwrite any current tags the bucket already has. You cannot use this operation to add tags to an existing list of tags.  To use this operation, you must have permissions to perform the s3:PutBucketTagging action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources.  PutBucketTagging has the following special errors. For more Amazon S3 errors see, Error Responses.    InvalidTag - The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Using Cost Allocation in Amazon S3 Bucket Tags.    MalformedXML - The XML provided does not match the schema.    OperationAborted - A conflicting conditional action is currently in progress against this resource. Please try again.    InternalError - The service was unable to apply the provided tag to the bucket.   The following operations are related to PutBucketTagging:    GetBucketTagging     DeleteBucketTagging",
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
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.   When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. While this change is propagating, you may encounter intermittent HTTP 404 NoSuchKey errors for requests to objects created or updated after enabling versioning. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (PUT or DELETE) on objects in the bucket.   Sets the versioning state of an existing bucket. You can set the versioning state with one of the following values:  Enabled\u2014Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.  Suspended\u2014Disables versioning for the objects in the bucket. All objects added to the bucket receive the version ID null. If the versioning state has never been set on a bucket, it has no versioning state; a GetBucketVersioning request does not return a versioning state value. In order to enable MFA Delete, you must be the bucket owner. If you are the bucket owner and want to enable MFA Delete in the bucket versioning configuration, you must include the x-amz-mfa request header and the Status and the MfaDelete request elements in a request to set the versioning state of the bucket.  If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. (A version-enabled bucket maintains one current and zero or more noncurrent object versions.) For more information, see Lifecycle and Versioning.  The following operations are related to PutBucketVersioning:    CreateBucket     DeleteBucket     GetBucketVersioning",
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
            ">The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets the configuration of the website that is specified in the website subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see Hosting Websites on Amazon S3. This PUT action requires the S3:PutBucketWebsite permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the S3:PutBucketWebsite permission. To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket.    WebsiteConfiguration     RedirectAllRequestsTo     HostName     Protocol    If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected.     WebsiteConfiguration     IndexDocument     Suffix     ErrorDocument     Key     RoutingRules     RoutingRule     Condition     HttpErrorCodeReturnedEquals     KeyPrefixEquals     Redirect     Protocol     HostName     ReplaceKeyPrefixWith     ReplaceKeyWith     HttpRedirectCode    Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see Configuring an Object Redirect in the Amazon S3 User Guide. The maximum request length is limited to 128 KB",
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
            "The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Adds an object to a bucket.    Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the entire object to the bucket. You cannot use PutObject to only update a single piece of metadata for an existing object. You must put the entire object with updated metadata if you want to update some values.   If your bucket uses the bucket owner enforced setting for Object Ownership, ACLs are disabled and no longer affect permissions. All objects written to the bucket by any account will be owned by the bucket owner.    Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.    Amazon S3 is a distributed system. If it receives multiple write requests for the same object simultaneously, it overwrites all but the last object written. However, Amazon S3 provides features that can modify this behavior:    S3 Object Lock - To prevent objects from being deleted or overwritten, you can use Amazon S3 Object Lock in the Amazon S3 User Guide.  This functionality is not supported for directory buckets.     S3 Versioning - When you enable versioning for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all versions of the objects. For each write request that is made to the same object, Amazon S3 automatically generates a unique version ID of that object being stored in Amazon S3. You can retrieve, replace, or delete any version of the object. For more information about versioning, see Adding Objects to Versioning-Enabled Buckets in the Amazon S3 User Guide. For information about returning the versioning state of a bucket, see GetBucketVersioning.   This functionality is not supported for directory buckets.     Permissions     General purpose bucket permissions - The following permissions are required in your policies when your PutObject request includes specific headers.     s3:PutObject  - To successfully complete the PutObject request, you must always have the s3:PutObject permission on a bucket to add an object to it.     s3:PutObjectAcl  - To successfully change the objects ACL of your PutObject request, you must have the s3:PutObjectAcl.     s3:PutObjectTagging  - To successfully set the tag-set with your PutObject request, you must have the s3:PutObjectTagging.      Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key.    Data integrity with Content-MD5     General purpose bucket - To ensure that data is not corrupted traversing the network, use the Content-MD5 header. When you use this header, Amazon S3 checks the object against the provided MD5 value and, if they do not match, Amazon S3 returns an error. Alternatively, when the object's ETag is its MD5 digest, you can calculate the MD5 while putting the object to Amazon S3 and compare the returned ETag to the calculated MD5 value.    Directory bucket - This functionality is not supported for directory buckets.    HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   For more information about related Amazon S3 APIs, see the following:    CopyObject     DeleteObject",
      options: [
        {
          name: "--acl",
          description:
            "The canned ACL to apply to the object. For more information, see Canned ACL in the Amazon S3 User Guide. When adding a new object, you can use headers to grant ACL-based permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on the object. By default, all objects are private. Only the owner has full access control. For more information, see Access Control List (ACL) Overview and Managing ACLs Using the REST API in the Amazon S3 User Guide. If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such as the bucket-owner-full-control canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a 400 error with the error code AccessControlListNotSupported. For more information, see  Controlling ownership of objects and disabling ACLs in the Amazon S3 User Guide.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
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
            "The bucket name to which the PUT action was initiated.   Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "Specifies presentational information for the object. For more information, see https://www.rfc-editor.org/rfc/rfc6266#section-4",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding",
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
            "Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length",
          args: {
            name: "long",
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see REST Authentication.  The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket  in the Amazon S3 User Guide.   This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "A standard MIME type describing the format of the contents. For more information, see https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum-algorithm  or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For the x-amz-checksum-algorithm  header, replace  algorithm  with the supported algorithm from the following list:     CRC32     CRC32C     SHA1     SHA256    For more information, see Checking object integrity in the Amazon S3 User Guide. If the individual checksum value you provide through x-amz-checksum-algorithm  doesn't match the checksum algorithm you set through x-amz-sdk-checksum-algorithm, Amazon S3 ignores any provided ChecksumAlgorithm parameter and uses the checksum algorithm that matches the provided value in x-amz-checksum-algorithm .  The Content-MD5 or x-amz-sdk-checksum-algorithm header is required for any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more information, see Uploading objects to an Object Lock enabled bucket  in the Amazon S3 User Guide.  For directory buckets, when you use Amazon Web Services SDKs, CRC32 is the default checksum algorithm that's used for performance",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-crc32",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC-32 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-crc32-c",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC-32C checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha1",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha256",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable. For more information, see https://www.rfc-editor.org/rfc/rfc7234#section-5.3",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--if-match",
          description:
            "Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches the ETag of the object in S3. If the ETag values do not match, the operation returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should fetch the object's ETag and retry the upload. Expects the ETag value as a string. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-none-match",
          description:
            "Uploads the object only if the object key name does not already exist in the bucket specified. Otherwise, Amazon S3 returns a 412 Precondition Failed error. If a conflicting operation occurs during the upload S3 returns a 409 ConditionalRequestConflict response. On a 409 failure you should retry the upload. Expects the '*' (asterisk) character. For more information about conditional requests, see RFC 7232, or Conditional requests in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to read the object data and its metadata.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the object ACL.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable object.    This functionality is not supported for directory buckets.   This functionality is not supported for Amazon S3 on Outposts",
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
          name: "--write-offset-bytes",
          description:
            "Specifies the offset for appending data to existing objects in bytes. The offset must be equal to the size of the existing object being appended to. If no object exists, setting this header to 0 will create a new object.   This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in directory buckets",
          args: {
            name: "long",
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
            "The server-side encryption algorithm that was used when you store this object in Amazon S3 (for example, AES256, aws:kms, aws:kms:dsse).    General purpose buckets  - You have four mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest by using server-side encryption with other key options. For more information, see Using Server-Side Encryption in the Amazon S3 User Guide.    Directory buckets  - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads.  In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, the encryption request headers must match the encryption settings that are specified in the CreateSession request. You can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) that are specified in the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket.   When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. So in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), the encryption request headers must match the default encryption configuration of the directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-class",
          description:
            "By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD storage class provides high durability and high availability. Depending on performance needs, you can specify a different Storage Class. For more information, see Storage Classes in the Amazon S3 User Guide.    For directory buckets, only the S3 Express One Zone storage class is supported to store newly created objects.   Amazon S3 on Outposts only uses the OUTPOSTS Storage Class",
          args: {
            name: "string",
          },
        },
        {
          name: "--website-redirect-location",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For information about object metadata, see Object Key and Metadata in the Amazon S3 User Guide. In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:  x-amz-website-redirect-location: /anotherPage.html  In the following example, the request header sets the object redirect to another website:  x-amz-website-redirect-location: http://www.example.com/  For more information about website hosting in Amazon S3, see Hosting Websites on Amazon S3 and How to Configure Website Page Redirects in the Amazon S3 User Guide.   This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-key-id",
          description:
            "Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID.  General purpose buckets - If you specify x-amz-server-side-encryption with aws:kms or aws:kms:dsse, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS key to use. If you specify x-amz-server-side-encryption:aws:kms or x-amz-server-side-encryption:aws:kms:dsse, but do not provide x-amz-server-side-encryption-aws-kms-key-id, Amazon S3 uses the Amazon Web Services managed key (aws/s3) to protect the data.  Directory buckets - If you specify x-amz-server-side-encryption with aws:kms, the  x-amz-server-side-encryption-aws-kms-key-id header is implicitly assigned the ID of the KMS symmetric encryption customer managed key that's configured for your directory bucket's default encryption setting. If you want to specify the  x-amz-server-side-encryption-aws-kms-key-id header explicitly, you can only specify it with the ID (Key ID or Key ARN) of the KMS customer managed key that's configured for your directory bucket's default encryption setting. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssekms-encryption-context",
          description:
            "Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object.  General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide.  Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS).  General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key.  Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS).  General purpose buckets - Setting this header to true causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3 Bucket Key.  Directory buckets - S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can\u2019t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--tagging",
          description:
            'The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")  This functionality is not supported for directory buckets',
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-mode",
          description:
            "The Object Lock mode that you want to apply to this object.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--object-lock-retain-until-date",
          description:
            "The date and time when you want this object's Object Lock to expire. Must be formatted as a timestamp parameter.  This functionality is not supported for directory buckets",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--object-lock-legal-hold-status",
          description:
            "Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see Object Lock in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        'This operation is not supported for directory buckets.  Uses the acl subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket. You must have the WRITE_ACP permission to set the ACL of an object. For more information, see What permissions can I grant? in the Amazon S3 User Guide. This functionality is not supported for Amazon S3 on Outposts. Depending on your application needs, you can choose to set the ACL on an object using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, you can continue to use that approach. For more information, see Access Control List (ACL) Overview in the Amazon S3 User Guide.  If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the AccessControlListNotSupported error code. Requests to read ACLs are still supported. For more information, see Controlling object ownership in the Amazon S3 User Guide.   Permissions  You can set access permissions using one of the following methods:   Specify a canned ACL with the x-amz-acl request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of x-amz-acl. If you use this header, you cannot use other access control-specific headers in your request. For more information, see Canned ACL.   Specify access permissions explicitly with the x-amz-grant-read, x-amz-grant-read-acp, x-amz-grant-write-acp, and x-amz-grant-full-control headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use x-amz-acl header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see Access Control List (ACL) Overview. You specify each grantee as a type=value pair, where the type is one of the following:    id \u2013 if the value specified is the canonical user ID of an Amazon Web Services account    uri \u2013 if you are granting permissions to a predefined group    emailAddress \u2013 if the value specified is the email address of an Amazon Web Services account  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.    For example, the following x-amz-grant-read header grants list objects permission to the two Amazon Web Services accounts identified by their email addresses.  x-amz-grant-read: emailAddress="xyz@amazon.com", emailAddress="abc@amazon.com"     You can use either a canned ACL or specify access permissions explicitly. You cannot do both.  Grantee Values  You can specify the person (grantee) to whom you\'re assigning access rights (using request elements) in the following ways:   By the person\'s ID:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>  DisplayName is optional and ignored in the request.   By URI:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>    By Email address:  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress>lt;/Grantee>  The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.  Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:    US East (N. Virginia)   US West (N. California)    US West (Oregon)    Asia Pacific (Singapore)   Asia Pacific (Sydney)   Asia Pacific (Tokyo)   Europe (Ireland)   South America (S\u00e3o Paulo)   For a list of all the Amazon S3 supported Regions and endpoints, see Regions and Endpoints in the Amazon Web Services General Reference.     Versioning  The ACL of an object is set at the object version level. By default, PUT sets the ACL of the current version of an object. To set the ACL of a different version, use the versionId subresource.   The following operations are related to PutObjectAcl:    CopyObject     GetObject',
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
            "The bucket name that contains the object to which you want to attach the ACL.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--content-md5",
          description:
            "The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity check to verify that the request body was not corrupted in transit. For more information, go to RFC 1864.>  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-full-control",
          description:
            "Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read",
          description:
            "Allows grantee to list the objects in the bucket. This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-read-acp",
          description:
            "Allows grantee to read the bucket ACL. This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write",
          description:
            "Allows grantee to create new objects in the bucket. For the bucket and object owners of existing objects, also allows deletions and overwrites of those objects",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-write-acp",
          description:
            "Allows grantee to write the ACL for the applicable bucket. This functionality is not supported for Amazon S3 on Outposts",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "Key for which the PUT action was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "Version ID used to reference a specific version of the object.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Applies a legal hold configuration to the specified object. For more information, see Locking Objects. This functionality is not supported for Amazon S3 on Outposts",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object that you want to place a legal hold on.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--key",
          description:
            "The key name for the object that you want to place a legal hold on",
          args: {
            name: "string",
          },
        },
        {
          name: "--legal-hold",
          description:
            "Container element for the legal hold configuration you want to apply to the specified object",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The version ID of the object that you want to place a legal hold on",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-md5",
          description:
            "The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see Locking Objects.     The DefaultRetention settings require both a mode and a period.   The DefaultRetention period can be either Days or Years but you must select one. You cannot specify Days and Years at the same time.   You can enable Object Lock for new or existing buckets. For more information, see Configuring Object Lock",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
            "The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Places an Object Retention configuration on an object. For more information, see Locking Objects. Users or accounts require the s3:PutObjectRetention permission in order to place an Object Retention configuration on objects. Bypassing a Governance Retention configuration requires the s3:BypassGovernanceRetention permission.  This functionality is not supported for Amazon S3 on Outposts",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name that contains the object you want to apply this Object Retention configuration to.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
            "The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. For more information, see Object Tagging. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see GetObjectTagging. For tagging-related restrictions related to characters and encodings, see Tag Restrictions. Note that Amazon S3 limits the maximum number of tags to 10 tags per object. To use this operation, you must have permission to perform the s3:PutObjectTagging action. By default, the bucket owner has this permission and can grant this permission to others. To put tags of any other version, use the versionId query parameter. You also need permission for the s3:PutObjectVersionTagging action.  PutObjectTagging has the following special errors. For more Amazon S3 errors see, Error Responses.    InvalidTag - The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Object Tagging.    MalformedXML - The XML provided does not match the schema.    OperationAborted - A conflicting conditional action is currently in progress against this resource. Please try again.    InternalError - The service was unable to apply the provided tag to the object.   The following operations are related to PutObjectTagging:    GetObjectTagging     DeleteObjectTagging",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
        'This operation is not supported for directory buckets.  Creates or modifies the PublicAccessBlock configuration for an Amazon S3 bucket. To use this operation, you must have the s3:PutBucketPublicAccessBlock permission. For more information about Amazon S3 permissions, see Specifying Permissions in a Policy.  When Amazon S3 evaluates the PublicAccessBlock configuration for a bucket or an object, it checks the PublicAccessBlock configuration for both the bucket (or the bucket that contains the object) and the bucket owner\'s account. If the PublicAccessBlock configurations are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.  For more information about when Amazon S3 considers a bucket or an object public, see The Meaning of "Public". The following operations are related to PutPublicAccessBlock:    GetPublicAccessBlock     DeletePublicAccessBlock     GetBucketPolicyStatus     Using Amazon S3 Block Public Access',
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
            "The MD5 hash of the PutPublicAccessBlock request body.  For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Restores an archived copy of an object back into Amazon S3 This functionality is not supported for Amazon S3 on Outposts. This action performs the following types of requests:     restore an archive - Restore an archived object   For more information about the S3 structure in the request body, see the following:    PutObject     Managing Access with ACLs in the Amazon S3 User Guide     Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide     Permissions  To use this operation, you must have permissions to perform the s3:RestoreObject action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide.  Restoring objects  Objects that you archive to the S3 Glacier Flexible Retrieval Flexible Retrieval or S3 Glacier Deep Archive storage class, and S3 Intelligent-Tiering Archive or S3 Intelligent-Tiering Deep Archive tiers, are not accessible in real time. For objects in the S3 Glacier Flexible Retrieval Flexible Retrieval or S3 Glacier Deep Archive storage classes, you must first initiate a restore request, and then wait until a temporary copy of the object is available. If you want a permanent copy of the object, create a copy of it in the Amazon S3 Standard storage class in your S3 bucket. To access an archived object, you must restore the object for the duration (number of days) that you specify. For objects in the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, you must first initiate a restore request, and then wait until the object is moved into the Frequent Access tier. To restore a specific object version, you can provide a version ID. If you don't provide a version ID, Amazon S3 restores the current version. When restoring an archived object, you can specify one of the following data access tier options in the Tier element of the request body:     Expedited - Expedited retrievals allow you to quickly access your data stored in the S3 Glacier Flexible Retrieval Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier when occasional urgent requests for restoring archives are required. For all but the largest archived objects (250 MB+), data accessed using Expedited retrievals is typically made available within 1\u20135 minutes. Provisioned capacity ensures that retrieval capacity for Expedited retrievals is available when you need it. Expedited retrievals and provisioned capacity are not available for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.    Standard - Standard retrievals allow you to access any of your archived objects within several hours. This is the default option for retrieval requests that do not specify the retrieval option. Standard retrievals typically finish within 3\u20135 hours for objects stored in the S3 Glacier Flexible Retrieval Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. They typically finish within 12 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier. Standard retrievals are free for objects stored in S3 Intelligent-Tiering.    Bulk - Bulk retrievals free for objects stored in the S3 Glacier Flexible Retrieval and S3 Intelligent-Tiering storage classes, enabling you to retrieve large amounts, even petabytes, of data at no cost. Bulk retrievals typically finish within 5\u201312 hours for objects stored in the S3 Glacier Flexible Retrieval Flexible Retrieval storage class or S3 Intelligent-Tiering Archive tier. Bulk retrievals are also the lowest-cost retrieval option when restoring objects from S3 Glacier Deep Archive. They typically finish within 48 hours for objects stored in the S3 Glacier Deep Archive storage class or S3 Intelligent-Tiering Deep Archive tier.    For more information about archive retrieval options and provisioned capacity for Expedited data access, see Restoring Archived Objects in the Amazon S3 User Guide.  You can use Amazon S3 restore speed upgrade to change the restore speed to a faster speed while it is in progress. For more information, see  Upgrading the speed of an in-progress restore in the Amazon S3 User Guide.  To get the status of object restoration, you can send a HEAD request. Operations return the x-amz-restore header, which provides information about the restoration status, in the response. You can use Amazon S3 event notifications to notify you when a restore is initiated or completed. For more information, see Configuring Amazon S3 Event Notifications in the Amazon S3 User Guide. After restoring an archived object, you can update the restoration period by reissuing the request with a new period. Amazon S3 updates the restoration period relative to the current time and charges only for the request-there are no data transfer charges. You cannot update the restoration period when Amazon S3 is actively processing your current restore request for the object. If your bucket has a lifecycle configuration with a rule that includes an expiration action, the object expiration overrides the life span that you specify in a restore request. For example, if you restore an object copy for 10 days, but the object is scheduled to expire in 3 days, Amazon S3 deletes the object in 3 days. For more information about lifecycle configuration, see PutBucketLifecycleConfiguration and Object Lifecycle Management in Amazon S3 User Guide.  Responses  A successful action returns either the 200 OK or 202 Accepted status code.    If the object is not previously restored, then Amazon S3 returns 202 Accepted in the response.    If the object is previously restored, Amazon S3 returns 200 OK in the response.      Special errors:    Code: RestoreAlreadyInProgress     Cause: Object restore is already in progress.     HTTP Status Code: 409 Conflict     SOAP Fault Code Prefix: Client         Code: GlacierExpeditedRetrievalNotAvailable     Cause: expedited retrievals are currently not available. Try again later. (Returned if there is insufficient capacity to process the Expedited request. This error applies only to Expedited retrievals and not to S3 Standard or Bulk retrievals.)     HTTP Status Code: 503     SOAP Fault Code Prefix: N/A        The following operations are related to RestoreObject:    PutBucketLifecycleConfiguration     GetBucketNotificationConfiguration",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name containing the object to restore.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON, CSV, or Apache Parquet) of the object. Amazon S3 uses this format to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response. This functionality is not supported for Amazon S3 on Outposts. For more information about Amazon S3 Select, see Selecting Content from Objects and SELECT Command in the Amazon S3 User Guide.   Permissions  You must have the s3:GetObject permission for this operation.\u00a0Amazon S3 Select does not support anonymous access. For more information about permissions, see Specifying Permissions in a Policy in the Amazon S3 User Guide.  Object Data Formats  You can use Amazon S3 Select to query objects that have the following format properties:    CSV, JSON, and Parquet - Objects must be in CSV, JSON, or Parquet format.    UTF-8 - UTF-8 is the only encoding type Amazon S3 Select supports.    GZIP or BZIP2 - CSV and JSON files can be compressed using GZIP or BZIP2. GZIP and BZIP2 are the only compression formats that Amazon S3 Select supports for CSV and JSON files. Amazon S3 Select supports columnar compression for Parquet using GZIP or Snappy. Amazon S3 Select does not support whole-object compression for Parquet objects.    Server-side encryption - Amazon S3 Select supports querying objects that are protected with server-side encryption. For objects that are encrypted with customer-provided encryption keys (SSE-C), you must use HTTPS, and you must use the headers that are documented in the GetObject. For more information about SSE-C, see Server-Side Encryption (Using Customer-Provided Encryption Keys) in the Amazon S3 User Guide. For objects that are encrypted with Amazon S3 managed keys (SSE-S3) and Amazon Web Services KMS keys (SSE-KMS), server-side encryption is handled transparently, so you don't need to specify anything. For more information about server-side encryption, including SSE-S3 and SSE-KMS, see Protecting Data Using Server-Side Encryption in the Amazon S3 User Guide.    Working with the Response Body  Given the response size is unknown, Amazon S3 Select streams the response as a series of messages and includes a Transfer-Encoding header with chunked as its value in the response. For more information, see Appendix: SelectObjectContent Response.  GetObject Support  The SelectObjectContent action does not support the following GetObject functionality. For more information, see GetObject.    Range: Although you can specify a scan range for an Amazon S3 Select request (see SelectObjectContentRequest - ScanRange in the request parameters), you cannot specify the range of bytes of an object to return.    The GLACIER, DEEP_ARCHIVE, and REDUCED_REDUNDANCY storage classes, or the ARCHIVE_ACCESS and DEEP_ARCHIVE_ACCESS access tiers of the INTELLIGENT_TIERING storage class: You cannot query objects in the GLACIER, DEEP_ARCHIVE, or REDUCED_REDUNDANCY storage classes, nor objects in the ARCHIVE_ACCESS or DEEP_ARCHIVE_ACCESS access tiers of the INTELLIGENT_TIERING storage class. For more information about storage classes, see Using Amazon S3 storage classes in the Amazon S3 User Guide.    Special Errors  For a list of special errors for this operation, see List of SELECT Object Content Error Codes    The following operations are related to SelectObjectContent:    GetObject     GetBucketLifecycleConfiguration     PutBucketLifecycleConfiguration",
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
            "The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm. For more information, see Protecting data using SSE-C keys in the Amazon S3 User Guide",
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
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Uploads a part in a multipart upload.  In this operation, you provide new data as a part of an object in your request. However, you have an option to specify your existing Amazon S3 object as a data source for the part you are uploading. To upload a part from an existing object, you use the UploadPartCopy operation.   You must initiate a multipart upload (see CreateMultipartUpload) before you can upload any part. In response to your initiate request, Amazon S3 returns an upload ID, a unique identifier that you must include in your upload part request. Part numbers can be any number from 1 to 10,000, inclusive. A part number uniquely identifies a part and also defines its position within the object being created. If you upload a new part using the same part number that was used with a previous part, the previously uploaded part is overwritten. For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide.  After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.  For more information on multipart uploads, go to Multipart Upload Overview in the Amazon S3 User Guide .   Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Permissions     General purpose bucket permissions - To perform a multipart upload with encryption using an Key Management Service key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information about KMS permissions, see Protecting data using server-side encryption with KMS in the Amazon S3 User Guide. For information about the permissions required to use the multipart upload API, see Multipart upload and permissions and Multipart upload API and permissions in the Amazon S3 User Guide.    Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the  CreateSession  API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see  CreateSession . If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key.    Data integrity   General purpose bucket - To ensure that data is not corrupted traversing the network, specify the Content-MD5 header in the upload part request. Amazon S3 checks the part data against the provided MD5 value. If they do not match, Amazon S3 returns an error. If the upload request is signed with Signature Version 4, then Amazon Web Services S3 uses the x-amz-content-sha256 header as a checksum instead of Content-MD5. For more information see Authenticating Requests: Using the Authorization Header (Amazon Web Services Signature Version 4).    Directory buckets - MD5 is not supported by directory buckets. You can use checksum algorithms to check object integrity.   Encryption     General purpose bucket - Server-side encryption is for data encryption at rest. Amazon S3 encrypts your data as it writes it to disks in its data centers and decrypts it when you access it. You have mutually exclusive options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS), and Customer-Provided Keys (SSE-C). Amazon S3 encrypts data with server-side encryption using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to encrypt data at rest using server-side encryption with other key options. The option you use depends on whether you want to use KMS keys (SSE-KMS) or provide your own encryption key (SSE-C). Server-side encryption is supported by the S3 Multipart Upload operations. Unless you are using a customer-provided encryption key (SSE-C), you don't need to specify the encryption parameters in each UploadPart request. Instead, you only need to specify the server-side encryption parameters in the initial Initiate Multipart request. For more information, see CreateMultipartUpload. If you request server-side encryption using a customer-provided encryption key (SSE-C) in your initiate multipart upload request, you must provide identical encryption information in each part upload using the following request headers.   x-amz-server-side-encryption-customer-algorithm   x-amz-server-side-encryption-customer-key   x-amz-server-side-encryption-customer-key-MD5    For more information, see Using Server-Side Encryption in the Amazon S3 User Guide.    Directory buckets  - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms).    Special errors    Error Code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.   HTTP Status Code: 404 Not Found    SOAP Fault Code Prefix: Client      HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to UploadPart:    CreateMultipartUpload     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads",
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
            "The name of the bucket to which the multipart upload was initiated.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
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
            "The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using the command from the CLI. This parameter is required if object lock parameters are specified.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter. This checksum algorithm must be the same for all parts and it match the checksum value supplied in the CreateMultipartUpload request",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-crc32",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC-32 checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-crc32-c",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 32-bit CRC-32C checksum of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha1",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha256",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see Checking object integrity in the Amazon S3 User Guide",
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
            "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "Uploads a part by copying data from an existing object as data source. To specify the data source, you add the request header x-amz-copy-source in your request. To specify a byte range, you add the request header x-amz-copy-source-range in your request.  For information about maximum and minimum part sizes and other multipart upload specifications, see Multipart upload limits in the Amazon S3 User Guide.   Instead of copying data from an existing object as part data, you might use the UploadPart action to upload new data as a part of an object in your request.  You must initiate a multipart upload before you can upload any part. In response to your initiate request, Amazon S3 returns the upload ID, a unique identifier that you must include in your upload part request. For conceptual information about multipart uploads, see Uploading Objects Using Multipart Upload in the Amazon S3 User Guide. For information about copying objects using a single atomic action vs. a multipart upload, see Operations on Objects in the Amazon S3 User Guide.   Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Available Local Zone for directory buckets in the Amazon S3 User Guide.   Authentication and authorization  All UploadPartCopy requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the x-amz- prefix, including x-amz-copy-source, must be signed. For more information, see REST Authentication.  Directory buckets - You must use IAM credentials to authenticate and authorize your access to the UploadPartCopy API operation, instead of using the temporary security credentials through the CreateSession API operation. Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.  Permissions  You must have READ access to the source object and WRITE access to the destination bucket.    General purpose bucket permissions - You must have the permissions in a policy based on the bucket types of your source bucket and destination bucket in an UploadPartCopy operation.   If the source object is in a general purpose bucket, you must have the  s3:GetObject  permission to read the source object that is being copied.    If the destination bucket is a general purpose bucket, you must have the  s3:PutObject  permission to write the object copy to the destination bucket.    To perform a multipart upload with encryption using an Key Management Service key, the requester must have permission to the kms:Decrypt and kms:GenerateDataKey actions on the key. The requester must also have permissions for the kms:GenerateDataKey action for the CreateMultipartUpload API. Then, the requester needs permissions for the kms:Decrypt action on the UploadPart and UploadPartCopy APIs. These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload. For more information about KMS permissions, see Protecting data using server-side encryption with KMS in the Amazon S3 User Guide. For information about the permissions required to use the multipart upload API, see Multipart upload and permissions and Multipart upload API and permissions in the Amazon S3 User Guide.      Directory bucket permissions - You must have permissions in a bucket policy or an IAM identity-based policy based on the source and destination bucket types in an UploadPartCopy operation.   If the source object that you want to copy is in a directory bucket, you must have the  s3express:CreateSession  permission in the Action element of a policy to read the object. By default, the session is in the ReadWrite mode. If you want to restrict the access, you can explicitly set the s3express:SessionMode condition key to ReadOnly on the copy source bucket.   If the copy destination is a directory bucket, you must have the  s3express:CreateSession  permission in the Action element of a policy to write the object to the destination. The s3express:SessionMode condition key cannot be set to ReadOnly on the copy destination.    If the object is encrypted with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key. For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide.    Encryption     General purpose buckets  - For information about using server-side encryption with customer-provided encryption keys with the UploadPartCopy operation, see CopyObject and UploadPart.     Directory buckets  - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide.  For directory buckets, when you perform a CreateMultipartUpload operation and an UploadPartCopy operation, the request headers you provide in the CreateMultipartUpload request must match the default encryption configuration of the destination bucket.   S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through UploadPartCopy. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.    Special errors    Error Code: NoSuchUpload    Description: The specified multipart upload does not exist. The upload ID might be invalid, or the multipart upload might have been aborted or completed.   HTTP Status Code: 404 Not Found     Error Code: InvalidRequest    Description: The specified copy source is not supported as a byte-range copy source.   HTTP Status Code: 400 Bad Request      HTTP Host header syntax   Directory buckets  - The HTTP Host header syntax is  Bucket-name.s3express-zone-id.region-code.amazonaws.com.   The following operations are related to UploadPartCopy:    CreateMultipartUpload     UploadPart     CompleteMultipartUpload     AbortMultipartUpload     ListParts     ListMultipartUploads",
      options: [
        {
          name: "--bucket",
          description:
            "The bucket name.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Copying objects across different Amazon Web Services Regions isn't supported when the source or destination bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region. Otherwise, you get an HTTP 400 Bad Request error with the error code InvalidRequest.   Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
          args: {
            name: "string",
            generators: bucketGenerator,
          },
        },
        {
          name: "--copy-source",
          description:
            "Specifies the source object for the copy operation. You specify the value in one of two formats, depending on whether you want to access the source object through an access point:   For objects not accessed through an access point, specify the name of the source bucket and key of the source object, separated by a slash (/). For example, to copy the object reports/january.pdf from the bucket awsexamplebucket, use awsexamplebucket/reports/january.pdf. The value must be URL-encoded.   For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>. For example, to copy the object reports/january.pdf through access point my-access-point owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf. The value must be URL encoded.    Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region.   Access points are not supported by directory buckets.    Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key>. For example, to copy the object reports/january.pdf through outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf. The value must be URL-encoded.    If your bucket has versioning enabled, you could have multiple versions of the same object. By default, x-amz-copy-source identifies the current version of the source object to copy. To copy a specific version of the source object to copy, append ?versionId=<version-id> to the x-amz-copy-source request header (for example, x-amz-copy-source: /awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893).  If the current version is a delete marker and you don't specify a versionId in the x-amz-copy-source request header, Amazon S3 returns a 404 Not Found error, because the object does not exist. If you specify versionId in the x-amz-copy-source and the versionId is a delete marker, Amazon S3 returns an HTTP 400 Bad Request error, because you are not allowed to specify a delete marker as a version for the x-amz-copy-source.    Directory buckets - S3 Versioning isn't enabled and supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-match",
          description:
            "Copies the object if its entity tag (ETag) matches the specified tag. If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows:  x-amz-copy-source-if-match condition evaluates to true, and;  x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-modified-since",
          description:
            "Copies the object if it has been modified since the specified time. If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows:  x-amz-copy-source-if-none-match condition evaluates to false, and;  x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--copy-source-if-none-match",
          description:
            "Copies the object if its entity tag (ETag) is different than the specified ETag. If both of the x-amz-copy-source-if-none-match and x-amz-copy-source-if-modified-since headers are present in the request as follows:  x-amz-copy-source-if-none-match condition evaluates to false, and;  x-amz-copy-source-if-modified-since condition evaluates to true; Amazon S3 returns 412 Precondition Failed response code",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-if-unmodified-since",
          description:
            "Copies the object if it hasn't been modified since the specified time. If both of the x-amz-copy-source-if-match and x-amz-copy-source-if-unmodified-since headers are present in the request as follows:  x-amz-copy-source-if-match condition evaluates to true, and;  x-amz-copy-source-if-unmodified-since condition evaluates to false; Amazon S3 returns 200 OK and copies the data",
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
            "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported when the destination bucket is a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. This must be the same encryption key specified in the initiate multipart upload request.  This functionality is not supported when the destination bucket is a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported when the destination bucket is a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-algorithm",
          description:
            "Specifies the algorithm to use when decrypting the source object (for example, AES256).  This functionality is not supported when the source object is in a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key",
          description:
            "Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.  This functionality is not supported when the source object is in a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-sse-customer-key-md5",
          description:
            "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported when the source object is in a directory bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-source-bucket-owner",
          description:
            "The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
        "This operation is not supported for directory buckets.  Passes transformed objects to a GetObject operation when using Object Lambda access points. For information about Object Lambda access points, see Transforming objects with Object Lambda access points in the Amazon S3 User Guide. This operation supports metadata that can be returned by GetObject, in addition to RequestRoute, RequestToken, StatusCode, ErrorCode, and ErrorMessage. The GetObject response metadata is supported so that the WriteGetObjectResponse caller, typically an Lambda function, can provide the same metadata when it internally invokes GetObject. When WriteGetObjectResponse is called by a customer-owned Lambda function, the metadata returned to the end user GetObject call might differ from what Amazon S3 would normally return. You can include any number of metadata headers. When including a metadata header, it should be prefaced with x-amz-meta. For example, x-amz-meta-my-custom-header: MyCustomValue. The primary use case for this is to forward GetObject metadata. Amazon Web Services provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact personally identifiable information (PII) and decompress S3 objects. These Lambda functions are available in the Amazon Web Services Serverless Application Repository, and can be selected through the Amazon Web Services Management Console when you create your Object Lambda access point. Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket.  Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket.  Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP.  For information on how to view and use these functions, see Using Amazon Web Services built Lambda functions in the Amazon S3 User Guide",
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
            "The integer status code for an HTTP response of a corresponding GetObject request. The following is a list of status codes.    200 - OK     206 - Partial Content     304 - Not Modified     400 - Bad Request     401 - Unauthorized     403 - Forbidden     404 - Not Found     405 - Method Not Allowed     409 - Conflict     411 - Length Required     412 - Precondition Failed     416 - Range Not Satisfiable     500 - Internal Server Error     503 - Service Unavailable",
          args: {
            name: "integer",
          },
        },
        {
          name: "--error-code",
          description:
            'A string that uniquely identifies an error condition. Returned in the <Code> tag of the error XML response for a corresponding GetObject call. Cannot be used with a successful StatusCode header or when the transformed object is provided in the body. All error codes from S3 are sentence-cased. The regular expression (regex) value is "^[A-Z][a-zA-Z]+$"',
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
          name: "--checksum-crc32",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC-32 checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-crc32-c",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC-32C checksum of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha1",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 160-bit SHA-1 digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--checksum-sha256",
          description:
            "This header can be used as a data integrity check to verify that the data received is the same data that was originally sent. This specifies the base64-encoded, 256-bit SHA-256 digest of the object returned by the Object Lambda function. This may not match the checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values only when the original GetObject request required checksum validation. For more information about checksums, see Checking object integrity in the Amazon S3 User Guide. Only one checksum header can be specified at a time. If you supply multiple checksum headers, this request will fail",
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
            "If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs that provide the object expiration information. The value of the rule-id is URL-encoded",
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
            "If present, indicates that the requester was successfully charged for the request.  This functionality is not supported for directory buckets",
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
            "If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key that was used for stored in Amazon S3 object",
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
          description:
            "Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects. For more information, see Storage Classes",
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
            "Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with Amazon Web Services KMS (SSE-KMS)",
        },
        {
          name: "--no-bucket-key-enabled",
          description:
            "Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with Amazon Web Services KMS (SSE-KMS)",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
                "The bucket name.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Object Lambda access points - When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--expected-bucket-owner",
              description:
                "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
                "The bucket name.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Object Lambda access points - When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code InvalidAccessPointAliasError is returned. For more information about InvalidAccessPointAliasError, see List of Error Codes.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--expected-bucket-owner",
              description:
                "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
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
                "The name of the bucket that contains the object.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--if-match",
              description:
                "Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-modified-since",
              description:
                "Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code. For more information about conditional requests, see RFC 7232",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--if-none-match",
              description:
                "Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code. For more information about conditional requests, see RFC 7232",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-unmodified-since",
              description:
                "Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232",
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
                "HeadObject returns only the metadata for an object. If the Range is satisfiable, only the ContentLength is affected in the response. If the Range is not satisfiable, S3 returns a 416 - Requested Range Not Satisfiable error",
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
              description:
                "Sets the Content-Disposition header of the response",
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
                "Version ID used to reference a specific version of the object.  For directory buckets in this API operation, only the null value of the version ID is supported",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-algorithm",
              description:
                "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key",
              description:
                "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported for directory buckets",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key-md5",
              description:
                "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
              args: {
                name: "string",
              },
            },
            {
              name: "--request-payer",
              description:
                "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
                "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
              args: {
                name: "string",
              },
            },
            {
              name: "--checksum-mode",
              description:
                "To retrieve the checksum, this parameter must be enabled.  General purpose buckets - If you enable checksum mode and the object is uploaded with a checksum and encrypted with an Key Management Service (KMS) key, you must have permission to use the kms:Decrypt action to retrieve the checksum.  Directory buckets - If you enable ChecksumMode and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object",
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
                "The name of the bucket that contains the object.  Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format  Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format  bucket-base-name--zone-id--x-s3 (for example,  DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide.  Access points - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide.  Access points and Object Lambda access points are not supported by directory buckets.   S3 on Outposts - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form  AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see What is S3 on Outposts? in the Amazon S3 User Guide",
              args: {
                name: "string",
                generators: bucketGenerator,
              },
            },
            {
              name: "--if-match",
              description:
                "Return the object only if its entity tag (ETag) is the same as the one specified; otherwise, return a 412 (precondition failed) error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-modified-since",
              description:
                "Return the object only if it has been modified since the specified time; otherwise, return a 304 (not modified) error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code. For more information about conditional requests, see RFC 7232",
              args: {
                name: "timestamp",
              },
            },
            {
              name: "--if-none-match",
              description:
                "Return the object only if its entity tag (ETag) is different from the one specified; otherwise, return a 304 (not modified) error. If both of the If-None-Match and If-Modified-Since headers are present in the request as follows:    If-None-Match condition evaluates to false, and;    If-Modified-Since condition evaluates to true;   Then Amazon S3 returns the 304 Not Modified response code. For more information about conditional requests, see RFC 7232",
              args: {
                name: "string",
              },
            },
            {
              name: "--if-unmodified-since",
              description:
                "Return the object only if it has not been modified since the specified time; otherwise, return a 412 (precondition failed) error. If both of the If-Match and If-Unmodified-Since headers are present in the request as follows:    If-Match condition evaluates to true, and;    If-Unmodified-Since condition evaluates to false;   Then Amazon S3 returns 200 OK and the data requested. For more information about conditional requests, see RFC 7232",
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
                "HeadObject returns only the metadata for an object. If the Range is satisfiable, only the ContentLength is affected in the response. If the Range is not satisfiable, S3 returns a 416 - Requested Range Not Satisfiable error",
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
              description:
                "Sets the Content-Disposition header of the response",
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
                "Version ID used to reference a specific version of the object.  For directory buckets in this API operation, only the null value of the version ID is supported",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-algorithm",
              description:
                "Specifies the algorithm to use when encrypting the object (for example, AES256).  This functionality is not supported for directory buckets",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key",
              description:
                "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.  This functionality is not supported for directory buckets",
              args: {
                name: "string",
              },
            },
            {
              name: "--sse-customer-key-md5",
              description:
                "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.  This functionality is not supported for directory buckets",
              args: {
                name: "string",
              },
            },
            {
              name: "--request-payer",
              description:
                "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If either the source or destination S3 bucket has Requester Pays enabled, the requester will pay for corresponding charges to copy the object. For information about downloading objects from Requester Pays buckets, see Downloading Objects in Requester Pays Buckets in the Amazon S3 User Guide.  This functionality is not supported for directory buckets",
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
                "The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied)",
              args: {
                name: "string",
              },
            },
            {
              name: "--checksum-mode",
              description:
                "To retrieve the checksum, this parameter must be enabled.  General purpose buckets - If you enable checksum mode and the object is uploaded with a checksum and encrypted with an Key Management Service (KMS) key, you must have permission to use the kms:Decrypt action to retrieve the checksum.  Directory buckets - If you enable ChecksumMode and the object is encrypted with Amazon Web Services Key Management Service (Amazon Web Services KMS), you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the KMS key to retrieve the checksum of the object",
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
