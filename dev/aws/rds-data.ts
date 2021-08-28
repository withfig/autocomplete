import * as Fig from "../../schemas";

const completionSpec: Fig.Spec = {
  name: "rds-data",
  description:
    "Amazon RDS Data Service Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless DB cluster. To run these statements, you work with the Data Service API. For more information about the Data Service API, see Using the Data API for Aurora Serverless in the Amazon Aurora User Guide",
  subcommands: [
    {
      name: "batch-execute-statement",
      description:
        "Runs a batch SQL statement over an array of data. You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.  If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically",
      options: [
        {
          name: "--database",
          description: "The name of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameter-sets",
          description:
            "The parameter set for the batch operation. The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:   Specify one or more empty parameter sets.   Use the ExecuteStatement operation instead of the BatchExecuteStatement operation.    Array parameters are not supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description: "The name of the database schema",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--sql",
          description: "The SQL statement to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description:
            "The identifier of a transaction that was started by using the BeginTransaction operation. Specify the transaction ID of the transaction that you want to include the SQL statement in. If the SQL statement is not part of a transaction, don't set this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "begin-transaction",
      description:
        "Starts a SQL transaction.  &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt;",
      options: [
        {
          name: "--database",
          description: "The name of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description: "The name of the database schema",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "commit-transaction",
      description:
        "Ends a SQL transaction started with the BeginTransaction operation and commits the changes",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description: "The identifier of the transaction to end and commit",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "execute-sql",
      description:
        "Runs one or more SQL statements.  This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation",
      options: [
        {
          name: "--aws-secret-store-arn",
          description:
            "The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description: "The name of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-cluster-or-instance-arn",
          description: "The ARN of the Aurora Serverless DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description: "The name of the database schema",
          args: {
            name: "string",
          },
        },
        {
          name: "--sql-statements",
          description:
            "One or more SQL statements to run on the DB cluster. You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "execute-statement",
      description:
        "Runs a SQL statement against a database.  If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically.  The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated",
      options: [
        {
          name: "--continue-after-timeout",
          description:
            "A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.  For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures",
        },
        {
          name: "--no-continue-after-timeout",
          description:
            "A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.  For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures",
        },
        {
          name: "--database",
          description: "The name of the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-result-metadata",
          description:
            "A value that indicates whether to include metadata in the results",
        },
        {
          name: "--no-include-result-metadata",
          description:
            "A value that indicates whether to include metadata in the results",
        },
        {
          name: "--parameters",
          description:
            "The parameters for the SQL statement.  Array parameters are not supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--result-set-options",
          description: "Options that control how the result set is returned",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema",
          description:
            "The name of the database schema.  Currently, the schema parameter isn't supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--sql",
          description: "The SQL statement to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description:
            "The identifier of a transaction that was started by using the BeginTransaction operation. Specify the transaction ID of the transaction that you want to include the SQL statement in. If the SQL statement is not part of a transaction, don't set this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "rollback-transaction",
      description:
        "Performs a rollback of a transaction. Rolling back a transaction cancels its changes",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description: "The identifier of the transaction to roll back",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
