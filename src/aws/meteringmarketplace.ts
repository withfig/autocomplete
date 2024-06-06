const completionSpec: Fig.Spec = {
  name: "meteringmarketplace",
  description:
    "AWS Marketplace Metering Service This reference provides descriptions of the low-level AWS Marketplace Metering Service API. AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions. For information on the permissions you need to use this API, see AWS Marketplace metering and entitlement API permissions in the AWS Marketplace Seller Guide.   Submitting Metering Records     MeterUsage - Submits the metering record for an AWS Marketplace product. MeterUsage is called from an EC2 instance or a container running on EKS or ECS.    BatchMeterUsage - Submits the metering record for a set of customers. BatchMeterUsage is called from a software-as-a-service (SaaS) application.    Accepting New Customers     ResolveCustomer - Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a CustomerIdentifier along with the CustomerAWSAccountId and ProductCode.    Entitlement and Metering for Paid Container Products    Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do so if you want to receive usage data in your seller reports. For more information on using the RegisterUsage operation, see Container-Based Products.     BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to verify that the SaaS metering records that you sent are accurate by searching for records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit records over time. For more information, see the  AWS CloudTrail User Guide",
  subcommands: [
    {
      name: "batch-meter-usage",
      description:
        "BatchMeterUsage is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers. For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records. Every request to BatchMeterUsage is for one product. If you need to meter usage for multiple products, you must make multiple calls to BatchMeterUsage. Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.  BatchMeterUsage can process up to 25 UsageRecords at a time. A UsageRecord can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).  BatchMeterUsage returns a list of UsageRecordResult objects, showing the result for each UsageRecord, as well as a list of UnprocessedRecords, indicating errors in the service side that you should retry.  BatchMeterUsage requests must be less than 1MB in size.  For an example of using BatchMeterUsage, see  BatchMeterUsage code example in the AWS Marketplace Seller Guide",
      options: [
        {
          name: "--usage-records",
          description:
            "The set of UsageRecords to submit. BatchMeterUsage accepts up to 25 UsageRecords at a time",
          args: {
            name: "list",
          },
        },
        {
          name: "--product-code",
          description:
            "Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "meter-usage",
      description:
        "API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.  MeterUsage is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.  MeterUsage can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define). Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event",
      options: [
        {
          name: "--product-code",
          description:
            "Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product",
          args: {
            name: "string",
          },
        },
        {
          name: "--timestamp",
          description:
            "Timestamp, in UTC, for which the usage is being reported. Your application can meter usage for up to one hour in the past. Make sure the timestamp value is not before the start of the software usage",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--usage-dimension",
          description:
            "It will be one of the fcp dimension name provided during the publishing of the product",
          args: {
            name: "string",
          },
        },
        {
          name: "--usage-quantity",
          description:
            "Consumption value for the hour. Defaults to 0 if not specified",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dry-run",
          description:
            "Checks whether you have the permissions required for the action, but does not make the request. If you have the permissions, the request returns DryRunOperation; otherwise, it returns UnauthorizedException. Defaults to false if not specified",
        },
        {
          name: "--no-dry-run",
          description:
            "Checks whether you have the permissions required for the action, but does not make the request. If you have the permissions, the request returns DryRunOperation; otherwise, it returns UnauthorizedException. Defaults to false if not specified",
        },
        {
          name: "--usage-allocations",
          description:
            "The set of UsageAllocations to submit. The sum of all UsageAllocation quantities must equal the UsageQuantity of the MeterUsage request, and each UsageAllocation must have a unique set of tags (include no tags)",
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
      name: "register-usage",
      description:
        "Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of RegisterUsage. RegisterUsage performs two primary functions: metering and entitlement.    Entitlement: RegisterUsage allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with RegisterUsage is only required to guard against unauthorized use at container startup, as such a CustomerNotSubscribedException or PlatformNotSupportedException will only be thrown on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a CustomerNotSubscribedException, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.    Metering: RegisterUsage meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call RegisterUsage once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime",
      options: [
        {
          name: "--product-code",
          description:
            "Product code is used to uniquely identify a product in AWS Marketplace. The product code should be the same as the one used during the publishing of a new product",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-key-version",
          description: "Public Key Version provided by AWS Marketplace",
          args: {
            name: "integer",
          },
        },
        {
          name: "--nonce",
          description:
            "(Optional) To scope down the registration to a specific running software instance and guard against replay attacks",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "resolve-customer",
      description:
        "ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier along with the CustomerAWSAccountId and ProductCode.  The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token. For an example of using ResolveCustomer, see  ResolveCustomer code example in the AWS Marketplace Seller Guide",
      options: [
        {
          name: "--registration-token",
          description:
            "When a buyer visits your website during the registration process, the buyer submits a registration token through the browser. The registration token is resolved to obtain a CustomerIdentifier along with the CustomerAWSAccountId and ProductCode",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
