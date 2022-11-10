const completionSpec: Fig.Spec = {
  name: "ddb",
  description: "High level DynamoDB commands",
  subcommands: [
    {
      name: "select",
      description:
        "``select`` searches a table or index.\n\nUnder the hood, this operation will use ``query`` if ``--key-condition`` is specified, or ``scan`` otherwise.\n\nOnly ``yaml`` output is supported for this operation",
      options: [
        {
          name: "--index-name",
          description:
            "The name of a secondary index to scan. This index can be any local secondary index or global secondary index",
          args: {
            name: "string",
          },
        },
        {
          name: "--projection",
          description:
            "A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If any of the requested attributes are not found, they will not appear in the result.For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.For CLI specific syntax see aws help ddb-expressions",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--filter",
          description:
            "A string that contains conditions that DynamoDB applies after the operation, but before the data is returned to you. Items that do not satisfy the ``--filter`` criteria are not returned.A ``--filter`` is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide.For CLI specific syntax see aws help ddb-expressions",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--key-condition",
          description:
            "The condition that specifies the key value(s) for items to be retrieved. Must perform an equality test on a single partition key value. The condition can optionally perform one of several comparison tests on a single sort key value. This allows select to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values.The partition key equality test must be specified in the following format:partitionKeyName = :partitionkeyvalIf you also want to provide a condition for the sort key, it must be combined using AND with the condition for the sort key.Valid comparisons for the sort key condition are as follows:sortKeyName = :sortkeyval - true if the sort key value is equal to :sortkeyval.sortKeyName &lt; :sortkeyval - true if the sort key value is less than :sortkeyval.sortKeyName &lt;= :sortkeyval - true if the sort key value is less than or equal to :sortkeyval.sortKeyName &gt; :sortkeyval - true if the sort key value is greater than :sortkeyval.sortKeyName &gt;= :sortkeyval - true if the sort key value is greater than or equal to :sortkeyval.sortKeyName BETWEEN :sortkeyval1 AND :sortkeyval2 - true if the sort key value is greater than or equal to :sortkeyval1, and less than or equal to :sortkeyval2.begins_with(sortKeyName, :sortkeyval) - true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.) Note that the function name begins_with is case-sensitive.For CLI specific syntax see aws help ddb-expressions",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--attributes",
          description:
            "The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index. ``ALL`` - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index DynamoDB will fetch the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required. ``ALL_PROJECTED`` - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ``ALL``. ``COUNT`` - Returns the number of matching items, rather than the matching items themselves",
          args: {
            name: "string",
            suggestions: ["ALL", "ALL_PROJECTED", "COUNT"],
          },
        },
        {
          name: "--consistent-read",
          description:
            "Determines the read consistency model: If set to --consistent-read, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads. Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with --consistent-read, you will receive a ValidationException",
        },
        {
          name: "--no-consistent-read",
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Will include the aggregate ConsumedCapacity for the operation. If --index-name is also specified, then the ConsumedCapacity for each table and secondary index that was accessed will be returned",
        },
        {
          name: "--no-return-consumed-capacity",
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
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
      ],
      args: {
        name: "table_name",
        description: "The name of your DynamoDB table",
      },
    },
    {
      name: "put",
      description: "``put`` puts one or more items into a table",
      options: [
        {
          name: "--condition",
          description:
            "A condition that must be satisfied in order for a conditional put operation to succeed.For more information, see Comparison Operator and Function Reference in the Amazon DynamoDB Developer GuideFor CLI specific syntax see aws help ddb-expressions",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
      ],
      args: [
        {
          name: "table_name",
          description: "The name of your DynamoDB table",
        },
        {
          name: "items",
          description:
            "One or more items to put into the table, in YAML format",
        },
      ],
    },
  ],
};
export default completionSpec;
