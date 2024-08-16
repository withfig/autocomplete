const completionSpec: Fig.Spec = {
  name: "finspace-data",
  description: "The FinSpace APIs let you take actions inside the FinSpace",
  subcommands: [
    {
      name: "associate-user-to-permission-group",
      description:
        "Adds a user to a permission group to grant permissions for actions a user can perform in FinSpace",
      options: [
        {
          name: "--permission-group-id",
          description: "The unique identifier for the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The unique identifier for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-changeset",
      description: "Creates a new Changeset in a FinSpace Dataset",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description:
            "The unique identifier for the FinSpace Dataset where the Changeset will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--change-type",
          description:
            "The option to indicate how a Changeset will be applied to a Dataset.    REPLACE \u2013 Changeset will be considered as a replacement to all prior loaded Changesets.    APPEND \u2013 Changeset will be considered as an addition to the end of all prior loaded Changesets.    MODIFY \u2013 Changeset is considered as a replacement to a specific prior ingested Changeset",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-params",
          description:
            'Options that define the location of the data being ingested (s3SourcePath) and the source of the changeset (sourceType). Both s3SourcePath and sourceType are required attributes. Here is an example of how you could specify the sourceParams:   "sourceParams": { "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv", "sourceType": "S3" }   The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see Loading data from an Amazon S3 Bucket using the FinSpace API section',
          args: {
            name: "map",
          },
        },
        {
          name: "--format-params",
          description:
            'Options that define the structure of the source file(s) including the format type (formatType), header row (withHeader), data separation character (separator) and the type of compression (compression).   formatType is a required attribute and can have the following values:     PARQUET \u2013 Parquet source file format.    CSV \u2013 CSV source file format.    JSON \u2013 JSON source file format.    XML \u2013 XML source file format.   Here is an example of how you could specify the formatParams:   "formatParams": { "formatType": "CSV", "withHeader": "true", "separator": ",", "compression":"None" }   Note that if you only provide formatType as CSV, the rest of the attributes will automatically default to CSV values as following:   { "withHeader": "true", "separator": "," }    For more information about supported file formats, see Supported Data Types and File Formats in the FinSpace User Guide',
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
    {
      name: "create-data-view",
      description: "Creates a Dataview for a Dataset",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description:
            "The unique Dataset identifier that is used to create a Dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-update",
          description:
            "Flag to indicate Dataview should be updated automatically",
        },
        {
          name: "--no-auto-update",
          description:
            "Flag to indicate Dataview should be updated automatically",
        },
        {
          name: "--sort-columns",
          description: "Columns to be used for sorting the data",
          args: {
            name: "list",
          },
        },
        {
          name: "--partition-columns",
          description: "Ordered set of column names used to partition data",
          args: {
            name: "list",
          },
        },
        {
          name: "--as-of-timestamp",
          description:
            "Beginning time to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000",
          args: {
            name: "long",
          },
        },
        {
          name: "--destination-type-params",
          description:
            "Options that define the destination type for the Dataview",
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
      name: "create-dataset",
      description: "Creates a new FinSpace Dataset",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-title",
          description: "Display title for a FinSpace Dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--kind",
          description:
            "The format in which Dataset data is structured.    TABULAR \u2013 Data is structured in a tabular format.    NON_TABULAR \u2013 Data is structured in a non-tabular format",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-description",
          description: "Description of a Dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--owner-info",
          description: "Contact information for a Dataset owner",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permission-group-params",
          description: "Permission group parameters for Dataset permissions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--alias",
          description: "The unique resource identifier for a Dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-definition",
          description: "Definition for a schema on a tabular Dataset",
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
      name: "create-permission-group",
      description:
        "Creates a group of permissions for various actions that a user can perform in FinSpace",
      options: [
        {
          name: "--name",
          description: "The name of the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description for the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-permissions",
          description:
            "The option to indicate FinSpace application permissions that are granted to a specific group.  When assigning application permissions, be aware that the permission ManageUsersAndGroups allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.     CreateDataset \u2013 Group members can create new datasets.    ManageClusters \u2013 Group members can manage Apache Spark clusters from FinSpace notebooks.    ManageUsersAndGroups \u2013 Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.    ManageAttributeSets \u2013 Group members can manage attribute sets.    ViewAuditData \u2013 Group members can view audit data.    AccessNotebooks \u2013 Group members will have access to FinSpace notebooks.    GetTemporaryCredentials \u2013 Group members can get temporary API credentials",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "create-user",
      description: "Creates a new user in FinSpace",
      options: [
        {
          name: "--email-address",
          description:
            "The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The option to indicate the type of user. Use one of the following options to specify this parameter:    SUPER_USER \u2013 A user with permission to all the functionality and data in FinSpace.    APP_USER \u2013 A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "The first name of the user that you want to register",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "The last name of the user that you want to register",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-access",
          description:
            "The option to indicate whether the user can use the GetProgrammaticAccessCredentials API to obtain credentials that can then be used to access other FinSpace Data API operations.    ENABLED \u2013 The user has permissions to use the APIs.    DISABLED \u2013 The user does not have permissions to use any APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-access-principal-arn",
          description:
            "The ARN identifier of an AWS user or role that is allowed to call the GetProgrammaticAccessCredentials API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      description: "Deletes a FinSpace Dataset",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description: "The unique identifier of the Dataset to be deleted",
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
      name: "delete-permission-group",
      description: "Deletes a permission group. This action is irreversible",
      options: [
        {
          name: "--permission-group-id",
          description:
            "The unique identifier for the permission group that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "disable-user",
      description:
        "Denies access to the FinSpace web application and API for the specified user",
      options: [
        {
          name: "--user-id",
          description:
            "The unique identifier for the user that you want to deactivate",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "disassociate-user-from-permission-group",
      description: "Removes a user from a permission group",
      options: [
        {
          name: "--permission-group-id",
          description: "The unique identifier for the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The unique identifier for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "enable-user",
      description:
        "Allows the specified user to access the FinSpace web application and API",
      options: [
        {
          name: "--user-id",
          description:
            "The unique identifier for the user that you want to activate",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "get-changeset",
      description: "Get information about a Changeset",
      options: [
        {
          name: "--dataset-id",
          description:
            "The unique identifier for the FinSpace Dataset where the Changeset is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--changeset-id",
          description:
            "The unique identifier of the Changeset for which to get data",
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
      name: "get-data-view",
      description: "Gets information about a Dataview",
      options: [
        {
          name: "--data-view-id",
          description: "The unique identifier for the Dataview",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description:
            "The unique identifier for the Dataset used in the Dataview",
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
      name: "get-dataset",
      description: "Returns information about a Dataset",
      options: [
        {
          name: "--dataset-id",
          description: "The unique identifier for a Dataset",
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
      name: "get-external-data-view-access-details",
      description:
        "Returns the credentials to access the external Dataview from an S3 location. To call this API:   You must retrieve the programmatic credentials.   You must be a member of a FinSpace user group, where the dataset that you want to access has Read Dataset Data permissions",
      options: [
        {
          name: "--data-view-id",
          description:
            "The unique identifier for the Dataview that you want to access",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description: "The unique identifier for the Dataset",
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
      name: "get-permission-group",
      description: "Retrieves the details of a specific permission group",
      options: [
        {
          name: "--permission-group-id",
          description: "The unique identifier for the permission group",
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
      name: "get-programmatic-access-credentials",
      description:
        "Request programmatic credentials to use with FinSpace SDK. For more information, see Step 2. Access credentials programmatically using IAM access key id and secret access key",
      options: [
        {
          name: "--duration-in-minutes",
          description:
            "The time duration in which the credentials remain valid",
          args: {
            name: "long",
          },
        },
        {
          name: "--environment-id",
          description: "The FinSpace environment identifier",
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
      name: "get-user",
      description: "Retrieves details for a specific user",
      options: [
        {
          name: "--user-id",
          description: "The unique identifier of the user to get data for",
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
      name: "get-working-location",
      description:
        "A temporary Amazon S3 location, where you can copy your files from a source location to stage or use as a scratch space in FinSpace notebook",
      options: [
        {
          name: "--location-type",
          description:
            "Specify the type of the working location.    SAGEMAKER \u2013 Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.    INGESTION \u2013 Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation",
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
      name: "list-changesets",
      description: "Lists the FinSpace Changesets for a Dataset",
      options: [
        {
          name: "--dataset-id",
          description:
            "The unique identifier for the FinSpace Dataset to which the Changeset belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
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
      name: "list-data-views",
      description: "Lists all available Dataviews for a Dataset",
      options: [
        {
          name: "--dataset-id",
          description:
            "The unique identifier of the Dataset for which to retrieve Dataviews",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
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
      name: "list-datasets",
      description: "Lists all of the active Datasets that a user has access to",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
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
      name: "list-permission-groups",
      description: "Lists all available permission groups in FinSpace",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
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
      name: "list-permission-groups-by-user",
      description:
        "Lists all the permission groups that are associated with a specific user",
      options: [
        {
          name: "--user-id",
          description: "The unique identifier for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
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
      name: "list-users",
      description: "Lists all available users in FinSpace",
      options: [
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
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
      name: "list-users-by-permission-group",
      description:
        "Lists details of all the users in a specific permission group",
      options: [
        {
          name: "--permission-group-id",
          description: "The unique identifier for the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where a results page should begin",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results per page",
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
      name: "reset-user-password",
      description:
        "Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user",
      options: [
        {
          name: "--user-id",
          description:
            "The unique identifier of the user that a temporary password is requested for",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-changeset",
      description: "Updates a FinSpace Changeset",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description:
            "The unique identifier for the FinSpace Dataset in which the Changeset is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--changeset-id",
          description: "The unique identifier for the Changeset to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-params",
          description:
            'Options that define the location of the data being ingested (s3SourcePath) and the source of the changeset (sourceType). Both s3SourcePath and sourceType are required attributes. Here is an example of how you could specify the sourceParams:   "sourceParams": { "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv", "sourceType": "S3" }   The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see Loading data from an Amazon S3 Bucket using the FinSpace APIsection',
          args: {
            name: "map",
          },
        },
        {
          name: "--format-params",
          description:
            'Options that define the structure of the source file(s) including the format type (formatType), header row (withHeader), data separation character (separator) and the type of compression (compression).   formatType is a required attribute and can have the following values:     PARQUET \u2013 Parquet source file format.    CSV \u2013 CSV source file format.    JSON \u2013 JSON source file format.    XML \u2013 XML source file format.   Here is an example of how you could specify the formatParams:   "formatParams": { "formatType": "CSV", "withHeader": "true", "separator": ",", "compression":"None" }   Note that if you only provide formatType as CSV, the rest of the attributes will automatically default to CSV values as following:   { "withHeader": "true", "separator": "," }    For more information about supported file formats, see Supported Data Types and File Formats in the FinSpace User Guide',
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
    {
      name: "update-dataset",
      description: "Updates a FinSpace Dataset",
      options: [
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description: "The unique identifier for the Dataset to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-title",
          description: "A display title for the Dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--kind",
          description:
            "The format in which the Dataset data is structured.    TABULAR \u2013 Data is structured in a tabular format.    NON_TABULAR \u2013 Data is structured in a non-tabular format",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-description",
          description: "A description for the Dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The unique resource identifier for a Dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-definition",
          description: "Definition for a schema on a tabular Dataset",
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
      name: "update-permission-group",
      description:
        "Modifies the details of a permission group. You cannot modify a permissionGroupID",
      options: [
        {
          name: "--permission-group-id",
          description:
            "The unique identifier for the permission group to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A brief description for the permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-permissions",
          description:
            "The permissions that are granted to a specific group for accessing the FinSpace application.  When assigning application permissions, be aware that the permission ManageUsersAndGroups allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.     CreateDataset \u2013 Group members can create new datasets.    ManageClusters \u2013 Group members can manage Apache Spark clusters from FinSpace notebooks.    ManageUsersAndGroups \u2013 Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.    ManageAttributeSets \u2013 Group members can manage attribute sets.    ViewAuditData \u2013 Group members can view audit data.    AccessNotebooks \u2013 Group members will have access to FinSpace notebooks.    GetTemporaryCredentials \u2013 Group members can get temporary API credentials",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
      name: "update-user",
      description:
        "Modifies the details of the specified user. You cannot update the userId for a user",
      options: [
        {
          name: "--user-id",
          description:
            "The unique identifier for the user that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The option to indicate the type of user.    SUPER_USER\u2013 A user with permission to all the functionality and data in FinSpace.    APP_USER \u2013 A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "The first name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "The last name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-access",
          description:
            "The option to indicate whether the user can use the GetProgrammaticAccessCredentials API to obtain credentials that can then be used to access other FinSpace Data API operations.    ENABLED \u2013 The user has permissions to use the APIs.    DISABLED \u2013 The user does not have permissions to use any APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-access-principal-arn",
          description:
            "The ARN identifier of an AWS user or role that is allowed to call the GetProgrammaticAccessCredentials API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that ensures idempotency. This token expires in 10 minutes",
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
