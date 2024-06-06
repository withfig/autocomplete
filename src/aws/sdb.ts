const completionSpec: Fig.Spec = {
  name: "sdb",
  description:
    "Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development.  A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use.   Visit http://aws.amazon.com/simpledb/ for more information",
  subcommands: [
    {
      name: "batch-delete-attributes",
      description:
        "Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. This enables Amazon SimpleDB to optimize requests, which generally yields better throughput.   The following limitations are enforced for this operation:  1 MB request size 25 item limit per BatchDeleteAttributes operation",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain in which the attributes are being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--items",
          description: "A list of items on which to perform the operation",
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
      name: "batch-put-attributes",
      description:
        "The BatchPutAttributes operation creates or replaces attributes within one or more items. By using this operation, the client can perform multiple PutAttribute operation with a single call. This helps yield savings in round trips and latencies, enabling Amazon SimpleDB to optimize requests and generally produce better throughput.   The client may specify the item name with the Item.X.ItemName parameter. The client may specify new attributes using a combination of the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value parameters. The client may specify the first attribute for the first item using the parameters Item.0.Attribute.0.Name and Item.0.Attribute.0.Value, and for the second attribute for the first item by the parameters Item.0.Attribute.1.Name and Item.0.Attribute.1.Value, and so on.   Attributes are uniquely identified within an item by their name/value combination. For example, a single item can have the attributes { \"first_name\", \"first_value\" } and { \"first_name\", \"second_value\" }. However, it cannot have two attribute instances where both the Item.X.Attribute.Y.Name and Item.X.Attribute.Y.Value are the same.   Optionally, the requester can supply the Replace parameter for each individual value. Setting this value to true will cause the new attribute values to replace the existing attribute values. For example, if an item I has the attributes { 'a', '1' }, { 'b', '2'} and { 'b', '3' } and the requester does a BatchPutAttributes of {'I', 'b', '4' } with the Replace parameter set to true, the final attributes of the item will be { 'a', '1' } and { 'b', '4' }, replacing the previous values of the 'b' attribute with the new value.   This operation is vulnerable to exceeding the maximum URL size when making a REST request using the HTTP GET method. This operation does not support conditions using Expected.X.Name, Expected.X.Value, or Expected.X.Exists.   You can execute multiple BatchPutAttributes operations and other operations in parallel. However, large numbers of concurrent BatchPutAttributes calls can result in Service Unavailable (503) responses.   The following limitations are enforced for this operation:  256 attribute name-value pairs per item 1 MB request size 1 billion attributes per domain 10 GB of total user data storage per domain 25 item limit per BatchPutAttributes operation",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain in which the attributes are being stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--items",
          description: "A list of items on which to perform the operation",
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
      name: "create-domain",
      description:
        "The CreateDomain operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The CreateDomain operation may take 10 or more seconds to complete.   The client can create up to 100 domains per account.   If the client requires additional domains, go to  http://aws.amazon.com/contact-us/simpledb-limit-request/",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-attributes",
      description:
        "Deletes one or more attributes associated with an item. If all attributes of the item are deleted, the item is deleted.   DeleteAttributes is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response.   Because Amazon SimpleDB makes multiple copies of item data and uses an eventual consistency update model, performing a GetAttributes or Select operation (read) immediately after a DeleteAttributes or PutAttributes operation (write) might not return updated item data",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain in which to perform the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--item-name",
          description:
            "The name of the item. Similar to rows on a spreadsheet, items represent individual objects that contain one or more value-attribute pairs",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "A list of Attributes. Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items",
          args: {
            name: "list",
          },
        },
        {
          name: "--expected",
          description:
            "The update condition which, if specified, determines whether the specified attributes will be deleted or not. The update condition must be satisfied in order for this request to be processed and the attributes to be deleted",
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
      name: "delete-domain",
      description:
        "The DeleteDomain operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The DeleteDomain operation might take 10 or more seconds to complete",
      options: [
        {
          name: "--domain-name",
          description: "The name of the domain to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "domain-metadata",
      description:
        "Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain for which to display the metadata of",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-attributes",
      description:
        "Returns all of the attributes associated with the specified item. Optionally, the attributes returned can be limited to one or more attributes by specifying an attribute name parameter.   If the item does not exist on the replica that was accessed for this operation, an empty set is returned. The system does not return an error as it cannot guarantee the item does not exist on other replicas",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain in which to perform the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--item-name",
          description: "The name of the item",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-names",
          description: "The names of the attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--consistent-read",
          description:
            "Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read",
        },
        {
          name: "--no-consistent-read",
          description:
            "Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-domains",
      description:
        "The ListDomains operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by MaxNumberOfDomains. A NextToken is returned if there are more than MaxNumberOfDomains domains. Calling ListDomains successive times with the NextToken provided by the operation returns up to MaxNumberOfDomains more domain names with each successive operation call",
      options: [
        {
          name: "--max-number-of-domains",
          description:
            "The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A string informing Amazon SimpleDB where to start the next list of domain names",
          args: {
            name: "string",
          },
        },
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
      name: "put-attributes",
      description:
        "The PutAttributes operation creates or replaces attributes in an item. The client may specify new attributes using a combination of the Attribute.X.Name and Attribute.X.Value parameters. The client specifies the first attribute by the parameters Attribute.0.Name and Attribute.0.Value, the second attribute by the parameters Attribute.1.Name and Attribute.1.Value, and so on.   Attributes are uniquely identified in an item by their name/value combination. For example, a single item can have the attributes { \"first_name\", \"first_value\" } and { \"first_name\", second_value\" }. However, it cannot have two attribute instances where both the Attribute.X.Name and Attribute.X.Value are the same.   Optionally, the requestor can supply the Replace parameter for each individual attribute. Setting this value to true causes the new attribute value to replace the existing attribute value(s). For example, if an item has the attributes { 'a', '1' }, { 'b', '2'} and { 'b', '3' } and the requestor calls PutAttributes using the attributes { 'b', '4' } with the Replace parameter set to true, the final attributes of the item are changed to { 'a', '1' } and { 'b', '4' }, which replaces the previous values of the 'b' attribute with the new value.   You cannot specify an empty string as an attribute name.   Because Amazon SimpleDB makes multiple copies of client data and uses an eventual consistency update model, an immediate GetAttributes or Select operation (read) immediately after a PutAttributes or DeleteAttributes operation (write) might not return the updated data.   The following limitations are enforced for this operation:  256 total attribute name-value pairs per item One billion attributes per domain 10 GB of total user data storage per domain",
      options: [
        {
          name: "--domain-name",
          description:
            "The name of the domain in which to perform the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--item-name",
          description: "The name of the item",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description: "The list of attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--expected",
          description:
            "The update condition which, if specified, determines whether the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated",
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
      name: "select",
      description:
        "The Select operation returns a set of attributes for ItemNames that match the select expression. Select is similar to the standard SQL SELECT statement.   The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically adjusts the number of items returned per page to enforce this limit. For example, if the client asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100 items and an appropriate NextToken so the client can access the next page of results.   For information on how to construct select expressions, see Using Select to Create Amazon SimpleDB Queries in the Developer Guide",
      options: [
        {
          name: "--select-expression",
          description: "The expression used to query the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A string informing Amazon SimpleDB where to start the next list of ItemNames",
          args: {
            name: "string",
          },
        },
        {
          name: "--consistent-read",
          description:
            "Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read",
        },
        {
          name: "--no-consistent-read",
          description:
            "Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If true, any data previously written to SimpleDB will be returned. Otherwise, results will be consistent eventually, and the client may not see data that was written immediately before your read",
        },
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
  ],
};
export default completionSpec;
