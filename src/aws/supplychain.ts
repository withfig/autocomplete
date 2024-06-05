const completionSpec: Fig.Spec = {
  name: "supplychain",
  description:
    "AWS Supply Chain is a cloud-based application that works with your enterprise resource planning (ERP) and supply chain management systems. Using AWS Supply Chain, you can connect and extract your inventory, supply, and demand related data from existing ERP or supply chain systems into a single data model.  The AWS Supply Chain API supports configuration data import for Supply Planning.  All AWS Supply chain API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies",
  subcommands: [
    {
      name: "create-bill-of-materials-import-job",
      description:
        "CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide. The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3uri",
          description:
            "The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "An idempotency token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-bill-of-materials-import-job",
      description: "Get status and details of a BillOfMaterialsImportJob",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The BillOfMaterialsImportJob identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "send-data-integration-event",
      description:
        "Send transactional data events with real-time data for analysis or monitoring",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-type",
          description: "The data event type",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description: "The data payload of the event",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-group-id",
          description:
            "Event identifier (for example, orderId for InboundOrder) used for data sharing or partitioning",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-timestamp",
          description: "The event timestamp (in epoch seconds)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--client-token",
          description: "The idempotent client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
