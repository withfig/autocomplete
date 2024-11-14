const completionSpec: Fig.Spec = {
  name: "lakeformation",
  description:
    "Lake Formation Defines the public endpoint for the Lake Formation service",
  subcommands: [
    {
      name: "add-lf-tags-to-resource",
      description: "Attaches one or more LF-tags to an existing resource",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource",
          description:
            "The database, table, or column resource to which to attach an LF-tag",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lf-tags",
          description: "The LF-tags to attach to the resource",
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
      name: "assume-decorated-role-with-saml",
      description:
        "Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller\u2019s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session.   This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API GetDataAccess. Therefore, all SAML roles that can be assumed via AssumeDecoratedRoleWithSAML must at a minimum include lakeformation:GetDataAccess in their role policies. A typical IAM policy attached to such a role would look as follows:",
      options: [
        {
          name: "--saml-assertion",
          description:
            "A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as GetTemporaryTableCredentials. The caller must also have iam:PassRole permission on this role",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-arn",
          description:
            "The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--duration-seconds",
          description:
            "The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials",
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
      name: "batch-grant-permissions",
      description: "Batch operation to grant permissions to the principal",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "A list of up to 20 entries for resource permissions to be granted by batch operation to the principal",
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
      name: "batch-revoke-permissions",
      description: "Batch operation to revoke permissions from the principal",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal",
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
      name: "cancel-transaction",
      description:
        "Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed",
      options: [
        {
          name: "--transaction-id",
          description: "The transaction to cancel",
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
        "Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction",
      options: [
        {
          name: "--transaction-id",
          description: "The transaction to commit",
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
      name: "create-data-cells-filter",
      description:
        "Creates a data cell filter to allow one to grant access to certain columns on certain rows",
      options: [
        {
          name: "--table-data",
          description:
            "A DataCellsFilter structure containing information about the data cells filter",
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
      name: "create-lf-tag",
      description: "Creates an LF-tag with the specified name and values",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key",
          description: "The key-name for the LF-tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-values",
          description: "A list of possible values an attribute can take",
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
      name: "create-lf-tag-expression",
      description:
        "Creates a new LF-Tag expression with the provided name, description, catalog ID, and expression body. This call fails if a LF-Tag expression with the same name already exists in the caller\u2019s account or if the underlying LF-Tags don't exist. To call this API operation, caller needs the following Lake Formation permissions:  CREATE_LF_TAG_EXPRESSION on the root catalog resource.  GRANT_WITH_LF_TAG_EXPRESSION on all underlying LF-Tag key:value pairs included in the expression",
      options: [
        {
          name: "--name",
          description: "A name for the expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description with information about the LF-Tag expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description: "A list of LF-Tag conditions (key-value pairs)",
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
      name: "create-lake-formation-identity-center-configuration",
      description:
        "Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, view definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-arn",
          description:
            "The ARN of the IAM Identity Center instance for which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-filtering",
          description:
            "A list of the account IDs of Amazon Web Services accounts of third-party applications that are allowed to access data managed by Lake Formation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--share-recipients",
          description:
            "A list of Amazon Web Services account IDs and/or Amazon Web Services organization/organizational unit ARNs that are allowed to access data managed by Lake Formation.  If the ShareRecipients list includes valid values, a resource share is created with the principals you want to have access to the resources. If the ShareRecipients value is null or the list is empty, no resource share is created",
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
      name: "create-lake-formation-opt-in",
      description:
        "Enforce Lake Formation permissions for the given databases, tables, and principals",
      options: [
        {
          name: "--principal",
          description:
            "The Lake Formation principal. Supported principals are IAM users or IAM roles",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description: "A structure for the resource",
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
      name: "delete-data-cells-filter",
      description: "Deletes a data cell filter",
      options: [
        {
          name: "--table-catalog-id",
          description: "The ID of the catalog to which the table belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "A database in the Glue Data Catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "A table in the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name given by the user to the data filter cell",
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
      name: "delete-lf-tag",
      description:
        "Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the LFTagPolicy attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key",
          description: "The key-name for the LF-tag to delete",
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
      name: "delete-lf-tag-expression",
      description:
        "Deletes the LF-Tag expression. The caller must be a data lake admin or have DROP permissions on the LF-Tag expression. Deleting a LF-Tag expression will also delete all LFTagPolicy permissions referencing the LF-Tag expression",
      options: [
        {
          name: "--name",
          description: "The name for the LF-Tag expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID in which the LF-Tag expression is saved",
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
      name: "delete-lake-formation-identity-center-configuration",
      description:
        "Deletes an IAM Identity Center connection with Lake Formation",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, view definition, and other control information to manage your Lake Formation environment",
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
      name: "delete-lake-formation-opt-in",
      description:
        "Remove the Lake Formation permissions enforcement of the given databases, tables, and principals",
      options: [
        {
          name: "--principal",
          description:
            "The Lake Formation principal. Supported principals are IAM users or IAM roles",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description: "A structure for the resource",
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
      name: "delete-objects-on-cancel",
      description:
        "For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.   The Glue ETL library function write_dynamic_frame.from_catalog() includes an option to automatically call DeleteObjectsOnCancel before writes. For more information, see Rolling Back Amazon S3 Writes",
      options: [
        {
          name: "--catalog-id",
          description:
            "The Glue data catalog that contains the governed table. Defaults to the current account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The database that contains the governed table",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the governed table",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description: "ID of the transaction that the writes occur in",
          args: {
            name: "string",
          },
        },
        {
          name: "--objects",
          description:
            "A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels",
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
      name: "deregister-resource",
      description:
        "Deregisters the resource as managed by the Data Catalog. When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to deregister",
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
      name: "describe-lake-formation-identity-center-configuration",
      description:
        "Retrieves the instance ARN and application ARN for the connection",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
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
      name: "describe-resource",
      description:
        "Retrieves the current data access role for the given resource registered in Lake Formation",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN",
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
      name: "describe-transaction",
      description: "Returns the details of a single transaction",
      options: [
        {
          name: "--transaction-id",
          description: "The transaction for which to return status",
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
      name: "extend-transaction",
      description:
        "Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted. Write transactions that remain idle for a long period are automatically aborted unless explicitly extended",
      options: [
        {
          name: "--transaction-id",
          description: "The transaction to extend",
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
      name: "get-data-cells-filter",
      description: "Returns a data cells filter",
      options: [
        {
          name: "--table-catalog-id",
          description: "The ID of the catalog to which the table belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "A database in the Glue Data Catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "A table in the database",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name given by the user to the data filter cell",
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
      name: "get-data-lake-principal",
      description: "Returns the identity of the invoking principal",
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
      name: "get-data-lake-settings",
      description:
        "Retrieves the list of the data lake administrators of a Lake Formation-managed data lake",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
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
      name: "get-effective-permissions-for-path",
      description:
        "Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. GetEffectivePermissionsForPath will not return databases and tables if the catalog is encrypted",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which you want to get permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "get-lf-tag",
      description: "Returns an LF-tag definition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key",
          description: "The key-name for the LF-tag",
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
      name: "get-lf-tag-expression",
      description:
        "Returns the details about the LF-Tag expression. The caller must be a data lake admin or must have DESCRIBE permission on the LF-Tag expression resource",
      options: [
        {
          name: "--name",
          description: "The name for the LF-Tag expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID",
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
      name: "get-query-state",
      description:
        "Returns the state of a query previously submitted. Clients are expected to poll GetQueryState to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to StartQueryPlanning",
      options: [
        {
          name: "--query-id",
          description: "The ID of the plan query operation",
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
      name: "get-query-statistics",
      description:
        "Retrieves statistics on the planning and execution of a query",
      options: [
        {
          name: "--query-id",
          description: "The ID of the plan query operation",
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
      name: "get-resource-lf-tags",
      description: "Returns the LF-tags applied to a resource",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource",
          description:
            "The database, table, or column resource for which you want to return LF-tags",
          args: {
            name: "structure",
          },
        },
        {
          name: "--show-assigned-lf-tags",
          description: "Indicates whether to show the assigned LF-tags",
        },
        {
          name: "--no-show-assigned-lf-tags",
          description: "Indicates whether to show the assigned LF-tags",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-table-objects",
      description:
        "Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries",
      options: [
        {
          name: "--catalog-id",
          description:
            "The catalog containing the governed table. Defaults to the caller\u2019s account",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The database containing the governed table",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The governed table for which to retrieve objects",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description:
            "The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with QueryAsOfTime",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-as-of-time",
          description:
            "The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with TransactionId",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--partition-predicate",
          description:
            'A predicate to filter the objects returned based on the partition keys defined in the governed table.   The comparison operators supported are: =, >, <, >=, <=   The logical operators supported are: AND   The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal',
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies how many values to return in a page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token if this is not the first call to retrieve these objects",
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
      name: "get-temporary-glue-partition-credentials",
      description:
        "This API is identical to GetTemporaryTableCredentials except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix",
      options: [
        {
          name: "--table-arn",
          description: "The ARN of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition",
          description:
            "A list of partition values identifying a single partition",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "Filters the request based on the user having been granted a list of specified permissions on the requested resource(s)",
          args: {
            name: "list",
          },
        },
        {
          name: "--duration-seconds",
          description:
            "The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials",
          args: {
            name: "integer",
          },
        },
        {
          name: "--audit-context",
          description:
            "A structure representing context to access a resource (column names, query ID, etc)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--supported-permission-types",
          description:
            "A list of supported permission types for the partition. Valid values are COLUMN_PERMISSION and CELL_FILTER_PERMISSION",
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
      name: "get-temporary-glue-table-credentials",
      description:
        "Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix. To call this API, the role that the service assumes must have lakeformation:GetDataAccess permission on the resource",
      options: [
        {
          name: "--table-arn",
          description:
            "The ARN identifying a table in the Data Catalog for the temporary credentials request",
          args: {
            name: "string",
          },
        },
        {
          name: "--permissions",
          description:
            "Filters the request based on the user having been granted a list of specified permissions on the requested resource(s)",
          args: {
            name: "list",
          },
        },
        {
          name: "--duration-seconds",
          description:
            "The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials",
          args: {
            name: "integer",
          },
        },
        {
          name: "--audit-context",
          description:
            "A structure representing context to access a resource (column names, query ID, etc)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--supported-permission-types",
          description:
            "A list of supported permission types for the table. Valid values are COLUMN_PERMISSION and CELL_FILTER_PERMISSION",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-path",
          description: "The Amazon S3 path for the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-session-context",
          description:
            "A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context",
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
      name: "get-work-unit-results",
      description:
        "Returns the work units resulting from the query. Work units can be executed in any order and in parallel",
      options: [
        {
          name: "--query-id",
          description:
            "The ID of the plan query operation for which to get results",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-unit-id",
          description:
            "The work unit ID for which to get results. Value generated by enumerating WorkUnitIdMin to WorkUnitIdMax (inclusive) from the WorkUnitRange in the output of GetWorkUnits",
          args: {
            name: "long",
          },
        },
        {
          name: "--work-unit-token",
          description:
            "A work token used to query the execution service. Token output from GetWorkUnits",
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
      name: "get-work-units",
      description:
        "Retrieves the work units generated by the StartQueryPlanning operation",
      options: [
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
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
          name: "--query-id",
          description: "The ID of the plan query operation",
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
      name: "grant-permissions",
      description:
        "Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. For information about permissions, see Security and Access Control to Metadata and Data",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN. Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description:
            "The resource to which permissions are to be granted. Resources in Lake Formation are the Data Catalog, databases, and tables",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--permissions-with-grant-option",
          description:
            "Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the Privileges",
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
      name: "list-data-cells-filter",
      description: "Lists all the data cell filters on a table",
      options: [
        {
          name: "--table",
          description: "A table in the Glue Data Catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of the response",
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
      name: "list-lf-tag-expressions",
      description:
        "Returns the LF-Tag expressions in caller\u2019s account filtered based on caller's permissions. Data Lake and read only admins implicitly can see all tag expressions in their account, else caller needs DESCRIBE permissions on tag expression",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
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
      name: "list-lf-tags",
      description: "Lists LF-tags that the requester has permission to view",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-share-type",
          description:
            "If resource share type is ALL, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is FOREIGN, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
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
      name: "list-lake-formation-opt-ins",
      description:
        "Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions",
      options: [
        {
          name: "--principal",
          description:
            "The Lake Formation principal. Supported principals are IAM users or IAM roles",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description: "A structure for the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
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
      name: "list-permissions",
      description:
        "Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER. This operation returns only those permissions that have been explicitly granted. For information about permissions, see Security and Access Control to Metadata and Data",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "Specifies a principal to filter the permissions returned",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-type",
          description:
            "Specifies a resource type to filter the permissions returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource",
          description:
            "A resource where you will get a list of the principal permissions. This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-related",
          description:
            "Indicates that related permissions should be included in the results",
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
      name: "list-resources",
      description:
        "Lists the resources registered to be managed by the Data Catalog",
      options: [
        {
          name: "--filter-condition-list",
          description:
            "Any applicable row-level and/or column-level filtering conditions for the resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of resource results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve these resources",
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
      name: "list-table-storage-optimizers",
      description:
        "Returns the configuration of all storage optimizers associated with a specified table",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "Name of the database where the table is present",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "Name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-optimizer-type",
          description:
            "The specific type of storage optimizers to list. The supported value is compaction",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of storage optimizers to return on each call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
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
      name: "list-transactions",
      description:
        "Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned. This operation can help you identify uncommitted transactions or to get information about transactions",
      options: [
        {
          name: "--catalog-id",
          description:
            "The catalog for which to list transactions. Defaults to the account ID of the caller",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-filter",
          description:
            "A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is ALL",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of transactions to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token if this is not the first call to retrieve transactions",
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
      name: "put-data-lake-settings",
      description:
        "Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions. This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-lake-settings",
          description:
            "A structure representing a list of Lake Formation principals designated as data lake administrators",
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
      name: "register-resource",
      description:
        "Registers the resource as managed by the Data Catalog. To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy. The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.  ResourceArn = arn:aws:s3:::my-bucket/ UseServiceLinkedRole = true  If UseServiceLinkedRole is not set to true, you must provide or set the RoleArn:  arn:aws:iam::12345:role/my-data-access-role",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to register",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-service-linked-role",
          description:
            "Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation. For more information, see Using Service-Linked Roles for Lake Formation",
        },
        {
          name: "--no-use-service-linked-role",
          description:
            "Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation. For more information, see Using Service-Linked Roles for Lake Formation",
        },
        {
          name: "--role-arn",
          description:
            "The identifier for the role that registers the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--with-federation",
          description: "Whether or not the resource is a federated resource",
        },
        {
          name: "--no-with-federation",
          description: "Whether or not the resource is a federated resource",
        },
        {
          name: "--hybrid-access-enabled",
          description:
            "Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies",
        },
        {
          name: "--no-hybrid-access-enabled",
          description:
            "Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "remove-lf-tags-from-resource",
      description:
        "Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in tableWithColumns to specify column input",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource",
          description:
            "The database, table, or column resource where you want to remove an LF-tag",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lf-tags",
          description: "The LF-tags to be removed from the resource",
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
      name: "revoke-permissions",
      description:
        "Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "The principal to be revoked permissions on the resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource",
          description: "The resource to which permissions are to be revoked",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "The permissions revoked to the principal on the resource. For information about permissions, see Security and Access Control to Metadata and Data",
          args: {
            name: "list",
          },
        },
        {
          name: "--permissions-with-grant-option",
          description:
            "Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals",
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
      name: "search-databases-by-lf-tags",
      description:
        "This operation allows a search on DATABASE resources by TagCondition. This operation is used by admins who want to grant user permissions on certain TagConditions. Before making a grant, the admin can use SearchDatabasesByTags to find all resources where the given TagConditions are valid to verify whether the returned resources can be shared",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "A list of conditions (LFTag structures) to search for in database resources",
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
      name: "search-tables-by-lf-tags",
      description:
        "This operation allows a search on TABLE resources by LFTags. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use SearchTablesByLFTags to find all resources where the given LFTags are valid to verify whether the returned resources can be shared",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve this list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "A list of conditions (LFTag structures) to search for in table resources",
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
      name: "start-query-planning",
      description:
        "Submits a request to process a query statement. This operation generates work units that can be retrieved with the GetWorkUnits operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED",
      options: [
        {
          name: "--query-planning-context",
          description:
            "A structure containing information about the query plan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--query-string",
          description:
            "A PartiQL query statement used as an input to the planner service",
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
      name: "start-transaction",
      description:
        "Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction",
      options: [
        {
          name: "--transaction-type",
          description:
            "Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed",
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
      name: "update-data-cells-filter",
      description: "Updates a data cell filter",
      options: [
        {
          name: "--table-data",
          description:
            "A DataCellsFilter structure containing information about the data cells filter",
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
      name: "update-lf-tag",
      description:
        'Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key\'s value',
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key",
          description:
            "The key-name for the LF-tag for which to add or delete values",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-values-to-delete",
          description: "A list of LF-tag values to delete from the LF-tag",
          args: {
            name: "list",
          },
        },
        {
          name: "--tag-values-to-add",
          description: "A list of LF-tag values to add from the LF-tag",
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
      name: "update-lf-tag-expression",
      description:
        "Updates the name of the LF-Tag expression to the new description and expression body provided. Updating a LF-Tag expression immediately changes the permission boundaries of all existing LFTagPolicy permission grants that reference the given LF-Tag expression",
      options: [
        {
          name: "--name",
          description: "The name for the LF-Tag expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description with information about the saved LF-Tag expression",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "The LF-Tag expression body composed of one more LF-Tag key-value pairs",
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
      name: "update-lake-formation-identity-center-configuration",
      description: "Updates the IAM Identity Center connection parameters",
      options: [
        {
          name: "--catalog-id",
          description:
            "The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, view definitions, and other control information to manage your Lake Formation environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--share-recipients",
          description:
            "A list of Amazon Web Services account IDs or Amazon Web Services organization/organizational unit ARNs that are allowed to access to access data managed by Lake Formation.  If the ShareRecipients list includes valid values, then the resource share is updated with the principals you want to have access to the resources. If the ShareRecipients value is null, both the list of share recipients and the resource share remain unchanged. If the ShareRecipients value is an empty list, then the existing share recipients list will be cleared, and the resource share will be deleted",
          args: {
            name: "list",
          },
        },
        {
          name: "--application-status",
          description:
            "Allows to enable or disable the IAM Identity Center connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-filtering",
          description:
            "A list of the account IDs of Amazon Web Services accounts of third-party applications that are allowed to access data managed by Lake Formation",
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
      name: "update-resource",
      description:
        "Updates the data access role used for vending access to the given (registered) resource in Lake Formation",
      options: [
        {
          name: "--role-arn",
          description:
            "The new role to use for the given resource registered in Lake Formation",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description: "The resource ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--with-federation",
          description: "Whether or not the resource is a federated resource",
        },
        {
          name: "--no-with-federation",
          description: "Whether or not the resource is a federated resource",
        },
        {
          name: "--hybrid-access-enabled",
          description:
            "Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies",
        },
        {
          name: "--no-hybrid-access-enabled",
          description:
            "Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-table-objects",
      description:
        "Updates the manifest of Amazon S3 objects that make up the specified governed table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The catalog containing the governed table to update. Defaults to the caller\u2019s account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The database containing the governed table to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The governed table to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description: "The transaction at which to do the write",
          args: {
            name: "string",
          },
        },
        {
          name: "--write-operations",
          description:
            "A list of WriteOperation objects that define an object to add to or delete from the manifest for a governed table",
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
      name: "update-table-storage-optimizer",
      description:
        "Updates the configuration of the storage optimizers for a table",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "Name of the database where the table is present",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "Name of the table for which to enable the storage optimizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-optimizer-config",
          description: "Name of the configuration for the storage optimizer",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
