const completionSpec: Fig.Spec = {
  name: "qapps",
  description:
    "The Amazon Q Apps feature capability within Amazon Q Business allows web experience users to create lightweight, purpose-built AI apps to fulfill specific tasks from within their web experience. For example, users can create a Q App that exclusively generates marketing-related content to improve your marketing team's productivity or a Q App for writing customer emails and creating promotional content using a certain style of voice, tone, and branding. For more information on the capabilities, see Amazon Q Apps capabilities in the Amazon Q Business User Guide.  For an overview of the Amazon Q App APIs, see Overview of Amazon Q Apps API operations. For information about the IAM access control permissions you need to use the Amazon Q Apps API, see  IAM role for the Amazon Q Business web experience including Amazon Q Apps in the Amazon Q Business User Guide",
  subcommands: [
    {
      name: "associate-library-item-review",
      description:
        "Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier for the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--library-item-id",
          description:
            "The unique identifier of the library item to associate the review with",
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
      name: "associate-q-app-with-user",
      description:
        "This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a favorite for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description: "The ID of the Amazon Q App to associate with the user",
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
      name: "batch-create-category",
      description:
        "Creates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--categories",
          description: "The list of category objects to be created",
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
      name: "batch-delete-category",
      description:
        "Deletes Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--categories",
          description: "The list of IDs of the categories to be deleted",
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
      name: "batch-update-category",
      description:
        "Updates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--categories",
          description:
            "The list of categories to be updated with their new values",
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
      name: "create-library-item",
      description:
        "Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Amazon Q App to publish to the library",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description:
            "The version of the Amazon Q App to publish to the library",
          args: {
            name: "integer",
          },
        },
        {
          name: "--categories",
          description:
            "The categories to associate with the library item for easier discovery",
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
      name: "create-presigned-url",
      description:
        "Creates a presigned URL for an S3 POST operation to upload a file. You can use this URL to set a default file for a FileUploadCard in a Q App definition or to provide a file for a single Q App run. The scope parameter determines how the file will be used, either at the app definition level or the app session level",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--card-id",
          description:
            "The unique identifier of the card the file is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Q App the file is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-contents-sha256",
          description:
            "The Base64-encoded SHA-256 digest of the contents of the file to be uploaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description: "The name of the file to be uploaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Whether the file is associated with a Q App definition or a specific Q App session",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the Q App session the file is associated with, if applicable",
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
      name: "create-q-app",
      description:
        "Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description: "The title of the new Q App",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new Q App",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-definition",
          description:
            "The definition of the new Q App, specifying the cards and flow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Optional tags to associate with the new Q App",
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
      name: "delete-library-item",
      description:
        "Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--library-item-id",
          description: "The unique identifier of the library item to delete",
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
      name: "delete-q-app",
      description:
        "Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description: "The unique identifier of the Q App to delete",
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
      name: "describe-q-app-permissions",
      description:
        "Describes read permissions for a Amazon Q App in Amazon Q Business application environment instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Amazon Q App for which to retrieve permissions",
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
      name: "disassociate-library-item-review",
      description:
        "Removes a rating or review previously submitted by the user for a library item",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--library-item-id",
          description:
            "The unique identifier of the library item to remove the review from",
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
      name: "disassociate-q-app-from-user",
      description:
        "Disassociates a Q App from a user removing the user's access to run the Q App",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Q App to disassociate from the user",
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
      name: "export-q-app-session-data",
      description:
        "Exports the collected data of a Q App data collection session",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the Q App data collection session",
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
      name: "get-library-item",
      description:
        "Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--library-item-id",
          description: "The unique identifier of the library item to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Amazon Q App associated with the library item",
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
      name: "get-q-app",
      description:
        "Retrieves the full details of an Q App, including its definition specifying the cards and flow",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description: "The unique identifier of the Q App to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the Q App",
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
      name: "get-q-app-session",
      description:
        "Retrieves the current state and results for an active session of an Amazon Q App",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The unique identifier of the Q App session to retrieve",
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
      name: "get-q-app-session-metadata",
      description: "Retrieves the current configuration of a Q App session",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The unique identifier of the Q App session",
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
      name: "import-document",
      description:
        "Uploads a file that can then be used either as a default in a FileUploadCard from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--card-id",
          description:
            "The unique identifier of the card the file is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Q App the file is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-contents-base64",
          description: "The base64-encoded contents of the file to upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description: "The name of the file being uploaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "Whether the file is associated with a Q App definition or a specific Q App session",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the Q App session the file is associated with, if applicable",
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
      name: "list-categories",
      description:
        "Lists the categories of a Amazon Q Business application environment instance. For more information, see Custom labels for Amazon Q Apps",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
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
      name: "list-library-items",
      description:
        "Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of library items to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--category-id",
          description: "Optional category to filter the library items by",
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
      name: "list-q-app-session-data",
      description:
        "Lists the collected data of a Q App data collection session",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the Q App data collection session",
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
      name: "list-q-apps",
      description:
        "Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of Q Apps to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to request the next page of results",
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
      name: "list-tags-for-resource",
      description: "Lists the tags associated with an Amazon Q Apps resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose tags should be listed",
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
      name: "predict-q-app",
      description:
        "Generates an Amazon Q App definition based on either a conversation or a problem statement provided as input.The resulting app definition can be used to call CreateQApp. This API doesn't create Amazon Q Apps directly",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--options",
          description:
            "The input to generate the Q App definition from, either a conversation or problem statement",
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
      name: "start-q-app-session",
      description:
        "Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run.  Each Q App session will be condensed into a single conversation in the web experience",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Q App to start a session for",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-version",
          description: "The version of the Q App to use for the session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--initial-values",
          description:
            "Optional initial input values to provide for the Q App session",
          args: {
            name: "list",
          },
        },
        {
          name: "--session-id",
          description: "The unique identifier of the a Q App session",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Optional tags to associate with the new Q App session",
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
      name: "stop-q-app-session",
      description:
        "Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The unique identifier of the Q App session to stop",
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
      name: "tag-resource",
      description: "Associates tags with an Amazon Q Apps resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to associate with the resource",
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
      name: "untag-resource",
      description: "Disassociates tags from an Amazon Q Apps resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to disassociate the tag from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to disassociate from the resource",
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
      name: "update-library-item",
      description: "Updates the library item for an Amazon Q App",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--library-item-id",
          description: "The unique identifier of the library item to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            'The new status to set for the library item, such as "Published" or "Hidden"',
          args: {
            name: "string",
          },
        },
        {
          name: "--categories",
          description: "The new categories to associate with the library item",
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
      name: "update-library-item-metadata",
      description:
        "Updates the verification status of a library item for an Amazon Q App",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--library-item-id",
          description: "The unique identifier of the updated library item",
          args: {
            name: "string",
          },
        },
        {
          name: "--is-verified",
          description: "The verification status of the library item",
        },
        {
          name: "--no-is-verified",
          description: "The verification status of the library item",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-q-app",
      description:
        "Updates an existing Amazon Q App, allowing modifications to its title, description, and definition",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description: "The unique identifier of the Q App to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description: "The new title for the Q App",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the Q App",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-definition",
          description:
            "The new definition specifying the cards and flow for the Q App",
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
      name: "update-q-app-permissions",
      description:
        "Updates read permissions for a Amazon Q App in Amazon Q Business application environment instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-id",
          description:
            "The unique identifier of the Amazon Q App for which permissions are being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description: "The list of permissions to grant for the Amazon Q App",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description: "The list of permissions to revoke for the Amazon Q App",
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
      name: "update-q-app-session",
      description:
        "Updates the session for a given Q App sessionId. This is only valid when at least one card of the session is in the WAITING state. Data for each WAITING card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the WAITING status will be ignored",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the Q App session to provide input for",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description:
            "The input values to provide for the current state of the Q App session",
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
      name: "update-q-app-session-metadata",
      description:
        "Updates the configuration metadata of a session for a given Q App sessionId",
      options: [
        {
          name: "--instance-id",
          description:
            "The unique identifier of the Amazon Q Business application environment instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the Q App session to update configuration for",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-name",
          description: "The new name for the Q App session",
          args: {
            name: "string",
          },
        },
        {
          name: "--sharing-configuration",
          description:
            "The new sharing configuration for the Q App data collection session",
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
